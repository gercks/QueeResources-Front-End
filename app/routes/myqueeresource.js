import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('queeresource', params.queeresource_id);
  },
  actions: {
  deleteQr(queeresource) {
    queeresource.deleteRecord()
    queeresource.save()
    .then(() => this.transitionTo('myqueeresources'))
    .then(() => this.get('flashMessages').success('Resource successfully deleted!'))
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.')
    });
  },
  updateQr (queeresource, params) {
      queeresource.save()
      .then(() => this.get('flashMessages').success('Resource successfully updated!'))
      .then(() => this.transitionTo('myqueeresources'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.')
      });
    },
}
});
