import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model () {
    // sends query to rails index function
    // returns an index comprised only of resources with matching orgtype
    return this.get('store').query('queeresource', {
      filter: {
        orgtype: 'Performing/Live Arts Groups'
      }
});
}
});
