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
@media(max-width:1400px){
    .container{
        width: 100%;
        padding: 0 40px;
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
</style>

<script setup>
import Container from "../layout/index.vue"
</script>