<?php

use Flarum\Extend;
use Ziven\MoneyLeaderboard\Controllers\MoneyLeaderboardController;
use Ziven\MoneyLeaderboard\Controllers\ListMoneyLeaderboardController;

$extend = [
    (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__.'/less/forum.less')
        ->route('/moneyLeaderboard', 'moneyLeaderboard.index', MoneyLeaderboardController::class),

    (new Extend\Locales(__DIR__ . '/locale')),

    (new Extend\Routes('api'))
        ->get('/moneyLeaderboard', 'moneyLeaderboard.get', ListMoneyLeaderboardController::class),

    (new Extend\Settings())
        ->serializeToForum('moneyLeaderBoardIcon', 'ziven-money-leaderboard.moneyLeaderBoardIcon')
        ->serializeToForum('moneyLeaderBoardEntryPosition', 'ziven-money-leaderboard.moneyLeaderBoardEntryPosition'),
];

return $extend;