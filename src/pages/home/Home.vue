<template>
  <div class="h-screen w-screen bg-green-900 p-8">
    <h1 class="w-full text-white text-center mb-10">
      ¡Empieza el Pomodoro Time!
    </h1>

    <!-- <Greet /> -->

    <div class="w-full text-center mb-6">
      <Tag class="" tag="Vue" tagType="3" />
    </div>
    <div class="w-full text-center">
      <Button />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../../components/atoms/Button.vue";
import Tag from "../../components/atoms/Tag.vue";
import Greet from "../../components/Greet.vue";
</script>
