<template>
  <section class="wcag-card">
    <header class="card-header">
      <h2>4.1.2</h2>
      <h3>Name, Role, Value</h3>
      <p>For all user interface components, the name and role can be programmatically determined, and states, properties, and values can be set and programmatically notified to assistive technology.</p>
    </header>

    <div class="split-container">
      <div class="implementation-box">
        <header>
          <h4>Failing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div>
              <input id="failing-newsletter" v-model="failingSubscribed" type="checkbox" />
              <span>Subscribe to newsletter</span>
            </div>
          </div>
        </div>
      </div>
      <div class="implementation-box">
        <header>
          <h4>Passing Implementation</h4>
        </header>
        <div class="preview-area">
          <div>
            <div>
              <label for="passing-newsletter">
                <input id="passing-newsletter" v-model="passingSubscribed" type="checkbox" />
                Subscribe to newsletter
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const failingSubscribed = ref(false);
const passingSubscribed = ref(false);
</script>
