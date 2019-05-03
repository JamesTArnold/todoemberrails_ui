import DS from 'ember-data';

export default DS.Model.extend({
  checked: DS.attr(),
  text: DS.attr(),

  list: DS.belongsTo('list')
});
