(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{468:function(e,s,n){"use strict";n.r(s);var a=n(48),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),n("p",[n("code",[e._v("webpack")]),e._v(" compiler 能够识别遵循 ES2015 模块语法、CommonJS 或 AMD 规范编写的模块。然而，一些 third party(第三方库) 可能会引用一些全局依赖（例如 "),n("code",[e._v("jQuery")]),e._v(" 中的 "),n("code",[e._v("$")]),e._v('）。因此这些 library 也可能会创建一些需要导出的全局变量。这些 "broken modules(不符合规范的模块)" 就是 '),n("em",[e._v("shim(预置依赖)")]),e._v(" 发挥作用的地方。")]),e._v(" "),n("blockquote",[n("p",[e._v("__我们不推荐使用全局依赖！__webpack 背后的整个理念是使前端开发更加模块化。也就是说，需要编写具有良好的封闭性(well contained)、不依赖于隐含依赖（例如，全局变量）的彼此隔离的模块。请只在必要的时候才使用这些特性。")])]),e._v(" "),n("p",[n("em",[e._v("shim")]),e._v(" 另外一个极其有用的使用场景就是：当你希望 "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Polyfill_%28programming%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("polyfill"),n("OutboundLink")],1),e._v(" 扩展浏览器能力，来支持到更多用户时。在这种情况下，你可能只是想要将这些 polyfills 提供给需要修补(patch)的浏览器（也就是实现按需加载）。")]),e._v(" "),n("p",[e._v("下面的文章将向我们展示这两种用例。")]),e._v(" "),n("blockquote",[n("p",[e._v("为了方便，本指南继续沿用 "),n("a",{attrs:{href:"/guides/getting-started"}},[e._v("起步")]),e._v(" 中的代码示例。在继续之前，请确保你已经熟悉这些配置。")])]),e._v(" "),n("h2",{attrs:{id:"shim-预置全局变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shim-预置全局变量"}},[e._v("#")]),e._v(" shim 预置全局变量")]),e._v(" "),n("p",[e._v("让我们开始第一个 shim 全局变量的用例。在此之前，先看下我们的项目：")]),e._v(" "),n("p",[n("strong",[e._v("project")])]),e._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[e._v("webpack-demo\n|- package.json\n|- webpack.config.js\n|- /dist\n|- /src\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" |- index.js\n")])]),e._v("|- /node_modules\n")])])]),n("p",[e._v("还记得我们之前用过的 "),n("code",[e._v("lodash")]),e._v(" 吗？出于演示目的，例如把这个应用程序中的模块依赖，改为一个全局变量依赖。要实现这些，我们需要使用 "),n("code",[e._v("ProvidePlugin")]),e._v(" 插件。")]),e._v(" "),n("p",[e._v("使用 "),n("a",{attrs:{href:"/plugins/provide-plugin"}},[n("code",[e._v("ProvidePlugin")])]),e._v(" 后，能够在 webpack 编译的每个模块中，通过访问一个变量来获取一个 package。如果 webpack 看到模块中用到这个变量，它将在最终 bundle 中引入给定的 package。让我们先移除 "),n("code",[e._v("lodash")]),e._v(" 的 "),n("code",[e._v("import")]),e._v(" 语句，改为通过插件提供它：")]),e._v(" "),n("p",[n("strong",[e._v("src/index.js")])]),e._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" import _ from 'lodash';\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" function component() {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   const element = document.createElement('div');\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   // Lodash, now imported by this script\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   return element;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" }\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" document.body.appendChild(component());\n")])])])])]),n("p",[n("strong",[e._v("webpack.config.js")])]),e._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" const path = require('path');\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" const webpack = require('webpack');\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" module.exports = {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   entry: './src/index.js',\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   output: {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     filename: 'bundle.js',\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     path: path.resolve(__dirname, 'dist')\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   }\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   },\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   plugins: [\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     new webpack.ProvidePlugin({\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("       _: 'lodash'\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     })\n")]),n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   ]\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" };\n")])])])])]),n("p",[e._v("我们本质上所做的，就是告诉 webpack……")]),e._v(" "),n("blockquote",[n("p",[e._v("如果你遇到了至少一处用到 "),n("code",[e._v("_")]),e._v(" 变量的模块实例，那请你将 "),n("code",[e._v("lodash")]),e._v(" package 引入进来，并将其提供给需要用到它的模块。")])]),e._v(" "),n("p",[e._v("运行我们的构建脚本，将会看到同样的输出：")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n    Asset    Size  Chunks                    Chunk Names\nbundle.js  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("544")]),e._v(" kB       "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("emitted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("big"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("  main\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),n("p",[e._v("还可以使用 "),n("code",[e._v("ProvidePlugin")]),e._v(" 暴露出某个模块中单个导出，通过配置一个“数组路径”（例如 "),n("code",[e._v("[module, child, ...children?]")]),e._v("）实现此功能。所以，我们假想如下，无论 "),n("code",[e._v("join")]),e._v(" 方法在何处调用，我们都只会获取到 "),n("code",[e._v("lodash")]),e._v(" 中提供的 "),n("code",[e._v("join")]),e._v(" 方法。")]),e._v(" "),n("p",[n("strong",[e._v("src/index.js")])]),e._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" function component() {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   const element = document.createElement('div');\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   element.innerHTML = join(['Hello', 'webpack'], ' ');\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   return element;\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" }\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" document.body.appendChild(component());\n")])])])])]),n("p",[n("strong",[e._v("webpack.config.js")])]),e._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" const path = require('path');\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" const webpack = require('webpack');\n")])]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" module.exports = {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   entry: './src/index.js',\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   output: {\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     filename: 'bundle.js',\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     path: path.resolve(__dirname, 'dist')\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   },\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   plugins: [\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     new webpack.ProvidePlugin({\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("       _: 'lodash'\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("       join: ['lodash', 'join']\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("     })\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v("   ]\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[e._v(" };\n")])])])])]),n("p",[e._v("这样就能很好的与 "),n("a",{attrs:{href:"/guides/tree-shaking"}},[e._v("tree shaking")]),e._v(" 配合，将 "),n("code",[e._v("lodash")]),e._v(" library 中的其余没有用到的导出去除。")]),e._v(" "),n("h2",{attrs:{id:"node-内置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-内置"}},[e._v("#")]),e._v(" Node 内置")]),e._v(" "),n("p",[e._v("像 "),n("code",[e._v("process")]),e._v(" 这种 Node 内置模块，能直接根据配置文件进行正确的 polyfill，而不需要任何特定的 loader 或者 plugin。查看 "),n("a",{attrs:{href:"/configuration/node"}},[e._v("node ")]),e._v(" 配置页面获取更多信息。")])])}),[],!1,null,null,null);s.default=t.exports}}]);