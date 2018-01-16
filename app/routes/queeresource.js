import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    // findRecord makes a GET request to /lists/:list_id
    // the api returns a single list
    // ember uses the models/list.js to build an ember list object with that data
    // and returns it as model to the template
    return this.get('store').findRecord('queeresource', params.queeresource_id);
  },
  actions: {
  deleteQr(queeresource) {
    queeresource.deleteRecord();
    queeresource.save();
  },
  updateQr (queeresource) {
      console.log(queeresource);
      // this.get('store').findRecord(list);
      // list.title.set()
    },
  // updateQr (queeresource) {
  //     queeresource.save();
  //   },
}
});
