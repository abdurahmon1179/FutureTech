<template>
  <Container class="nav">
    <div class="nav-bar-top">
      <p>{{ $t('navbar.subscribe') }}</p>
      <img src="../../../public/img/topstrelka.svg" alt="" />
    </div>
  </Container>

  <div class="nav-bar">
    <Container class="nav">
      <div class="nav-bar-wrapper">
        <a href="/">
          <img src="../../../public/img/logo.svg" alt="logo" />
        </a>
        <ul>
          <li>
            <router-link to="/" class="link" active-class="active">{{ $t('navbar.home') }}</router-link>
          </li>
          <li>
            <router-link to="/second" class="link" active-class="active">{{ $t('navbar.news') }}</router-link>
          </li>
          <li>
            <router-link to="/podcast" class="link" active-class="active">{{ $t('navbar.podcasts') }}</router-link>
          </li>
          <li>
            <router-link to="/fourth" class="link" active-class="active">{{ $t('navbar.resources') }}</router-link>
          </li>
        </ul>

        <div>
          <a-dropdown class="language">
            <a class="ant-dropdown-link" @click.prevent>
              {{ currentLang }}
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="uz" @click="changeLang('uz')">UZ</a-menu-item>
                <a-menu-item key="ru" @click="changeLang('ru')">RU</a-menu-item>
                <a-menu-item key="en" @click="changeLang('en')">EN</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>

          <router-link to="/login" class="login login-page">{{ $t('navbar.contact') }}</router-link>
        </div>

        <img class="burger-menu" src="../../../public/img/burger.svg" alt="menu" @click="toggleMenu" />
      </div>
    </Container>
  </div>

  <transition name="slide">
    <div class="mobile-nav" v-if="menuOpen">
      <div class="mobile-nav-inner">
        <a-dropdown
  class="language mb-lang"
  trigger="click"
  :getPopupContainer="triggerNode => triggerNode.parentNode"
>
  <a class="ant-dropdown-link" @click.prevent>
    {{ currentLang }}
    <DownOutlined />
  </a>
  <template #overlay>
    <a-menu>
      <a-menu-item key="uz" @click="changeLang('uz')">UZ</a-menu-item>
      <a-menu-item key="ru" @click="changeLang('ru')">RU</a-menu-item>
      <a-menu-item key="en" @click="changeLang('en')">EN</a-menu-item>
    </a-menu>
  </template>
</a-dropdown>

        <router-link to="/" class="m-link" @click="closeMenu">{{ $t('navbar.home') }}</router-link>
        <router-link to="/second" class="m-link" @click="closeMenu">{{ $t('navbar.news') }}</router-link>
        <router-link to="/podcast" class="m-link" @click="closeMenu">{{ $t('navbar.podcasts') }}</router-link>
        <router-link to="/fourth" class="m-link" @click="closeMenu">{{ $t('navbar.resources') }}</router-link>
        <router-link to="/login" class="m-login" @click="closeMenu">{{ $t('navbar.contact') }}</router-link>
      </div>
    </div>
  </transition>
</template>


<style scoped>
.link {
  text-decoration: none;
  color: #98989A;
  padding: 14px 24px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: 0.3s;
}

.nav-bar-top {
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 10px;
  padding: 10px;
}

.nav-bar-top>p {
  font-size: 18px;
  font-weight: 400;
  font-family: inter;
  color: #98989A;
  padding-top: 10px;
}

.nav-bar {
  height: 103px;
  padding: 26.5px;
  background-color: #1A1A1A;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
}

.nav-bar-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-bar-wrapper>a>img {
  width: 137px;
  height: 55px;
}

.nav-bar-wrapper>ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;
  font-family: Inter;
}

.nav-bar-wrapper>ul>li {
  cursor: pointer;
  color: #98989A;
  transition: 0.4s;
}

.nav-bar-wrapper>ul>li:hover {
  color: white;
}

.active {
  background-color: #141414;
  padding: 14px 24px;
  border-radius: 10px;
  border: 1px solid #333333;
  color: white !important;
}

.login-page {
  padding: 14px 24px;
  background-color: #FFD11A;
  color: #141414;
  border-radius: 10px;
  border: none;
  font-family: Inter;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
}

.login-page:hover {
  border: 1px solid #FFD11A;
  background-color: transparent;
  color: white;
}

.burger-menu {
  display: none;
  cursor: pointer;
  width: 28px;
  height: 28px;
}

.login {
  color: black;
  text-decoration: none;
}


.mobile-nav {
  position: fixed;
  top: 165px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #1A1A1A;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-nav-inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.m-link {
  text-decoration: none;
  font-family: Inter;
  font-size: 20px;
  color: #E6E6E6;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #333333;
  background-color: #141414;
  text-align: center;
}

.m-login {
  text-decoration: none;
  text-align: center;
  padding: 14px 24px;
  background-color: #FFD11A;
  color: #141414;
  border-radius: 10px;
  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.language {
  cursor: pointer;
  margin-right: 20px;
}



@media(max-width:1000px) {
  .nav-bar-wrapper>ul {
    display: none;
  }

  .login-page {
    display: none;
  }

  .burger-menu {
    display: block;
  }

  .language {
    display: none;
  }

  .mb-lang {
    display: block !important;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    margin-top: -150px;
  }
}

@media (max-width:1440px) {
  .nav-bar-top {
    max-width: 100%;
  }

  .nav-bar-wrapper>ul {
    margin-top: 20px;
  }

  .nav {
    width: 100%;
  }
}
</style>

<script setup>
import { ref, watch } from 'vue'
import Container from "../layout/index.vue"
import { DownOutlined, UserOutlined } from '@ant-design/icons-vue'
import { useI18n } from 'vue-i18n'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
const closeMenu = () => {
  menuOpen.value = false
}

watch(menuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const { locale } = useI18n()
const currentLang = ref('EN')

function changeLang(lang) {
  locale.value = lang.toLowerCase()
  currentLang.value = lang.toUpperCase()
}
</script>
