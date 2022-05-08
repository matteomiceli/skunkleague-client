<template>
  <div class="flex h-8 absolute bottom-0 w-full justify-center items-center text-sm text-gray-500">
    {{ `SkunkLeague 2022 -- version ${version}` }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VERSION from "../globals";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data(): {
    version: string;
  } {
    return {
      version: VERSION,
    };
  },
});
</script>
