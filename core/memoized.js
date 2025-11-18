const memo = (fn) => {
  let cache = new Map();
  return (...args) => {
    let key = args.toString();
    if(cache.has(key)){
      return cache.get(key);
    } 
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}

const fib = memo(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

console.log(fib(50));