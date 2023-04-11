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
    })
    .registerSetting({
      setting: 'ziven-money-leaderboard.moneyLeaderBoardHideMoneyText',
      label: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-hide-money-text'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'ziven-money-leaderboard.moneyLeaderBoardAdditionalInfo',
      label: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-additional-info'),
      help: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-additional-info-help'),
      type: 'string',
    })
    .registerSetting({
      setting: 'ziven-money-leaderboard.leaderboardMaxLoadCount',
      label: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-max-load-count'),
      placeholder:50,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'ziven-money-leaderboard.leaderboardInitLoadCount',
      label: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-init-load-count'),
      placeholder:20,
      min:1,
      type: 'number',
    })
    .registerSetting({
      setting: 'ziven-money-leaderboard.leaderboardLoadMoreCount',
      label: app.translator.trans('ziven-money-leaderboard.admin.settings.leaderboard-load-more-count'),
      placeholder:10,
      min:1,
      type: 'number',
    })
    .registerPermission({
        icon: 'fas fa-sort-amount-up',
        label: app.translator.trans('ziven-money-leaderboard.admin.permission.allow_view_leaderboard'),
        permission: 'moneyLeaderboard.allowViewLeaderbaord',
      },
      'moderate',
      90
    );
});
