<template>
<Container class="body-container">
    <div class="news-line">
        <div class="news-block">
            <img src="../../../public/img/newslogo.svg" alt="">
            <h2>Quantum Computing Whitepaper</h2>
            <p>Provides technical specifications and requirements for implementing quantum computing systems.</p>
        </div>
        <img src="../../../public/img/row.svg" alt="">
        <div class="news-blog2">
            <img src="../../../public/img/news2.svg" alt="">
            <div class="new-card-title">
                <div class="text">
                    <h2>Quantum Computing Whitepaper</h2>
                     <p>An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.</p>
                </div>
                <div class="title-btn">
                    <button>
                        <p>Download PDF Now</p>
                        <img src="../../../public/img/btnarrow.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="news-card">
                <div class="new-blog-card">
                    <p>Total Ebooks</p>
                    <h3>Over 100 ebooks</h3>
                </div>
                <div class="new-blog-format format-text">
                    <p>Category</p>
                    <h3>Quantum Computing</h3>
                </div>
                <div class="new-blog-card">
                    <p>Total Ebooks</p>
                    <h3>Over 100 ebooks</h3>
                </div>
            </div>    
        </div>
    </div>
</Container>
<hr>
<Container class="body-container">
    <div class="news-line">
        <div class="news-block">
            <img src="../../../public/img/newslogo2.svg" alt="">
            <h2>Space Exploration Whitepaper</h2>
            <p>Explores Mars colonization, asteroid resource potential, and space tourism.</p>
        </div>
        <img src="../../../public/img/row.svg" alt="">
        <div class="news-blog2">
            <img src="../../../public/img/news2.svg" alt="">
            <div class="new-card-title">
                <div class="text">
                    <h2>Quantum Computing Whitepaper</h2>
                     <p>An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.</p>
                </div>
                <div class="title-btn">
                    <button>
                        <p>Download PDF Now</p>
                        <img src="../../../public/img/btnarrow.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="news-card">
                <div class="new-blog-card">
                    <p>Total Ebooks</p>
                    <h3>Over 100 ebooks</h3>
                </div>
                <div class="new-blog-format format-text">
                    <p>Category</p>
                    <h3>Quantum Computing</h3>
                </div>
                <div class="new-blog-card">
                    <p>Total Ebooks</p>
                    <h3>Over 100 ebooks</h3>
                </div>
            </div>    
        </div>
    </div>
</Container>
</template>

<style scoped>
.news-block{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
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
    padding: 18px 0;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 8px;
    gap: 10px;
    margin-bottom: 60px;
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
    padding: 80px 0 ;
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
    width: 100%;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 100%;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 13px;
    height: 123px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    padding: 18px 24px;
    background-color: #141414;
    border: 1px solid #262626;
    gap: 10px;
    border-radius: 10px;
    color: #98989A;
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
.text > h2{
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 14px;
}
.text > p{
    color: #98989A;
    font-size: 18px;
    font-weight: 400;
    width: 500px;
    line-height: 150%;
}
.new-card-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    font-family: Inter;
}
.title-btn > button{
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Inter;
    color: #98989A;
    border-radius: 8px;
    border: 1px solid #262626;
    background-color: #1A1A1A;
    cursor: pointer;
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
@media(max-width:735px){
    .news-card{
        flex-direction: column;
    }
}
@media(max-width:710px){
    .new-card-title{
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 20px;
    }
}
@media (max-width:695px){
    .news-title2 > p{
        font-size: 14px;
    }
    .news-title2 > h2{
        font-size: 18px;
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
@media(max-width:570px){
    .text > h2{
        font-size: 20px;
    }
    .text > p{
        font-size: 14px;
        width: 100%;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>