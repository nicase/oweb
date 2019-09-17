<template>
  <div>
    <p>Això és un component vue</p>
    <p>Aquest text ve de la api: {{text}}</p>
  </div>
 </template>

<script>
import axios from 'axios'
import Service from '../Service'

export default {
  name: 'MainComponent',
  data() {
    return {
      text: ''
    }
  },
  async created() {
    Service.makeGet()
    await axios.get('/api').then(res => {
      this.text = res.data + ' status: ' + res.status
    }).catch(err => {
      this.text = err.status
    })
  },
  methods: {

  }
}
</script>

<style>

</style>