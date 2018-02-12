import Ember from 'ember';

export default Ember.Component.extend({
    auth: Ember.inject.service(),
    classNames: ['updateform'],
    classNameBindings: ['updateformhidden'],
    updateformhidden: true,
//   model () {
//   return this.get('store').findAll('comment');
// },
actions: {
  deleteComment (comment) {
        comment.deleteRecord();
        comment.save();
      },
    }
});
