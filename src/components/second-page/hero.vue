<template>
    <Container class="container">
        <div class="news-title">
            <h1>Today's Headlines: Stay</h1>
            <div>
                <h1>Informed</h1>
                <p>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
            </div>
        </div>
    </Container>
    <hr>
    <Container class="container">
        <div class="news-card-wrapper">
            <img  src="../../../public/img/newspage1.svg" alt="">
            <div class="card-content">
                <h2>Global Climate Summit Addresses Urgent Climate Action</h2>
                <p>World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</p>
                <div class="news-info">
                    <div class="info">
                        <p>Category</p>
                        <h4>Environment</h4>
                    </div>

                    <div class="info">
                        <p>Publication Date</p>
                        <h4>October 10, 2023</h4>
                    </div>

                    <div class="info">
                        <p>Author</p>
                        <h4>Jane Smith</h4>
                    </div>
                </div>
                <div class="news-active">
                    <div>
                        <img src="../../../public/img/newslike.svg" alt="">
                        <img src="../../../public/img/newsshare.svg" alt="">
                    </div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </Container>
    <hr>
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
.news-title{
    margin-top: 130px;
    font-family: Kumbh Sans;
    margin-bottom: 150px;
}
.news-title > h1{
    font-size: 80px;
    font-weight: 500;
    margin-bottom: 20px;
}
.news-title > div{
    display: flex;
    align-items: center;
    gap: 80px;
}
.news-title > div > h1{
        font-size: 80px;
    font-weight: 500;
}
.news-title > div > p{
    color: #98989A;
    font-size: 18px;
}
hr{
    display: block;
    border: none;
    height: 3px;
    background-color: #262626;
}
.news-card-wrapper{
    padding: 80px 0;
    display: flex;
    align-items: center;
    gap: 80px;
}
.card-content > h2{
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
}
.card-content > p{
    color: #98989A;
    font-family: Inter;
    font-size: 20px;
    margin-bottom: 50px;
}
.news-info{
    display: flex;
    align-items: center;
    gap: 50px;
    font-family: Inter;
    margin-bottom: 50px;
}
.info > p{
    color: #98989A;
    font-size: 18px;
    margin-bottom: 4px;
}
.info > h4{
    font-size: 18px;
    font-weight: 400;
}
.news-active > button{
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 12px;
    padding: 18px 24px;
    color: #98989A;
    cursor: pointer;
}
.news-active{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.news-active > div{
    display: flex;
    align-items: center;
    gap: 10px;
}
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
@media(max-width:1175px){
    .card-content > h2{
        font-size: 25px;
    }
    .card-content > p{
        font-size: 16px;
    }
    .info > p{
        font-size: 14px;
    }
    .info > h4{
        font-size: 14px;
    }
}
@media (max-width:1005px){
    .card-content > h2{
        font-size: 20px;
    }
    .card-content > p{
        font-size: 14px;
        margin-bottom: 30px;
    }
    .news-info{
        margin-bottom: 30px;
    }
    .info > p{
        font-size: 10px !important;
    }
    .info > h4{
        font-size: 10px;
    }
    .news-active > div > img{
        width: 80px;
        height: 80px;
    }
    .news-active > button{
        padding: 18px;
    }
}
@media(max-width:965px){
    .news-title{
        margin-top: 80px;
        margin-bottom: 100px;
    }
    .news-title > h1{
        font-size: 60px;
    }
    .news-title > div > h1{
        font-size: 60px;
    }
    .news-title > div > p{
        font-size: 16px;
        width: 100%;
    }
}
@media (max-width:900px){
.news-card-wrapper {
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

.card-content{
    margin-top: -50px;
}

.news-card-wrapper > img{
    width: 100%;
    height: 350px;
    object-fit: contain;
    display: block;

}

}
@media (max-width:800px){
    .news-title > div{
        flex-direction: column;
        align-items: start;
        gap: 15px;
    }
    .news-title > h1{
        margin-bottom: 0;
        font-size: 40px;
    }
    .news-title > div > h1{
        font-size: 40px;
    }
}
@media (max-width:530px){
    .news-title > h1{
        margin-bottom: 0;
        font-size: 30px;
    }
    .news-title > div > h1{
        font-size: 30px;
    }
}
@media (max-width:500px){
    .card-news > img{
        width: 400px;
    }
    .card-news > p{
        font-size: 16px;
    }
    .card-content > span{
        font-size: 16px;
    }
    .card-news-active > button{
        padding: 18px 30px;
    }
}
@media (max-width:430px){
    .card-news > img{
        width: 350px;
    }
    .card-news-active > button{
        padding: 18px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>