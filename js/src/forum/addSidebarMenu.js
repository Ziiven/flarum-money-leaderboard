import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

export default function addSidebarMenu() {
  extend(IndexPage.prototype, 'navItems', function (items) {
    const moneyLeaderBoardIcon = app.forum.attribute("moneyLeaderBoardIcon");

    items.add(
      'MoneyLeaderboard',
      <LinkButton icon={moneyLeaderBoardIcon} href={app.route('moneyLeaderboard')}>
        {app.translator.trans('ziven-money-leaderboard.forum.leaderboard-name')}
      </LinkButton>,
      15
    );

    return items;
  });
}
