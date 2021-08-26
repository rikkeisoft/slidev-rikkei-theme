<!--
  Usage:
```md
---
layout: two-cols
---
# Left
This shows on the left
::right::
# Right
This shows on the right
```
-->

<script setup lang="ts">
import { defineProps, defineComponent } from "vue";
import Default from "../layouts/default.vue";

const components = defineComponent({ Default });
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <default class="intro" :logoHeader="logoHeader">
    <div class="slidev-layout two-columns w-full h-full grid grid-cols-2">
      <div class="col-left" :class="props.class">
        <slot />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </default>
</template>
