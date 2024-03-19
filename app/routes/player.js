import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PlayerRoute extends Route {
  @service database;
  @service router;

  model({ player_id }) {
    console.log('Player ID ' + player_id);
    let currentPlayer = null;
    this.database.players.forEach((player) => {
      if (player.id == player_id) {
        currentPlayer = player;
      }
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(currentPlayer);
      }, 500);
    }).then((currentPlayer) => {
      return currentPlayer;
    });
  }
}
