export const state = () => ({
  isLogined: false,
  isOpenLoginBox: false,
  isRequireAuthen: false,
  userInfo: {},
  response: {
    isFailed: false,
    messenge: "",
    type: "",
  },
});

export const actions = {
  async action_checkUser({ commit }) {
    try {
      const userResponse = await fetch("");
      const dataUser = await userResponse.json();
      const userExisted = { ...dataUser };

      commit("action_checkUserSuccessed", userExisted);
    } catch (error) {
      commit("action_checkUserFailed", error);
    }
  },
  action_openLoginBox({ commit }) {
    commit("action_openLoginBoxSuccessed");
  },
  action_closeLoginBox({ commit }) {
    commit("action_closeLoginBoxSuccessed");
  },
  actions_requireAuthenimmediately({ commit }) {
    commit("actions_requireAuthenimmediatelySuccessed");
  },
  actions_closeRequireAuthenimmediately({ commit }) {
    commit("actions_closeRequireAuthenimmediatelySuccessed");
  },
};

export const mutations = {
  action_checkUserSuccessed(state, userExisted) {
    state = {
      response: {
        messenge: "Login successed",
        type: "success",
      },
      isLogined: true,
      userInfo: userExisted,
    };
  },
  action_checkUserFailed(state, error) {
    state = {
      response: {
        type: "danger",
        messenge: error,
        isFailed: true,
      },
    };
  },
  action_openLoginBoxSuccessed(state) {
    state.isOpenLoginBox = true;
  },
  action_closeLoginBoxSuccessed(state) {
    state.isOpenLoginBox = false;
  },
  actions_requireAuthenimmediatelySuccessed(state) {
    state.isRequireAuthen = true;
  },
  actions_closeRequireAuthenimmediatelySuccessed(state) {
    state.isRequireAuthen = false;
  },
};
