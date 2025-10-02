import Platform from "../Platform";
import View from "../plugin_boosts/ui/View";
import ViewManager from "../plugin_boosts/ui/ViewManager";
import Common from "../plugin_boosts/utils/Common";
import Signal from "../plugin_boosts/misc/Signal";
import RankItem from "./RankItem";
import { UserInfo } from "../../Game/Scripts/Info";

interface RankData {
    rank: number;
    level: number;
    name: string;
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class WxRankDialog extends cc.Component {

    first: boolean = true;

    @property([cc.Node])
    rankItems: cc.Node[] = [];

    @property(cc.Prefab)
    rankItemPrefab: cc.Prefab = null;

    @property(cc.Node)
    display: cc.Node = null;

    top10Data: RankData[] = [];

    currentUser: RankData = { rank: 0, level: UserInfo.level, name: "You" };

    closeSignal = new Signal();
    onShown(callback, target) {
        this.closeSignal.on(callback, target)
        if (this.first) {
            this.scheduleOnce(this.reOpen, 0.1)
        } else {
            Platform.showRank();
        }

    }

    reOpen() {
        Platform.showRank();
        this.first = false;
        this.getComponent(View).hide();
        // setTimeout(() => {
        ViewManager.instance.show("wechat/WxRankDialog");
        // }, 100);
    }

    click_close() {
        Platform.hideRank();
        this.getComponent(View).hide();
        this.closeSignal.fire();
    }

    onLoad() {
        this.loadTop10Data();
    }

    async loadTop10Data() {
        const url = 'https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list';
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data: any[] = await response.json();

            // Map dữ liệu và ép level thành number
            let rankData: RankData[] = data.map(item => ({
                rank: 0,
                level: Number(item.level),
                name: item.name
            }));

            // Thêm user hiện tại
            rankData.push(this.currentUser);

            // Sort giảm dần theo level
            rankData.sort((a, b) => b.level - a.level);

            // Gán rank
            rankData.forEach((item, index) => item.rank = index + 1);

            // Lấy top 10
            const top10Data = rankData.slice(0, 10);

            this.updateRankList(top10Data);
        } catch (error) {
            console.error('Error fetching top data:', error);
        }
    }

    /** Cập nhật label cho node */
    updateRankList(top10Data: RankData[]) {
        const startY = 250; // ví dụ vị trí top
        const gapY = 60;
        top10Data.forEach((data, i) => {
            const node = this.rankItems[i];
            if (!node) return;
            node.active = true;
            node.setPosition(-20, startY - i * gapY)

            const rankLabel = node.getChildByName("RankLabel")?.getComponent(cc.Label);
            const nameLabel = node.getChildByName("NameLabel")?.getComponent(cc.Label);
            const levelLabel = node.getChildByName("LevelLabel")?.getComponent(cc.Label);

            if (rankLabel) rankLabel.string = data.rank.toString();
            if (nameLabel) nameLabel.string = data.name;
            if (levelLabel) levelLabel.string = data.level.toString();
        });
    }
}
