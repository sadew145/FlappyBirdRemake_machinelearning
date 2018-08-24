let canvas,ctx,grav,y,space,acel,wallX,wallY,count=0;
let walls=[];
let wallYs=[];
let interval;
function setup() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousedown",fly,false);
    grav = 2.2;
    acel=1;
    y=50;
    space=180;
    wallX = Math.floor(Math.random() * canvas.height / 2) + canvas.height / 2;
    for(let i=0;i<3;i++) {
        let y =Math.floor(Math.random() * 200) + 20;
        walls.push(new wall(wallX+i*100,y));
        wallYs.push(y);
    }/*
    walls.push(new wall(wallX,Math.floor(Math.random() * 200) + 20));
    walls.push(new wall(wallX+100,Math.floor(Math.random() * 200) + 20));
    walls.push(new wall(wallX+200,Math.floor(Math.random() * 200) + 20));*/
    //for(let i =0;i<5;i++) {

        //wallArray[i]=wall(wallX,wallY);
    //}

}

function draw() {
     interval = setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        bird();
        wallSpeed();
        count++;

        if(count%20===0){
            //let x = Math.floor(Math.random() * canvas.height / 2) + canvas.height / 2;
            let y =Math.floor(Math.random() * 200) + 20;
            walls.push(new wall(walls[walls.length-1]+200,y));
            wallYs.push(y);
        }

        for(let i=0;i<walls.length;i++) {

            walls[i] = wall(wallX+i*200, wallYs[i]);
            walls[i];

        }
        //wall(wallX,wallY);
        }, 8.3);
}
function bird() {
    ctx.beginPath();
    ctx.arc(50, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    gravity();

}

function wall(wallX,wallY) {
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.fillRect(wallX,0,20,wallY);
    ctx.fillRect(wallX,wallY+space,20,canvas.height-wallY-space);
    ctx.stroke();

}

function gravity() {
    if(y<canvas.height){
    //grav+=acel;
        y+=grav;
    }
else{
        y=canvas.height;
        //clearInterval(interval);

    }
}

function wallSpeed() {
    wallX-=.8;
    if(wallX<0){
        walls.shift()
    }
}
function fly(e) {
    /*setTimeout(function(){y-=20},100);
    setTimeout(function(){y-=20},100);
    setTimeout(function(){y-=20},100);*/
    y-=60;
}
/*
function isTouched(b,w){
    if((wallX==70||wallX==-70) && y==wallYs[0] || )

}*/