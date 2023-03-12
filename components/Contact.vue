<style>
.contact-container {
    text-align: center;
}
#contact-me {
    color: #4ef98d;
    background-color: #282a34;
    box-shadow: 0 10px 30px -15px #4ef98d;
    padding: 15px 15px;
}
.form-control {
    background-color: #282a34 !important;
}
#contact-me:hover {
    box-shadow: 0 9px 20px -5px #4ef98d;
    border-color: #4ef98d;
}
#submit {
    color: #4ef98d;
    background-color: #282a34;
    border-color: #6c757d;
    padding: 12px 12px;
}
#submit:hover {
    box-shadow: 0 9px 20px -5px #4ef98d;
    border-color: #4ef98d;
}
#reset {
    color: red;
    background-color: #282a34;
    border-color: #6c757d;
    padding: 12px 12px;
}
#reset:hover {
    box-shadow: 0 9px 20px -5px red;
    border-color: red;
}
</style>
<template>
  <div :class="{'contact-container': !contact}">
        <b-button v-if="!contact" id="contact-me" @click="contact = true">Contact Me</b-button>
        <div class="project-display" v-if="contact">
            <div id="close" @click="contact = false"><img width="32px" height="32px" src="../assets/images/close.png"></div>
             <b-form  @reset="onReset" :action="submitFormUrl" method="POST" style="padding-top: 20px;">
                <input type="hidden" name="_next" :value="baseUrl+'/Thanks.html'">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Subject:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Message:" label-for="input-2">
                    <b-form-textarea
                      id="input-3"
                      v-model="form.message"
                      name="message"
                      placeholder="Enter your message..."
                      required
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                </b-form-group>
                <div>
                    <b-button type="submit" id="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" id="reset" variant="danger">Reset</b-button>
                </div>
             </b-form>
             <!-- <b-card class="mt-3" header="Form Data Result">
               <pre class="m-0">{{ form }}</pre>
             </b-card> -->
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let contact  = ref(false);
let  baseUrl = ref(process.env.BASE_URL || 'http://localhost:3000')
let submitFormUrl = ref(process.env.FORM_URL || 'http://localhost:3000')
let form = ref({
          email: '',
          subject: '',
          message: ''
        });
function onReset(event) {
    event.preventDefault()
    // Reset our form values
    form.value.email = ''
   form.value.subject = ''
   form.value.message = ''

}

</script>
