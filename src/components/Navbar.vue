<template>
    <nav class="navbar navbar-expand-lg bg-orange">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <!-- <img src="../assets/images/logo.jpg" class="logo" alt="logo" /> -->
                <i class="bi bi-yin-yang" style="font-size: 2rem; color: gold;"></i>
                <!-- <span class="shopName">開運煙供好簡單</span> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="(item, k) in navList">
                        <i class="bi" :class="item.iconCode, item.isSelect ? 'iconBox_active' : 'iconBox'"></i>
                        <a class="nav-link" :class="[item.isSelect ? 'active' : '']" :href="item.goto" @click="">
                            <span :class="item.isSelect ? 'itemName_active' : 'itemName'">{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { useRouter } from 'vue-router';
const navList = reactive([
    { name: "Home", page: ['Home'], goto: "/", isSelect: false, iconCode: "bi-house-fill" },
    { name: "關於我們", page: ['About'], goto: "/about", isSelect: false, iconCode:"bi-incognito" },
    { name: "煙供項目", page: ['Market'], goto: "/market", isSelect: false, iconCode:"bi-fire" },
])

const $router = useRouter()
watch(() => $router, (nO) => {
    let a: string = nO.currentRoute.value.name as string
    navList.map(item => {
        item.page.includes(a) ? item.isSelect = true : item.isSelect = false
    })

}, { deep: true, immediate: true })
</script>
<style scoped>
.bg-orange {
    background-color: orange;
}

.logo {
    /* position: fixed; */
    height: 3em;
    border-radius: 50%;
}

.shopName {
    color: #FFFFFF;
    font-size: larger;
    margin-left: 1rem;
}

.iconBox{
    position: absolute;
    font-size: 2em;
    color: lightgray;
}

.iconBox_active {
    position: absolute;
    font-size: 2em;
    color: gold;
}

.itemName {
    color: lightgray;
}

.itemName_active {
    color: gold;
}
.nav-link{
    margin-left: 2.5rem;
    margin-top: 0.5rem;
}
</style>