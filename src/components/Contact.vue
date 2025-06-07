<template>
  <MDBContainer>
    <h2>Contact form</h2>
    <form>
      <!-- Name input -->
      <MDBInput
          white
          type="text"
          label="Name"
          id="form4Name"
          v-model="form4Name"
          wrapperClass="mb-4"
      />

      <!-- Email input -->
      <MDBInput
          type="email"
          label="Email address"
          id="form4Email"
          v-model="form4Email"
          wrapperClass="mb-4"
      />

      <!-- Message input -->
      <MDBTextarea
          label="Message"
          id="form4Textarea"
          v-model="form4Textarea"
          wrapperClass="mb-4"
      />

      <!-- Checkbox -->

      <!-- Submit button -->
      <MDBBtn color="primary" block class="mb-4"> Send </MDBBtn>
    </form>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
    MDBInput,
    MDBTextarea,
    MDBBtn
} from 'mdb-vue-ui-kit'
export default {
  name: "ekj-contact",
  components: {
    MDBContainer,
    MDBInput,
    MDBTextarea,
    MDBBtn
  }
}
</script>

<style scoped>

</style>