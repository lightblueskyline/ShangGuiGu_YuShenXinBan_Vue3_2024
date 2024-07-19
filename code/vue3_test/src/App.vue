<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Content Area -->
    <div class="content">
        <!-- Header -->
        <header class="bg-primary text-white text-center py-5">
            <div class="container">
                <h1>Welcome to My Website</h1>
                <p class="lead">A simple, responsive template with Bootstrap 4</p>
            </div>
        </header>

        <!-- Showcase -->
        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2>Showcase Section</h2>
                        <p class="lead">This is a section where you can showcase your content.</p>
                        <a href="#" class="btn btn-primary btn-lg">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts" name="App">
// import { ref } from "vue";
import Count from "./components/Count.vue";
import LoveTalk from "./components/LoveTalk.vue";
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