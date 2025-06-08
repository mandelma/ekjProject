<template>
  <MDBContainer>
    <div style=" width: 97%; margin: 13px auto; background-color: slategrey; box-shadow: 0.3em 0.3em 1em rgba(104,101,101,0.6); border-radius: 5px; ">
      <h3 style="color:#9fa6b2; padding-top: 12px; font-weight: 500;">Yhteydenotto lomake</h3>


      <form style="padding: 13px;">

        <div class="notification-field">
          <success-message :message = messageSuccessNote />
          <error-message :message = nameFieldError />
          <error-message :message = emailFieldError />
          <error-message :message = messageFieldError />
        </div>

        <!-- Name input -->
        <MDBInput
            white
            type="text"
            label="Name"
            id="form4Name"
            v-model="fullName"
            wrapperClass="mb-4"
        />

        <!-- Email input -->
        <MDBInput
            white
            type="email"
            label="Email address"
            id="form4Email"
            v-model="email"
            wrapperClass="mb-4"
        />

        <!-- Message input -->
        <MDBTextarea
            white
            label="Message"
            id="form4Textarea"
            v-model="content"
            wrapperClass="mb-4"
        />

        <!-- Checkbox -->

        <!-- Submit button -->
        <MDBBtn outline="info" block class="mb-4" @click="submitMessage"> Lähettää </MDBBtn>
      </form>
    </div>

  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
    MDBInput,
    MDBTextarea,
    MDBBtn
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';
import successMessage from '../components/notifications/successMessage'
import errorMessage from '../components/notifications/errorMessage.js';
import '@/css/notification.css';
import mailService from '../service/email'
export default {
  name: "ekj-contact",
  components: {
    successMessage,
    errorMessage,
    MDBContainer,
    MDBInput,
    MDBTextarea,
    MDBBtn
  },
  setup () {
    const fullName = ref("")
    const email = ref("")
    const content = ref("")
    const emailFieldError = ref(null)
    const nameFieldError = ref(null)
    const messageFieldError = ref(null)
    const messageSuccessNote = ref(null)
    return {
      fullName,
      email,
      content,
      emailFieldError,
      nameFieldError,
      messageFieldError,
      messageSuccessNote
    }
  },
  methods: {
    async submitMessage () {
      if (this.fullName === "") {
        this.nameFieldError = "Sisestää oma nimi!";
        setTimeout(() => {
          this.nameFieldError = null;
        }, 2000);
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) {
        this.emailFieldError = "Anna kelvollinen sähköpostin osoite!";
        setTimeout(() => {
          this.emailFieldError = null;
        }, 2000);
      } else if (this.content === "") {
        this.messageFieldError = "Sisestää jotain!";
        setTimeout(() => {
          this.messageFieldError = null;
        }, 2000);
      } else {
        this.fullName = "";
        this.email = "";
        this.content = "";

        // name, email, message
        const name = this.fullName;
        const email = this.email;
        const content = this.content;

        const mailContent = {
          name,
          email,
          content
        };

        // Message to server
        const sent = await mailService.sendEmail(mailContent);
        console.log("Mail sended? - " + sent);

        this.messageSuccessNote = "Tiedot lähetetty onnistuneesti, kiitos!";
        setTimeout(() => {
          this.messageSuccessNote = null;
        }, 3000);
        console.log("Message is submitted!");
      }
    }
  }
}
</script>

<style>
.notification-field {
  margin: 17px 0;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  box-shadow: 0 0 0 1000px #637081 inset !important; /* or your desired background */
  -webkit-text-fill-color: #dee0e3 !important; /* your desired text color */
  transition: background-color 5000s ease-in-out 0s;
}

.mdb-input input:-webkit-autofill {
  box-shadow: 0 0 0 1000px #637081 inset !important;
  -webkit-text-fill-color: #dee0e3 !important;
}
</style>