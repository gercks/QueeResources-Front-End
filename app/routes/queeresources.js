import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  auth: Ember.inject.service(),
  model () {
  // findAll makes a GET request to /queeresources
  // returns index of all files which are then sorted by orgtype
  return this.get('store').findAll('queeresource');
}
});
