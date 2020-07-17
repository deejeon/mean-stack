users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(array) {
    let solution = "";
    for (let i = 0; i < array.length; i++) {
        solution += array[i].fname + " " + array[i].lname + " knows ";
        for (let j = 0; j < array[i].languages.length; j++) {
            if (j === array[i].languages.length - 1) {
                if (i === array.length - 1) {
                    solution += "and " + array[i].languages[j] + ".";
                }
                else {
                    solution += "and " + array[i].languages[j] + ".\n";
                }
            }
            else {
                solution += array[i].languages[j] + ", ";
            }
        }
    }
    return solution;
}

console.log(userLanguages(users));