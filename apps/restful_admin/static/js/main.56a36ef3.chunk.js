(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{554:function(e,t){},594:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(18),n=c(677),i=c(676),s=c(678),o=c(180),l=c(57),j=c.n(l),u=c(113),d=c(12),b=c(388),O=c(85),x=c(96),h=["q"],p=function(e){return{page:e.page,page_size:e.perPage}},f=function(e){var t=e.q,c=Object(b.a)(e,h);return Object(d.a)(Object(d.a)({},c),{},{search:t})},m=function(e){var t=e.field,c=e.order;return{ordering:"".concat("ASC"===c?"":"-").concat(t)}},g=["picture","picture_small","cv"],k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.a.fetchJson,c=function(c,a){return t("".concat(e,"/").concat(c,"/").concat(a,"/")).then((function(e){return e.json}))};return{getList:function(){var c=Object(u.a)(j.a.mark((function c(a,r){var n,i,s,o;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(d.a)(Object(d.a)(Object(d.a)({},f(r.filter)),p(r.pagination)),m(r.sort)),console.log(n),i="".concat(e,"/").concat(a,"/?").concat(Object(O.stringify)(n)),c.next=5,t(i);case 5:return s=c.sent,o=s.json,c.abrupt("return",{data:o.results,total:o.count});case 8:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}(),getOne:function(){var e=Object(u.a)(j.a.mark((function e(t,a){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a.id);case 2:return r=e.sent,e.abrupt("return",{data:r});case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),getMany:function(e,t){return Promise.all(t.ids.map((function(t){return c(e,t)}))).then((function(e){return{data:e}}))},getManyReference:function(){var c=Object(u.a)(j.a.mark((function c(a,r){var n,i,s,l;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(d.a)(Object(d.a)(Object(d.a)(Object(d.a)({},f(r.filter)),p(r.pagination)),m(r.sort)),{},Object(o.a)({},r.target,r.id)),i="".concat(e,"/").concat(a,"/?").concat(Object(O.stringify)(n)),c.next=4,t(i);case 4:return s=c.sent,l=s.json,c.abrupt("return",{data:l.results,total:l.count});case 7:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}(),update:function(){var c=Object(u.a)(j.a.mark((function c(a,r){var n,i,s,o;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(r),n=new FormData,Object.keys(r.data).forEach((function(e){g.includes(e)?Object.keys(r.data[e]).includes("rawFile")&&(n.append(e,r.data[e].rawFile),console.log("hear")):n.append(e,r.data[e])})),(i=new Headers).append("enctype","multipart/form-data"),c.next=7,t("".concat(e,"/").concat(a,"/").concat(r.id,"/"),{method:"PUT",headers:i,body:n});case 7:return s=c.sent,o=s.json,c.abrupt("return",{data:o});case 10:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}(),create:function(){var c=Object(u.a)(j.a.mark((function c(a,r){var n,i,s,o;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=new FormData,i=new Headers,Object.keys(r.data).forEach((function(e){Object.keys(r.data[e]).includes("rawFile")?n.append(e,r.data[e].rawFile):n.append(e,r.data[e])})),i.append("enctype","multipart/form-data"),c.next=6,t("".concat(e,"/").concat(a,"/"),{method:"POST",headers:i,body:n});case 6:return s=c.sent,o=s.json,c.abrupt("return",{data:Object(d.a)({},o)});case 9:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}(),delete:function(c,a){return t("".concat(e,"/").concat(c,"/").concat(a.id,"/"),{method:"DELETE"}).then((function(){return{data:a.previousData}}))},deleteMany:function(c,a){return Promise.all(a.ids.map((function(a){return t("".concat(e,"/").concat(c,"/").concat(a,"/"),{method:"DELETE"})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))}}},v="/api-token-auth/",w="/admin/apiv1";var y=c(375),P=c.n(y),q=c(679),_=c(384),F=c(153),W=c(662),S=c(3),T=function(e){return Object(S.jsx)(q.a,Object(d.a)(Object(d.a)({},e),{},{children:Object(S.jsxs)(_.a,{children:[Object(S.jsx)(F.a,{source:"title"}),Object(S.jsx)(W.a,{basePath:"/post"})]})}))},E=c(30),N=c(680),z=c(154),I=c(660),L=c(663),R=c(664),C=c(683),D=c(690),M=c(667),B=c(668),A=c(669),J=c(670),H=c(50),U=c(65),V=Object(U.a)({root:{maxWidth:345},media:{height:140}}),G=function(e){var t=e.record;return Object(S.jsxs)("span",{children:["Post ",t?'"'.concat(t.title,'"'):""]})},K=function(){var e=Object(E.f)(),t=V();return Object(S.jsxs)(N.a,{children:[Object(S.jsx)(z.a,{style:{fontSize:"0.8rem",marginBottom:"10px"},className:"MuiFormLabel-root RaFileInput-root-78",children:"Last Picture"}),Object(S.jsx)(I.a,{className:t.root,children:Object(S.jsx)(L.a,{children:Object(S.jsx)(R.a,{className:t.media,image:e.values.picture,title:"Contemplative Reptile"})})})]})},Q=function(e){return Object(S.jsx)(C.a,Object(d.a)(Object(d.a)({title:Object(S.jsx)(G,{})},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{disabled:!0,source:"id"}),Object(S.jsx)(M.a,{source:"title"}),Object(S.jsx)(M.a,{source:"tag"}),Object(S.jsx)(H.a,{source:"content",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}),Object(S.jsx)(B.a,{source:"status",choices:[{id:"Published",name:"Published"},{id:"Draft",name:"Draft"},{id:"Trash",name:"Trash"}]}),Object(S.jsx)(M.a,{disabled:!0,label:"Nb views",source:"view"}),Object(S.jsx)(K,{}),Object(S.jsx)(A.a,{source:"picture",accept:"image/*",children:Object(S.jsx)(J.a,{source:"src",title:"title"})})]})}))},X=c(684),Y=function(e){return Object(S.jsx)(X.a,Object(d.a)(Object(d.a)({title:"Create a Post"},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{source:"title"}),Object(S.jsx)(M.a,{source:"tag"}),Object(S.jsx)(H.a,{source:"content",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}),Object(S.jsx)(B.a,{source:"status",choices:[{id:"Published",name:"Published"},{id:"Draft",name:"Draft"},{id:"Trash",name:"Trash"}]}),Object(S.jsx)(M.a,{disabled:!0,label:"Nb views",source:"view"}),Object(S.jsx)(A.a,{source:"picture",accept:"image/*",children:Object(S.jsx)(J.a,{source:"src",title:"title"})})]})}))},Z=c(374),$=c.n(Z),ee=c(383),te=c.n(ee),ce=function(e){return Object(S.jsx)(q.a,Object(d.a)(Object(d.a)({},e),{},{bulkActionButtons:!1,children:Object(S.jsxs)(_.a,{children:[Object(S.jsx)(F.a,{source:"email"}),Object(S.jsx)(W.a,{basePath:"/profile"})]})}))},ae=c(671),re=c(691),ne=c(309),ie=c(681),se=c(686),oe=c(672),le=c(689),je=c(386),ue=c(673),de=function(e){var t=e.record;return Object(S.jsxs)("span",{children:["Profile ",t?'"'.concat(t.first_name).concat(t.last_name,'"'):""]})},be=Object(U.a)({root:{maxWidth:345},media:{height:300}}),Oe=function(e){var t=e.picture,c=be();return Object(S.jsxs)(N.a,{children:[Object(S.jsx)(z.a,{style:{fontSize:"0.8rem",marginBottom:"10px"},className:"MuiFormLabel-root RaFileInput-root-78",children:"Last Picture"}),Object(S.jsx)(I.a,{className:c.root,children:Object(S.jsx)(L.a,{children:Object(S.jsx)(R.a,{className:c.media,image:t,title:"Contemplative Reptile"})})})]})},xe=function(e){var t=Object(re.a)(e),c=Object(ne.a)({type:"getList",resource:"socialnetwork",payload:{ordering:{},filter:{},sort:{},pagination:{}}});console.log(c);var r=t.record;if("undefined"==typeof r||c.loading)return Object(S.jsx)(a.Fragment,{});var n=c.data.map((function(e){return{id:e.id,name:e.title}}));return Object(S.jsx)(C.a,Object(d.a)(Object(d.a)({title:Object(S.jsx)(de,{})},e),{},{children:Object(S.jsxs)(ie.a,{initialValues:{average_note:0},children:[Object(S.jsx)(se.a,{label:"Page 1",children:Object(S.jsxs)(ae.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsxs)(ae.a,{item:!0,xs:6,children:[Object(S.jsx)(M.a,{fullWidth:!0,source:"first_name"}),Object(S.jsx)(M.a,{fullWidth:!0,source:"last_name"}),Object(S.jsx)(oe.a,{fullWidth:!0,source:"birth_date"})]}),Object(S.jsxs)(ae.a,{item:!0,xs:6,children:[Object(S.jsx)(M.a,{fullWidth:!0,multiline:!0,source:"address"}),Object(S.jsx)(M.a,{fullWidth:!0,source:"phone_number"}),Object(S.jsx)(M.a,{fullWidth:!0,source:"email"})]}),Object(S.jsx)(ae.a,{item:!0,xs:12,children:Object(S.jsx)(M.a,{fullWidth:!0,multiline:!0,source:"description"})})]})}),Object(S.jsx)(se.a,{label:"Page 2",children:Object(S.jsxs)(ae.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsxs)(ae.a,{item:!0,xs:6,children:[Object(S.jsx)(M.a,{fullWidth:!0,source:"languages"}),Object(S.jsx)(le.a,{fullWidth:!0,source:"tag",choices:n}),Object(S.jsx)(M.a,{fullWidth:!0,source:"title"})]}),Object(S.jsxs)(ae.a,{item:!0,xs:6,children:[Object(S.jsx)(M.a,{fullWidth:!0,source:"years_of_experience"}),Object(S.jsx)(M.a,{fullWidth:!0,source:"linkedin_id"}),Object(S.jsx)(M.a,{fullWidth:!0,source:"skype_id"})]})]})}),Object(S.jsxs)(se.a,{label:"Files",children:[Object(S.jsxs)(ae.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(A.a,{source:"picture",accept:"image/*",children:Object(S.jsx)(J.a,{source:"src",title:"title"})})}),Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(Oe,{picture:r.picture&&r.picture})})]}),Object(S.jsxs)(ae.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(A.a,{source:"picture_small",accept:"image/*",children:Object(S.jsx)(J.a,{source:"src",title:"title"})})}),Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(Oe,{picture:r.picture&&r.picture_small})})]}),Object(S.jsxs)(ae.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(je.a,{source:"cv",label:"Related files",accept:"application/pdf",children:Object(S.jsx)(ue.a,{source:"src",title:"title"})})}),Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)("a",{href:r.picture&&r.cv,children:r.picture&&r.cv})})]})]}),Object(S.jsx)(se.a,{label:"Page 3",children:Object(S.jsxs)(N.a,{spacing:3,style:{width:"100%"},children:[Object(S.jsx)(H.a,{fullWidth:!0,multiline:!0,source:"thanks_message",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}),Object(S.jsx)(H.a,{fullWidth:!0,multiline:!0,source:"contact_title",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}),Object(S.jsx)(H.a,{fullWidth:!0,multiline:!0,source:"contact_message",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]})]})})]})}))},he=function(e){return Object(S.jsx)(q.a,Object(d.a)(Object(d.a)({},e),{},{children:Object(S.jsxs)(_.a,{children:[Object(S.jsx)(F.a,{source:"title"}),Object(S.jsx)(W.a,{basePath:"/skill"})]})}))},pe=c(674),fe=function(e){var t=e.record;return Object(S.jsxs)("span",{children:["Skill ",t?'"'.concat(t.title,'"'):""]})},me=function(e){return Object(S.jsx)(C.a,Object(d.a)(Object(d.a)({title:Object(S.jsx)(fe,{})},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(pe.a,{required:!0,source:"level"})]})}))},ge=function(e){return Object(S.jsx)(X.a,Object(d.a)(Object(d.a)({title:"Create a Skill"},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(pe.a,{required:!0,source:"level"})]})}))},ke=c(675),ve=function(e){return Object(S.jsx)(X.a,Object(d.a)(Object(d.a)({title:"Create a Experience"},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(ke.a,{source:"type",choices:[{id:"experience",name:"Experience"},{id:"education",name:"Education"}]}),Object(S.jsx)(M.a,{required:!0,source:"duration"}),Object(S.jsx)(M.a,{required:!0,source:"place_name"}),Object(S.jsx)(H.a,{source:"description",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]})]})}))},we=function(e){var t=e.record;return Object(S.jsxs)("span",{children:["Experience ",t?'"'.concat(t.title,'"'):""]})},ye=function(e){return Object(S.jsx)(C.a,Object(d.a)(Object(d.a)({title:Object(S.jsx)(we,{})},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(ke.a,{source:"type",choices:[{id:"experience",name:"Experience"},{id:"education",name:"Education"}]}),Object(S.jsx)(M.a,{required:!0,source:"duration"}),Object(S.jsx)(M.a,{required:!0,source:"place_name"}),Object(S.jsx)(H.a,{source:"description",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]})]})}))},Pe=function(e){return Object(S.jsx)(q.a,Object(d.a)(Object(d.a)({},e),{},{children:Object(S.jsxs)(_.a,{children:[Object(S.jsx)(F.a,{source:"title"}),Object(S.jsx)(W.a,{basePath:"/experience"})]})}))},qe=c(376),_e=c.n(qe),Fe=function(e){return Object(S.jsx)(q.a,Object(d.a)(Object(d.a)({},e),{},{children:Object(S.jsxs)(_.a,{children:[Object(S.jsx)(F.a,{source:"title"}),Object(S.jsx)(W.a,{basePath:"/portfolio"})]})}))},We=Object(U.a)({root:{maxWidth:345},media:{height:140}}),Se=function(e){var t=e.record;return Object(S.jsxs)("span",{children:["Portfolio ",t?'"'.concat(t.title,'"'):""]})},Te=function(e){var t=e.picture,c=We();return Object(S.jsxs)(N.a,{children:[Object(S.jsx)(z.a,{style:{fontSize:"0.8rem",marginBottom:"10px"},className:"MuiFormLabel-root RaFileInput-root-78",children:"Last Picture"}),Object(S.jsx)(I.a,{className:c.root,children:Object(S.jsx)(L.a,{children:Object(S.jsx)(R.a,{className:c.media,image:t,title:"Contemplative Reptile"})})})]})},Ee=function(e){var t=Object(re.a)(e).record;return"undefined"==typeof t?Object(S.jsx)(a.Fragment,{}):Object(S.jsx)(C.a,Object(d.a)(Object(d.a)({title:Object(S.jsx)(Se,{})},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(M.a,{required:!0,source:"link"}),Object(S.jsx)(H.a,{source:"description",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}),Object(S.jsxs)(ae.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(A.a,{source:"picture",accept:"image/*",children:Object(S.jsx)(J.a,{source:"src",title:"title"})})}),Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(Te,{picture:t.picture&&t.picture})})]})]})}))},Ne=Object(U.a)({root:{maxWidth:345},media:{height:140}}),ze=function(e){var t=e.picture,c=Ne();return Object(S.jsxs)(N.a,{children:[Object(S.jsx)(z.a,{style:{fontSize:"0.8rem",marginBottom:"10px"},className:"MuiFormLabel-root RaFileInput-root-78",children:"Last Picture"}),Object(S.jsx)(I.a,{className:c.root,children:Object(S.jsx)(L.a,{children:Object(S.jsx)(R.a,{className:c.media,image:t,title:"Contemplative Reptile"})})})]})},Ie=function(e){var t=Object(re.a)(e).record;return"undefined"==typeof t?Object(S.jsx)(a.Fragment,{}):Object(S.jsx)(X.a,Object(d.a)(Object(d.a)({title:"Create a Portfolio"},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(M.a,{required:!0,source:"link"}),Object(S.jsx)(H.a,{source:"description",toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}),Object(S.jsxs)(ae.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(A.a,{source:"picture",accept:"image/*",children:Object(S.jsx)(J.a,{source:"src",title:"title"})})}),Object(S.jsx)(ae.a,{item:!0,xs:6,children:Object(S.jsx)(ze,{picture:t.picture&&t.picture})})]})]})}))},Le=c(256),Re=c.n(Le),Ce=c(377),De=c.n(Ce),Me=function(e){return Object(S.jsx)(q.a,Object(d.a)(Object(d.a)({},e),{},{children:Object(S.jsxs)(_.a,{children:["\\            ",Object(S.jsx)(F.a,{source:"title"}),Object(S.jsx)(W.a,{basePath:"/socialnetwork"})]})}))},Be=function(e){var t=e.record;return Object(S.jsxs)("span",{children:["Social ",t?'"'.concat(t.title,'"'):""]})},Ae=function(e){return Object(S.jsx)(C.a,Object(d.a)(Object(d.a)({title:Object(S.jsx)(Be,{})},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(ke.a,{source:"icon",choices:[{id:"fa fa-instagram",name:"Instagram"},{id:"fa fa-facebook",name:"Facebook"},{id:"fa fa-linkedin",name:"LinkedIn"},{id:"fa fa-twitter",name:"Twitter"},{id:"fa fa-pinterest",name:"Pinterest"},{id:"fa fa-tumblr",name:"Tumblr"},{id:"fa fa-flickr",name:"Flickr"},{id:"fa fa-reddit",name:"Reddit"}]}),Object(S.jsx)(M.a,{required:!0,source:"link"})]})}))},Je=function(e){return Object(S.jsx)(X.a,Object(d.a)(Object(d.a)({title:"Create a Social"},e),{},{children:Object(S.jsxs)(D.a,{children:[Object(S.jsx)(M.a,{required:!0,source:"title"}),Object(S.jsx)(ke.a,{source:"icon",choices:[{id:"fa fa-instagram",name:"Instagram"},{id:"fa fa-facebook",name:"Facebook"},{id:"fa fa-linkedin",name:"LinkedIn"},{id:"fa fa-twitter",name:"Twitter"},{id:"fa fa-pinterest",name:"Pinterest"},{id:"fa fa-tumblr",name:"Tumblr"},{id:"fa fa-flickr",name:"Flickr"},{id:"fa fa-reddit",name:"Reddit"}]}),Object(S.jsx)(M.a,{required:!0,source:"link"})]})}))},He=c(666),Ue=function(e){return Object(S.jsx)(q.a,Object(d.a)(Object(d.a)({},e),{},{children:Object(S.jsxs)(_.a,{children:[Object(S.jsx)(F.a,{source:"name"}),Object(S.jsx)(F.a,{source:"email"}),Object(S.jsx)(F.a,{source:"subject"}),Object(S.jsx)(He.a,{basePath:"/contact",label:"Show message",record:e.record})]})}))},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(d.a)({obtainAuthTokenUrl:v},e);return{login:function(){var e=Object(u.a)(j.a.mark((function e(c){var a,r,n,i,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.username,r=c.password,n=new Request(t.obtainAuthTokenUrl,{method:"POST",body:JSON.stringify({username:a,password:r}),headers:new Headers({"Content-Type":"application/json"})}),e.next=4,fetch(n);case 4:if(!(i=e.sent).ok){e.next=12;break}return e.t0=localStorage,e.next=9,i.json();case 9:return e.t1=e.sent.token,e.t0.setItem.call(e.t0,"token",e.t1),e.abrupt("return");case 12:if("application/json"===i.headers.get("content-type")){e.next=14;break}throw new Error(i.statusText);case 14:return e.next=16,i.json();case 16:throw s=e.sent,o=s.non_field_errors,new Error(o||i.statusText);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){return localStorage.removeItem("token"),Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},getPermissions:function(){return Promise.resolve()}}}(),Ge=k(w,(function(e,t){return x.a.fetchJson(e,Object.assign(function(){var e=localStorage.getItem("token");return e?{user:{authenticated:!0,token:"Token "+e}}:{}}(),t))}));Object(r.render)(Object(S.jsx)(n.a,{authProvider:Ve,dataProvider:Ge,children:function(e){return[Object(S.jsx)(i.a,{name:"post",list:T,edit:Q,create:Y,icon:$.a}),Object(S.jsx)(i.a,{name:"skill",list:he,edit:me,create:ge,icon:P.a}),Object(S.jsx)(i.a,{name:"experience",list:Pe,edit:ye,create:ve,icon:_e.a}),Object(S.jsx)(i.a,{name:"portfolio",list:Fe,edit:Ee,create:Ie,icon:Re.a}),Object(S.jsx)(i.a,{name:"socialnetwork",list:Me,edit:Ae,create:Je,icon:De.a,options:{label:"Social Networks"}}),Object(S.jsx)(i.a,{name:"contact",list:Ue,show:s.a,icon:Re.a}),Object(S.jsx)(i.a,{name:"profile",list:ce,edit:xe,icon:te.a})]}}),document.getElementById("root"))}},[[594,1,2]]]);
//# sourceMappingURL=main.56a36ef3.chunk.js.map