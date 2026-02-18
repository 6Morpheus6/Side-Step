const path = require('path')
module.exports = {
  version: "5.0",
  title: "Side-Step",
  description: "Optimized Training script for Ace-Step with low VRAM support for local GPUs.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/Side-Step/.venv")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    let downloading = [
      "download_5Hz-lm-0.6B.json",
      "download_5Hz-lm-4B.json",
      "download_v15-turbo-shift1.json",
      "download_v15-turbo-shift3.json",
      "download_v15-turbo-continuous.json"
    ]
    let is_downloading = null
    for(let item of downloading) {
      let d = info.running(item)
      if (d === true) {
        is_downloading = item
        break;
      }
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        },  {
          icon: "fa-solid fa-download",
          text: "Download Models",
          menu: [
            { text: "acestep-5Hz-lm-0.6B", icon: "fa-solid fa-download", href: "download_5Hz-lm-0.6B.json", mode: "refresh" },
            { text: "acestep-5Hz-lm-4B", icon: "fa-solid fa-download", href: "download_5Hz-lm-4B.json", mode: "refresh" },
            { text: "acestep-v15-turbo-shift1", icon: "fa-solid fa-download", href: "download_v15-turbo-shift1.json", mode: "refresh" },
            { text: "acestep-v15-turbo-shift3", icon: "fa-solid fa-download", href: "download_v15-turbo-shift3.json", mode: "refresh" },
            { text: "acestep-v15-turbo-continuous", icon: "fa-solid fa-download", href: "download_v15-turbo-continuous.json", mode: "refresh" },
          ]
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app?"

        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
