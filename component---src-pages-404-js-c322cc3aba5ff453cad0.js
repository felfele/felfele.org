(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,M){"use strict";M.r(t);var n=M(7),i=M.n(n),a=M(0),s=M.n(a),L=M(160),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement(L.a,{location:this.props.location},s.a.createElement("h1",null,"Not Found"),s.a.createElement("p",null,"You just hit a route that doesn't exist...."),s.a.createElement("div",{style:{width:"100%",height:0,paddingBottom:"70%",position:"relative"}},s.a.createElement("iframe",{src:"https://giphy.com/embed/OK27wINdQS5YQ",width:"100%",height:"100%",style:{position:"absolute"},frameBorder:0,className:"giphy-embed",allowFullScreen:!0})),s.a.createElement("p",null,s.a.createElement("a",{href:"https://giphy.com/gifs/mind-seinfeild-OK27wINdQS5YQ"},"via GIPHY")))},t}(s.a.Component);t.default=u},151:function(e,t,M){"use strict";M.r(t),M.d(t,"graphql",function(){return l}),M.d(t,"StaticQueryContext",function(){return w}),M.d(t,"StaticQuery",function(){return j});var n=M(0),i=M.n(n),a=M(4),s=M.n(a),L=M(150),u=M.n(L);M.d(t,"Link",function(){return u.a}),M.d(t,"withPrefix",function(){return L.withPrefix}),M.d(t,"navigate",function(){return L.navigate}),M.d(t,"push",function(){return L.push}),M.d(t,"replace",function(){return L.replace}),M.d(t,"navigateTo",function(){return L.navigateTo});var r=M(154),o=M.n(r);M.d(t,"PageRenderer",function(){return o.a});var c=M(34);M.d(t,"parsePath",function(){return c.a});var w=i.a.createContext({}),j=function(e){return i.a.createElement(w.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function l(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}j.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,M){"use strict";M.d(t,"a",function(){return u}),M.d(t,"b",function(){return r});var n=M(161),i=M.n(n),a=M(162),s=M.n(a);s.a.headerFontFamily=["Young Serif"],s.a.bodyFontFamily=["Nunito Sans"],s.a.overrideThemeStyles=function(){return{"a,h1,h2,h3,p,div":{boxShadow:"none",color:"#6200EA"},a:{fontWeight:"bold"},"h1,h2,h3":{fontFamily:"YoungSerif"},"h2,h3,p,div":{fontWeight:300},div:{lineHeight:1.35}}};var L=new i.a(s.a);var u=L.rhythm,r=L.scale},153:function(e,t,M){"use strict";M.d(t,"a",function(){return l});M(33);var n=M(7),i=M.n(n),a=M(0),s=M.n(a),L=M(151),u=(M(163),M(164),M(152)),r=M(158),o=M.n(r),c=M(156),w=M.n(c),j=M(155),l=650,N=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(36)}},s.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:80,maxWidth:Object(u.a)(40)}},s.a.createElement(L.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("img",{src:o.a,style:{width:100,marginBottom:0,fill:"#6200EA"}})),s.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}},s.a.createElement(j.a,{icon:w.a,target:"/app",label:"Get the app"}),s.a.createElement(j.a,{target:"/donate",label:"Donate"}))))},t}(a.Component);t.b=N},154:function(e,t,M){var n;e.exports=(n=M(157))&&n.default||n},155:function(e,t,M){"use strict";M.d(t,"a",function(){return s});var n=M(0),i=M.n(n),a=M(151),s=function(e){var t=e.icon,M=e.label,n=e.target,s=e.border;return i.a.createElement(a.Link,{to:n},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",wrap:"no-wrap",border:s?"solid 1px rgba(98, 0, 234, 0.25)":"",padding:s?12:0,margin:6,fontSize:16}},i.a.createElement("img",{src:t,height:16,style:{paddingRight:4,margin:0,color:"#6200EA"}}),M))}},156:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDEyIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS00IDBoMjB2MjBILTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzYyMDBFQSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuMTY3Ljg0MkwxLjgzMy44MzNDLjkxNy44MzMuMTY3IDEuNTgzLjE2NyAyLjV2MTVjMCAuOTE3Ljc1IDEuNjY3IDEuNjY2IDEuNjY3aDguMzM0Yy45MTYgMCAxLjY2Ni0uNzUgMS42NjYtMS42Njd2LTE1YzAtLjkxNy0uNzUtMS42NTgtMS42NjYtMS42NTh6bTAgMTQuOTkxSDEuODMzVjQuMTY3aDguMzM0djExLjY2NnoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},157:function(e,t,M){"use strict";M.r(t);M(33);var n=M(0),i=M.n(n),a=M(4),s=M.n(a),L=M(48),u=M(2),r=function(e){var t=e.location,M=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(L.a,Object.assign({location:t,pageResources:M},M.json))};r.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=r},158:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzM3LjYgNDAwIj48dGl0bGU+QXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMzAwYTUwLDUwLDAsMSwwLDUwLDUwVjMwMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNMzUwLDBINTBhNTAsNTAsMCwwLDAsMCwxMDBIMzAwVjM1MGE1MCw1MCwwLDAsMCwxMDAsMFY1MEE1MCw1MCwwLDAsMCwzNTAsMFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNNTAsMTUwYTUwLDUwLDAsMCwwLDAsMTAwSDE1MFYzNTBhNTAsNTAsMCwwLDAsMTAwLDBWMTUwWiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik01MDguNTcsMzQwLjE4cS05LTktOS0yMy42MXYtMjM0cTAtMTQuNjIsNy45NC0yMi41NnQyMi41Ni03Ljk0SDY3My44MnExNS44NywwLDIzLjQsNi4yN1Q3MDQuNzQsNzhxMCwxMy03LjUyLDE5LjIydC0yMy40LDYuMjdINTYzLjkzdjY3LjY5SDY2NS40N3ExNS44NywwLDIzLjQsNi4yN3Q3LjUyLDE5LjY0cTAsMTMtNy41MiwxOS4yMnQtMjMuNCw2LjI3SDU2My45M3Y5NHEwLDE1LTguNTYsMjMuODJ0LTIzLjE5LDguNzdRNTE3LjU1LDM0OS4xNiw1MDguNTcsMzQwLjE4WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik05MDcuNiwyOTIuMzRxNS4yMiw2LjY5LDUuMjIsMTcuMTNhMjIuNzIsMjIuNzIsMCwwLDEtNC4xOCwxMy4xNiwzMy43NywzMy43NywwLDAsMS0xMS43LDEwLjI0LDE0OS41NCwxNDkuNTQsMCwwLDEtMzMsMTIuMzIsMTQxLDE0MSwwLDAsMS0zNC42OCw0LjhxLTMzLjQzLDAtNTguMjktMTNhOTAuNjIsOTAuNjIsMCwwLDEtMzguMjMtMzdxLTEzLjM4LTI0LTEzLjM3LTU2LjYxLDAtMzEuMzQsMTMtNTUuNTdhOTUsOTUsMCwwLDEsMzUuOTMtMzcuODFxMjMtMTMuNTcsNTIuMjMtMTMuNTgsMjgsMCw0OS4xLDEyLjMzdDMyLjgsMzUuMXExMS42OSwyMi43OCwxMS43LDUzLjI3LDAsOS4yLTQuMzksMTRUODk3LjM2LDI1NmgtMTE3cTIuOTIsMjQuNjYsMTUsMzUuNzN0MzQuNjgsMTEuMDdhNzQuNTEsNzQuNTEsMCwwLDAsMjEuNzMtMi45MiwyMDkuMjgsMjA5LjI4LDAsMCwwLDIxLjMxLTcuOTRxNS44NS0yLjUxLDExLjI4LTQuMzlhMjkuODcsMjkuODcsMCwwLDEsOS42MS0xLjg4QTE2LjQ2LDE2LjQ2LDAsMCwxLDkwNy42LDI5Mi4zNFpNNzkzLjMyLDE5MS40NHEtMTAuODcsMTEuNS0xMywzMy4yMkg4NjFxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTgwNC4xOCwxNzkuOTQsNzkzLjMyLDE5MS40NFoiLz48cGF0aCBmaWxsPSIjNjIwMEVBIiBkPSJNOTYxLjA3LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDk4My44NSw1MHExMy4zNywwLDIyLjM1LDcuNTJ0OSwyMi4xNFYzMTkuNXEwLDE0LjYzLTksMjIuMTR0LTIyLjM1LDcuNTJROTcwLjA2LDM0OS4xNiw5NjEuMDcsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMTUwLjU2LDEwOC41cS03LjUyLDkuMi03LjUyLDI1LjkxdjcuMWgyOS4yNXEyOC40MSwwLDI4LjQxLDIzLjgyLDAsMjMuNDEtMjguNDEsMjMuNEgxMTQzVjMxOS4wOHEwLDE0LjYzLTksMjIuMTR0LTIyLjM2LDcuNTJxLTEzLjc5LDAtMjIuNzctNy41MnQtOS0yMi4xNFYxODguNzJoLTE2LjcxcS0yOCwwLTI4LTIzLjQsMC0yMy44MSwyOC0yMy44MmgxNi43MXEwLTQwLjExLDIyLjE0LTYzLjA5dDYxLTI1LjkxbDEwLjg2LS44NCw3LjUyLS40MnEyOC44MywwLDI4LjgzLDIyLjE1LDAsMjEuNzMtMjQuMjQsMjMuODJsLTEwLjg2Ljg0UTExNTguMDcsOTkuMywxMTUwLjU2LDEwOC41WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xMzk2Ljg3LDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTM5Ni44NywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTEyOTMuNDUsMTc5Ljk0LDEyODIuNTksMTkxLjQ0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNDUwLjM1LDM0MS42NHEtOS03LjUyLTktMjIuMTRWNzkuNjdxMC0xNC42Miw5LTIyLjE0VDE0NzMuMTIsNTBxMTMuMzcsMCwyMi4zNSw3LjUydDksMjIuMTRWMzE5LjVxMCwxNC42My05LDIyLjE0dC0yMi4zNSw3LjUyUTE0NTkuMzMsMzQ5LjE2LDE0NTAuMzUsMzQxLjY0WiIvPjxwYXRoIGZpbGw9IiM2MjAwRUEiIGQ9Ik0xNzMxLjEzLDI5Mi4zNHE1LjIyLDYuNjksNS4yMiwxNy4xM2EyMi43MiwyMi43MiwwLDAsMS00LjE4LDEzLjE2LDMzLjc3LDMzLjc3LDAsMCwxLTExLjcsMTAuMjQsMTQ5LjU0LDE0OS41NCwwLDAsMS0zMywxMi4zMiwxNDEsMTQxLDAsMCwxLTM0LjY4LDQuOHEtMzMuNDMsMC01OC4yOS0xM2E5MC42Miw5MC42MiwwLDAsMS0zOC4yMy0zN3EtMTMuMzgtMjQtMTMuMzctNTYuNjEsMC0zMS4zNCwxMy01NS41N2E5NSw5NSwwLDAsMSwzNS45My0zNy44MXEyMy0xMy41Nyw1Mi4yMy0xMy41OCwyOCwwLDQ5LjEsMTIuMzN0MzIuOCwzNS4xcTExLjY5LDIyLjc4LDExLjcsNTMuMjcsMCw5LjItNC4zOSwxNHQtMTIuMzMsNC44aC0xMTdxMi45MiwyNC42NiwxNSwzNS43M3QzNC42OCwxMS4wN2E3NC41MSw3NC41MSwwLDAsMCwyMS43My0yLjkyLDIwOS4yOCwyMDkuMjgsMCwwLDAsMjEuMzEtNy45NHE1Ljg1LTIuNTEsMTEuMjgtNC4zOWEyOS44NywyOS44NywwLDAsMSw5LjYxLTEuODhBMTYuNDYsMTYuNDYsMCwwLDEsMTczMS4xMywyOTIuMzRabS0xMTQuMjgtMTAwLjlxLTEwLjg3LDExLjUtMTMsMzMuMjJoODAuNjRxLTEuMjUtMjIuMTQtMTEuMDctMzMuNDN0LTI3Ljc5LTExLjI4UTE2MjcuNzEsMTc5Ljk0LDE2MTYuODUsMTkxLjQ0WiIvPjwvZz48L2c+PC9zdmc+Cg=="},159:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxMjAgMjMiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNjIwMEVBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0wIDIwLjE0NmEyLjc5NSAyLjc5NSAwIDAgMSAyLjc5NC0yLjc5M2gyLjc5NHYyLjc5M2EyLjc5NSAyLjc5NSAwIDAgMS01LjU4OCAwek0yLjc5NCA4Ljk3SDEzLjk3djExLjE3NmEyLjc5NSAyLjc5NSAwIDAgMS01LjU5IDB2LTUuNTg4SDIuNzk1YTIuNzk1IDIuNzk1IDAgMCAxIDAtNS41ODh6TTE5LjU1OS41ODhhMi43OTUgMi43OTUgMCAwIDEgMi43OTQgMi43OTR2MTYuNzY0YTIuNzk1IDIuNzk1IDAgMCAxLTUuNTg4IDBWNi4xNzZIMi43OTRhMi43OTUgMi43OTUgMCAwIDEgMC01LjU4OGgxNi43NjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},160:function(e,t,M){"use strict";M(33);var n=M(7),i=M.n(n),a=M(0),s=M.n(a),L=M(152),u=M(153),r=M(151),o=M(159),c=M.n(o),w=function(e){function t(t){var M;return(M=e.call(this,t)||this).updateWindowDimensions=function(){M.setState({width:window.innerWidth,height:window.innerHeight})},M.state={width:0},M}i()(t,e);var M=t.prototype;return M.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},M.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},M.render=function(){return s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:this.state.width>u.a?"":"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(L.a)(36)}},s.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:this.state.width>u.a?"row":"column",paddingBottom:50}},s.a.createElement("div",{style:j.sectionContainer},s.a.createElement("div",{style:j.sectionTitle},"PRODUCT"),s.a.createElement("div",{style:j.sectionContent},s.a.createElement(r.Link,{to:"/donate"},"Download for iOS"),s.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Download for Android"),s.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"))),s.a.createElement("div",{style:j.sectionContainer},s.a.createElement("div",{style:j.sectionTitle},"CONTRIBUTE"),s.a.createElement("div",{style:j.sectionContent},s.a.createElement(r.Link,{to:"/donate"},"Make a donation"),s.a.createElement(r.Link,{to:"/volunteer"},"Volunteer"))),s.a.createElement("div",{style:j.sectionContainer},s.a.createElement("div",{style:j.sectionTitle},"DEVELOPERS"),s.a.createElement("div",{style:j.sectionContent},s.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),s.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),s.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct"),s.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter"))),s.a.createElement("div",{style:j.sectionContainer},s.a.createElement("div",{style:j.sectionTitle},"ABOUT US"),s.a.createElement("div",{style:j.sectionContent},s.a.createElement(r.Link,{to:"/"},"Mission"),s.a.createElement(r.Link,{to:"/team"},"Core team"),s.a.createElement(r.Link,{to:"/blog"},"Blog"))),s.a.createElement("div",{style:j.sectionContainer},s.a.createElement("div",{style:j.sectionTitle},"LEGAL"),s.a.createElement("div",{style:j.sectionContent},s.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),s.a.createElement(r.Link,{to:"/privacy"},"Privacy Policy"))),s.a.createElement("div",{style:j.sectionContainer},s.a.createElement("div",{style:{width:this.state.width>u.a?200:100,display:"flex",justifyContent:"flex-end"}},s.a.createElement("img",{src:c.a,style:{marginBottom:0,fill:"#6200EA"}})))))},t}(a.Component),j={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",fontSize:10,paddingTop:40,marginLeft:"auto",marginRight:"auto",maxWidth:Object(L.a)(36)},sectionContainer:{display:"flex",flexDirection:"column",padding:20},sectionContent:{display:"flex",flexDirection:"column",fontWeight:600},sectionTitle:{paddingBottom:5}},l=function(){return s.a.createElement("div",{style:{height:1,backgroundColor:"rgba(98, 0, 234, 0.25)"}})},N=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,M={marginLeft:"auto",marginRight:"auto",padding:10,maxWidth:Object(L.a)(36)},n=Object.assign({},M,t);return s.a.createElement("div",null,s.a.createElement("div",{style:n},s.a.createElement(u.b,null)),s.a.createElement(l,null),s.a.createElement("div",{style:n},e),s.a.createElement(l,null),s.a.createElement("div",{style:n},s.a.createElement(w,null)))},t}(s.a.Component);t.a=N}}]);
//# sourceMappingURL=component---src-pages-404-js-c322cc3aba5ff453cad0.js.map