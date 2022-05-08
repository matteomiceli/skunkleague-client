<template>
  <NavBar />
  <div class="viewContainer mx-auto w-11/12 mt-24 max-w-3xl">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: { NavBar, Footer },
});
</script>
