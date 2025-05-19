<script setup>
import {reactive, onMounted} from "vue";

const state = reactive({
  joke: Object,
  dadJoke: Object,
  isDad: false
});

const toggleJoke = () => {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then(response => response.json())
    .then(data => state.joke = data)
    .catch(error => console.error('Unable to get items.', error));

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => state.dadJoke = data);
};

const toggleDad = () => {
  state.isDad = !state.isDad;
}

onMounted(async () => {
  toggleJoke();
});

</script>

<template>
  <div class="joke">
    <div v-if="state.isDad == false">
      <div v-if="state.joke.type == 'twopart'">
        {{ state.joke.setup }}
        {{ state.joke.delivery }}
      </div>
      <div v-else>
        {{ state.joke.joke }}
      </div>
    </div>
    <div v-else>
      {{ state.dadJoke.joke }}
    </div>
    
    <div class="buttons">
      <button @click="toggleJoke">New joke</button>
      <button @click="toggleDad" :class="state.isDad ? '' : 'red'">Dad Version</button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 20px;
}

.red {
  background-color: red;
}

.joke {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 10px;
}

button {
  border-style: none;
  border-radius: 15px;
  background-color: seagreen;
  padding: 5px;
}
</style>