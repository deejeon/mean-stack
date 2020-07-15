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

var player = { location: tigger };

function move(direction) {
    if (direction === "north" && player.location.north) {
        player.location = player.location.north;
        console.log("You are now at " + player.location.character + "'s house.");
    }
    else if (direction === "south" && player.location.south) {
        player.location = player.location.south;
        console.log("You are now at " + player.location.character + "'s house.");
    }
    else if (direction === "west" && player.location.west) {
        player.location = player.location.west;
        console.log("You are now at " + player.location.character + "'s house.");
    }
    else if (direction === "east" && player.location.east) {
        player.location = player.location.east;
        console.log("You are now at " + player.location.character + "'s house.");
    }
    else console.log("You may not go that way!");
}

function printLocation(p) {
    console.log("You are now at " + p.location.character + "'s house.");
}

printLocation(player);
move("north");
move("north");
move("north");
move("north");
move("north");
printLocation(player);