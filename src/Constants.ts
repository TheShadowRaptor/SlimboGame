// game constants
export const STAGE_WIDTH:number = 1280;
export const STAGE_HEIGHT:number = 720;
export const FRAME_RATE:number = 30;
export const TILE_MAX:number = 10;

export const ASSET_MANIFEST:Object[] = [
    {
        type:"json",
        src:"./lib/CharacterSpritesheet/sprites.json",
        id:"spritesA",
        data:0
    },
    {
        type:"image",
        src:"./lib/CharacterSpritesheet/sprites.png",
        id:"spritesA",
        data:0
    },
    {
        type:"json",
        src:"./lib/TilesetSpritesheet/sprites_T.json",
        id:"spritesB",
        data:0
    },
    {
        type:"image",
        src:"./lib/TilesetSpritesheet/sprites_T.png",
        id:"spritesB",
        data:0
    },
    {
        type:"json",
        src:"./lib/spritesheets/glyphs.json",
        id:"glyphs",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/glyphs.png",
        id:"glyphs",
        data:0
    }   
];