<template>
  <div class="home">
    <div class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            ZipInfo
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <zip-search @get-zip="onGetZip" />
        <zip-info />
      </ion-content>
    </div>
  </div>
</template>

<script>
import {
  ZipInfo,
  ZipSearch
} from './components'

export default {
  name: 'Home',

  components: {
    ZipInfo,
    ZipSearch
  },

  data () {
    return {
      info: null
    }
  },

  methods: {
    async onGetZip (zip) {
      const res = await fetch(`https://api.zippopotam.us/us/${zip}`)

      if (res.status === 404) {
        this.showAlert()
      }
      this.info = await res.json()
    },

    clearInfo () {
      this.info = null
    },

    showAlert () {
      return this.$ionic.alertController
        .create({
          header: 'Not Valid',
          message: 'Please enter a valid US ZipCode',
          buttons: ['OK']
        })
        .then(a => a.present())
    }
  }
}
</script>
