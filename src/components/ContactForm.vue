<template>
  <form action="#" class="form" @submit.prevent="submitHendler">
    <div class="form__group">
      <input
        type="text"
        class="form__input"
        id="name"
        v-model.trim="name"
        :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        required
      />
      <label for="name" class="form__label">Name</label>
      <small
        class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required"
      >
        Введите ваше имя
      </small>
    </div>
    <div class="form__group">
      <input type="text" class="form__input" id="name" required />
      <label for="name" class="form__label">Phone</label>
    </div>
    <div class="form__group">
      <input
        type="email"
        class="form__input"
        id="email"
        v-model.trim="email"
        required
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email)
        }"
      />
      <label for="email" class="form__label">
        Email
      </label>
      <small
        class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required"
      >
        Введите Email
      </small>
      <small
        class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email"
      >
        Введите корректный Email
      </small>
    </div>
    <div class="form__group--checkbox">
      <input
        type="checkbox"
        id="agree"
        class="form__checkbox"
        v-model="agree"
      />
      <label for="agree" class="form__label--checkbox">
        I agree the processing of personal data
      </label>
    </div>
    <div class="form__group">
      <button class="form__btn">Get in touch</button>
    </div>
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  name: "contact-form",
  data: () => ({
    name: "",
    phone: "",
    email: "",
    agree: false
  }),
  validations: {
    name: { required },
    email: { email, required },
    agree: { checked: v => v }
  },
  methods: {
    submitHendler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        email: this.email
      };
      console.log(formData);
    }
  }
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  color: $color-white;

  &__group {
    position: relative;
  }

  &__input {
    display: block;
    max-width: 580px;
    width: 100%;
    padding: 25px 0 20px 60px;
    background-color: transparent;
    text-align: start;
    border: none;
    border-bottom: 1px solid $color-black;
    color: inherit;
    font-size: 14px;
    line-height: 14px;
    transition: border-color 0.2s ease-out;

    &:last-of-type {
      margin-bottom: 20px;
    }

    &:hover {
      color: rgba($color-white, 1);
      cursor: pointer;
    }

    &:focus {
      border-bottom: 1px solid $color-white;
      outline: none;

      &::placeholder {
        text-align: start;
      }
    }
  }

  &__label {
    position: absolute;
    top: 27px;
    left: 0;
    font-size: 12px;
    line-height: 12px;
    flex-basis: 20%;
    width: 50px;
  }

  &__checkbox {
    margin-right: 19px;
    color: inherit;
    height: 15px;
    width: 15px;
    vertical-align: middle;
  }

  &__label--checkbox {
    color: inherit;
    font-size: 15px;
    line-height: 15px;
  }

  &__group--checkbox {
    margin-bottom: 50px;
  }

  &__btn {
    border: none;
    background-color: #262626;
    color: inherit;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.4;
    text-transform: uppercase;
    padding: 36px 84px;
    margin-bottom: 100px;
  }

  &:focus:invalid {
    outline: none;
  }
}
</style>
