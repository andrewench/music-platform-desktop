import { LauncherPreferences } from './launcher-preferences/launcher-preferences.config'

const { width, height, minWidth, minHeight } = LauncherPreferences.instance

export type InstanceConfig = Electron.BrowserWindowConstructorOptions

export const InstanceOptions: InstanceConfig = {
  width,
  height,
  minWidth,
  minHeight,
  frame: false,
  center: true,
  transparent: true,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
  },
}
