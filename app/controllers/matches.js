import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MatchesController extends Controller {
  @service database;

  queryParams = ['teamFilter'];
  @tracked teamFilter = null;

  get filteredMatches() {
    let matches = [];
    this.database.matches.forEach((match) => {
      if (
        match.team1_name == this.teamFilter ||
        match.team2_name == this.teamFilter
      ) {
        matches.push(match);
      }
    });
    // console.log(matches.length);
    if (matches.length === 0) {
      return this.database.matches;
    } else {
      return matches;
    }
  }
}
