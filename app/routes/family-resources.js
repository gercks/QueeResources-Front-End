import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model () {
    return this.get('store').query('queeresource', {
      filter: {
        orgtype: 'Resources for Families and Support Systems'
      }
});
}
});
