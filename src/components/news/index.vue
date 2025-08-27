<template>
<section>
    <Container class="title-container">
        <div class="news-title">
            <div class="title-text">
                <span>{{ $t('resources.subtitle') }}</span>
                <h2>{{ $t('resources.title') }}</h2>
            </div>
            <button>
                <p>{{ $t('resources.viewAll') }}</p>
                <img src="../../../public/img/topstrelka.svg" alt="">
            </button>
        </div>
    </Container>
</section>

<Container class="body-container">
    <div class="news-line">
        <div class="news-block">
            <img src="../../../public/img/newslogo.svg" alt="">
            <h2>{{ $t('resources.ebooks.title') }}</h2>
            <p>{{ $t('resources.ebooks.desc') }}</p>
            <button>
                <p>{{ $t('resources.ebooks.download') }}</p>
                <img src="../../../public/img/topstrelka.svg" alt="">
            </button>
            <div>
                <div>
                    <p>{{ $t('resources.ebooks.download') }}</p>
                    <h3>{{ $t('resources.ebooks.users') }}</h3>
                </div>
                <img src="../../../public/img/users.svg" alt="">
            </div>
        </div>
        <img src="../../../public/img/row.svg" alt="">
        <div class="news-blog2">
            <div class="news-title2">
                <h2>{{ $t('resources.ebooks.varietyTitle') }}</h2>
                <p>{{ $t('resources.ebooks.varietyDesc') }}</p>
            </div>
            <img src="../../../public/img/news2.svg" alt="">
            <div class="news-card">
                <div class="new-blog-card">
                    <p>{{ $t('resources.ebooks.total') }}</p>
                    <h3>{{ $t('resources.ebooks.totalDesc') }}</h3>
                </div>
                <div class="new-blog-format">
                    <div class="format-text">
                        <p>{{ $t('resources.ebooks.format') }}</p>
                        <h3>{{ $t('resources.ebooks.formatDesc') }}</h3>
                    </div>
                    <button>
                        <p>{{ $t('resources.ebooks.preview') }}</p>
                        <img src="../../../public/img/eye.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="new-blog-author">
                <p>{{ $t('resources.ebooks.expertise') }}</p>
                <h3>{{ $t('resources.ebooks.expertiseDesc') }}</h3>
            </div>
        </div>
    </div>
</Container>

<hr>

<Container class="body-container">
    <div class="news-line">
        <div class="news-block">
            <img src="../../../public/img/newslogo2.svg" alt="">
            <h2>{{ $t('resources.whitepapers.title') }}</h2>
            <p>{{ $t('resources.whitepapers.desc') }}</p>
            <button>
                <p>{{ $t('resources.whitepapers.download') }}</p>
                <img src="../../../public/img/topstrelka.svg" alt="">
            </button>
            <div>
                <div>
                    <p>{{ $t('resources.whitepapers.download') }}</p>
                    <h3>{{ $t('resources.whitepapers.users') }}</h3>
                </div>
                <img src="../../../public/img/users.svg" alt="">
            </div>
        </div>
        <img src="../../../public/img/row.svg" alt="">
        <div class="news-blog2">
            <div class="news-title2">
                <h2>{{ $t('resources.whitepapers.varietyTitle') }}</h2>
                <p>{{ $t('resources.whitepapers.varietyDesc') }}</p>
            </div>
            <img src="../../../public/img/news3.svg" alt="">
            <div class="news-card">
                <div class="new-blog-card">
                    <p>{{ $t('resources.whitepapers.total') }}</p>
                    <h3>{{ $t('resources.whitepapers.totalDesc') }}</h3>
                </div>
                <div class="new-blog-format">
                    <div class="format-text">
                        <p>{{ $t('resources.whitepapers.format') }}</p>
                        <h3>{{ $t('resources.whitepapers.formatDesc') }}</h3>
                    </div>
                    <button>
                        <p>{{ $t('resources.whitepapers.preview') }}</p>
                        <img src="../../../public/img/eye.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="new-blog-author">
                <p>{{ $t('resources.whitepapers.expertise') }}</p>
                <h3>{{ $t('resources.whitepapers.expertiseDesc') }}</h3>
            </div>      
        </div>
    </div>
</Container>
</template>


<style scoped>
section{
    background-color: #1A1A1A;
    border:  1px solid #262626;
    padding: 120px 0;
    font-family: Kumbh Sans;
}
.news-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title-text > span{
    padding: 6px 10px;
    background-color: #333333;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 500;
}
.title-text > h2{
    font-size: 58px;
    font-weight: 500;
    line-height: 130%;
    width: 900px;
    margin-top: 16px;
}
.news-title > button{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 24px;
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 12px;
    color: #98989A;
    font-size: 18px;
}
.news-title > button > p{
    margin-top: 12px;
}
.news-block{
    padding: 155px 0;
    display: inline-block;
}
.news-block > img{
    margin-bottom: 50px;
}
.news-block > h2{
    font-family: Kumbh Sans;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 16px;
}
.news-block > p{
    color: #98989A;
    font-family: Inter;
    font-size: 20px;
    width: 539px;
    line-height: 150%;
    margin-bottom: 50px;
}
.news-block > button{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #98989A;
    width: 100%;
    padding: 10px 0;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 8px;
    gap: 10px;
    margin-bottom: 60px;
}
.news-block > button > p{
    margin-top: 12px;
}
.news-block > div{
    padding: 30px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 13px;
    font-family: Inter;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.news-block > div > div > p{
    color: #98989A;
    margin-bottom: 4px;
}
.news-block > div > div > h3{
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
}
.news-line{
    display: flex;
    gap: 80px;
}
.news-line > img{
    height: 880px;
}
.news-blog2{
    padding: 80px 0;
}
.news-title2{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}
.news-title2 > h2{
    font-size: 24px;
    font-weight: 600;
    font-family: Inter;
}
.news-title2 > p{
    color: #98989A;
    font-family: Inter;
    font-size: 18px;
    line-height: 150%;
    width: 550px;
}
.news-blog2 > img{
    width: 100%;
    margin-bottom: 30px;
}
.new-blog-card{
    padding: 30px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 13px;
    display: inline-block;
    font-family: Inter;
    height: 121px;
}
.new-blog-card > p{
    font-size: 18px;
    margin-bottom: 4px;
    color: #98989A;
}
.new-blog-card > h3{
    font-size: 20px;
    font-weight: 600;
    width: 160px;
}
.new-blog-format{
    padding: 30px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 123px;
    width: 100%;
}
.format-text{
    font-family: Inter;
}
.format-text > p{
    color: #98989A;
    font-size: 18px;
    margin-bottom: 4px;
}
.format-text > h3{
    font-size: 20px;
    font-weight: 600;
}
.new-blog-format > button{
    display: flex;
    align-items: center;
    padding: 10px 24px;
    background-color: #141414;
    border: 1px solid #262626;
    gap: 10px;
    border-radius: 10px;
    color: #98989A;
}
.new-blog-format > button > p{
    margin-top: 12px;
}
.news-card{
    display: flex;
    align-items: center;
    gap: 20px;
}
.new-blog-author{
    padding: 30px;
    border: 1px solid #262626;
    background-color: #1A1A1A;
    font-family: Inter;
    border-radius: 13px;
    width: 100%;
    margin-top: 30px;
    /* height: 121px; */
}
.new-blog-author > p{
    color: #98989A;
    font-size: 18px;
    margin-bottom: 10px;
}
.new-blog-author > h3{
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
}
hr{
    background-color: #262626;
    height: 3px;
    border: none;
}
@media (max-width:1400px){
    .title-container{
        width: 100%;
        padding: 0 40px;
    }
    .body-container{
        width: 100%;
        padding: 0 40px;
    }
    .title-text > h2{
        font-size: 40px;
        width: 700px;
    }
    .news-line{
        flex-direction: column;
    }
    .news-line > img{
        display: none;
    }
    .news-block{
        padding: 50px 0 80px 0;
        border-bottom: 2px solid #262626;
    }
    .news-blog2{
        padding:  0 0 50px 0;
    }
    .news-block > p{
        width: 100%;
    }
}
@media (max-width:1035px){
    .title-text > span{
        font-size: 16px;
    }
    .title-text > h2{
        font-size: 30px;
        width: 400px;
    }
    .news-title > button{
        padding: 15px 20px;
    }
    .title-text > h2{
        font-size: 25px;
        width: 350px;
    }
    .title-text > span{
        font-size: 14px;
    }
    .news-title > button {
        padding: 15px;
    }
}
@media (max-width:695px){
    .news-title2 > p{
        font-size: 14px;
    }
    .news-title2 > h2{
        font-size: 18px;
    }
    .format-text > p{
        font-size: 12px;
    }
    .format-text > h3{
        font-size: 12px;
        width: 100px;
    }
    .new-blog-format > button{
        padding: 14px;
        font-size: 14px;
    }
    .new-blog-card > h3{
        font-size: 16px;
    }
    .new-blog-card > p{
        font-size: 14px;    
    }
}
@media (max-width:668px){
    .news-title{
        flex-direction: column;
        align-items: start;
    }
    .news-title > button{
        margin-top: 30px;
        width: 100%;
        justify-content: center;
    }
    section{
        padding: 80px 0;
    }
    .title-text > h2{
        width: 100%;
        font-size: 30px;
    }
}
@media (max-width:615px){
    .news-card{
        flex-direction: column;
    }
    .new-blog-card{
        width: 100%;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>