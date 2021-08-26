<template>
  <default class="intro" :logoHeader="logoHeader">
    <div class="flex items-center">
      <div class="w-1/2 px-12">
        <slot />
      </div>
      <figure class="w-1/2">
        <img
          :src="introImage"
          height="312"
          width="312"
          class="
            rounded-3xl
            p-10
            bg-transparent
            shadow-sm
            rounded
            filter
          "
        />
      </figure>
    </div>
  </default>
</template>

<script setup lang="ts">
import { defineProps, defineComponent } from "vue";
import Default from "../layouts/default.vue";

const components = defineComponent({ Default });
const props = defineProps({
  introImage: {
    type: String,
  },
});
</script>
