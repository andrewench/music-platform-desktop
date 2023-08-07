type TInstanceSize = Record<
  'width' | 'minWidth' | 'height' | 'minHeight',
  number
>

export interface ILauncherPreferences {
  instance: TInstanceSize
  titleBar: {
    height: number
  }
}
