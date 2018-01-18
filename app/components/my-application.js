import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
//   model () {
//   return this.get('store').query('queeresource', {
//       filter: {
//         orgtype: this.getProperties('orgtype').orgtype
//       }
//     })
// },

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
