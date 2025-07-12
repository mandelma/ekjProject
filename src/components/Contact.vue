<template>
  <MDBContainer>
    <div style=" width: 97%; margin: 70px auto; background-color: #4d5661; box-shadow: 0.3em 0.3em 1em rgba(104,101,101,0.6); border-radius: 5px; ">
      <h3 ref="contact" tabindex="-1" style="color:orange; padding-top: 17px; font-weight: 500;">Yhteydenotto lomake</h3>


      <form style="padding: 13px;">

        <div class="notification-field">
          <div v-if="messageSuccessNote" ref="toast" tabindex="-1">
            <success-message :message = messageSuccessNote />
          </div>
          <div v-if="nameFieldError" ref="toast" tabindex="-1">
            <error-message :message = nameFieldError />
          </div>
          <div v-if="emailFieldError" ref="toast" tabindex="-1">
            <error-message :message = emailFieldError />
          </div>
          <div v-if="messageFieldError" ref="toast" tabindex="-1">
            <error-message :message = messageFieldError />
          </div>
        </div>

        <!-- Name input -->
        <MDBInput
            white
            type="text"
            label="Nimi"
            id="form4Name"
            v-model="fullName"
            wrapperClass="mb-4"
        />

        <!-- Email input -->
        <MDBInput
            white
            type="email"
            label="Sähköposti"
            id="form4Email"
            v-model="email"
            wrapperClass="mb-4"
        />

        <!-- Message input -->
        <MDBTextarea
            white
            maxlength="70"
            label="Viesti..."
            id="form4Textarea"
            v-model="content"
            wrapperClass="mb-4"
        />
        <span class="message-counter">{{ content.length }} / 70</span>

        <!-- Checkbox -->

        <!-- Submit button -->



<!--        <div class="notification-field">-->
<!--          <success-message :message = messageSuccessNote />-->
<!--        </div>-->

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
  mounted() {
    this.$nextTick(() => {
      this.$refs.contact.focus();
    });
  },
  methods: {
    async submitMessage () {
      if (this.fullName === "") {
        this.nameFieldError = "Sisestää oma nimi!";
        this.$nextTick(() => {
          this.$refs.contact?.focus(); // use optional chaining to avoid errors
        });
        setTimeout(() => {
          this.nameFieldError = null;

        }, 2000);
      } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) {
        this.emailFieldError = "Anna kelvollinen sähköpostin osoite!";
        this.$nextTick(() => {
          this.$refs.contact?.focus(); // use optional chaining to avoid errors
        });
        setTimeout(() => {
          this.emailFieldError = null;
        }, 2000);
      } else if (this.content === "") {
        this.messageFieldError = "Sisestää jotain!";
        this.$nextTick(() => {
          this.$refs.contact?.focus(); // use optional chaining to avoid errors
        });
        setTimeout(() => {
          this.messageFieldError = null;
        }, 2000);
      } else {
        const mailContent = {
          name: this.fullName,
          email: this.email,
          message: this.content
        };

        // Message to server
        const sent = await mailService.sendEmail(mailContent);
        console.log("Mail sended? - " + sent);
        this.fullName = "";
        this.email = "";
        this.content = "";
        this.messageSuccessNote = "Tiedot lähetetty onnistuneesti, kiitos!";
        this.$nextTick(() => {
          this.$refs.contact?.focus(); // use optional chaining to avoid errors
        });
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
  box-shadow: 0 0 0 1000px #4d5661 inset !important; /* or your desired background */
  -webkit-text-fill-color: #dddddd !important; /* your desired text color */
  caret-color: #dddddd !important;
  transition: background-color 5000s ease-in-out 0s;
}

.message-counter {
  display: flex;
  justify-content: right;
  padding-bottom: 7px;
}

</style>