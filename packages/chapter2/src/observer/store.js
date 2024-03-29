import { handler } from './pubsub';

export class Store {
  constructor({ state, mutations, actions }) {
    this.state = new Proxy(state, handler);
    this.mutations = mutations;
  }

  commit(action, payload) {
    this.mutations[action](this.state, payload);
  }
}
