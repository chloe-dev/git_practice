// Door 1
doorImage1 = document.getElementById("door1");

doorImage1.onclick = ()=> {
  botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
  doorImage1.src = botDoorPath;
}

//Door 2
doorImage2 = document.getElementById("door2");

doorImage2.onclick = ()=> {
  beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
  doorImage2.src = beachDoorPath;
}

//Door 3
doorImage3 = document.getElementById("door3");

doorImage3.onclick = ()=> {
  spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
  doorImage3.src = spaceDoorPath;
}