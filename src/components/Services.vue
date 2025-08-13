<template>
  <MDBContainer>
    <div >
      <h2 class="service-focus" ref="service" tabindex="-1" style="padding-top: 33px; padding-bottom: 23px; color: #f4cf8d;">Palvelut</h2>
      <MDBRow>
        <MDBCol sm="6">
          <div>
            <MDBCard  text="white" bg="secondary" class="mb-3">
              <MDBCardBody>
                <MDBCardTitle class="service-title">Laatoitus</MDBCardTitle>
                <MDBCardText >
                  <div class="service-text">
                    Kylpyhuoneiden, keittiön välitilojen sekä lattioiden laadoitus, saumaus ja silikonien asennus. Lattiakaatojen valu.
                    pintojen valmistelu ja vesieristys.
                  </div>

                </MDBCardText>
                <MDBCardText>
                  <small
                      style="display: flex; justify-content: right; color: #f4cf8d; cursor: pointer;"
                      @click="$router.push('/contact')"
                  >
                    Ota yhteyttä
                  </small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Maalaus</MDBCardTitle>
              <MDBCardText class="service-text">
                sisä- ja ulkojulkisivujen maalaus sekä tasoitustyöt.
              </MDBCardText>
              <small
                  style="display: flex; justify-content: right; color: #f4cf8d; cursor: pointer;"
                  @click="$router.push('/contact')"
              >
                Ota yhteyttä
              </small>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Kipsiasennus</MDBCardTitle>
              <MDBCardText class="service-text">
                Sisätilojen seinien, koteloiden sekä katojen rakennus ja tasoitustyöt.
              </MDBCardText>
              <small
                  style="display: flex; justify-content: right; color: #f4cf8d; cursor: pointer;"
                  @click="$router.push('/contact')"
              >
                Ota yhteyttä
              </small>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Kattojen teko ja korjaus</MDBCardTitle>
              <MDBCardText class="service-text" style="text-align: left;">
                <ul>
                  <li>Tervakatot</li>
                  <li>Peltikatot</li>
                  <li>Kivikatot</li>
                  <li>Sadevesijärjestelmien asennus</li>
                </ul>
              </MDBCardText>
              <small
                  style="display: flex; justify-content: right; color: #f4cf8d; cursor: pointer;"
                  @click="$router.push('/contact')"
              >
                Ota yhteyttä
              </small>
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
  /*transition: font-size 2s;*/
  /*font-size: 17px;*/
}
</style>