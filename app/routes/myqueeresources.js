import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.id'),
  model () {
  // findAll makes a GET request to /queeresources
  return this.get('store').query('queeresource', {
      filter: {
        user_id: this.getProperties('user').user
      }
    })
},
actions: {
  createQr(queeresource) {
    let newQr = this.get('store').createRecord('queeresource', queeresource)
    newQr.save()
    this.get('store').query('queeresource', {
        filter: {
          user_id: this.getProperties('user').user
        }
      })
    .then(() => this.transitionTo('queeresources'))
    .then(() => this.get('flashMessages').success('Resource successfully created!'))
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    });
  },
}
});