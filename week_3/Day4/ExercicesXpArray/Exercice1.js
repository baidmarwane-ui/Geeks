const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach ((color,index)=>
   console.log(`${index+1}# choice is ${color}.`)
)
if (colors.some((color) => color == "Violet")) {
    console.log(colors.some((color) => color == "Violet"));
    console.log("Yeah");
} else {
    console.log("No...");
}
