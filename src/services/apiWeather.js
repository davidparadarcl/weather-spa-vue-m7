import axios from "axios";

export async function obtenerClima(lat, lon) {
    try {
        const respuesta = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=America%2FSantiago`,
        );

        return respuesta.data;
    } catch (error) {
        console.error("Error al obtener clima:", error);
        return null;
    }
}
