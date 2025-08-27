<template>
  <Container class="container">
    <div class="adres-info-wrap">
      <div class="info">
        <h2>{{ $t("contact.general") }}</h2>
        <div class="info-button">
          <button>
            <p>{{ $t("contact.email") }}</p>
            <img src="../../../public/img/topstrelka.svg" alt="">
          </button>
          <button>
            <p>{{ $t("contact.phone") }}</p>
            <img src="../../../public/img/topstrelka.svg" alt="">
          </button>
        </div>
      </div>

      <div class="info">
        <h2>{{ $t("contact.support") }}</h2>
        <div class="info-button">
          <button>
            <p>{{ $t("contact.email") }}</p>
            <img src="../../../public/img/topstrelka.svg" alt="">
          </button>
          <button>
            <p>{{ $t("contact.phone") }}</p>
            <img src="../../../public/img/topstrelka.svg" alt="">
          </button>
        </div>
      </div>

      <div class="info">
        <h2>{{ $t("contact.office") }}</h2>
        <div class="info-button">
          <p>{{ $t("contact.address") }}</p>
          <button>
            <p>{{ $t("contact.phone") }}</p>
            <img src="../../../public/img/topstrelka.svg" alt="">
          </button>
        </div>
      </div>

      <div class="info">
        <h2>{{ $t("contact.connect") }}</h2>
        <div class="info-button res-wrap">
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
.adres-info-wrap {
    font-family: Inter;
    display: flex;
    justify-content: space-between;
    gap: 50px;
}

.adres-info-wrap>.info:nth-child(4) {
    border: none;
}

.info {
    display: inline-block;
    padding: 80px 0;
    border-right: 1px solid #262626;
    padding-right: 50px;
    width: 100%;
}

.info>h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;
}

.info-button>button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 24px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 8px;
    color: #98989A;
}

.info-button>button:nth-child(2) {
    margin-top: 15px;
}

.info-button > button > p{
    margin-top: 10px;
}

.info-button>p {
    color: #98989A;
    font-size: 16px;
    line-height: 150%;
    margin-top: 20px;
}

.info-button>span {
    padding: 18px 30px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
}

.adres-info-wrap>.info:nth-child(4)>.info-button {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

@media(max-width:1400px) {
    .container {
        width: 100%;
        padding: 0 40px;
    }

    .res-wrap {
        flex-wrap: wrap;
        gap: 10px !important;
    }

    .res-wrap>span {
        padding: 12px;
    }
}

@media(max-width:1230px) {
    .info-button>button {
        padding: 15px;
    }

    .info-button p {
        font-size: 15px;
    }

    .info-button>button>p {
        font-size: 13px;
    }
}

@media(max-width:1130px) {
    .info>h2 {
        font-size: 18px;
    }
}

@media(max-width:1065px) {
    .adres-info-wrap {
        font-family: Inter;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }
    .info{
        border: none;
        padding: 40px 0;
    }
}
@media(max-width:590px){
    .adres-info-wrap{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .info{
        border-bottom: 1px solid #262626;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>