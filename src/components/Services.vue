<template>
  <MDBContainer>
    <div class="pages">
      <h2 style="padding-top: 13px; color: #83bfc6;">Palvelut</h2>
      <MDBRow>
        <MDBCol sm="6">
          <div>
            <MDBCard  text="white" bg="secondary" class="mb-3">
              <MDBCardBody>
                <MDBCardTitle class="service-title">Special title treatment</MDBCardTitle>
                <MDBCardText >
                  <div class="service-text">
                    With supporting text below as a natural lead-in to additional content.
                  </div>

                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>

        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Special title treatment</MDBCardTitle>
              <MDBCardText class="service-text">
                With supporting text below as a natural lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Special title treatment</MDBCardTitle>
              <MDBCardText class="service-text">
                With supporting text below as a natural lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Special title treatment</MDBCardTitle>
              <MDBCardText class="service-text">
                With supporting text below as a natural lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard text="white" bg="secondary" class="mb-3">
            <MDBCardBody>
              <MDBCardTitle class="service-title">Special title treatment</MDBCardTitle>
              <MDBCardText class="service-text">
                With supporting text below as a natural lead-in to additional content.
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
  }
}
</script>

<style scoped>
.service {
  /*font-size: 11px;*/
}

.service-title {
  color: #436265;
}
.service-text {
  color: #dddddd;
}
.service-text :hover{
  transition: font-size 2s;
  font-size: 17px;

}
</style>