<template>
    <section class="post-title-section">
        <Container>
            <div class="post-title">
                <div class="post-title-text">
                    <div>A Knowledge Treasure Trove</div>
                    <p>Explore FutureTech's In-Depth Blog Posts</p>
                </div>
                <div class="post-title-link">
                    <button>
                        <p>View All Blogs</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </Container>
    </section>
    <Container>
        <div class="post-menu">
            <div class="post-card active">
                <p>All</p>
            </div>
            <div class="post-card">
                <p>Quantum Computing</p>
            </div>
            <div class="post-card">
                <p>AI Ethics</p>
            </div>
            <div class="post-card">
                <p>Space Exploration</p>
            </div>
            <div class="post-card">
                <p>Biotechnology</p>
            </div>
            <div class="post-card">
                <p>Renewable Energy</p>
            </div>
        </div>
    </Container>
</template>

<style scoped>
.post-title-section{
    padding: 120px 0;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    margin-bottom: 50px;
}
.post-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post-title-text > div{
    display: inline-block;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    padding: 6px 10px;
    border-radius: 4px;
    background-color: #333333;
    margin-bottom: 16px;
}
.post-title-text > p{
    font-family: Kumbh Sans;
    font-size: 58px;
    font-weight: 500;
}
.post-title-link > button{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #141414;
    border: 1px solid #262626;
    padding: 18px 24px;
    border-radius: 12px;
    cursor: pointer;
}
.post-title-link > button > p{
    font-family: Inter;
    color: #98989A;
}
.post-menu{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
}
.post-card {
    width: 100%;
    height: 87px;
    background-color: transparent;
    border: 1px solid #262626;
    border-radius: 8px;
    display: flex;
    align-items: center;  
    justify-content: center;
}

.post-card > p {
    margin: 0;
    font-family: Inter; 
}

.active{
    background-color: #1A1A1A;
}
</style>

<script setup>
import Container from "../../components/layout/index.vue"
</script>