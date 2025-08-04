<template>
    <Container class="container">
        <div class="news-wrapper">
            <div class="card-news">
                <img src="../../../public/img/new.svg" alt="">
                <p>A Decisive Victory for Progressive Policies</p>
                <span>Politics</span>
                <div class="card-news-active">
                    <div>
                        <img src="../../../public/img/newslike.svg" alt="">
                        <img src="../../../public/img/newsshare.svg" alt="">
                    </div>
                    
                    <button>
                        <p>Read More</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>

            <div class="card-news">
                <img src="../../../public/img/new2.svg" alt="">
                <p>A Decisive Victory for Progressive Policies</p>
                <span>Politics</span>
                <div class="card-news-active">
                    <div>
                        <img src="../../../public/img/newslike.svg" alt="">
                        <img src="../../../public/img/newsshare.svg" alt="">
                    </div>
                    <button>
                        <p>Read More</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>

            <div class="card-news">
                <img src="../../../public/img/new3.svg" alt="">
                <p>A Decisive Victory for Progressive Policies</p>
                <span>Politics</span>
                <div class="card-news-active">
                    <div>
                        <img src="../../../public/img/newslike.svg" alt="">
                        <img src="../../../public/img/newsshare.svg" alt="">
                    </div>
                    <button>
                        <p>Read More</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>
.news-wrapper{
    padding: 80px 0;
    font-family: Inter;
    display: flex;
    justify-content: space-between;
}
.card-news{
    display: inline-block;
}
.card-news > img{
    margin-bottom: 20px;
}
.card-news > p{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}
.card-news > span{
    color: #98989A;
    font-size: 20px;
}
.card-news-active{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card-news-active > div{
    display: flex;
    gap: 10px;
}
.card-news-active > button{
    padding: 18px 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #262626;
    background-color: #141414;
    border-radius: 12px;
    color: #98989A;
    cursor: pointer;
}
.card-news > img{
    width: 450px;
}

@media (max-width:1400px){
    .container{
        width: 100%;
        padding: 0 40px;
    }
    .news-wrapper{
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }
    .card-news{
        /* background-color: green; */
    }
    .card-news-active > button{
        padding: 18px 70px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>