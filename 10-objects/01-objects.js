var netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
            episodeInfo: [
                { episode: 1, episodeName: "Pilot" },
                { episode: 2, episodeName: "Magazine Profile" },
                { episode: 3, episodeName: "Shots and Salsa" },
                { episode: 4, episodeName: "Mannequin" },
                { episode: 5, episodeName: "Shoplifter" },
                { episode: 6, episodeName: "Secret Shopper" },
                { episode: 7, episodeName: "Color Wars" },
                { episode: 8, episodeName: "Wedding Day Sale" },
                { episode: 9, episodeName: "All-Nighter" },
                { episode: 10, episodeName: "Demotion" },
                { episode: 11, episodeName: "Labor" }
            ]
        }
    },
    season2: {},
    season3: {}
};

//let var = 'season 1';
//let episodeInfo = {episode: 1, episodeName: 'Pilot'}

//console.log('All data: ' + netflix);
//console.log('id:', netflix.id);

//console.log(netflix.season1.seasonInfo);

//console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName);

//console.log(`Tonight we are going to watch ${netflix.season1.se}`)
//console.log(netflix.season1.seasonInfo.episodeInfo[10].episodeName);

// JSon object below

var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}



let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevel: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(spaceJam.toonSquad.bird);

console.log(Object.keys(spaceJam));

console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));

//object values

console.log(Object.values(spaceJam.toonSquad));

console.log(Object.keys(spaceJam.toonSquad).toString());
console.log(typeof Object.keys(spaceJam.toonSquad.duck).toString());


// square bracket notation -- like . notation, a method for grabbing object values

// let garden = {
//     vegetable: 'zucchini',
//     flower: 'sun flower',
//     fruit: 'grape',
//     water: true,
//     sun: true,
//     size: 10,
// }

console.log(garden.vegetable);

let key = 'vegetable';

console.log(garden[key]);
console.log(garden['vegetable']); // using this lets you not create a variable
console.log(typeof garden);
console.log(garden instanceof Array);

for (key in garden) {
    console.log(key);
}

console.log(garden['size']);

let baking = {};
baking.banana = 'banana bread is yummy!';
baking['zucchini'] = 'better make some zucchini bread.'
console.log(Object.keys(baking));


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: {
        units: 'inche'
    }
}
let key = 'water'
//console.log(Object.keys(garden));

Object.keys(garden).forEach(g => {
    if (key === g) {
        console.log(garden[key]);
        console.log(g);
    }
})