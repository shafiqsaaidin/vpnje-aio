const VpnJeApp = {
  mounted() {
    axios
      .get('http://192.168.8.1:3000/api/info')
      .then(res => {
        this.hostname = res.data.hostname
        this.cpu = res.data.cpuType
        this.uptime = res.data.uptime
        this.currentDateTime = res.data.currentDateTime
      })
  },
  data() {
    return {
      wgisConnect: false,
      ovisConnect: false,
      vrisConnect: false,
      title: 'VPNJE',
      hostname: 'N/A',
      version: 'V1.0.1 RC Release',
      cpu: 'N/A',
      uptime: 'N/A',
      currentDateTime: 'N/A',
      memoryUsage: 'N/A',
      diskUsage: 'N/A'
    }
  },
  methods: {
    toggleOpenvpn() {
      this.ovisConnect = !this.ovisConnect
    },
    toggleV2ray() {
      this.vrisConnect = !this.vrisConnect
    },
    startWireguard() {
      axios
        .post('http://192.168.8.1:3000/wireguard/start')
        .then(() => {
          this.wgisConnect = true
        })
        .catch((err) => {
          console.log(err)
          this.wgisConnect = false
        })
    },
    stopWireguard() {
      axios
      .post('http://192.168.8.1:3000/wireguard/stop')
      .then(() => {
        this.wgisConnect = false
      })
      .catch((err) => {
        console.log(err)
        this.wgisConnect = true
      })
    }
  },
  computed: {

  }
}

Vue.createApp(VpnJeApp).mount('#app')