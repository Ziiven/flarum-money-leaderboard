import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import attachMenu from './attachMenu';
import MoneyLeaderboardIndexPage from './components/MoneyLeaderboardIndexPage';

app.initializers.add('ziven-money-leaderboard', () => {
  app.routes['moneyLeaderboard'] = {
    path: MoneyLeaderboardIndexPage.slug || '/moneyLeaderboard',
    component: MoneyLeaderboardIndexPage,
  };

  attachMenu();
});