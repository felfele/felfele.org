(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return N});n(49);var M=n(7),i=n.n(M),a=n(0),r=n.n(a),s=n(151),L=n(166),u=n.n(L),o=n(165),c=n.n(o),l=n(160),w=n(152),j=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description"),n=u()(this,"props.data.allMarkdownRemark.edges");return r.a.createElement(l.a,{location:this.props.location,title:e},r.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:"Blog | "+e}),r.a.createElement("h2",null,"Blog"),n.map(function(e){var t=e.node,n=u()(t,"frontmatter.title")||t.frontmatter.path;return r.a.createElement("div",{key:t.frontmatter.path},r.a.createElement("h3",{style:{marginBottom:Object(w.a)(.25)}},r.a.createElement(s.Link,{style:{boxShadow:"none"},to:t.frontmatter.path},n)),r.a.createElement("small",null,t.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(r.a.Component);t.default=j;var N="3203403559"},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return j}),n.d(t,"StaticQueryContext",function(){return l}),n.d(t,"StaticQuery",function(){return w});var M=n(0),i=n.n(M),a=n(4),r=n.n(a),s=n(150),L=n.n(s);n.d(t,"Link",function(){return L.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(154),o=n.n(u);n.d(t,"PageRenderer",function(){return o.a});var c=n(34);n.d(t,"parsePath",function(){return c.a});var l=i.a.createContext({}),w=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function j(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}w.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return L}),n.d(t,"b",function(){return u});var M=n(161),i=n.n(M),a=n(162),r=n.n(a);r.a.headerFontFamily=["Young Serif"],r.a.bodyFontFamily=["Nunito Sans"],r.a.overrideThemeStyles=function(){return{"a,h1,h2,h3,p,div":{boxShadow:"none",color:"#6200EA"},a:{fontWeight:"bold"},"h1,h2,h3":{fontFamily:"YoungSerif"},"h2,h3,p,div":{fontWeight:300},div:{lineHeight:1.35}}};var s=new i.a(r.a);var L=s.rhythm,u=s.scale},153:function(e,t,n){"use strict";n.d(t,"a",function(){return j});var M=n(7),i=n.n(M),a=n(0),r=n.n(a),s=n(151),L=(n(163),n(164),n(152)),u=n(158),o=n.n(u),c=n(156),l=n.n(c),w=n(155),j=650,N=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",marginLeft:"auto",marginRight:"auto",maxWidth:Object(L.a)(36)}},r.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:80,maxWidth:Object(L.a)(40)}},r.a.createElement(s.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("img",{src:o.a,style:{width:100,marginBottom:0,fill:"#6200EA"}})),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}},r.a.createElement(w.a,{icon:l.a,target:"https://app.felfele.org",label:"Get the app"}),r.a.createElement(w.a,{target:"/donate",label:"Donate"}))))},t}(a.Component);t.b=N},154:function(e,t,n){var M;e.exports=(M=n(157))&&M.default||M},155:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var M=n(0),i=n.n(M),a=n(151),r=function(e){return/^\/(?!\/)/.test(e.target)?i.a.createElement(u,{target:e.target},i.a.createElement(s,e)):i.a.createElement(L,{target:e.target},i.a.createElement(s,e))},s=function(e){var t=e.icon,n=e.label,M=(e.target,e.border);return i.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",wrap:"no-wrap",border:M?"solid 1px rgba(98, 0, 234, 0.25)":"",padding:M?12:0,margin:6,fontSize:16}},i.a.createElement("img",{src:t,height:16,style:{paddingRight:4,margin:0,color:"#6200EA"}}),n)},L=function(e){return i.a.createElement("a",{href:e.target},e.children)},u=function(e){return i.a.createElement(a.Link,{to:e.target},e.children)}},156:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDEyIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS00IDBoMjB2MjBILTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzYyMDBFQSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuMTY3Ljg0MkwxLjgzMy44MzNDLjkxNy44MzMuMTY3IDEuNTgzLjE2NyAyLjV2MTVjMCAuOTE3Ljc1IDEuNjY3IDEuNjY2IDEuNjY3aDguMzM0Yy45MTYgMCAxLjY2Ni0uNzUgMS42NjYtMS42Njd2LTE1YzAtLjkxNy0uNzUtMS42NTgtMS42NjYtMS42NTh6bTAgMTQuOTkxSDEuODMzVjQuMTY3aDguMzM0djExLjY2NnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},157:function(e,t,n){"use strict";n.r(t);n(33);var M=n(0),i=n.n(M),a=n(4),r=n.n(a),s=n(48),L=n(2),u=function(e){var t=e.location,n=L.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=u},158:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzM3LjYgNDAwIj48dGl0bGU+QXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMzAwYTUwLDUwLDAsMSwwLDUwLDUwVjMwMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNMzUwLDBINTBhNTAsNTAsMCwwLDAsMCwxMDBIMzAwVjM1MGE1MCw1MCwwLDAsMCwxMDAsMFY1MEE1MCw1MCwwLDAsMCwzNTAsMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMTUwYTUwLDUwLDAsMCwwLDAsMTAwSDE1MFYzNTBhNTAsNTAsMCwwLDAsMTAwLDBWMTUwWiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik01MDguNTcsMzQwLjE4cS05LTktOS0yMy42MXYtMjM0cTAtMTQuNjIsNy45NC0yMi41NnQyMi41Ni03Ljk0SDY3My44MnExNS44NywwLDIzLjQsNi4yN1Q3MDQuNzQsNzhxMCwxMy03LjUyLDE5LjIydC0yMy40LDYuMjdINTYzLjkzdjY3LjY5SDY2NS40N3ExNS44NywwLDIzLjQsNi4yN3Q3LjUyLDE5LjY0cTAsMTMtNy41MiwxOS4yMnQtMjMuNCw2LjI3SDU2My45M3Y5NHEwLDE1LTguNTYsMjMuODJ0LTIzLjE5LDguNzdRNTE3LjU1LDM0OS4xNiw1MDguNTcsMzQwLjE4WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik05MDcuNiwyOTIuMzRxNS4yMiw2LjY5LDUuMjIsMTcuMTNhMjIuNzIsMjIuNzIsMCwwLDEtNC4xOCwxMy4xNiwzMy43NywzMy43NywwLDAsMS0xMS43LDEwLjI0LDE0OS41NCwxNDkuNTQsMCwwLDEtMzMsMTIuMzIsMTQxLDE0MSwwLDAsMS0zNC42OCw0LjhxLTMzLjQzLDAtNTguMjktMTNhOTAuNjIsOTAuNjIsMCwwLDEtMzguMjMtMzdxLTEzLjM4LTI0LTEzLjM3LTU2LjYxLDAtMzEuMzQsMTMtNTUuNTdhOTUsOTUsMCwwLDEsMzUuOTMtMzcuODFxMjMtMTMuNTcsNTIuMjMtMTMuNTgsMjgsMCw0OS4xLDEyLjMzdDMyLjgsMzUuMXExMS42OSwyMi43OCwxMS43LDUzLjI3LDAsOS4yLTQuMzksMTRUODk3LjM2LDI1NmgtMTE3cTIuOTIsMjQuNjYsMTUsMzUuNzN0MzQuNjgsMTEuMDdhNzQuNTEsNzQuNTEsMCwwLDAsMjEuNzMtMi45MiwyMDkuMjgsMjA5LjI4LDAsMCwwLDIxLjMxLTcuOTRxNS44NS0yLjUxLDExLjI4LTQuMzlhMjkuODcsMjkuODcsMCwwLDEsOS42MS0xLjg4QTE2LjQ2LDE2LjQ2LDAsMCwxLDkwNy42LDI5Mi4zNFpNNzkzLjMyLDE5MS40NHEtMTAuODcsMTEuNS0xMywzMy4yMkg4NjFxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTgwNC4xOCwxNzkuOTQsNzkzLjMyLDE5MS40NFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNOTYxLjA3LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDk4My44NSw1MHExMy4zNywwLDIyLjM1LDcuNTJ0OSwyMi4xNFYzMTkuNXEwLDE0LjYzLTksMjIuMTR0LTIyLjM1LDcuNTJROTcwLjA2LDM0OS4xNiw5NjEuMDcsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMTUwLjU2LDEwOC41cS03LjUyLDkuMi03LjUyLDI1LjkxdjcuMWgyOS4yNXEyOC40MSwwLDI4LjQxLDIzLjgyLDAsMjMuNDEtMjguNDEsMjMuNEgxMTQzVjMxOS4wOHEwLDE0LjYzLTksMjIuMTR0LTIyLjM2LDcuNTJxLTEzLjc5LDAtMjIuNzctNy41MnQtOS0yMi4xNFYxODguNzJoLTE2LjcxcS0yOCwwLTI4LTIzLjQsMC0yMy44MSwyOC0yMy44MmgxNi43MXEwLTQwLjExLDIyLjE0LTYzLjA5dDYxLTI1LjkxbDEwLjg2LS44NCw3LjUyLS40MnEyOC44MywwLDI4LjgzLDIyLjE1LDAsMjEuNzMtMjQuMjQsMjMuODJsLTEwLjg2Ljg0UTExNTguMDcsOTkuMywxMTUwLjU2LDEwOC41WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMzk2Ljg3LDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTM5Ni44NywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTEyOTMuNDUsMTc5Ljk0LDEyODIuNTksMTkxLjQ0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNDUwLjM1LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDE0NzMuMTIsNTBxMTMuMzcsMCwyMi4zNSw3LjUydDksMjIuMTRWMzE5LjVxMCwxNC42My05LDIyLjE0dC0yMi4zNSw3LjUyUTE0NTkuMzMsMzQ5LjE2LDE0NTAuMzUsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNzMxLjEzLDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTczMS4xMywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTE2MjcuNzEsMTc5Ljk0LDE2MTYuODUsMTkxLjQ0WiIvPjwvZz48L2c+PC9zdmc+Cg=="},159:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxMjAgMjMiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNjIwMEVBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDIwLjE0NmEyLjc5NSAyLjc5NSAwIDAgMSAyLjc5NC0yLjc5M2gyLjc5NHYyLjc5M2EyLjc5NSAyLjc5NSAwIDAgMS01LjU4OCAwek0yLjc5NCA4Ljk3SDEzLjk3djExLjE3NmEyLjc5NSAyLjc5NSAwIDAgMS01LjU5IDB2LTUuNTg4SDIuNzk1YTIuNzk1IDIuNzk1IDAgMCAxIDAtNS41ODh6TTE5LjU1OS41ODhhMi43OTUgMi43OTUgMCAwIDEgMi43OTQgMi43OTR2MTYuNzY0YTIuNzk1IDIuNzk1IDAgMCAxLTUuNTg4IDBWNi4xNzZIMi43OTRhMi43OTUgMi43OTUgMCAwIDEgMC01LjU4OGgxNi43NjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},160:function(e,t,n){"use strict";n(33);var M=n(7),i=n.n(M),a=n(0),r=n.n(a),s=n(152),L=n(153),u=n(151),o=n(159),c=n.n(o),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:this.state.width>L.a?"":"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(36)}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:this.state.width>L.a?"row":"column",paddingBottom:50}},r.a.createElement("div",{style:w.sectionContainer},r.a.createElement("div",{style:w.sectionTitle},"PRODUCT"),r.a.createElement("div",{style:w.sectionContent},r.a.createElement(u.Link,{to:"/donate"},"Download for iOS"),r.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Download for Android"),r.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"))),r.a.createElement("div",{style:w.sectionContainer},r.a.createElement("div",{style:w.sectionTitle},"CONTRIBUTE"),r.a.createElement("div",{style:w.sectionContent},r.a.createElement(u.Link,{to:"/donate"},"Make a donation"),r.a.createElement(u.Link,{to:"/volunteer"},"Volunteer"))),r.a.createElement("div",{style:w.sectionContainer},r.a.createElement("div",{style:w.sectionTitle},"DEVELOPERS"),r.a.createElement("div",{style:w.sectionContent},r.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),r.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),r.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct"),r.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter"))),r.a.createElement("div",{style:w.sectionContainer},r.a.createElement("div",{style:w.sectionTitle},"ABOUT US"),r.a.createElement("div",{style:w.sectionContent},r.a.createElement(u.Link,{to:"/"},"Mission"),r.a.createElement(u.Link,{to:"/team"},"Core team"),r.a.createElement(u.Link,{to:"/blog"},"Blog"))),r.a.createElement("div",{style:w.sectionContainer},r.a.createElement("div",{style:w.sectionTitle},"LEGAL"),r.a.createElement("div",{style:w.sectionContent},r.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),r.a.createElement(u.Link,{to:"/privacy"},"Privacy Policy"))),r.a.createElement("div",{style:w.sectionContainer},r.a.createElement("div",{style:{width:this.state.width>L.a?200:100,display:"flex",justifyContent:"flex-end"}},r.a.createElement("img",{src:c.a,style:{marginBottom:0,fill:"#6200EA"}})))))},t}(a.Component),w={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(36)},sectionContainer:{display:"flex",flexDirection:"column",padding:20},sectionContent:{display:"flex",flexDirection:"column",fontWeight:600},sectionTitle:{paddingBottom:5}},j=function(){return r.a.createElement("div",{style:{height:1,backgroundColor:"rgba(98, 0, 234, 0.25)"}})},N=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",padding:10,maxWidth:Object(s.a)(36)},M=Object.assign({},n,t);return r.a.createElement("div",null,r.a.createElement("div",{style:M},r.a.createElement(L.b,null)),r.a.createElement(j,null),r.a.createElement("div",{style:M},e),r.a.createElement(j,null),r.a.createElement("div",{style:M},r.a.createElement(l,null)))},t}(r.a.Component);t.a=N}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-8547c23277c18cc4665d.js.map