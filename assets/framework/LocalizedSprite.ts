const { ccclass, property } = cc._decorator;
import LanguageManager from "./LanguageManager";

@ccclass
export default class LocalizedSprite extends cc.Component {

    @property({ type: cc.SpriteFrame })
    vi: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame })
    en: cc.SpriteFrame = null;

    private sprite: cc.Sprite = null;

    onLoad() {
        this.sprite = this.getComponent(cc.Sprite);
        cc.director.on("LANGUAGE_CHANGED", this.updateSprite, this);
        this.updateSprite();
    }

    updateSprite() {
        const lang = LanguageManager.instance.getLanguage();
        if (lang === "vi" && this.vi) {
            this.sprite.spriteFrame = this.vi;
        } else if (lang === "en" && this.en) {
            this.sprite.spriteFrame = this.en;
        }
    }
}
