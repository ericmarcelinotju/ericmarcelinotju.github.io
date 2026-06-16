<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import EducationSection from './components/EducationSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <AchievementsSection />
    <EducationSection />
  </main>
  <TheFooter />
</template>
