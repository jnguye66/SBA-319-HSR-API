// Require connection file to connect
const mongoose = require('./db-connection.js');

// Require Models for delete and create operations
// Character Model
const Char = require('../models/Char.js');
// Enemy Model
const Enemy = require('../models/Enemy.js');

const chars = [
    {
        name: "Trailblazer",
        username: "Galactic Baseballer",
        email: "trashpanda123@express.com",
        password: "aeonDescend456",
        path: "Harmony",
        element: "Imaginary"
    },
    {
        name: "March 7th",
        username: "Drifting Ice",
        email: "mitsuki0307@express.com",
        password: "foreverWandering789",
        path: "Preservation",
        element: "Ice"
    },
    {
        name: "Dan Heng",
        username: "Long Lost Past",
        email: "pastself@express.com",
        password: "prevailforwards123",
        path: "Destruction",
        element: "Imaginary"
    },
    {
        name: "Himeko",
        username: "CoffeeNavigator5",
        email: "galacticnavigator@express.com",
        password: "trainTechnician01",
        path: "Erudtion",
        element: "Fire"
    },
    {
        name: "Welt Yang",
        username: "Blackhole Generator",
        email: "weightofpower@express.com",
        password: "humanityPrevail4",
        path: "Nihility",
        element: "Imaginary"
    }
];

const enemies = [
    {
        name: "Baryon",
        affiliation: "Antimatter Legion",
        weakness: ["Ice", "Wind"],
        desc: "In order to prevent antiparticles from dissipating and annihilating normal matter, the Antimatter Legion created two types of miniature ion traps for transportaion, collectively reffered to as Baryons and Antibaryons. Baryons have basic intelligence and can clear the path according to the commands and summons of Voidrangers on the battlefield."
    },
    {
        name: "Antibaryon",
        affiliation: "Antimatter Legion",
        weakness: ["Physical", "Quantum"],
        desc: "In order to prevent antiparticles from dissipating and annihilating normal matter, the Antimatter Legion created two types of miniature ion traps for transportaion, collectively reffered to as Baryons and Antibaryons. Antibaryons have basic intelligence and can clear the path according to the commands and summons of Voidrangers on the battlefield."
    },
    {
        name: "Voidranger: Reaver",
        affiliation: "Antimatter Legion",
        weakness: ["Physical", "Shock"],
        desc: "Warriors yet to perish were recast in the Warfroge and gained Destruction's power. Antimatter completes their bodies and negative particles reverberate throughout their forms. Violently aggressive, they embody the will of Destruction and are basic combat units of the Antimatter Legion, acting only according to their destructive insticts."
    },
    {
        name: "Voidranger: Distorter",
        affiliation: "Antimatter Legion",
        weakness: ["Wind", "Imaginary"],
        desc: "A Voidranger that has successfully survived particle annhilation, the positive and negative particles in its body have temporarily achieved a strange balance, granting them more power than ordinary reavers. Basic combat units of the Antimatter Legion. They possess some intelligence and are able to control reavers within a small surrounding area."
    },
    {
        name: "Voidranger: Eliminator",
        affiliation: "Antimatter Legion",
        weakness: ["Fire", "Ice", "Quantum"],
        desc: "Bodies that continued to be corroded by the Fragmentum after death. While their vital signs have changed, they continue to carry out their orders to eliminate. Voidranger: Eliminators will mark enemies they hit, cuasing them to take extra damage when attacked."
    },
    {
        name: "Mara-Struck Soldier",
        affiliation: "Sanctus Medicus",
        weakness: ["Fire", "Ice", "Quantum"],
        desc: "Soldiers of the Xianzhou who somehow fell into madness. Their bodies continue to grow and mutate and have long lost their humanoid form. It is said that the long-lived Xianzhou natives would eventually be stricken with mara."
    },
    {
        name: "Disciples of Sanctus Medicus: Internal Alchemist",
        affiliation: "Sanctus Medicus",
        weakness: ["Physical", "Imaginary"],
        desc: "A member of the Disciples of Sanctus Medicus, the secret sect that hid within the Xianzhou Luofu. With medicine, purify the heart. With elixir, transform one's body. They long to revive the ancient mysteries of Abundance, hoping to spur Xianzhou natives towards their next stage of evoltuion."
    },
    {
        name: "Disciples of Sanctus Medicus: Shape Shifter",
        affiliation: "Sanctus Medicus",
        weakness: ["Ice", "Wind", "Imaginary"],
        desc: "A cultivator who longs to revive the ancient mysteries of Abundance, and to guide the Xianzhou natives back on the liberating path of immortality. Now, their wish has been fulfilled. Gifted by the power of the ancient miracle and using it as both weapon and armor, they managed to touch on the secret of immortality."
    },
    {
        name: "Disciples of Sanctus Medicus: Ballistarius",
        affiliation: "Sanctus Medicus",
        weakness: ["Physical", "Ice", "Wind"],
        desc: "A member of the Disciples of Sanctus Medicus, the secret organization that had lain hidden in the Xianzhou Luofu. They pursue cultivation using tools and merge with them. They long to revive the lost secrets of Abundance, hoping to spur Xianzhou natives toward their next stage of evolution."
    },
    {
        name: "Abundant Ebon Deer",
        affiliation: "Sanctus Medicus",
        weakness: ["Fire", "Ice", "Quantum"],
        desc: "An auspicious spritual beast wrought into being by the Ambrosial Arbor and protects its roots. Its arrival brings along exuberant vegetation and promises good fortune. Once destroyed during ancient wras, the Ambrosial Arbor is mended by the Stellaron and finally revives. Rare creatures and legendary beasts made by celestials of the past all return to this world, like an old dream coming alive again."
    },
]

async function seed() {
    try {
        // Delete pre-existing data to start with clean slate and no repeated data
        await Char.deleteMany({});
        await Enemy.deleteMany({})

        // Create the data that were predeteremined
        const createdChars = await Char.create(chars);
        const createdEnemies = await Enemy.create(enemies);

        // Just shows the data that were added to MongoDB Compass
        console.log('Characters: ', createdChars);
        console.log('Enemies:', createdEnemies );

        // End the mongoose connection, aka run this function once to not allow it to repeat
        await mongoose.connection.close();
    } catch (err) {
        console.log(err)
    }
}

seed();