const character = {
    name: 'Billy',
    class: 'Little Guy',
    level: 2,
    health: 200,
    attacked: function () {
        this.health -= 10;
    },
    levelUp: function () {
        this.level++;
        this.health += 10;
        if(this.level >= 10){
            this.class = 'Big Guy';
        }
    }
}

document.querySelector('.name').textContent = character.name;

function render() {
    document.querySelector('.stats').innerHTML = ``;


    const characterClass = document.createElement('p');
    characterClass.innerHTML = `Class: ${character.class}`;
    document.querySelector('.stats').appendChild(characterClass);

    const characterLevel = document.createElement('p');
    characterLevel.innerHTML = `Level: ${character.level}`;
    document.querySelector('.stats').appendChild(characterLevel);

    const characterHealth = document.createElement('p');
    characterHealth.innerHTML = `Health: ${character.health}`;
    document.querySelector('.stats').appendChild(characterHealth);
}




document.querySelector("#attacked").addEventListener("click", function () {
    character.attacked();
    render();
});

document.querySelector("#level").addEventListener("click", function () {
    character.levelUp();
    render();
});

render();