<?php

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Ziven\MoneyLeaderboard\Controllers\MoneyLeaderboardController;
use Ziven\MoneyLeaderboard\Controllers\ListMoneyLeaderboardController;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__.'/less/forum.less')
        ->route('/moneyLeaderboard', 'moneyLeaderboard.index', MoneyLeaderboardController::class),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('allowViewLeaderbaord', function (ForumSerializer $serializer) {
            return $serializer->getActor()->hasPermission("moneyLeaderboard.allowViewLeaderbaord");
        }),

    (new Extend\Routes('api'))
        ->get('/moneyLeaderboard', 'moneyLeaderboard.get', ListMoneyLeaderboardController::class),

    (new Extend\Settings())
        ->serializeToForum('moneyLeaderBoardIcon', 'ziven-money-leaderboard.moneyLeaderBoardIcon')
        ->serializeToForum('moneyLeaderBoardEntryPosition', 'ziven-money-leaderboard.moneyLeaderBoardEntryPosition')
        ->serializeToForum('moneyLeaderBoardAdditionalInfo', 'ziven-money-leaderboard.moneyLeaderBoardAdditionalInfo')
        ->serializeToForum('moneyLeaderBoardHideMoneyText', 'ziven-money-leaderboard.moneyLeaderBoardHideMoneyText')
        ->serializeToForum('leaderboardMaxLoadCount', 'ziven-money-leaderboard.leaderboardMaxLoadCount', 'intval')
        ->serializeToForum('leaderboardInitLoadCount', 'ziven-money-leaderboard.leaderboardInitLoadCount', 'intval')
        ->serializeToForum('leaderboardLoadMoreCount', 'ziven-money-leaderboard.leaderboardLoadMoreCount', 'intval'),
];

return $extend;
