<template>
    <section class="feature-section">
        <Container>
            <div class="title">
                <p>Unlock the Power of</p>
            </div>
            <h2 class="title-h2">FutureTech Features</h2>
        </Container>
    </section>
    <Container>
        <div class="future-tech">
            <div class="future-block">
                <img src="../../../public/img/feature.svg" alt="">
                <h2>Future Technology Blog</h2>
                <p>Stay informed with our blog section dedicated to future technology.</p>
            </div>
            <img src="../../../public/img/row.svg" alt="">
            <div class="future-cards">
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
            </div>
        </div>
    </Container>
    <hr style="height: 3px; background-color: #262626; border: none;">
    <Container>
        <div class="future-tech">
            <div class="future-block">
                <img src="../../../public/img/future2.svg" alt="">
                <h2>Future Technology Blog</h2>
                <p>Stay informed with our blog section dedicated to future technology.</p>
            </div>
            <img src="../../../public/img/row.svg" alt="">
            <div class="future-cards">
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="future-card">
                    <h3>Quantity</h3>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>
.feature-section{
    padding: 120px 0;
    background-color: #1A1A1A;
    border: 1px solid #262626;
}
.title{
    padding: 6px 10px;
    background-color: #333333;
    display: inline-block;
    font-family: Inter;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
}
.title-h2{
    font-size: 58px;
    font-weight: 500;
    font-family: Kumbh Sans;
}
.future-tech{
    display: flex;
}
.future-tech > img{
    height: 570px;
    margin-right: 60px;
}
.future-block{
    padding: 155px 0;
}
.future-block > img{
    margin-bottom: 50px;
}
.future-block > h2{
    font-family: Kumbh Sans;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 16px;
}
.future-block > p{
    font-family: Inter;
    color: #98989A;
    font-size: 18px;
    font-weight: 400;
    width: 500px;
    line-height: 150%;
}
.future-cards{
    margin-top: 80px;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    gap: 30px;
}
.future-card{
    padding: 40px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 12px;
    width: 420px;
}
.future-card > h3{
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
}
.future-card > p{
    color: #98989A;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    line-height: 150%;
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>