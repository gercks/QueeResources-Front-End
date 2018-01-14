import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
return [
  {
    id: 1,
    name: 'Bob',
    hobby: 'having little lambs'
  },
  {
    id: 2,
    name: 'Eliza',
    hobby: 'hugging trees'
  },
  {
    id: 3,
    name: 'KJ',
    hobby: 'modelling'
  },
  {
    id: 4,
    name: 'Sally',
    hobby: 'mustangs'
  },
  {
    id: 5,
    name: 'Barb',
    hobby: 'idk Barb'
  },
  {
    id: 6,
    name: 'Oprah',
    hobby: 'running for president 2020'
  },
];
}
});
