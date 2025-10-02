
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/FontSetter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2eef49n6xJBoaOf1MDbg+UM', 'FontSetter');
// framework/FontSetter.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var FontSetter = /** @class */ (function (_super) {
    __extends(FontSetter, _super);
    function FontSetter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FontSetter.prototype.onLoad = function () {
        // Load font Roboto từ resources/fonts
        cc.loader.loadRes("fonts/Roboto-Regular", cc.Font, function (err, font) {
            if (err) {
                cc.error("Không load được font:", err);
                return;
            }
            // Gán font cho tất cả label trong scene
            var labels = cc.find("Canvas").getComponentsInChildren(cc.Label);
            labels.forEach(function (label) {
                label.font = font;
            });
            cc.log("✅ Gán font Roboto cho toàn bộ Label xong!");
        });
    };
    FontSetter = __decorate([
        ccclass
    ], FontSetter);
    return FontSetter;
}(cc.Component));
exports.default = FontSetter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxGb250U2V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF3Qyw4QkFBWTtJQUFwRDs7SUFrQkEsQ0FBQztJQWpCRywyQkFBTSxHQUFOO1FBQ0ksc0NBQXNDO1FBQ3RDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUN6RCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPO2FBQ1Y7WUFFRCx3Q0FBd0M7WUFDeEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ2hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWtCOUI7SUFBRCxpQkFBQztDQWxCRCxBQWtCQyxDQWxCdUMsRUFBRSxDQUFDLFNBQVMsR0FrQm5EO2tCQWxCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRTZXR0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIExvYWQgZm9udCBSb2JvdG8gdOG7qyByZXNvdXJjZXMvZm9udHNcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImZvbnRzL1JvYm90by1SZWd1bGFyXCIsIGNjLkZvbnQsIChlcnIsIGZvbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJLaMO0bmcgbG9hZCDEkcaw4bujYyBmb250OlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBHw6FuIGZvbnQgY2hvIHThuqV0IGPhuqMgbGFiZWwgdHJvbmcgc2NlbmVcclxuICAgICAgICAgICAgbGV0IGxhYmVscyA9IGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsYWJlbHMuZm9yRWFjaChsYWJlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5mb250ID0gZm9udDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2coXCLinIUgR8OhbiBmb250IFJvYm90byBjaG8gdG/DoG4gYuG7mSBMYWJlbCB4b25nIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=