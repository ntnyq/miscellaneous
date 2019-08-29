<template>
  <ion-grid>
    <form @submit.prevent="onSubmit">
      <ion-col>
        <ion-item>
          <ion-label>ZipCode:</ion-label>
          <ion-input
            @input="zip = $event.target.value"
            :value="zip"
            name="zip"
            placeholder="Enter US ZipCode"
          />
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button
          expand="block"
          color="primary"
          type="submit"
        >
          Find
        </ion-button>
      </ion-col>
    </form>
  </ion-grid>
</template>

<script>
export default {
  name: 'ZipSearch',

  data () {
    return {
      zip: ''
    }
  },

  methods: {
    onSubmit () {
      const ZIP_REGEXP = /(^\d{5}$)|(^\d{5}-\d{4}$)/
      const isValid = ZIP_REGEXP.test(this.zip)

      if (!isValid) {
        this.showAlert()
      } else {
        this.$emit('get-zip', this.zip)
      }

      this.zip = ''
    },

    showAlert () {
      return this.$ionic.alertController
        .create({
          header: 'Enter zipcode',
          message: 'Please enter a valid US ZipCode',
          buttons: ['OK']
        })
        .then(a => a.present())
    }
  }
}
</script>
