let doublePrices = Object.fromEntries (
    Object.entries(prices).map( entry => [entry[0], entry[1] * 2]
    )
);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

let sumedSalaries = Object.values(
   salaries.reduce((a,b) => a + b, 0)
);

alert(sumedSalaries);

function sumedSalaries(salaries) {
    return Object.values(salaries).reduce((a,b) => a + b, 0)
}