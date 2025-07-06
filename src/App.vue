<template>

  <nav class="nav">
    <div id="logo" @click="handleNav">
      <img src="./assets/nav-logo.png" alt="nav logo" style="width: 30px; cursor: pointer;" @click="$router.push('/')"/>
    </div>

    <div class="nav-center-wrapper">
      <ul id="Navigation" :style="{transition: 'all 1s'}" :class="{active: isMenuOpen}" class="nav-center">

        <li><router-link to="/" @click="handleNav">Etusivu</router-link></li>
        <li><router-link to="/services" @click="handleNav">Palvelut</router-link></li>
        <li><router-link to="/reference" @click="handleNav">Referenssit</router-link></li>
        <li><router-link to="/about" @click="handleNav">Ajankohtaista</router-link></li>
        <li><router-link to="/contact" @click="handleNav">Ota yhteyttä</router-link></li>
      </ul>

    </div>
    <div class="menu-btn" :class="{active: isMenuOpen}" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>

  <div class="page">
    <router-view />
  </div>

  <MDBFooter
      bg="none"
      :text="['center', 'white']"
      style="background-color: #545e69;"
  >

    <!-- Grid container -->
    <div >
      <MDBContainer class="p-4 pb-0">
        <!-- Section: CTA -->
        <section >
          <MDBRow>
            <MDBCol class="phoneFooter" md="6">
              <h6 style="color: orange;" class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>EKJ rakennus OY
              </h6>
              <p>
                y tunnus:  235234-5
              </p>
            </MDBCol>
            <MDBCol md="6">
              <div >
                <h6 style="color: orange; cursor: pointer;" class="text-uppercase fw-bold mb-4" @click="$router.push('/contact')">Yhteystiedot</h6>
                <p class="phoneFooter">
                  <i class="fas fa-home me-3"></i> Vantaa, Veturikuja 3
                </p>
                <p class="phoneFooter">
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <MDBIcon icon="phone" class="me-3" /> + 358 234 567 88
                </p>
                <!--              <p>-->
                <!--                <MDBIcon icon="print" class="me-3" /> + 01 234 567 89-->
                <!--              </p>-->
              </div>

            </MDBCol>
          </MDBRow>
        </section>

      </MDBContainer>
    </div>

    <!-- Copyright -->
    <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2025 Copyright
    </div>
    <!-- Copyright -->
  </MDBFooter>

</template>

<script>
/* eslint-disable */
import {ref} from 'vue';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-vue-ui-kit';
export default {
  name: 'App',
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
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
      // 3f6161
    },
    handleNavLogo () {
      console.log("Nav logo handled");
      this.$nextTick(() => {
        this.isMenuOpen = false; // close menu after clicking a nav item
        this.$refs.homepage?.focus(); // use optional chaining to avoid errors
      });
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
* {
  box-sizing: border-box;
}

/*html, body {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  overflow: hidden;*/
/*  height: 100%;*/
/*}*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #637081;
  color: #dddddd;
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
  padding: 20px;

}

.nav {
  position: fixed;     /* Stick it to the top */
  top: 0;              /* Align to top */
  left: 0;
  width: 100%;         /* Full width */
  height: 60px;        /* Or whatever your nav height is */
  background-color: #566373; /* Set background to avoid transparency over content */
  z-index: 9999;       /* Very high z-index to stay on top of all elements */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Optional: subtle shadow */
}

.page {
  padding-top: 60px;
  padding-bottom: 120px;
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
  padding: 13px;
  font-weight: 600;
  color: #dddddd;
  text-decoration: none;
  font-size: 18px;
}

li a:hover {
  /*background-color: #4b5561;*/
  color: #e7c581;
}


/* ~ Media query skaalausta ~ */
@media all and (max-width: 768px) {
  #Navigation {
    position: fixed;
    display: block;
    top: 60px;
    left: 0;
    width: 80%;
    height: 63%;
    background-color: #4d5661;
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
    background-color: #3a4047;
    padding: 13px;
    color: #f7ca73;
  }
  /*.smaller-nav {*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*}*/
  .menu-btn {
    display: block;
    cursor: pointer;
  }
  #Navigation.active {
    transform: translateX(0);
  }
  .page {
    padding-top: 60px;

  }
  .phoneFooter {
    display: none;
  }


}
.no-transition * {
  transition: none !important; /* override transition when resizing */
}





</style>