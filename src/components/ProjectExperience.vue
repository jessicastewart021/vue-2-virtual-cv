<template>
  <div>
    <v-row d-flex flex-row>
      <div v-for="item in experience" :key="item.client" class="card mt-6">
        <v-card class="mb-4 mr-4">
          <v-img
            :src="require(`../assets/${item.img}.jpg`)"
            max-height="150"
          ></v-img>
          <v-row>
            <v-col>
              <v-card-title>
                {{ item.client }}
              </v-card-title>
            </v-col>
            <v-col>
              <v-card-title class="card-date">
                {{ item.date }}
              </v-card-title>
            </v-col>
          </v-row>

          <v-card-subtitle>
            {{ item.role }}
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="item.show = !item.show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="item.show">
              <v-divider></v-divider>

              <v-card-text
                v-for="(paragraph, index) in item.experience"
                :key="index"
              >
                {{ paragraph }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectExperience",

  data: () => ({
    show: false,
    experience: [
      {
        date: "Aug 2020 - Present",
        show: false,
        img: "vue",
        client: "Hexagon",
        role: "Front End Developer",
        experience: [
          "Jessica worked as part of the team to develop a test booking system. She joined as a Front-end developer using Vue.js to create user-friendly web pages to make the booking system as simple as possible. ",
          "Throughout this project she has enhanced her Vue.js skills including the use of the store and router. She has helped greatly improve the unit test coverage making the process of code refactoring much less risky. She has become familiar with tools such as Azure DevOps, Miro and Zeplin. During the undertaking of this project, Jessica completed secure coding training in both Pseudocode and Vue.js, helping her to recognise code vulnerabilities before they reached production and help improve overall security.",
          "Jessica was able to complete work quickly and efficiently as required for the weekly deployments to enable the organisation to reach their weekly testing goals. As a result of the teams’ efforts, by October 2020 the booking system had registered over 21 million test kits. This program was key in keeping the organisation well-staffed and reducing the spread of the infection by getting those infected to isolate as quickly as possible. More recently, Jessica became part of the Level-3 on call team as a product specialist, responding to any emergencies that happen overnight and during the weekend with her knowledge of the specific applications.",
          "She has also been learning Typescript on the project during quiet periods which she has put to use during the conversion of the Admin Portal from JavaScript to Typescript, this helped to both increase reliability and decrease the number of defects.",
        ],
      },
      {
        date: "Sep 2019 – May 2020",
        show: false,
        img: "aws",
        client: "Square",
        role: "Developer",
        experience: [
          "Jessica joined the Square team at the beginning of the project. She was a part of the initial workshop and conversations with the client, helping to understand the client’s requirements for the project. As part of this she helped to analyse the front-end user journey and identify the clients pain points during roll out to their own clients. This helped the Deloitte team to build a bid case and gain sponsorship from the Ventures team.",
          "Following this she used her AWS knowledge to help build a local environment for development. This involved setting up EC2 instances with RDS instances attached and installing the dependencies required to run the clients Magento code repository. Throughout the project she picked up Docker skills and was able to work through lots of local set up issues.Jessica was heavily involved in the building of an AWS microservice to replace a client’s legacy system. This system was responsible for the ingestion of data onto a Magento platform for a dealership group – This required developing lambda functions in Node.js, configuring infrastructure such as an API Gateway and DynamoDB instances and updating the terraform when necessary to enable automation of the infrastructure. She was also responsible for configuring the security surrounding the API access, whitelisting the appropriate IP’s and blocking requests from inappropriate users.",
          "She then went on to become part of the team that achieved the quick roll out of the Square platform for used cars. Development for this was completed in 5 weeks. The development was mostly PHP based, with some CSS and vue.js templates involved in the front-end. Most of this work was front-end based, including updating the header and footer as well as some back-end development to enhance the administrator functionality. ",
          "Jessica has enhanced her soft skills throughout this project. She was able to appropriately use both Jira and Confluence and was a keen contributor to the team’s documentation of the processes. This enabled easier onboarding throughout the engagement. Her communication skills were greatly improved through communication with the client and working remotely which gave her the ability to effectively engage with her colleagues who were based in London and Latvia.",
        ],
      },
      {
        date: "Feb 2019 – June 2019",
        show: false,
        img: "appway",
        client: "Triangle",
        role: "Developer",
        experience: [
          "Jessica worked as part of the development team to create a Compliance Utility aimed to help Banks. As part of this project, she was involved in the implementation of screen designs using a low code platform called Appway. In particular, Jessica was involved in developing the notification functionality in the system and of the escalation of particular scenarios throughout the screening process. ",
          "As well as this, Jessica helped with basic tasks, such as adding labels to screens to enable different language functionality. She was also involved in the design testing of the system, making sure all icons existed and were following the design specification correctly.",
        ],
      },
      {
        date: "Oct 2018 – Dec 2018",
        show: false,
        img: "python",
        client: "Circle",
        role: "Developer",
        experience: [
          "Updating excel reference files - Using Lookup to find new values that are not in the original excel reference files and adding them to the reference files. ",
          "Learning python through a CodeAcademy course - Jessica completed a 10-hour CodeAcademy course on the basics of python including practice examples. She has also watched many python tutorials and has some experience using some packages such as pandas and json. Research and investigation of API’s - This task included researching potential API’s, both open source and commercial, which could supply the relevant data required. ",
          "In addition to this, she used a Jupyter notebook to enable easier extraction of more data. The data then had to be analysed to check for accuracy against two different sources. Minor development tasks - This included ‘Info level logging’ of data processing code which required understanding of the code base to print generally useful information to the console or log. ",
          "Jessica also wrote two methods in python: one to calculate the distance of a flight between two airports and another to determine the type of the flight based upon the first calculation.",
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.card {
  width: 49%;
}

.card-date {
  justify-content: flex-end;
}

.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 16px 16px 0px 16px;
}
</style>
