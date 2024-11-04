<template lang="">
    <div class="flex justify-center flex-wrap">
      <template v-for="(tech, index) in tech" :key="index">
        <div class=" btn-custom m-2 text-color-primary flex flex-col w-24 h-24 hover:cursor-none text-md">
          <figure>
            <img :src="tech.url" :alt="tech.name" width="25" />
          </figure>
          {{ tech.name }}
        </div>
      </template>
</div>
</template>
<script>
export default {
  data() {
    return {
      tech: [
        { name: "Vue JS", url: "/skill/Vue.png" },
        { name: "Angular JS", url: "/skill/angular.png" },
        { name: "HTML", url: "/skill/html.png" },
        { name: "CSS", url: "/skill/css.png" },
        { name: "Javascript", url: "/skill/js.png" },
        { name: "Typescript", url: "/skill/ts.png" },
        { name: "Nest JS", url: "/skill/nest.png" },
        { name: "Quasar", url: "/skill/quasar.png" },
        { name: ".Net", url: "/skill/net.png" },
        { name: "PHP", url: "/skill/php.png" },
      ],
    }
  }
}
</script>
<style>
.btn-custom {
  border: 1px solid #635985;
  color: #bdafee !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 500;
  font-size: .875rem;
  gap: 5px;
}

.btn-custom:hover {
  border-color: white;
  color: #bdafee !important;
  background-color: unset !important;
}
</style>