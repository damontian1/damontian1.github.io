<template>
  <div>
    <div v-if="$fetchState.pending"></div>
    <div v-else class="max-w-3xl py-8">
      <nuxt-link
        to="/"
        class="inline-flex items-center mb-8 border border-gray-400 mr-4 px-2 py-2 rounded-sm text-sm hover:bg-gray-300 shadow-md"
      >
        <svg viewBox="0 0 208 322" class="w-2 mr-2">
          <path
            d="M7.7 144l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L103.9 161l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L177.7 314c-9.4 9.4-24.6 9.4-33.9 0L7.8 178c-9.5-9.4-9.5-24.6-.1-34z"
          />
        </svg>
        <span>Go Back</span>
      </nuxt-link>
      <h2 class="font-bold leading-tight text-3xl">
        {{ currentData.title }}
      </h2>
      <div class="max-w-xs md:max-w-sm h-64 sm:h-72 md:h-80 bg-gray-50 my-8">
        <img
          :src="currentData.art"
          alt="poster art of project"
          class="w-full h-full object-cover rounded"
        />
      </div>
      <div class="mb-6">
        <span class="uppercase font-bold">Description:</span>
        <p>{{ currentData.objective }}</p>
      </div>
      <div class="mb-6">
        <div>
          <span class="uppercase font-bold">Website:</span>
        </div>
        <a :href="currentData.website" target="_blank" class="underline">{{
          currentData.website
        }}</a>
      </div>
      <div v-if="currentData.github" class="mb-6">
        <div>
          <span class="uppercase font-bold">Github:</span>
        </div>
        <a :href="currentData.github" target="_blank" class="underline">{{
          currentData.github
        }}</a>
      </div>
      <div>
        <div>
          <span class="uppercase font-bold">Tech Stack:</span>
        </div>
        <span
          v-for="(item, index) in currentData.stack"
          :key="index"
          class="inline-block bg-gray-200 border border-gray-400 rounded-sm shadow-md mr-1 mb-2 px-2 py-1"
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentData: "",
    };
  },
  fetchOnServer: false,
  async fetch() {
    try {
      const data = await this.$http.$get(
        "https://raw.githubusercontent.com/damontian1/damontian1.github.io/master/assets/data.json"
      );
      this.currentData = data.find((item) => {
        return item.slug === this.$route.params.slug;
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
