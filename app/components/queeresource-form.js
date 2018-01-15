import Ember from 'ember';

export default Ember.Component.extend({
  newQr: {
  name: null,
  description: null,
  location: null,
  website: null,
  orgtype: null,
  popfocus: null
},
actions: {
  createQr () {
    this.sendAction('createQr', this.get('newQr'));
    this.set('newQr.name', null);
    this.set('newQr.description', null);
    this.set('newQr.location', null);
    this.set('newQr.website', null);
    this.set('newQr.orgtype', null);
    this.set('newQr.popfocus', null);
  }
}
});
