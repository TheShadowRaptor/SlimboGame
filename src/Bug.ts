import { Character } from "./Character";
import { AssetManager } from "./AssetManager";
import { STAGE_WIDTH, STAGE_HEIGHT } from "./Constants";
import { randomMe } from "./Toolkit";
import { Snake } from "./Snake";

export class Bug extends Character {

    private snake:Snake;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, snake:Snake) {
        super(stage, assetManager, "bug/alive");

        this.snake = snake;
    }

    // -------------------------------------------------- public methods
    public showMe():void {
        // get the width of bug sprite on current frame
        let width:number = this._sprite.getBounds().width;

        // randomize speed
        this._speed = randomMe(2,6);

        // randomize starting point
        if (randomMe(1,2) == 1) {
            // move right
            this._sprite.x = -width;
            this._sprite.y = randomMe(50,550);
            this._sprite.rotation = randomMe(45, -45);
        } else {
            // move left
            this._sprite.x = STAGE_WIDTH + width;
            this._sprite.y = randomMe(50,550);
            this._sprite.rotation = randomMe(135,225);
        }

        this.startMe();

        // position the bug behind the snake sprite
        this.stage.addChildAt(this._sprite, this.stage.getChildIndex(this.snake.sprite));
    }

    public update():void {
        super.update();

        if (this._state == Character.STATE_IDLE) return;

        // get dimensions of bug sprite
        let width:number = this._sprite.getBounds().width;
        let height:number = this._sprite.getBounds().height;

        // should bug sprite be removed from the stage?
        if ((this._sprite.x < -width) || 
            (this._sprite.x > (STAGE_WIDTH + width)) || 
            (this._sprite.y < -height) ||
            (this._sprite.y > (STAGE_HEIGHT + height))) {

                console.log("Bug off stage - removed!");
                this.hideMe();
        }

    }

}