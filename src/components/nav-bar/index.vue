<template>
<Container class="nav">
    <div class="nav-bar-top">
        <p>Subscribe to our Newsletter For New & latest Blogs and Resources</p>
        <img src="../../../public/img/topstrelka.svg" alt="">
    </div>
</Container>
<div class="nav-bar">
    <Container class="nav">
        <div class="nav-bar-wrapper">
            <a href="/">
                <img src="../../../public/img/logo.svg" alt="">
            </a>
            <ul>
                <router-link to="/" class="active link">Bosh sahifa</router-link>
                <router-link to="/second" class="link" style="color: #98989A;">Ikkinchi sahifa</router-link>
                <li>Podcast</li>
                <li>Resources</li>
            </ul>
            <button>Contact Us</button>
            <img class="burger-menu" src="../../../public/img/burger.svg" alt="">
        </div>
    </Container>
</div>
</template>

<style scoped>
    .link{
        text-decoration: none;
    }
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
    .burger-menu{
        display: none;
    }
        @media(max-width:860px){
            .nav-bar-wrapper > ul{
                display: none;
            }
            .nav-bar-wrapper > button{
                display: none;
            }
            .burger-menu{
                display: block;
                cursor: pointer;
            }
            .nav-bar-top > p{
                font-size: 12px;
            }
        }

    @media (max-width:1440px){
        .nav-bar-top{
            max-width: 100%;
        }
        .nav{
            width: 100%;
        }
    }
</style>

<script setup>
import Container from "../layout/index.vue"
</script>