(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{392:function(a,s,e){"use strict";e.r(s);var t=e(17),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),e("h2",{attrs:{id:"run-blockchain-and-database-in-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-blockchain-and-database-in-docker"}},[a._v("#")]),a._v(" Run Blockchain and Database in Docker")]),a._v(" "),e("p",[a._v("First verify that you executed the Installation process.")]),a._v(" "),e("p",[a._v("The following command builds the image for the GNY Blockchain node and the postgres database:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker-compose build\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Then start both services:")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker-compose up\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("br"),a._v(" "),e("h2",{attrs:{id:"helpful-docker-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helpful-docker-commands"}},[a._v("#")]),a._v(" Helpful Docker Commands")]),a._v(" "),e("h3",{attrs:{id:"show-all-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-all-images"}},[a._v("#")]),a._v(" Show all images")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"bash-into-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash-into-image"}},[a._v("#")]),a._v(" Bash into image")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker run -it 99f5bbbb1a69 /bin/bash\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#containers"}},[a._v("#")]),a._v(" Containers")]),a._v(" "),e("h3",{attrs:{id:"show-all-running-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-all-running-containers"}},[a._v("#")]),a._v(" Show all running containers")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" --all\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"bash-into-running-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash-into-running-container"}},[a._v("#")]),a._v(" Bash into running container")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it 650e76a2d377 /bin/bash\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"delete-everything"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-everything"}},[a._v("#")]),a._v(" Delete everything")]),a._v(" "),e("h3",{attrs:{id:"stop-all-running-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-all-running-containers"}},[a._v("#")]),a._v(" Stop all running containers")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker stop "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" --all --quiet"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"delete-all-stopped-containers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-stopped-containers"}},[a._v("#")]),a._v(" Delete all stopped containers")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" --all --quiet"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("br")])}),[],!1,null,null,null);s.default=n.exports}}]);