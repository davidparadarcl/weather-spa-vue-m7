<template>
    <div class="app">
        <header class="app-header">
            <h1>Weather SPA Chile</h1>

            <nav class="app-nav">
                <router-link to="/">Inicio</router-link>
            </nav>
        </header>

        <main>
            <router-view />
        </main>
    </div>
</template>
