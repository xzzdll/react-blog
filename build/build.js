const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const zipdir = require('zip-dir');
const WORKSPACE = path.join(__dirname, '..', 'dist')
const outPath = path.join(__dirname, '..', 'babel-template')
const {inlineSource} = require('./config')

if (!fs.existsSync(path.join(WORKSPACE, 'js'))) {
  fs.mkdirSync(path.join(WORKSPACE, 'js'))
}

if (!fs.existsSync(path.join(WORKSPACE, 'css'))) {
  fs.mkdirSync(path.join(WORKSPACE, 'css'))
}

if (!fs.existsSync(path.join(WORKSPACE, 'img'))) {
  fs.mkdirSync(path.join(WORKSPACE, 'img'))
}

// inline模式下删除多余的app.bundle.js、清空资源文件夹
if (inlineSource) {
  shell.find(WORKSPACE).filter((file) => file.match(/\.js$/)).map(f => shell.rm('-f', f)); // rm app.bundle.js
  shell.find(path.join(WORKSPACE, '../dist/css')).filter((file) => file.match(/\.css$/)).map(f => shell.rm('-f', f)); // clear css folder
  shell.find(path.join(WORKSPACE, '../dist/img')).filter((file) => file.match(/\.*$/)).map(f => shell.rm('-f', f));
}

// zip folder
shell.exec(`rm -rf ${outPath}`)
shell.exec(`mkdir -p ${outPath}/dist`)
shell.exec(`cp -rf ${WORKSPACE} ${outPath}`, () => {
  zipdir(`${outPath}`, {
    saveTo: `dist.zip`
  }, function (err, buffer) {
    console.log('打包完成')
    shell.exec(`rm -rf ${outPath}`)
  });
});

process.on('uncaughtException', (err) => {
  console.error(err.stack);
  console.log("Exiting...");
});
