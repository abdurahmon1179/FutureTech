<template>
<Container>
    <div class="nav-bar-top">
        <p>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
        <img src="../../../public/img/topstrelka.svg" alt="">
    </div>
</Container>
<div class="nav-bar">
    <Container>
        <div class="nav-bar-wrapper">
            <a href="/">
                <img src="../../../public/img/logo.svg" alt="">
            </a>
            <ul>
                <li class="active">Home</li>
                <li>News</li>
                <li>Podcast</li>
                <li>Resources</li>
            </ul>
            <button>Contact Us</button>
        </div>
    </Container>
</div>
</template>

<style scoped>
    .nav-bar-top{
        display: flex;
        align-items: center;
        justify-self: center;
        gap: 10px;
        padding: 20px;
    }
    .nav-bar-top > p{
        font-size: 18px;
        font-weight: 400;
        font-family: inter;
        color: #98989A;
    }
    .nav-bar{
        height: 103px;
        padding: 26.5px;
        background-color: #1A1A1A;
        border-top: 1px solid #262626;
        border-bottom: 1px solid #262626;
    }
    .nav-bar-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav-bar-wrapper > a > img{
        width: 137px;
        height: 55px;
    }
    .nav-bar-wrapper > ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 40px;
        font-family: Inter;
    }
    .nav-bar-wrapper > ul > li{
        cursor: pointer;
        color: #98989A;
        transition: 0.4s;

    }
    .nav-bar-wrapper > ul > li:hover{
        color: white;
    }
    .active{
        background-color: #141414;
        padding: 14px 24px;
        border-radius: 10px;
        border: 1px solid #333333;
        color: white !important;
    }
    .nav-bar-wrapper > button{
        padding: 14px 24px;
        background-color: #FFD11A;
        color: #141414;
        border-radius: 10px;
        border: none;
        font-family: Inter;
        font-weight: 500;
        font-size: 17px;
        cursor: pointer;
    }
    .nav-bar-wrapper > button:hover{
        border: 1px solid #FFD11A;
        background-color: transparent;
        color: white;
    }
</style>

<script setup>
import Container from "../layout/index.vue"
</script>