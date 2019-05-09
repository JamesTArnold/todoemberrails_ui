import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    checkedSaved(checkedValue) {
      this.model.setProperties(checkedValue);
      console.log(checkedValue);
    }
  }
});
