import ViewManager from "../../../framework/plugin_boosts/ui/ViewManager";
import LanguageManager from "../../../framework/LanguageManager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Localize extends cc.Component {

    @property(cc.Button)
    btnVi: cc.Button = null;

    @property(cc.Button)
    btnEn: cc.Button = null;

    @property(cc.Node)
    btnClose: cc.Node = null;

    onLoad() {
        if (this.btnClose) {
            this.btnClose.on('click', this.onClickClose, this);
        }
    }

    start() {
        this.btnVi.node.on("click", () => {
            LanguageManager.instance.setLanguage("vi");
        });

        this.btnEn.node.on("click", () => {
            LanguageManager.instance.setLanguage("en");
        });
    }


    onClickClose() {
        // dùng ViewManager để đóng UI theo hệ thống của game
        ViewManager.instance.hide("Game/Localize");
    }
}
