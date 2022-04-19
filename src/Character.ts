import { AssetManager } from "./AssetManager";
import { GRAVITY_POWER } from "./Constants";

export class Character {
    // state class constants
    public static STATE_IDLE:number = 1;
    public static STATE_MOVING:number = 2;
    public static STATE_DEAD:number = 3;

    // protected property variables
    protected _speed:number;
    protected _sprite:createjs.Sprite;
    protected _state:number;

    // protected variable
    protected stage:createjs.StageGL;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, animation:string) {
        // initialization
        this._state = Character.STATE_IDLE;
        this.stage = stage;

        // construct the sprite and position on stage
        this._sprite = assetManager.getSprite("spritesA", animation, 50, 600);
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

    protected gravity(): void{
        
        this._sprite.y = this._sprite.y + GRAVITY_POWER;
    }

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
        this._state = Character.STATE_MOVING;
    }

    public stopMe():void {
        if (this._state == Character.STATE_DEAD) return;

        this._sprite.stop();
        this._state = Character.STATE_IDLE;
    }

    public update():void {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE)) return;
        this.gravity();

    }

}