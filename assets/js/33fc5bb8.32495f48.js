"use strict";(self.webpackChunkfood_blog=self.webpackChunkfood_blog||[]).push([[867],{778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(6540);var s=a(4164),n=a(1213),r=a(7559),o=a(6461),i=a(8774),l=a(4096),c=a(8027),d=a(7713),g=a(1463),u=a(3892),m=a(6913),h=a(4848);function p(e){let{author:t}=e;const a=(0,o.wI)(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.be,{title:a}),(0,h.jsx)(g.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,l.x)();return(0,h.jsx)(i.A,{href:e,children:(0,h.jsx)(o.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:n}=e;return(0,h.jsxs)(c.A,{sidebar:s,children:[(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(m.A,{as:"h1",author:t}),t.description&&(0,h.jsx)("p",{children:t.description}),(0,h.jsx)(x,{})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(u.A,{items:a}),(0,h.jsx)(d.A,{metadata:n})]})}function b(e){return(0,h.jsxs)(n.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsPostsPage),children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(j,{...e})]})}},7713:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(1312),n=a(9022),r=a(4848);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,r.jsx)(n.A,{permalink:o,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4096),n=a(4616),r=a(4848);function o(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},9022:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4164),n=a(8774),r=a(4848);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return(0,r.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6461:(e,t,a)=>{a.d(t,{np:()=>c,uz:()=>l,wI:()=>i});a(6540);var s=a(1312),n=a(3465),r=a(4848);function o(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=o();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const l=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,r.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}},4616:(e,t,a)=>{a.d(t,{A:()=>G});var s=a(6540),n=a(4164),r=a(4096),o=a(4848);function i(e){let{children:t,className:a}=e;return(0,o.jsx)("article",{className:a,children:t})}var l=a(8774);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.e7)(),{permalink:i,title:d}=a,g=s?"h1":"h2";return(0,o.jsx)(g,{className:(0,n.A)(c.title,t),children:s?d:(0,o.jsx)(l.A,{to:i,children:d})})}var g=a(1312),u=a(3465),m=a(6266);const h={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,g.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,o.jsx)(o.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,o.jsx)("time",{dateTime:t,children:a})}function j(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:s,readingTime:i}=a,l=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,o.jsxs)("div",{className:(0,n.A)(h.container,"margin-vert--md",t),children:[(0,o.jsx)(x,{date:s,formattedDate:(c=s,l.format(new Date(c)))}),void 0!==i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(p,{readingTime:i})]})]});var c}var f=a(6913);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),l=1===a.length;return(0,o.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,o.jsx)("div",{className:(0,n.A)(!i&&(l?"col col--12":"col col--6"),i?A.imageOnlyAuthorCol:A.authorCol),children:(0,o.jsx)(f.A,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(d,{}),(0,o.jsx)(b,{}),(0,o.jsx)(v,{})]})}var T=a(440),_=a(5533);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.e7)();return(0,o.jsx)("div",{id:s?T.LU:void 0,className:(0,n.A)("markdown",a),children:(0,o.jsx)(_.A,{children:t})})}var k=a(7559),y=a(4336);const P={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function C(e){let{permalink:t,label:a,count:s,description:r}=e;return(0,o.jsxs)(l.A,{href:t,title:r,className:(0,n.A)(P.tag,s?P.tagWithCount:P.tagRegular),children:[a,s&&(0,o.jsx)("span",{children:s})]})}const M={tags:"tags_jXut",tag:"tag_QGVx"};function R(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,n.A)(M.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:M.tag,children:(0,o.jsx)(C,{...e})},e.permalink)))})]})}function U(){return(0,o.jsx)("b",{children:(0,o.jsx)(g.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function O(e){const{blogPostTitle:t,...a}=e;return(0,o.jsx)(l.A,{"aria-label":(0,g.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,o.jsx)(U,{})})}function F(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:s,editUrl:i,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&l,u=a.length>0;if(!(u||g||i))return null;if(t){const e=!!(i||d||c);return(0,o.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,o.jsx)("div",{className:(0,n.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(R,{tags:a})})}),e&&(0,o.jsx)(y.A,{className:(0,n.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,o.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,o.jsx)("div",{className:(0,n.A)("col",{"col--9":g}),children:(0,o.jsx)(R,{tags:a})}),g&&(0,o.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,o.jsx)(O,{blogPostTitle:s,to:e.permalink})})]})}function L(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(i,{className:(0,n.A)(s,a),children:[(0,o.jsx)(N,{}),(0,o.jsx)(w,{children:t}),(0,o.jsx)(F,{})]})}function E({id:e,host:t,repo:n,repoId:r,category:i,categoryId:l,mapping:c,term:d,strict:g,reactionsEnabled:u,emitMetadata:m,inputPosition:h,theme:p,lang:x,loading:j}){const[b,f]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{b||(a.e(135).then(a.bind(a,1135)),f(!0))}),[]),b?(0,o.jsx)("giscus-widget",{id:e,host:t,repo:n,repoid:r,category:i,categoryid:l,mapping:c,term:d,strict:g,reactionsenabled:u,emitmetadata:m,inputposition:h,theme:p,lang:x,loading:j}):null}var I=a(5293);function B(){const{colorMode:e}=(0,I.G)();return(0,o.jsx)(E,{repo:"TECH7Fox/food-blog",repoId:"R_kgDOM56E1Q",category:"Comments",categoryId:"DIC_kwDOM56E1c4Ci9NH",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"1",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy"})}function G(e){const{metadata:t,isBlogPostPage:a}=(0,r.e7)(),{frontMatter:s,title:n}=t,{comments:i}=s;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(L,{...e}),i&&a&&(0,o.jsx)(B,{})]})}}}]);