<script setup>
import { computed, onMounted, ref } from "vue";
import ciudades from "../services/weatherService";
import { obtenerClima } from "../services/apiWeather";

const props = defineProps({
    id: String,
});

const ciudad = ciudades.find((c) => c.id === Number(props.id));

const clima = ref(null);
const cargando = ref(true);

onMounted(async () => {
    if (ciudad) {
        clima.value = await obtenerClima(ciudad.latitude, ciudad.longitude);
    }

    cargando.value = false;
});

const minimaSemanal = computed(() => {
    if (!clima.value?.daily?.temperature_2m_min) {
        return null;
    }

    return Math.min(...clima.value.daily.temperature_2m_min);
});

const maximaSemanal = computed(() => {
    if (!clima.value?.daily?.temperature_2m_max) {
        return null;
    }

    return Math.max(...clima.value.daily.temperature_2m_max);
});

const promedioSemanal = computed(() => {
    if (!clima.value?.daily?.temperature_2m_max) {
        return null;
    }

    const temperaturas = clima.value.daily.temperature_2m_max;
    const suma = temperaturas.reduce((total, temp) => total + temp, 0);

    return (suma / temperaturas.length).toFixed(1);
});
</script>

<template>
    <section class="detail-container">
        <router-link class="back-link" to="/"> ← Volver al inicio </router-link>

        <article v-if="ciudad" class="detail-card">
            <h2>{{ ciudad.nombre }}</h2>

            <img
                :src="`/src/assets/img/${ciudad.imagen}`"
                :alt="ciudad.nombre"
                class="detail-image"
            />

            <div class="detail-info">
                <p><strong>Latitud:</strong> {{ ciudad.latitude }}</p>
                <p><strong>Longitud:</strong> {{ ciudad.longitude }}</p>

                <p v-if="cargando">Cargando clima...</p>

                <template v-if="clima && clima.current">
                    <p>
                        <strong>Temperatura:</strong>
                        {{ clima.current.temperature_2m }} °C
                    </p>

                    <p>
                        <strong>Humedad:</strong>
                        {{ clima.current.relative_humidity_2m }} %
                    </p>

                    <p>
                        <strong>Viento:</strong>
                        {{ clima.current.wind_speed_10m }} km/h
                    </p>
                </template>

                <section v-if="clima && clima.daily">
                    <h3>Estadísticas de la semana</h3>

                    <p>
                        <strong>Mínima semanal:</strong>
                        {{ minimaSemanal }} °C
                    </p>

                    <p>
                        <strong>Máxima semanal:</strong>
                        {{ maximaSemanal }} °C
                    </p>

                    <p>
                        <strong>Promedio semanal:</strong>
                        {{ promedioSemanal }} °C
                    </p>
                </section>

                <section v-if="clima && clima.daily">
                    <h3>Pronóstico semanal</h3>

                    <div
                        v-for="(fecha, index) in clima.daily.time"
                        :key="fecha"
                    >
                        <p>
                            {{ fecha }}: mín
                            {{ clima.daily.temperature_2m_min[index] }} °C / máx
                            {{ clima.daily.temperature_2m_max[index] }} °C
                        </p>
                    </div>
                </section>

                <p v-if="!cargando && !clima">
                    No se pudo cargar la información climática.
                </p>
            </div>
        </article>

        <article v-else class="detail-card">
            <h2>Ciudad no encontrada</h2>
        </article>
    </section>
</template>
