<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1507/d8/d8e7392da994f63.img.png_r_800x800_0b0cee12.png" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    上海海湾国家森林公园(AAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe626;</span>
                    26
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import axios from 'axios'
export default {
    name:'BannerDetail',
    components:{
         CommonGallary
    },
    data(){
        return{
            showGallary:false,
            imgs:["http://img1.qunarzz.com/sight/p0/1508/d0/e7c43015897bdb4929699faeb7cbfae1.water.jpg_r_800x800_ff626027.jpg","http://img1.qunarzz.com/sight/p0/201212/19/8e7d1686e943323793835fbb.png_r_800x800_3ef77e6d.png"]
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="stylus" scoped>
    .banner
        position :relative;
        overflow :hidden;
        height :0;
        padding-bottom :55%;
        .banner-img
            width:100%;
        .banner-info
            display:flex;
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            line-height:.6rem;
            color:#fff;
            background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                font-size :.32rem;
                padding:0 .2rem;
                flex:1
            .banner-number
                padding:0 .4rem;
                line-height:.32rem;
                height:.32rem;
                border-radius:.2rem;
                background:rgba(0,0,0,.8);
                font-size :.24rem;
                margin-top :.14rem;
                .banner-icon
                    font-size :.24rem;
</style>