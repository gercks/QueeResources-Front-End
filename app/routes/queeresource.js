import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  model (params) {
    // findRecord makes a GET request to /lists/:list_id
    // the api returns a single list
    // ember uses the models/list.js to build an ember list object with that data
    // and returns it as model to the template
    return this.get('store').findRecord('queeresource', params.queeresource_id);
  },
  actions: {
    createComment(comment, queeresource) {
      let newComment = this.get('store').createRecord('comment', comment);
      queeresource.get('comments').pushObject(newComment);
      newComment.save();
      this.get('flashMessages').success('comment posted');
    },
  },
});
