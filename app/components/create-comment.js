import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
 newComment: {
   text: null,
 },
 // message: null,
 actions: {
   createComment () {
     if ((this.get('newComment.text') !== null)) {
       this.sendAction('createComment', this.get('newComment'), this.get('queeresource'));
       this.set('newComment.text', null);
       // this.set('message', null);
     } else {
       this.get('flashMessages')
       .danger('Please write a comment before submitting');
     }
   },
 }
});
