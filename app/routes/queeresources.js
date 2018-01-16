import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  // findAll makes a GET request to /queeresources
  return this.get('store').findAll('queeresource');
},
actions: {
  createQr(queeresource) {
    let newQr = this.get('store').createRecord('queeresource', queeresource);
    newQr.save();
  },
}
});
