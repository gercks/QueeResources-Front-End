import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model () {
  // findAll makes a GET request to /queeresources
  return this.get('store').findAll('queeresource');
  return RSVP.Promise.resolve({});
}
});
