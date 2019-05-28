import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from "rollup-plugin-terser";
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

export default [{
  input: 'src/index.js',
  output: {
    name: pkg.name,
    file: pkg.browser,
    format: 'umd'
  },
  plugins: [
    resolve({
      browser: true
    }),
    commonjs(),
    json({
      preferConst: true,
      compact: true
    }),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ]
}];