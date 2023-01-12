import Component from "flarum/Component";
import Link from "flarum/components/Link";
import avatar from "flarum/helpers/avatar";
import username from "flarum/helpers/username";

export default class MoneyLeaderboardListItem extends Component {
  view() {
    const {leaderboardListItem,rankID} = this.attrs;
    const moneyName = app.forum.attribute('antoinefr-money.moneyname') || '[money]';
    const moneyValue = leaderboardListItem.attribute("money");
    const moneyText = moneyName.replace('[money]', moneyValue);
    let trophyClass = "MoneyLeaderboardListItemTrophyNone";
    let rankClass = "MoneyLeaderboardListItemRankTop";

    if(rankID===1){
      trophyClass = "MoneyLeaderboardListItemTrophyGold";
    }else if(rankID===2){
      trophyClass = "MoneyLeaderboardListItemTrophySilver";
    }else if(rankID===3){
      trophyClass = "MoneyLeaderboardListItemTrophyBronze";
    }else{
      rankClass = "MoneyLeaderboardListItemRankLower";
    }

    return (
      <div className="MoneyLeaderboardListItemContainer">
        <div class="MoneyLeaderboardListHeaderRank">
          <div class={rankClass}>{rankID}</div>
          <div class={trophyClass}>
            <i class="fas fa-trophy"></i>
          </div>
        </div>
        <div class="MoneyLeaderboardListHeaderUser">
          <Link href={app.route.user(leaderboardListItem)} className="transferHistoryUser" style="color:var(--heading-color)">
            {avatar(leaderboardListItem)} {username(leaderboardListItem)}
          </Link>
        </div>
        <div class="MoneyLeaderboardListHeaderMoney">
          {moneyText}
        </div>
      </div>
    );
  }
}
