import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name: "groceries",
        item1: "bread",
        item2: "apples"
      },
      {
        name: "meetings",
        item1: "1 pm with hubert",
        item2: "2 pm with Bob"
      }
    ];
  }
});
