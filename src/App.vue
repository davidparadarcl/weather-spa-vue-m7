<template>
    <div class="app">
        <header class="app-header">
            <h1>Weather SPA Chile</h1>

            <nav class="app-nav">
                <router-link to="/">Inicio</router-link>
                <router-link to="/favoritos">Favoritos</router-link>

                <router-link v-if="!isAuthenticated" to="/login">
                    Login
                </router-link>

                <span v-if="isAuthenticated" class="user-name">
                    Hola, {{ usuario.nombre }}
                </span>

                <button
                    v-if="isAuthenticated"
                    class="logout-button"
                    @click="cerrarSesion"
                >
                    Cerrar sesión
                </button>
            </nav>
        </header>

        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const usuario = computed(() => store.getters.usuario);
const isAuthenticated = computed(() => store.getters.isAuthenticated);

const cerrarSesion = () => {
    store.dispatch("logout");
    router.push("/login");
};
</script>
