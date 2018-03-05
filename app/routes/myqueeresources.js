import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.id'),
  model () {
  // returns index of resources created by current user
  return this.get('store').query('queeresource', {
      filter: {
        user_id: this.getProperties('user').user
      }
    });
},
actions: {
  // only visible to a signed in user, allows them to create a resource
  createQr(queeresource) {
    let newQr = this.get('store').createRecord('queeresource', queeresource);
    newQr.save();
    this.get('store').query('queeresource', {
        filter: {
          user_id: this.getProperties('user').user
        }
      })
    .then(() => this.transitionTo('queeresources'))
    .then(() => this.get('flashMessages').success('Resource successfully created!'))
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
    });
  },
}
});
