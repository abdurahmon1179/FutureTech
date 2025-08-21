<template>
    <section class="feature-section">
        <Container>
            <div class="title">
                <p>Unlock the Power of</p>
            </div>
            <h2 class="title-h2">FutureTech Features</h2>
        </Container>
    </section>
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
@media(max-width:1400px){
    .feature-section{
        padding: 100px 40px;
    }
}
@media (max-width:840px){
    .title-h2{
        font-size: 40px;
    }
    .title{
        font-size: 16px;
    }
}
@media (max-width:520px){
    .title-h2{
        font-size: 30px;
    }
    .title{
        font-size: 14px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>