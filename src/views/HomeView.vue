<script setup>
import { ref, computed } from "vue";
import ciudades from "../services/weatherService";

const busqueda = ref("");

const ciudadesFiltradas = computed(() => {
    const texto = busqueda.value.toLowerCase().trim();

    if (!texto) {
        return ciudades;
    }

    return ciudades.filter((ciudad) =>
        ciudad.nombre.toLowerCase().includes(texto),
    );
});
</script>

<template>
    <div class="container">
        <h1>Clima en Chile</h1>

        <form class="search-form" @submit.prevent>
            <label for="busqueda">Buscar ciudad</label>

            <input
                id="busqueda"
                v-model="busqueda"
                type="text"
                placeholder="Ej: Santiago"
            />
        </form>

        <p v-if="ciudadesFiltradas.length === 0" class="no-results">
            No se encontraron ciudades.
        </p>

        <div v-else class="city-grid">
            <div
                v-for="ciudad in ciudadesFiltradas"
                :key="ciudad.id"
                class="city-card"
            >
                <img
                    :src="`/src/assets/img/${ciudad.imagen}`"
                    :alt="ciudad.nombre"
                />

                <h3>{{ ciudad.nombre }}</h3>

                <RouterLink :to="`/ciudad/${ciudad.id}`">
                    Ver detalle
                </RouterLink>
            </div>
        </div>
    </div>
</template>
