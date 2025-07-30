<template>
    <div class="hero-wrapper">
        <div>
            <Container class="custom">
                <div class="hero-title">
                    <h3>Your Journey to Tomorrow Begins Here</h3>
                    <h1>Explore the Frontiers of Artificial Intelligence</h1>
                    <p>
                        Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where
                        machines think, learn, and reshape the future. Join us on this visionary expedition into the
                        heart
                        of
                        AI.
                    </p>
                </div>
            </Container>

            <div class="card-wrapper">
                <div class="card card1">
                    <h3>300 <span>+</span></h3>
                    <p>Resources available</p>
                </div>
                <img src="../../../public/img/row.svg" alt="">
                <div class="card card2">
                    <h3>300 <span>+</span></h3>
                    <p>Resources available</p>
                </div>
                <img src="../../../public/img/row.svg" alt="">
                <div class="card card3">
                    <h3>300 <span>+</span></h3>
                    <p>Resources available</p>
                </div>
            </div>
        </div>
        <div class="hero-resource">
            <img src="../../../public/img/back.svg" alt="">
            <div class="resource-wrap">
                <img src="../../../public/img/persons.svg" alt="">
                <h3>Explore 1000+ resources</h3>
                <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                <button><p>Explore Resources</p> <img src="../../../public/img/topstrelka.svg" alt=""></button>
            </div>
        </div>
    </div>
    
    <Container class="news-wrap">
        <div class="card-news">
            <img src="../../../public/img/news1.svg" alt="">
            <div class="card-news-text">
                <div>
                    <h3>Latest News Updates</h3>
                    <p>Stay Current</p>
                </div>
                <img src="../../../public/img/news.svg" alt="">
            </div>
            <p>Over 1,000 articles published monthly</p>
        </div>
        <img src="../../../public/img/newsrow.svg" alt="">
        <div class="card-news">
            <img src="../../../public/img/news1.svg" alt="">
            <div class="card-news-text">
                <div>
                    <h3>Latest News Updates</h3>
                    <p>Stay Current</p>
                </div>
                <img src="../../../public/img/news.svg" alt="">
            </div>
            <p>Over 1,000 articles published monthly</p>
        </div>
        <img src="../../../public/img/newsrow.svg" alt="">
        <div class="card-news">
            <img src="../../../public/img/news1.svg" alt="">
            <div class="card-news-text">
                <div>
                    <h3>Latest News Updates</h3>
                    <p>Stay Current</p>
                </div>
                <img src="../../../public/img/news.svg" alt="">
            </div>
            <p>Over 1,000 articles published monthly</p>
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
    padding: 395px 0px 47px 80px;
    font-family: Inter;
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
    max-width: 440px;
}
.resource-wrap > button{
    padding: 18px 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: 1px solid #262626;
    border-radius: 12px;
    color: white;
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
@media(max-width:1400px){
    .hero-title > h1{
        font-size: 55px;
        width: 0px;
    }
}
</style>