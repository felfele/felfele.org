(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,i){"use strict";i.r(t),i.d(t,"query",function(){return g});i(49);var a=i(7),n=i.n(a),r=i(0),s=i.n(r),o=i(151),l=i(166),u=i.n(l),M=i(165),c=i.n(M),d=i(239),L=i.n(d),w=i(160),f=i(152),y=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description"),i=u()(this,"props.data.allMarkdownRemark.edges");return s.a.createElement(w.a,{location:this.props.location,title:e},s.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:"Blog | "+e}),s.a.createElement("h2",null,"Blog"),i.map(function(e){var t=e.node,i=u()(t,"frontmatter.title")||t.frontmatter.path;return s.a.createElement("div",{key:t.frontmatter.path},s.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},s.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.frontmatter.path},i)),null!=t.frontmatter.featuredImage&&s.a.createElement("div",{style:{maxWidth:500,paddingTop:20,paddingBottom:20}},s.a.createElement(L.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid})),s.a.createElement("small",null,t.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(s.a.Component);t.default=y;var g="2325747023"},151:function(e,t,i){"use strict";i.r(t),i.d(t,"graphql",function(){return w}),i.d(t,"StaticQueryContext",function(){return d}),i.d(t,"StaticQuery",function(){return L});var a=i(0),n=i.n(a),r=i(4),s=i.n(r),o=i(150),l=i.n(o);i.d(t,"Link",function(){return l.a}),i.d(t,"withPrefix",function(){return o.withPrefix}),i.d(t,"navigate",function(){return o.navigate}),i.d(t,"push",function(){return o.push}),i.d(t,"replace",function(){return o.replace}),i.d(t,"navigateTo",function(){return o.navigateTo});var u=i(154),M=i.n(u);i.d(t,"PageRenderer",function(){return M.a});var c=i(34);i.d(t,"parsePath",function(){return c.a});var d=n.a.createContext({}),L=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function w(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}L.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,i){"use strict";i.d(t,"a",function(){return l}),i.d(t,"b",function(){return u});var a=i(161),n=i.n(a),r=i(162),s=i.n(r);s.a.headerFontFamily=["Young Serif"],s.a.bodyFontFamily=["Nunito Sans"],s.a.overrideThemeStyles=function(){return{"a,h1,h2,h3,p,div":{boxShadow:"none",color:"#6200EA"},a:{fontWeight:"bold"},"h1,h2,h3":{fontFamily:"YoungSerif"},"h2,h3,p,div":{fontWeight:300},div:{lineHeight:1.35}}};var o=new n.a(s.a);var l=o.rhythm,u=o.scale},153:function(e,t,i){"use strict";i.d(t,"a",function(){return w});var a=i(7),n=i.n(a),r=i(0),s=i.n(r),o=i(151),l=(i(163),i(164),i(152)),u=i(158),M=i.n(u),c=i(156),d=i.n(c),L=i(155),w=650,f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return s.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(36)}},s.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:80,maxWidth:Object(l.a)(40)}},s.a.createElement(o.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("img",{src:M.a,style:{width:100,marginBottom:0,fill:"#6200EA"}})),s.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}},s.a.createElement(L.a,{icon:d.a,target:"https://app.felfele.org",label:"Get the app"}),s.a.createElement(L.a,{target:"/donate",label:"Donate"}))))},t}(r.Component);t.b=f},154:function(e,t,i){var a;e.exports=(a=i(157))&&a.default||a},155:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var a=i(0),n=i.n(a),r=i(151),s=function(e){return/^\/(?!\/)/.test(e.target)?n.a.createElement(u,{target:e.target},n.a.createElement(o,e)):n.a.createElement(l,{target:e.target},n.a.createElement(o,e))},o=function(e){var t=e.icon,i=e.label,a=(e.target,e.border);return n.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",wrap:"no-wrap",border:a?"solid 1px rgba(98, 0, 234, 0.25)":"",padding:a?12:0,margin:6,fontSize:16}},n.a.createElement("img",{src:t,height:16,style:{paddingRight:4,margin:0,color:"#6200EA"}}),i)},l=function(e){return n.a.createElement("a",{href:e.target},e.children)},u=function(e){return n.a.createElement(r.Link,{to:e.target},e.children)}},156:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDEyIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS00IDBoMjB2MjBILTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzYyMDBFQSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuMTY3Ljg0MkwxLjgzMy44MzNDLjkxNy44MzMuMTY3IDEuNTgzLjE2NyAyLjV2MTVjMCAuOTE3Ljc1IDEuNjY3IDEuNjY2IDEuNjY3aDguMzM0Yy45MTYgMCAxLjY2Ni0uNzUgMS42NjYtMS42Njd2LTE1YzAtLjkxNy0uNzUtMS42NTgtMS42NjYtMS42NTh6bTAgMTQuOTkxSDEuODMzVjQuMTY3aDguMzM0djExLjY2NnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},157:function(e,t,i){"use strict";i.r(t);i(33);var a=i(0),n=i.n(a),r=i(4),s=i.n(r),o=i(48),l=i(2),u=function(e){var t=e.location,i=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:i},i.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},158:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzM3LjYgNDAwIj48dGl0bGU+QXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMzAwYTUwLDUwLDAsMSwwLDUwLDUwVjMwMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNMzUwLDBINTBhNTAsNTAsMCwwLDAsMCwxMDBIMzAwVjM1MGE1MCw1MCwwLDAsMCwxMDAsMFY1MEE1MCw1MCwwLDAsMCwzNTAsMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMTUwYTUwLDUwLDAsMCwwLDAsMTAwSDE1MFYzNTBhNTAsNTAsMCwwLDAsMTAwLDBWMTUwWiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik01MDguNTcsMzQwLjE4cS05LTktOS0yMy42MXYtMjM0cTAtMTQuNjIsNy45NC0yMi41NnQyMi41Ni03Ljk0SDY3My44MnExNS44NywwLDIzLjQsNi4yN1Q3MDQuNzQsNzhxMCwxMy03LjUyLDE5LjIydC0yMy40LDYuMjdINTYzLjkzdjY3LjY5SDY2NS40N3ExNS44NywwLDIzLjQsNi4yN3Q3LjUyLDE5LjY0cTAsMTMtNy41MiwxOS4yMnQtMjMuNCw2LjI3SDU2My45M3Y5NHEwLDE1LTguNTYsMjMuODJ0LTIzLjE5LDguNzdRNTE3LjU1LDM0OS4xNiw1MDguNTcsMzQwLjE4WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik05MDcuNiwyOTIuMzRxNS4yMiw2LjY5LDUuMjIsMTcuMTNhMjIuNzIsMjIuNzIsMCwwLDEtNC4xOCwxMy4xNiwzMy43NywzMy43NywwLDAsMS0xMS43LDEwLjI0LDE0OS41NCwxNDkuNTQsMCwwLDEtMzMsMTIuMzIsMTQxLDE0MSwwLDAsMS0zNC42OCw0LjhxLTMzLjQzLDAtNTguMjktMTNhOTAuNjIsOTAuNjIsMCwwLDEtMzguMjMtMzdxLTEzLjM4LTI0LTEzLjM3LTU2LjYxLDAtMzEuMzQsMTMtNTUuNTdhOTUsOTUsMCwwLDEsMzUuOTMtMzcuODFxMjMtMTMuNTcsNTIuMjMtMTMuNTgsMjgsMCw0OS4xLDEyLjMzdDMyLjgsMzUuMXExMS42OSwyMi43OCwxMS43LDUzLjI3LDAsOS4yLTQuMzksMTRUODk3LjM2LDI1NmgtMTE3cTIuOTIsMjQuNjYsMTUsMzUuNzN0MzQuNjgsMTEuMDdhNzQuNTEsNzQuNTEsMCwwLDAsMjEuNzMtMi45MiwyMDkuMjgsMjA5LjI4LDAsMCwwLDIxLjMxLTcuOTRxNS44NS0yLjUxLDExLjI4LTQuMzlhMjkuODcsMjkuODcsMCwwLDEsOS42MS0xLjg4QTE2LjQ2LDE2LjQ2LDAsMCwxLDkwNy42LDI5Mi4zNFpNNzkzLjMyLDE5MS40NHEtMTAuODcsMTEuNS0xMywzMy4yMkg4NjFxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTgwNC4xOCwxNzkuOTQsNzkzLjMyLDE5MS40NFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNOTYxLjA3LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDk4My44NSw1MHExMy4zNywwLDIyLjM1LDcuNTJ0OSwyMi4xNFYzMTkuNXEwLDE0LjYzLTksMjIuMTR0LTIyLjM1LDcuNTJROTcwLjA2LDM0OS4xNiw5NjEuMDcsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMTUwLjU2LDEwOC41cS03LjUyLDkuMi03LjUyLDI1LjkxdjcuMWgyOS4yNXEyOC40MSwwLDI4LjQxLDIzLjgyLDAsMjMuNDEtMjguNDEsMjMuNEgxMTQzVjMxOS4wOHEwLDE0LjYzLTksMjIuMTR0LTIyLjM2LDcuNTJxLTEzLjc5LDAtMjIuNzctNy41MnQtOS0yMi4xNFYxODguNzJoLTE2LjcxcS0yOCwwLTI4LTIzLjQsMC0yMy44MSwyOC0yMy44MmgxNi43MXEwLTQwLjExLDIyLjE0LTYzLjA5dDYxLTI1LjkxbDEwLjg2LS44NCw3LjUyLS40MnEyOC44MywwLDI4LjgzLDIyLjE1LDAsMjEuNzMtMjQuMjQsMjMuODJsLTEwLjg2Ljg0UTExNTguMDcsOTkuMywxMTUwLjU2LDEwOC41WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMzk2Ljg3LDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTM5Ni44NywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTEyOTMuNDUsMTc5Ljk0LDEyODIuNTksMTkxLjQ0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNDUwLjM1LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDE0NzMuMTIsNTBxMTMuMzcsMCwyMi4zNSw3LjUydDksMjIuMTRWMzE5LjVxMCwxNC42My05LDIyLjE0dC0yMi4zNSw3LjUyUTE0NTkuMzMsMzQ5LjE2LDE0NTAuMzUsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNzMxLjEzLDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTczMS4xMywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTE2MjcuNzEsMTc5Ljk0LDE2MTYuODUsMTkxLjQ0WiIvPjwvZz48L2c+PC9zdmc+Cg=="},159:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxMjAgMjMiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNjIwMEVBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDIwLjE0NmEyLjc5NSAyLjc5NSAwIDAgMSAyLjc5NC0yLjc5M2gyLjc5NHYyLjc5M2EyLjc5NSAyLjc5NSAwIDAgMS01LjU4OCAwek0yLjc5NCA4Ljk3SDEzLjk3djExLjE3NmEyLjc5NSAyLjc5NSAwIDAgMS01LjU5IDB2LTUuNTg4SDIuNzk1YTIuNzk1IDIuNzk1IDAgMCAxIDAtNS41ODh6TTE5LjU1OS41ODhhMi43OTUgMi43OTUgMCAwIDEgMi43OTQgMi43OTR2MTYuNzY0YTIuNzk1IDIuNzk1IDAgMCAxLTUuNTg4IDBWNi4xNzZIMi43OTRhMi43OTUgMi43OTUgMCAwIDEgMC01LjU4OGgxNi43NjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},160:function(e,t,i){"use strict";i(33);var a=i(7),n=i.n(a),r=i(0),s=i.n(r),o=i(152),l=i(153),u=i(151),M=i(159),c=i.n(M),d=function(e){function t(t){var i;return(i=e.call(this,t)||this).updateWindowDimensions=function(){i.setState({width:window.innerWidth,height:window.innerHeight})},i.state={width:0},i}n()(t,e);var i=t.prototype;return i.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},i.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},i.render=function(){return s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:this.state.width>l.a?"":"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(36)}},s.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:this.state.width>l.a?"row":"column",paddingBottom:50}},s.a.createElement("div",{style:L.sectionContainer},s.a.createElement("div",{style:L.sectionTitle},"PRODUCT"),s.a.createElement("div",{style:L.sectionContent},s.a.createElement(u.Link,{to:"/donate"},"Download for iOS"),s.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Download for Android"),s.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"))),s.a.createElement("div",{style:L.sectionContainer},s.a.createElement("div",{style:L.sectionTitle},"CONTRIBUTE"),s.a.createElement("div",{style:L.sectionContent},s.a.createElement(u.Link,{to:"/donate"},"Make a donation"),s.a.createElement(u.Link,{to:"/volunteer"},"Volunteer"))),s.a.createElement("div",{style:L.sectionContainer},s.a.createElement("div",{style:L.sectionTitle},"DEVELOPERS"),s.a.createElement("div",{style:L.sectionContent},s.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),s.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),s.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct"),s.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter"))),s.a.createElement("div",{style:L.sectionContainer},s.a.createElement("div",{style:L.sectionTitle},"ABOUT US"),s.a.createElement("div",{style:L.sectionContent},s.a.createElement(u.Link,{to:"/"},"Mission"),s.a.createElement(u.Link,{to:"/team"},"Core team"),s.a.createElement(u.Link,{to:"/blog"},"Blog"))),s.a.createElement("div",{style:L.sectionContainer},s.a.createElement("div",{style:L.sectionTitle},"LEGAL"),s.a.createElement("div",{style:L.sectionContent},s.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),s.a.createElement(u.Link,{to:"/privacy"},"Privacy Policy"))),s.a.createElement("div",{style:L.sectionContainer},s.a.createElement("div",{style:{width:this.state.width>l.a?200:100,display:"flex",justifyContent:"flex-end"}},s.a.createElement("img",{src:c.a,style:{marginBottom:0,fill:"#6200EA"}})))))},t}(r.Component),L={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(36)},sectionContainer:{display:"flex",flexDirection:"column",padding:20},sectionContent:{display:"flex",flexDirection:"column",fontWeight:600},sectionTitle:{paddingBottom:5}},w=function(){return s.a.createElement("div",{style:{height:1,backgroundColor:"rgba(98, 0, 234, 0.25)"}})},f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,i={marginLeft:"auto",marginRight:"auto",padding:10,maxWidth:Object(o.a)(36)},a=Object.assign({},i,t);return s.a.createElement("div",null,s.a.createElement("div",{style:a},s.a.createElement(l.b,null)),s.a.createElement(w,null),s.a.createElement("div",{style:a},e),s.a.createElement(w,null),s.a.createElement("div",{style:a},s.a.createElement(d,null)))},t}(s.a.Component);t.a=f},239:function(e,t,i){"use strict";var a=i(36);t.__esModule=!0,t.default=void 0;var n,r=a(i(7)),s=a(i(51)),o=a(i(173)),l=a(i(179)),u=a(i(0)),M=a(i(4)),c=function(e){var t=(0,l.default)({},e),i=t.resolutions,a=t.sizes,n=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t},d=Object.create({}),L=function(e){var t=c(e),i=t.fluid?t.fluid.src:t.fixed.src;return d[i]||!1},w="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,y=f&&window.IntersectionObserver,g=new WeakMap;var j=function(e,t){var i=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),n);return i&&(i.observe(e),g.set(e,t)),function(){i.unobserve(e),g.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+i+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+a+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+i+n+t+s+r+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=u.default.forwardRef(function(e,t){var i=e.sizes,a=e.srcSet,n=e.src,r=e.style,s=e.onLoad,M=e.onError,c=e.loading,d=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return u.default.createElement("img",(0,l.default)({sizes:i,srcSet:a,src:n},d,{onLoad:s,onError:M,ref:t,loading:c,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});N.propTypes={style:M.default.object,onError:M.default.func,onLoad:M.default.func};var m=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=f&&L(t),i.addNoScript=!(t.critical&&!t.fadeIn),i.useIOSupport=!w&&y&&!t.critical&&!i.seenBefore;var a=t.critical||f&&(w||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=u.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,s.default)((0,s.default)(i))),i.handleRef=i.handleRef.bind((0,s.default)((0,s.default)(i))),i}(0,r.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:L(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=L(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),i=t.fluid?t.fluid.src:t.fixed.src,d[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,M=e.placeholderStyle,d=void 0===M?{}:M,L=e.placeholderClassName,w=e.fluid,f=e.fixed,y=e.backgroundColor,g=e.durationFadeIn,j=e.Tag,m=e.itemProp,p=e.loading,T=!1===this.state.fadeIn||this.state.imgLoaded,h=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:T?1:0,transition:h?"opacity "+g+"ms":"none"},o),D="boolean"==typeof y?"lightgray":y,S={transitionDelay:g+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},h&&S,o,d),C={title:t,alt:this.state.isVisible?"":i,style:x,className:L};if(w){var z=w;return u.default.createElement(j,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},u.default.createElement(j,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),D&&u.default.createElement(j,{title:t,style:(0,l.default)({backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},h&&S)}),z.base64&&u.default.createElement(N,(0,l.default)({src:z.base64},C)),z.tracedSVG&&u.default.createElement(N,(0,l.default)({src:z.tracedSVG},C)),this.state.isVisible&&u.default.createElement("picture",null,z.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),u.default.createElement(N,{alt:i,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m,loading:p})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:i,title:t,loading:p},z))}}))}if(f){var b=f,O=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:b.width,height:b.height},r);return"inherit"===r.display&&delete O.display,u.default.createElement(j,{className:(a||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(b.srcSet)},D&&u.default.createElement(j,{title:t,style:(0,l.default)({backgroundColor:D,width:b.width,opacity:this.state.imgLoaded?0:1,height:b.height},h&&S)}),b.base64&&u.default.createElement(N,(0,l.default)({src:b.base64},C)),b.tracedSVG&&u.default.createElement(N,(0,l.default)({src:b.tracedSVG},C)),this.state.isVisible&&u.default.createElement("picture",null,b.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:b.srcSetWebp,sizes:b.sizes}),u.default.createElement(N,{alt:i,title:t,width:b.width,height:b.height,sizes:b.sizes,src:b.src,crossOrigin:this.props.crossOrigin,srcSet:b.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m,loading:p})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:i,title:t,loading:p},b))}}))}return null},t}(u.default.Component);m.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var p=M.default.shape({width:M.default.number.isRequired,height:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string}),T=M.default.shape({aspectRatio:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,sizes:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string});m.propTypes={resolutions:p,sizes:T,fixed:p,fluid:T,fadeIn:M.default.bool,durationFadeIn:M.default.number,title:M.default.string,alt:M.default.string,className:M.default.oneOfType([M.default.string,M.default.object]),critical:M.default.bool,crossOrigin:M.default.oneOfType([M.default.string,M.default.bool]),style:M.default.object,imgStyle:M.default.object,placeholderStyle:M.default.object,placeholderClassName:M.default.string,backgroundColor:M.default.oneOfType([M.default.string,M.default.bool]),onLoad:M.default.func,onError:M.default.func,onStartLoad:M.default.func,Tag:M.default.string,itemProp:M.default.string,loading:M.default.oneOf(["auto","lazy","eager"])};var h=m;t.default=h}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-304bd19d8ae73fcba064.js.map