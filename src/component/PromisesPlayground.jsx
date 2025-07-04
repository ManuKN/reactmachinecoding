import React from 'react';

function PromisesPlayground() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise1 successfull');
    }, 3000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise2 successfull');
    }, 3000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise3 successfull');
    }, 2000);
  });


  const promises = [promise1, promise2, promise3];

  const promiseAllTest = () => {
    Promise.all(promises)
      .then((results) => {
        console.log(results);
      })
      .finally(() => {
        console.log('nkn finally executre agbeku aste');
      });
  };

  const promisyingCallback = async () => {
    try {
      const makethings = await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('data coming');
        }, 3000);
      });
      console.log(makethings);
    } catch (err) {
      console.log('Error :', err);
    }
  };

  const Nasynctasks = async () => {
    const arr = [1, 2, 3, 4, 5];
    try {
      let final = [];
      for (let elements of promises) {
        const result = await elements;
        final.push(result);
      }
      console.log(final);

      for (let i = 0; i < arr.length; i++) {
        let benki = await new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(`series Execution ${i + 1}`);
            resolve(`Result of task ${i + 1}`);
          }, 1000);
        });
        final.push(benki);
      }
      return final;
    } catch (err) {
      console.log(err);
    }
  };

  const parallelNasychPromises = async (n) => {
    const tasks = Array.from({ length: n }, (_, i) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve(`Executing task: ${i + 1}`);
          } else {
            reject(`Rejected task: ${i + 1}`);
          }
        }, Math.random() * 2000);
      }).catch((err) => console.log(err))
    );
    console.log('nkn', tasks);
    const results = await Promise.all(tasks);
    return results;
  };

  const NasychTasksRacePromise = async (n) => {
    let tasks = Array.from(
      { length: n },
      (_, i) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.5) {
              resolve(`First promise to finish , ${i + 1}`);
            } else {
              reject(`rejected promises, ${i + 1}`);
            }
          }, Math.random() * 2000);
        })
    );
    try {
      const result = await Promise.race(tasks); // Resolves or rejects the first settled promise
      console.log('Final result:', result);
    } catch (error) {
      console.log('Final error:', error); // Catch rejection of the first promise
    }
  };
  let TimeOut;

  const customSetTimeOut = (callback, time) => {
    const startTime = Date.now();
    TimeOut = setInterval(() => {
      if (Date.now() - startTime >= time) {
        callback();
        clearInterval(TimeOut);
      }
    }, 1);
  };

  let intervalID;
  const customSetInterval = (callback, interval) => {
    const execute = () => {
      callback();
      intervalID = setTimeout(execute, interval);
    };
    setTimeout(execute, interval);
    return () => {
      clearTimeout(intervalID);
    };
  };

  const StopINterval = () => {
    clearTimeout(intervalID);
    clearInterval(TimeOut);
    console.log('Cleared interval');
  };

  const promisify = (callbackfucnction) => {
    return function (...args) {
      return new Promise((resolve, reject) => {
        callbackfucnction(...args, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
  };

  function readFile(filepath, callback) {
    setTimeout(() => {
      if (!filepath) {
        callback('File path is missing', null);
      } else {
        callback(null, `File path is ${filepath}`);
      }
    }, 1000);
  }

  const handlepromisify = () => {
    const primifyedreadFile = promisify(readFile);
    primifyedreadFile('example.ext')
      .then((content) => {
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
    primifyedreadFile(null)
      .then((content) => {
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function retryOperation(operation, retries, delay) {
    return new Promise((resolve, reject) => {
      const attemp = (retriesLeft) => {
        operation()
          .then(resolve)
          .catch((err) => {
            if (retriesLeft > 0) {
              console.log(`Retrying... Attempt left: ${retriesLeft}`);
              setTimeout(() => attemp(retriesLeft - 1), delay);
            } else {
              reject(err);
            }
          });
      };
      attemp(retries);
    });
  }

  function unreliableOperation() {
    return new Promise((resolve, reject) => {
      const sucess = Math.random() > 0.5;
      if (sucess) {
        console.log('Operation Succesded');
        resolve('Operation Succesded');
      } else {
        console.log('Operation Failed');
        reject('Operation Failed');
      }
    });
  }

  const autoRetry = () => {
    retryOperation(unreliableOperation, 5, 1000);
    const timerId = setTimeout(() => {
      console.log('This runs after 2 seconds!');
    }, 2000);

    console.log('Timer ID:', timerId);
  };

  // const createpromise = () => {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('custom promise executed');
  //     }, 2000);
  //   });
  //   promise.then((res) => console.log(res)).catch((err) => console.log(err));
  // };

  return (
    <div>
      <button
        onClick={() =>
          customSetTimeOut(() => console.log('Custom setTimeOut'), 3000)
        }
      >
        Create custom promises
      </button>

      <button onClick={() => autoRetry()}>promisify</button>
    </div>
  );
}

export default PromisesPlayground;
