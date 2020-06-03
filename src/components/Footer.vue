<template>
  <footer class="footer">
    <div class="dotted">
      <h2 id="contact" class="footer__title title__h2">
        Contact Us
      </h2>
      <ContactForm />
    </div>
  </footer>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Home",
  components: {
    ContactForm
  }
};
</script>

<style lang="scss">
.footer {
  background-color: $color-secondary;

  &__title {
    margin-bottom: 50px;
  }
}

.dotted {
  max-width: 1280px;
  margin: 0 auto;
  padding: 90px 60px 0;
  background-image: radial-gradient(
    circle at 3px 3px,
    $color-light-green 3px,
    transparent 0
  );
  background-size: 95px 90px;
  background-position: left 7px top 24px;
}
</style>
