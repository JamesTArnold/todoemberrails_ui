import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | lists/list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:lists/list');
    assert.ok(route);
  });
});
