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
//function to refill if its not full
const refillBlock=(tag,val)=>{
  if(total_items_quantity[tag]===val)
  {
    console.error("\x1b[31m","can't Refill the ingredients because it  is full \n\n\n");
    Refill();
  }
  else
  {
    total_items_quantity[tag] = val;
    console.log("\x1b[32m","---------------Refilled sucessfully-----------\n");
    Refill();
  }
}
//functions for Refilling the ingredients
const Refill = () => {
  console.log("\x1b[33m","all the ingredients");
  for (const [key, value] of Object.entries(total_items_quantity)) {
    console.log("\x1b[33m",key, "-->", value);
  }
  console.log("\x1b[34m","Press 0 to Go Back");
  console.log("\x1b[34m","Press 1 to refill Hot Water");
  console.log("\x1b[34m","Press 2 to refill Hot Milk");
  console.log("\x1b[34m","Press 3 to refill ginger_syrup");
  console.log("\x1b[34m","Press 4 to refill sugar_syrup");
  console.log("\x1b[34m","Press 5 to refill tea_leaves_syrup");
  const task = prompt("------------->");
  switch (task) {
    case "1":
      refillBlock("hot_water",500)
      break;
    case "2":
      refillBlock("hot_milk",500)
      break;
    case "3":
      refillBlock("ginger_syrup",100)
      break;

    case "4":
      refillBlock("sugar_syrup", 100)
      break;
    case "5":
      refillBlock("tea_leaves_syrup", 100)
      break;
    case "0":
      startMachine();
      break;
    default:
      console.error("\x1b[31m","wrong Input Please give Correct input\n\n\n");
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
      console.log("\x1b[31m",
        "item Cannot be Prepared because " + key + "is not available \n"
      );
      insufficient = true;
    }
    if (total_items_quantity[key] < value) {
      insufficient = true;
      console.log("\x1b[31m",
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
    console.log("\x1b[32m","---------------Drink Prepared-----------\n\n\n");
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
      console.error("\x1b[31m","wrong Input Please give Correct input\n\n\n");
      checkTask("1");
  }
};
//Brew refill function call on input
const checkTask = (task) => {
  switch (task) {
    case "1":
      console.log("\x1b[33m","----------------Brewing---------------------");
      console.log(
        "\x1b[34m",
        "Press 0 to Main Menu \n Press 1 to brew Hot Tea \n Press 2 to brew Hot Coffee " +
          "\n Press 3 to brew Black Tea \n Press 4 to brew Green tea \n "
      );
      const task = prompt("------------->");
      brewRecipe(task);
      break;
    case "2":
      console.log( "\x1b[33m" ,"----------------Refill---------------------\n");
      Refill();
      break;
    case "0":
      break;
    default:
      console.error("\x1b[31m","wrong Input Please give Correct input\n\n\n");
      startMachine();
  }
};
// starting function of the machine to brew refill and exit
const startMachine = () => {
  console.log(
    "\x1b[34m",
    " Coffee Machine \n\n press 0 to exit \n Press 1 to Brew \n press 2 to refill \n "
  );
  const task = prompt("------------->");
  checkTask(task);
};
startMachine();
