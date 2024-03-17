// Define a laptop object with properties for make, model, and year,
// along with a method called describe that logs a description of the laptop.

let laptop = {
  make: "hp",
  model: "HP Spectre x360",
  year: 2022,
  describe: function () {
    console.log(
      `Introducing the sleek and powerful ${this.make},${this.model},${this.year} the perfect blend of style and performance."`
    );
  },
};

laptop.describe();

// Define an array of laptop objects containing information about different laptop models.
// Use array destructuring to extract the first two laptops from the array and assign them to variables.
// Log the details of the first and second laptops.

let laptops = [
  { make: "dell", model: "XPR 15", year: 2020 },
  { make: "Apple", model: "MacBook Pro", year: 2021 },
  { make: "HP", model: "sepctre x360", year: 2022 },
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

// Combining two sets of prices and sorting them in ascending order

let pricesSet1 = [1300, 1600, 1220];
let pricesSet2 = [2100, 4100, 1400];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
