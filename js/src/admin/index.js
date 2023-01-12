import {extend, override} from 'flarum/extend';

app.initializers.add('ziven-money-leaderboard', () => {
  app.extensionData
    .for('ziiven-money-leaderboard')
    .registerSetting({
      setting: 'ziven-money-leaderboard.moneyLeaderBoardIcon',
      label: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-icon'),
      help: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-icon-help'),
      type: 'string',
    })
    .registerSetting({
      setting: 'ziven-money-leaderboard.moneyLeaderBoardEntryPosition',
      label: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-entry-position'),
      type: 'select',
      options: {
        0: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-entry-sideNav'),
        1: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-entry-topRightMenu')
      },
    });
});
