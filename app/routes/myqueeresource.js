import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    // returns a single resource, can only be requested by user who created it
    return this.get('store').findRecord('queeresource', params.queeresource_id);
  },
  actions: {
    // deletes a resource, option only visible to user that created that resource
  deleteQr(queeresource) {
    queeresource.deleteRecord();
    queeresource.save()
    .then(() => this.transitionTo('myqueeresources'))
    .then(() => this.get('flashMessages').success('Resource successfully deleted!'))
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
    });
  },
  // updates a resource, option only visible to user that created that resource
  updateQr (queeresource, params) {
      queeresource.save()
      .then(() => this.get('flashMessages').success('Resource successfully updated!'))
      .then(() => this.transitionTo('myqueeresources'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
}
});
