import Component from '@ember/component';

export default Component.extend({

  actions: {
    updateChecked(ev) {
      ev.preventDefault();

      this.updateChecked({
        checked: this.checked
      });
    }
  }
});
