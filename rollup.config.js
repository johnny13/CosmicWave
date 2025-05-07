import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  // Main JavaScript bundle configuration
  {
    input: 'src/cosmicwave.js',
    output: [
      {
        file: 'dist/cosmicwave.js',
        format: 'umd',
        name: 'cosmicwave',
      },
      {
        file: 'dist/cosmicwave.min.js',
        format: 'umd',
        name: 'cosmicwave',
        plugins: [terser()],
      },
      {
        file: 'www/cosmicwave.min.js',
        format: 'umd',
        name: 'cosmicwave',
        plugins: [terser()],
      },
    ],
  },
  // Types bundle configuration
  {
    input: './src/cosmicwave.d.ts',
    output: [
      {
        file: 'dist/cosmicwave.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
];
