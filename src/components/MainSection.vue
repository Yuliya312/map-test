<template>
  <main class="main">
    <section class="offices">
      <div class="offices__info">
        <h2 class="offices__title title__h2">Our Offices</h2>
        <nav class="offices__nav navigation">
          <ul class="navigation__list">
            <li
              class="navigation__item"
              v-for="office in offices"
              :key="office.id"
            >
              <button
                class="navigation__link"
                :class="{ 'link--active': currentOffice.city === office.city }"
                @click="getCurrent(office)"
              >
                {{ office.city }}
              </button>
            </li>
          </ul>
          <p class="offices__company title__h4">
            Global Message Services
            <span class="offices__country">
              {{ currentOffice.country }}
            </span>
            LLC
          </p>
          <ul class="offices__address">
            <li class="offices__address-list">
              {{ currentOffice.address }}
            </li>
            <li class="offices__address-list">
              {{ currentOffice.postIndex }}
            </li>
            <li class="offices__address-list">
              {{ currentOffice.country }}
            </li>
          </ul>
        </nav>
      </div>
      <div class="offices__map"></div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      offices: [
        {
          id: 1,
          city: "Kyiv",
          address: "Stepan Bandera, 33",
          postIndex: "02066",
          country: "Ukraine"
        },
        {
          id: 2,
          city: "New York",
          address: "Loan Street, 58",
          postIndex: "33140",
          country: "USA"
        },
        {
          id: 3,
          city: "Guangzhou",
          address: "Tian He Bei Road, 233",
          postIndex: "69854",
          country: "China"
        },
        {
          id: 4,
          city: "Barcelona",
          address: "Plaça Rosa Del Vents 1",
          postIndex: "12345",
          country: "Spain"
        }
      ],
      currentOffice: {
        city: "Kyiv",
        id: 1,
        address: "Stepan Bandera, 33",
        postIndex: "02066",
        country: "Ukkraine"
      }
    };
  },
  methods: {
    getCurrent(office) {
      this.currentOffice = office;
    }
  }
};
</script>

<style lang="scss">
.main {
  background-color: $color-primary;
  color: $color-white;
}

.offices {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0 0 60px;
  display: flex;
  flex-wrap: wrap;

  &__info {
    max-width: 580px;
  }

  &__title {
    padding-top: 98px;
    margin-bottom: 40px;
  }

  &__company {
    margin-bottom: 40px;
  }

  &__address-list {
    font-size: 11px;
    line-height: 20px;
    letter-spacing: 0.3;
  }

  &__map {
    max-width: 640px;
    min-height: 500px;
  }
}

.navigation {
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  &__link {
    border: none;
    background-color: $color-primary;
    color: inherit;
    font-size: 11px;
    line-height: 72.34px;
    transition: text-transform 0.3s, color 0.3s;

    &:hover {
      color: $color-secondary;
    }

    &:active {
      transform: scale(1.3);
    }
  }
}

.link--active {
  color: $color-secondary;
  text-transform: uppercase;
}
</style>
