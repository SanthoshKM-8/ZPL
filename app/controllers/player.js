import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class PlayerController extends Controller {
  @service router;

  @action
  backToTeam() {
    this.router.transitionTo('team');
  }
}
