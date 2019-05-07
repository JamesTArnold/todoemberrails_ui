import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return this.store.findRecord('list', id)
  },

  model() {
    return this.store.findAll('list');
  },

  model() {
    return this.store.findAll('item');
  }
});
