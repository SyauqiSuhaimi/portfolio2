<template>
  <div class="flex gap-y-5 justify-evenly flex-wrap">
    <cardComponent v-for="(p, index) in project" :key="index" :item="p"></cardComponent>
  </div>
</template>

<script>
import fmsImage from "../assets/fms.png";
import nftImage from "../assets/nft3.png";
import wiseImage from "../assets/wise2.png";
import cardComponent from "@/components/cardComponent.vue";
export default {
  components: { cardComponent },
  data() {
    return {
      project: [
        {
          no: 1,
          title: "Facility Management System",
          description:
            "Software solution designed to help organizations efficiently manage and tracks their physical assets and facilities.",
          link: "http://myces-fms.com/#/Home",
          tech: [
            "Vue JS",
            "Nest JS",
            "HTML/CSS",
            "Javascript",
            "Typescript",
            "Quasar",
          ],
          image: fmsImage,
        },
        {
          no: 2,
          title: "NeedForTrees",
          description:
            "Built using Vue.js, this responsive website introduces NeedForTrees, a project aimed at raising awareness about deforestation and showcasing cutting-edge NFT technology.",
          link: "http://needfortrees.io/",

          tech: ["Vue JS", "HTML/CSS", "Javascript", "Bootstrap"],
          image: nftImage,
        },
        {
          no: 3,
          title: "Wise Premium",
          description:
            "Designed using Vue.js and featuring multilingual support in Mandarin and English, this responsive website serves as the gateway to an exclusive club experience.",
          link: "http://178.128.49.253/",

          tech: ["Vue JS", "HTML/CSS", "Javascript", "Bootstrap"],
          image: wiseImage,
        },
      ],
    };
  },
};
</script>

<style></style>
