import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('about-queeresources', 'Integration | Component | about queeresources', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{about-queeresources}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#about-queeresources}}
      template block text
    {{/about-queeresources}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
