import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  website: DS.attr('string'),
  orgtype: DS.attr('string'),
  popfocus: DS.attr('string')
});
