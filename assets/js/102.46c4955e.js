(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{501:function(t,a,s){"use strict";s.r(a);var n=s(48),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("react性能！")]),t._v(" "),s("h3",{attrs:{id:"渲染原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染原理"}},[t._v("#")]),t._v(" 渲染原理")]),t._v(" "),s("p",[s("em",[t._v("参考:"),s("br"),t._v(" "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/44331138",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. 从渲染原理到性能优化"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000015366521",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. React性能优化-虚拟Dom原理浅析"),s("OutboundLink")],1)])]),t._v(" "),s("ol",[s("li",[t._v("JSX代码经过babel编译之后变成React.createElement的表达式，这个表达式在ReactDOM.render函数被调用的时候执行生成一个element；")]),t._v(" "),s("li",[t._v("在首次渲染的时候，先去按照规则初始化element，接着ReactComponentComponentWrapper通过递归，最终调用ReactDOMComponent的mountComponent方法来帮助生成真实DOM节点；")]),t._v(" "),s("li",[t._v("mountComponent中就用document.createElement, appendChild等原生API来生成DOM并插入文档中；"),s("br")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. jsx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  Content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. react转义")]),t._v("\nReact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content!'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. virtual DOM")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content 1!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. render")]),t._v("\nReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content!'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "creating" a component')]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#root'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inserting it on a page")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"react-16-加载性能优化指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-16-加载性能优化指南"}},[t._v("#")]),t._v(" React 16 加载性能优化指南")]),t._v(" "),s("p",[s("em",[t._v("参考: "),s("a",{attrs:{href:"http://imweb.io/topic/5b6cf66c93759a0e51c917c7",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 16 加载性能优化指南"),s("OutboundLink")],1)])]),t._v(" "),s("ol",[s("li",[t._v("首屏 -> 避免空白：在app root节点中加入loading提示；")]),t._v(" "),s("li",[t._v("首屏 -> 内容渲染：\n"),s("ol",[s("li",[t._v("可优化资源：\n"),s("ol",[s("li",[t._v("基础框架：如 React、Vue 等，这些基础框架的代码是不变的，除非升级框架；")]),t._v(" "),s("li",[t._v("Polyfill：对于使用了 ES2015+ 语法的项目来说，为了兼容性，polyfill 是必要的存在；")]),t._v(" "),s("li",[t._v("业务基础库：业务的一些通用的基础代码，不属于框架，但大部分业务都会使用到；")]),t._v(" "),s("li",[t._v("业务代码：特点是具体业务自身的逻辑代码；")])])]),t._v(" "),s("li",[t._v("缓存基础框架：制定合适的缓存策略，四种缓存的优先级：cache-control > expires > etag > last-modified；")]),t._v(" "),s("li",[t._v("使用动态 polyfill：\n"),s("ol",[s("li",[t._v("去掉构建中静态的 polyfill，换而使用 polyfill.io 这样的动态 polyfill 服务，保证只有在需要时，才会引入 polyfill；")]),t._v(" "),s("li",[t._v('编译到 ES2015+ ，提升代码运行效率，利用《script type="module"》标签检测是否支持信语法；')])]),t._v(" "),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main.es2016.js；"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("nomodule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main.es5.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n// 1. 新浏览器识别module和nomodule，会只加载main.es2016.js；\n// 2. 旧浏览器不识别module和nomodule，会只加载main.es5.js；\n")])])])]),t._v(" "),s("li",[t._v("使用 SplitChunksPlugin 自动拆分业务基础库；")]),t._v(" "),s("li",[t._v("业务代码：\n"),s("ol",[s("li",[t._v("使用 Tree Shaking 减少业务代码体积，去除没有用到的代码；")]),t._v(" "),s("li",[t._v("Code Splitting “懒加载”代码，改成动态import的形式(React Loadable组件)；")]),t._v(" "),s("li",[t._v("shouldComponent()避免不必要的diff；或者启用PureComponent，自带shouldComponent浅比较props和state；")]),t._v(" "),s("li",[t._v("list类型的同级节点加key属性；")])])]),t._v(" "),s("li",[t._v("页面图片懒加载：监听scroll(节流)；")])])])]),t._v(" "),s("h3",{attrs:{id:"react-框架级别性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-框架级别性能优化"}},[t._v("#")]),t._v(" React 框架级别性能优化")]),t._v(" "),s("p",[s("em",[t._v("参考: "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/tCLvRad-WrnFKJiStU7BKw",target:"_blank",rel:"noopener noreferrer"}},[t._v("漫谈前端性能，突破React应用瓶颈"),s("OutboundLink")],1)])]),t._v(" "),s("ol",[s("li",[t._v("任务分片(React Fiber)：基于浏览器对 requestIdleCallback 和 requestAnimationFrame 这两个API 的支持，React 团队实现新的调度策略 — Fiber reconcile。")]),t._v(" "),s("li",[t._v("结合 Web worker：\n"),s("ol",[s("li",[t._v("React 结合 Web worker：\n"),s("ol",[s("li",[t._v("标准的 React 应用由两部分构成:\n"),s("ul",[s("li",[t._v("React core：负责绝大部分复杂的 Virtual DOM 计算；")]),t._v(" "),s("li",[t._v("React-Dom：负责与浏览器真实 DOM 交互来展示内容。")])])]),t._v(" "),s("li",[t._v("我们尝试在 Web worker 中运行 React Virtual DOM 的相关计算。即将 React core 部分移入 Web worker 线程中。")]),t._v(" "),s("li",[t._v("worker线程postMessage通信的成本决定更新少部分节点的性能不好；")])])]),t._v(" "),s("li",[t._v("Redux 结合 Web worker：\n"),s("ol",[s("li",[t._v("将 Redux 中 reducer 复杂的纯计算过程放在 worker 线程里；")]),t._v(" "),s("li",[t._v("在实现层面，借助 Redux 库的 enchancer 设计，完成了抽象封装；")])])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);