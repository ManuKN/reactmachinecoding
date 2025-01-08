import React from 'react';

function DebouncingRateLimiter() {
  class ApiRateLimiter {
    constructor(limit, interval) {
      this.limit = limit; // Max number of requests
      this.interval = interval; // Time window in milliseconds
      this.calls = 0; // Number of calls made
      this.timer = null; // Timer for debouncing
    }

    // Debounce function
    debounce(func, delay) {
      return (...args) => {
        clearTimeout(this.timer); // Clear the previous timer
        this.timer = setTimeout(() => func.apply(this, args), delay); // Set a new timer
      };
    }

    // Rate limiting function
    rateLimit(func) {
      return (...args) => {
        if (this.calls < this.limit) {
          this.calls++;
          func.apply(this, args); // Call the function
        } else {
          console.log('Rate limit exceeded, please try again later.');
        }
        // Reset the rate limit counter after the specified interval
        setTimeout(() => {
          this.calls = 0;
        }, this.interval);
      };
    }

    // Combine debounce and rate limiting
    execute(func, delay) {
      const debouncedFunc = this.debounce(func, delay);
      return this.rateLimit(debouncedFunc);
    }
  }

  // Usage example:
  const handleDebouncing = () => {
    const apiRateLimiter = new ApiRateLimiter(3, 5000); // Allow 3 requests per 5 seconds

    // Simulating an API function that we want to debounce and rate limit
    function fetchApiData(query) {
      console.log(`API called with query: ${query}`);
    }
    // Combining debounce with rate limit
    const debouncedAndLimitedFetch = apiRateLimiter.execute(fetchApiData, 1000);
    debouncedAndLimitedFetch('query1'); // This will be debounced
    debouncedAndLimitedFetch('query2'); // This will be debounced
    debouncedAndLimitedFetch('query3'); // This will be debounced
    debouncedAndLimitedFetch('query4'); // This will be ignored due to rate limit
    debouncedAndLimitedFetch('query5'); // This will be ignored due to rate limit
  };

  // Test by triggering the function multiple times

  return (
    <div>
      <button onClick={() => handleDebouncing()}>nkn deboucing</button>
    </div>
  );
}

export default DebouncingRateLimiter;
