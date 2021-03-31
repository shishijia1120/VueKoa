<template>
    <div>
      <Swiper class="swiper" :options="swiperOption">
        <Swiper-slide class="text">
            <div class="centent">
               一大堆文章.........据美联社伦敦3月11日报道，世界卫生组织领导的新冠病毒溯源调查专家组的一名重要成员3月10日说，“很快，也就是在未来几年内”，国际社会就会知道是什么引发了新冠病毒大流行。

在英国皇家国际问题研究所组织的新闻发布会上，世卫组织专家彼得·达萨克估计，集体科学研究或许能够确定携带新冠病毒的动物是如何感染2019年12月在武汉发现的首批病例。

同样参与世卫组织领导的这个专家组的玛丽昂·库普曼斯说，他们考虑了众多关于这场大流行可能如何开始的假设，包括实验室事故的可能性。

报道称，库普曼斯说，该团队走访了距离发现首批人类病例的武汉华南海鲜市场最近的三个实验室，并仔细检查了这些实验室的规程、实验项目和研究等。

她说：“我们的结论是，发生实验室事故的可能性微乎其微。”

库普曼斯还表示，她和同事审查了新冠病毒基因测序数据，这些数据显示，这种病毒可能是通过冷冻海产品的受污染包装传播的。大多数科学家不接受这一理论。

报道援引她的话说：“我们不能完全排除这种可能性。”她指出，在全球范围内，很难确定新冠病例是由包装上仍然具有传染性的病毒引起的，还是由世界各个国家正在暴发的疫情引起的。
            </div>
        </Swiper-slide>

      </Swiper>
    </div>
</template>

<script>

import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                 swiperOption:{
                    direction:'vertical',
                    slidesPerView: 'auto',
                    freeMode:true,
                    mousewheel:true
                }
            }
        },
          components:{Swiper,SwiperSlide}
        
    }
</script>

<style scoped>
.swiper{
      height: 300px;
      overflow: hidden;
  }
  .text{
      font-size: 18px !important;
      text-align: left;
      padding:30px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

  }
</style>