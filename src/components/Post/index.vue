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
    <hr>
    <Container>
        <div class="post-coment">
            <div class="post-person">
                <img src="../../../public/img/person.svg" alt="">
                <div class="person-name">
                    <h3>John Techson</h3>
                    <p>Quantum Computing</p>
                </div>
            </div>
            <div class="post-coment-body">
                <div class="post-text">
                    <h3>October 15, 2023</h3>
                    <h2>The Quantum Leap in Computing</h2>
                    <p>Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                    <div class="post-img">
                        <img src="../../../public/img/postimg.svg" alt="">
                        <img src="../../../public/img/postimg2.svg" alt="">
                        <img src="../../../public/img/postimg3.svg" alt="">
                    </div>
                </div>
                <div class="post-link">
                    <button>
                        <p>View Blog</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </Container>
    <hr>
     <Container>
        <div class="post-coment">
            <div class="post-person">
                <img src="../../../public/img/person2.svg" alt="">
                <div class="person-name">
                    <h3>Sarah Ethicist</h3>
                    <p>AI Ethics</p>
                </div>
            </div>
            <div class="post-coment-body">
                <div class="post-text">
                    <h3>November 5, 2023</h3>
                    <h2>The Ethical Dilemmas of AI</h2>
                    <p>A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.</p>
                    <div class="post-img">
                        <img src="../../../public/img/post4.svg" alt="">
                        <img src="../../../public/img/postimg2.svg" alt="">
                        <img src="../../../public/img/postimg3.svg" alt="">
                    </div>
                </div>
                <div class="post-link">
                    <button>
                        <p>View Blog</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </Container>
    <hr>
     <Container>
        <div class="post-coment">
            <div class="post-person">
                <img src="../../../public/img/person3.svg" alt="">
                <div class="person-name">
                    <h3>Astronomer X</h3>
                    <p>Space Exploration</p>
                </div>
            </div>
            <div class="post-coment-body">
                <div class="post-text">
                    <h3>December 10, 2023</h3>
                    <h2>The Mars Colonization Challenge</h2>
                    <p>Exploring the technical and logistical challenges of human colonization on Mars.</p>
                    <div class="post-img">
                        <img src="../../../public/img/post4.svg" alt="">
                        <img src="../../../public/img/postimg2.svg" alt="">
                        <img src="../../../public/img/postimg3.svg" alt="">
                    </div>
                </div>
                <div class="post-link">
                    <button>
                        <p>View Blog</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
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
hr{
    margin-bottom: 80px;
    background-color: #262626;
    height: 2px;
    border: none;   
}
.post-person{
    display: flex;
    align-items: center;
    font-family: Inter;
    gap: 16px;
    width: 384px;
}
.person-name > h3{
    font-size: 20px;
    font-weight: 600;
}
.person-name > p{
    color: #98989A;
    font-size: 18px;
    margin-top: 2px;
}
.post-text > h3{
    color: #98989A;
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
}
.post-text > h2{
    font-family: Inter;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
}
.post-text > p{
    color: #98989A;
    font-family: Inter;
    font-size: 18px;
    margin-bottom: 30px;
}
.post-img{
    display: flex;
    align-items: center;
    gap: 10px;
}
.post-link > button{
    display: flex;
    align-items: center;
    padding: 18px 24px;
    gap: 10px;
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 12px;
    color: #98989A;
    font-family: Inter;
    cursor: pointer;
}
.post-coment{
    display: flex;
    align-items: start;
    gap: 50px;
}
.post-coment-body{  
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;
    width: 100%;
}
</style>

<script setup>
import Container from "../../components/layout/index.vue"
</script>