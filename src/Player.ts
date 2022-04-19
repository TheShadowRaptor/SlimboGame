import { Character } from "./Character";
import { AssetManager } from "./AssetManager";

export class Player extends Character {

    
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        super(stage, assetManager, "CharacterSpritesheet/Player/RightIdle");

        // construct custom event objects
    }

    public update(): void {
        super.update();
        super.startMe();
    }
}