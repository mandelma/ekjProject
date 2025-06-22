<template>
  <MDBContainer>
    <img src="../assets/ekj_dark_theme.png" style="width: 50%; max-width: 400px; margin: auto;" alt="ekj" />
    <div style="width: 70%; margin: auto;">
      <p style="font-size: 17px;">
        EKJ Rakennuspalvelut on huoneisto- ja julkisivusaneerausten, kylpyhuoneremonttien sekä lattia-
        ja maalaustöiden asiantuntija. Hoidamme kaikki rakennusalan työt niin omakoti- kuin kerrostaloissa
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
  }
}
</script>

<style scoped>

</style>