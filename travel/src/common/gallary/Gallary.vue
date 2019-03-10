<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in imgs"
                :key="index"
                >
                    <img class="gallary-img" :src="item" alt="" srcset="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name:'CommonGallary',
    components:{
         
    },
    props:{
        imgs:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
       return{
           swiperOption:{
               pagination:'.swiper-pagination',
               paginationType:'fraction',
               observeParents:true,
               observer:true
           }
       }
   },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow :inherit
    .container
        display:flex;
        flex-direction :column;
        justify-content :center;
        z-index:99
        position :fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:#000;
        .wrapper
            padding-bottom :100%;
            width:100%;
            height :0
            .gallary-img
                width:100%;
            .swiper-pagination
                color:#fff;
                bottom:-1rem;
</style>