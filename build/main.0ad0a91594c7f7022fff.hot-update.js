"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const Character_1 = __webpack_require__(/*! ./Character */ "./src/Character.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Player extends Character_1.Character {
    constructor(stage, assetManager) {
        super(stage, assetManager, "CharacterSpritesheet/Player/RightIdle");
        this._state = Character_1.Character.STATE_FALLING;
    }
    stateCheck() {
        if (this.state == Character_1.Character.STATE_GROUNDED) {
            this._sprite.gotoAndPlay("CharacterSpritesheet/Player/RightIdle");
            this._sprite.y = this._sprite.y + 0;
        }
        else if (this.state == Character_1.Character.STATE_FALLING) {
            this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Falling");
            this._sprite.y = this._sprite.y + Constants_1.GRAVITY_POWER;
        }
    }
    positionMe() {
    }
    isGrounded() {
        this._state = Character_1.Character.STATE_GROUNDED;
        console.log(this.state);
    }
    isFalling() {
        this._state = Character_1.Character.STATE_FALLING;
    }
    isJumping() {
        this._state = Character_1.Character.STATE_JUMPING;
    }
    update() {
        this.stateCheck();
        super.update();
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4a70ad26ec3aa1224cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0ad0a91594c7f7022fff.hot-update.js.map