import { AssetManager } from "./AssetManager";
import { Tileset } from "./Tileset";

export class Tile extends Tileset {

    constructor(stage:createjs.StageGL, x:number, y:number, assetManager:AssetManager) {
        super(stage, x, y, assetManager, "TilesetSpritesheet/Ground/TopMid");

    }

    public update(): void {
        super.update();
    }
}