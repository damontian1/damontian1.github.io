<template>
  <div class="max-w-4xl mx-auto px-5 mt-20" style="min-width: 350px">
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