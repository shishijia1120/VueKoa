<template>
    <div>
<!--search-bar-->
     <div class="search-bar">    
    <van-row>
    <van-col span="3">
        <img :src="locationIcon " width="100%"/>
    </van-col>
    <van-col span="16" ><input type="text" class="search-input"/></van-col>
    <van-col span="5">   <van-button size="mini"> 查找</van-button> </van-col>
</van-row>
 </div>
<!--swipwer area-->
<div class="swiper-area">
    <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img v-lazy="banner.image" width="100%"/>
        </van-swipe-item>
    </van-swipe>
</div>
<!--type bar-->
<div class="type-bar">
    <div v-for="(cate,index) in category" :key="index">
            <img v-lazy="cate.image"  width="90%">
             <span>{{cate.mallCategoryName}}</span> 
    </div>

</div>
<!--AD banner area-->
<div class="ad-banner">
    <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
</div>
<!--Recommend goods area-->
<div class="recommend-area">
    <div class="recommend-title">
        商品推荐
    </div>
    <div class="recommend-body">

    </div>
</div>
<!--swiper-->
<Swiper :options="swiperOption">
    <Swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
        <div class="recommend-item">

                <img :src="item.image" width="80%" />
                <div>{{item.goodsName}}</div>
                <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>

        </div>
    </Swiper-slide>
</Swiper>
<floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
<floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
<floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>    
    <van-row gutter="20">
    <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
        <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
    </van-col>
</van-row>

    </div>
</template>
 
<script>
import axios from 'axios'

import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import floorComponent from '../component/floorComponet'
import {toMoney} from '@/filter/moneyFilter.js'
import goodsInfo from '../component/goodsInfoComponent'
import url from '@/serviceAPI.config.js'
    export default {
       data(){
        return { 
            locationIcon:require('../../assets/images/location.png'),
            bannerPicArray:[],
              hotGoods:[], //热卖商品
            category:[],
            adBanner:'',
            recommendGoods:[],
            swiperOption:{
                 slidesPerView:3
            },
            floor1:[],
            floor2:[],         //楼层1的数据
        floor3:[],         //楼层1的数据
        floorName:{} 
        }} ,
       components:{  Swiper,SwiperSlide,floorComponent,goodsInfo},
          created() {
              axios({
                  url:url.getShoppingMallInfo,
                  method:'get'
              })
              .then(response=>{
                  console.log(response)
                     if(response.status==200){
            this.category=response.data.data.category;
            this.adBanner = response.data.data.advertesPicture; //获得广告图片
            this.bannerPicArray=response.data.data.slides;
            this.recommendGoods = response.data.data.recommend;  //推荐商品
            this.floor1 = response.data.data.floor1              //楼层1数据
            this.floorName = response.data.data.floorName        //楼层名称
            this.floor2 = response.data.data.floor2              //楼层2数据
            this.floor3 = response.data.data.floor3              //楼层3数据
             this.hotGoods = response.data.data.hotGoods           //热卖商品
     }
              })
              .catch(error=>{
                  console.log(error)
              })
    },
    filters:{
    moneyFilter(money){
        return toMoney(money)
    }  
},
    }
  
</script>

<style  scoped>
  .search-bar{
      height: 2.2rem;
      margin-top: 0em;
      background-color: #e5017d;
      line-height:2.2rem;

  }
  .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #e5017d;
      color:#fff;
  }
  .location-icon{
      padding-top: .2rem;
      padding-left: .3rem;
  }

  .swiper-area{
      width:20rem;
      max-height: 15rem;
      clear:both;
  }


   .type-bar{
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
  }
   .recommend-area{
       background-color: #fff;
       margin-top: .3rem;
  }
  .recommend-title{
      border-bottom:1px solid #eee;
      font-size:14px;
      padding:.2rem;
      color:#e5017d;
  }

    .recommend-body{
       border-bottom: 1px solid #eee;
   }

  .recommend-item{
      width:99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }
.hot-goods{
    height: 130rem;
    overflow: hidden;
    background-color: #fff;

}
</style>