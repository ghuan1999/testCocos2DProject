const { ccclass, property } = cc._decorator;

@ccclass
export default class RankItem extends cc.Component {

    @property(cc.Label)
    rankLabel: cc.Label = null;

    @property(cc.Label)
    nameLabel: cc.Label = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    setData(rank: number, name: string, level: number) {
        this.rankLabel.string = rank.toString();
        this.nameLabel.string = name;
        this.scoreLabel.string = level.toString();
        console.log("SetData OK:", this.rankLabel.string, this.nameLabel.string, this.scoreLabel.string);
    }

}
