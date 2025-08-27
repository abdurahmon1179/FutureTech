<template>
  <Container class="container">
    <div class="news-title">
      <h1>{{ $t("news.unlock") }}</h1>
      <div>
        <h1>{{ $t("news.knowledge") }}</h1>
        <p>{{ $t("news.explore") }}</p>
      </div>
    </div>
  </Container>

  <hr />

  <Container>
    <div class="card-wrapper">
      <div class="card card1">
        <h3>300 <span>+</span></h3>
        <p>{{ $t("news.resources") }}</p>
      </div>

      <img src="../../../public/img/row.svg" alt="" />

      <div class="card card2">
        <h3>12k <span>+</span></h3>
        <p>{{ $t("news.downloads") }}</p>
      </div>

      <img src="../../../public/img/row.svg" alt="" />

      <div class="card card3">
        <h3>10k <span>+</span></h3>
        <p>{{ $t("news.users") }}</p>
      </div>

      <img src="../../../public/img/row.svg" alt="" />

      <div class="card card3">
        <h3>100 <span>+</span></h3>
        <p>{{ $t("news.countries") }}</p>
      </div>
    </div>
  </Container>
</template>


<style scoped>
.news-title{
    margin-top: 130px;
    font-family: Kumbh Sans;
    margin-bottom: 130px;
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
    height: 2px;
    background-color: #262626;
}




.card-wrapper {
    display: flex;
    align-items: center;
    gap: 80px;
}


.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: Inter;
}

.card > h3{
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex; 
    align-items: center;
}
.card > h3 > span{
    color: #FFD11A;
}
.card > p{
    color: #98989A;
    text-align: center;
}
@media(max-width:1400px){
    .container{
        width: 100%;
        padding: 0 40px;
    }
}
@media(max-width:1110px){
    .card > h3{
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex; 
    align-items: center;
}
}
@media(max-width:965px){
    .news-title{
        margin-top: 80px;
        margin-bottom: 100px;
    }
    .news-title > h1{
        font-size: 50px;
    }
    .news-title > div > h1{
        font-size: 50px;
    }
    .news-title > div > p{
        font-size: 16px;
        width: 100%;
    }
    .card > h3{
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 10px; 
    display: flex; 
    align-items: center;
    }
    .card-wrapper{
        gap: 50px;
    }
}
@media(max-width:730px){
    .news-title > div > p{
        font-size: 14px;
    }
    .news-title > h1{
        font-size: 35px;
    }
    .news-title > div > h1{
        font-size: 35px;
    }
    .card-wrapper{
        display: none;
    }
}
@media (max-width:615px){
    .news-title > div > p{
        font-size: 10px;
    }
    .news-title > h1{
        font-size: 25px;
    }
    .news-title > div > h1{
        font-size: 25px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>