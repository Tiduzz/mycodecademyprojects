// The project will return a quote explaining why the world has gone through a crisis
// which will include:
// The country 'COUNTRY', has 'AMBIENTAL CRIME', and now all 'LIFEFORM' 'SOMETHING HAPPENED'! 

const mixedMessages = {
    listOfCountries: [
        'Brazil',
        'United States of America',
        'China', 
        'United Kingdom',
        'Palestine',
        'Australia', 
        'Argentina',
        'Nigeria',
        'Finland',
        'Serbia',
        'Singapore',
        'Greece',
        'Hungary',
        "Lil' Poland",
        'Japan'
    ],
    listOfDisasters: [
        'completed the Manhattan Project',
        'declared that penguins can fly',
        'deployed pigeons spies',
        'prohibited the game League of Legends',
        'gone bankrupt, and asked you for money',
        'declared that jesus has been reborn',
        'emitted a global message, saying that fruits are bad for your health',
        'asked if you want to join their cult',
        'declared war against all insects',
        'declared that today is the "throw your thrash on the floor" day',
        'broadcasted live, that a pack of manhunting geese have invaded the country',
        'declared that their president has seen an UFO',
        'publicly declared that their president is in love with the Queen Elizabeth',
        'Hello, this is an easter egg. How are you? Hopefully youre good. Drink water!'
    ],
    listOfLifeForms: [
        'monkeys',
        'mosquitoes',
        'humans',
        'giants',
        'dwarfs',
        'halflings',
        'robots',
        'invisible floating energy balls',
        'pizzas',
        'pokemons',
        'lions',
        'penguins',
        'demacians',
        'flys',
        'horses',
        'cows',
        'goats',
        'artists'
    ],
    listOfEvents: [
        'are dead!',
        'are sick!',
        'have giant wings!',
        'thrown their PCs out of the window!',
        'dropped a nuke somewhere!',
        'ceased to exist!',
        'live in your basement!',
        'are scared to leave their homes!',
        'defeat covid in a punch-out! damn!',
        'are worried about their next meal!',
        'are hungry!',
        'are tired of waiting for their meal!',
        'are bored!',
        'wonder whats the purpose of life!',
        'missclicked, and bought a thousand forks!',
        'need to sleep 5 more minutes!',
        'Hey :) This is easter egg 2.0, if you see this, congratulations! This is the result of me being out of ideas. Enjoy :D'
    ]
}

const logRandomMessage = () => {
    let country = Math.floor((Math.random(mixedMessages.listOfCountries.length))*15)
    let crime = Math.floor((Math.random(mixedMessages.listOfDisasters.length))*14)
    let lifeform = Math.floor((Math.random(mixedMessages.listOfLifeForms.length))*18)
    let event = Math.floor((Math.random(mixedMessages.listOfEvents.length))*17)
    console.log(`The country ${mixedMessages.listOfCountries[country]}, has ${mixedMessages.listOfDisasters[crime]}, and now all ${mixedMessages.listOfLifeForms[lifeform]} ${mixedMessages.listOfEvents[event]} `)
}

logRandomMessage()