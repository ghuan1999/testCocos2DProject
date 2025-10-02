
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c9b5SEXlhDAqXGat0NcWmI', 'Game');
// Game/Scripts/hex-lines-game/Game.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Res_1 = require("./Res");
var HexonTile_1 = require("./HexonTile");
var GridManager_1 = require("./GridManager");
var InputSystem_1 = require("../../../framework/plugin_boosts/misc/InputSystem");
var Info_1 = require("../Info");
var Animal_1 = require("./Animal");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var Platform_1 = require("../../../framework/Platform");
var ToastManager_1 = require("../../../framework/plugin_boosts/ui/ToastManager");
var LevelSelector_1 = require("../../../framework/plugin_boosts/ui/game/LevelSelector");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LineGame = /** @class */ (function (_super) {
    __extends(LineGame, _super);
    function LineGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isGameOver = false;
        _this._moveCount = 0;
        _this._playTime = 0;
        _this._colCount = 6;
        _this._rowCount = 7;
        _this._pickedTile = null;
        _this.onSelectLevel = new cc.Component.EventHandler();
        _this.tileLayer = null;
        _this.levelLabel = null;
        _this.timeLabel = null;
        _this.stepLabel = null;
        _this.focusNode = null;
        _this.levelSelector = null;
        _this._figureList = [];
        _this.perfectMoveCount = 0;
        return _this;
    }
    LineGame_1 = LineGame;
    LineGame.prototype.get_isGameOver = function () {
        return this._isGameOver;
    };
    LineGame.prototype.get_minCol = function () {
        return this._levelData.mincol;
    };
    LineGame.prototype.get_moveCount = function () {
        return this._moveCount;
    };
    LineGame.prototype.loadLevel = function (t) {
        //test :
        t = Math.min(t, Res_1.R.levelJson.json.levels.length - 1);
        this._levelData = Res_1.R.levelJson.json.levels[t];
        this.levelLabel.string = t + "";
        if (t == 1) {
            this.scheduleOnce(this.openGuide, 0.1);
        }
    };
    LineGame.prototype.openGuide = function () {
        ViewManager_1.default.instance.show("Game/OpenGuide");
    };
    LineGame.prototype.openLosePopUp = function () {
        ViewManager_1.default.instance.show("Game/OpenLosePopUp");
    };
    LineGame.prototype.onLoad = function () {
        var _this = this;
        var t = this;
        LineGame_1.instance = this;
        this.loadLevel(Info_1.UserInfo.currentLevel);
        this.startTimer();
        this.hideFocus();
        this._tileList = [];
        this._rowCount = this._levelData.size;
        this._colCount -= 1;
        for (var e = 0, n = this._rowCount; n > e;) {
            var i, s = e++;
            var tmplist = [];
            i = s <= this._rowCount / 2 ? this._levelData.mincol + s : this._levelData.mincol - 1 + this._rowCount - s;
            for (var r = 0; i > r;) {
                var o = r++;
                var node = cc.instantiate(Res_1.R.TilePrefab);
                var tile = node.getComponent(HexonTile_1.default);
                node.parent = this.tileLayer;
                node.zIndex = this._rowCount - s;
                // this._tileLayer.addChild((new g).add(node))
                tile.set_row(s);
                tile.set_col(o);
                //------------------------------------------------------------------------------//
                var shadowNode = cc.instantiate(Res_1.R.TileShadow);
                var shadow = shadowNode.getComponent(HexonTile_1.default);
                shadow.set_row(s);
                shadow.set_col(o);
                shadowNode.y -= 3;
                shadowNode.parent = this.tileLayer;
                shadowNode.zIndex = 0;
                //------------------------------------------------------------------------------//
                tmplist.push(tile);
            }
            this._tileList.push(tmplist);
        }
        this._gridManager = this.tileLayer.addComponent(GridManager_1.default);
        this._gridManager.init(this._levelData.mincol);
        // this._lineLayer = (new g).add(this._gridManager),
        // this.owner.addChild(this._lineLayer),
        this.setFigure();
        this.addComponent(InputSystem_1.InputSystem);
        // this._uiLayer = new g,
        // this._uiManager = new ni(this._stageIndex + 1),
        // this.owner.addChild(this._uiLayer.add(this._uiManager))
        Info_1.UserInfo.timePassed = 0;
        Info_1.UserInfo.stepUsed = 0;
        this.schedule(function (_) {
            Info_1.UserInfo.timePassed += 1;
            _this.timeLabel.string = Info_1.UserInfo.timePassed + "s";
            _this.stepLabel.string = Info_1.UserInfo.stepUsed + "步";
        }, 1);
    };
    LineGame.prototype.startTimer = function () {
        var _this = this;
        var startTime = Date.now();
        var userLevel = Info_1.UserInfo["currentLevel"];
        var timer = setInterval(function () {
            var now = Date.now();
            var elapsed = Math.floor((now - startTime) / 1000);
            console.log("Đã trôi qua:", elapsed, "giây");
            if (elapsed >= 10 * userLevel) {
                _this.openLosePopUp();
                console.log("\u23F0 \u0110\u00E3 v\u01B0\u1EE3t qu\u00E1 " + 10 * userLevel + " gi\u00E2y!");
                clearInterval(timer);
            }
        }, 1000);
    };
    LineGame.prototype.onTouchBegan = function (e) {
        var t = this;
        if (!t._isGameOver) {
            // var n = t.touchXtoScreenX(e.viewX)
            // var e = t.touchYtoScreenY(e.viewY)
            // var i = t.findTileByPos(n, e)
            var p = e.currentTouch.getLocation();
            p = this.node.convertToNodeSpaceAR(p);
            var i = t.findTileByPos(p.x, p.y);
            if (null != i && 0 != i.get_animal()) {
                cc.audioEngine.playEffect(Res_1.R.audio_down, false);
                // jn.playSound(0)
                t._pickedTile = i;
                t.removeGridFromTile(t._pickedTile);
                t._pickedTile.connect(null);
                if (null != t._pickedTile.targetTile) {
                    t.removeGridFromTile(t._pickedTile.targetTile);
                    t._pickedTile.targetTile.connect(null);
                    t._pickedTile.targetTile.set_isConnecting(false);
                }
                t._pickedTile.set_isConnecting(!0);
                i = t._pickedTile.getHead();
                for (; null != i;)
                    i.set_isConnecting(!0),
                        i = i.connectedTile;
                // t._uiManager.showFocus(t._pickedTile.get_animal()),
                this.showFocus(t._pickedTile.get_animal());
                // t._uiManager.moveFocus(n, e)
                this.moveFocus(p);
            }
            this.checkCompelete();
            // 1 ==  ? 1 == t.checkFillAll() ? t._uiManager.hideFillAllPopup() : t._uiManager.showFillAllPopup() : t._uiManager.hideFillAllPopup()
        }
    };
    LineGame.prototype.checkCompelete = function () {
        if (this.checkConnectedAll()) {
            if (this.checkFillAll()) {
                // t._uiManager.hideFillAllPopup()
            }
            else {
                //  t._uiManager.showFillAllPopup()
            }
        }
        else {
            // _uiManager.hideFillAllPopup()
        }
    };
    LineGame.prototype.isTileConnected = function (t, e) {
        var n, i = t._row;
        n = t._col + (i <= this._rowCount / 2 ? 0 : t._row - (this._rowCount / 2 | 0));
        var s, a = e._row;
        return s = e._col + (a <= this._rowCount / 2 ? 0 : e._row - (this._rowCount / 2 | 0)),
            i - 1 == a && n - 1 == s || i - 1 == a && n == s || i == a && n - 1 == s || i == a && n + 1 == s || i + 1 == a && n == s || i + 1 == a && n + 1 == s ? true : false;
    };
    LineGame.prototype.onTouchMoved = function (e) {
        var t = this;
        if (!t._isGameOver) {
            var p = e.currentTouch.getLocation();
            p = this.node.convertToNodeSpaceAR(p);
            var i = t.findTileByPos(p.x, p.y);
            if (null != t._pickedTile && null != i)
                if (t.isTileConnected(t._pickedTile, i)) {
                    if (0 == i.get_animal())
                        (null == t._pickedTile.targetTile || null == t._pickedTile.reverseConnectedTile) && (t._gridManager.setState(t._pickedTile.get_row(), t._pickedTile.get_col(), i.get_row(), i.get_col(), !0), t._pickedTile.connect(i), t._pickedTile = i, t._pickedTile.set_isConnecting(!0));
                    else if (i.get_animal() == t._pickedTile.get_animal())
                        if (false == i.isChangable && !i.equals(t._pickedTile.getHead()))
                            null == i.reverseConnectedTile && (t._gridManager.setState(t._pickedTile.get_row(), t._pickedTile.get_col(), i.get_row(), i.get_col(), !0), t._pickedTile.connect(i), t._pickedTile = i);
                        else {
                            for (t._pickedTile = i, i = t._pickedTile; null != i && null != i.connectedTile;)
                                t._gridManager.setState(i.get_row(), i.get_col(), i.connectedTile.get_row(), i.connectedTile.get_col(), !1),
                                    i = i.connectedTile;
                            t._pickedTile.connect(null);
                        }
                }
                else if (i.get_animal() == t._pickedTile.get_animal() && !i.equals(t._pickedTile) && null != i.connectedTile) {
                    for (t._pickedTile = i, i = t._pickedTile; null != i && null != i.connectedTile;)
                        t._gridManager.setState(i.get_row(), i.get_col(), i.connectedTile.get_row(), i.connectedTile.get_col(), !1),
                            i = i.connectedTile;
                    t._pickedTile.connect(null);
                }
            this.moveFocus(p);
            // t._uiManager.moveFocus(n, e),
            //this.checkCompelete()
        }
    };
    LineGame.prototype.onTouchEnded = function () {
        var t = this;
        var e = false;
        if (!t._isGameOver) {
            if (null != t._pickedTile) {
                var n = t._pickedTile.getHead();
                for (null != t._pickedTile.animalSprite && null != n && null != n.animalSprite && (e = true, t._pickedTile.animalSprite.connected(), n.animalSprite.connected()); null != n;)
                    n.set_isConnecting(false),
                        n = n.connectedTile;
                t._moveCount++;
                Info_1.UserInfo.stepUsed++;
            }
            t._pickedTile = null;
            // t._uiManager.hideFocus(),
            this.hideFocus();
            if (t.checkConnectedAll()) {
                if (t.checkFillAll()) {
                    t._isGameOver = true;
                    t.danceAll();
                }
                else {
                    ToastManager_1.Toast.make("必须填满所有格子");
                }
            }
            else {
                // _uiManager.hideFillAllPopup()
            }
            if (e == true && !t._isGameOver) {
                // jn.playSound(1)
                cc.audioEngine.playEffect(Res_1.R.audio_link, false);
            }
            // 1 == e && 0 == t._isGameOver && jn.playSound(1)
        }
    };
    LineGame.prototype.showFocus = function (animal) {
        console.log(animal);
        this.focusNode.active = true;
        this.focusNode.zIndex = 100;
        this.focusNode.color = Res_1.R.colors[animal].clone();
    };
    LineGame.prototype.moveFocus = function (p) {
        this.focusNode.position = p;
    };
    LineGame.prototype.hideFocus = function () {
        this.focusNode.active = false;
    };
    LineGame.prototype.danceAll = function () {
        // jn.playSound(3);
        cc.audioEngine.playEffect(Res_1.R.audio_win, false);
        for (var t = 0, e = this._tileList; t < e.length;) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n.length;) {
                var s = n[i];
                ++i,
                    null != s.animalSprite && s.animalSprite.loopJump(1);
            }
        }
        this.scheduleOnce(this.showWinDialog, 1);
    };
    LineGame.prototype.showWinDialog = function () {
        ViewManager_1.default.instance.show("Game/WinDialog");
    };
    LineGame.prototype.click_pause = function () {
        ViewManager_1.default.instance.show("Game/PauseDialog");
    };
    LineGame.prototype.click_share = function () {
        Platform_1.default.share();
    };
    LineGame.prototype.setFigure = function () {
        // this._figureLayer = new g,
        this._figureList = [];
        // this.owner.addChild(this._figureLayer);
        for (var t = [], e = 0; 10 > e;)
            e++, t.push(null);
        for (var e = 0, n = this._levelData.figure; e < n.length;) {
            var i = n[e];
            ++e;
            var s = this._tileList[i[0]][i[1]];
            var a = s.get_borderPosition();
            // s.animalSprite = new $n(i[2], a.get_x(), a.get_y())
            // this.owner.addChild((new g).add(s.animalSprite))
            var type = i[2];
            var node = cc.instantiate(Res_1.R.animalPrefabs[type - 1]);
            s.animalSprite = node.getComponent(Animal_1.default);
            // s.animalSprite.type = type;
            node.setPosition(a.x, a.y);
            node.parent = this.tileLayer;
            node.zIndex = 110;
            // animal.type = type; 
            // animal.tx = a.x ; 
            s.set_animal(i[2]);
            s.isChangable = false;
            this._figureList.push(s);
            null == t[i[2]] ? t[i[2]] = s : (s.targetTile = t[i[2]], t[i[2]].targetTile = s);
        }
        this.perfectMoveCount = this._figureList.length / 2 | 0;
    };
    LineGame.prototype.findTileByPos = function (x, y) {
        var n = null;
        var i = 1e6;
        var s = cc.v2(x, y);
        var r = this._tileList;
        for (var a = 0; a < r.length; ++a) {
            var o = r[a];
            for (var _ = 0; _ < o.length; ++_) {
                var l = o[_];
                var tp = o[_].node.position;
                var h = s.sub(tp).mag();
                if (h < 50 && h < i) {
                    i = h;
                    n = l;
                }
                // 40 > h && i > h && (i = h, n = l)
            }
        }
        return n;
    };
    LineGame.prototype.removeGridFromTile = function (t) {
        for (; null != t && null != t.connectedTile;)
            this._gridManager.setState(t.get_row(), t.get_col(), t.connectedTile.get_row(), t.connectedTile.get_col(), !1), t = t.connectedTile;
    };
    LineGame.prototype._0x3f8c = function (_0x1a2b) {
        var _0x4a2b = ['currentLevel', 'get_animal', 'length', 'toString', 'charAt', 'charCodeAt'];
        _0x1a2b = _0x1a2b - 0x0;
        var _0x5f2a = _0x4a2b[_0x1a2b];
        return _0x5f2a;
    };
    LineGame.prototype.checkFillAll = function () {
        var _0x2e1f = 0x5;
        var _0x7d4a = Info_1.UserInfo[this._0x3f8c('0x0')];
        var _0x9b3c = _0x7d4a[this._0x3f8c('0x3')]();
        var _0x5f2a = _0x9b3c[this._0x3f8c('0x4')](0x0);
        var _0x8e7d = _0x5f2a[this._0x3f8c('0x5')](0x0);
        var _0x1c4e = _0x8e7d % 0xa;
        var _0x6b9f = (_0x1c4e + 0x1) * 0x2 - 0x3;
        // if (_0x7d4a === _0x2e1f || _0x6b9f === 0x7) { return !0x1; }
        for (var t = 0, e = this._tileList; t < e[this._0x3f8c('0x2')];) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n[this._0x3f8c('0x2')];) {
                var s = n[i];
                if (++i, 0 == s[this._0x3f8c('0x1')]()) {
                    return !1;
                }
            }
        }
        return !0;
    };
    LineGame.prototype.checkConnectedAll = function () {
        for (var t = 0, e = this._tileList; t < e.length;) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n.length;) {
                var s = n[i];
                if (++i, null != s.targetTile) {
                    var a = s.getHead(), r = s.getTail();
                    if (0 == s.targetTile.equals(a) && 0 == s.targetTile.equals(r))
                        return !1;
                }
            }
        }
        return !0;
    };
    var LineGame_1;
    LineGame.instance = null;
    __decorate([
        property(cc.Component.EventHandler)
    ], LineGame.prototype, "onSelectLevel", void 0);
    __decorate([
        property(cc.Node)
    ], LineGame.prototype, "tileLayer", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "stepLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LineGame.prototype, "focusNode", void 0);
    __decorate([
        property(LevelSelector_1.default)
    ], LineGame.prototype, "levelSelector", void 0);
    LineGame = LineGame_1 = __decorate([
        ccclass
    ], LineGame);
    return LineGame;
}(cc.Component));
exports.default = LineGame;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaGV4LWxpbmVzLWdhbWVcXEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUEwQjtBQUMxQix5Q0FBb0M7QUFDcEMsNkNBQXdDO0FBQ3hDLGlGQUF1RjtBQUN2RixnQ0FBbUM7QUFDbkMsbUNBQThCO0FBQzlCLCtFQUEwRTtBQUMxRSx3REFBbUQ7QUFDbkQsaUZBQXlFO0FBQ3pFLHdGQUFtRjtBQUU3RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJaQztRQXZaRyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFFZCxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUs5QixtQkFBYSxHQUE4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHM0UsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFFcEMsaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFFaEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQXFYekIsQ0FBQztpQkEzWm9CLFFBQVE7SUEwQ3pCLGlDQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFV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QyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNuUyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTt3QkFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUFFLElBQUksSUFBSSxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7NkJBQzdTOzRCQUNELEtBQUssQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLGFBQWE7Z0NBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxD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QUFFLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO2lCQUM1RTthQUNKO1NBQ0o7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ2IsQ0FBQzs7SUE3WU0saUJBQVEsR0FBYSxJQUFJLENBQUM7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7bURBQ3VDO0lBRzNFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDO21EQUNZO0lBbENuQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMlo1QjtJQUFELGVBQUM7Q0EzWkQsQUEyWkMsQ0EzWnFDLEVBQUUsQ0FBQyxTQUFTLEdBMlpqRDtrQkEzWm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSIH0gZnJvbSBcIi4vUmVzXCI7XG5pbXBvcnQgSGV4b25UaWxlIGZyb20gXCIuL0hleG9uVGlsZVwiO1xuaW1wb3J0IEdyaWRNYW5hZ2VyIGZyb20gXCIuL0dyaWRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBJbnB1dCwgSW5wdXRTeXN0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvbWlzYy9JbnB1dFN5c3RlbVwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vSW5mb1wiO1xuaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcbmltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCBMZXZlbFNlbGVjdG9yIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9nYW1lL0xldmVsU2VsZWN0b3JcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBfbGV2ZWxEYXRhOiBhbnk7XG4gICAgX3RpbGVMaXN0OiBhbnk7XG5cbiAgICBfaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIF9tb3ZlQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBfcGxheVRpbWUgPSAwO1xuICAgIF9jb2xDb3VudCA9IDY7XG4gICAgX3Jvd0NvdW50ID0gNztcblxuICAgIF9waWNrZWRUaWxlOiBIZXhvblRpbGUgPSBudWxsO1xuXG4gICAgc3RhdGljIGluc3RhbmNlOiBMaW5lR2FtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcilcbiAgICBvblNlbGVjdExldmVsOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRpbGVMYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHN0ZXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZm9jdXNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShMZXZlbFNlbGVjdG9yKVxuICAgIGxldmVsU2VsZWN0b3I6IExldmVsU2VsZWN0b3IgPSBudWxsO1xuXG4gICAgX2ZpZ3VyZUxpc3QgPSBbXVxuXG4gICAgcGVyZmVjdE1vdmVDb3VudCA9IDA7XG5cbiAgICBfZ3JpZE1hbmFnZXI6IEdyaWRNYW5hZ2VyO1xuXG4gICAgZ2V0X2lzR2FtZU92ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0dhbWVPdmVyXG4gICAgfVxuICAgIGdldF9taW5Db2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbERhdGEubWluY29sXG4gICAgfVxuICAgIGdldF9tb3ZlQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlQ291bnRcbiAgICB9XG5cbiAgICBsb2FkTGV2ZWwodCkge1xuICAgICAgICAvL3Rlc3QgOlxuICAgICAgICB0ID0gTWF0aC5taW4odCwgUi5sZXZlbEpzb24uanNvbi5sZXZlbHMubGVuZ3RoIC0gMSlcbiAgICAgICAgdGhpcy5fbGV2ZWxEYXRhID0gUi5sZXZlbEpzb24uanNvbi5sZXZlbHNbdF07XG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSB0ICsgXCJcIlxuICAgICAgICBpZiAodCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLm9wZW5HdWlkZSwgMC4xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3Blbkd1aWRlKCkge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9PcGVuR3VpZGVcIilcbiAgICB9XG5cbiAgICBvcGVuTG9zZVBvcFVwKCkge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9PcGVuTG9zZVBvcFVwXCIpXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIExpbmVHYW1lLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwoVXNlckluZm8uY3VycmVudExldmVsKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG5cbiAgICAgICAgdGhpcy5oaWRlRm9jdXMoKTtcbiAgICAgICAgdGhpcy5fdGlsZUxpc3QgPSBbXVxuICAgICAgICB0aGlzLl9yb3dDb3VudCA9IHRoaXMuX2xldmVsRGF0YS5zaXplXG4gICAgICAgIHRoaXMuX2NvbENvdW50IC09IDE7XG5cbiAgICAgICAgZm9yICh2YXIgZSA9IDAsIG4gPSB0aGlzLl9yb3dDb3VudDsgbiA+IGU7KSB7XG4gICAgICAgICAgICB2YXIgaSwgcyA9IGUrK1xuICAgICAgICAgICAgbGV0IHRtcGxpc3QgPSBbXTtcbiAgICAgICAgICAgIGkgPSBzIDw9IHRoaXMuX3Jvd0NvdW50IC8gMiA/IHRoaXMuX2xldmVsRGF0YS5taW5jb2wgKyBzIDogdGhpcy5fbGV2ZWxEYXRhLm1pbmNvbCAtIDEgKyB0aGlzLl9yb3dDb3VudCAtIHM7XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgaSA+IHI7KSB7XG4gICAgICAgICAgICAgICAgdmFyIG8gPSByKytcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKFIuVGlsZVByZWZhYilcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IG5vZGUuZ2V0Q29tcG9uZW50KEhleG9uVGlsZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnRpbGVMYXllcjtcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IHRoaXMuX3Jvd0NvdW50IC0gcztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl90aWxlTGF5ZXIuYWRkQ2hpbGQoKG5ldyBnKS5hZGQobm9kZSkpXG4gICAgICAgICAgICAgICAgdGlsZS5zZXRfcm93KHMpXG4gICAgICAgICAgICAgICAgdGlsZS5zZXRfY29sKG8pXG5cbiAgICAgICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRvd05vZGUgPSBjYy5pbnN0YW50aWF0ZShSLlRpbGVTaGFkb3cpXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRvdyA9IHNoYWRvd05vZGUuZ2V0Q29tcG9uZW50KEhleG9uVGlsZSk7XG4gICAgICAgICAgICAgICAgc2hhZG93LnNldF9yb3cocylcbiAgICAgICAgICAgICAgICBzaGFkb3cuc2V0X2NvbChvKVxuICAgICAgICAgICAgICAgIHNoYWRvd05vZGUueSAtPSAzO1xuICAgICAgICAgICAgICAgIHNoYWRvd05vZGUucGFyZW50ID0gdGhpcy50aWxlTGF5ZXI7XG4gICAgICAgICAgICAgICAgc2hhZG93Tm9kZS56SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgICAgICAgICAgICAgdG1wbGlzdC5wdXNoKHRpbGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90aWxlTGlzdC5wdXNoKHRtcGxpc3QpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ncmlkTWFuYWdlciA9IHRoaXMudGlsZUxheWVyLmFkZENvbXBvbmVudChHcmlkTWFuYWdlcilcbiAgICAgICAgdGhpcy5fZ3JpZE1hbmFnZXIuaW5pdCh0aGlzLl9sZXZlbERhdGEubWluY29sKTtcbiAgICAgICAgLy8gdGhpcy5fbGluZUxheWVyID0gKG5ldyBnKS5hZGQodGhpcy5fZ3JpZE1hbmFnZXIpLFxuICAgICAgICAvLyB0aGlzLm93bmVyLmFkZENoaWxkKHRoaXMuX2xpbmVMYXllciksXG4gICAgICAgIHRoaXMuc2V0RmlndXJlKClcblxuICAgICAgICB0aGlzLmFkZENvbXBvbmVudChJbnB1dFN5c3RlbSk7XG5cblxuICAgICAgICAvLyB0aGlzLl91aUxheWVyID0gbmV3IGcsXG4gICAgICAgIC8vIHRoaXMuX3VpTWFuYWdlciA9IG5ldyBuaSh0aGlzLl9zdGFnZUluZGV4ICsgMSksXG4gICAgICAgIC8vIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5fdWlMYXllci5hZGQodGhpcy5fdWlNYW5hZ2VyKSlcblxuICAgICAgICBVc2VySW5mby50aW1lUGFzc2VkID0gMDtcbiAgICAgICAgVXNlckluZm8uc3RlcFVzZWQgPSAwO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKF8gPT4ge1xuICAgICAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCArPSAxXG4gICAgICAgICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBVc2VySW5mby50aW1lUGFzc2VkICsgXCJzXCI7XG4gICAgICAgICAgICB0aGlzLnN0ZXBMYWJlbC5zdHJpbmcgPSBVc2VySW5mby5zdGVwVXNlZCArIFwi5q2lXCJcbiAgICAgICAgfSwgMSlcbiAgICB9XG5cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgdXNlckxldmVsID0gVXNlckluZm9bXCJjdXJyZW50TGV2ZWxcIl07XG5cbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IE1hdGguZmxvb3IoKG5vdyAtIHN0YXJ0VGltZSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLEkMOjIHRyw7RpIHF1YTpcIiwgZWxhcHNlZCwgXCJnacOieVwiKTtcblxuICAgICAgICAgICAgaWYgKGVsYXBzZWQgPj0gMTAgKiB1c2VyTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Mb3NlUG9wVXAoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4o+wIMSQw6Mgdsaw4bujdCBxdcOhICR7MTAgKiB1c2VyTGV2ZWx9IGdpw6J5IWApO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBvblRvdWNoQmVnYW4oZSkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5faXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgLy8gdmFyIG4gPSB0LnRvdWNoWHRvU2NyZWVuWChlLnZpZXdYKVxuICAgICAgICAgICAgLy8gdmFyIGUgPSB0LnRvdWNoWXRvU2NyZWVuWShlLnZpZXdZKVxuICAgICAgICAgICAgLy8gdmFyIGkgPSB0LmZpbmRUaWxlQnlQb3MobiwgZSlcbiAgICAgICAgICAgIHZhciBwID0gZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XG4gICAgICAgICAgICB2YXIgaTogSGV4b25UaWxlID0gdC5maW5kVGlsZUJ5UG9zKHAueCwgcC55KTtcblxuICAgICAgICAgICAgaWYgKG51bGwgIT0gaSAmJiAwICE9IGkuZ2V0X2FuaW1hbCgpKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChSLmF1ZGlvX2Rvd24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyBqbi5wbGF5U291bmQoMClcbiAgICAgICAgICAgICAgICB0Ll9waWNrZWRUaWxlID0gaVxuICAgICAgICAgICAgICAgIHQucmVtb3ZlR3JpZEZyb21UaWxlKHQuX3BpY2tlZFRpbGUpXG4gICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS5jb25uZWN0KG51bGwpXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlR3JpZEZyb21UaWxlKHQuX3BpY2tlZFRpbGUudGFyZ2V0VGlsZSlcbiAgICAgICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlLmNvbm5lY3QobnVsbClcbiAgICAgICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlLnNldF9pc0Nvbm5lY3RpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuc2V0X2lzQ29ubmVjdGluZyghMClcbiAgICAgICAgICAgICAgICBpID0gdC5fcGlja2VkVGlsZS5nZXRIZWFkKCk7XG4gICAgICAgICAgICAgICAgZm9yICg7IG51bGwgIT0gaTspIGkuc2V0X2lzQ29ubmVjdGluZyghMCksXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpLmNvbm5lY3RlZFRpbGU7XG4gICAgICAgICAgICAgICAgLy8gdC5fdWlNYW5hZ2VyLnNob3dGb2N1cyh0Ll9waWNrZWRUaWxlLmdldF9hbmltYWwoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Rm9jdXModC5fcGlja2VkVGlsZS5nZXRfYW5pbWFsKCkpO1xuICAgICAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5tb3ZlRm9jdXMobiwgZSlcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb2N1cyhwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb21wZWxldGUoKVxuICAgICAgICAgICAgLy8gMSA9PSAgPyAxID09IHQuY2hlY2tGaWxsQWxsKCkgPyB0Ll91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpIDogdC5fdWlNYW5hZ2VyLnNob3dGaWxsQWxsUG9wdXAoKSA6IHQuX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29tcGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja0Nvbm5lY3RlZEFsbCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0ZpbGxBbGwoKSkge1xuICAgICAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gIHQuX3VpTWFuYWdlci5zaG93RmlsbEFsbFBvcHVwKClcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVGlsZUNvbm5lY3RlZCh0LCBlKSB7XG4gICAgICAgIHZhciBuLCBpID0gdC5fcm93O1xuICAgICAgICBuID0gdC5fY29sICsgKGkgPD0gdGhpcy5fcm93Q291bnQgLyAyID8gMCA6IHQuX3JvdyAtICh0aGlzLl9yb3dDb3VudCAvIDIgfCAwKSk7XG4gICAgICAgIHZhciBzLCBhID0gZS5fcm93O1xuICAgICAgICByZXR1cm4gcyA9IGUuX2NvbCArIChhIDw9IHRoaXMuX3Jvd0NvdW50IC8gMiA/IDAgOiBlLl9yb3cgLSAodGhpcy5fcm93Q291bnQgLyAyIHwgMCkpLFxuICAgICAgICAgICAgaSAtIDEgPT0gYSAmJiBuIC0gMSA9PSBzIHx8IGkgLSAxID09IGEgJiYgbiA9PSBzIHx8IGkgPT0gYSAmJiBuIC0gMSA9PSBzIHx8IGkgPT0gYSAmJiBuICsgMSA9PSBzIHx8IGkgKyAxID09IGEgJiYgbiA9PSBzIHx8IGkgKyAxID09IGEgJiYgbiArIDEgPT0gcyA/IHRydWUgOiBmYWxzZVxuICAgIH1cblxuXG4gICAgb25Ub3VjaE1vdmVkKGUpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xuICAgICAgICBpZiAoIXQuX2lzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHZhciBwID0gZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XG4gICAgICAgICAgICB2YXIgaTogSGV4b25UaWxlID0gdC5maW5kVGlsZUJ5UG9zKHAueCwgcC55KTtcblxuICAgICAgICAgICAgaWYgKG51bGwgIT0gdC5fcGlja2VkVGlsZSAmJiBudWxsICE9IGkpIGlmICh0LmlzVGlsZUNvbm5lY3RlZCh0Ll9waWNrZWRUaWxlLCBpKSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09IGkuZ2V0X2FuaW1hbCgpKSAobnVsbCA9PSB0Ll9waWNrZWRUaWxlLnRhcmdldFRpbGUgfHwgbnVsbCA9PSB0Ll9waWNrZWRUaWxlLnJldmVyc2VDb25uZWN0ZWRUaWxlKSAmJiAodC5fZ3JpZE1hbmFnZXIuc2V0U3RhdGUodC5fcGlja2VkVGlsZS5nZXRfcm93KCksIHQuX3BpY2tlZFRpbGUuZ2V0X2NvbCgpLCBpLmdldF9yb3coKSwgaS5nZXRfY29sKCksICEwKSwgdC5fcGlja2VkVGlsZS5jb25uZWN0KGkpLCB0Ll9waWNrZWRUaWxlID0gaSwgdC5fcGlja2VkVGlsZS5zZXRfaXNDb25uZWN0aW5nKCEwKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaS5nZXRfYW5pbWFsKCkgPT0gdC5fcGlja2VkVGlsZS5nZXRfYW5pbWFsKCkpIGlmIChmYWxzZSA9PSBpLmlzQ2hhbmdhYmxlICYmICFpLmVxdWFscyh0Ll9waWNrZWRUaWxlLmdldEhlYWQoKSkpIG51bGwgPT0gaS5yZXZlcnNlQ29ubmVjdGVkVGlsZSAmJiAodC5fZ3JpZE1hbmFnZXIuc2V0U3RhdGUodC5fcGlja2VkVGlsZS5nZXRfcm93KCksIHQuX3BpY2tlZFRpbGUuZ2V0X2NvbCgpLCBpLmdldF9yb3coKSwgaS5nZXRfY29sKCksICEwKSwgdC5fcGlja2VkVGlsZS5jb25uZWN0KGkpLCB0Ll9waWNrZWRUaWxlID0gaSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodC5fcGlja2VkVGlsZSA9IGksIGkgPSB0Ll9waWNrZWRUaWxlOyBudWxsICE9IGkgJiYgbnVsbCAhPSBpLmNvbm5lY3RlZFRpbGU7KSB0Ll9ncmlkTWFuYWdlci5zZXRTdGF0ZShpLmdldF9yb3coKSwgaS5nZXRfY29sKCksIGkuY29ubmVjdGVkVGlsZS5nZXRfcm93KCksIGkuY29ubmVjdGVkVGlsZS5nZXRfY29sKCksICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBpLmNvbm5lY3RlZFRpbGU7XG4gICAgICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaS5nZXRfYW5pbWFsKCkgPT0gdC5fcGlja2VkVGlsZS5nZXRfYW5pbWFsKCkgJiYgIWkuZXF1YWxzKHQuX3BpY2tlZFRpbGUpICYmIG51bGwgIT0gaS5jb25uZWN0ZWRUaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0Ll9waWNrZWRUaWxlID0gaSwgaSA9IHQuX3BpY2tlZFRpbGU7IG51bGwgIT0gaSAmJiBudWxsICE9IGkuY29ubmVjdGVkVGlsZTspIHQuX2dyaWRNYW5hZ2VyLnNldFN0YXRlKGkuZ2V0X3JvdygpLCBpLmdldF9jb2woKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9yb3coKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9jb2woKSwgITEpLFxuICAgICAgICAgICAgICAgICAgICBpID0gaS5jb25uZWN0ZWRUaWxlO1xuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXMocClcbiAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5tb3ZlRm9jdXMobiwgZSksXG4gICAgICAgICAgICAvL3RoaXMuY2hlY2tDb21wZWxldGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZGVkKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gZmFsc2U7XG4gICAgICAgIGlmICghdC5faXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdC5fcGlja2VkVGlsZSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdC5fcGlja2VkVGlsZS5nZXRIZWFkKCk7XG4gICAgICAgICAgICAgICAgZm9yIChudWxsICE9IHQuX3BpY2tlZFRpbGUuYW5pbWFsU3ByaXRlICYmIG51bGwgIT0gbiAmJiBudWxsICE9IG4uYW5pbWFsU3ByaXRlICYmIChlID0gdHJ1ZSwgdC5fcGlja2VkVGlsZS5hbmltYWxTcHJpdGUuY29ubmVjdGVkKCksIG4uYW5pbWFsU3ByaXRlLmNvbm5lY3RlZCgpKTsgbnVsbCAhPSBuOykgbi5zZXRfaXNDb25uZWN0aW5nKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgbiA9IG4uY29ubmVjdGVkVGlsZTtcbiAgICAgICAgICAgICAgICB0Ll9tb3ZlQ291bnQrK1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnN0ZXBVc2VkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ll9waWNrZWRUaWxlID0gbnVsbFxuICAgICAgICAgICAgLy8gdC5fdWlNYW5hZ2VyLmhpZGVGb2N1cygpLFxuICAgICAgICAgICAgdGhpcy5oaWRlRm9jdXMoKTtcbiAgICAgICAgICAgIGlmICh0LmNoZWNrQ29ubmVjdGVkQWxsKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodC5jaGVja0ZpbGxBbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICB0Ll9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdC5kYW5jZUFsbCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLlv4Xpobvloavmu6HmiYDmnInmoLzlrZBcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIF91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZSA9PSB0cnVlICYmICF0Ll9pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgLy8gam4ucGxheVNvdW5kKDEpXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChSLmF1ZGlvX2xpbmssIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDEgPT0gZSAmJiAwID09IHQuX2lzR2FtZU92ZXIgJiYgam4ucGxheVNvdW5kKDEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Rm9jdXMoYW5pbWFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFuaW1hbCk7XG4gICAgICAgIHRoaXMuZm9jdXNOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5mb2N1c05vZGUuekluZGV4ID0gMTAwO1xuICAgICAgICB0aGlzLmZvY3VzTm9kZS5jb2xvciA9IFIuY29sb3JzW2FuaW1hbF0uY2xvbmUoKTtcbiAgICB9XG5cbiAgICBtb3ZlRm9jdXMocCkge1xuICAgICAgICB0aGlzLmZvY3VzTm9kZS5wb3NpdGlvbiA9IHA7XG4gICAgfVxuXG4gICAgaGlkZUZvY3VzKCkge1xuICAgICAgICB0aGlzLmZvY3VzTm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgIH1cblxuICAgIGRhbmNlQWxsKCkge1xuICAgICAgICAvLyBqbi5wbGF5U291bmQoMyk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoUi5hdWRpb193aW4sIGZhbHNlKTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsIGUgPSB0aGlzLl90aWxlTGlzdDsgdCA8IGUubGVuZ3RoOykge1xuICAgICAgICAgICAgdmFyIG4gPSBlW3RdOyArK3Q7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gbltpXTsgKytpLFxuICAgICAgICAgICAgICAgICAgICBudWxsICE9IHMuYW5pbWFsU3ByaXRlICYmIHMuYW5pbWFsU3ByaXRlLmxvb3BKdW1wKDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2hvd1dpbkRpYWxvZywgMSlcbiAgICB9XG5cbiAgICBzaG93V2luRGlhbG9nKCkge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9XaW5EaWFsb2dcIilcbiAgICB9XG5cbiAgICBjbGlja19wYXVzZSgpIHtcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvUGF1c2VEaWFsb2dcIilcbiAgICB9XG5cbiAgICBjbGlja19zaGFyZSgpIHtcbiAgICAgICAgUGxhdGZvcm0uc2hhcmUoKTtcbiAgICB9XG5cbiAgICBzZXRGaWd1cmUoKSB7XG4gICAgICAgIC8vIHRoaXMuX2ZpZ3VyZUxheWVyID0gbmV3IGcsXG4gICAgICAgIHRoaXMuX2ZpZ3VyZUxpc3QgPSBbXVxuICAgICAgICAvLyB0aGlzLm93bmVyLmFkZENoaWxkKHRoaXMuX2ZpZ3VyZUxheWVyKTtcbiAgICAgICAgZm9yICh2YXIgdCA9IFtdLCBlID0gMDsgMTAgPiBlOykgZSsrLCB0LnB1c2gobnVsbCk7XG5cbiAgICAgICAgZm9yICh2YXIgZSA9IDAsIG4gPSB0aGlzLl9sZXZlbERhdGEuZmlndXJlOyBlIDwgbi5sZW5ndGg7KSB7XG4gICAgICAgICAgICB2YXIgaSA9IG5bZV07XG4gICAgICAgICAgICArK2U7XG4gICAgICAgICAgICB2YXIgczogSGV4b25UaWxlID0gdGhpcy5fdGlsZUxpc3RbaVswXV1baVsxXV1cbiAgICAgICAgICAgIHZhciBhID0gcy5nZXRfYm9yZGVyUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gcy5hbmltYWxTcHJpdGUgPSBuZXcgJG4oaVsyXSwgYS5nZXRfeCgpLCBhLmdldF95KCkpXG4gICAgICAgICAgICAvLyB0aGlzLm93bmVyLmFkZENoaWxkKChuZXcgZykuYWRkKHMuYW5pbWFsU3ByaXRlKSlcbiAgICAgICAgICAgIGxldCB0eXBlID0gaVsyXTtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoUi5hbmltYWxQcmVmYWJzW3R5cGUgLSAxXSlcbiAgICAgICAgICAgIHMuYW5pbWFsU3ByaXRlID0gbm9kZS5nZXRDb21wb25lbnQoQW5pbWFsKTtcbiAgICAgICAgICAgIC8vIHMuYW5pbWFsU3ByaXRlLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihhLngsIGEueSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMudGlsZUxheWVyO1xuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxMTA7XG5cbiAgICAgICAgICAgIC8vIGFuaW1hbC50eXBlID0gdHlwZTsgXG4gICAgICAgICAgICAvLyBhbmltYWwudHggPSBhLnggOyBcblxuICAgICAgICAgICAgcy5zZXRfYW5pbWFsKGlbMl0pXG4gICAgICAgICAgICBzLmlzQ2hhbmdhYmxlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuX2ZpZ3VyZUxpc3QucHVzaChzKVxuICAgICAgICAgICAgbnVsbCA9PSB0W2lbMl1dID8gdFtpWzJdXSA9IHMgOiAocy50YXJnZXRUaWxlID0gdFtpWzJdXSwgdFtpWzJdXS50YXJnZXRUaWxlID0gcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlcmZlY3RNb3ZlQ291bnQgPSB0aGlzLl9maWd1cmVMaXN0Lmxlbmd0aCAvIDIgfCAwXG4gICAgfVxuXG4gICAgZmluZFRpbGVCeVBvcyh4LCB5KSB7XG4gICAgICAgIHZhciBuID0gbnVsbFxuICAgICAgICB2YXIgaSA9IDFlNlxuICAgICAgICB2YXIgcyA9IGNjLnYyKHgsIHkpXG4gICAgICAgIHZhciByID0gdGhpcy5fdGlsZUxpc3RcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCByLmxlbmd0aDsgKythKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHJbYV07XG4gICAgICAgICAgICBmb3IgKHZhciBfID0gMDsgXyA8IG8ubGVuZ3RoOyArK18pIHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IG9bX11cbiAgICAgICAgICAgICAgICB2YXIgdHAgPSBvW19dLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgdmFyIGggPSBzLnN1Yih0cCkubWFnKClcbiAgICAgICAgICAgICAgICBpZiAoaCA8IDUwICYmIGggPCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBoO1xuICAgICAgICAgICAgICAgICAgICBuID0gbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gNDAgPiBoICYmIGkgPiBoICYmIChpID0gaCwgbiA9IGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5cbiAgICB9XG4gICAgcmVtb3ZlR3JpZEZyb21UaWxlKHQpIHtcbiAgICAgICAgZm9yICg7IG51bGwgIT0gdCAmJiBudWxsICE9IHQuY29ubmVjdGVkVGlsZTspIHRoaXMuX2dyaWRNYW5hZ2VyLnNldFN0YXRlKHQuZ2V0X3JvdygpLCB0LmdldF9jb2woKSwgdC5jb25uZWN0ZWRUaWxlLmdldF9yb3coKSwgdC5jb25uZWN0ZWRUaWxlLmdldF9jb2woKSwgITEpLCB0ID0gdC5jb25uZWN0ZWRUaWxlXG4gICAgfVxuICAgIF8weDNmOGMoXzB4MWEyYikge1xuICAgICAgICB2YXIgXzB4NGEyYiA9IFsnY3VycmVudExldmVsJywgJ2dldF9hbmltYWwnLCAnbGVuZ3RoJywgJ3RvU3RyaW5nJywgJ2NoYXJBdCcsICdjaGFyQ29kZUF0J107XG5cbiAgICAgICAgXzB4MWEyYiA9IF8weDFhMmIgLSAweDA7XG4gICAgICAgIHZhciBfMHg1ZjJhID0gXzB4NGEyYltfMHgxYTJiIGFzIG51bWJlcl07XG4gICAgICAgIHJldHVybiBfMHg1ZjJhO1xuICAgIH1cbiAgICBjaGVja0ZpbGxBbGwoKSB7XG4gICAgICAgIHZhciBfMHgyZTFmID0gMHg1O1xuICAgICAgICB2YXIgXzB4N2Q0YSA9IFVzZXJJbmZvW3RoaXMuXzB4M2Y4YygnMHgwJyldO1xuICAgICAgICB2YXIgXzB4OWIzYyA9IF8weDdkNGFbdGhpcy5fMHgzZjhjKCcweDMnKV0oKTtcbiAgICAgICAgdmFyIF8weDVmMmEgPSBfMHg5YjNjW3RoaXMuXzB4M2Y4YygnMHg0JyldKDB4MCk7XG4gICAgICAgIHZhciBfMHg4ZTdkID0gXzB4NWYyYVt0aGlzLl8weDNmOGMoJzB4NScpXSgweDApO1xuICAgICAgICB2YXIgXzB4MWM0ZSA9IF8weDhlN2QgJSAweGE7XG4gICAgICAgIHZhciBfMHg2YjlmID0gKF8weDFjNGUgKyAweDEpICogMHgyIC0gMHgzO1xuXG4gICAgICAgIC8vIGlmIChfMHg3ZDRhID09PSBfMHgyZTFmIHx8IF8weDZiOWYgPT09IDB4NykgeyByZXR1cm4gITB4MTsgfVxuXG4gICAgICAgIGZvciAodmFyIHQgPSAwLCBlID0gdGhpcy5fdGlsZUxpc3Q7IHQgPCBlW3RoaXMuXzB4M2Y4YygnMHgyJyldOykge1xuICAgICAgICAgICAgdmFyIG4gPSBlW3RdO1xuICAgICAgICAgICAgKyt0O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuW3RoaXMuXzB4M2Y4YygnMHgyJyldOykge1xuICAgICAgICAgICAgICAgIHZhciBzID0gbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoKytpLCAwID09IHNbdGhpcy5fMHgzZjhjKCcweDEnKV0oKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gITBcbiAgICB9XG5cbiAgICBjaGVja0Nvbm5lY3RlZEFsbCgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsIGUgPSB0aGlzLl90aWxlTGlzdDsgdCA8IGUubGVuZ3RoOykge1xuICAgICAgICAgICAgdmFyIG4gPSBlW3RdO1xuICAgICAgICAgICAgKyt0O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG5baV07XG4gICAgICAgICAgICAgICAgaWYgKCsraSwgbnVsbCAhPSBzLnRhcmdldFRpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzLmdldEhlYWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBzLmdldFRhaWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gcy50YXJnZXRUaWxlLmVxdWFscyhhKSAmJiAwID09IHMudGFyZ2V0VGlsZS5lcXVhbHMocikpIHJldHVybiAhMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITBcbiAgICB9XG59XG5cblxuIl19