<template>
  <v-row>
    <v-col class="mb-4">
      <v-simple-table height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Skill</th>
              <th class="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in experience" :key="item.skill">
              <td>{{ item.skill }}</td>
              <td>{{ item.description }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SkillsExperience",

  data: () => ({
    experience: [
      {
        skill: "Development",
        description:
          "I have been in a developer role on 3 different projects, using Python, Appway, AWS and php to produce software for the client. Using Python I was able to extract the required data from an API and use it to carry out calculations within the program. Using Appway, I was able to produce the screen implementations required for a Swiss Banking solution.",
      },
      {
        skill: "Research",
        description:
          "I researched different API’s to see which would be the best solution for us in terms of Reliability, Accuracy and Completeness. I also used Excel to perform comparisons upon the Data from an API to our current data set to ensure accuracy.",
      },
      {
        skill: "Communication",
        description:
          "I have worked remotely for 3 months with regular communication every day with the team in Switzerland. I have managed to successfully carry out my work tasks through the use of regular email, skype and daily stand up calls. I have also been a completely remote worker during the development of the Rockar Toyota roll out. This involved working as part of a team with members based in London and Latvia – Meaning we had to take into account the 2 hour time delay in our working hours when planning work and meetings. I was still able to complete the work promised.",
      },
      {
        skill: "Agile Development",
        description:
          "I have worked as part of an Agile Development team. This involved Sprint Planning, review, retrospective and daily stand up calls. The sprints were 2 weeks long and I was able to complete my tasks within the timeframe allowing the team to regularly produce value to the client.",
      },
    ],
  }),
};
</script>
