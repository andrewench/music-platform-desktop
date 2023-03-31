import { ASSETS_DIRECTORY_LIST, BUILD_ASSETS_FOLDER } from './webpack.constants'

import DotenvWebpackPlugin from 'dotenv-webpack'
import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { resolve } from 'path'

const CopyWebpackPlugin = require('copy-webpack-plugin')

const getPath = (dir: string) => resolve(__dirname, dir)

const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new DotenvWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: ASSETS_DIRECTORY_LIST.map(folder => {
      return {
        from: getPath(`app/assets/${folder}`),
        to: getPath(`${BUILD_ASSETS_FOLDER}/${folder}`),
      }
    }),
  }),
]
