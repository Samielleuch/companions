<template>
  <div>
    <v-parallax
      dark
      :src="require('@/assets/paralax.jpg')"
      height="700"
      class="my-0 py-0"
    >
      <v-row align="center" justify="start" class="ml-12">
        <v-col cols="4">
          <h1 class="display-3 ,  font-weight-light">
            Find The Perfect Companion for you
          </h1>
          <!-- the Search Bar-->
          <v-row>
            <v-col cols="10" class="mt-4 mb-2">
              <Search color="rgba(250,250,250,0.5)" elevation="5" />
            </v-col>
          </v-row>
          <!-- chips links -->
          <v-row>
            <v-col cols="12">
              Popular :
              <v-chip
                text
                target="_blank"
                @click="$router.push('Home')"
                outlined
              >
                <span class="mr-2 adopt">Cats</span>
              </v-chip>
              <v-chip
                text
                target="_blank"
                @click="$router.push('Home')"
                outlined
              >
                <span class="mr-2 adopt">Dogs</span>
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <!--The Sponsers Bar-->
    <v-row align="center">
      <v-col cols="12" align="center" class="pt-0">
        <v-card class="mt-0">
          <img
            :src="require('@/assets/sponsors/paypal.png')"
            alt=""
            class="mx-4"
          />
          <img
            :src="require('@/assets/sponsors/MIT.png')"
            alt=""
            class="mx-4"
          />
          <img
            :src="require('@/assets/sponsors/google.png')"
            alt=""
            class="mx-4"
          />
        </v-card>
      </v-col>
    </v-row>

    <!-- The Window Component for Reviews! -->
    <v-row align="center" justify="center">
      <v-col cols="11" class="pt-0 mt-12">
        <WindowCaroussel
          :Windowcontent="WindowContent"
          :length="this.WindowContent.length"
          :window="this.Window"
        />
      </v-col>
    </v-row>
    <!-- Quote here-->
    <v-alert
      border="left"
      outlined
      color="green darken-1 accent-4"
      elevation="2"
      justify="center"
      align="center"
    >
      <span class="overline">
        Be kind to every kind, not just mankind
      </span>
    </v-alert>
    <!--Header Title -->
    <v-row align="center" justify="center">
      <v-col align="center" class="pb-0 mb-0">
        <h1 class="display-4 font-weight-light mt-12 mb-12">
          OUR SCHEDUAL
        </h1>
      </v-col>
    </v-row>
    <!-- Schedual here -->
    <TimeLine :times="times" />
    <!-- Join Us -->
    <v-row align="center" justify="center">
      <v-col justify="center" align="center" class="pb-0 mb-0">
        <v-btn
          x-large
          outlined
          rounded
          class="display-1 mt-12 mb-0"
          color="orange"
        >
          Join Us
        </v-btn>
        <v-btn
          x-large
          outlined
          rounded
          class="display-1 mt-12 mb-0 mx-5"
          color="light-green"
        >
          Donate
        </v-btn>
      </v-col>
    </v-row>

    <!--Header Title -->
    <v-row align="center" justify="center">
      <v-col cols="11" class="pb-0 mb-0">
        <h1 class="display-2 font-weight-light mt-12 mb-0">
          Quotes that we stand by
        </h1>
      </v-col>
    </v-row>
    <!-- The Card Caroussel Content-->
    <v-row align="center" justify="center" class="mt-0 pt-0 mb-0 pb-0">
      <v-col cols="11" class="pt-0 mt-0 mb-0 pb-0">
        <Cardscaroussel
          :Service="Services"
          :Cardnb="Services.length"
          class="mt-0 pt-0"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Search from "../components/Search";
import Cardscaroussel from "../components/Cardscaroussel";
import WindowCaroussel from "../components/WindowCaroussel";
import TimeLine from "../components/TimeLine";
export default {
  components: { Search, Cardscaroussel, WindowCaroussel, TimeLine },
  data: () => ({
    index: 0,

    Services: [
      {
        src: require("@/assets/quotes/quote1.jpg"),
        rating: 2
      },
      {
        src: require("@/assets/quotes/quote2.jpg"),
        rating: 2.5
      },
      {
        src: require("@/assets/quotes/quote3.jpg"),
        rating: 5
      },
      {
        src: require("@/assets/quotes/quote4.jpg"),
        rating: 3
      },
      {
        src: require("@/assets/quotes/quote5.jpg"),
        rating: 3.5
      },
      {
        src: require("@/assets/quotes/quote2.jpg"),
        rating: 4
      }
    ],
    Window: 0,
    length: 1,
    WindowContent: [
      {
        Title: "Why choose us ?",
        content:
          " Choosing a dog daycare, or a place to board your pet, is a big decision, so we want to make that decision easy for you.  After all, our pets trust us with every decision we make for them.  At The Dog Spot and The Cat Pad, we understand this. That is why we recommend that you tour other dog daycares and boarding facilities, as well as ours, so that you can be sure to get the right match for yourself and your pet.  You may tour our facility any day, with the exception of Sunday, from 7:00am to 11:30am and 2:30pm to 6:00pm.\n" +
          "\n" +
          "When you first step foot into our facility, the first thing that you will likely notice, is that your senses will not be overwhelmed.  You will not smell strong odors, and you will not hear a bunch of dogs barking.  Many people comment that it doesn’t sound or smell like there are any dogs at our facility at all.  There are not any strong odors because we know the importance of keeping a clean facility and there is no barking because the dogs are all content and enjoying themselves. ",
        src: require("@/assets/dogo.jpg")
      },
      {
        Title: "Consider Donating ",
        content:
          "To help us Stay in Buisness and help provide for our pets the Best Experience please consider Donating",
        src: require("@/assets/puppy.jpg")
      },
      {
        Title: "Play Time",
        content:
          "  Play time at The Dog Spot!  Need I say more?  Whether running, wrestling, rolling, jumping, or lounging is your forte, you can do it all at The Dog Spot.  Play time is all day, everyday, with the exception of our midday nap, and it’s your time to be a dog!  Surrounded by your dog friends, and always a human companion, you can play your little heart out!  So nudge your guardian today and tell them to take you to The Dog Spot, where the fun is all around you, and every hour is happy hour! ",
        src: require("@/assets/happydogo.png")
      },
      {
        Title: "Pool Time ",
        content:
          "When the weather in Boulder is nice, which happens nearly everyday, you can bet that the pools will be out at The Dog Spot!  For those who love to get their feet wet, they can have at it!  For those that like to keep dry, that’s fine too.  At The Dog Spot, there is something for everyone to do.  Whether it’s lounging around, getting belly rubs, running laps around the yards, or just playing with the other dogs, every dog has it’s day at The Dog Spot!",
        src: require("@/assets/coolswimmer.png")
      },
      {
        Title: "Nap Time",
        content:
          "  \n" +
          "\n" +
          "Playing with all of your best buddies from 6:30 in the morning until 6:30 in the evening can really take alot out of you!  That’s why The Dog Spot has naptime for all of the dogs at The Dog Spot.  This gives the doggies a little break between play sessions. At this time, everyone gets their own space, and if they would like, their own meal or snacks.  They get a comfy blanket and some soothing tunes to give them a quiet place to reflect on the activities of the morning.  Once naptime is over, it’s back to play time with their buddies! do it all at The Dog Spot.  Play time is all day, everyday, with the exception of our midday nap, and it’s your time to be a dog!  Surrounded by your dog friends, and always a human companion, you can play your little heart out!  So nudge your guardian today and tell them to take you to The Dog Spot, where the fun is all around you, and every hour is happy hour! ",
        src: require("@/assets/sleepyboi.jpg")
      }
    ],
    times: [
      {
        color: "green",
        time: "8am",
        content: {
          title: " Play time",
          content:
            "we get the pets and we let them play while monitoring them and giving the space they need "
        }
      },
      {
        color: "amber",
        time: "12am",
        content: {
          title: " Food time",
          content:
            "time to replenish all that lost energy eat healthy monitored Food"
        }
      },
      {
        color: "teal",
        time: "12:30am",
        content: {
          title: " Sleep Time",
          content: "time to sleep and rest "
        }
      },
      {
        color: "light-green",
        time: "2Pm",
        content: {
          title: " Play Time",
          content: "time to play some more :D "
        }
      },
      {
        color: "lime",
        time: "6Pm",
        content: {
          title: " Sleep Time",
          content: "time to Rest :D "
        }
      }
    ]
  })
};
</script>
<style></style>
