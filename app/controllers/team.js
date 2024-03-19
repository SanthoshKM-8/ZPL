import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TeamController extends Controller {
    @service router;

    @action
    backToMatch() {
        this.router.transitionTo('match', this.match_id);
    }
}
