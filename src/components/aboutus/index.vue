<template>
<section>
    <Container>
        <div class="aboutus-title">
            <img src="../../../public/img/aboutus.svg" alt="">
            <div class="aboutus-title-text">
                <span>Learn, Connect, and Innovate</span>
                <h2>Be Part of the Future Tech Revolution</h2>
                <p>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
            </div>
        </div>
        <div class="abputus-cards">
            <div class="aboutus-card">
                <div class="aboutus-card-title">
                    <p>Resource Access</p>
                    <img src="../../../public/img/aboutus2.svg" alt="">
                </div>
                <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
            </div>

            <div class="aboutus-card">
                <div class="aboutus-card-title">
                    <p>Resource Access</p>
                    <img src="../../../public/img/aboutus2.svg" alt="">
                </div>
                <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
            </div>

            <div class="aboutus-card">
                <div class="aboutus-card-title">
                    <p>Resource Access</p>
                    <img src="../../../public/img/aboutus2.svg" alt="">
                </div>
                <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
            </div>
        </div>
    </Container>
</section>
</template>

<style scoped>
section{
    padding: 120px 0;
    background-color: #1A1A1A;
    border: 1px solid #262626;
}
.aboutus-title-text > span{
    padding: 6px 10px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    background-color: #333333;
    border-radius: 4px;
}
.aboutus-title-text > h2{
    font-family: Kumbh Sans;
    font-size: 58px;
    font-weight: 500;
    margin-bottom: 30px;
    margin-top: 16px;
}
.aboutus-title-text > p{
    color: #7E7E81;
    font-family: Inter;
    font-size: 18px;
    line-height: 150%;
}
.aboutus-title{
    display: flex;
    align-items: center;
    gap: 80px;
    margin-bottom: 100px;
}
.abputus-cards{
    padding: 20px;
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 12px;
    display: flex;
    gap: 20px;
}
.aboutus-card{
    padding: 40px;
    border: 1px solid #262626;
    background-color: #1A1A1A;
    border-radius: 12px;
    font-family: Inter;
    display: inline-block;
    width: 452px;
}
.aboutus-card-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.aboutus-card > p{
    width: 400px;
    margin-top: 20px;
    color: #98989A;
    font-size: 16px;
    line-height: 150%;
}
.aboutus-card-title > p{
    font-size: 22px;
    font-weight: 600;
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>