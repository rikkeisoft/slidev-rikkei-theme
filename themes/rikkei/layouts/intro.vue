<template>
  <default class="intro" :logoHeader="logoHeader">
    <div class="flex items-center">
      <figure class="w-1/2 px-12">
        <img
          :src="introImage"
          height="312"
          width="312"
          class="
            rounded-full
            p-2
            bg-gradient-to-r
            from-red-50
            to-white
            dark:(from-white
            to-red-50)
          "
        />
      </figure>
      <div class="w-1/2">
        <slot />
      </div>
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
