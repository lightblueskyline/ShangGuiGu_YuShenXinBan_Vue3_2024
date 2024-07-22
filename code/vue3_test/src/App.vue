<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">導航區</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link active-class="active" class="list-group-item" to="/01_props">01_props</router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="list-group-item"
                        to="/02_custom_event">02_custom-event</router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="list-group-item" to="/03_mitt">03_mitt</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Content Area -->
    <div class="content">
        <!-- Header -->
        <header class="bg-primary text-white text-center py-5">
            <div class="container">
                <h1>Vue3 組件間通信</h1>
                <p class="lead">A simple, responsive template with Bootstrap 4</p>
            </div>
        </header>

        <!-- Showcase -->
        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <RouterView></RouterView>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.navbar {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
}

.content {
    margin-left: 200px;
    padding: 20px;
}

.navbar-nav {
    flex-direction: column;
    width: 100%;
}

.nav-link {
    width: 100%;
}
</style>