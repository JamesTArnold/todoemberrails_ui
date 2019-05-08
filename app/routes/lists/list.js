import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return this.store.findRecord('list', id);
  },

  afterModel(model) {
    return model.get('item');
  }
});
