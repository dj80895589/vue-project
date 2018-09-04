<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item"><img src="../../build/images/1.jpg"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="../../build/images/2.jpg"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="../../build/images/3.jpg"></swiper-slide>
    <swiper-slide class="swiper-item"><img src="../../build/images/4.jpg"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        listImg:[
          {url:'../../assets/1.jpg'},
          {url:'../../assets/2.jpg'},
          {url:'../../assets/3.jpg'},
        ],
        swiperOption: {
          // direction: 'vertical',
          slidesPerView: 1,
          // spaceBetween: 30,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
          },
          autoplay: {
             delay: 3000, //自动切换的时间间隔，单位ms
             stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
             // stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
             disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
             waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
  },
  loop:true,
        }
      }
    }
  }
</script>

<style>
  html,body {
    position: relative;
    height:100%;
    width:100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height:28.5rem;

  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-item img{
    height:100%;
    width:100%;
  }
</style>