import { AssetManager } from "./AssetManager";
import { Player } from "./Player";

export class Character {
    // class constants for readability
    public static UP:number = 1;
    public static DOWN:number = 2;
    public static LEFT:number = 3;
    public static RIGHT:number = 4;

    // state class constants
    public static STATE_IDLE:number = 1;
    public static STATE_MOVING:number = 2;
    public static STATE_JUMPING:number = 3;
    public static STATE_FALLING:number = 4;
    public static STATE_GROUNDED:number = 5;
    public static STATE_DYING:number = 6;
    public static STATE_DEAD:number = 7;
    
    // protected property variables
    protected _speed:number;
    protected _sprite:createjs.Sprite;
    protected _state:number;
    protected _movingState:number;
    protected _direction:number;

    // protected variable
    protected stage:createjs.StageGL;

    // public variable
    public onGround:boolean;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, animation:string) {
        // initialization
        this._state = Character.STATE_IDLE;
        this.stage = stage;
        this.onGround = false;

        // construct the sprite and position on stage
        this._sprite = assetManager.getSprite("spritesA", animation, 50, 500);
    }

    // --------------------------------------------------- get/sets
    set speed(value:number) {
        this._speed = value;
    }
    get speed():number {
        return this._speed;
    }

    set direction(value:number) {
        this._direction = value;
    }

    get direction() {
        return this._direction;
    }

    get state():number {
        return this._state;
    }

    get movingState():number {
        return this._state;
    }

    get sprite():createjs.Sprite {
        return this._sprite;
    }

    // --------------------------------------------------- protected method

    // --------------------------------------------------- public methods  
    public showMe():void {
        this.stage.addChild(this._sprite);
    }

    public hideMe():void {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }
    
    public rotateMe(degrees:number):void {
        if (this._state == Character.STATE_DEAD) return;
        this._sprite.rotation = degrees;
    }

    public moveMe():void {
        if (this._state == Character.STATE_DEAD) return;

        if (this._movingState = Character.STATE_IDLE){
            this._movingState = Character.STATE_MOVING;
            this._sprite.play();
        }        
    }

    public stopMe():void {
        if (this._state == Character.STATE_DEAD) return;

        if (this._movingState = Character.STATE_MOVING){
            this._movingState = Character.STATE_IDLE;
        this._movingState = Character.STATE_IDLE;
            this._sprite.stop();
        }        
    }
    

    public update():void {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE)) return;

    }

}