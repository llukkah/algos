//used underscore and node-fetch

const fetch = require('node-fetch');
let _ = require('underscore');
let url = "https://www.olo.com/pizzas.json";
let settings = { method: "Get" };


// function rankingsList(pizzasOrdered) {
//   for (let i = 0; i < pizzasOrdered.length; i += 1) {
//     console.log(`${i + 1}: ${pizzasOrdered[i]}`);
// }}

fetch(url, settings)
    .then(res => res.json())
    .then((jsonPizza) => {
        let toppings = jsonPizza
        let pizzasOrdered = _.chain(toppings)
          .map(function(toppings) {
            return toppings.toppings;
            })
          .countBy(function(toppings) {
            return toppings;
            })
          .map(function(value, key) {
            return {pizzaToppings: key, amountOrdered: value};
            })
          .sortBy('amountOrdered')
          .reverse()
          .slice(0, 20)
          .value()
          console.log(pizzasOrdered)
    })
    .catch(() => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
            return response.json();
    });
    //////////////////////////////
    //////////////////////////////
    //////////// OUTPUT //////////
    //////////////////////////////
    //////////////////////////////

    ///OUTPUT
    [
        { pizzaToppings: 'pepperoni', amountOrdered: 4616 },
        { pizzaToppings: 'mozzarella cheese', amountOrdered: 1014 },
        { pizzaToppings: 'four cheese', amountOrdered: 956 },
        { pizzaToppings: 'bacon', amountOrdered: 732 },
        { pizzaToppings: 'beef', amountOrdered: 623 },
        { pizzaToppings: 'sausage', amountOrdered: 402 },
        { pizzaToppings: 'italian sausage', amountOrdered: 361 },
        { pizzaToppings: 'chicken', amountOrdered: 229 },
        { pizzaToppings: 'ham', amountOrdered: 165 },
        { pizzaToppings: 'mushrooms', amountOrdered: 159 },
        { pizzaToppings: 'black olives', amountOrdered: 117 },
        { pizzaToppings: 'pepperoni,four cheese', amountOrdered: 103 },
        { pizzaToppings: 'alredo sauce', amountOrdered: 101 },
        { pizzaToppings: 'four cheese,pepperoni', amountOrdered: 100 },
        { pizzaToppings: 'mozzarella cheese,pepperoni', amountOrdered: 96 },
        { pizzaToppings: 'cheddar cheese', amountOrdered: 95 },
        { pizzaToppings: 'pineapple', amountOrdered: 79 },
        { pizzaToppings: 'pepperoni,beef', amountOrdered: 67 },
        { pizzaToppings: 'pepperoni,bacon', amountOrdered: 63 },
        { pizzaToppings: 'pepperoni,mozzarella cheese', amountOrdered: 59 }
      ]
    //////////////////////////////
    //////////////////////////////
    //////////////////////////////
    //////////////////////////////
    //////////////////////////////