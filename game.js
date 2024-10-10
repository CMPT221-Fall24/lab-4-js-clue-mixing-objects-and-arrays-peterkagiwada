const people = [
    "Carione",
    "Fran",
    "Testa",
    "Bart",
    "Toddy"
];
const weapons = [
    "Knife",
    "Candlestick",
    "Revolver",
    "Rope",
    "Lead Pipe",
    "Wrench",
    "Poison",
    "Axe"
];
const rooms = [
    "Kitchen",
    "Ballroom",
    "Conservatory",
    "Dining Room",
    "Lounge",
    "Hall",
    "Study",
    "Library",
    "Billiard Room",
    "Cellar"
];

function selectRandom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function pickMystery(){
    return{
        person: selectRandom(people),
        weapon: selectRandom(weapons),
        room: selectRandom(rooms)
    };
}
function revealMystery(mystery) {
    return `${mystery.person} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}`;
}

document.getElementById("reveal").addEventListener("click", function () {
    const mystery = pickMystery();
    document.getElementById("mysteryOutput").innerText = revealMystery(mystery);
});