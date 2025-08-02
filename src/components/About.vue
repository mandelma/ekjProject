<template>
  <MDBContainer>
    <h2 class="about-focus" ref="about" tabindex="-1" style="padding: 17px 0 17px 0;">Ajankohtaista</h2>
    <MDBRow>
      <MDBCol>
        <MDBCard text="white" bg="secondary" class="mb-3" style="min-height: 200px; max-width: 100%; padding: 10px;">
          <MDBRow class="g-0">
            <MDBCol md="6">
              <MDBCardImg fluid style="width: 100%" :src="ktv" alt="..."/>

            </MDBCol>
            <MDBCol md="6">
              <MDBCardBody>
                <MDBCardTitle><span style="color: #f8e4c1;">Muista kotitalousvähennys!</span></MDBCardTitle>
                <MDBCardText>
                  Kun ostat palveluja kotiin tai vapaa-ajanasunnolle,
                  voit vähentää osan kuluista verotuksessasi kotitalousvähennyksenä.
                  Saat vähennystä tavanomaisesta kotitalous-, hoiva- ja hoitotyöstä, kunnossapito-
                  ja perusparannustyöstä sekä tietotekniikan asennus- ja neuvontapalveluista.<br>
                </MDBCardText>
                <MDBBtn
                    color="info"
                    @click="getKtvInfo('https://www.veronmaksajat.fi/neuvot/henkiloverotus/asuminen-ja-auto/kotitalousvahennys-ja-palkanmaksu/kotitalousvahennys-ohjeet/kotitalousvahennys/#79b21e93')"
                >Lue lisää kotitalousvähennyksestä</MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCardImg,
  MDBBtn
} from 'mdb-vue-ui-kit';
import ktv from '@/assets/ktv.jpeg';
export default {
  name: "about-page",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCardImg,
    MDBBtn
  },
  data () {
    return {
      ktv
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.about.focus();
    });
  },
  methods: {
    getKtvInfo (url) {
      console.log("Link " + url);
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.about-focus:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>