import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  updateQr () {
    // sends action up to myqueeresource.js route
    this.sendAction('updateQr', this.get('model'));
  }
}
});
