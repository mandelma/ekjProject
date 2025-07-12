<template>
  <MDBContainer>
    <div style="margin-top: 33px;" v-if="!fullImage">

      <h2 ref="reference" tabindex="-1" style="padding-bottom: 23px;">Referenssit</h2>

      <MDBRow>
        <MDBCol md="6">
          <MDBCard text="white" bg="secondary" class="mb-3" style="text-align: left; min-height: 200px;  padding: 10px;">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <div class="imageFocus">
                  <MDBCardImg  fluid :src="ref_1" alt="..." @click="setZoomedImg(ref_1)"/>
                </div>

              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Remontti</MDBCardTitle>
                  <MDBCardText>
                    Kylpparin laatoitus!
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
          <MDBCard text="white" bg="secondary" class="mb-3" style="text-align: left; padding: 10px; min-height: 330px; max-width: 540px">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <div class="imageFocus">
                  <MDBCardImg fluid :src="ref_2" alt="..." @click="setZoomedImg(ref_2)"/>
                </div>
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
        <MDBCol md="6">
          <MDBCard text="white" bg="secondary" class="mb-3" style="text-align: left; min-height: 200px;  padding: 10px;">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <div class="imageFocus">
                  <MDBCardImg  fluid :src="ref_8" alt="..." @click="setZoomedImg(ref_8)"/>
                </div>

              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Remontti</MDBCardTitle>
                  <MDBCardText>
                    Rakennus!
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
          <MDBCard text="white" bg="secondary" class="mb-3" style="text-align: left; padding: 10px; min-height: 330px; max-width: 540px">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <div class="imageFocus">
                  <MDBCardImg fluid :src="ref_5" alt="..." @click="setZoomedImg(ref_5)"/>
                </div>
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Katon korjaus</MDBCardTitle>
                  <MDBCardText>
                    <ul>
                      <li>
                        Oopperatalon 48 täys WC-remonttia
                      </li>
                      <li>
                        Tuusulan Riihikallion koulun 8000m² väliseinärakentaminen
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
        <MDBCol md="6">
          <MDBCard text="white" bg="secondary" class="mb-3" style="text-align: left; min-height: 200px;  padding: 10px;">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <div class="imageFocus">
                  <MDBCardImg  fluid :src="ref_6" alt="..." @click="setZoomedImg(ref_6)"/>
                </div>

              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Remontti</MDBCardTitle>
                  <MDBCardText>
                    Huoneen remontti!
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
          <MDBCard text="white" bg="secondary" class="mb-3" style="text-align: left; min-height: 200px;  padding: 10px;">
            <MDBRow class="g-0">
              <MDBCol md="4">
                <div class="imageFocus">
                  <MDBCardImg  fluid :src="ref_7" alt="..." @click="setZoomedImg(ref_7)"/>
                </div>

              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Remontti</MDBCardTitle>
                  <MDBCardText>
                    Katon rakennus!
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
    <div class="full-image-panel" v-else>
      <img :src="fullImage" style="width: 100%;" alt="..." />
      <MDBBtn class="full-image-panel-btn" color="danger" @click="fullImage = null">Poistu</MDBBtn>
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
    MDBBtn
} from 'mdb-vue-ui-kit';
import image1 from '@/assets/rakentaja.jpg';
import image2 from '@/assets/remontti-helsinki-019.jpg';
import ref_1 from '@/assets/ref-1.jpg';
import ref_2 from '@/assets/ref-2.jpg';
import ref_3 from '@/assets/ref-3.jpg';
import ref_4 from '@/assets/ref-4.jpg';
import ref_5 from '@/assets/ref-5.jpg';
import ref_6 from '@/assets/ref-6.jpg';
import ref_7 from '@/assets/ref-7.jpg';
import ref_8 from '@/assets/ref-8.jpg';
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
    MDBBtn
  },
  data () {
    return {
      fullImage: null,
      image1,
      image2,
      ref_1,
      ref_2,
      ref_3,
      ref_4,
      ref_5,
      ref_6,
      ref_7,
      ref_8
    }
  },
  mounted() {
    //this.fullImage = null;
  },
  methods: {
    setZoomedImg (img) {
      console.log("Zoomed...");
      this.fullImage = img;
    }
  }
}
</script>

<style scoped>
.imageFocus {
  cursor: pointer;
}
.full-image-panel {
  margin-top: 33px;
}
.full-image-panel-btn {
  margin-top: 17px;
}
</style>