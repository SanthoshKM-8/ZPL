import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | match-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MatchCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <MatchCard>
        template block text
      </MatchCard>
    `);

    assert.dom().hasText('template block text');
  });
});
