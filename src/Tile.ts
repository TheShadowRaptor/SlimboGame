import { AssetManager } from "./AssetManager";
import { Tileset } from "./Tileset";
import { TILE_MAX } from "./Constants";

export class Tile extends Tileset {

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager, "TilesetSpritesheet/Ground/TopMid");
    }

    public positionMe(xPos:number, yPos:number): void{
        this._sprite.x = xPos;
        this._sprite.y = yPos;
    }

    public update(): void {

    }
}