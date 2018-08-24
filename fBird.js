let canvas,ctx,fps=0;
let walls=[];
let interval;
let bird;
function setup(){
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");

    bird=new Bird(canvas,ctx,"black");
    canvas.addEventListener("mousedown",fly,false);

    interval=
        setInterval(function () {

            if (fps % 300 === 0){
                walls.push(new Wall(canvas, ctx, "black"));
                console.log(walls[0].X);
                }
            if (walls.length !== 0) {
                if (bird.isTouched(walls[0].X, walls[0].X +20 , walls[0].getY(), walls[0].getY() + walls[0].getSpace())    ) {
                    clearInterval(interval);
                    //location.reload();
                }
            }
            fps++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            bird.draw();
            bird.gravity();

            walls.forEach(function (w) {
                if (w.x + 20 < 0)
                    walls.splice(w, 1);
                w.draw();
                w.move();

            })


        }, 8.3);

}

function fly(){
    bird.setY(bird.getY - 80);
}
