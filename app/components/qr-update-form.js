import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  updateQr () {
    this.sendAction('updateQr', this.get('model'));
  }
}
});
