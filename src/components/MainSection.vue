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
                @click="getCurrent(office, tab)"
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
      <div class="offices__map">
        <GmapMap
          :center="currentOffice.position"
          :zoom="13"
          map-type-id="terrain"
          style="width: 500px; height: 500px"
        >
          <GmapCircle
            :center="currentOffice.position"
            :radius="150"
            :visible="true"
            :draggable="true"
            :options="{ fillColor: '#3db565', fillOpacity: 1 }"
          ></GmapCircle>
        </GmapMap>
      </div>
    </section>
  </main>
</template>

<script>
import style from "@/assets/map/googleMapStyle.json";

export default {
  name: "main-section",
  data() {
    return {
      offices: [
        {
          id: 1,
          city: "Kyiv",
          address: "Stepan Bandera, 33",
          postIndex: "02066",
          country: "Ukraine",
          position: {
            lat: 50.48981772,
            lng: 30.49508572
          }
        },
        {
          id: 2,
          city: "New York",
          address: "Loan Street, 58",
          postIndex: "33140",
          country: "USA",
          position: {
            lat: 40.7127753,
            lng: -74.0059728
          }
        },
        {
          id: 3,
          city: "Guangzhou",
          address: "Tian He Bei Road, 233",
          postIndex: "69854",
          country: "China",
          position: {
            lat: 23.12911,
            lng: 113.264385
          }
        },
        {
          id: 4,
          city: "Barcelona",
          address: "Plaça Rosa Del Vents 1",
          postIndex: "12345",
          country: "Spain",
          position: {
            lat: 41.38506389999999,
            lng: 2.1734035
          }
        }
      ],
      currentOffice: {
        city: "Kyiv",
        id: 1,
        address: "Stepan Bandera, 33",
        postIndex: "02066",
        country: "Ukkraine",
        position: {
          lat: 50.48981772,
          lng: 30.49508572
        }
      },
      mapStyle: {
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        style
      }
    };
  },
  methods: {
    getCurrent(office, tab) {
      this.currentOffice = office;
      this.currentTab = tab;
    }
  },
  mounted() {
    console.log(this.mapStyle);
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
  justify-content: space-between;

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
