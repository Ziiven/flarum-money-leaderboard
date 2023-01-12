import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import LoadingIndicator from "flarum/components/LoadingIndicator";
import Button from 'flarum/components/Button';

export default class MoneyLeaderboardList extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    this.loading = false;
    this.moreResults = false;
    this.user = this.attrs.params.user;
    this.moneyLeaderboardList = [];
    this.loadResults();
  }

  view() {
    let loading;

    if (this.loading) {
      loading = LoadingIndicator.component({ size: "large" });
    }

    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}

        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>

            <div class="MoneyLeaderboardContainer">
              <div style="padding-bottom:10px; font-size: 24px;font-weight: bold;">
                {app.translator.trans("ziven-transfer-money.forum.transfer-money-history")}
              </div>
                
              {!this.loading && this.moneyLeaderboardList.length===0 && (
                <div>
                  <div style="font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;">{app.translator.trans("ziven-transfer-money.forum.transfer-list-empty")}</div>
                </div>
              )}

              {this.hasMoreResults() && (
                <div style="text-align:center;padding:20px">
                  <Button className={'Button Button--primary'} disabled={this.loading} loading={this.loading} onclick={() => this.loadMore()}>
                    {app.translator.trans('ziven-money-leaderboard.forum.leaderboard-load-more')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  hasMoreResults() {
    return this.moreResults;
  }

  loadMore() {
    this.loading = true;
    this.loadResults(this.moneyLeaderboardList.length).then(this.parseResults.bind(this));
  }

  parseResults(results) {
    this.moreResults = !!results.payload.links && !!results.payload.links.next;
    [].push.apply(this.moneyLeaderboardList, results);
    this.loading = false;
    m.redraw();

    return results;
  }

  loadResults(offset = 0) {
    return app.store
      .find("moneyLeaderboardList", {
        page: {
          offset,
        },
      })
      .catch(() => {})
      .then(this.parseResults.bind(this));
  }
}
