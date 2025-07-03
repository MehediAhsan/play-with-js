class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const listeners = this.events.get(eventName);
    listeners.push(callback);
    return {
      unsubscribe: () => {
        const i = listeners.indexOf(callback);
        if (i !== -1) listeners.splice(i, 1);
      },
    };
  }
  emit(eventName, args = []) {
    const callbacks = this.events.get(eventName);
    if (!callbacks) return [];
    return callbacks.map((fn) => fn(...args));
  }
}

const emitter = new EventEmitter();
function onClickCallback(userName) {
  console.log(`Hi ${userName}`);
}
const sub = emitter.subscribe("onClick", onClickCallback);
emitter.emit("onClick", ["Mehedi"]);
sub.unsubscribe();