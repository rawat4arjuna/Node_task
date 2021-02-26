const prompt = require("prompt-sync")();
const total_items_quantity = {
  hot_water: 500,
  hot_milk: 500,
  ginger_syrup: 100,
  sugar_syrup: 100,
  tea_leaves_syrup: 100,
};
const hot_tea = {
  hot_water: 200,
  hot_milk: 100,
  ginger_syrup: 10,
  sugar_syrup: 10,
  tea_leaves_syrup: 30,
};

const hot_coffee = {
  hot_water: 100,
  ginger_syrup: 30,
  hot_milk: 400,
  sugar_syrup: 50,
  tea_leaves_syrup: 30,
};
const black_tea = {
  hot_water: 300,
  ginger_syrup: 30,
  sugar_syrup: 50,
  tea_leaves_syrup: 30,
};
const green_tea = {
  hot_water: 100,
  ginger_syrup: 30,
  sugar_syrup: 50,
  green_mixture: 30,
};
//functions for Refilling the ingredients
const Refill = () => {
  console.log("all the ingredients");
  for (const [key, value] of Object.entries(total_items_quantity)) {
    console.log(key, "-->", value);
  }
  console.log("Press 0 to Go Back");
  console.log("Press 1 to refill Hot Water");
  console.log("Press 2 to refill Hot Milk");
  console.log("Press 3 to refill ginger_syrup");
  console.log("Press 4 to refill sugar_syrup");
  console.log("Press 5 to refill tea_leaves_syrup");
  const task = prompt("------------->");
  switch (task) {
    case "1":
      total_items_quantity["hot_water"] = 500;
      Refill();
      break;
    case "2":
      total_items_quantity["hot_milk"] = 500;
      Refill();
      break;
    case "3":
      total_items_quantity["ginger_syrup"] = 100;
      Refill();
      break;

    case "4":
      total_items_quantity["sugar_syrup"] = 100;
      Refill();
      break;
    case "5":
      total_items_quantity["tea_leaves_syrup"] = 100;
      Refill();
      break;
    case "0":
      startMachine();
      break;
    default:
      console.error("wrong Input Please give Correct input\n\n\n");
      Refill();
  }
};
// preparing and checking the recipe ingredients
const prepareRecipe = (val) => {
  let insufficient = false;
  for (const [key, value] of Object.entries(val)) {
    if (
      total_items_quantity[key] === undefined ||
      total_items_quantity[key] === null
    ) {
      console.log(
        "item Cannot be Prepared because " + key + "is not available \n"
      );
      insufficient = true;
    }
    if (total_items_quantity[key] < value) {
      insufficient = true;
      console.log(
        "Insufficent amount of ingredients",
        key,
        "\n go to main menu and refill the ingredients\n"
      );
    }
    if (total_items_quantity[key] > value) {
      total_items_quantity[key] -= value;
    }
  }
  if (!insufficient) {
    console.log("---------------Drink Prepared-----------\n\n\n");
  }
  checkTask("1");
};
// function for Recipe Brewing 
const brewRecipe = (task) => {
  switch (task) {
    case "1":
      prepareRecipe(hot_tea);
      break;
    case "2":
      prepareRecipe(hot_coffee);
      break;
    case "3":
      prepareRecipe(black_tea);
      break;
    case "4":
      prepareRecipe(green_tea);
      break;
    case "0":
      startMachine();
      break;
    default:
      console.error("wrong Input Please give Correct input\n\n\n");
      checkTask("1");
  }
};
//Brew refill function call on input
const checkTask = (task) => {
  switch (task) {
    case "1":
      console.log("----------------Brewing---------------------");
      console.log(
        "Press 0 to Main Menu \n Press 1 to brew Hot Tea \n Press 2 to brew Hot Coffee " +
          "\n Press 3 to brew Black Tea \n Press 4 to brew Green tea \n "
      );
      const task = prompt("------------->");
      brewRecipe(task);
      break;
    case "2":
      console.log("----------------Refill---------------------\n");
      Refill();
      break;
    case "0":
      break;
    default:
      console.error("wrong Input Please give Correct input\n\n\n");
      startMachine();
  }
};
// starting function of the machine to brew refill and exit
const startMachine = () => {
  console.log(
    "Coffee Machine \n\n press 0 to exit \n Press 1 to Brew \n press 2 to refill \n "
  );
  const task = prompt("------------->");
  checkTask(task);
};
startMachine();
