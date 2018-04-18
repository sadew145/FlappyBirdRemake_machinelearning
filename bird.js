class Bird{
    constructor(canvas,ctx,color){
        this.x = 50;
        this.y = 50;
        this.canvas=canvas;
        this.ctx=ctx;
        this.color=color;
        this.grav=2.2;
    }
    get getX() {
        return this.x;
    }

    get getY(){
        return this.y;
    }
    setY(y){
        this.y=y;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(50, this.y, 20, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }

    gravity(){
        if(this.y<this.canvas.height){
            //grav+=acel;
            this.y+=this.grav;}
        else{
            this.y=this.canvas.height;
            //clearInterval(interval);
        }
    };

    isTouched(wallx1,wallx2,wally1,wally2){
        if((this.y<wally1 || this.y>wally2) && (this.x>=wallx1 &&this.x<=wallx2))
            return true;
        else
            return false;
    }
/*
    fly(){
        this.y-=60;
        console.log("clicked");
    }*/
}