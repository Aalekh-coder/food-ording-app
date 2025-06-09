export const foodItems = [
  {
    img: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
    title: "Rajma Chawal",
    describe: "light, nutritious and quick-to-make Breakfast",
    rate: 4.5,
    price: 120, // Example price in INR
    discountedPrice: 100,
    qty:1 // Example discounted price in INR
  },
  {
    img: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
    title: "Rajma Chawal",
    describe: "light, nutritious and quick-to-make Breakfast",
    rate: 4.5,
    price: 120, // Example price in INR
    discountedPrice: 100,
    qty:1 // Example discounted price in INR
  },
  {
    img: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
    title: "Rajma Chawal",
    describe: "light, nutritious and quick-to-make Breakfast",
    rate: 4.5,
    price: 120, // Example price in INR
    discountedPrice: 100,
    qty:1 // Example discounted price in INR
  },
  {
    img: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Aloo-Paratha-2-3.jpg",
    title: "Aloo Paratha",
    describe: "Wholesome and delicious breakfast option",
    rate: 4.2,
    price: 80,
    discountedPrice: 70,
     qty:1
  },
  {
    img: "https://www.mrishtanna.com/wp-content/uploads/2018/04/poha-indian-breakfast-recipe.jpg",
    title: "Poha",
    describe: "A light and flavorful breakfast dish",
    rate: 4.0,
    price: 70,
    discountedPrice: 60,
     qty:1
  },
  {
    img: "https://vegecravings.com/wp-content/uploads/2017/03/Aloo-Samosa-Recipe-Step-By-Step-Instructions.jpg",
    title: "Samosa",
    describe: "A popular and savory snack",
    rate: 4.3,
    price: 30, // Price per piece or per plate, depending on how you sell it
    discountedPrice: 25,
     qty:1
  },
];

export const removeDuplicates = (foodItems) => {
  return foodItems.filter((item, index, self) =>
    index === self.findIndex((t) => (
      t.title === item.title
    ))
  )
}

// console.log(removeDuplicates(foodItems));