import { resolve as _resolve } from 'path';

export const entry = {
  background: './src/background.ts',
  content: './src/content-script.ts'
};
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: '[name].js'
};
export const resolve = {
  extensions: ['.ts', '.js']
};
export const module = {
  rules: [
    {
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }
  ]
};
export const mode = 'production';
