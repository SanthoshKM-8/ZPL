import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MatchesRoute extends Route {
  @service database;

  queryParams = {
    teamFilter: {
      replace: true,
      refreshModel: true,
    },
  };

  model(params) {
    console.log(params);
    const teamFilter = params.teamFilter;
    const matches = [
      {
        id: 101,
        team1_id: 1,
        team1_name: 'Platform',
        team2_id: 2,
        team2_name: 'Billing',
        no: 1,
        venue: 'Kappalur Zoho',
        date: '2024-03-22',
        time: '05:00 PM',
      },
      {
        id: 102,
        team1_id: 1,
        team1_name: 'Platform',
        team2_id: 3,
        team2_name: 'Invoice',
        no: 2,
        venue: 'Chennai Zoho',
        date: '2024-03-23',
        time: '05:00 PM',
      },
      {
        id: 103,
        team1_id: 2,
        team1_name: 'Billing',
        team2_id: 3,
        team2_name: 'Invoice',
        no: 3,
        venue: 'Thenkasi Zoho',
        date: '2024-03-24',
        time: '05:00 PM',
      },
    ];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(matches);
      }, 500);
    }).then((matches) => {
      if (teamFilter) {
        let filteredMatches = [];
        matches.forEach((match) => {
          if (
            match.team1_name == teamFilter ||
            match.team2_name == teamFilter
          ) {
            filteredMatches.push(match);
          }
        });
        return filteredMatches;
      } else {
        return matches;
      }
    });
  }

  //Resetting queryparams to default
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('teamFilter', null);
    }
  }
}
