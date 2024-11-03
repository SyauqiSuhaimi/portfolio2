<template>
  <footer class="footer items-center p-4 bg-text-color text-primary-color place-self-center">
    <aside class="items-center grid-flow-col">
      <p>Copyright © 2024 - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <template v-for="(item, index) in footer" :key="index">
        <a :href="item.link" target="_blank" :data-bs-title="item.tooltip">
          <i :class="`fa fa-lg ${item.icon}`" aria-hidden="true"></i></a>
      </template>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footer: [
        {
          icon: "fa-file-text",
          link: "https://drive.google.com/file/d/1hRuiT2narXGxGANctYuwpxc3RKvdBr18/view?usp=sharing",
          tooltip: "Download Resume",
        },
        {
          icon: "fa-github",
          link: "https://github.com/SyauqiSuhaimi",
        },
        {
          icon: "fa-linkedin-square",
          link: "https://www.linkedin.com/in/muhammad-syauqi-64b52118b/",
        },
        {
          icon: "fa-envelope-o",
          link: "mailto:muhammadsyauqi122@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
.footer {
  row-gap: 1rem;
}
</style>
