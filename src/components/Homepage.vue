<template>
  <MDBContainer>
    <div ref="homepage" style="border-bottom: 1px solid orange;">
      <img src="../assets/ekj-version-1.png" style="width: 50%; max-width: 400px; margin: auto;" alt="ekj" />
    </div>


    <div style="width: 70%; padding-top: 57px;  margin: auto;">
      <p style="font-size: 17px;">
        Huoneisto- ja julkisivusaneerausten, kylpyhuoneremonttien sekä lattia-
        ja maalaustöiden asiantuntijamme. Hoidamme kaikki rakennusalan työt niin omakoti- kuin kerrostaloissa
        sekä julkisissa kiinteistöissä.
      </p>
    </div>
  </MDBContainer>
</template>

<script>
import { MDBContainer } from "mdb-vue-ui-kit";

export default {
  name: "home-page",
  components: {
    MDBContainer
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.homepage.focus();
    });
  },
}
</script>

<style scoped>

</style>