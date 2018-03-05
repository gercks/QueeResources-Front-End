import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  model (params) {
    // returns a single resource
    return this.get('store').findRecord('queeresource', params.queeresource_id);
  },
  actions: {
    // only available to signed in users, allows them to add comments
    createComment(comment, queeresource) {
      let newComment = this.get('store').createRecord('comment', comment);
      queeresource.get('comments').pushObject(newComment);
      newComment.save();
      this.get('flashMessages').success('comment posted');
    },
  },
});
