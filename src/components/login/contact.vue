<template>
    <hr>
    <Container class="body-container">
        <div class="news-line">
            <div class="news-block">
                <img src="../../../public/img/newslogo.svg" alt="">
                <h2>Get in Touch with AI Podcasts</h2>
            </div>
            <img src="../../../public/img/row.svg" alt="">
            <div class="news-blog2">
                <div class="name-input">
                    <div class="first-name input">
                        <p>First Name</p>
                        <input type="text" placeholder="Enter First Name">
                    </div>
                    <div class="last-name input">
                        <p>Last Name</p>
                        <input type="text" placeholder="Enter Last Name">
                    </div>
                </div>



                <div class="name-input">
                    <div class="first-name input">
                        <p>Email</p>
                        <input type="text" placeholder="Enter your Email">
                    </div>
                    <div class="phone">
                        <p>Phone Number</p>
                        <div class="flag input">
                            <input type="text" placeholder="Enter Last Name">
                            <span>
                                <img src="../../../public/img/india.svg" alt="">
                                <img src="../../../public/img/strelka.svg" alt="">
                            </span>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <p>Message</p>
                    <input type="text" placeholder="Enter your Message">
                </div>
                <div class="send">
                    <span>
                        <input type="checkbox">
                        <p>I agree with Terms of Use and Privacy Policy</p>
                    </span>
                    <button>Send</button>
                </div>
            </div>
        </div>
    </Container>
    <hr>
    <Container class="body-container">
        <div class="news-line">
            <div class="news-block second">
                <img src="../../../public/img/newslogo2.svg" alt="">
                <h2>Get in Touch with AI Podcasts</h2>
                <p>If the question is not available on our FAQ section, Feel free to contact us personally, we will
                    resolve your respective doubts. </p>
            </div>
            <img src="../../../public/img/row.svg" alt="">
            <div class="news-blog2">
                <div v-for="(item, index) in accordions" :key="index" class="accordion">
    <div class="accordion-title" @click="toggle(index)">
      <h2>{{ item.title }}</h2>
      <img :src="activeIndex === index ? '/img/minus.svg' : '/img/plus.svg'" alt="toggle">
    </div>

    <div class="accordion-body" v-show="activeIndex === index">
      <p>{{ item.content }}</p>
    </div>
  </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>
.news-block {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

.news-block>img {
    margin-bottom: 50px;
}

.news-block>h2 {
    font-family: Kumbh Sans;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 16px;
}

.news-block>p {
    color: #98989A;
    font-family: Inter;
    font-size: 20px;
    width: 539px;
    line-height: 150%;
    margin-bottom: 50px;
}




.news-line {
    display: flex;
    gap: 80px;
}

.news-line>img {
    height: 880px;
}

.news-blog2 {
    padding: 80px 0;
}

.news-title2 {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}

.news-title2>h2 {
    font-size: 24px;
    font-weight: 600;
    font-family: Inter;
}

.news-title2>p {
    color: #98989A;
    font-family: Inter;
    font-size: 18px;
    line-height: 150%;
    width: 550px;
}

.news-blog2>img {
    width: 100%;
    margin-bottom: 30px;
}


hr {
    background-color: #262626;
    height: 3px;
    border: none;
}

.name-input {
    display: flex;
    align-items: center;
    gap: 50px;
    font-family: Inter;
    margin-bottom: 50px;
}

.input>p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
}

.input>input {
    width: 350px;
    height: 60px;
    border-radius: 8px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    padding-left: 20px;
    outline: none;
    color: white;
}

.flag {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 16px;
}

.flag>input {
    width: 240px;
}

.flag>span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    gap: 6px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    border-radius: 7px;
    cursor: pointer;
}

.phone>p {
    margin-bottom: 16px;
}

.message {
    margin-bottom: 50px;
}

.message>p {
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
}

.message>input {
    width: 100%;
    height: 163px;
    outline: none;
    border-radius: 8px;
    background-color: #1A1A1A;
    border: 1px solid #262626;
    font-family: Inter;
    padding-left: 20px;
    color: white;
}

.send>span>input {
    width: 28px;
    height: 28px;
    accent-color: #FFD11A;
}

.send>span {
    display: flex;
    align-items: center;
    gap: 10px;
}

.send>span>p {
    font-family: Inter;
    font-size: 18px;
}

.send {
    display: flex;
    justify-content: space-between;
}

.send>button {
    background-color: #FFD11A;
    padding: 18px 46px;
    border-radius: 8px;
    border: none;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
}

.accordion {
    background-color: #1A1A1A;
    border: 1px solid #262626;
    padding: 34px;
    border-radius: 12px;
    font-family: Inter;
    width: 720px;
    margin-bottom: 30px;
}

.accordion-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}


.accordion-title>h2 {
    font-size: 20px;
    font-weight: 500;
}

.accordion-title > img{
    cursor: pointer;
}

.second>p {
    font-size: 18px;
    width: 400px;
}

.second>h2 {
    font-size: 37.7px;
}

.accordion-body>p {
    margin-top: 24px;
    padding-top: 16px;
    color: #7E7E81;
    line-height: 150%;
    border-top: 1px solid #262626;
}

@media (max-width:1400px) {
    .title-container {
        width: 100%;
        padding: 0 40px;
    }

    .body-container {
        width: 100%;
        padding: 0 40px;
    }

    .title-text>h2 {
        font-size: 40px;
        width: 700px;
    }

    .news-line {
        flex-direction: column;
    }

    .news-line>img {
        display: none;
    }

    .news-block {
        padding: 50px 0 80px 0;
        border-bottom: 2px solid #262626;
    }

    .news-blog2 {
        padding: 0 0 50px 0;
    }

    .news-block>p {
        width: 100%;
    }
    .input{
        width: 100%;
    }
    .phone{
        width: 100%;
    }
    .input > input{
        width: 100%;
    }
    .accordion{
        width: 100%;
    }
}

@media (max-width:1035px) {
    .title-text>span {
        font-size: 16px;
    }

    .title-text>h2 {
        font-size: 30px;
        width: 400px;
    }

    .news-title>button {
        padding: 15px 20px;
    }

    .title-text>h2 {
        font-size: 25px;
        width: 350px;
    }

    .title-text>span {
        font-size: 14px;
    }

    .news-title>button {
        padding: 15px;
    }
}

@media(max-width:780px){
    .send > span > p{
        font-size: 14px;
    }
}

@media(max-width:735px) {
    .news-card {
        flex-direction: column;
    }
}

@media(max-width:720px){
    .name-input{
        flex-wrap: wrap;
    }
}

@media(max-width:710px) {
    .new-card-title {
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 20px;
    }
    .send > button{
        padding: 15px;
    }
}

@media (max-width:695px) {
    .news-title2>p {
        font-size: 14px;
    }

    .news-title2>h2 {
        font-size: 18px;
    }
}

@media (max-width:668px) {
    .news-title {
        flex-direction: column;
        align-items: start;
    }

    .news-title>button {
        margin-top: 30px;
        width: 100%;
        justify-content: center;
    }

    section {
        padding: 80px 0;
    }

    .title-text>h2 {
        width: 100%;
        font-size: 30px;
    }

    .accordion-title > h2{
        font-size: 18px;
        font-weight: 400;
    }
}

@media (max-width:615px) {
    .news-card {
        flex-direction: column;
    }

    .new-blog-card {
        width: 100%;
    }

}

@media(max-width:570px) {
    .text>h2 {
        font-size: 20px;
    }

    .text>p {
        font-size: 14px;
        width: 100%;
    }

    .accordion-title > h2{
        font-size: 14px;
    }

    .send > span > p{
        font-size: 12px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
import { ref } from "vue";

const activeIndex = ref(null);

const accordions = [
  { title: "What is AI?", content: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making." },
  { title: "How can I listen to your podcasts?", content: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making." },
  { title: "Are your podcasts free to listen to?", content: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making." },
  { title: "Can I download episodes to listen offline?", content: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making." },
  { title: "How often do you release new episodes?", content: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making." }
];

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
} 
</script>