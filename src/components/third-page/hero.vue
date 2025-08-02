<template>
    <section>
        <h1>The Rise of Artificial Intelligence in Healthcare</h1>
    </section>
    <div class="wrapper">
        <div class="title-text">
            <h3>Introduction</h3>
            <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>
        </div>
        <img src="../../../public/img/row.svg" alt="">
            <div class="wrap">
                <div class="image-group">
                <img src="../../../public/img/like.svg" alt="">
                <img src="../../../public/img/viewer.svg" alt="">
                <img src="../../../public/img/share.svg" alt="">
            </div>
                <span></span>
        </div>   
    </div>
    <hr>
    <Container>
        <div>
            <div class="text-wrapper">
                <div class="left-side">
                    <h3>Artificial Intelligence (AI)</h3>
                    <p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
                    <br><br>
                    Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
                    </p>
                    <h3>Predictive Analytics and Disease Prevention</h3>
                    <p class="blur">Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis expedita nesciunt nihil magni ab. Magnam, harum rerum soluta et assumenda facere rem blanditiis fugit doloribus alias vero nostrum quo incidunt.
                    </p>
                    <button>
                        <p>Read Full Blog</p>
                        <img src="../../../public/img/bottomarrow.svg" alt="">
                    </button>
                </div>
                <div class="column"></div>
                <hr class="circle">
                <div class="right-side">
                    <div class="small-text-wrap">
                        <div class="small-text">
                            <h3>Publication Date</h3>
                            <p>October 15, 2023</p>
                        </div>
                        <div class="small-text">
                            <h3>Publication Date</h3>
                            <p>October 15, 2023</p>
                        </div>
                        <div class="small-text">
                            <h3>Publication Date</h3>
                            <p>October 15, 2023</p>
                        </div>
                        <div class="small-text">
                            <h3>Publication Date</h3>
                            <p>October 15, 2023</p>
                        </div>
                    </div>
                    <div class="right-side-menu">
                        <h3>Table of Contents</h3>
                        <ul class="menu-wrapper">
                            <li>Introduction</li>
                            <li>AI in Diagnostic Imaging</li>
                            <li>Predictive Analytics and Disease Prevention</li>
                            <li>Personalized Treatment Plans</li>
                            <li>Drug Discovery and Research</li>
                            <li>AI in Telemedicine</li>
                            <li>Ethical Considerations</li>
                            <li>The Future of AI in Healthcare</li>
                            <li>Conclusion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    <hr class="bottom">
</template>

<style scoped>
section{
    background-image: url(../../../public/img/podcastback.svg);
    height: 590px;
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 65px;
    border-bottom: 1px solid #262626;
}
section > h1{
    font-family: Inter;
    font-size: 64px;
    font-weight: 600;
}
.title-text{
    margin-top: 80px;
    font-family: Inter;
}
.title-text > h3{
    font-size: 20px;
    margin-bottom: 14px;
}
.title-text > p{
    font-size: 18px;
    color: #98989A;
    width: 930px;
    line-height: 150%;
}
.wrapper{
    display: flex;
    height: 285px;
    justify-content: center;
}
.image-group{
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%px;
}
span{
  position: absolute;
  display: block;
  width: 530px;
  left: 0;
  height: 2px;
  background: #262626;
  border: none;
  border-radius: 1px;
}
.wrap{
    position: relative;
    padding: 60px 0px 0px 80px;
}
hr{
    width: 991px;
    border: none;
    height: 2px;
    background-color: #262626;
}
.left-side{
    margin-top: 60px;
    font-family: Inter;
    position: relative;
}
.left-side > h3{
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 20px;
}
.left-side > p{
    color: #98989A;
    font-size: 16px;
    line-height: 150%;
    width: 930px;
    margin-bottom: 24px;
}
.blur{
        font-size: 16px;
    line-height: 150%;
    width: 930px;
    background: linear-gradient(to bottom, #98989A, #141414);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 70px;
}
.left-side > button{
    position: absolute;
    display: flex;
    align-items: center;
    padding: 14px 20px;
    gap: 4px;
    font-size: 14px;
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 8px;
    color: white;
    bottom: 65px;
    left: 35%;
    cursor: pointer;
}
.text-wrapper{
    display: flex;
}
.column{
  width: 2px;
  height: 680px; 
  background-color: #262626; 
  margin-left: 19px;
  margin-right: 60px;
}
.small-text{
     font-family: Inter;
     width: 200px;
}
.small-text > h3{
    color: #98989A;  
    margin-bottom: 6px;
    font-size: 16px;
}
.small-text > p{
    font-size: 16px;
}
.small-text-wrap{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 150px;
    margin-top: -50px;
    margin-bottom: 40px;
}
.right-side > h3{
    font-family: Inter;
    margin-bottom: 24px;
    color: #98989A;
    font-size: 14px;
}

.menu-wrapper > li{
    font-size: 16px;
    font-weight: 400;
    font-family: Inter;
}
.bottom{
    width: 100%;
}
.circle{
    display: none;
}
.right-side-menu{
    font-family: Inter;
    display: flex;
    flex-direction: column;
    gap: 14px;
}
.menu-wrapper{
    padding: 18px 18px 18px 36px;
    background-color: #1A1A1A;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}
@media (max-width:1400px){
    section{
        width: 100%;
        padding: 0 40px 60px ;
        background-size: 100% ;
        background-repeat: no-repeat;
    }
    .wrapper{
        width: 100%;
        justify-content: start;
        padding: 0 40px;
    }
    .title-text > h3{
        font-size: 30px;
    }
    .title-text > p{
        width: 100%;        
    }
    .image-group{
        display: none;
    }
    span{
        display: none;
    }
    .wrapper > img{
        display: none;
    }
    .small-text-wrap{
        margin-top: 50px;
    }
    hr{
        width: 100%;
    }
    .text-wrapper{
        flex-direction: column;
        padding: 0 40px;
        width: 80%;
    }
    .column{
        display: none; 
    }
    .circle{
        padding: 0 40px;
        display: block;
        margin-left: 0;
        max-width: 100%;
    }
    .left-side{
        width: 100%;
    }
    .left-side > p{
        width: 100%;
    }
    .menu-wrapper{
        margin-bottom: 50px;
    }
}
@media (max-width:1150px){
    .menu-wrapper{
        width: 74%;
    }
    .left-side > p{
        width: 74%;
    }
}
@media (max-width:1200px){
    section{
        background-image: url(../../../public/img/mobile.svg);
    }
}
@media(max-width:870px){
    .menu-wrapper{
        width: 60%;
    }
    .left-side > p{
        width: 60%;
        font-size: 14px;
    }
    .left-side > button{
        left: 20%;
        bottom:90px
    }
    .small-text-wrap{
        display: flex;
        flex-wrap: wrap !important;
        gap: 20px;
        height: 150px;
        width: 50%;
    }
}
@media(max-width:825px){
    section > h1{
        font-size: 40px;
    }
}
@media(max-width:710px){
    .menu-wrapper{
        width: 40%;
        font-size: 14px;
    }
    .left-side > p{
        width: 40%;
        font-size: 14px;
    }
    .left-side > button{
        left: 10%;
        bottom:80px
    }
    .menu-wrapper > li{
        font-size: 14px;
    }
}
@media(max-width:665px){
    .title-text > p{
        font-size: 14px;
    }
    .title-text > h3{
        font-size: 20px;
    }
}
@media(max-width:515px){
    .menu-wrapper{
        width: 30%;
        font-size: 14px;
    }
    .left-side > p{
        width: 30%;
        font-size: 14px;
    }
    .left-side > h3{
        font-size: 18px;
    }
    .left-side > button{
        left: 10%;
        bottom:80px
    }
}
@media(max-width:480px){
    .title-text > p{
        font-size: 12px;
    }
}
@media(max-width:440px){
    .left-side > h3{
        font-size: 16px;
    }
    .small-text-wrap{
        width: 35%;
        margin-bottom: 150px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>