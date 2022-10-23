<template>
  <v-row class="text-center">
    <v-col class="mb-4">
      <div v-for="tool in tools" :key="tool">
        <v-chip class="ma-2" color="green" text-color="white">
          {{ tool }}
        </v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tools",

  data: () => ({
    tools: [
      "Vue.js",
      "Cloud Native Development",
      "Amazon Web Services",
      "Java",
      "C#",
      "SQL",
      "Python",
      "Git",
      "Excel",
      "PyCharm",
      "Jira",
      "Appway Development",
      "Magento",
      "PHP",
      "Node.js",
    ],
  }),
};
</script>

<style scoped>
.v-application .green {
    background-color: rgb(142, 229, 36) !important;
    border-color: rgb(142, 229, 36) !important;
}
</style>
