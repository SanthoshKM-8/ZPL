import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamRoute extends Route {
  @service database;

  model({ team_id }) {
    console.log('Team ID ' + team_id);
    let currentTeam = null;
    this.database.teams.forEach((team) => {
      if (team.id == team_id) {
        currentTeam = team;
      }
    });
    return currentTeam;
  }
}
