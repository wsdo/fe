(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{483:function(s,t,a){"use strict";a.r(t);var e=a(48),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" ssh")]),s._v(" "),a("p",[s._v("这个密钥用来跟 github 通信，在本地终端里生成然后上传到 github")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wsd312@163.com'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密钥")]),s._v("\nssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wsd312@163.com"')]),s._v(" -f ~/.ssh/ww_rsa "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定生成目录文件名字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试是否成功")]),s._v("\n")])])]),a("h2",{attrs:{id:"然后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#然后"}},[s._v("#")]),s._v(" 然后")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat ~/.ssh/id_rsa.pub\n查看了放在GitHub 仓库上面\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);