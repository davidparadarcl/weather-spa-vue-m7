<template>
    <main class="favorites-page">
        <section class="favorites-card">
            <h1>Mis lugares favoritos</h1>

            <p v-if="usuario">
                Estos son los lugares favoritos de {{ usuario.nombre }}.
            </p>

            <p v-if="usuario">
                Unidad preferida: {{ usuario.preferencias.unidad }}
            </p>

            <ul class="favorites-list">
                <li v-for="favorito in usuario.favoritos" :key="favorito">
                    {{ favorito }}
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const usuario = computed(() => store.getters.usuario);
</script>
