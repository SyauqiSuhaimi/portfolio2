<template>
  <navigationBtn></navigationBtn>
  <div class="mainPage mx-auto grid content-center">
    <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </div>
</template>

<script>
import navigationBtn from "./components/navigationBtn.vue";
export default { components: { navigationBtn } };
</script>

<style>
:root {
  --primary-color: #070f2b;
  --secondary-color: #1b1a55;
  --tertiary-color: #535c91;
  --text-color: #9290c3;
}
.mainPage {
  width: 50dvw;
  height: 100dvh;
}

body {
  background-color: var(--primary-color);
  color: var(--text-color);
}
/* route transition */
.route-enter-from {
  opacity: 0;
  /* Change translateX to translateY */
  transform: translateY(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  /* Change translateX to translateY */
  transform: translateY(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
