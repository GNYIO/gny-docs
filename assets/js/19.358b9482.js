(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{330:function(s,e,a){s.exports=a.p+"assets/img/multiaddrs_publicIp_api_peers_info.ad6a7664.png"},563:function(s,e,a){"use strict";a.r(e);var n=a(26),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#configure"}},[s._v("Configure")]),n("ul",[n("li",[n("a",{attrs:{href:"#start-forging"}},[s._v("Start Forging")])]),n("li",[n("a",{attrs:{href:"#configure-public-ip"}},[s._v("Configure Public IP")])]),n("li",[n("a",{attrs:{href:"#configure-p2p-secret"}},[s._v("Configure P2P Secret")])]),n("li",[n("a",{attrs:{href:"#configure-p2p-peers"}},[s._v("Configure P2P Peers")])]),n("li",[n("a",{attrs:{href:"#configure-db-password"}},[s._v("Configure DB Password")])]),n("li",[n("a",{attrs:{href:"#configure-db-name"}},[s._v("Configure DB Name")])]),n("li",[n("a",{attrs:{href:"#configure-db-user"}},[s._v("Configure DB User")])]),n("li",[n("a",{attrs:{href:"#configure-db-host"}},[s._v("Configure DB Host")])]),n("li",[n("a",{attrs:{href:"#configure-db-port"}},[s._v("Configure DB Port")])]),n("li",[n("a",{attrs:{href:"#all-environment-variable-options"}},[s._v("All Environment Variable Options")])]),n("li",[n("a",{attrs:{href:"#all-available-options"}},[s._v("All available Options")])])])])])]),n("p"),s._v(" "),n("h1",{attrs:{id:"configure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[s._v("#")]),s._v(" Configure")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("In order to connect to the "),n("strong",[n("code",[s._v("testnet")])]),s._v(" be sure to use one of the following configurations:")]),s._v(" "),n("ul",[n("li",[n("code",[s._v('--peers="/ip4/45.76.215.117/tcp/4097/p2p/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5"')])]),s._v(" "),n("li",[n("code",[s._v("GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/p2p/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5")])])])]),s._v(" "),n("br"),s._v(" "),n("h2",{attrs:{id:"start-forging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-forging"}},[s._v("#")]),s._v(" Start Forging")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("Do not reuse your delegate secret on different GNY Blockchain networks ("),n("code",[s._v("localnet")]),s._v(", "),n("code",[s._v("testnet")]),s._v(", "),n("code",[s._v("mainnet")]),s._v("). Otherwise you will make yourself vulnerable to "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Replay_attack",target:"_blank",rel:"noopener noreferrer"}},[s._v("replay attacks"),n("OutboundLink")],1),s._v(".")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("In order to start forging you need to first register as delegate. Be sure to checkout our "),n("RouterLink",{attrs:{to:"/guide/"}},[s._v("Guides")]),s._v(" on how to register as "),n("code",[s._v("delegate")]),s._v(" and how to create a random "),n("code",[s._v("secret")]),s._v(".")],1)]),s._v(" "),n("ClientOnly",[n("GNYSecret")],1),s._v(" "),n("p",[s._v("In order to start forging please pass a secret or multiple secrets (comma separated) to the GNY Blockchain. This option is optional.")]),s._v(" "),n("p",[s._v("Change CLI arguments:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(' npm run start -- --secret="chief next globe deny try danger trust wet spoil away eight task"\n')])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Change your "),n("code",[s._v("docker-compose.yml")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("     - GNY_SECRET=chief next globe deny try danger trust wet spoil away eight task\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-public-ip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-public-ip"}},[s._v("#")]),s._v(" Configure Public IP")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("The "),n("strong",[s._v("publicIp")]),s._v(" option is mandatory on the "),n("code",[s._v("testnet")]),s._v(" and on the "),n("code",[s._v("mainnet")]),s._v(". If you don't set it then the node will automatically use its privateIp which which will make the p2p communication with other nodes not work.")])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("public ip")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(' npm run start -- --publicIP="20.188.42.0"\n')])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("public ip")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("\t  - GNY_PUBLIC_IP=20.188.42.0\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("After that the nodes own "),n("code",[s._v("public ip")]),s._v(" configuration should be checked with the HTTP API endpoint "),n("code",[s._v("/api/peers/info")]),s._v(". This endpoint displays information about the own node!")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(330),alt:"multiaddrs_publicIp_api_peers_info"}})]),s._v(" "),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-p2p-secret"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-p2p-secret"}},[s._v("#")]),s._v(" Configure P2P Secret")]),s._v(" "),n("ClientOnly",[n("P2PSecret")],1),s._v(" "),n("p",[s._v("The "),n("code",[s._v("p2p secret")]),s._v(" keeps the connection between peers secure. This is option is "),n("strong",[s._v("mandatory")]),s._v(".")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("p2p secret")]),s._v(" can be passed to the GNY node:")]),s._v(" "),n("ul",[n("li",[s._v("as argument: "),n("code",[s._v('--privateP2PKey="CAASqQkwggSlAgEA..."')])]),s._v(" "),n("li",[s._v("as environment variable: "),n("code",[s._v('GNY_P2P_SECRET="CAASqQkwggSlAgEA..."')])])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("p2p secret")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(' npm run start -- --privateP2PKey="CAASqQkwggSlAgEA..."\n')])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("p2p secret")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v('\t  - GNY_P2P_SECRET="CAASqQkwggSlAgEA..."\n')])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-p2p-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-p2p-peers"}},[s._v("#")]),s._v(" Configure P2P Peers")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("p2p peers")]),s._v(" option says to which peer(s) (comma separated) we should connect in the network. This option is optional")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("p2p peers")]),s._v(" option can be passed to the GNY node:")]),s._v(" "),n("ul",[n("li",[s._v("as argument: "),n("code",[s._v('--peers="/ip4/45.76.215.117/tcp/4097/p2p/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5"')])]),s._v(" "),n("li",[s._v("as environment variable: "),n("code",[s._v("GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/p2p/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5")])])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("p2p peers")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(' npm run start -- --peers="/ip4/45.76.215.117/tcp/4097/p2p/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5"\n')])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("p2p peers")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("\t  - GNY_P2P_PEERS=/ip4/45.76.215.117/tcp/4097/p2p/QmNT5ZNU8Nf9shpuz45phNHimUnsNZRj35B3ucSE3iKCk5\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-db-password"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-db-password"}},[s._v("#")]),s._v(" Configure DB Password")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbPassword")]),s._v(" option sets the password for the db to connect to.")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbPassword")]),s._v(" option can be passed to the GNY node:")]),s._v(" "),n("ul",[n("li",[s._v("as argument: "),n("code",[s._v("--dbPassword=docker")])]),s._v(" "),n("li",[s._v("as environment variable: "),n("code",[s._v("GNY_DB_PASSWORD=docker")])])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("dbPassword")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start -- --dbPassword=docker\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("dbPassword")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    - GNY_DB_PASSWORD=docker\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-db-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-db-name"}},[s._v("#")]),s._v(" Configure DB Name")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbDatabase")]),s._v(" configures the database name to which the GNY Blockchain should connect to.")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbDatabase")]),s._v(" option can be passed to the GNY node:")]),s._v(" "),n("ul",[n("li",[s._v("as argument: "),n("code",[s._v("--dbDatabase=postgres")])]),s._v(" "),n("li",[s._v("as environment variable: "),n("code",[s._v("GNY_DB_DATABASE=postgres")])])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("dbDatabase")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start -- --dbDatabase=postgres\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("dbDatabase")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    - GNY_DB_DATABASE=postgres\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-db-user"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-db-user"}},[s._v("#")]),s._v(" Configure DB User")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbUser")]),s._v(" sets the database user with which the GNY Blockchain should connect to.")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbUser")]),s._v(" option can be passed to the GNY node:")]),s._v(" "),n("ul",[n("li",[s._v("as argument: "),n("code",[s._v("--dbUser=postgres")])]),s._v(" "),n("li",[s._v("as environment variable: "),n("code",[s._v("GNY_DB_USER=postgres")])])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("dbUser")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start -- --dbUser=postgres\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("dbUser")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    - GNY_DB_USER=postgres\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-db-host"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-db-host"}},[s._v("#")]),s._v(" Configure DB Host")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbHost")]),s._v(" sets the database host to which the GNY Blockchain should connect to.")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbHost")]),s._v(" option can be passed to the GNY node:")]),s._v(" "),n("ul",[n("li",[s._v("as argument: "),n("code",[s._v("--dbHost=db1")])]),s._v(" "),n("li",[s._v("as environment variable: "),n("code",[s._v("GNY_DB_HOST=db1")])])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("dbHost")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start -- --dbUser=db1\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("dbHost")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    - GNY_DB_HOST=db1\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"configure-db-port"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-db-port"}},[s._v("#")]),s._v(" Configure DB Port")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbPort")]),s._v(" sets the database port to which the GNY Blockchain should connect to.")]),s._v(" "),n("p",[s._v("The "),n("code",[s._v("dbPort")]),s._v(" option can be passed to the GNY node:")]),s._v(" "),n("ul",[n("li",[s._v("as argument: "),n("code",[s._v("--dbPort=5432")])]),s._v(" "),n("li",[s._v("as environment variable: "),n("code",[s._v("GNY_DB_PORT=5432")])])]),s._v(" "),n("p",[s._v("Pass "),n("code",[s._v("dbPort")]),s._v(" as argument:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" npm run start -- --dbPort=5432\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Pass "),n("code",[s._v("dbPort")]),s._v(" as environment variable:")]),s._v(" "),n("div",{staticClass:"language-diff line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("services:\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" # db1 service omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v(" node1:\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   # other keys omitted\n")]),n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   environment:\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("    - GNY_DB_Port=5432\n")])])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("br"),s._v(" "),n("h2",{attrs:{id:"all-environment-variable-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#all-environment-variable-options"}},[s._v("#")]),s._v(" All Environment Variable Options")]),s._v(" "),n("h2",{attrs:{id:"all-available-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#all-available-options"}},[s._v("#")]),s._v(" All available Options")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Options:\n  -V, --version            output the version number\n  --config <path>          Config file path\n  --port <port>            Listening port number\n  --address <ip>           Listening host name or ip\n  --genesisblock <path>    Genesisblock path\n  --peers [peers...]       Peers list\n  --log <level>            Log level: log|trace|debug|info|warn|error|fatal\n  --base <dir>             Base directory\n  --privateP2PKey <key>    Private P2P Key (base64 encoded) - overrides p2p_key.json file\n  --secret [secret...]     comma separated secrets\n  --publicIP <ip>          Public IP of own server, default private IP\n  --network <network>      Must be: localnet | testnet | mainnet\n  --dbPassword <password>\n  --dbDatabase <database>\n  --dbUser <user>\n  --dbHost <host>\n  --dbPort <port>\n  -h, --help               output usage information\n\nEnvironment Variables:\n  GNY_NETWORK=<network>       Must be: localnet | testnet | mainnet\n  GNY_PORT=<port>             Listening port number\n  GNY_LOG_LEVEL=<level>       log|trace|debug|info|warn|error|fatal\n  GNY_P2P_SECRET=<key>        Private P2P Key (base64 encoded) - overrides p2p_key.json file\n  GNY_SECRET=[secret...]      comma separated secrets\n  GNY_PUBLIC_IP=<ip>          Public IP of own server, default private IP\n  GNY_P2P_PEERS=[peers...]    comma separated peers\n  GNY_ADDRESS=<address>       Listening host name or ip\n  GNY_DB_PASSWORD=<password>  db password\n  GNY_DB_DATABASE=<database>  db name\n  GNY_DB_USER=<user>          db user\n  GNY_DB_HOST=<host>          db host\n  GNY_DB_PORT=<port>          db port\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])])],1)}),[],!1,null,null,null);e.default=t.exports}}]);