module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app/Ace-Step-1.5",
      message: "git pull"
    }
  }, {
    method: "script.start",
    params: {
      uri: "install.js",
    }
  }]
}
