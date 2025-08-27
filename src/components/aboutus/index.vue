<template>
<section>
  <Container class="container">
    <div class="aboutus-title first">
      <img src="../../../public/img/aboutus.svg" alt="">
      <div class="aboutus-title-text">
        <span>{{ $t('about.title1') }}</span>
        <h2>{{ $t('about.subtitle1') }}</h2>
        <p>{{ $t('about.text1') }}</p>
      </div>
    </div>

    <div class="aboutus-title second">
      <div class="title-logo">
        <img src="../../../public/img/aboutus.svg" alt="">
      </div>
      <div class="aboutus-title-text">
        <span>{{ $t('about.title1') }}</span>
        <h2>{{ $t('about.subtitle1') }}</h2>
        <p>{{ $t('about.text1') }}</p>
      </div>
    </div>

    <div class="abputus-cards">
      <div class="aboutus-card">
        <div class="aboutus-card-title">
          <p>{{ $t('about.card1_title') }}</p>
          <img src="../../../public/img/aboutus2.svg" alt="">
        </div>
        <p>{{ $t('about.card1_text') }}</p>
      </div>

      <div class="aboutus-card">
        <div class="aboutus-card-title">
          <p>{{ $t('about.card1_title') }}</p>
          <img src="../../../public/img/aboutus2.svg" alt="">
        </div>
        <p>{{ $t('about.card1_text') }}</p>
      </div>

      <div class="aboutus-card">
        <div class="aboutus-card-title">
          <p>{{ $t('about.card1_title') }}</p>
          <img src="../../../public/img/aboutus2.svg" alt="">
        </div>
        <p>{{ $t('about.card1_text') }}</p>
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
.second{
    display: none;
}

.aboutus-card-title img:hover { 
  cursor: pointer;
  opacity: 0.5;
}
@media (max-width:1400px){
    .container{
        width: 100%;
        padding: 0px 40px;
    }
    .aboutus-title-text{
        width: 100%;
    }
    .aboutus-title-text > h2{
        font-size: 40px;
    }
    .aboutus-title-text > p{
        font-size: 16px;
        width: 100%;
    }
    .abputus-cards{
        flex-direction: column;
    }
    .aboutus-card{
        width: 100%;
    }
    .second{
        display: none;
    }
    
}
@media (max-width:880px){
    .first{
        display: none;
    }
    .second{
        display: flex;
        flex-direction: column;
    }
    .second > div > span{
    padding: 6px 10px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    background-color: #333333;
    border-radius: 4px;
    }
    .title-logo{
        display: flex;
        align-items: center;
        gap: 20px;
        width: 100%;
    }
        .second > div > img{
        width: 60px;
        height: 60px;
    }
    .aboutus-card > p{
        width: 100%;
    }
}
@media (max-width:561px){
    .second > div > span{
        font-size: 16px;
    }

}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>