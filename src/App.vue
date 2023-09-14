<template>
  <div>
    <router-link to="/">Home page</router-link>|
    <router-link to="/about">About page</router-link>
    <router-view></router-view>
    1111
  </div>
</template>

<script setup>
import { ref } from 'vue';

const a = ref(1);

console.log(a);
</script>
