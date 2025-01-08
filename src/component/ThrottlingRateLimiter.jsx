import React from 'react';

function ThrottlingRateLimiter() {
  class ThrottlingRateLimiter {
    constructor(ratelimit, interval, throttlingInterval) {
      this.rateLimit = ratelimit;
      this.interval = interval;
      this.throttlingInterval = throttlingInterval;
      this.calls = 0;
      this.lastExecuted = 0;
      this.timer = null;
    }

    throttle(func) {
      return (...args) => {
        const now = Date.now();
        if (now - this.lastExecuted >= this.throttlingInterval) {
          this.lastExecuted = now;
          func(...args);
        }
      };
    }

    ratelimit(func) {
      return (...args) => {
        if (this.calls < this.rateLimit) {
          this.calls++;
          func(...args);
        } else {
          console.log('rate Limit Exceeded, Try again later.');
        }
        setTimeout(() => {
          this.calls = 0;
        }, this.interval);
      };
    }

    execute(func) {
      const throlledFunc = this.throttle(func);
      return this.ratelimit(throlledFunc);
    }
  }

  function fetchAPI(query) {
    setTimeout(() => {
      console.log(`API call for query: ${query}`);
    }, 200);
  }

  const handleThrottling = () => {
    const limiter = new ThrottlingRateLimiter(5, 60000, 1000);
    const throttledAndLimitedfetch = limiter.execute(fetchAPI);
    setInterval(() => {
      throttledAndLimitedfetch('query');
    }, 2000);
  };

  return (
    <div>
      <button onClick={() => handleThrottling()}>nkn Throttling</button>
    </div>
  );
}

export default ThrottlingRateLimiter;
