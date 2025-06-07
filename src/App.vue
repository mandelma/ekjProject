<template>
  <div class="smaller-nav">


    <nav  class="navbar">
      <div id="logo" class="nav-left">
        <img src="./assets/nav-logo.png" alt="nav logo" style="width: 30px;"/>
      </div>

      <div class="nav-center-wrapper">
        <ul id="Navigation" :style="{transition: 'all 1s'}" :class="{active: isMenuOpen}" class="nav-center">

          <li><router-link to="/" @click="handleNav">HOME</router-link></li>
          <li><router-link to="/services" @click="handleNav">PALVELUT</router-link></li>
          <li><router-link to="/contact" @click="handleNav">Ota yhteyttä</router-link></li>
        </ul>
      </div>

      <div class="menu-btn" :class="{active: isMenuOpen}" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  </div>

  isMenuOpen {{isMenuOpen}}
  <router-view />
</template>

<script>

import {ref} from 'vue'

export default {
  name: 'App',
  components: {

  },
  setup () {
    const navCollapse = ref(false)
    const isMenuOpen = ref(false)
    return {
      navCollapse,
      isMenuOpen,
    }
  },
  mounted () {
    let resizeTimer;

    window.addEventListener('resize', () => {
      document.body.classList.add('no-transition');

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('no-transition');
      }, 300); // Adjust time as needed
    });
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;

    },
    handleNav () {
      console.log("Nav handled");
      // https://coolors.co/cee5f2-accbe1-7c98b3-637081-536b78
      this.isMenuOpen = false; // close menu after clicking a nav item
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #637081;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.menu-btn {
  display:none;
  width: 30px;
  height: 30px;
  position: relative;
  margin: 12px 12px 12px 12px;
  overflow: hidden;
}

.menu-btn {
  display: none; /* Will be shown in media query */
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
}

.menu-btn span {
  width: 30px;
  height: 2.5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dddddd;
  transition: all 0.5s;
}

.menu-btn span:nth-of-type(2){
  top: calc(50% - 7px);
}
.menu-btn span:nth-of-type(3){
  top: calc(50% + 7px);
}

/* onClick menuBtn */
.menu-btn.active span:first-of-type {
  transform: translateX(100%);
}
.menu-btn.active span:nth-of-type(2) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
.menu-btn.active span:nth-of-type(3) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* Full screen menu */
#Navigation {
  /*display: flex;*/
  /*background-color: #536B78;*/
  /*padding: 12px;*/
  /*justify-content: center;*/
  /*border: 1px solid #e600ff;*/
  /*list-style: none;*/
  /*z-index: 2;*/
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  /*padding: 0 1rem;*/
  box-sizing: border-box;
}

.nav-left {
  font-weight: bold;
  color: white;
}

.nav-center {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  flex: none;
}
.nav-center-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
}

#logo {
  padding: 13px;
}

li a {
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 600;
  color: #111211;
  text-decoration: none;
  font-size: 18px;
}

li a:hover {
  color: #5097A1;
}


/* ~ Media query skaalausta ~ */
@media all and (max-width: 768px) {
  #Navigation {
    position: fixed;
    display: block;
    border: 1px solid red;
    top: 67px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a7b5a7;
    transform: translateX(-100%);
    transition: width 1s;
    z-index: 2;
    opacity: 0.9;
  }

  #logo {
    padding: 13px;
  }

  #Navigation li a {
    font-size: 22px;
    margin-top: 35px;
    line-height: 3.4em;
    padding-top: 20px;
  }
  #Navigation li a:hover {
    color: white;
  }
  .smaller-nav {
    display: flex;
    flex-direction: column;
  }
  .menu-btn {
    display: block;
    cursor: pointer;
  }
  #Navigation.active {
    transform: translateX(0);
  }

}
.no-transition * {
  transition: none !important; /* override transition when resizing */
}





</style>
