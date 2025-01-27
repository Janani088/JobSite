<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from './components/Joblistings.vue';
</script>

<template>
 <Hero title="Test Title" subtitle="Test Subtitle"/>
  <HomeCards />
  <JobListings :limit="3" :showButton="true"/>
</template>