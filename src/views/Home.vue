<template>
    <div class="container">
        <!-- 跑馬燈 -->
        <div class="row">
            <i class="col-1 bi bi-megaphone"></i>
            <marquee class="col-11" behavior="" scrollamount="8">{{ marqueeMsg }}</marquee>
        </div>

        <!-- 圖片 -->
        <!-- <img src="../assets/images/20221107.jpg" alt="" srcset="" style="width: 100%;" class="mb-5 mt-5"> -->

        <!-- 內文 -->
        <div class="text-center">
            <!-- <p>來囉! 來囉! 超強補運日來囉!</p>
            <p>2022年虎年 最後一天 天赦日</p> -->
        </div>
        <!-- https://ithelp.ithome.com.tw/articles/10239500 html 文章編輯-->
        <!-- <div class=" article">
            <h1>誠心懺悔自己</h1>
        </div> -->
    </div>
</template>

<script setup lang="ts">
// const marqueeMsg = "超強開運日： 11月7日 天赦日 就在今天!!!"
const marqueeMsg = "Jeffrey 好帥 是大帥哥!!!"
</script>

<style scoped>
.background_home {
    /* background-image: url("../assets/images/background_Img2.jpg"); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
    opacity: 0.5;
    width: 100%;
}

</style>
