const os = require('os');

console.table({
    os: os.userInfo().username,
    time: os.uptime()/60/60,
    totalmem: os.totalmem() / 1024 / 1024,
    fremem: os.freemem() / 1024 / 1024,
    platform: os.platform()
})


