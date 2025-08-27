<template>
    <div class="hero-wrapper">
        <div>
            <Container class="custom">
                <div class="hero-title">
                    <h3>{{ $t('hero.subtitle') }}</h3>
                    <h1>{{ $t('hero.title') }}</h1>
                    <p>
                        {{ $t('hero.description') }}
                    </p>
                </div>
            </Container>

            <div class="card-wrapper">
                <div class="card card1">
                    <h3>300 <span>+</span></h3>
                    <p>{{ $t('hero.resources') }}</p>
                </div>
                <img src="../../../public/img/row.svg" alt="">
                <div class="card card2">
                    <h3>300 <span>+</span></h3>
                    <p>{{ $t('hero.resources') }}</p>
                </div>
                <img src="../../../public/img/row.svg" alt="">
                <div class="card card3">
                    <h3>300 <span>+</span></h3>
                    <p>{{ $t('hero.resources') }}</p>
                </div>
            </div>
        </div>
        <div class="hero-resource">
            <img src="../../../public/img/back.svg" alt="">
            <div class="resource-wrap">
                <img src="../../../public/img/persons.svg" alt="">
                <h3>{{ $t('hero.exploreTitle') }}</h3>
                <p>{{ $t('hero.exploreText') }}</p>
                <button><p>{{ $t('hero.exploreBtn') }}</p> <img src="../../../public/img/topstrelka.svg" alt=""></button>
            </div>
        </div>
    </div>
    
    <Container class="news-wrap">
        <div class="card-news first">
            <img src="../../../public/img/news1.svg" alt="">
            <div class="card-news-text">
                <div>
                    <h3>{{ $t('hero.latest') }}</h3>
                    <p>{{ $t('hero.stayCurrent') }}</p>
                </div>
                <img src="../../../public/img/news.svg" alt="">
            </div>
            <p>{{ $t('hero.monthly') }}</p>
        </div>
        <img src="../../../public/img/newsrow.svg" alt="">
        <span class="line"></span>
        <div class="card-news second">
            <img src="../../../public/img/news1.svg" alt="">
            <div class="card-news-text">
                <div>
                    <h3>{{ $t('hero.latest') }}</h3>
                    <p>{{ $t('hero.stayCurrent') }}</p>
                </div>
                <img src="../../../public/img/news.svg" alt="">
            </div>
            <p>{{ $t('hero.monthly') }}</p>
        </div>
        <img src="../../../public/img/newsrow.svg" alt="">
        <span class="line"></span>
        <div class="card-news last">
            <img src="../../../public/img/news1.svg" alt="">
            <div class="card-news-text">
                <div>
                    <h3>{{ $t('hero.latest') }}</h3>
                    <p>{{ $t('hero.stayCurrent') }}</p>
                </div>
                <img src="../../../public/img/news.svg" alt="">
            </div>
            <p>{{ $t('hero.monthly') }}</p>
        </div>
    </Container>
</template>


<script setup>
import Container from "../layout/index.vue"
</script>

<style scoped>
.hero-title {
    padding-top: 150px;
    padding-right: 50px;
    border-right: 1px solid #262626;
    height: 100%;
    max-width: 960px;
}

.hero-title>h3 {
    font-family: Kumbh Sans;
    color: #666666;
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 30px;
}

.hero-title>h1 {
    color: #FFFFFF;
    font-size: 70px;
    font-family: Kumbh Sans;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 20px;
    width: 780px;
}
.custom{
    width: 1000px;
    padding-left: 40px;
}
.hero-title>p {
    color: #666666;
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    max-width: 900px;
    line-height: 150%;
    padding-bottom: 50px;
}


.card-wrapper {
    border: 1px solid #262626;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 197px;
    position: relative;
    z-index: 1;
    width: 1000px;
}


.card {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.card1 {
    padding: 50px 50px 50px 40px;
}

.card2 {
    padding: 50px;
}

.card3 {
    padding: 50px;
}

.card>h3 {
    font-family: Inter;
    font-weight: 600;
    font-size: 40px;
    display: flex;
    margin-bottom: 10px;
}

.card>h3>span {
    color: #FFD11A;
}

.card>p {
    color: #98989A;
    font-family: Inter;
    font-size: 18px;
}
.hero-wrapper{
    display: flex;

}
.hero-resource{
    position: relative;
    border-bottom: 1px solid #262626;
}
.hero-resource > img {
    position: absolute;
    width: 330px;
}
.resource-wrap{
    padding: 395px 0px 47px ;
    padding-left: 70px;
    font-family: Inter;
    max-width: 100%;
}
.resource-wrap > img{
    margin-bottom: 30px;
}
.resource-wrap > h3{
    color: white;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 14px;
}
.resource-wrap > p{
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 30px;
    width: 440px;
}
.resource-wrap > button{
    padding: 15px 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: 1px solid #262626;
    border-radius: 12px;
    color: white;
}
.resource-wrap > button > p{
    margin-top: 10px;
}
.card-news-text{
    display: flex;
    align-items: center;
    gap: 20px;
    width: 420px;
    justify-content: space-between;
}
.card-news-text > div > h3{
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 5px;
}
.card-news-text > div > p{
    color: #7E7E81;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 30px;
}
.card-news > p{
    font-family: Kumbh Sans;
    font-size: 20px;
    font-weight: 400;
}
.card-news{
    display: inline-block;
}
.news-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.line{
    display: none;
}
@media(max-width:1400px){
    .hero-wrapper{
        flex-direction: column;
    }
    .hero-title{
        border-right: 0;
        padding-top: 100px;
    }
    .custom{
        padding-left: 100px;
    }
    .hero-title{
        width: 800px;
    }
    .card-wrapper{
        width: 100%;
    }
    .resource-wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -100px;
        width: 100%;
        padding-left: 0;
    }
    .resource-wrap > button{
        padding: 20px 42px;
    }
    .resource-wrap > h3{
        font-size: 45px;
    }
    .resource-wrap > p{
        font-size: 20px;
        width: 590px;
    }
    .resource-wrap > img{
        z-index: 100;
    }
    .news-wrap{
        width: 100%;
        padding: 0 20px;
    }
    .card-news-text{
        width: 350px;
    }
}
@media (max-width:1160px){
    .card-news-text > div > h3{
        font-size: 16px;
    }
    .card-news-text > div > p{
        font-size: 16px;
    }
    .card-news-text > img{
        width: 40px;
        height: 40px;
    }
    .card-news-text{
        width: 300px;
    }
    .card-news > p{
        font-size: 17px;
    }
}
@media (max-width:1000px){
    .card-news-text > div > h3{
        font-size: 15px;
    }
    .card-news-text > div > p{
        font-size: 15px;
    }
    .card-news-text{
        width: 270px;
    }
    .card-news > p{
        font-size: 15px;
    }
}
@media (max-width:980px){ 
    .hero-title > h1{
        font-size: 40px;
    }
    .hero-title > h3{
        font-size: 20px;
        margin-bottom: 10px;
        width: 100% !important;
    }
    .custom{
        width: 100%;
    }
    .hero-title > p{
        font-size: 16px;
        width: 500px;
    }
}
@media (max-width:865px){
    .news-wrap{
        flex-direction: column;
        justify-content: start;
    }
    .news-wrap > img{
       display: none;
    }
   .line {
     display: flex;
     width: 100%;
     height: 1px; 
     background-color: #666666; 
     margin-bottom: 100px;
     margin-top: 100px;
    }

    .card-news{
        margin-bottom: 100px;
        margin-top: 600px;
        width: 100%;
        padding: 10px;
    }  
    .card-news-text{
        width: 100%;
    }
    .card-news-text > div > h3{
        font-size: 30px;
    }
    .card-news-text > div > p{
        font-size: 25px;
    }
    .card-news > p{
     font-size: 20px;   
    }
    .first{
        margin-top: 30px;
        margin-bottom: -70px;
    }  
    .second{
        margin-bottom: -7px;
        margin-top: -70px;
    }
    .last{
        margin-top: -70px;
        margin-bottom: 30px;
    }
}
@media (max-width:810px){
    .card > p{
        font-size: 16px;
    }
    .card > h3{
        font-size: 30px;
    }
}
@media (max-width:790px){
    .custom{
        padding-left: 40px;
    }
}
@media (max-width:685px){
    .hero-title > h1{
        font-size: 25px;
    }
    .hero-title > h3{
        font-size: 16px;
    }
    .hero-title > p{
        font-size: 14px;
        width: 400px;
    }
    .resource-wrap > h3{
        font-size: 30px;
    }
    .resource-wrap > p{
        font-size: 16px;
        text-align: center;
    }
}
@media (max-width:600px){
    .custom{
        padding-left: 20px;
    }
    .hero-title > h1{
        width: 400px;
        line-height: 150%;
    }
}
@media (max-width:585px){
    .card-news-text > div > h3{
        font-size: 25px;
    }
    .card-news-text > div > p{
        font-size: 16px;
    }
    .card-news > p{
        font-size: 16px;
    }
}
@media (max-width:530px){
    .card1{
        padding: 30px;
    }
    .card2{
        padding: 30px;
    }
    .card3{
        padding: 30px;
    }
    .card > p{
        font-size: 14px;
    }
    .card > h3{
        font-size: 25px;
    }
     .resource-wrap > h3{
        font-size: 25px;
    }
    .resource-wrap > p{
        font-size: 13px;
        text-align: center;
    }
    .resource-wrap > button{
        padding: 15px 20px;
    }
}
@media (max-width:430px){
    .hero-title > h1{
        width: 350px;
    }
    .hero-title > p{
        width: 300px;
    }
    .card1{
        padding: 20px;
    }
    .card2{
        padding: 20px;
    }
    .card3{
        padding: 20px;
    }
    .resource-wrap > p{
        font-size: 12px;
    }


    .card-news-text > div > h3{
        font-size: 20px;
    }
    .card-news-text > div > p{
        font-size: 14px;
    }
    .card-news > p{
        font-size: 14px;
    }
}
</style>