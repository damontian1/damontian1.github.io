<template>
  <div>
    <div v-if="$fetchState.pending"></div>
    <div v-else>
      <div id="banner">
        <div class="max-w-screen-sm py-6">
          <div>
            <h1 class="font-bold leading-tight text-3xl">
              <span class="block pb-5">Hey, you found me!</span> I’m Damon, a
              Web Developer from New York City and I love building beautiful and
              intuitive web applications.
            </h1>
            <hr class="my-6" />
            <h4 class="mb-10 text-gray-800">
              <strong class="block text-black mb-1">My Top Skills:</strong>
              HTML, CSS, JavaScript, Vue.js, React.js, Laravel, Docker, Tailwind
              CSS, Bootstrap CSS, Sketch, Statamic CMS, Node.js, Express.js,
              Bash, Git, MySQL, MongoDB
            </h4>
            <div>
              <a
                class="border border-gray-400 mr-4 px-2 py-2 rounded-sm inline-block text-sm mb-3 sm:mb-0 hover:bg-gray-300 shadow-md"
                href="https://drive.google.com/file/d/1taUggxpHfAlLaRdsSojMrcTd8s8g3n4q/view"
              >
                SEE MY RESUME
              </a>
              <a
                class="border border-gray-400 mr-4 px-2 py-2 rounded-sm inline-block text-sm mb-3 sm:mb-0 hover:bg-gray-300 shadow-md"
                href="mailto:damontian@live.com"
              >
                EMAIL ME AT DAMONTIAN@LIVE.COM
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-10">
        <strong class="inline-block text-black mb-2">Projects:</strong>
        <div class="flex flex-row flex-wrap -mx-2 -my-2">
          <nuxt-link
            v-for="(item, index) in projects"
            :to="`/${item.slug}`"
            :key="index"
            class="px-2 py-2 w-40 sm:w-48 h-full"
          >
            <v-lazy-image
              :src="item.art"
              alt="Logo of project cover art"
              class="rounded-sm shadow-lg"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="h-20 w-full invisible"></div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },
  data() {
    return {
      projects: "",
    };
  },
  fetchOnServer: false,
  async fetch() {
    try {
      const data = await this.$http.$get(
        "https://raw.githubusercontent.com/damontian1/damontian1.github.io/master/assets/data.json"
      );
      this.projects = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
