import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MatchesMatchRoute extends Route {
  @service database;

  model({ match_id }) {
    console.log('Match ID ' + match_id);
    // this.controllerFor('team').set('match_id', match_id);
    let currentMatch = null;
    this.database.matches.forEach((match) => {
      if (match.id == match_id) {
        currentMatch = match;
      }
    });
    return currentMatch;
  }
}
