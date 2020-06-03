<template>
  <div class="home">
    <Header />
    <MainSection />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MainSection from "@/components/MainSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    MainSection,
    Footer
  }
};
</script>
