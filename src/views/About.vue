<template>
    <div class="container">
        <!-- 大頭照 -->
        <div>
            <div>
                <img src="../assets/images/dialogue.png" alt="" srcset="" class="dialogue">
                <div class="dialogueMsg">煙供開運太棒了</div>
            </div>
            <img src="../assets/images/mugshot.png" alt="" srcset="" class="mugshot">
        </div>
        <br><br>
        <div>
        </div>
        <div class="row">
            <h2 class="col-9 text-center">事業要對親朋好友</h2>
            <h2 class="col-3"></h2>
            <h2 class="col-3"></h2>
            <h2 class="col-9 text-center">有助益才有意義</h2>
            <br><br>
            <h2 class="col-9 text-center">企業要對人類社會</h2>
            <h2 class="col-3"></h2>
            <h2 class="col-3"></h2>
            <h2 class="col-9 text-center">有貢獻才能永續</h2>
        </div>
    </div>
    <div class="container">
        <hr>
        <!-- 聯絡方式 -->
        <div class="row">
            <div class="col-3" style="text-align: right;">地點：</div>
            <div class="col-9">
                <a href="https://goo.gl/maps/hN6VEoYe2VzZQqZ1A" target="_blank" rel="noopener noreferrer">
                    408台中市南屯區文心路一段429號
                </a>
            </div>
            <div class="col-3" style="text-align: right;">電話：</div>
            <div class="col-9">
                <a href="tel:+886-905218179">
                    0905 218 179
                </a>
            </div>
        </div>
        <!-- icon -->
        <div class="iconBox">
            <a href="https://www.facebook.com/profile.php?id=100063516472732">
                <i class="bi bi-facebook iconFB"></i>
            </a>
            <!-- <span>開運煙供好簡單</span> -->
            <a href="https://line.me/R/ti/g/Ytn86-uOfZ">
                <i class="bi bi-line iconLine"></i>
            </a>
            <!-- <span>五行推得轉 不能者也能</span> -->
            <a href="">
                <i class="bi bi-instagram iconIG"></i>
            </a>
            <!-- <span></span> -->
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

.dialogue {
    position: relative;
    height: 10em;
}

.dialogueMsg {
    position: relative;
    margin-top: -105px;
    margin-left: 50px;
    font-size: 20px;
}

.mugshot {
    /* 圖片置中 */
    display: block;
    margin: auto;
    /* 圖片大小 */
    height: 300px;
    border-radius: 25%;
}

.iconBox {
    font-size: 2.5em;
    text-align: center;
}

.iconBox > span{
    font-size: 0.5em;
    text-align: center;
}

.iconBox .iconFB {
    color: blue;
    margin: 1em;
}

.iconBox .iconLine {
    color: green;
    margin: 1em;
}

.iconBox .iconIG {
    color: firebrick;
    margin: 1em;
}
</style>