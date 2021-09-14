<template>
    <section class="gallery-section mt-5" v-if="haveImages">
        <h2 class="section-title">Gallery</h2>
        <vue-agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
            <div class="slide" v-for="(slide, index) in images" :key="index" :class="`slide--${index}`">
                <img :src="slide" :alt="`${index}`" />
            </div>
        </vue-agile>
        <vue-agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div class="slide slide--thumbnail" v-for="(slide, index) in images" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)">
                <img :src="slide" :alt="`thumbnail ${index}`"/>
            </div>
            <template slot="prevButton"><b-icon icon="chevron-left"></b-icon></template>
            <template slot="nextButton"><b-icon icon="chevron-right"></b-icon></template>
        </vue-agile>
    </section>
</template>

<script>

import {VueAgile} from 'vue-agile';

export default {
    name: 'GalleryArea',
    props: ['images'],
    components: {VueAgile},
    data: function(){
        return {
          asNavFor1: [],
          asNavFor2: [],
          options1: {
            dots: false,
            fade: true,
            navButtons: false
          },
          options2: {
            autoplay: true,
            centerMode: true,
            dots: false,
            navButtons: false,
            slidesToShow: 3,
            infinite: false,
            responsive: [{ breakpoint: 600,settings: {slidesToShow: 5} },
                        { breakpoint: 1000,settings: {navButtons: true}}]
            }
        }
    },
    mounted () {
      this.asNavFor1.push(this.$refs.thumbnails);
      this.asNavFor2.push(this.$refs.main);
	},
    computed: {
        haveImages(){
            if(Array.isArray(this.images) && this.images?.length > 0) return true;
            else return false
        }
    }
}
</script>

<style>

.main {
  margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}

.agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.agile__nav-button--prev {
  left: -45px;
}
.agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #888;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  max-height: 600px;
  justify-content: center;
}
.slide--thumbnail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  transition: opacity 0.3s;
}
.slide--thumbnail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  object-fit: contain;
  object-position: center;
  width: 100%;
}

</style>