import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | i-i-s-tesst-new-class1-l', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let route = this.owner.lookup('route:i-i-s-tesst-new-class1-l');
    assert.ok(route);
  });
});
