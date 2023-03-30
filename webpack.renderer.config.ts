import type { Configuration as WebpackConfig } from 'webpack'

import { plugins } from './webpack.plugins'
import { rules } from './webpack.rules'

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

export const rendererConfig: WebpackConfig = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
}
