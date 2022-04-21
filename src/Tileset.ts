import { AssetManager } from "./AssetManager";

export class Tileset{
    // state class constants
    public static STATE_TOPLEFT:number = 1;
    public static STATE_TOPMID:number = 2;
    public static STATE_TOPRIGHT:number = 3;
    public static STATE_MIDLEFT:number = 4;
    public static STATE_MIDMID:number = 5;
    public static STATE_MIDRIGHT:number = 6;
    public static STATE_BOTLEFT:number = 7;
    public static STATE_BOTMID:number = 8;
    public static STATE_BOTRIGHT:number = 9;

    // protected property variables
    protected _sprite:createjs.Sprite;

    // protected variable
    protected stage:createjs.StageGL;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, animation:string) {
        // initialization
        this.stage = stage;

        // construct the sprite and position on stage
        this._sprite = assetManager.getSprite("spritesB", animation);
    }

    // --------------------------------------------------- get/sets

    get sprite():createjs.Sprite {
        return this._sprite;
    }

    // ---------------------------------------------------- private methods
    // private tilePosition(x:number, y:number, assetManager:AssetManager, animation:string):void {
    //     this._sprite = assetManager.getSprite("spritesB", animation, x, y);
    // }

    // --------------------------------------------------- public methods
    public showMe():void {
        this.stage.addChild(this._sprite);
    }

    public hideMe():void {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }


    public update():void {
        
    }
}