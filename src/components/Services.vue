<template>
  <MDBContainer>
    <div >
      <h2 class="service-focus" ref="service" tabindex="-1" style="padding-top: 33px; padding-bottom: 23px; color: #f4cf8d;">Palvelut</h2>
      <MDBRow>
        <MDBCol sm="6">
          <div>
            <MDBCard  text="white" bg="secondary" class="mb-3">
              <MDBCardBody>
                <MDBCardTitle class="service-title">Palvelun otsikko</MDBCardTitle>
                <MDBCardText >
                  <div class="service-text">
                    Palvelun kuvaus - yksityiskohdat, tärkkeimmät asiat ja muut tarvittavat tiedot.
                  </div>

                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Palvelun otsikko</MDBCardTitle>
              <MDBCardText class="service-text">
                Palvelun kuvaus - yksityiskohdat, tärkkeimmät asiat ja muut tarvittavat tiedot.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Palvelun otsikko</MDBCardTitle>
              <MDBCardText class="service-text">
                Palvelun kuvaus - yksityiskohdat, tärkkeimmät asiat ja muut tarvittavat tiedot.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Palvelun otsikko</MDBCardTitle>
              <MDBCardText class="service-text">
                Palvelun kuvaus - yksityiskohdat, tärkkeimmät asiat ja muut tarvittavat tiedot.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>


  </MDBContainer>
</template>

<script>
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    //MDBCardHeader,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
} from 'mdb-vue-ui-kit'
export default {
  name: "ekj-services",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    //MDBCardHeader,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.service.focus();
    });
  },
}
</script>

<style>
.service-focus:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.service-title {
  font-size: 24px;
  font-weight: bold;
  color: #406266;
}
.service-text {
  color: white;
}
.service-text :hover{
  transition: font-size 2s;
  font-size: 17px;
}
</style>