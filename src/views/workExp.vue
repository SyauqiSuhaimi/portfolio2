<template>
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-10">
    <li v-for="(w, index) in work" :key="index">
      <hr v-if="index > 0" />
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd" />
        </svg>
      </div>
      <div :class="index % 2 === 0
        ? 'timeline-end md:timeline-start md:text-end'
        : 'timeline-end'
        ">
        <time>{{ w.year }}</time>
        <div class="text-lg font-bold">{{ w.company }}</div>
        <ul class="mt-2" v-for="(list, index) in w.jd" :key="index">
          <li>{{ list }}</li>
        </ul>

        <!-- <div class="badge badge-outline mx-1" v-for="(tech, index) in w.tech" :key="index">
          {{ tech }}
        </div> -->
      </div>
      <hr />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      work: [
        {
          company: "GOCLOUD TECHNOLOGIES (M) SDN BHD",
          position: "Software Developer",
          year: "February 2024 - Present",
          jd: [
            "Maintain and enhance a SaaS clinic management system for beauty and medical businesses, contributing to both front-end and back-end with AngularJS, Vue.js, .NET, and C#.",
            "Optimized performance by consolidating API requests, improved UI/UX in collaboration with designers, and worked with customer support to resolve issues, boosting reliability.",
          ],
          tech: [
            "Vue JS",
            "Nest JS",
            "HTML/CSS",
            "Javascript",
            "Typescript",
            "Quasar",
          ],
        },
        {
          company: "MYCES MANUFACTURING SDN BHD",
          position: "Full Stack Developer",
          year: "September 2022 - February 2024",
          jd: [
            "Contributed to core modules like company settings, asset management, work order tracking, PPM generation, and reporting.",
            "Built the mobile version as a PWA with real-time notifications and managed AWS Lightsail deployments, automating server uptime with PM2 to streamline processes.",
          ],
          tech: [
            "Vue JS",
            "Nest JS",
            "HTML/CSS",
            "Javascript",
            "Typescript",
            "Quasar",
          ],
        },
        {
          company: "EVO TRACKER SDN BHD",
          position: "Internship",
          year: "March 2022 - August 2022",
          jd: [
            "Built responsive landing pages in Vue.js for marketing projects and manually tested a subscription-based app, validating core functionalities and user flows.",
            "Created user manuals with clear guidance for end users.",
          ],
          tech: ["Vue JS", "HTML/CSS", "Javascript"],
        },
        {
          company: "PEJABAT DAERAH SABAK BERNAM",
          position: "Internship",
          year: "2017—2018",
          jd: [
            "Troubleshot PC and printer issues, developed a tax calculation system in HTML, CSS, JavaScript, and PHP to speed up processes by 50%, and created multimedia content for internal documentation and communication.",
          ],
          tech: ["HTML/CSS", "Javascript", "PHP"],
        },
      ],
    };
  },
};
</script>

<style></style>
