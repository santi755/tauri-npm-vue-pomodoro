<template>
  <div class="h-screen w-screen bg-green-900 flex items-center justify-center">
    <h1 class="">Welcome to Tauri!!</h1>
    <Greet />

    <Button />
  </div>
</template>

<script setup lang="ts">
import Button from "../../components/atoms/Button.vue";
import Greet from "../../components/Greet.vue";
</script>
