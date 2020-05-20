<template>
  <div class="home">
    <Header />
    <MainSection />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MainSection from "@/components/MainSection.vue";

export default {
  name: "Home",
  components: {
    Header,
    MainSection
  }
};
</script>
