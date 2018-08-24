class Wall{
    constructor(canvas,ctx,color){
        this.x=800;
        this.y=Math.floor(Math.random() * 300) + 20;
        this.space=180;
        this.canvas=canvas;
        this.ctx=ctx;
        this.color=color;
    }

    get X(){
        return this.x;
    }

    getY() {
        return this.y;
    }
    getSpace() {
        return this.space;
    }
    get getWallX1(){
        return this.y;
    }

    get getWallX2(){
        return this.y+this.space;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle=this.color;
        this.ctx.fillRect(this.x,0,20,this.y);
        this.ctx.fillRect(this.x,this.y+this.space,20,this.canvas.height-this.y-this.space);
        this.ctx.stroke();
    }
    move(){
        this.x-=0.8;
    }

}