(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{490:function(e,t,a){"use strict";a.r(t);var n=a(48),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"http://s.shudong.wang/shudong/20200212135158.png",alt:"20200212135158"}})]),e._v(" "),a("blockquote",[a("p",[e._v("永久链接： https://shudong.wang/10731.html")])]),e._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),a("blockquote",[a("p",[e._v("把每次打包不需要变动的文件（一般类库，如:react,lodash）提前打包好，这样每次打包项目的时候，就不需要单独打包这些文件，从而节约了时间")])]),e._v(" "),a("h2",{attrs:{id:"dll-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dll-plugin"}},[e._v("#")]),e._v(" dll Plugin")]),e._v(" "),a("p",[e._v("https://www.npmjs.com/package/add-asset-html-webpack-plugin")]),e._v(" "),a("h4",{attrs:{id:"正常构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正常构建"}},[e._v("#")]),e._v(" 正常构建")]),e._v(" "),a("blockquote",[a("p",[e._v("Hash: daa3610a1f7e6d32873d\nVersion: webpack 4.41.5\nTime: 4212ms\nBuilt at: 02/10/2020 6:59:16 PM")])]),e._v(" "),a("p",[a("img",{attrs:{src:"http://s.shudong.wang/shudong/20200210185958.png",alt:"20200210185958"}})]),e._v(" "),a("h4",{attrs:{id:"构建完dll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建完dll"}},[e._v("#")]),e._v(" 构建完dll")]),e._v(" "),a("blockquote",[a("p",[e._v("Hash: eca9917dfce14b9c2876\nVersion: webpack 4.41.5\nTime: 2742ms\nBuilt at: 02/10/2020 7:00:45 PM")])]),e._v(" "),a("p",[a("img",{attrs:{src:"http://s.shudong.wang/shudong/20200210190105.png",alt:"20200210190105"}})]),e._v(" "),a("h4",{attrs:{id:"再次build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再次build"}},[e._v("#")]),e._v(" 再次build")]),e._v(" "),a("blockquote",[a("p",[e._v("Hash: a528e9cbdaefb8a893cc\nVersion: webpack 4.41.5\nTime: 1154ms\nBuilt at: 02/10/2020 7:01:16 PM")])]),e._v(" "),a("p",[a("img",{attrs:{src:"http://s.shudong.wang/shudong/20200210190136.png",alt:"20200210190136"}})]),e._v(" "),a("h4",{attrs:{id:"节省"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节省"}},[e._v("#")]),e._v(" 节省")]),e._v(" "),a("p",[e._v("4212-1154=3058ms")]),e._v(" "),a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),a("blockquote",[a("p",[e._v("单独创建一个webpack文件， webpack.dll.js  专门用来，打包dll包相关")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('module.exports = {\n  mode: "production",\n  ...\n  plugins: [\n    new webpack.DllPlugin({\n      name: "[name]",\n      path: path.resolve(__dirname, "../dll/[name].manifest.json")\n    })\n  ]\n};\n')])])]),a("h4",{attrs:{id:"webpack-dllplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dllplugin"}},[e._v("#")]),e._v(" webpack.DllPlugin")]),e._v(" "),a("blockquote",[a("p",[e._v("此插件用于单独的webpack配置中，专门用于创建dll-only-bundle。它创建了一个清单。json文件，DllReferencePlugin使用它来映射依赖项。")])]),e._v(" "),a("h4",{attrs:{id:"参数如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数如下"}},[e._v("#")]),e._v(" 参数如下：")]),e._v(" "),a("p",[e._v("context (optional): context of requests in the manifest file (defaults to the webpack context.)\nname: name of the exposed dll function (TemplatePaths: [hash] & [name] )\npath: absolute path to the manifest json file (output)\nentryOnly (boolean = true): if true, only entry points will be exposed\ntype: type of the dll bundle")]),e._v(" "),a("h4",{attrs:{id:"dllreferenceplugin-打包完成后-在项目中做对应关系使用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dllreferenceplugin-打包完成后-在项目中做对应关系使用插件"}},[e._v("#")]),e._v(" DllReferencePlugin 打包完成后，在项目中做对应关系使用插件")]),e._v(" "),a("p",[e._v("This plugin is used in the primary webpack config, it references the dll-only-bundle(s) to require pre-built dependencies.\nCHINESE (SIMPLIFIED)\n该插件在主要的webpack配置中使用，它引用dll-only-bundle以要求预先构建的依赖项。")]),e._v(" "),a("h4",{attrs:{id:"参数如下-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数如下-2"}},[e._v("#")]),e._v(" 参数如下：")]),e._v(" "),a("p",[e._v("context: (absolute path) context of requests in the manifest (or content property)\nmanifest : an object containing content and name or a string to the absolute path of the JSON manifest to be loaded upon compilation\ncontent (optional): the mappings from request to module id (defaults to manifest.content)\nname (optional): an identifier where the dll is exposed (defaults to manifest.name) (see also externals)\nscope (optional): prefix which is used for accessing the content of the dll\nsourceType (optional): how the dll is exposed (libraryTarget)")]),e._v(" "),a("h4",{attrs:{id:"dllreferenceplugin-demo参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dllreferenceplugin-demo参考"}},[e._v("#")]),e._v(" DllReferencePlugin demo参考：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new webpack.DllReferencePlugin({\n  manifest: path.resolve(__dirname, \"../dll\", '符合条件的文件')\n})\n")])])]),a("blockquote",[a("p",[e._v("在打包的webpack中，使用了这个插件，每次打包就会取，dll 里面的文件，避免重复打包")])]),e._v(" "),a("h4",{attrs:{id:"addassethtmlwebpackplugin-这时候打包完毕后-没有把相关的js引用到html当中-需要使用这个插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addassethtmlwebpackplugin-这时候打包完毕后-没有把相关的js引用到html当中-需要使用这个插件"}},[e._v("#")]),e._v(" AddAssetHtmlWebpackPlugin ：这时候打包完毕后，没有把相关的js引用到html当中，需要使用这个插件")]),e._v(" "),a("ul",[a("li",[e._v("参考：https://www.npmjs.com/package/add-asset-html-webpack-plugin")]),e._v(" "),a("li",[e._v("将JavaScript或CSS资产添加到html-webpack-plugin生成的HTML中")])]),e._v(" "),a("h2",{attrs:{id:"webpack-dll-js-全部代码参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dll-js-全部代码参考"}},[e._v("#")]),e._v(" webpack.dll.js 全部代码参考")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const path = require("path");\nconst webpack = require("webpack");\nmodule.exports = {\n  mode: "production",\n  entry: {\n    vendors: ["lodash"],\n    react: ["react", "react-dom"],\n    jquery: ["jquery"]\n  },\n  output: {\n    filename: "[name].dll.js",\n    path: path.resolve(__dirname, "../dll"),\n    library: "[name]"\n  },\n  plugins: [\n    new webpack.DllPlugin({\n      name: "[name]",\n      path: path.resolve(__dirname, "../dll/[name].manifest.json")\n    })\n  ]\n};\n')])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[e._v("https://webpack.js.org/plugins/dll-plugin/")]),e._v(" "),a("li",[e._v("https://www.npmjs.com/package/add-asset-html-webpack-plugin")]),e._v(" "),a("li",[e._v("https://gitlab.com/webpackjs")])]),e._v(" "),a("h2",{attrs:{id:"文章对应的仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章对应的仓库"}},[e._v("#")]),e._v(" 文章对应的仓库")]),e._v(" "),a("blockquote",[a("p",[e._v("https://gitlab.com/webpackjs/webpack-dll-demo.git\n备注：需要在https://shudong.wang/about 联系作者 添加权限")])])])}),[],!1,null,null,null);t.default=s.exports}}]);