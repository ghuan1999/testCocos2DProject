const { ccclass } = cc._decorator;

@ccclass
export default class FontSetter extends cc.Component {
    onLoad() {
        // Load font Roboto từ resources/fonts
        cc.loader.loadRes("fonts/Roboto-Regular", cc.Font, (err, font) => {
            if (err) {
                cc.error("Không load được font:", err);
                return;
            }

            // Gán font cho tất cả label trong scene
            let labels = cc.find("Canvas").getComponentsInChildren(cc.Label);
            labels.forEach(label => {
                label.font = font;
            });

            cc.log("✅ Gán font Roboto cho toàn bộ Label xong!");
        });
    }
}
