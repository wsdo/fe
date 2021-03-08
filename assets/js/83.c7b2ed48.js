(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{482:function(t,e,n){"use strict";n.r(e);var s=n(48),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://git-scm.com/download/linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方教程"),n("OutboundLink")],1),t._v("，在 Linux/Unix 系统中，通过工具在中安装 "),n("code",[t._v("git")]),t._v(",这种方式比较简单，便于升级卸载工具。")]),t._v(" "),n("p",[t._v("下面介绍在 CentOS 系统中，通过 yum 来安装 git")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Red Hat Enterprise Linux, Oracle Linux, CentOS, Scientific Linux, et al.")]),t._v("\nRHEL and derivatives typically ship older versions of git. You can "),n("a",{attrs:{href:"https://www.kernel.org/pub/software/scm/git/",target:"_blank",rel:"noopener noreferrer"}},[t._v("download a tarball"),n("OutboundLink")],1),t._v(" and build from source, or use a 3rd-party repository such as "),n("a",{attrs:{href:"https://ius.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the IUS Community Project"),n("OutboundLink")],1),t._v(" to obtain a more recent version of git.")])]),t._v(" "),n("p",[t._v("官方文档说 git 在 "),n("code",[t._v("RHEL")]),t._v(" 和衍生产品通常都会发布旧版本的 "),n("code",[t._v("git")]),t._v("，我们需要源码编译安装，或者使用第三方存储库（如"),n("a",{attrs:{href:"https://ius.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IUS社区项目"),n("OutboundLink")],1),t._v("）。")]),t._v(" "),n("p",[t._v("现在我们通过，"),n("a",{attrs:{href:"https://ius.io/GettingStarted/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IUS社区"),n("OutboundLink")],1),t._v("下载 "),n("a",{attrs:{href:"https://centos7.iuscommunity.org/ius-release.rpm",target:"_blank",rel:"noopener noreferrer"}},[t._v("ius-release.rpm"),n("OutboundLink")],1),t._v(" 文件进行安装")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意下载不同的版本，本机 CentOS 7")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://centos7.iuscommunity.org/ius-release.rpm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装rpm文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" -ivh ius-release.rpm\n")])])]),n("p",[t._v("查看可安装的git安装包")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("repoquery --whatprovides "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git-0:1.8.3.1-13.el7.x86_64")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git2u-0:2.16.5-1.ius.centos7.x86_64")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git2u-0:2.16.2-1.ius.centos7.x86_64")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git2u-0:2.16.4-1.ius.centos7.x86_64")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git-0:1.8.3.1-14.el7_5.x86_64")]),t._v("\n")])])]),n("p",[t._v("卸载 "),n("code",[t._v("1.8.3")]),t._v(" 的 "),n("code",[t._v("git")]),t._v("，安装 "),n("code",[t._v("2.16.5")]),t._v(" 的 "),n("code",[t._v("git")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载老的版本")]),t._v("\nyum remove "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装新的版本")]),t._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" git2u\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);