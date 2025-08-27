<template>
    <section class="post-title-section">
        <Container class="title-container">
            <div class="post-title">
                <div class="post-title-text">
                    <div>{{ $t("postTitle.title") }}</div>
                    <p>{{ $t("postTitle.subtitle") }}</p>
                </div>
                <div class="post-title-link">
                    <button>
                        <p>{{ $t("postTitle.whitepapers") }}</p>
                    </button>
                    <button>
                        <p>{{ $t("postTitle.ebooks") }}</p>
                    </button>
                    <button>
                        <p>{{ $t("postTitle.reports") }}</p>
                    </button>
                </div>
            </div>
        </Container>
    </section>
</template>


<style scoped>
.post-title-section{
    padding: 120px 0;
    background-color: #1A1A1A;
    border: 1px solid #262626;
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
.post-title-link{
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: #141414;
    border-radius: 10px;
    border: 1px solid #262626;
}
.post-title-link > button {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #141414;
    border: 1px solid #262626;
    padding: 10px 24px;
    border-radius: 12px;
    cursor: pointer;
    width: 100%; 
}

.post-title-link > button:hover {
    background-color: #262626;
}

.post-title-link > button > p {
    font-family: Inter;
    color: #98989A;
    margin-top: 10px;
}

.post-title-link > button:hover > p {
    color: #ffffff;
}


@media(max-width:1400px){
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
@media(max-width:895px){
        .post-link > button{
        display: none;
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
}
@media(max-width:550px){
    .post-title-link{
        flex-direction: column;
    }
    .post-title-link > button > p{
        margin: 0 auto;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>