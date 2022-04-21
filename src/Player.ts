import { Character } from "./Character";
import { AssetManager } from "./AssetManager";
import { GRAVITY_POWER } from "./Constants";
import { STAGE_WIDTH } from "./Constants";

export class Player extends Character {
    // variables
    oneTime:boolean;
    jumpStr:number;
    resetTimer:number;
    timer:number;
    private width:number;
    
    // Events
    changeAnimation:createjs.Event;
    
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager, "CharacterSpritesheet/Player/RightIdle");
        this._state = Character.STATE_FALLING;
        this._movingState = Character.STATE_IDLE;
        this._speed = 5;
        this.oneTime = true;
        this.jumpStr = 20;
        this.resetTimer = 10;
        this.timer = this.resetTimer;

        // getting the width of the sprite here once since it flucuates during animation
        this.width = this._sprite.getBounds().width;

        // construct custom event objects
    }

    // ------------------------------------------ private methods
    private gravityMe(): void {
        if (this.state != Character.STATE_GROUNDED) this._sprite.y = this._sprite.y + GRAVITY_POWER; 
    }

    private jump(): void {
        if (this.state == Character.STATE_JUMPING){
            this._sprite.y = this._sprite.y - this.jumpStr;
            this.timer = this.timer - 1;
            if (this.timer <= 0){
                this.timer = this.resetTimer;
                this.isFalling();
            }
        }
    }

    
    // private groundCollide(): void {
        //     this.oneTime = false;
        //     if (this.state == Character.STATE_GROUNDED){       
            //         this._sprite.y = this._sprite.y + 0;
            //         this.oneTime = true;
            //     } 
            // }
            
            // ------------------------------------------ public methods
            
            public move(){
                if (this._movingState == Player.STATE_MOVING) {
                    // reference sprite object for cleaner code below
                    let sprite:createjs.Sprite = this._sprite;
        
                    if (this._direction == Player.LEFT) {
                        // moving left
                        sprite.x = sprite.x - this._speed;
                        if (sprite.x < 0) {
                            sprite.x = 0;
                        }
                    } else if (this._direction == Player.RIGHT) {
                        // moving right
                        sprite.x = sprite.x + this._speed;
                        if (sprite.x > (STAGE_WIDTH - this.width)) {
                            sprite.x = (STAGE_WIDTH - this.width);
                        }
                    }
                }
            }
        
    
    public positionMe(): void {
        
    }

    public monitorAnimations(): void{
        if (this.oneTime == true){
            
            if (this.state == Character.STATE_GROUNDED){
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/RightIdle"); 
            }
            
            else if (this.state == Character.STATE_JUMPING){
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Jump");  
            }
    
            else if (this.state == Character.STATE_FALLING){
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Falling");
                    
            } 

            // Turning
            if (this.direction == Character.LEFT && this.state == Character.STATE_GROUNDED){
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Right");

            this.oneTime = false;
            }

            else if (this.direction == Character.RIGHT && this.state == Character.STATE_GROUNDED){
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Left");

            this.oneTime = false;
            }
        }
    }
    
    public isGrounded(): void {
        if (this._state != Character.STATE_GROUNDED) this.oneTime = true;

        this._state = Character.STATE_GROUNDED;
    }
    
    public isFalling(): void {
        if (this._state != Character.STATE_FALLING) this.oneTime = true;
        
        if (this._state != Character.STATE_GROUNDED){
            this._state = Character.STATE_FALLING;
        }
    }

    public isJumping(): void {
        if (this._state != Character.STATE_JUMPING) this.oneTime = true;

        if (this._state != Character.STATE_FALLING){
            this._state = Character.STATE_JUMPING;
        }
    }

    public update(): void {
        this.gravityMe();
        this.jump();
        this.move();
        this.monitorAnimations();
        console.log(this._state)
        super.update();
    }
}