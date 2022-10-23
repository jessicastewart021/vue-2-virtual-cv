<template>
  <v-row>
    <v-col class="mb-4">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Certification</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in certifications" :key="item.certification">
              <td>{{ item.date }}</td>
              <td>{{ item.certification }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Certifications",

  data: () => ({
    certifications: [
      {
        date: "April 2022",
        certification: "AWS Certified Solutions Architect - Associate",
      },
      {
        date: "July 2019",
        certification: "Mendix Rapid Developer",
      },
      {
        date: "July 2019",
        certification: "Certified ScrumMaster®",
      },
      {
        date: "June 2019",
        certification: "RITTech – in Specialist Area of Software Development",
      },
      {
        date: "May 2019",
        certification: "AWS Certified Developer - Associate",
      },
      {
        date: "Mar 2019",
        certification: "AWS Certified Cloud Practitioner",
      },
    ],
  }),
};
</script>
