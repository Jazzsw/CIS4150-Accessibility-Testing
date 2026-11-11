<template>
  <div class="app-container">
    <AppHeader />
    <component
      v-for="(criterion) in criteriaComponents"
      :is="criterion"
    />
  </div>
</template>

<script setup lang="ts">
import { criteriaComponents } from './criteria';
import AppHeader from './components/AppHeader.vue';
</script>

<style>
body {
  font-family: 'Trebuchet MS', sans-serif;
  margin: 0;
  padding: 1rem;
  color: black;
  background-color: white;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
}

.wcag-card {
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  background: whitesmoke;
}

.card-header h2,
.card-header h3 {
  margin-top: 0;
}

.split-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.implementation-box {
  flex: 1;
  border: 1px solid lightgray;
  padding: 1rem;
  min-width: 280px;
}


.preview-area {
  background: whitesmoke;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
}
</style>
