const addLog = {
  updated () {
    console.log('发生变化')
  }
}

const app = {
  created () {
    console.log('我是扩展的created')
  }
}

module.exports = { addLog, app }
