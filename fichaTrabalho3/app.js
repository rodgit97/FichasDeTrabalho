const started = () => {
  console.log("download started");
};

const finished = () => {
  console.log("download finished");
};

const update = (percent) => {
  console.log(`${percent}% downloaded`);
};

function performanceDownload(start, update, complete) {
    start();
    for (let i = 1; i <= 100; i++) {
        update(i);
    }
    complete();
}
        
performanceDownload(started, update, finished);


//---------------------------------------------------
