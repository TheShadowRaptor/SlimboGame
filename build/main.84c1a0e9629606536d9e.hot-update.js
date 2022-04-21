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
        this.oneTime = true;
        this.jumpSpeed = 10;
        this.resetTimer = 10;
        this.timer = this.resetTimer;
    }
    gravityMe() {
        if (this.state == Character_1.Character.STATE_FALLING) {
            this._sprite.y = this._sprite.y + Constants_1.GRAVITY_POWER;
        }
    }
    jump() {
        if (this.state == Character_1.Character.STATE_JUMPING) {
            this._sprite.y = this._sprite.y - this.jumpSpeed;
            this.timer = this.timer - 1;
            if (this.timer <= 0) {
                this.timer = this.resetTimer;
                this.isFalling();
            }
        }
    }
    positionMe() {
    }
    monitorAnimations() {
        if (this.oneTime == true) {
            if (this.state == Character_1.Character.STATE_GROUNDED) {
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/RightIdle");
            }
            else if (this.state == Character_1.Character.STATE_JUMPING) {
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Jump");
            }
            else if (this.state == Character_1.Character.STATE_FALLING) {
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Falling");
            }
            this.oneTime = false;
        }
    }
    isGrounded() {
        if (this._state != Character_1.Character.STATE_GROUNDED)
            this.oneTime = true;
        this._state = Character_1.Character.STATE_GROUNDED;
    }
    isFalling() {
        if (this._state != Character_1.Character.STATE_FALLING)
            this.oneTime = true;
        if (this._state != Character_1.Character.STATE_GROUNDED) {
            this._state = Character_1.Character.STATE_FALLING;
        }
    }
    isJumping() {
        if (this._state != Character_1.Character.STATE_JUMPING)
            this.oneTime = true;
        if (this._state != Character_1.Character.STATE_FALLING) {
            this._state = Character_1.Character.STATE_JUMPING;
        }
    }
    update() {
        this.gravityMe();
        this.jump();
        this.monitorAnimations();
        super.update();
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c40ff8ac6f3fb38aff7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.84c1a0e9629606536d9e.hot-update.js.map