import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';

export default function () {
  extend(HeaderSecondary.prototype, 'items', function (items) {
    const moneyLeaderBoardIcon = app.forum.attribute("moneyLeaderBoardIcon");

    items.add(
      'MoneyLeaderboard',
      <Button
        className="Button Button--flat"
        style="width:36px"
        onclick={() => {
          window.location.href = app.route('moneyLeaderboard');
        }}
        icon={moneyLeaderBoardIcon}
      >
        {app.translator.trans('ziven-money-leaderboard.forum.leaderboard-name')}
      </Button>,
      15
    );
  });
}
