<script setup>
import {reactive, onMounted} from "vue";

const state = reactive({
  advice: Object
});

const toggleAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => state.advice = data.slip)
    .catch(error => console.error('Unable to get items.', error));
};

onMounted(async () => {
  toggleAdvice();
});

</script>

<template>
  <div class="advice">
    <div>{{ state.advice.advice }}</div>

    <button @click="toggleAdvice">New advice</button>
  </div>
</template>

<style scoped>
.advice {
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