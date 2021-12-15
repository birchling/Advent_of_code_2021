const depthReadingsString = await Deno.readTextFile("./input.txt");

const depthReadings = depthReadingsString.split("\n");

let previousReading = Number.MAX_SAFE_INTEGER;
let depthIncreases = 0;

for (const depth of depthReadings) {
    //console.log(depth);
    if (parseInt(depth) > previousReading) {
        depthIncreases++;
    }
    previousReading = parseInt(depth);
}

console.log(depthIncreases);

