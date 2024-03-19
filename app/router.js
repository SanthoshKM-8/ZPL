import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('matches', function () {
    this.route('match', { path: '/:match_id' });
  });
  this.route('team', { path: 'team/:team_id' }, function () {
    this.route('player', { path: 'player/:player_id' });
  });
  // this.route('match', { path: 'match/:match_id' });
  this.route('not-found', { path: '/*path' });
});
