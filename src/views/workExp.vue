<template>
  <ul class="timeline timeline-snap-icon timeline-vertical my-10">
    <li v-for="(w, index) in work" :key="index">
      <hr v-if="index > 0" />

      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        :class="
          index % 2 === 0
            ? 'timeline-end md:timeline-start md:text-end'
            : 'timeline-end'
        "
      >
        <time>{{ w.year }}</time>
        <div class="text-lg font-black">{{ w.company }}</div>
        <ul class="mt-2" v-for="(list, index) in w.jd" :key="index">
          <li>{{ list }}</li>
        </ul>

        <div
          class="badge badge-outline mx-1"
          v-for="(tech, index) in w.tech"
          :key="index"
        >
          {{ tech }}
        </div>
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
          company: "MYCES MANUFACTURING SDN BHD",
          position: "Full Stack Developer",
          year: "September 2022 - Present",
          jd: [
            "Assist in developed, tested and maintained web application.",
            "Integrating backend and frontend system using REST API.",
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
            "Writing a User Manual and Guidance Report for system and application.",
            "Assist in developed, tested and maintained website and applications.",
          ],
          tech: ["Vue JS", "HTML/CSS", "Javascript", "MS OFFICE"],
        },
        {
          company: "PEJABAT DAERAH SABAK BERNAM",
          position: "Internship",
          year: "2017—2018",
          jd: [
            "Maintained computer hardware and software in the company.",
            "Design and create a multimedia content for the company.",
            "Assist in developed, tested and maintained system for the company.",
          ],
          tech: ["HTML/CSS", "Javascript", "PHP", "MS OFFICE"],
        },
      ],
    };
  },
};
</script>

<style></style>
