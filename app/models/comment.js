import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  user_id: DS.attr('number'),
  queeresource_id: DS.attr('number'),
  queeresource: DS.belongsTo('queeresource'),
  user: DS.belongsTo('user'),
  editable: DS.attr('boolean')
});
