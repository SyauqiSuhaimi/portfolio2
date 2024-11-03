<template>
  <div class="navBody">
    <ul class="menu navigation gap-y-2">
      <li v-for="(nav, key) in navigation" :key="key" :class="nav.active
        ? 'bg-text-color text-primary-color rounded-box active'
        : 'bg-base-200 rounded-box'
        ">
        <router-link :to="{ name: nav.link }" class="pointer-events-none">
          <span class="material-symbols-outlined"> {{ nav.icon }} </span>
          <transition name="fade">
            <div v-if="nav.active" class="hidden md:block">{{ nav.name }}</div>
          </transition>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["navigation"],

  watch: {
    $route(to, from) {
      // Find the navigation item that matches the current route name
      const activeNavItem = this.navigation.find((nav) => nav.link === to.name);
      if (activeNavItem) {
        // Set all items to inactive
        this.navigation.forEach((nav) => (nav.active = false));
        // Set the matched item to active
        activeNavItem.active = true;
      }
    },
  },
  mounted() {
    // window.addEventListener("wheel", this.handleScroll);
  },
  beforeDestroy() {
    // window.removeEventListener("wheel", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      // Check the deltaY value to determine the scroll direction
      if (event.deltaY > 0) {
        // Scrolling down, navigate to the next page
        this.navigateToPage("next");
      } else if (event.deltaY < 0) {
        // Scrolling up, navigate to the previous page
        this.navigateToPage("prev");
      }
    },
    navigateToPage(direction) {
      // Logic to determine the next or previous route based on the direction
      let currentIndex = this.navigation.findIndex(
        (route) => route.link === this.$route.name
      );
      if (direction === "next") {
        currentIndex++;
        console.log("down", currentIndex);
        if (currentIndex >= this.navigation.length) {
          currentIndex = this.navigation.length - 1; // Loop back to the first page if at the end
        }
      } else if (direction === "prev") {
        currentIndex--;
        console.log("up", currentIndex);
        if (currentIndex < 0) {
          currentIndex = 0; // Loop back to the last page if at the beginning
        }
      }
      // Navigate to the determined route
      this.$router.push({ name: this.navigation[currentIndex].link });
    },
  },
};
</script>

<style>
.navBody {

  display: flex;
  justify-content: left;
  align-items: flex-start;
  height: 100dvh;
  /* Full height of the viewport */
  z-index: 1;
  /* High z-index value to ensure it's above all other elements */
  position: absolute;
  /* Fixed position to cover the whole viewport */

}

.navigation {
  position: fixed;

  /* Fixed position */
}

@media (max-width: 767px) {
  .navigation {
    background-color: rgba(83, 92, 145, 0.3);
    flex-direction: row !important;
    width: 100%;
    justify-content: space-evenly;
  }
}

.rounded-box {
  width: 55px;
  transition: width 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .navBody {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100dvh;
    /* Full height of the viewport */
    z-index: 1;
    /* High z-index value to ensure it's above all other elements */
    position: absolute;
  }

  .rounded-box.active {
    width: 150px;
  }
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
