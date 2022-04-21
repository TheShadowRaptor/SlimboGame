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
const Constants_2 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Player extends Character_1.Character {
    constructor(stage, assetManager) {
        super(stage, assetManager, "CharacterSpritesheet/Player/RightIdle");
        this._state = Character_1.Character.STATE_FALLING;
        this._speed = 5;
        this.oneTime = true;
        this.jumpSpeed = 10;
        this.resetTimer = 10;
        this.timer = this.resetTimer;
        this.width = this._sprite.getBounds().width;
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
    move() {
        if (this._movingState == Player.STATE_MOVING) {
            let sprite = this._sprite;
            if (this._direction == Player.LEFT) {
                sprite.x = sprite.x - this._speed;
                if (sprite.x < 0) {
                    sprite.x = 0;
                }
            }
            else if (this._direction == Player.RIGHT) {
                sprite.x = sprite.x + this._speed;
                if (sprite.x > (Constants_2.STAGE_WIDTH - this.width)) {
                    sprite.x = (Constants_2.STAGE_WIDTH - this.width);
                }
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
            else if (this.state == Character_1.Character.STATE_MOVING) {
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Left");
                this.oneTime = false;
            }
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
    isMoving() {
        if (this._state != Character_1.Character.STATE_MOVING)
            this.oneTime = true;
        if (this._state = Character_1.Character.STATE_GROUNDED) {
            this._state = Character_1.Character.STATE_MOVING;
        }
        this._movingState = Character_1.Character.STATE_MOVING;
    }
    isIdle() {
        if (this._state != Character_1.Character.STATE_IDLE)
            this.oneTime = true;
        if (this._state = Character_1.Character.STATE_GROUNDED) {
            this._state = Character_1.Character.STATE_MOVING;
        }
        this._movingState = Character_1.Character.STATE_IDLE;
    }
    update() {
        this.gravityMe();
        this.jump();
        this.move();
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
/******/ 	__webpack_require__.h = () => ("994098161d8154a472ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9f6837d668195c9c5ef9.hot-update.js.map