"use strict";

// array of objects to hold data for each character
// var allCharacters = [];

// nested objects to hold stats for a character
var character = {
    // object to hold general stats
    generalStats: {
        name: "",
        age: 0,
        race: "",
        class: "",
        level: 0,
        health: 0,
        speed: 0
    },
    // object to hold primary stats
    primaryStats: {
        proficiency: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    // object to hold the saving throw modifiers
    savingThrowModifier: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    // object to hold the skill stats
    skillStats: {
        acrobatics: 0,
        animalHandling: 0,
        arcana: 0,
        athletics: 0,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        performance: 0,
        persuasion: 0,
        religion: 0,
        sleight: 0,
        stealth: 0,
        survival: 0
    },
    // object to hold the character's background info
    backgroundInfo: {
        personality: "",
        ideals: "",
        bonds: "",
        flaws: "",
        languages: "",
        other: ""
    },
    // object to hold the character's features and traits
    featTraits: {
        features: "",
        traits: ""
    },
    // object to hold the equipment
    equipment: {
        armor: [],
        weapons: [],
        items: []
    },
    // object to hold spells
    spells: {
        cantrips: [],
        levelOne: [],
        levelTwo: [],
        levelThree: [],
        levelFour: [],
        levelFive: [],
        levelSix: [],
        levelSeven: [],
        levelEight: [],
        levelNine: []
    },
    // object to hold battle stats
    battle: {
        armorClass: "",
        initiative: 0,
        weaponBlock: 0,
        magicBlock: 0
    }
};

var playerClasses = {
    fighter: {
        proficiency: ['str', 'con'],
        hitDice: 'd10',
        skillChoices: ['acrobatics', 'animal handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
        numberOfSkillChoices: 2
    },
    cleric: {
        proficiency: ['wis', 'cha'],
        hitDice: 'd8',
        skillChoices: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
        numberOfSkillChoices: 2
    },
    rogue: {
        proficiency: ['dex', 'int'],
        hitDice: 'd10',
        skillChoices: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleight of hand', 'stealth'],
        numberOfSkillChoices: 4
    },
    wizard: {
        proficiency: ['int', 'wis'],
        hitDice: 'd6',
        skillChoices: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
        numberOfSkillChoices: 2
    },
    warlock: {
        proficiency: ['wis', 'cha'],
        hitDice: 'd8',
        skillChoices: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
        numberOfSkillChoices: 2
    },
    monk: {
        proficiency: ['str', 'dex'],
        hitDice: 'd8',
        skillChoices: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
        numberOfSkillChoices: 2
    },
    paladin: {
        proficiency: ['wis', 'cha'],
        hitDice: 'd10',
        skillChoices: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'],
        numberOfSkillChoices: 2
    },
    ranger: {
        proficiency: ['str', 'dex'],
        hitDice: 'd10',
        skillChoices: ['animal handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
        numberOfSkillChoices: 3
    },
    druid: {
        proficiency: ['int', 'wis'],
        hitDice: 'd8',
        skillChoices: ['arcana', 'animal handling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
        numberOfSkillChoices: 2
    },
    sorcerer: {
        proficiency: ['con', 'cha'],
        hitDice: 'd6',
        skillChoices: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
        numberOfSkillChoices: 2
    },
    barbarian: {
        proficiency: ['str', 'con'],
        hitDice: 'd12',
        skillChoices: ['animal handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
        numberOfSkillChoices: 2
    },
    bard: {
        proficiency: ['dex', 'cha'],
        hitDice: 'd8',
        skillChoices: ['all'],
        numberOfSkillChoices: 3
    },
};

var playerRaces = {
    dragonborn: {
        statBonus: ['2 str', '1 cha'],
        racialTraits: ['araconic ancestry', 'breath weapon', 'damage resistance']
    },
    dwarf: {
        statBonus: ['2 con'],
        racialTraits: ['darkvision', 'dwarven resilience', 'dwarven combat training', 'stonecunning']
    },
    elf: {
        statBonus: ['2 dex'],
        racialTraits: ['darkvision', 'keen senses', 'fey ancestry', 'trance']
    },
    gnome: {
        statBonus: ['2 int'],
        racialTraits: ['darkvision', 'gnome cunning']
    },
    halfElf: {
        statBonus: ['2 cha', '1 other'],
        racialTraits: ['darkvision', 'fey ancestry', 'skill versatility']
    },
    halfling: {
        statBonus: ['2 dex'],
        racialTraits: ['lucky', 'brave', 'halfling nimbleness']
    },
    halfOrc: {
        statBonus: ['2 str', '1 con'],
        racialTraits: ['darkvision', 'menacing', 'relentless endurance', 'savage attacks']
    },
    human: {
        statBonus: ['1 all'],
        racialTraits: ['extra language']
    },
    tiefling: {
        statBonus: ['2 cha', '1 int'],
        racialTraits: ['darkvision', 'hellish resistance', 'infernal legacy']
    }
};

//function to pull class object info for


// function that will get the values of the inputted values for the general stats into the character array
function setGeneral(e) {
    e.preventDefault();
    character.generalStats.name = document.getElementById('nameBlock').value;
    character.generalStats.age = document.getElementById('ageBlock').value;
    character.generalStats.race = document.getElementById('raceBlock').value;
    character.generalStats.class = document.getElementById('classBlock').value;
    character.generalStats.level = document.getElementById('levelBlock').value;
    character.generalStats.health = document.getElementById('healthBlock').value;
    character.generalStats.speed = document.getElementById('speedBlock').value;
    if (character.generalStats.health === '' && character.generalStats.class !== '' && character.generalStats.level !== 0 && character.primaryStats.constitution !== 0) {
        healthRoll(character.generalStats.level, pullClassHitDice(character.generalStats.class), calcMod(character.primaryStats.constitution, 0));
    }
    if (character.generalStats.level !== 0) {
        proficiencyBonusNumber();
    }
}

// document.getElementById('submitGeneral').onclick(setGeneral(event));

// function to pull from the character object's general object to the html web page
function pullGeneral(event) {
    document.getElementById('nameBlock').value = character.generalStats.name;
    document.getElementById('ageBlock').value = character.generalStats.age;
    document.getElementById('raceBlock').value = character.generalStats.race;
    document.getElementById('classBlock').value = character.generalStats.class;
    document.getElementById('levelBlock').value = character.generalStats.level;
    document.getElementById('healthBlock').value = character.generalStats.health;
    document.getElementById('speedBlock').value = character.generalStats.speed;
}
// document.getElementById('').onclick(pullGeneral());

// function to push primary stats into the character.primary object
function setPrimary(e) {
    e.preventDefault();
    character.primaryStats.proficiency = document.getElementById('profStat').value;
    character.primaryStats.strength = document.getElementById('strStat').value;
    character.primaryStats.dexterity = document.getElementById('dexStat').value;
    character.primaryStats.constitution = document.getElementById('conStat').value;
    character.primaryStats.intelligence = document.getElementById('intStat').value;
    character.primaryStats.wisdom = document.getElementById('wisStat').value;
    character.primaryStats.charisma = document.getElementById('chaStat').value;
    primaryStatsFixer();
    runMainStatCalc();
    pullPrimary();
}

// document.getElementById('submitPrimary').onclick(setPrimary(event));

//function to pull from character.primary object to the html page
function pullPrimary() {
    document.getElementById('profStat').value = character.primaryStats.proficiency;
    document.getElementById('strStat').value = character.primaryStats.strength;
    document.getElementById('dexStat').value = character.primaryStats.dexterity;
    document.getElementById('conStat').value = character.primaryStats.constitution;
    document.getElementById('intStat').value = character.primaryStats.intelligence;
    document.getElementById('wisStat').value = character.primaryStats.wisdom;
    document.getElementById('chaStat').value = character.primaryStats.charisma;
}

// document.getElementById('').onclick(pullPrimary());


//function to push from html to character.savingThrowModifier
function setSave(e) {
    e.preventDefault();
    character.savingThrowModifier.strength = document.getElementById('strSave').value;
    character.savingThrowModifier.dexterity = document.getElementById('dexSave').value;
    character.savingThrowModifier.constitution = document.getElementById('conSave').value;
    character.savingThrowModifier.intelligence = document.getElementById('intSave').value;
    character.savingThrowModifier.wisdom = document.getElementById('wisSave').value;
    character.savingThrowModifier.charisma = document.getElementById('chaSave').value;
}
// document.getElementById('submitPrimary').onclick(setSave(event));

//function to pull from the character.savingThrowModifier to html
function pullSave() {
    document.getElementById('strSave').value = character.savingThrowModifier.strength;
    document.getElementById('dexSave').value = character.savingThrowModifier.dexterity;
    document.getElementById('conSave').value = character.savingThrowModifier.constitution;
    document.getElementById('intSave').value = character.savingThrowModifier.intelligence;
    document.getElementById('wisSave').value = character.savingThrowModifier.wisdom;
    document.getElementById('chaSave').value = character.savingThrowModifier.charisma;
}
// document.getElementById('').onclick(pullPrimary());

//function to push from html to the character.skillStats object
function setSkills(e) {
    e.preventDefault();
    character.skillStats.acrobatics = document.getElementById('acroStat').value;
    character.skillStats.animalHandling = document.getElementById('animalStat').value;
    character.skillStats.arcana = document.getElementById('arcanaStat').value;
    character.skillStats.athletics = document.getElementById('athlStat').value;
    character.skillStats.deception = document.getElementById('deceptStat').value;
    character.skillStats.history = document.getElementById('histStat').value;
    character.skillStats.insight = document.getElementById('insightStat').value;
    character.skillStats.intimidation = document.getElementById('intimStat').value;
    character.skillStats.investigation = document.getElementById('investStat').value;
    character.skillStats.medicine = document.getElementById('mediStat').value;
    character.skillStats.nature = document.getElementById('natStat').value;
    character.skillStats.perception = document.getElementById('percStat').value;
    character.skillStats.performance = document.getElementById('perfStat').value;
    character.skillStats.persuasion = document.getElementById('persStat').value;
    character.skillStats.religion = document.getElementById('reliStat').value;
    character.skillStats.sleight = document.getElementById('sleightStat').value;
    character.skillStats.stealth = document.getElementById('stealthStat').value;
    character.skillStats.survival = document.getElementById('survStat').value;
}
// document.getElementById('submitSkills').onclick(setSkills(event));

//function to pull from the character.skillStats to the html
function pullSkills() {
    document.getElementById('acroStat').value = character.skillStats.acrobatics;
    document.getElementById('animalStat').value = character.skillStats.animalHandling;
    document.getElementById('arcanaStat').value = character.skillStats.arcana;
    document.getElementById('athlStat').value = character.skillStats.athletics;
    document.getElementById('deceptStat').value = character.skillStats.deception;
    document.getElementById('histStat').value = character.skillStats.history;
    document.getElementById('insightStat').value = character.skillStats.insight;
    document.getElementById('intimStat').value = character.skillStats.intimidation;
    document.getElementById('investStat').value = character.skillStats.investigation;
    document.getElementById('mediStat').value = character.skillStats.medicine;
    document.getElementById('natStat').value = character.skillStats.nature;
    document.getElementById('percStat').value = character.skillStats.perception;
    document.getElementById('perfStat').value = character.skillStats.performance;
    document.getElementById('persStat').value = character.skillStats.persuasion;
    document.getElementById('reliStat').value = character.skillStats.religion;
    document.getElementById('sleightStat').value = character.skillStats.sleight;
    document.getElementById('stealthStat').value = character.skillStats.stealth;
    document.getElementById('survStat').value = character.skillStats.survival;
}
// document.getElementById('').onclick(pullSkills());

//function to push from html to the character.backgroundInfo
function setBackground(e) {
    e.preventDefault();
    character.backgroundInfo.personality = document.getElementById('personTraits').value;
    character.backgroundInfo.ideals = document.getElementById('idealsBlock').value;
    character.backgroundInfo.bonds = document.getElementById('bondBlock').value;
    character.backgroundInfo.flaws = document.getElementById('flawsBlock').value;
    character.backgroundInfo.languages = document.getElementById('langBlock').value;
    character.backgroundInfo.other = document.getElementById('other').value;
}
// document.getElementById('submitBackground').onclick(setBackground(event));

//function to pull from the character.backgroundInfo object to the html
function pullBackground() {
    document.getElementById('personTraits').value = character.backgroundInfo.personality;
    document.getElementById('idealsBlock').value = character.backgroundInfo.ideals;
    document.getElementById('bondBlock').value = character.backgroundInfo.bonds;
    document.getElementById('flawsBlock').value = character.backgroundInfo.flaws;
    document.getElementById('langBlock').value = character.backgroundInfo.languages;
    document.getElementById('other').value = character.backgroundInfo.other;
}
// document.getElementById('').onclick(pullBackground());

//function to push from html to character.featTraits object
function setFeatTraits(e) {
    e.preventDefault();
    character.featTraits.features = document.getElementById('featsBlock').value;
    character.featTraits.traits = document.getElementById('traitsBlock').value;
}
// document.getElementById('submitFeatTraits').onclick(setFeatTraits(event));

//function to pull from character.featTraits object to html
function pullFeatTraits() {
    document.getElementById('featsBlock').value = character.featTraits.features;
    document.getElementById('traitsBlock').value = character.featTraits.traits;
}
// document.getElementById('').onclick(pullFeatTraits());

//function to push from html to character.equipment object
function setEquipment(e) {
    e.preventDefault();
    character.equipment.armor.push(document.getElementById('armorBlock').value);
    character.equipment.weapons.push(document.getElementById('weaponsBlock').value);
    character.equipment.items.push(document.getElementById('itemsBlock').value);
}
// document.getElementById('submitEquipment').onclick(setEquipment(event));

//function to pull from character.equipment to html
function pullEquipment() {


}
// document.getElementById('').onclick(pullEquipment());

//function to pull from html to character.spells
function setSpells(e) {
    e.preventDefault();
    character.spells.cantrips.push(document.getElementById('0level').value);
    character.spells.levelOne.push(document.getElementById('1level').value);
    character.spells.levelTwo.push(document.getElementById('2level').value);
    character.spells.levelThree.push(document.getElementById('3level').value);
    character.spells.levelFour.push(document.getElementById('4level').value);
    character.spells.levelFive.push(document.getElementById('5level').value);
    character.spells.levelSix.push(document.getElementById('6level').value);
    character.spells.levelSeven.push(document.getElementById('7level').value);
    character.spells.levelEight.push(document.getElementById('8level').value);
    character.spells.levelNine.push(document.getElementById('9level').value);
}
// document.getElementById('submitSpells').onclick(setSpells(event));

//function to push from character.spells to html
function pullSpells() {

}
// document.getElementById('').onclick(pullSpells());

//function to pull from html to character.battle
function setBattle(e) {
    e.preventDefault();
    document.getElementById('armorClass').value = character.battle.armorClass;
    document.getElementById('initiativeBlock').value = character.battle.initiative;
    document.getElementById('weaponBlock').value = character.battle.weaponBlock;
    document.getElementById('magicBlock').value = character.battle.magicBlock;
}
// document.getElementById('submitBattleBloock').onclick(setBattle(event));

//function to push from character.battle object to html
function pullBattle() {
    character.battle.armorClass = document.getElementById('armorClass').value;
    character.battle.initiative = document.getElementById('initiativeBlock').value;
    character.battle.weaponBlock = document.getElementById('weaponBlock').value;
    character.battle.magicBlock = document.getElementById('magicBlock').value;

}
// document.getElementById('').onclick(pullBattle());

// setting query triggers
var submitGeneral = document.querySelector('#submitGeneral');
var submitPrimary = document.querySelector('#submitPrimary');
var submitSave = document.querySelector('#submitSave');
var submitSkills = document.querySelector('#submitSkills');
var submitBackground = document.querySelector('#submitBackground');
var submitFeatTraits = document.querySelector('#submitFeatTraits');
var submitEquipment = document.querySelector('#submitEquipment');
var submitSpells = document.querySelector('#submitSpells');
var submitBattle = document.querySelector('#submitBattle');

// add event listener to submit general stats button
submitGeneral.addEventListener('click', setGeneral);
submitPrimary.addEventListener('click', setPrimary);
submitSave.addEventListener('click', setSave);
submitSkills.addEventListener('click', setSkills);
submitBackground.addEventListener('click', setBackground);
submitFeatTraits.addEventListener('click', setFeatTraits);
submitEquipment.addEventListener('click', setEquipment);
submitSpells.addEventListener('click', setSpells);
submitBattle.addEventListener('click', setBattle);


//Load character saved from a database
function LoadCharacter() {
    //load from database to object



    //push database to front end.
    pullGeneral();
    pullPrimary();
    pullSave();
    pullSkills();
    pullBackground();
    pullBattle();
    pullEquipment();
    pullFeatTraits();
    pullSpells();
}





