<template>
    <hr>
    <Container class="container">
        <div class="news-wrapper">
            <div class="card-news row">
                <img src="../../../public/img/new.svg" alt="">
                <p>{{ $t('news.card1.text') }}</p>
                <span>{{ $t('news.card1.category') }}</span>
                <div class="card-news-active">
                    <div>
                        <img src="../../../public/img/newslike.svg" alt="">
                        <img src="../../../public/img/newsshare.svg" alt="">
                    </div>
                    
                    <button>
                        <p>{{ $t('news.readMore') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
            <img src="../../../public/img/rowhr.svg" alt="">
            <div class="card-news">
                <img src="../../../public/img/new2.svg" alt="">
                <p>{{ $t('news.card2.text') }}</p>
                <span>{{ $t('news.card2.category') }}</span>
                <div class="card-news-active">
                    <div>
                        <img src="../../../public/img/newslike.svg" alt="">
                        <img src="../../../public/img/newsshare.svg" alt="">
                    </div>
                    <button>
                        <p>{{ $t('news.readMore') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
            <img src="../../../public/img/rowhr.svg" alt="">
            <div class="card-news">
                <img src="../../../public/img/new3.svg" alt="">
                <p>{{ $t('news.card3.text') }}</p>
                <span>{{ $t('news.card3.category') }}</span>
                <div class="card-news-active">
                    <div>
                        <img src="../../../public/img/newslike.svg" alt="">
                        <img src="../../../public/img/newsshare.svg" alt="">
                    </div>
                    <button>
                        <p>{{ $t('news.readMore') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </Container>
</template>



<style scoped>
.news-wrapper{
    padding: 80px 0 0 0;
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
    padding: 10px 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #262626;
    background-color: #141414;
    border-radius: 12px;
    color: #98989A;
    cursor: pointer;
}
.card-news-active > button > p{
    margin-top: 10px;
}
.card-news > img{
    width: 450px;
}
.news-wrapper > img{
    margin-top: -80px;
    width: 3px;
    height: 510px;
}
hr{
    border: none;
    height: 2px;
    background-color: #262626; 
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
        padding-bottom: 80px;
    }
    .card-news-active > button{
        padding: 18px 70px;
    }
    .news-wrapper > img{
        display: none;
    }
}
@media (max-width:515px){
    .news-wrapper{
        width: 100%;
    }
    .card-news > img{
        width: 400px;
    }
    .card-news-active > div{
        display: none;
    }
    .card-news-active > button{
        width: 100%;
    }
    .card-news-active > button{
        justify-content: center;
    }
    .card-news > p{
        font-size: 14px;
    }
}
@media (max-width:450px){
    .card-news > img{
        width: 300px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>