import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import attachMenu from './attachMenu';
import MoneyLeaderboardIndexPage from './components/MoneyLeaderboardIndexPage';

app.initializers.add('ziven-money-leaderboard', () => {
  app.routes['moneyLeaderboard'] = {
    path: '/moneyLeaderboard',
    component: MoneyLeaderboardIndexPage,
  };

  attachMenu();
});