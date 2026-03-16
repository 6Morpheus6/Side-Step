module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        input: true,
        message: [
          "uv run sidestep"
        ]
      }
    }
  ]
}