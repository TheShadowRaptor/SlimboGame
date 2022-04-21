"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Character.ts":
/*!**************************!*\
  !*** ./src/Character.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Character = void 0;
class Character {
    constructor(stage, assetManager, animation) {
        this._state = Character.STATE_IDLE_RIGHT;
        this.stage = stage;
        this.onGround = false;
        this._sprite = assetManager.getSprite("spritesA", animation, 50, 500);
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    get state() {
        return this._state;
    }
    get sprite() {
        return this._sprite;
    }
    showMe() {
        this.stage.addChild(this._sprite);
    }
    hideMe() {
        this._sprite.stop();
        this.stage.removeChild(this._sprite);
    }
    rotateMe(degrees) {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.rotation = degrees;
    }
    startMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.play();
    }
    stopMe() {
        if (this._state == Character.STATE_DEAD)
            return;
        this._sprite.stop();
    }
    update() {
        if ((this._state == Character.STATE_DEAD) || (this._state == Character.STATE_IDLE_RIGHT) || (this._state == Character.STATE_IDLE_LEFT))
            return;
    }
}
exports.Character = Character;
Character.STATE_IDLE_RIGHT = 1;
Character.STATE_IDLE_LEFT = 2;
Character.STATE_MOVING_RIGHT = 3;
Character.STATE_MOVING_LEFT = 4;
Character.STATE_JUMPING = 5;
Character.STATE_FALLING = 6;
Character.STATE_GROUNDED = 7;
Character.STATE_DYING = 8;
Character.STATE_DEAD = 9;


/***/ }),

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
        this._speed = 5;
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
    move() {
        if (this._movingState == Character_1.Character.STATE_IDLE_LEFT) {
            this._sprite.x = this._sprite.x + this.movingSpeed;
        }
        else if (this._movingState == Character_1.Character.STATE_IDLE_RIGHT) {
            this._sprite.x = this._sprite.x - this.movingSpeed;
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
            else if (this.state == Character_1.Character.STATE_MOVING_LEFT) {
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Left");
                this.oneTime = false;
            }
            else if (this.state == Character_1.Character.STATE_MOVING_RIGHT) {
                this._sprite.gotoAndPlay("CharacterSpritesheet/Player/Right");
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
    isMovingLeft() {
        if (this._state != Character_1.Character.STATE_MOVING_LEFT)
            this.oneTime = true;
        if (this._state = Character_1.Character.STATE_GROUNDED) {
            this._state = Character_1.Character.STATE_MOVING_LEFT;
        }
        this._movingState = Character_1.Character.STATE_MOVING_RIGHT;
    }
    isMovingRight() {
        if (this._state != Character_1.Character.STATE_MOVING_RIGHT)
            this.oneTime = true;
        if (this._state = Character_1.Character.STATE_GROUNDED) {
            this._state = Character_1.Character.STATE_MOVING_RIGHT;
        }
        this._movingState = Character_1.Character.STATE_MOVING_RIGHT;
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
/******/ 	__webpack_require__.h = () => ("6a0b241dd6843b5d4ea5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e83ded68e67620e1b487.hot-update.js.map