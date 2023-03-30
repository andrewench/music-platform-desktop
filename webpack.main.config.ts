import type { Configuration as WebpackConfig } from 'webpack'

import { plugins } from './webpack.plugins'
import { rules } from './webpack.rules'

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

export const mainConfig: WebpackConfig = {
	entry: './app/index.ts',
	module: {
		rules,
	},
	plugins,
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
	},
}
