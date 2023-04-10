const startExecTime = new Date().getTime;
for (let i = 0; i < 5000000000; i++) {
    const currentExecTime = new Date().getTime();
    if(currentExecTime - startExecTime > 1000) {
        console.log(`execution time reached 10 seconds: on ${i} iteration`);
        Process.exit(1);
    }


    console.log(new Date());
    
}
const finishExecTime = new Date().getTime();
console.log(`Execution Time:`, (finishExecTime - startExecTime)) 