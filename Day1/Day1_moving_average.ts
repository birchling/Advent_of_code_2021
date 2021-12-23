export {};
const depthReadingsString = await Deno.readTextFile("./input.txt");

const depthReadings = depthReadingsString.split("\n");

let depthIncreases = 0;

const firstWindow = new Array<number>(3);
const secondWindow = new Array<number>(3);
let firstWindowSum = 0;
let secondWindowSum = 0;

for (let index = 0; index <= depthReadings.length; index++) {
    parseInt(depthReadings[index])
    if (index == 0) {
        firstWindow[0] = parseInt(depthReadings[index]);
    }
    else {
        firstWindow[index % 3] = parseInt(depthReadings[index]);
        secondWindow[index % 3] = parseInt(depthReadings[index-1]);
    }
    if(index > 2)
    {
        firstWindowSum = firstWindow.reduce((a, b) => a + b, 0);
        secondWindowSum = secondWindow.reduce((a, b) => a + b, 0);
    }
    if (secondWindowSum < firstWindowSum) {
        depthIncreases++;
    }
}

console.log(depthIncreases);

