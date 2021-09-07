(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{538:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"get-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[s._v("#")]),s._v(" Get started")]),s._v(" "),a("p",[s._v("In order to participate in the GNY network you will need to run a Blockchain node. It helps to decentralize the network in case other nodes drop out. For producing blocks you need to run a Blockchain node and activate the block generation by supplying your Delegate "),a("code",[s._v("secret")]),s._v(".")]),s._v(" "),a("p",[s._v("A Blockchain node consists of a "),a("code",[s._v("node.js")]),s._v(" app and a "),a("code",[s._v("postgres")]),s._v(" database.")]),s._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[s._v("#")]),s._v(" Prerequisites")]),s._v(" "),a("p",[s._v("We support currently only Linux. Please use Ubuntu or one of its derivates:")]),s._v(" "),a("ul",[a("li",[s._v("Ubuntu 18.04.3 LTS")]),s._v(" "),a("li",[s._v("Ubuntu 19.10")])]),s._v(" "),a("h3",{attrs:{id:"install-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-git"}},[s._v("#")]),s._v(" Install Git")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Install Git from the "),a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git Website"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"install-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-node-js"}},[s._v("#")]),s._v(" Install node.js")]),s._v(" "),a("p",[s._v("Install "),a("code",[s._v("node.js")]),s._v(" with "),a("code",[s._v("nvm")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME-}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('/.nvm"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME}")]),s._v('/nvm"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("If this didn't worked please visit the "),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("nvm website")]),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Install "),a("code",[s._v("node.js")]),s._v(" version "),a("code",[s._v("v10.16.2")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" v10.16.2\nnvm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" default\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"install-postgresql-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-postgresql-10"}},[s._v("#")]),s._v(" Install PostgreSQL 10")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Import repo key")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" ca-certificates gnupg\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://www.postgresql.org/media/keys/ACCC4CF8.asc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add PostgreSQL apt repo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo \"deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"setup-postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-postgresql"}},[s._v("#")]),s._v(" Setup PostgreSQL")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i -u postgres psql -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"CREATE USER postgres2 WITH PASSWORD 'docker' CREATEDB;\"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i -u postgres psql -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CREATE DATABASE postgres2 WITH OWNER postgres2;"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"install-necessary-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-necessary-dependencies"}},[s._v("#")]),s._v(" Install necessary dependencies:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" ntp "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" libssl-dev openssl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" gcc g++ autoconf automake python build-essential -y\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libtool libtool-bin -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"clone-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-repository"}},[s._v("#")]),s._v(" Clone Repository")]),s._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"mainnet"}},[a("p",[s._v("Clone the repository and checkout the "),a("code",[s._v("mainnet")]),s._v(" branch:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/gnyio/gny "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" gny\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout mainnet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("Tab",{attrs:{label:"testnet"}},[a("p",[s._v("Clone the repository and checkout the "),a("code",[s._v("testnet")]),s._v(" branch:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/gnyio/gny "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" gny\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout testnet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])],1),s._v(" "),a("h2",{attrs:{id:"compile-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-project"}},[s._v("#")]),s._v(" Compile project")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run lerna:bootstrap "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run lerna:tsc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);