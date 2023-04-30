import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import LoadingIndicator from "flarum/components/LoadingIndicator";
import Button from 'flarum/components/Button';

import MoneyLeaderboardListItem from "./MoneyLeaderboardListItem";

export default class MoneyLeaderboardIndexPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    this.loading = true;
    this.moreResults = false;
    this.moneyLeaderboardList = [];
    this.totalLoadCount = 0;

    this.additionalInfo = app.forum.attribute("moneyLeaderBoardAdditionalInfo");
    this.maxLoadCount = app.forum.attribute("leaderboardMaxLoadCount") || 50;
    this.initloadCount = app.forum.attribute("leaderboardInitLoadCount") || 20;
    this.loadMoreCount = app.forum.attribute("leaderboardLoadMoreCount") || 10;
    this.loadResults(0,this.initloadCount);
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    const titleText = app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-title");
    app.setTitle(titleText);
    app.setTitleCount(0);
    $(".item-nav button .Button-label").text(titleText);
  }

  view() {
    let loading;
    let rankID = 0;

    if(this.loading){
      loading = LoadingIndicator.component({size: "large"});
    }

    return (
      <div className="MoneyLeaderboardPage">
        {IndexPage.prototype.hero()}

        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>

            <div class="MoneyLeaderboardContainer">
              <div class="MoneyLeaderboardListTitle">
                {app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-title")}
              </div>

              {this.additionalInfo && this.additionalInfo.length>0 && (
                <p class="MoneyLeaderboardListAdditionalInformation">{this.additionalInfo}</p>
              )}

              <div class="MoneyLeaderboardListHeader">
                <div class="MoneyLeaderboardListHeaderRank">{app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-rank")}</div>
                <div class="MoneyLeaderboardListHeaderUser">{app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-user")}</div>
                <div class="MoneyLeaderboardListHeaderMoney">{app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-money")}</div>
              </div>

              <ul class="MoneyLeaderboardList">
                {this.moneyLeaderboardList.map((leaderboardListItem) => {
                  rankID++;

                  return (
                    <li class="MoneyLeaderboardListItems">
                      {MoneyLeaderboardListItem.component({ leaderboardListItem, rankID })}
                    </li>
                  );
                })}
              </ul>

              {!this.loading && this.moneyLeaderboardList.length===0 && (
                <div>
                  <div style="font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;">{app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-empty")}</div>
                </div>
              )}

              {!loading && this.hasMoreResults() && (
                <div style="text-align:center;padding:20px">
                  <Button className={'Button Button--primary'} disabled={this.loading} loading={this.loading} onclick={() => this.loadMore()}>
                    {app.translator.trans('ziven-money-leaderboard.forum.leaderboard-load-more')}
                  </Button>
                </div>
              )}

              {loading && <div className="MoneyLeaderboard-loadMore">{loading}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  hasMoreResults() {
    return this.moreResults && this.maxLoadCount>this.totalLoadCount;
  }

  loadMore() {
    this.loading = true;
    this.loadResults(this.moneyLeaderboardList.length,this.loadMoreCount);
  }

  parseResults(results) {
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    [].push.apply(this.moneyLeaderboardList, results);
    this.loading = false;
    m.redraw();

    return results;
  }

  loadResults(offset = 0, loadCount = 20) {
    if(this.maxLoadCount===this.totalLoadCount){
      return;
    }

    let limit = loadCount;

    if(this.maxLoadCount<this.totalLoadCount+loadCount){
      limit = this.maxLoadCount-this.totalLoadCount;
      this.totalLoadCount = this.maxLoadCount;
    }

    this.totalLoadCount+=loadCount;

    return app.store
      .find("moneyLeaderboard", {
        page: {
          offset,
          limit
        },
      })
      .catch(() => {})
      .then(this.parseResults.bind(this));
  }
}
