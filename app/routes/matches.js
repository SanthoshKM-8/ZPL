import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { getOwner } from '@ember/application';

export default class MatchesRoute extends Route {
  @service database;
  @service router;

  // get matches() {
  //   return getOwner(this).lookup("service:data");
  // }

  queryParams = {
    teamFilter: {
      replace: true,
      refreshModel: true,
    },
    venueFilter: {
      refreshModel: true,
    }
  };

  model(params) {
    console.log(params);
    // console.log(this.matches);
    const teamFilter = params.teamFilter;
    const venueFilter = params.venueFilter;
    const matches = A([
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
        venue: 'Tenkasi Zoho',
        date: '2024-03-24',
        time: '05:00 PM',
      },
    ]);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(matches);
      }, 500);
    }).then((matches) => {
      if (teamFilter || venueFilter) {
        let filteredMatches = A([]);
        matches.forEach((match) => {
          if (!venueFilter &&
            (match.team1_name == teamFilter ||
              match.team2_name == teamFilter)
          ) {
            filteredMatches.push(match);
          }
          if (!teamFilter && (match.venue.includes(venueFilter))) {
            filteredMatches.push(match);
          }
          if (teamFilter && venueFilter && (match.team1_name == teamFilter ||
            match.team2_name == teamFilter) && (match.venue.includes(venueFilter))) {
            filteredMatches.push(match);
          }
        });
        return filteredMatches;
      } else {
        return matches;
      }
    });
  }

  redirect(model,transition) {
    if (model.get('length') === 1) {
      // console.log(model.get('firstObject'));
      this.router.transitionTo('matches.match', model.get('firstObject'));
    }
  }

  //Resetting queryparams to default
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('teamFilter', null);
    }
  }
}
