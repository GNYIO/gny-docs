(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{432:function(e,s,a){e.exports=a.p+"assets/img/simple-db.6b8460ed.png"},433:function(e,s,a){e.exports=a.p+"assets/img/basic-node.92741380.png"},434:function(e,s,a){e.exports=a.p+"assets/img/docker-db-image.250eb848.png"},435:function(e,s,a){e.exports=a.p+"assets/img/docker-node-image.f1287be5.png"},436:function(e,s,a){e.exports=a.p+"assets/img/docker-db-image-multiple-instances.0d12a231.png"},437:function(e,s,a){e.exports=a.p+"assets/img/docker-node-image-multiple-instances.90467e18.png"},438:function(e,s,a){e.exports=a.p+"assets/img/docker-compose.9df66f54.png"},439:function(e,s,a){e.exports=a.p+"assets/img/docker-compose-lifecycle.94838362.png"},440:function(e,s,a){e.exports=a.p+"assets/img/docker_compose_up_console.6c27009c.png"},441:function(e,s,a){e.exports=a.p+"assets/img/docker_compose_up_background.36183dde.png"},442:function(e,s,a){e.exports=a.p+"assets/img/docker_compose_start_error.ae0f9927.png"},443:function(e,s,a){e.exports=a.p+"assets/img/docker_compose_start_success.f1238ba1.png"},444:function(e,s,a){e.exports=a.p+"assets/img/docker_compose_ps.bc6eca1d.png"},445:function(e,s,a){e.exports=a.p+"assets/img/docker_compose_stop.efd0d4f5.png"},538:function(e,s,a){"use strict";a.r(s);var t=a(7),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"manage-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-node"}},[e._v("#")]),e._v(" Manage node")]),e._v(" "),t("h2",{attrs:{id:"with-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-docker"}},[e._v("#")]),e._v(" With Docker")]),e._v(" "),t("p",[e._v("This is only a short summary from the fantastic "),t("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs.docker.com"),t("OutboundLink")],1),e._v(" documentation website. Please visit it for more indepth information.")]),e._v(" "),t("h1",{attrs:{id:"visualization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visualization"}},[e._v("#")]),e._v(" Visualization")]),e._v(" "),t("p",[t("code",[e._v("docker-compose")]),e._v(" bundles many services that are started together and interact together. In our case we have the services: GNY Blockchain Node (a "),t("code",[e._v("node.js")]),e._v(" app) and a database ("),t("code",[e._v("postgres")]),e._v(") service. Each of this services is a separate "),t("a",{attrs:{href:"https://www.docker.com/resources/what-container",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("docker container")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:a(432),alt:"postgresdb"}}),e._v(" "),t("img",{attrs:{src:a(433),alt:"GNY Blockchain"}})]),e._v(" "),t("p",[e._v("This two services are based off their respective "),t("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/images/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker images"),t("OutboundLink")],1),e._v(" "),t("code",[e._v("postgres:9.6.12")]),e._v(" and "),t("code",[e._v("gny/blockchain")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"docker-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-images"}},[e._v("#")]),e._v(" Docker Images")]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("docker image")]),e._v(" is like a cookie cutter which can cut cookies (instantiate containers). From one image we can create exactly the same program, without the need to install or provide all libraries a program depends upon.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(434),alt:"docker-db-image"}}),e._v(" "),t("img",{attrs:{src:a(435),alt:"docker-node-image"}})]),e._v(" "),t("p",[e._v("From an image we can create multiple containers.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}}),e._v(" "),t("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:a(436),alt:"docker-db-image-multiple-instances"}})]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:a(437),alt:"docker-node-image-multiple-instances"}})])])])]),e._v(" "),t("h3",{attrs:{id:"docker-networks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-networks"}},[e._v("#")]),e._v(" Docker networks")]),e._v(" "),t("p",[t("code",[e._v("docker-compose")]),e._v(" creates automatically a network where only the services inside the "),t("code",[e._v("docker-compose")]),e._v(" file can communicate. This is represented by the grey box. We can configure which service ports from the containers are visible on the host machine. The "),t("code",[e._v("postgres")]),e._v(" database port is not reachable from the host machine. Only the GNY Blockchain service can access the "),t("code",[e._v("postgres")]),e._v(" database service. The GNY Blockchain ports ("),t("code",[e._v("4096")]),e._v(" and "),t("code",[e._v("4097")]),e._v(") are mapped to the host machine.")]),e._v(" "),t("p",[e._v("This is the beauty of "),t("code",[e._v("docker-compose")]),e._v(". We can specify all services that should work together and with one command we can start|stop|pause all services.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(438),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"docker-compose-lifecycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-lifecycle"}},[e._v("#")]),e._v(" Docker-Compose Lifecycle")]),e._v(" "),t("p",[t("img",{attrs:{src:a(439),alt:""}})]),e._v(" "),t("h1",{attrs:{id:"docker-compose-101"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-101"}},[e._v("#")]),e._v(" Docker-Compose 101")]),e._v(" "),t("h2",{attrs:{id:"create-and-start-all-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-and-start-all-services"}},[e._v("#")]),e._v(" Create and Start all services")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker-compose --file docker-compose.yml up\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("This command will print all container messages to screen:\n"),t("img",{attrs:{src:a(440),alt:"docker_compose_up_console_output"}})]),e._v(" "),t("h2",{attrs:{id:"create-and-start-all-services-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-and-start-all-services-2"}},[e._v("#")]),e._v(" Create and Start all services")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker-compose --file docker-compose.yml up --detach\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("This command runs all services in background. See "),t("code",[e._v("logs")]),e._v(" command to see the logs of the services in the background.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(441),alt:"docker_compose_up_console_background"}})]),e._v(" "),t("h2",{attrs:{id:"start-all-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-all-services"}},[e._v("#")]),e._v(" Start all services")]),e._v(" "),t("p",[e._v("This can only be executed if the docker-compose "),t("code",[e._v("network")]),e._v(" and all "),t("code",[e._v("containers")]),e._v(" were created previously. For example after an "),t("code",[e._v("docker-compose stop")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker-compose --file docker-compose.yml start\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(442),alt:"docker_compose_start_error"}})]),e._v(" "),t("p",[t("img",{attrs:{src:a(443),alt:"docker_compose_start_success"}})]),e._v(" "),t("h2",{attrs:{id:"check-status-of-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-status-of-services"}},[e._v("#")]),e._v(" Check status of services")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker-compose --file docker-compose.yml "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(444),alt:"docker_compose_ps"}})]),e._v(" "),t("h2",{attrs:{id:"stop-all-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-all-services"}},[e._v("#")]),e._v(" Stop all services")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker-compose --file docker-compose.yml stop\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(445),alt:"docker_compose_stop"}})]),e._v(" "),t("h2",{attrs:{id:"stop-and-remove"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-and-remove"}},[e._v("#")]),e._v(" Stop and Remove")]),e._v(" "),t("p",[e._v("This removes the docker-compose "),t("code",[e._v("network")]),e._v(" and "),t("code",[e._v("volumes")]),e._v(" that were created.")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker-compose --file docker-compose.yml down --volumes\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("br"),e._v(" "),t("h2",{attrs:{id:"docker-101"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-101"}},[e._v("#")]),e._v(" Docker 101")]),e._v(" "),t("h2",{attrs:{id:"images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#images"}},[e._v("#")]),e._v(" Images")]),e._v(" "),t("h3",{attrs:{id:"show-all-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-all-images"}},[e._v("#")]),e._v(" Show all images")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"get-bash-into-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-bash-into-image"}},[e._v("#")]),e._v(" Get bash into image")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker run -it "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("imageId"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /bin/bash\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#containers"}},[e._v("#")]),e._v(" Containers")]),e._v(" "),t("h3",{attrs:{id:"show-status-of-running-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-status-of-running-containers"}},[e._v("#")]),e._v(" Show status of running containers")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" --all\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"show-status-of-containers-of-a-docker-compose-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-status-of-containers-of-a-docker-compose-file"}},[e._v("#")]),e._v(" Show status of containers of a docker-compose file")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker-compose --file docker-compose.yml "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"bash-into-running-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-into-running-container"}},[e._v("#")]),e._v(" Bash into running container")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("containerId"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /bin/bash\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" Delete")]),e._v(" "),t("h3",{attrs:{id:"stop-all-running-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-all-running-containers"}},[e._v("#")]),e._v(" Stop all running containers")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" --all --quiet"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"delete-all-stopped-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-stopped-containers"}},[e._v("#")]),e._v(" Delete all stopped containers")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" --all --quiet"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("br")])}),[],!1,null,null,null);s.default=r.exports}}]);