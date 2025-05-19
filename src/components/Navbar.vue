<script setup>
import { RouterLink, useRoute} from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
    <div class="navbar">
        <RouterLink to="/"><div class="link">Home</div></RouterLink>
        <div>
            <RouterLink to="/joke"><div class="link">Joke</div></RouterLink>
            <RouterLink to="/advice"><div class="link">Advice</div></RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        display: flex;
        background-color: seagreen;
        justify-content: space-between;
        padding: 10px 10vw;
    }

    .navbar > div {
        display: flex;
        gap: 10vw;
    }

    .link {
        padding: 10px;
        border-radius: 5px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .link:hover {
        background-color: color-mix(in srgb, seagreen, black 15%);
    }
</style>