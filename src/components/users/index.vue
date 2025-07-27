<template>
<section>
    <Container>
        <div class="news-title">
            <div class="title-text">
                <span >
                    What Our Readers Say
                </span>
                <h2>Real Words from Real Readers</h2>
            </div>
            <button>
                <p>View All Resources</p>
                <img src="../../../public/img/topstrelka.svg" alt="">
            </button>
        </div>
    </Container>
</section>
<Container>
    <div class="users-wrapper">
        <div class="user">
            <div class="user-info">
                <div class="user-img">
                    <img src="../../../public/img/user.svg" alt="">
                </div>
                <div class="user-name">
                    <h2>Sarah Thompson</h2>
                    <p>San Francisco, USA</p>
                </div>
            </div>
            <div class="user-comment">
                <img src="../../../public/img/fivestar.svg" alt="">
                <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
            </div>
        </div>
        <img src="../../../public/img/row2.svg" alt="">
        <div class="user">
            <div class="user-info">
                <div class="user-img">
                    <img src="../../../public/img/user.svg" alt="">
                </div>
                <div class="user-name">
                    <h2>Sarah Thompson</h2>
                    <p>San Francisco, USA</p>
                </div>
            </div>
            <div class="user-comment">
                <img src="../../../public/img/fivestar.svg" alt="">
                <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
            </div>
        </div>
        <img src="../../../public/img/row2.svg" alt="">
        <div class="user">
            <div class="user-info">
                <div class="user-img">
                    <img src="../../../public/img/user.svg" alt="">
                </div>
                <div class="user-name">
                    <h2>Sarah Thompson</h2>
                    <p>San Francisco, USA</p>
                </div>
            </div>
            <div class="user-comment">
                <img src="../../../public/img/fivestar.svg" alt="">
                <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
            </div>
        </div>
    </div>
</Container>
<hr>
<Container>
    <div class="users-wrapper">
        <div class="user">
            <div class="user-info">
                <div class="user-img">
                    <img src="../../../public/img/user.svg" alt="">
                </div>
                <div class="user-name">
                    <h2>Sarah Thompson</h2>
                    <p>San Francisco, USA</p>
                </div>
            </div>
            <div class="user-comment">
                <img src="../../../public/img/fivestar.svg" alt="">
                <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
            </div>
        </div>
        <img src="../../../public/img/row2.svg" alt="">
        <div class="user">
            <div class="user-info">
                <div class="user-img">
                    <img src="../../../public/img/user.svg" alt="">
                </div>
                <div class="user-name">
                    <h2>Sarah Thompson</h2>
                    <p>San Francisco, USA</p>
                </div>
            </div>
            <div class="user-comment">
                <img src="../../../public/img/fivestar.svg" alt="">
                <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
            </div>
        </div>
        <img src="../../../public/img/row2.svg" alt="">
        <div class="user">
            <div class="user-info">
                <div class="user-img">
                    <img src="../../../public/img/user.svg" alt="">
                </div>
                <div class="user-name">
                    <h2>Sarah Thompson</h2>
                    <p>San Francisco, USA</p>
                </div>
            </div>
            <div class="user-comment">
                <img src="../../../public/img/fivestar.svg" alt="">
                <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
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
.users-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.user{
    padding: 80px 0;
    font-family: Inter;
    display: inline-block;
}
.user-info{
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
    justify-content: center;
}
.user-name > h2{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2px;
}
.user-name > p{
    color: #666666;
    font-size: 18px;
}
.user-comment{
    padding: 50px 30px 30px 30px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 12px;
    position: relative;
}
.user-comment > p{
    width: 400px;
    text-align: center;
    font-size: 18px;
    line-height: 150%;
}
.user-comment > img{
    position: absolute;
    top: -20px;
    right: 145px;
}
hr {
    background-color: #262626;
    height: 2px;
    border: none;
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>