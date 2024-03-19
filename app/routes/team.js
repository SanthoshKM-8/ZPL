import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamRoute extends Route {
  @service database;
  @service router;

  model(params) {
    const team_id = params.team_id;
    console.log('Team ID ' + team_id);
    let currentTeam = null;
    this.database.teams.forEach((team) => {
      if (team.id == team_id) {
        currentTeam = team;
        return;
      }
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(currentTeam);
      }, 500);
    }).then((currentTeam) => {
      return currentTeam;
    });
  }
}
