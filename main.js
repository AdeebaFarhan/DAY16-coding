// Define a laptop object with properties for make, model, and year,
// along with a method called describe that logs a description of the laptop.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop = {
    make: "hp",
    model: "HP Spectre x360",
    year: 2022,
    describe: function () {
        console.log("Introducing the sleek and powerful ".concat(this.make, ",").concat(this.model, ",").concat(this.year, " the perfect blend of style and performance.\""));
    }
};
laptop.describe();
// Define an array of laptop objects containing information about different laptop models.
// Use array destructuring to extract the first two laptops from the array and assign them to variables.
// Log the details of the first and second laptops.
var laptops = [
    { make: "dell", model: "XPR 15", year: 2020 },
    { make: "Apple", model: "MacBook Pro", year: 2021 },
    { make: "HP", model: "sepctre x360", year: 2022 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
//let pricesSet1 = [1200, 1500, 1100];
//let pricesSet2 = [1000, 1300, 1600];
//let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
//console.log(combinedPrices);
//let pricesSet1 = [1300,1600,1220];
///let pricesSet2 = [2100,4100,1400];
//let combinedPrices = [...pricesSet1 , ...pricesSet2].sort((a , b)) => a - b);
//console.log(combinedPrices);
var pricesSet1 = [1300, 1600, 1220];
var pricesSet2 = [2100, 4100, 1400];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
