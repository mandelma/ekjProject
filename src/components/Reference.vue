<template>
  <MDBContainer>
    <div style="margin-top: 33px;">

      <h2 ref="reference" tabindex="-1" style="padding-bottom: 23px;">Referenssit</h2>

      <MDBRow>
        <MDBCol md="6">
          <MDBCard text="white" bg="secondary" class="mb-3" style="min-height: 200px; max-width: 540px; padding: 10px;">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <MDBCardImg fluid :src="image1" alt="..."/>

              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Remontit</MDBCardTitle>
                  <MDBCardText>
                    Työntekiät hommissa!
                  </MDBCardText>
<!--                  <MDBCardText>-->
<!--                    <small class="text-muted">Last updated 3 mins ago</small>-->
<!--                  </MDBCardText>-->
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard text="white" bg="secondary" class="mb-3" style="text-align: left; padding: 10px; min-height: 200px; max-width: 540px">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <MDBCardImg fluid :src="image2" alt="..."/>
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Muut kohteet</MDBCardTitle>
                  <MDBCardText>
                    <ul>
                      <li>
                        Oopperatalon 48 täys WC-remonttia
                      </li>
                      <li>
                        Tuusulan Riihikallion koulun 8000m² väliseinärakentaminen
                      </li>
                      <li>
                        Vantaalla taloyhtiölle 15 kylpyhuoneremonttia
                      </li>
                      <li>
                        Novar ja Kankari kalusteasennuksia 500-600 vuodessa
                      </li>
                      <li>
                        Suoratoistopalveluyrityksen toimitilarakentaminen
                      </li>
                    </ul>

                  </MDBCardText>
<!--                  <MDBCardText>-->
<!--                    <small class="text-muted">Last updated 3 mins ago</small>-->
<!--                  </MDBCardText>-->
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
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
    MDBCardImg,
    //MDBCardHeader,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
} from 'mdb-vue-ui-kit';
import image1 from '@/assets/rakentaja.jpg';
import image2 from '@/assets/remontti-helsinki-019.jpg'
export default {
  name: "refe-rence",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImg,
    //MDBCardHeader,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
  },
  data () {
    return {
      image1,
      image2
    }
  }
}
</script>

<style scoped>

</style>