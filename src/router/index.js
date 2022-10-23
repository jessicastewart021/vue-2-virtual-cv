import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "@/components/Profile";
import Tools from "@/components/Tools";
import ProjectExperience from "@/components/ProjectExperience";
import SkillsExperience from "@/components/SkillsExperience";
import Certifications from "@/components/Certifications";


Vue.use(VueRouter);

const routes = [
  { title: "Jessica Stewart CV", path: "/" },
  { name: "Profile", path: "/profile", component: Profile },
  { name: "Tools", path: "/tools", component: Tools },
  { name: "Project Experience", path: "/project-experience", component: ProjectExperience },
  { name: "Skills Experience", path: "/skills-experience", component: SkillsExperience },
  { name: "Certifications", path: "/certifications", component: Certifications },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach(to => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - my blog`;
  }
});

export default router;
