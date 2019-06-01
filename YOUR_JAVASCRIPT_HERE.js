let hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
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