<template>
  <v-row class="text-center">
    <v-col class="mb-4">
      <body class="mb-16">
        Jessica joined Deloitte after completing a four-year degree in Computer
        Science at Queens University in Belfast. This course included a year of
        professional experience undertaken at the online retailer - Chain
        Reaction Cycles.
        <br /><br />Since joining Deloitte, Jessica has been involved in the
        development process of four projects. She has experience of working in
        Agile environments and is very quick to pick up new technologies where
        required. With a keen interest in software development, Jessica has
        worked on the development of an Aviation product which aimed to improve
        airport scheduling using analytics and simulation. <br /><br />Jessica’s
        most recent experience includes working with the Deloitte Switzerland
        team to create a Compliance Utility for financial institutions with the
        help of process automation and pooling of resources and technology.
        Using Appway, the tool integrates many systems and the Deloitte team
        have further enhanced them. <br /><br />She has experience in a range of
        different technologies, most recently Cloud Native development using AWS
        and Front-end development using Vue.js.
      </body>
      <b>Her key skills include:</b>
      <v-row align="center" justify="center">
        <v-col cols="4" class="text-center">
          <v-list flat>
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    items: [
      { text: "Software Development", icon: "mdi-laptop" },
      { text: "Agile Development", icon: "mdi-rotate-right" },
      { text: "User Acceptance Testing", icon: "mdi-checkbox-marked-outline" },
      { text: "Business Analysis", icon: "mdi-clipboard-outline" },
      { text: "Problem-solving skills", icon: "mdi-puzzle" },
      { text: "Front End Development", icon: "mdi-format-paint" },
      { text: "Unit testing", icon: "mdi-test-tube" },
    ],
  }),
};
</script>
