// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST, TILE_MAX } from "./Constants";
import { AssetManager } from "./AssetManager";
import { Player } from "./Player";
import { Tile } from "./Tile";
import { boxHit } from "./Toolkit";
import { Character } from "./Character";

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

// game objects
let player:Player;
let tile:Tile;
let tile2:Tile;
let tile3:Tile;
let background:createjs.Sprite;

// variables

// control variables
let spaceKey:boolean = false;
export let leftKey:boolean = false;
export let rightKey:boolean = false;

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    
    // construct game objects here
    background = assetManager.getSprite("spritesB", "TilesetSpritesheet/Background/Background");
    stage.addChild(background);
    
    player = new Player(stage, assetManager);
    player.showMe();
    
    let xPos:number;
    let yPos:number;
      
    yPos = 600;
    xPos = 0;
    
    tile = new Tile(stage, assetManager)
    tile.positionMe(xPos, yPos);
    tile.showMe();
    
    xPos = xPos + 64;
    
    tile2 = new Tile(stage, assetManager)
    tile2.positionMe(xPos, yPos);
    tile2.showMe();

    xPos = xPos + 64;
    
    tile3 = new Tile(stage, assetManager)
    tile3.positionMe(xPos, yPos);
    tile3.showMe();


    // listener for keyboard keys
    document.onkeydown = onKeyDown;  
    document.onkeyup = onKeyUp;

    // listen for custom game events

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function onKeyDown(e:KeyboardEvent):void {
    // console.log("key has been pressed down: " + e.key);
    if (e.key == " ") spaceKey = true;

    else if (e.key == 'a') leftKey = true;

    else if (e.key == 'd') rightKey = true;
}

function onKeyUp(e:KeyboardEvent):void {
    if (e.key == " ") spaceKey = false;

    else if (e.key == 'a') leftKey = false;

    else if (e.key == 'd') rightKey = false;
}

function monitorKeys():void {
    if (spaceKey) {
        player.isJumping();
        spaceKey = false;
    }

    else if (leftKey){
        player.direction = Player.LEFT;
        player.moveMe();
        leftKey = false;
    }

    else if (rightKey){
        player.direction = Player.RIGHT;
        player.moveMe();
        rightKey = false;
    }

    else player.stopMe();
}

function monitorCollisions():void {
    if (boxHit(player.sprite, tile.sprite)){
        player.isGrounded();
    }

    else if (boxHit(player.sprite, tile2.sprite)){
        player.isGrounded();
    }

    else if (boxHit(player.sprite, tile3.sprite)){
        player.isGrounded();
    }
}

function onTick(e:createjs.Event) {
    // console.log("TICK!");
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // this is your game loop!
    monitorCollisions();
    monitorKeys();
    player.update();

    // update the stage
    stage.update();
}

// --------------------------------------------------- main method
function main():void {
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

main();