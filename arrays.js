const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
//undefined
films[2] = "Jurassic Park";
films;
films.push("A.I.");
films;
//(4)['Jaws', 'Raiders of the Lost Ark', 'Jurassic Park', 'A.I.']0: "Jaws"1: "Raiders of the Lost Ark"2: "Jurassic Park"3: "A.I."length: 4[[Prototype]]: Array(0)
director + " is the director of " + films.length + " films";
//'Steven Spielberg is the director of 4 films'
films.push("E.T.");
director + " is the director of " + films.length + " films";
//'Steven Spielberg is the director of 5 films'

// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...