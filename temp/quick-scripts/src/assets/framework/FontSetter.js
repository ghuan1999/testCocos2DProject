"use strict";
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