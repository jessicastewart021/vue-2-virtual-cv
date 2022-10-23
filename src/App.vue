<template>
  <v-app>
    {{ $route.meta.title }}

    <v-navigation-drawer fixed permanent clipped app>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item class="px-2">
            <v-img :src="require('./assets/deloitte-logo.png')"></v-img>
          </v-list-item>

          <v-img
            lazy-src="./assets/cv-pic.jpg"
            max-height="200"
            max-width="200"
            src="./assets/cv-pic.jpg"
            class="cv-image"
          ></v-img>

          <div class="text-center">
            <h3 class="font-weight-bold mb-3">Jessica Stewart</h3>
            <p class="mb-3 font-weight-normal">Senior Consultant</p>
            <p>Business Operations</p>
            <p>Cloud & Engineering</p>
            <p>Cloud Native & Application Development NI</p>
          </div>
          <v-divider class="mt-6 mb-6"></v-divider>

          <v-list-item
            v-for="(header, index) in headers"
            :key="index"
            :href="`#${index}`"
            :class="{ active: index == currentSection }"
          >
            <v-list-item-icon>
              <v-icon>{{ header.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title :class="{ active: index == currentSection }">{{
              header.header
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-col>
        <article>
          <section
            v-for="(header, index) in headers"
            :key="index"
            class="section"
          >
            <h1
              :id="index"
              class="display-2 font-weight-bold mb-3 mt-6 text-center"
            >
              {{ header.header }}
            </h1>
            <component class="ml-16 mr-16 mb-16" :is="header.component" />
                        <v-divider></v-divider>

          </section>
        </article>
      </v-col>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Profile from "@/components/Profile";
import Tools from "@/components/Tools";
import ProjectExperience from "@/components/ProjectExperience";
import SkillsExperience from "@/components/SkillsExperience";
import Certifications from "@/components/Certifications";

const currentSection = ref("");

// eslint-disable-next-line no-unused-vars
const headers = [
  { header: "Profile", component: Profile, icon: "mdi-home" },
  { header: "Tools", component: Tools, icon: "mdi-package" },
  {
    header: "Project Experience",
    component: ProjectExperience,
    icon: "mdi-book-open",
  },
  {
    header: "Skills Experience",
    component: SkillsExperience,
    icon: "mdi-cloud-download",
  },
  {
    header: "Certifications",
    component: Certifications,
    icon: "mdi-clipboard-check",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute("id");
      }
    });
  });
  document.querySelectorAll("article h1").forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style>
.cv-image {
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 5%;
}

a.active {
  background-color: rgb(142, 229, 36);
  font-weight: bold;
}

.section {
  max-width: 80%;
  margin: auto;
}
</style>
