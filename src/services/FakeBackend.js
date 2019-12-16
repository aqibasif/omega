const games = [
    {
        id: 1,
        name: "Need for speed",
        price: 60,
        liked: true
    },
    {
        id: 2,
        name: "Fifa",
        price: 50,
        liked: false
    },
    {
        id: 3,
        name: "Call of Duty",
        price: 80,
        liked: true
    },
    {
        id: 4,
        name: "Assasin's creed",
        price: 75,
        liked: true
    },  
];

export function getGames() {
    return games;
}

