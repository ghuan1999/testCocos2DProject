const { ccclass, property } = cc._decorator;

@ccclass
export default class LanguageManager extends cc.Component {

    static instance: LanguageManager = null;

    // Ngôn ngữ hiện tại
    private currentLang: string = "vi"; // mặc định

    // Bảng text theo key
    private dictionary: any = {
        "vi": {
            "play": "Chơi",
            "exit": "Thoát",
            "win": "Chiến Thắng!",
            "lose": "Thua rồi!",
            "skin": "Skin",
            "rank": "Xếp hạng",
        },
        "en": {
            "play": "Play",
            "exit": "Exit",
            "win": "You Win!",
            "lose": "You Lose!",
            "skin": "Skin",
            "rank": "Ranking",
        }
    };

    onLoad() {
        LanguageManager.instance = this;

        // Lấy ngôn ngữ lưu lần cuối (nếu có)
        let saved = cc.sys.localStorage.getItem("lang");
        if (saved) this.currentLang = saved;
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

    setLanguage(lang: string) {
        this.currentLang = lang;
        cc.sys.localStorage.setItem("lang", lang);

        // Broadcast event đổi ngôn ngữ
        cc.director.emit("LANGUAGE_CHANGED", lang);
    }

    getText(key: string): string {
        return this.dictionary[this.currentLang][key];
    }

    getLanguage() {
        return this.currentLang;
    }
}
