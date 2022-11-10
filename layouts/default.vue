<template>
  <div class="max-w-4xl mt-20 mx-auto px-5 sm:px-8" style="min-width: 350px">
    <navigation-component />
    <div>
      <nuxt keep-alive></nuxt>
    </div>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
export default {
  components: { NavigationComponent },
};
</script>
