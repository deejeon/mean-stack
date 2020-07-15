var heffalumps = { character: "Heffalumps" };
var eeyore = { character: "Eeyore" };
var kanga = { character: "Kanga" };
var owl = { character: "Owl" };
var christopher = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var piglet = { character: "Piglet" };
var pooh = { character: "Winnie the Pooh" };
var bees = { character: "Bees" };
var tigger = { character: "Tigger" };

heffalumps.west = eeyore;
eeyore.east = heffalumps;

eeyore.south = kanga;
kanga.north = eeyore;

kanga.south = christopher;
christopher.north = kanga;

christopher.east = rabbit;
rabbit.west = christopher;

christopher.west = owl;
owl.east = christopher;

christopher.south = pooh;
pooh.north = christopher;

piglet.north = owl;
owl.south = piglet;

piglet.east = pooh;
pooh.west = piglet;

rabbit.east = gopher;
gopher.west = rabbit;

rabbit.south = bees;
bees.north = rabbit;

pooh.south = tigger;
tigger.north = pooh;

console.log(christopher.north.character);
console.log(christopher.south.character);
console.log(christopher.west.character);
console.log(christopher.east.character);