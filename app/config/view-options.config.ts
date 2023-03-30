export type ViewConfig = Electron.BrowserViewConstructorOptions

export const ViewOptions: ViewConfig = {
	webPreferences: {
		sandbox: true,
		contextIsolation: true,
	},
}
