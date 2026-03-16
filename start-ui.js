module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "uv run sidestep gui"
        ],
        on: [{
          "event": "/error:/i",
          "break": false
        }]
      }
    }
  ]
}