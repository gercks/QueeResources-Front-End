import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  // findAll makes a GET request to /queeresources
  return this.get('store').findAll('queeresource');
},
// actions: {
  // createQr(queer-resource) {
  //   console.log(queer-resource);
  //   let newList = this.get('store').createRecord('list', list);
  //   console.log(newList.get('isEmpty'))
    // newList.save();
  // },
  // deleteList(list) {
  //   list.deleteRecord();
  //   list.save();
  // },
// }

});
