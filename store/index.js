export const state = () => ({
  auth: false,
  cart: [],
  like: [],
  comparison: [],
});

export const mutations = {
  addToStore(state, payload) {
    console.log(payload);
    let cart = JSON.parse(localStorage.getItem(payload.name));
    if (cart.includes(payload.id)) {
      cart.splice(cart.indexOf(payload.id), 1);
    } else {
      cart.push(payload.id);
    }
    localStorage.setItem(payload.name, JSON.stringify(cart));
    state[payload.name] = cart;
  },
  addToCart(state, payload) {
    let cart = JSON.parse(localStorage.getItem(payload.name));
    if (cart.find((item) => item.id == payload.obj.id)) {
      cart = cart.filter((item) => item.id != payload.obj.id);
    } else {
      cart.push(payload.obj);
    }
    localStorage.setItem(payload.name, JSON.stringify(cart));
    state[payload.name] = cart;
  },
  productCountUp(state, payload) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let findItem = cart.find((item) => item.id == payload.id);
    findItem.count = findItem.count + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    state.cart = cart;
  },
  productCountDown(state, payload) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let findItem = cart.find((item) => item.id == payload.id);
    if (findItem.count > 1) findItem.count = findItem.count - 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    state.cart = cart;
  },
  reloadStore(state) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      state.cart = cart;
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    if (localStorage.getItem("like")) {
      const like = JSON.parse(localStorage.getItem("like"));
      state.like = like;
    } else {
      localStorage.setItem("like", JSON.stringify([]));
    }
    if (localStorage.getItem("comparison")) {
      const comparison = JSON.parse(localStorage.getItem("comparison"));
      state.comparison = comparison;
    } else {
      localStorage.setItem("comparison", JSON.stringify([]));
    }
  },
};
