import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MatchesMatchRoute extends Route {
  @service("database") db;

  // beforeModel() {
  //   console.log("before");
  // }

  model(params) {
    console.log(params);
    const match_id = params.match_id;
    console.log('Match ID ' + match_id);
    // this.controllerFor('team').set('match_id', match_id);
    let currentMatch = null;
    this.modelFor('matches').forEach((match) => {
      if (match.id == match_id) {
        currentMatch = match;
      }
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(currentMatch);
      },500)
    }).then((currentMatch) => {return currentMatch});
  }

  // serialize(model, params) {
  //   // console.log(model);
  //   return {match_id: model.id};
  // }
}
