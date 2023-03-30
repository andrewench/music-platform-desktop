import { ILauncherPreferences } from './launcher-preferences.interface'

import {
	MIN_MAIN_INSTANCE_HEIGHT,
	MIN_MAIN_INSTANCE_WIDTH,
	TITLE_BAR_HEIGHT,
} from '@/constants'

export const LauncherPreferences: ILauncherPreferences = {
	instance: {
		width: MIN_MAIN_INSTANCE_WIDTH,
		height: MIN_MAIN_INSTANCE_HEIGHT,
		minWidth: MIN_MAIN_INSTANCE_WIDTH,
		minHeight: MIN_MAIN_INSTANCE_HEIGHT,
	},
	titleBar: {
		height: TITLE_BAR_HEIGHT,
	},
}
