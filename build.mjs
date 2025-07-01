import config from './config.mjs';
import esbuild from 'esbuild';
import fs from 'fs';

let code;

// 处理对 React 的支持
if (config.supportReact) {
    // 进行初步编译，不进行 minify 以便二次处理
    await esbuild.build({
        entryPoints: [process.argv[2]],
        bundle: true,
        outfile: process.argv[3],
        format: 'cjs'
    })

    code = fs.readFileSync(process.argv[3], 'utf8')

    // 将编译后内置的 React 引用替换为 CoCo 提供的 React
    code = code.replaceAll("require_react_development()", "React")
    fs.writeFileSync(process.argv[3], code)
}

// 编译控件文件，清理 dead-code
await esbuild.build({
    entryPoints: [process.argv[3]],
    bundle: true,
    minify: true,
    outfile: process.argv[3],
    format: 'cjs'
})

// 添加版权信息与附加代码
code = fs.readFileSync(process.argv[3], 'utf8')
code = config.additionalCode + code
code = `/**\n * Copyright (c) ${config.license.author}\n * @license ${config.license.name} ${config.license.url}\n */\n` + code
fs.writeFileSync(process.argv[3], code)
