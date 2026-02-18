module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/koda-dernet/Side-Step.git app"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "powershell -ExecutionPolicy Bypass -File install_windows.ps1"
      }
    },
    {
      method: "fs.link",
      params: {
        drive: {
          checkpoints: "app/ACE-Step-1.5/checkpoints"
        },
        peers: [
          "https://github.com/cocktailpeanut/ace-step-ui.pinokio.git",
          "https://github.com/cocktailpeanut/ace-step.pinokio.git"
        ]
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app/ACE-Step-1.5",
        "_": [ "ACE-Step/Ace-Step1.5" ],
        "local-dir": "checkpoints"
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app/ACE-Step-1.5",
        "_": [ "ACE-Step/acestep-v15-base" ],
        "local-dir": "checkpoints/acestep-v15-base"
      }
    }
  ]
}