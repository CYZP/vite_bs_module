<template>
    <div class="container">
        <!-- 標題 -->
        <div class="text-center m-5">
            <h1>煙供項目</h1>
        </div>
        <!-- 項目 -->
        <ul class="list-inline">
            <li v-for="(item, index) in commodity" class="align-items-center">
                <img class="mb-3" :src="item.src"
                    style="width: 100%; height: 30vh;">
                <h5>{{ item.name }}</h5>
                <br>
                <span>{{ item.depiction }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

const commodity = [
    { name: "求財", src: "./src/assets/images/money.webp", depiction: "999" },
    { name: "補財庫", src: "./src/assets/images/treasury.jpg", depiction: "" },
    { name: "求正姻緣桃花", src: "./src/assets/images/marry.jpg", depiction: "" },
    { name: "求貴人化小人", src: "./src/assets/images/backgroundImg.jpg", depiction: "" },
    { name: "化冤親", src: "./src/assets/images/background_Img2.jpg", depiction: "" },
    { name: "迴向祖先", src: "./src/assets/images/backgroundImg.jpg", depiction: "" },
    { name: "積緣補運", src: "./src/assets/images/backgroundImg.jpg", depiction: "" },
]
</script>

<style scoped>
ul li {
    padding: 8px 16px;
    margin: 25px;
    /* border: 1px outset #ddd; */
    /* border-radius: 5%; */
}

img {
    border-radius: 20%;
}
</style>