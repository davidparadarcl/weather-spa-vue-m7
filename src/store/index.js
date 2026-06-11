import { createStore } from "vuex";
import { loginUser } from "../services/authService";

export default createStore({
    state: {
        usuario: null,
        isAuthenticated: false,
    },

    mutations: {
        SET_USER(state, usuario) {
            state.usuario = usuario;
            state.isAuthenticated = true;
        },

        LOGOUT(state) {
            state.usuario = null;
            state.isAuthenticated = false;
        },
    },

    actions: {
        async login({ commit }, { email, password }) {
            const usuario = await loginUser(email, password);
            commit("SET_USER", usuario);
        },

        logout({ commit }) {
            commit("LOGOUT");
        },
    },

    getters: {
        usuario: (state) => state.usuario,
        isAuthenticated: (state) => state.isAuthenticated,
    },
});
