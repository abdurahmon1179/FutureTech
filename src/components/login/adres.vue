<template>
    <Container>
        <div class="adres-info-wrap">
            <div class="info">
                <h2>General Inquiries</h2>
                <div class="info-button">
                    <button>
                        <p>contact@ai-podcasts.com</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                    <button>
                        <p>+1 (123) 456-7890</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>

            <div class="info">
                <h2>Technical Support</h2>
                <div class="info-button">
                    <button>
                        <p>contact@ai-podcasts.com</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                    <button>
                        <p>+1 (123) 456-7890</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>

            <div class="info">
                <h2>Our Office</h2>
                <div class="info-button">
                    <p>Address: 123 AI Tech Avenue, Techville, 54321</p>
                    <button>
                        <p>+1 (123) 456-7890</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>

            <div class="info">
                <h2>Connect with Us</h2>
                <div class="info-button">
                    <span>
                        <img src="../../../public/img/twitter.svg" alt="">
                    </span>
                    <span>
                        <img src="../../../public/img/meida.svg" alt="">
                    </span>
                    <span>
                        <img src="../../../public/img/linkedin.svg" alt="">
                    </span>
                </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>
    .adres-info-wrap{
        font-family: Inter;
        display: flex;
        justify-content: space-between;
        gap: 50px;
    }
    .adres-info-wrap > .info:nth-child(4){
        border: none;
    }
    .info{
        display: inline-block;
        padding: 80px 0;
        border-right: 1px solid #262626;
        padding-right: 50px;
        width: 100%;
    }
    .info > h2{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 50px;
    }
    .info-button > button{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 18px 24px;
        background-color: #1A1A1A;
        border: 1px solid #262626;
        border-radius: 8px;
        color: #98989A;
    }
    .info-button > button:nth-child(2){
        margin-top: 15px;
    }
    .info-button > p{
        color: #98989A;
        font-size: 16px;
        line-height: 150%;
    }
    .info-button > span{
        padding: 18px 30px;
        background-color: #1A1A1A;
        border: 1px solid #262626;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
    }
    .adres-info-wrap > .info:nth-child(4) > .info-button{
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
</style>

<script setup>
import Container from "../layout/index.vue"
</script>