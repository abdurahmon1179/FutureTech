<template>
<section>
    <Container>
        <div class="news-title">
            <div class="title-text">
                <span >
                    Your Gateway to In-Depth Information
                </span>
                <h2>Unlock Valuable Knowledge with FutureTech's Resources</h2>
            </div>
            <button>
                <p>View All Resources</p>
                <img src="../../../public/img/topstrelka.svg" alt="">
            </button>
        </div>
    </Container>
</section>
<Container>
    <div class="news-line">
        <div class="news-block">
            <img src="../../../public/img/newslogo.svg" alt="">
            <h2>Ebooks</h2>
            <p>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
            <button>
                <p>Download Ebooks Now</p>
                <img src="../../../public/img/topstrelka.svg" alt="">
            </button>
            <div>
                <div>
                    <p>Download Ebooks Now</p>
                    <h3>10k + Users</h3>
                </div>
                <img src="../../../public/img/users.svg" alt="">
            </div>
        </div>
        <img src="../../../public/img/row.svg" alt="">
        <div class="news-blog2">
            <div class="news-title2">
                <h2>Variety Topics</h2>
                <p>Topics include AI in education (25%), renewable (20%), healthcare (15%),  exploration (25%), and biotechnology (15%).</p>
            </div>
            <img src="../../../public/img/news2.svg" alt="">
            <div class="news-card">
                <div class="new-blog-card">
                    <p>Total Ebooks</p>
                    <h3>Over 100 ebooks</h3>
                </div>
                <div class="new-blog-format">
                    <div class="format-text">
                        <p>Download Formats</p>
                        <h3>PDF format for access.</h3>
                    </div>
                    <button>
                        <p>Preview</p>
                        <img src="../../../public/img/eye.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="new-blog-author">
                <p>Average Author Expertise</p>
                <h3>Ebooks are authored by renowned with an average of 15 years of experience</h3>
            </div>      
        </div>
    </div>
</Container>
<hr>
<Container>
    <div class="news-line">
        <div class="news-block">
            <img src="../../../public/img/newslogo2.svg" alt="">
            <h2>Whitepapers</h2>
            <p>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
            <button>
                <p>Download Ebooks Now</p>
                <img src="../../../public/img/topstrelka.svg" alt="">
            </button>
            <div>
                <div>
                    <p>Download Ebooks Now</p>
                    <h3>10k + Users</h3>
                </div>
                <img src="../../../public/img/users.svg" alt="">
            </div>
        </div>
        <img src="../../../public/img/row.svg" alt="">
        <div class="news-blog2">
            <div class="news-title2">
                <h2>Variety Topics</h2>
                <p>Topics include AI in education (25%), renewable (20%), healthcare (15%),  exploration (25%), and biotechnology (15%).</p>
            </div>
            <img src="../../../public/img/news3.svg" alt="">
            <div class="news-card">
                <div class="new-blog-card">
                    <p>Total Ebooks</p>
                    <h3>Over 100 ebooks</h3>
                </div>
                <div class="new-blog-format">
                    <div class="format-text">
                        <p>Download Formats</p>
                        <h3>PDF format for access.</h3>
                    </div>
                    <button>
                        <p>Preview</p>
                        <img src="../../../public/img/eye.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="new-blog-author">
                <p>Average Author Expertise</p>
                <h3>Whitepapers are authored by subject matter experts with an average of 20 years of experience.</h3>
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
    padding: 18px 24px;
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 12px;
    color: #98989A;
    font-size: 18px;
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
</style>

<script setup>
import Container from "../layout/index.vue"
</script>