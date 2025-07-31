<template>
<section class="post-title-section">
        <Container class="container">
            <div class="post-title">
                <div class="post-title-text">
                    <div>Featured Videos</div>
                    <p>Visual Insights for the Modern Viewer</p>
                </div>
                <div class="post-title-link">
                    <button>
                        <p>View All</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </Container>
    </section>
    <Container class="container">
        <div class="news-wrapper">
            <div class="card-news">
                <img src="../../../public/img/newsvideo1.svg" alt="">
                <h3>Mars Exploration: Unveiling Alien Landscapes</h3>
                <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
            </div>
            <img src="../../../public/img/newspage.svg" alt="">
            <div class="card-news">
                <img src="../../../public/img/newsvideo1.svg" alt="">
                <h3>Mars Exploration: Unveiling Alien Landscapes</h3>
                <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
            </div>
        </div>
    </Container>
    <hr>
    <Container>
        <div class="news-wrapper">
            <div class="card-news">
                <img src="../../../public/img/newsvideo1.svg" alt="">
                <h3>Mars Exploration: Unveiling Alien Landscapes</h3>
                <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
            </div>
            <img src="../../../public/img/newspage.svg" alt="">
            <div class="card-news">
                <img src="../../../public/img/newsvideo1.svg" alt="">
                <h3>Mars Exploration: Unveiling Alien Landscapes</h3>
                <p>Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.</p>
            </div>
        </div>
    </Container>
</template>

<style scoped>
.post-title-section{
    padding: 120px 0;
    background-color: #1A1A1A;
    border: 1px solid #262626;
}
.post-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post-title-text > div{
    display: inline-block;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    padding: 6px 10px;
    border-radius: 4px;
    background-color: #333333;
    margin-bottom: 16px;
}
.post-title-text > p{
    font-family: Kumbh Sans;
    font-size: 58px;
    font-weight: 500;
}
.post-title-link > button{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #141414;
    border: 1px solid #262626;
    padding: 18px 24px;
    border-radius: 12px;
    cursor: pointer;
}
.post-title-link > button > p{
    font-family: Inter;
    color: #98989A;
}
.news-wrapper{
    font-family: Inter;
    display: flex;
    align-items: start;
    justify-content: space-between;
}
.news-wrapper > img{
    height: 635px;
}
.card-news > img{
    margin-bottom: 30px;
}
.card-news > h3{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
}
.card-news > p{
    color: #98989A;
    font-size: 18px;
    width: 650px;
}
.card-news{
    padding-top: 50px;
}
.card-news > img{
    width: 650px
}
hr{
    height: 1px;
    border: none;
    background-color: #262626;
}
@media (max-width:1400px){
    .container{
        width: 100%;
        padding: 0 40px;
    }
    .post-title-text > p{
        font-size: 40px;
    }
    .news-wrapper{
        width: 100%;
        flex-direction: column;
    }
    .news-wrapper > img{
        display: none;
    }
    .card-news{
        width: 100%;
        padding-bottom: 100px;
        border-bottom: 1px solid #262626;
        margin-top: 50px;
    }
    .card-news > img{
        width: 100%;
        height: 400px;
    }
    .card-news > h3{
        text-align: center;
    }
    .card-news > p{
        text-align: center;
        margin: 0 auto;
        width: 100%;
    }
    hr{
        display: none;
    }
}
@media (max-width:740px){
    .post-title{
        flex-direction: column;
    }
    .post-title-link{
        width: 100%;
    }
    .post-title-link > button{
        width: 100%;
        justify-content: space-between;
        margin-top: 30px;
    }

}
@media (max-width:525px){
    .card-news{
        padding-bottom: 50px;
        margin-top: 10px;
    }
    .card-news > img{
        margin-bottom: 0px;
    }
}
@media(max-width:420px){
    .card-news > img{
        margin-top: -100px;
        margin-bottom: -20px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>