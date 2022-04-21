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
        if (this.state == Character_1.Character.STATE_GROUNDED)
            this._sprite.y = this._sprite.y + 0;
        else if (this.state == Character_1.Character.STATE_FALLING)
            this._sprite.y = this._sprite.y + Constants_1.GRAVITY_POWER;
    }
    positionMe() {
    }
    isGrounded() {
        console.log("Working?");
        this.state == Character_1.Character.STATE_GROUNDED;
    }
    isFalling() {
        this.state == Character_1.Character.STATE_FALLING;
    }
    isJumping() {
        this.state == Character_1.Character.STATE_JUMPING;
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
/******/ 	__webpack_require__.h = () => ("8d19feb105a6d93ed74b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5f4b8a36da605bcf6710.hot-update.js.map