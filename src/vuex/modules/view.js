const state = {
  isRight: false,
};

// getters
const getters = {
  getIsRight: (state) => state.isRight,
};

const actions = {};

// mutations
const mutations = {
  isRight(res, data) {
    res.isRight = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
