<template>
    <Container class="container">
        <footer>
            <div class="footer-menu-wrapper">
                <div class="footer-row">
                    <div class="footer-menu">
                        <ul>
                            <h3>Home</h3>
                            <li>Features</li>
                            <li>Blogs</li>
                            <div>
                                <li>Resources</li>
                                <span>New</span>
                            </div>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <ul>
                            <h3>News</h3>
                            <li>Trending Stories</li>
                            <li>Featured Videos</li>
                            <li>Technology</li>
                            <li>Health</li>
                            <li>Politics</li>
                            <li>Environment</li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <ul>
                            <h3>Blogs</h3>
                            <li>Quantum Computing</li>
                            <li>AI Ethics</li>
                            <li>Space Exploration</li>
                            <div>
                                <li>Biotechnology</li>
                                <span>News</span>
                            </div>
                            <li>Renewable Energy</li>
                            <li>Biohacking</li>
                        </ul>
                    </div>

                    <div class="footer-menu">
                        <ul>
                            <h3>Podcasts</h3>
                            <li>AI Revolution</li>
                            <div>
                                <li>AI Revolution</li>
                                <span>News</span>
                            </div>
                            <li>TechTalk AI</li>
                            <li>AI Conversations</li>
                        </ul>
                    </div>
                </div>

                <div class="footer-menu-link second-row">
                    <h3>Resources</h3>
                    <div class="menu-wrapper-row">
                        <span>
                            Whitepapers
                            <img src="../../../public/img/footerarrow.svg" alt="">
                        </span>
                        <span>
                            Ebooks
                            <img src="../../../public/img/footerarrow.svg" alt="">
                        </span>
                        <span>
                            Reports
                            <img src="../../../public/img/footerarrow.svg" alt="">
                        </span>
                        <span>
                            Research Papers
                            <img src="../../../public/img/footerarrow.svg" alt="">
                        </span>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-text">
                    <p>Terms & Conditions</p>
                    <img src="../../../public/img/footerrow.svg" alt="">
                    <p>Privacy Policy</p>
                </div>
                <div class="footer-bottom-apps">
                    <img src="../../../public/img/twitter.svg" alt="">
                    <img src="../../../public/img/meida.svg" alt="">
                    <img src="../../../public/img/linkedin.svg" alt="">
                </div>
                <p>© 2024 FutureTech. All rights reserved.</p>
            </div>

            <div class="off">
                <div class="footer-bottom-apps">
                    <img src="../../../public/img/twitter.svg" alt="">
                    <img src="../../../public/img/meida.svg" alt="">
                    <img src="../../../public/img/linkedin.svg" alt="">
                </div>

                <div class="footer-bottom-text">
                    <p>Terms & Conditions</p>
                    <img src="../../../public/img/footerrow.svg" alt="">
                    <p>Privacy Policy</p>
                </div>
                
                <p>© 2024 FutureTech. All rights reserved.</p>
            </div>
        </footer>
    </Container>
</template>

<style scoped>
footer {
    margin: 80px 0px 40px 0;
}

.footer-menu>ul {
    list-style: none;
    font-family: Inter;
}

.footer-menu>ul>h3 {
    margin-bottom: 36px;
    font-size: 20px;
    font-weight: 500;
}

.footer-menu>ul>li {
    margin-bottom: 18px;
    color: #666666;
    font-size: 18px;
}

.footer-menu>ul>div {
    display: flex;
    margin-bottom: 18px;
    color: #666666;
    gap: 8px;
    align-items: center;
}
.footer-menu>ul>div>span {
    padding: 4px 12px;
    color: white;
    border-radius: 6px;
    border: 1px solid transparent;
    background-image:
        linear-gradient(#1A1A1A, #1A1A1A),
        linear-gradient(to right, #262626, #FFD119);
    background-origin: border-box;
    background-clip: padding-box, border-box;
}

.footer-menu-link>h3 {
    font-family: Inter;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
}

.footer-menu-link {
    display: inline-flex;
    flex-direction: column;
    gap: 18px;
}

.menu-wrapper-row>span {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: 10px 16px;
    background-color: #141414;
    border: 1px solid #262626;
    border-radius: 8px;
    gap: 10px;
    font-family: Inter;
    font-size: 18px;
    color: #98989A;
}

.footer-menu-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;
    border-bottom: 1px solid #262626;
}

.footer-bottom-text {
    display: flex;
    align-items: center;
    gap: 11px;
}

.footer-bottom-text>p {
    font-family: Inter;
    color: #666666;

    font-size: 18px;
}

.footer-bottom {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-bottom-apps {
    display: flex;
    align-items: center;
    gap: 20px;
}

.footer-bottom>p {
    color: #666666;
    font-size: 18px;
    font-family: Inter;
}

.footer-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 120px;
}
.menu-wrapper-row{
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.off{
    display: none;
}
li:hover{
    color: white !important;
    cursor: pointer;
}
.menu-wrapper-row > span:hover{
    cursor: pointer;
}
@media (max-width:1400px) {
    .container {
        width: 100%;
        padding: 0 40px;
    }
}

@media (max-width:1100px) {
    .footer-menu-wrapper {
        flex-direction: column;
    }

    .second-row {
        margin-top: 50px;
    }
    .menu-wrapper-row{
        flex-direction: row;
        flex-wrap: wrap;
    }
    .footer-row{
        flex-wrap: wrap;
        gap: 20px;
    }   
}
@media (max-width:876px){
    .footer-bottom{
        display: none;
    }
    .off{
        margin-top: 30px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .footer-bottom-apps{
        margin-bottom: 20px;
    }
    .footer-bottom-text{
        margin-bottom: 20px;
    }
}
</style>

<script setup>
import Container from "../layout/index.vue"
</script>