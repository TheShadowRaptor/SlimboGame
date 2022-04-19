import { Character } from "./Character";
import { AssetManager } from "./AssetManager";
import { SNAKE_SLOW_DELAY, SNAKE_MAX_SPEED } from "./Constants";

export class Snake extends Character {

    private mouseX:number;
    private mouseY:number;

    // custom event for dispatching
    private eventKilled:createjs.Event;
    private eventSpeedChange:createjs.Event;

    // the timer to slow down the snake
    private slowDownTimer:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager, "snake/alive");

        // construct custom event objects
        this.eventKilled = new createjs.Event("snakeKilled", true, false);
        this.eventSpeedChange = new createjs.Event("snakeSpeedChange", true, false);
    }

    // --------------------------------------------------- event handlers
    private onSlowDown():void {
        // slow down the speed of the snake
        this._speed = this._speed - 1;
        // tell the world that the speed has changed
        this._sprite.dispatchEvent(this.eventSpeedChange);
        // is the snake dead?
        if (this._speed <= 0) {
            this.killMe();
        }
    }

    // --------------------------------------------------- public methods
    public startSlowDown():void {
        this.slowDownTimer = window.setInterval(() => this.onSlowDown(), SNAKE_SLOW_DELAY);
    }

    public rotateMe():void {
        // where was the mouse clicked?
        this.mouseX = this.stage.mouseX;
        this.mouseY = this.stage.mouseY;

        // what is the rotation to the click point?
        let radians:number = Math.atan2((this.mouseY - this._sprite.y), (this.mouseX - this._sprite.x));

        // rotate the sprite!
        super.rotateMe(this.toDegrees(radians));
    }

    public killMe():void {
        // snake is now killed!
        this._state = Character.STATE_DEAD;
        // stop the snake's sprite animation
        this.stopMe();
        // listen for animation to be finished (auto removes event listener)
        this._sprite.on("animationend", function() {
            // cleanup
            this._sprite.stop();
        }, this, true);
        // play the snake's death animation
        this._sprite.gotoAndPlay("snake/dead");

        // stop the slow down timer
        window.clearInterval(this.slowDownTimer);

        // dispatch event that snake has been killed!
        this._sprite.dispatchEvent(this.eventKilled);
    }

    public resetMe():void {
        this._sprite.gotoAndStop("snake/alive");
        this._sprite.x = 300;
        this._sprite.y = 300;
        this._sprite.rotation = 0;
        this._speed = SNAKE_MAX_SPEED;
        this._state = Character.STATE_IDLE;
    }

    public update():void {
        super.update();

        // has the snake reached it's destination of the mouse click?
        if ((Math.abs(this._sprite.x - this.mouseX) < 15) && (Math.abs(this._sprite.y - this.mouseY) < 15)) {
            this.stopMe();
        }
    }

}
