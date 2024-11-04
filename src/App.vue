<template>
  <SpeedInsights />
  <navigationBtn :navigation="navigation" @go-to="scrollTo"></navigationBtn>
  <div class="w-full md:w-1/2 mx-auto mb-10">
    <!-- <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view> -->
    <HomeView id="component1"></HomeView>
    <skillsComp id="component2"></skillsComp>


    <workExp id="component3" class="px-4"></workExp>
    <AboutView id="component4" class="px-4"></AboutView>
  </div>
  <footerVue></footerVue>
  <div class="customCursor hidden md:block" data-custom-cursor></div>
</template>

<script>
import { SpeedInsights } from '@vercel/speed-insights/vue';
import navigationBtn from "./components/navigationBtn.vue";
import HomeView from "./views/HomeView.vue";
import workExp from "./views/workExp.vue";
import AboutView from "./views/AboutView.vue";
import footerVue from "./components/footer.vue";
import skillsComp from "./skillsComp.vue";
export default {
  data() {

    return {

      navigation: [
        {
          name: "Me",
          link: "home",
          icon: "person",
          active: false,
          target: "component1",
          position: 100,
        },
        {
          name: "Skills",
          link: "exp",
          icon: "code",
          active: false,
          target: "component2",
          position: 100,
        },
        {
          name: "Experience",
          link: "exp",
          icon: "work",
          active: false,
          target: "component3",
          position: 100,
        },
        {
          name: "Projects",
          link: "about",
          icon: "apps",
          active: false,
          target: "component4",
          position: 100,
        },
      ],
    };
  },
  components: { navigationBtn, HomeView, workExp, AboutView, footerVue, skillsComp, SpeedInsights },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    const customCursor = document.querySelector("[data-custom-cursor]");
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      customCursor.style.left = `${posX}px`;
      customCursor.style.top = `${posY}px`;
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollTo(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        const position = element.offsetTop - 70;
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    },
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      this.navigation.forEach((item) => {
        const element = document.getElementById(item.target);
        if (element) {
          const elementPosition = element.offsetTop;
          const elementHeight = element.offsetHeight;
          const isVisible =
            scrollPosition >= elementPosition - 250 &&
            scrollPosition <= elementPosition + elementHeight - 250;
          item.active = isVisible;
        }
      });
    },
  },
};
</script>

<style>
:root {
  --primary-color: #070f2b;
  /* rgba(7, 15, 43) #070f2b*/
  --secondary-color: #1b1a55;
  /* rgba(27, 26, 85) #1b1a55*/
  --tertiary-color: #535c91;
  /* rgba(83, 92, 145) #535c91*/
  --text-color: #9290c3;
  /* rgba(83, 92, 145) #9290c3*/
}

body {
  background-color: var(--primary-color);
  color: var(--text-color);
  cursor: none !important;
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

.customCursor {
  width: 30px;
  height: 30px;
  border: 2px solid var(--tertiary-color);
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
}

.btn-custom {
  border-color: #635985;
  color: #bdafee !important;
}

.btn-custom:hover {
  border-color: white;
  color: #bdafee !important;
  background-color: unset !important;
}
</style>
