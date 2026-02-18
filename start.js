module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        path: "app/Side-Step",
        input: true,
        message: [
          "uv run train.py"
        ]
      }
    }
  ]
}