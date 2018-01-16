import Ember from 'ember';

export default Ember.Component.extend({
  model (params) {
    // findRecord makes a GET request to /queeresources/:queeresource_id
    // the api returns a single queeresource
    // ember uses the models/queeresource.js to build an ember list object with that data
    // and returns it as model to the template
    return this.get('store').findRecord('queeresource', params.queeresource_id);
  },
  // updatedName: {},
  // actions: {
    // updateList (list) {
    //   console.log(list);
    //   this.get('store').findRecord(list);
    //   list.title.set()
    // },
    // updateList (list) {
    //   list.save();
    // }
  // }
});
