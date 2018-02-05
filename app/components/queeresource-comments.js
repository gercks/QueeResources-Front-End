import Ember from 'ember';

export default Ember.Component.extend({
    auth: Ember.inject.service(),
  model () {
  return this.get('store').findAll('comment');
},
actions: {
  deleteComment (comment) {
        comment.deleteRecord();
        comment.save();
      },
}
});
