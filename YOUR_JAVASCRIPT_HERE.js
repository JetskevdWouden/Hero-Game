//Section 1&2

let hero = {
    name: 'Wonder Woman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'lasso',
        damage: 2
    }
}

const rest = (obj) => {
    if (obj.health === 10){
        alert('Your HERO already has health level 10!');
    } else {
        obj.health = 10;
    }
    return obj;
}

let imageInn = document.getElementById('inn');
imageInn.onclick = () => {
    hero.health = 10;
}

const pickUpItem = (hero, weapon) => {
    hero.inventory.push(weapon);
}

let imageDagger = document.getElementById('dagger');
imageDagger.onclick = () => {
    hero.inventory.push({type: 'dagger', damage: 2});
}

const equipWeapon = (hero) => {
    if(hero.inventory.length < 1) {
        return 
    } else {
        hero.weapon = hero.inventory[0];
    }
}

let imageBag = document.getElementById('bag');
imageBag.onclick = () => {
    hero.weapon = hero.inventory[0];
}

//Section 4

const addHeroStats = document.getElementById('heroStats');
const displayStats = (obj) => {
    let heroElement = document.createElement('section');
    heroElement.innerHTML = `name: ${obj.name} 
    <br> health: ${obj.health} 
    <br> weapon type: ${obj.weapon.type} 
    <br> weapon damage: ${obj.weapon.damage}`;
    addHeroStats.appendChild(heroElement);
}

displayStats(hero);

