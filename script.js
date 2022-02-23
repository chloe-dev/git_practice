//Randomly generate which door ChoreBot will hide behind

let openDoor1;
let openDoor2;
let openDoor3;
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

const randomChoreDoorGenerator = ()=> {
    let choreDoor = Math.floor(Math.random() * 3);

    if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
      }
}

randomChoreDoorGenerator();


// Door 1
doorImage1 = document.getElementById("door1");

doorImage1.onclick = ()=> {
  doorImage1.src = openDoor1;
}

//Door 2
doorImage2 = document.getElementById("door2");

doorImage2.onclick = ()=> {
  doorImage2.src = openDoor2;
}

//Door 3
doorImage3 = document.getElementById("door3");

doorImage3.onclick = ()=> {
  doorImage3.src = openDoor3;
}