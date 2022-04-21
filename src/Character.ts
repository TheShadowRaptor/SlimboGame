import { AssetManager } from "./AssetManager";

export class Character {
    // state class constants
    public static STATE_IDLE_RIGHT:number = 1;
    public static STATE_IDLE_LEFT:number = 2;
    public static STATE_MOVING_RIGHT:number = 3;
    public static STATE_MOVING_LEFT:number = 4;
    public static STATE_JUMPING:number = 5;
    public static STATE_FALLING:number = 6;
    public static STATE_GROUNDED:number = 7;
    public static STATE_DYING:number = 8;
    public static STATE_DEAD:number = 9;

    // protected property variables
    protected _speed:number;
    protected _sprite:createjs.Sprite;
    protected _state:number;

    // protected variable
    protected stage:createjs.StageGL;

    // public variable
    public onGround:boolean;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, animation:string) {
        // initialization
        this._state = Character.STATE_IDLE_RIGHT;
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

    get state():number {
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

    public startMe():void {
        if (this._state == Character.STATE_DEAD) return;

        this._sprite.play();        
    }

    public stopMe():void {
        if (this._state == Character.STATE_DEAD) return;

        this._sprite.stop();
        // this._state = Character.STATE_IDLERIGHT;
    }

    public update():void {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE_RIGHT) || (this._state == Character.STATE_IDLE_LEFT)) return;

    }

}