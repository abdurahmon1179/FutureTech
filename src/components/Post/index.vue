<template>
    <section class="post-title-section">
        <Container class="title-container">
            <div class="post-title">
                <div class="post-title-text">
                    <div>{{ $t('post.subtitle') }}</div>
                    <p>{{ $t('post.title') }}</p>
                </div>
                <div class="post-title-link">
                    <button>
                        <router-link to="/third" class="link text-btn" active-class="active">
                            {{ $t('post.viewAll') }}
                        </router-link>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </Container>
    </section>

    <Container class="body-container">
        <div class="post-menu">
            <div class="post-card active"><p>{{ $t('post.categories.all') }}</p></div>
            <div class="post-card"><p>{{ $t('post.categories.quantum') }}</p></div>
            <div class="post-card"><p>{{ $t('post.categories.ethics') }}</p></div>
            <div class="post-card"><p>{{ $t('post.categories.space') }}</p></div>
            <div class="post-card"><p>{{ $t('post.categories.bio') }}</p></div>
            <div class="post-card"><p>{{ $t('post.categories.energy') }}</p></div>
        </div>
    </Container>

    <hr>

    <!-- Post 1 -->
    <Container class="user-container">
        <div class="post-coment">
            <div class="post-person">
                <div class="person-info">
                    <img src="../../../public/img/person.svg" alt="">
                    <div class="person-name">
                        <h3>{{ $t('post.posts.0.author') }}</h3>
                        <p>{{ $t('post.posts.0.category') }}</p>
                    </div>
                </div>
                <div>
                    <button class="active-btn">
                        <p>{{ $t('post.viewBlog') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="post-coment-body">
                <div class="post-text">
                    <h3>{{ $t('post.posts.0.date') }}</h3>
                    <h2>{{ $t('post.posts.0.title') }}</h2>
                    <p>{{ $t('post.posts.0.desc') }}</p>
                    <div class="post-img">
                        <img src="../../../public/img/postimg.svg" alt="">
                        <img src="../../../public/img/postimg2.svg" alt="">
                        <img src="../../../public/img/postimg3.svg" alt="">
                    </div>
                </div>
                <div class="post-link">
                    <button>
                        <p>{{ $t('post.viewBlog') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </Container>

    <hr>

    <!-- Post 2 -->
    <Container class="user-container">
        <div class="post-coment">
            <div class="post-person">
                <div class="person-info">
                    <img src="../../../public/img/person2.svg" alt="">
                    <div class="person-name">
                        <h3>{{ $t('post.posts.1.author') }}</h3>
                        <p>{{ $t('post.posts.1.category') }}</p>
                    </div>
                </div>
                <div>
                    <button class="active-btn">
                        <p>{{ $t('post.viewBlog') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="post-coment-body">
                <div class="post-text">
                    <h3>{{ $t('post.posts.1.date') }}</h3>
                    <h2>{{ $t('post.posts.1.title') }}</h2>
                    <p>{{ $t('post.posts.1.desc') }}</p>
                    <div class="post-img">
                        <img src="../../../public/img/post4.svg" alt="">
                        <img src="../../../public/img/postimg2.svg" alt="">
                        <img src="../../../public/img/postimg3.svg" alt="">
                    </div>
                </div>
                <div class="post-link">
                    <button>
                        <p>{{ $t('post.viewBlog') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </Container>

    <hr>

    <!-- Post 3 -->
    <Container class="user-container">
        <div class="post-coment">
            <div class="post-person">
                <div class="person-info">
                    <img src="../../../public/img/person3.svg" alt="">
                    <div class="person-name">
                        <h3>{{ $t('post.posts.2.author') }}</h3>
                        <p>{{ $t('post.posts.2.category') }}</p>
                    </div>
                </div>
                <div>
                    <button class="active-btn">
                        <p>{{ $t('post.viewBlog') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="post-coment-body">
                <div class="post-text">
                    <h3>{{ $t('post.posts.2.date') }}</h3>
                    <h2>{{ $t('post.posts.2.title') }}</h2>
                    <p>{{ $t('post.posts.2.desc') }}</p>
                    <div class="post-img">
                        <img src="../../../public/img/post4.svg" alt="">
                        <img src="../../../public/img/postimg2.svg" alt="">
                        <img src="../../../public/img/postimg3.svg" alt="">
                    </div>
                </div>
                <div class="post-link">
                    <button>
                        <p>{{ $t('post.viewBlog') }}</p>
                        <img src="../../../public/img/topstrelka.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </Container>
</template>


<style scoped>
.active-btn{
    display: none;
}
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
    padding: 10px 24px;
    border-radius: 12px;
    cursor: pointer;
}
.post-title-link > button > p{
    margin-top: 10px;
    color: red;
}
.text-btn{
    text-decoration: none;
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
.person-info{
    display: flex;
    align-items: center;
    gap: 16px;
    
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
    justify-content: center;
    padding: 10px 24px;
    gap: 10px;
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 12px;
    color: #98989A;
    font-family: Inter;
    cursor: pointer;
}
.post-link > button > p{
    margin-top: 12px;
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
@media (max-width:1400px){
    .post-title-section{
        padding: 100px 40px;
    }
    .title-container{
        width: 100%;
    }
    .post-title-text > p{
        font-size: 45px;
    }
    .post-title{
        gap: 20px;
    }
    .post-menu{
        padding: 0 40px;
    }
    .body-container{
        width: 100%;
    }
    .post-card{
        padding: 0 20px;
        line-height: 120%;
    }
    .user-container{
        width: 100%;
    }
    .post-coment{
        padding: 0 40px;
    }
    .post-text > h3{
        font-size: 18px;
    }
    .person-name > p{
        font-size: 16px;
    }
    .post-text > p{
        font-size: 17px;
        width: 550px;
    }
}
@media (max-width:1170px){
    .post-card > p{
        font-size: 14px;
    }
}
@media (max-width:1120px){
    .post-text > p{
        width: 450px;
    }
}
@media (max-width:998px){
    .post-text > p{
        font-size: 15px;
        width: 400px;
    }
    .post-text > h2{
        font-size: 22px;
    }
    .post-text > h3{
        margin-bottom: 10px;
    }
}
@media (max-width:945px){
    .post-title-link > button{
        justify-content: space-between;
    }
    .post-title-link > button > p{
        font-size: 14px;
        width: 100px;
    }
}
@media (max-width:895px){
    .post-coment{
        flex-direction: column;
    }
    .post-link > button{
        display: none;
    }
    .person-info{
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .active-btn{
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
    .post-person{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .post-text > p{
        font-size: 18px;
        width: 100%;
    }
}
@media (max-width:800px){
    .post-card > p{
        font-size: 12px;
    }
}
@media (max-width:740px){
    .post-title{
        flex-direction: column;
        gap: 30px;
    }
    .post-title-link{
        width: 100%;
    }
    .post-title-link > button{
        width: 100%;
    }
    .post-title-section{
        padding: 40px 20px;
    }
    .body-container {
    width: 100%;
    overflow-x: auto;   
    white-space: nowrap; 
    scrollbar-width: none; 
}
.body-container::-webkit-scrollbar {
    display: none; 
}

.post-menu {
    display: inline-flex; 
    gap: 16px; 
}

.post-card {
    width: 200px; 
    flex-shrink: 0; 
    border-radius: 8px;
    padding: 10px 16px;
    text-align: center;
    cursor: pointer;
}
}
@media (max-width:540px){
    .post-title-text > p{
        font-size: 30px;
    }
    .post-title-text > div{
        font-size: 16px;
    }
}
@media (max-width:515px){
    .person-name > h3{
        font-size: 16px;
    }
    .person-name > p{
        font-size: 14px;
    }
    .active-btn{
        padding: 15px;
        font-size: 14px;
    }
}
@media (max-width:780px){
    .person-name > h3{
        font-size: 14px;
    }
    .person-name > p{
        font-size: 12px;
    }
    .active-btn{
        padding: 12px;
        font-size: 12px;
    }
}
</style>

<script setup>
import Container from "../../components/layout/index.vue"
</script>