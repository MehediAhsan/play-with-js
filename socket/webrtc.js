let localStream;
let peerConnection;
let dataChannel;
const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

async function startCamera() {
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  document.getElementById("localVideo").srcObject = localStream;
}

async function createPeer(isOfferer) {
  peerConnection = new RTCPeerConnection(config);

  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  if (isOfferer) {
    dataChannel = peerConnection.createDataChannel("chat");
    setupDataChannel();
  } else {
    peerConnection.ondatachannel = (event) => {
      dataChannel = event.channel;
      setupDataChannel();
    };
  }

  peerConnection.onicecandidate = (e) => {
    if (e.candidate) {
      document.getElementById("out").value = JSON.stringify(
        peerConnection.localDescription
      );
    }
  };

  peerConnection.ontrack = (event) => {
    document.getElementById("remoteVideo").srcObject = event.streams[0];
  };
}

function setupDataChannel() {
  dataChannel.onopen = () => console.log("Data channel open");
  dataChannel.onmessage = (e) => {
    if (typeof e.data === "string") {
      if (e.data.startsWith("FILE:")) {
        const [meta, content] = e.data.split("|");
        const filename = meta.split(":")[1];
        const blob = new Blob([content], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        appendChat(
          `📁 File received: <a href="${url}" download="${filename}">${filename}</a>`
        );
      } else {
        appendChat(`Peer: ${e.data}`);
      }
    }
  };
}

function appendChat(msg) {
  const log = document.getElementById("chatLog");
  log.value += msg + "\n";
}

async function createOffer() {
  await createPeer(true);
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  document.getElementById("out").value = JSON.stringify(
    peerConnection.localDescription
  );
}

async function createAnswer() {
  await createPeer(false);
  const remoteDesc = new RTCSessionDescription(
    JSON.parse(document.getElementById("signal").value)
  );
  await peerConnection.setRemoteDescription(remoteDesc);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);
  document.getElementById("out").value = JSON.stringify(
    peerConnection.localDescription
  );
}

async function addRemoteDesc() {
  const remoteDesc = new RTCSessionDescription(
    JSON.parse(document.getElementById("signal").value)
  );
  await peerConnection.setRemoteDescription(remoteDesc);
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const message = input.value;
  if (dataChannel && message) {
    dataChannel.send(message);
    appendChat(`You: ${message}`);
    input.value = "";
  }
}

function sendFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (dataChannel && file) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      dataChannel.send(`FILE:${file.name}|${base64}`);
      appendChat(`📤 You sent file: ${file.name}`);
    };
    reader.readAsDataURL(file);
  }
}
