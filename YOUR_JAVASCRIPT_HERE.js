// Write your JS here
let hero = {
    name: 'Wonder Woman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }
};

// let imageDagger = document.getElementById('dagger');
// imageDagger.onclick = () => {
//     let newWeapon = {
//         weapon: {
//             type: 'dagger',
//             damage: 2
//         }
//     }
//     console.log('HAHAHA');
//     console.log(hero.inventory);
//     hero.inventory.push(newWeapon);
//     console.log(hero.inventory);
// }

const rest = (obj) => {
    if (obj.health === 10){
        alert('Your HERO already has health level 10!');
    } else {
        obj.health = 10;
    }
    return obj;
}

const pickUpItem = (hero, weapon) => {
    hero.inventory.push(weapon);
}

const equipWeapon = (hero) => {
    if(hero.inventory.length < 1) {
        return 
    } else {
        hero.weapon = hero.inventory[0];
    }
}

let imageInn = document.getElementById('inn');
imageInn.onclick = () => {
    hero.health = 10;
}

let imageBag = document.getElementById('bag');
imageBag.onclick = () => {
    hero.weapon = hero.inventory[0];
}

let imageDagger = document.getElementById('dagger');
imageDagger.onclick = () => {
//     let newWeapon = {
//         weapon: {
//             type: 'dagger',
//             damage: 2
//         }
//     }
//     console.log('HAHAHA');
//     console.log(hero.inventory);
//     hero.inventory.push(newWeapon);
//     console.log(hero.inventory);
// }

const displayStats = obj => {

}
