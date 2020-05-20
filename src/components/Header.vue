<template>
  <header class="header">
    <h1 class="header__title title__h1">Contacts</h1>
    <div class="header__info">
      <div class="header__contacts">
        <h2 class="header__subtitle title__h2">
          <a href="#" class="header__subtitle-link link link--big">GMS</a>
          Headquarters
        </h2>
        <div class="header__headquaters">
          <div class="header__adress">
            <ul class="header__list">
              <li class="header__list-item">
                Global Message Services Ukraine LLC
              </li>
              <li class="header__list-item">Bundesstrasse 5 | 3rd Floor</li>
              <li class="header__list-item">6300 Zug</li>
              <li class="header__list-item">Switzerland</li>
            </ul>
            <a href="#" class="header__phone">
              +41 41 544 62 00
            </a>
          </div>
          <div class="header__contact contact">
            <p class="contact__title">
              Email
            </p>
            <a href="#" class="contact__email link link--small"
              >info@gms-worldwide.com</a
            >
            <p class="contact__title">
              Send message
            </p>
            <a href="#" class="contact__phone link link--small">Viber us</a>
            <p class="contact__title">
              Send form
            </p>
            <a href="#" class="contact__form link link--small">Contact us</a>
          </div>
        </div>
      </div>
      <div class="header__support">
        <h2 class="header__subtitle title__h2">
          Technikal support
          <a href="#" class="header__subtitle-link link link--big">24/7</a>
        </h2>
        <p class="header__support-text">
          GMS understands that it can be hard to follow all new technologies.
          regularly provide for all our clients educational trainings to your
          your operator`s business earn more and better though our best
          practices.
        </p>
        <a href="#" class="header__phone">
          +41 41 544 62 00
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 60px 0;
  background-color: $color-white;

  &__title {
    margin-bottom: 50px;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 98px;
  }

  &__contacts {
    max-width: 548px;

    @include respond(tab-land) {
      margin: 0 20px 40px 0;
    }
  }

  &__headquaters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__adress {
    max-width: 264px;
    margin-right: 30px;
  }

  &__list {
    margin-bottom: 40px;
  }

  &__phone {
    color: $color-secondary;
    font-size: 26px;
    line-height: 36px;
  }

  &__contact {
    max-width: 254px;
  }

  &__subtitle {
    margin-bottom: 40px;
  }

  &__support {
    max-width: 538px;
  }

  &__support-text {
    margin-bottom: 40px;
  }
}
</style>
