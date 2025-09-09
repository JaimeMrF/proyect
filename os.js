const os = require('os');

console.log(
    os.userInfo().username,
    os.uptime()/60/60,
    os.totalmem() / 1024 / 1024,
    os.freemem() / 1024 / 1024,
    os.platform()

)


