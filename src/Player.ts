import { Character } from "./Character";
import { AssetManager } from "./AssetManager";
import { GRAVITY_POWER } from "./Constants";

export class Player extends Character {
    // Events
    changeAnimation:createjs.Event;

    // variables
    oneTime:boolean;
    jumpSpeed:number;
    resetTimer:number;
    timer:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager, "CharacterSpritesheet/Player/RightIdle");
        this._state = Character.STATE_FALLING;
        this.oneTime = true;
        this.jumpSpeed = 10;
        this.resetTimer = 10;
        this.timer = this.resetTimer;

        // construct custom event objects
    }

    // ------------------------------------------ private methods
    private gravityMe(): void {
        if (this.state == Character.STATE_FALLING){
            this._sprite.y = this._sprite.y + GRAVITY_POWER; 
        }
    }

    private jump(): void {
        if (this.state == Character.STATE_JUMPING){
            this._sprite.y = this._sprite.y - this.jumpSpeed;
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

            this.oneTime = false;
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
        this.monitorAnimations();
        super.update();
    }
}