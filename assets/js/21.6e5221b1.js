(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{396:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[t._v("#")]),t._v(" Basic")]),t._v(" "),a("h3",{attrs:{id:"set-username-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-username-contract"}},[t._v("#")]),t._v(" Set username (contract)")]),t._v(" "),a("p",[t._v("Prize: 5 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secondSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("username")])]),t._v(" "),a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])]),t._v(" "),a("tr",[a("td",[t._v("secondSecret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("gny account second password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h3",{attrs:{id:"lock-account-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock-account-contract"}},[t._v("#")]),t._v(" Lock account (contract)")]),t._v(" "),a("p",[t._v("Prize: 0.1 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockAccount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("the height to be locked")])]),t._v(" "),a("tr",[a("td",[t._v("amount")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("the amount to be locked")])]),t._v(" "),a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h3",{attrs:{id:"unlock-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unlock-account"}},[t._v("#")]),t._v(" Unlock account")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlockAccount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h3",{attrs:{id:"register-as-a-delegate-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-as-a-delegate-contract"}},[t._v("#")]),t._v(" Register as a delegate (contract)")]),t._v(" "),a("p",[t._v("Prize: 100 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerDelegate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h3",{attrs:{id:"create-a-transaction-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-transaction-contract"}},[t._v("#")]),t._v(" Create a transaction (contract)")]),t._v(" "),a("p",[t._v("Prize: 0.1 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  recipient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secondeSecret\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("GNY account password")])]),t._v(" "),a("tr",[a("td",[t._v("amount")]),t._v(" "),a("td",[t._v("integer")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("amount，between 1 and 10000000000000000")])]),t._v(" "),a("tr",[a("td",[t._v("recipientId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("recipient's address, minimum:1")])]),t._v(" "),a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("message with the transaction")])]),t._v(" "),a("tr",[a("td",[t._v("secondSecret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("sender's second password (must fit the BIP39 standard), the length should be between 1 and 100")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h3",{attrs:{id:"vote-for-a-list-of-keys-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vote-for-a-list-of-keys-contract"}},[t._v("#")]),t._v(" Vote for a list of keys (contract)")]),t._v(" "),a("p",[t._v("Prize: 0.1 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("usernames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secondSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("usernames")]),t._v(" "),a("td",[t._v("string[]")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("list of usernames")])]),t._v(" "),a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])]),t._v(" "),a("tr",[a("td",[t._v("secondSecret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("gny account second password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h3",{attrs:{id:"unvote-for-a-list-of-keys-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unvote-for-a-list-of-keys-contract"}},[t._v("#")]),t._v(" Unvote for a list of keys (contract)")]),t._v(" "),a("p",[t._v("Prize: 0.1 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unvote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("usernames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secondSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("usernames")]),t._v(" "),a("td",[t._v("string[]")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("list of usernames")])]),t._v(" "),a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])]),t._v(" "),a("tr",[a("td",[t._v("secondSecret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("gny account second password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h2",{attrs:{id:"user-defined-asset-uia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-asset-uia"}},[t._v("#")]),t._v(" User Defined Asset UIA")]),t._v(" "),a("h3",{attrs:{id:"register-asset-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-asset-contract"}},[t._v("#")]),t._v(" Register asset (contract)")]),t._v(" "),a("p",[t._v("Prize: 500 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Uia"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAsset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maximum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  precision"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secondSecret\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("the currency name to be registered")])]),t._v(" "),a("tr",[a("td",[t._v("desc")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("a descripition about the currency")])]),t._v(" "),a("tr",[a("td",[t._v("maximum")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("maximum number of the currency")])]),t._v(" "),a("tr",[a("td",[t._v("precision")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("precision of the currency")])]),t._v(" "),a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])]),t._v(" "),a("tr",[a("td",[t._v("secondSecret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("gny account second password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])]),t._v(" "),a("h3",{attrs:{id:"register-as-an-issuer-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-as-an-issuer-contract"}},[t._v("#")]),t._v(" Register as an issuer (contract)")]),t._v(" "),a("p",[t._v("Prize: 100 GNY")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@gny/client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Uia"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerIssuer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secondSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Request Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("the currency name to be registered")])]),t._v(" "),a("tr",[a("td",[t._v("desc")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("a descripition about the currency")])]),t._v(" "),a("tr",[a("td",[t._v("secret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("gny account password")])]),t._v(" "),a("tr",[a("td",[t._v("secondSecret")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("gny account second password")])])])]),t._v(" "),a("p",[t._v("Response Parameter Description:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("true: response data return successfully")])]),t._v(" "),a("tr",[a("td",[t._v("transactionId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("transaction id")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);