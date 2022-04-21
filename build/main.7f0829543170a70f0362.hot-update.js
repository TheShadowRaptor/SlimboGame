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
    gravityMe() {
        if (this.state == Character_1.Character.STATE_FALLING) {
            this._sprite.y = this._sprite.y + Constants_1.GRAVITY_POWER;
        }
    }
    groundCollide() {
        this.oneTime = false;
        if (this.state == Character_1.Character.STATE_GROUNDED) {
            this._sprite.y = this._sprite.y + 0;
            this.oneTime = true;
        }
    }
    positionMe() {
    }
    jump() {
        if (this.state == Character_1.Character.STATE_JUMPING) {
            this._sprite.y = this._sprite.y - 3;
        }
    }
    chooseAnimation() {
        if (this.state == Character_1.Character.STATE_GROUNDED) {
            this._sprite.gotoAndStop("CharacterSpritesheet/Player/RightIdle");
        }
        else if (this.state == Character_1.Character.STATE_FALLING) {
            this._sprite.gotoAndStop("CharacterSpritesheet/Player/Falling");
        }
    }
    isGrounded() {
        if (this._state != Character_1.Character.STATE_JUMPING) {
            this._state = Character_1.Character.STATE_GROUNDED;
        }
    }
    isFalling() {
        if (this._state != Character_1.Character.STATE_JUMPING) {
            this._state = Character_1.Character.STATE_FALLING;
        }
    }
    isJumping() {
        if (this._state != Character_1.Character.STATE_FALLING) {
            this._state = Character_1.Character.STATE_JUMPING;
        }
    }
    update() {
        this.gravityMe();
        this.jump();
        super.update();
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a2551e20f1c4219b11de")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7f0829543170a70f0362.hot-update.js.map