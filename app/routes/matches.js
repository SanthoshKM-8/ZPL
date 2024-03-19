import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MatchesRoute extends Route {
  @service database;

  queryParams = {
    teamFilter: {
      replace: true,
    },
  };

  model() {
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
    return matches;
  }
}
