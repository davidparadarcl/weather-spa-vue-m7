<template>
    <main class="login-page">
        <section class="login-card">
            <h1>Iniciar sesión</h1>
            <p>Ingresa con un usuario de prueba para ver tus favoritos.</p>

            <form @submit.prevent="handleLogin" class="login-form">
                <div class="form-group">
                    <label for="email">Correo</label>
                    <input
                        id="email"
                        v-model="email"
                        type="email"
                        placeholder="david@test.com"
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input
                        id="password"
                        v-model="password"
                        type="password"
                        placeholder="123456"
                        required
                    />
                </div>

                <p v-if="error" class="error-message">{{ error }}</p>

                <button type="submit">Entrar</button>
            </form>

            <div class="login-help">
                <p><strong>Usuario de prueba:</strong> david@test.com</p>
                <p><strong>Contraseña:</strong> 123456</p>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const email = ref("");
const password = ref("");
const error = ref("");

const router = useRouter();
const store = useStore();

const handleLogin = async () => {
    error.value = "";

    try {
        await store.dispatch("login", {
            email: email.value,
            password: password.value,
        });

        router.push("/");
    } catch (err) {
        error.value = err.message;
    }
};
</script>
