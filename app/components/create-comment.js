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
     // checks to make sure comment isnt empty
     if ((this.get('newComment.text') !== null)) {
       // send action up to queeresource.js
       this.sendAction('createComment', this.get('newComment'), this.get('queeresource'));
       this.set('newComment.text', null);
     } else {
       // doesn't allow comment to be posted if it's empty
       this.get('flashMessages')
       .danger('Please write a comment before submitting');
     }
   },
 }
});
