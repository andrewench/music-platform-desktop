import { BrowserWindow, app, session } from 'electron'

import { InstanceConfig, InstanceOptions } from '@/config'

class Launcher {
  public instance: BrowserWindow = {} as BrowserWindow

  constructor({ instanceOptions }: { instanceOptions: InstanceConfig }) {
    this.instance = new BrowserWindow({
      ...instanceOptions,
    })
  }

  static init() {
    const { instance } = new Launcher({
      instanceOptions: InstanceOptions,
    })

    instance.removeMenu()
    instance.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  }
}

if (require('electron-squirrel-startup')) {
  app.quit()
}

app.on('ready', () => {
  Launcher.init()

  session.defaultSession.webRequest.onHeadersReceived((details, cb) => {
    cb({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [`frame-src ${process.env.APP_HOST}`],
      },
    })
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!BrowserWindow.getAllWindows().length) {
    Launcher.init()
  }
})
