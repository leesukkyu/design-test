const path = require('path');
const fs = require('fs');

function getEntryMap (){
  return fs.readdirSync('./src/',{withFileTypes:true})
      .filter((dirent) => dirent.isDirectory())
      .reduce((obj, dirent) => {
          obj[dirent.name] = `./src/${dirent.name}/${dirent.name}.tsx`
          return obj
      },{})
}

class FinancialFePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('FinancialFePlugin', (compilation) => {
      fs.readdirSync('./core/',{withFileTypes:true})
      .filter((depth1) => {
        return depth1.isDirectory()
      })
      .forEach((depth1)=>{
        fs.readdirSync(`./core/${depth1.name}/`,{withFileTypes:true}).filter((depth2)=>{
          if(depth2.name.includes('d.ts')){
            fs.renameSync(`./core/${depth1.name}/${depth2.name}`, `./core/${depth1.name}/index.d.ts`)
          }
        })
      })
    });
  }
}

module.exports = {
    mode : 'production',
    entry:  getEntryMap(),
    output: {
      filename: '[name]/index.js',
      path: path.resolve(__dirname, 'core'),
      library: 'design-test-lee',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', 
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // need for typescript
    },
    plugins: [
      new FinancialFePlugin()
    ]
  };