const { ccclass, property } = cc._decorator;
import LanguageManager from "./LanguageManager";

@ccclass
export default class LocalizedLabel extends cc.Component {

    @property
    key: string = "";

    private label: cc.Label = null;

    onLoad() {
        this.label = this.getComponent(cc.Label);

        // Lắng nghe sự kiện đổi ngôn ngữ
        cc.director.on("LANGUAGE_CHANGED", this.updateLabel, this);

        this.updateLabel();
    }

    onEnable() {
        this.updateLabel();
    }

    updateLabel() {
        if (!this.key) {
            console.warn(`[LocalizeLabel] Node ${this.node.name} chưa có key!`);
            return;
        }
        const label = this.getComponent(cc.Label);
        if (label) {
            label.string = LanguageManager.instance.getText(this.key);
        }
    }

    // updateLabel() {
    //     if (this.label) {
    //         this.label.string = LanguageManager.instance.getText(this.key);
    //     }
    // }
}
