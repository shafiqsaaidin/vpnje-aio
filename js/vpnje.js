const VpnJeApp = {
  mounted() {
    axios
      .get('http://172.16.102.252:3000/api/info')
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
      hostname: '',
      version: 'V1.0.1 RC Release',
      cpu: '',
      uptime: '',
      currentDateTime: '',
      memoryUsage: '',
      diskUsage: ''
    }
  },
  methods: {
    toggleWireguard() {
      this.wgisConnect = !this.wgisConnect
    },
    toggleOpenvpn() {
      this.ovisConnect = !this.ovisConnect
    },
    toggleV2ray() {
      this.vrisConnect = !this.vrisConnect
    }
  },
  computed: {

  }
}

Vue.createApp(VpnJeApp).mount('#app')