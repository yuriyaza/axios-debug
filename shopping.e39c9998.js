!function(){function o(o){return o&&o.__esModule?o.default:o}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequireafef;null==n&&((n=function(o){if(o in t)return t[o].exports;if(o in a){var e=a[o];delete a[o];var n={id:o,exports:{}};return t[o]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(o,e){a[o]=e},e.parcelRequireafef=n),n("iE7OH").register(JSON.parse('{"l20mf":"shopping.e39c9998.js","aaLHb":"amazon.daeb24c6.png","kA0Wr":"appleshop.26ca9b9b.png","5sBRp":"boockshop.ab8d7404.png","ee16w":"sprite.27d88557.svg"}'));var r={};r=n("aNJCr").getBundleURL("l20mf")+n("iE7OH").resolve("aaLHb");var i={};i=n("aNJCr").getBundleURL("l20mf")+n("iE7OH").resolve("kA0Wr");var s={};s=n("aNJCr").getBundleURL("l20mf")+n("iE7OH").resolve("5sBRp");var l={};l=n("aNJCr").getBundleURL("l20mf")+n("iE7OH").resolve("ee16w");var p=document.querySelector(".shopping-list"),d=document.querySelector(".shopping-list-empty"),c=function(o){var e=o.items,t=o.rows,a=void 0===t?10:t,n=o.handlePaginatedItems,r=o.buttonsWrapper,i=o.buttonsContainerClass,s=void 0===i?"pagination":i,l=o.buttonClass,p=void 0===l?"page-link":l,d=(o.nextClass,o.prevClass,o.nextText),c=void 0===d?">":d,u=o.prevText,F=void 0===u?"<":u,h=(o.firstClass,o.firstText),k=void 0===h?"<<":h,w=(o.lastClass,o.lastText),b=void 0===w?">>":w,m=o.activeClass,g=void 0===m?"active":m;if(!e)return console.error("items not defined. Send {items: ...} as a parameter."),!1;var _,B,f=function(){return document.querySelector(".".concat("pagination-"+v," button.active"))},v=(_=46656*Math.random()|0,B=46656*Math.random()|0,(_=("000"+_.toString(36)).slice(-3))+(B=("000"+B.toString(36)).slice(-3)));a=parseInt(a);var y=1,A=Math.ceil(e.length/a),E=void 0!==r,T={paginate:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];o--;var i=a*o,l=i+a,d=e.slice(i,l);if(t&&r&&function(o){var e=o.wrapper,t=document.createElement("div");t.classList.add("pagination-"+v,s);var a=function(o){var e=document.createElement("button");return e.setAttribute("type","button"),e.classList.add(p),y===o&&e.classList.add(g),e.innerHTML=o,e.addEventListener("click",(function(){y=o,T.paginate(y,!1),f().classList.remove("active"),e.classList.add("active")})),e},n=function(){var o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("page-link"),o.classList.add("prevClass"),o.innerHTML=F;var e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("page-link"),e.classList.add("nextClass"),e.innerHTML=c;var t=document.createElement("button");t.setAttribute("type","button"),t.classList.add("page-link"),t.classList.add("firstClass"),t.innerHTML=k;var a=document.createElement("button");return a.setAttribute("type","button"),a.classList.add("page-link"),a.classList.add("lastClass"),a.innerHTML=b,o.addEventListener("click",(function(){T.prev()})),e.addEventListener("click",(function(){T.next()})),t.addEventListener("click",(function(){T.first()})),a.addEventListener("click",(function(){T.last()})),{prevBtn:o,nextBtn:e,firstBtn:t,lastBtn:a}}(),r=n.prevBtn,i=n.nextBtn,l=n.firstBtn,d=n.lastBtn;t.appendChild(l),t.appendChild(r);for(var u=1;u<A+1;u++){var h=a(u);t.appendChild(h)}t.appendChild(i),t.appendChild(d),e.appendChild(t)}({wrapper:document.querySelector(r)}),!n)return d;n(d)},first:function(){if(0!==y){var o=a*(y=0),t=o+a,r=e.slice(o,t);if(E){var i=f();0!=y&&(i.classList.remove("active"),i.nextElementSibling.classList.add("active"))}if(!n)return r;n(r)}},last:function(){if(y!==A){var o=a*(y=A-1),t=o+a,r=e.slice(o,t);if(E){var i=f();i.classList.remove("active"),i.nextElementSibling.classList.add("active")}if(!n)return r;n(r)}},next:function(){if(!(y>=A)){y++;var o=a*(y-1),t=o+a,r=e.slice(o,t);if(E){var i=f();i.classList.remove("active"),i.nextElementSibling.classList.add("active")}if(!n)return r;n(r)}},prev:function(){if(1!==y){y--;var o=a*(y-1),t=o+a,r=e.slice(o,t);if(E){var i=f();i.classList.remove("active"),i.previousElementSibling.classList.add("active")}if(!n)return r;n(r)}},changeRows:function(){a=parseInt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:10),document.querySelector(".pagination-"+v).remove(),T.paginate(y)},changeItems:function(o){var t;if(!o)return!1;null===(t=document.querySelector(".pagination-"+v))||void 0===t||t.remove(),e=o,A=Math.ceil(e.length/a),y=1,T.paginate(1)}};return T},u=document.getElementById("pagination"),F=JSON.stringify([{_id:"642fd89ac8cf5ee957f122cb",list_name:"Trade Fiction Paperback",date:"2023-04-07T08:46:57.000Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20",article_chapter_link:"",author:"Colleen Hoover",book_image:"https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg",book_image_width:322,book_image_height:500,book_review_link:"",book_uri:"nyt://book/3aa85e47-4df9-53ef-9957-a77753d3502c",contributor:"by Colleen Hoover",contributor_note:"",created_date:"2023-04-05 22:05:25",description:"In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.",first_chapter_link:"",price:"0.00",primary_isbn10:"1668001225",primary_isbn13:"9781668001226",publisher:"Atria",rank:1,rank_last_week:1,sunday_review_link:"",title:"IT STARTS WITH US",updated_date:"2023-04-05 22:10:15",weeks_on_list:24,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781668001226?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668001226"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BSTARTS%252BWITH%252BUS%252FColleen%252BHoover%252F9781668001226&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BSTARTS%252BWITH%252BUS%252BColleen%252BHoover"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781668001226%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BSTARTS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT"}],__v:0},{_id:"642fd89ac8cf5ee957f122cd",list_name:"Trade Fiction Paperback",date:"2023-04-07T08:46:57.000Z",age_group:"",amazon_product_url:"http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",article_chapter_link:"",author:"Colleen Hoover",book_image:"https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",book_image_width:319,book_image_height:495,book_review_link:"",book_uri:"nyt://book/e2a3545e-e9cb-5828-9d97-50a798a0e4f6",contributor:"by Colleen Hoover",contributor_note:"",created_date:"2023-04-05 22:05:25",description:"A battered wife raised in a violent home attempts to halt the cycle of abuse.",first_chapter_link:"",price:"0.00",primary_isbn10:"1501110365",primary_isbn13:"9781501110368",publisher:"Atria",rank:3,rank_last_week:2,sunday_review_link:"",title:"IT ENDS WITH US",updated_date:"2023-04-05 22:10:15",weeks_on_list:100,buy_links:[{name:"Amazon",url:"http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781501110368?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501110368"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BENDS%252BWITH%252BUS%252FColleen%252BHoover%252F9781501110368&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BENDS%252BWITH%252BUS%252BColleen%252BHoover"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501110368%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BENDS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT"}],__v:0},{_id:"642fd89ac8cf5ee957f122ce",list_name:"Trade Fiction Paperback",date:"2023-04-07T08:46:57.000Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20",article_chapter_link:"",author:"Taylor Jenkins Reid",book_image:"https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg",book_image_width:315,book_image_height:500,book_review_link:"",book_uri:"nyt://book/d9511fac-ee44-5a87-9af7-2cd6a6f8f984",contributor:"by Taylor Jenkins Reid",contributor_note:"",created_date:"2023-04-05 22:05:25",description:"A movie icon recounts stories of her loves and career to a struggling magazine writer.",first_chapter_link:"",price:"0.00",primary_isbn10:"1501161938",primary_isbn13:"9781501161933",publisher:"Washington Square/Atria",rank:4,rank_last_week:5,sunday_review_link:"",title:"THE SEVEN HUSBANDS OF EVELYN HUGO",updated_date:"2023-04-05 22:10:15",weeks_on_list:108,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781501161933?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501161933"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252FTaylor%252BJenkins%252BReid%252F9781501161933&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252BTaylor%252BJenkins%252BReid"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501161933&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501161933%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO%2BTaylor%2BJenkins%2BReid%26aff%3DNYT"}],__v:0},{_id:"642fd89ac8cf5ee957f122cf",list_name:"Trade Fiction Paperback",date:"2023-04-07T08:46:57.000Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/1335004882?tag=NYTBSREV-20",article_chapter_link:"",author:"Colleen Hoover and Tarryn Fisher",book_image:"https://storage.googleapis.com/du-prd/books/images/9781335004888.jpg",book_image_width:333,book_image_height:500,book_review_link:"",book_uri:"nyt://book/584e898d-02af-50fe-87d5-1656a68560d1",contributor:"by Colleen Hoover and Tarryn Fisher",contributor_note:"",created_date:"2023-04-05 22:05:25",description:"Questions arise when a pair of lovers try to uncover why they suddenly became strangers.",first_chapter_link:"",price:"0.00",primary_isbn10:"1335004882",primary_isbn13:"9781335004888",publisher:"Canary Street",rank:5,rank_last_week:4,sunday_review_link:"",title:"NEVER NEVER",updated_date:"2023-04-05 22:10:15",weeks_on_list:5,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/1335004882?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781335004888?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781335004888"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FNEVER%252BNEVER%252FColleen%252BHoover%252Band%252BTarryn%252BFisher%252F9781335004888&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DNEVER%252BNEVER%252BColleen%252BHoover%252Band%252BTarryn%252BFisher"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781335004888&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DNEVER%2BNEVER"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781335004888%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DNEVER%2BNEVER%2BColleen%2BHoover%2Band%2BTarryn%2BFisher%26aff%3DNYT"}],__v:0},{_id:"643282b1e85766588626a0dc",list_name:"Advice How-To and Miscellaneous",date:"2023-04-09T09:28:38.946Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20",article_chapter_link:"",author:"Alison Roman",book_image:"https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg",book_image_width:402,book_image_height:500,book_review_link:"",book_uri:"nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8",contributor:"by Alison Roman",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"",first_chapter_link:"",price:"0.00",primary_isbn10:"1984826395",primary_isbn13:"9781984826398",publisher:"Clarkson Potter",rank:3,rank_last_week:0,sunday_review_link:"",title:"SWEET ENOUGH",updated_date:"2023-04-05 22:10:17",weeks_on_list:1,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781984826398?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT"}],__v:0},{_id:"643282b1e85766588626a0c2",list_name:"Hardcover Fiction",date:"2023-04-09T09:28:40.271Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/0593243730?tag=NYTBSREV-20",article_chapter_link:"",author:"Ann Napolitano",book_image:"https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg",book_image_width:330,book_image_height:500,book_review_link:"",book_uri:"nyt://book/3b1a624d-7296-5b11-9c41-a473f433c18d",contributor:"by Ann Napolitano",contributor_note:"",created_date:"2023-04-05 22:05:23",description:"In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.",first_chapter_link:"",price:"0.00",primary_isbn10:"0593243730",primary_isbn13:"9780593243732",publisher:"Dial",rank:3,rank_last_week:4,sunday_review_link:"",title:"HELLO BEAUTIFUL",updated_date:"2023-04-05 22:10:13",weeks_on_list:3,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0593243730?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780593243732?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593243732"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHELLO%252BBEAUTIFUL%252FAnn%252BNapolitano%252F9780593243732&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHELLO%252BBEAUTIFUL%252BAnn%252BNapolitano"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593243732&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHELLO%2BBEAUTIFUL"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593243732%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHELLO%2BBEAUTIFUL%2BAnn%2BNapolitano%26aff%3DNYT"}],__v:0},{_id:"643282b2e85766588626a0e0",list_name:"Hardcover Fiction",date:"2023-04-09T09:28:39.672Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/0525539808?tag=NYTBSREV-20",article_chapter_link:"",author:"Lisa Scottoline",book_image:"https://storage.googleapis.com/du-prd/books/images/9780525539803.jpg",book_image_width:331,book_image_height:500,book_review_link:"",book_uri:"nyt://book/d5457abe-036c-5071-87e2-30df0ba8136a",contributor:"by Lisa Scottoline",contributor_note:"",created_date:"2023-04-05 22:05:23",description:"The lives of a lemon grower, a young lawyer, a new mother and a reclusive goatherd collide in Sicily during the rise of the Mafia.",first_chapter_link:"",price:"0.00",primary_isbn10:"0525539808",primary_isbn13:"9780525539803",publisher:"Putnam",rank:4,rank_last_week:0,sunday_review_link:"",title:"LOYALTY",updated_date:"2023-04-05 22:10:13",weeks_on_list:1,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0525539808?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780525539803?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780525539803"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FLOYALTY%252FLisa%252BScottoline%252F9780525539803&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DLOYALTY%252BLisa%252BScottoline"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780525539803&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLOYALTY"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780525539803%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DLOYALTY%2BLisa%2BScottoline%26aff%3DNYT"}],__v:0},{_id:"643282b2e85766588626a0e8",list_name:"Combined Print and E-Book Nonfiction",date:"2023-04-01T00:00:00.000Z",age_group:"",amazon_product_url:"https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20",article_chapter_link:"",author:"Prince Harry",book_image:"https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg",book_image_width:329,book_image_height:500,book_review_link:"",book_uri:"nyt://book/f65a1f09-ba88-56d7-8674-390729e19b89",contributor:"by Prince Harry",contributor_note:"",created_date:"2023-04-05 22:05:30",description:"The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle.",first_chapter_link:"",price:"0.00",primary_isbn10:"0593593804",primary_isbn13:"9780593593806",publisher:"Random House",rank:4,rank_last_week:3,sunday_review_link:"",title:"SPARE",updated_date:"2023-04-05 22:10:19",weeks_on_list:12,buy_links:[{name:"Amazon",url:"https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780593593806?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593593806"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSPARE%252FPrince%252BHarry%252F9780593593806&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSPARE%252BPrince%252BHarry"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593593806&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSPARE"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593593806%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSPARE%2BPrince%2BHarry%26aff%3DNYT"}],__v:0}]);localStorage.setItem("books",F);var h=JSON.parse(localStorage.getItem("shopping-trash"));function k(){var e=h;u.innerHTML="";var t=c({items:e,rows:3,buttonsWrapper:"#pagination",handlePaginatedItems:function(e){var t=document.getElementById("list");t.innerHTML=" ",t.innerHTML=e.reduce((function(e,t){return e+' <div class="book-card" id="'.concat(t._id,'">\n        <div class="shopping-list-img">\n        <img\n          class="book-img"\n          src="').concat(t.book_image,'"\n          alt="').concat(t.title,'"\n          loading="lazy"\n        />\n      </div>\n      <div class="info">\n        <div class="first-info-div">\n          <div>\n            <p class="book-name">').concat(t.title,'</p>\n            <p class="book-category">').concat(t.list_name,'</p>\n          </div>\n          <button class="remove-book">\n            <svg class="trash-icon" width="16" height="16"><use href="').concat(o(l),'#trash"></use></svg>\n          </button>\n        </div>\n        <div class="second-info-div">\n          <p class="book-description">\n           ').concat(t.description,'\n          </p>\n        </div>\n        <div class="third-info-div">\n          <div>\n            <p class="book-author">\n            ').concat(t.author,'\n            </p>\n          </div>\n          <div class="shop-list-div">\n          <ul class="shop-list">\n               <li class="shop-item">\n              <a class="shop-link" href="').concat(t.buy_links[0].url,'" target="_blank"><img class="shop-icon amazon-icon" src="').concat(o(r),'" alt="amazon" width="32" height="11"></a>\n              </li>\n                <li class="shop-item">\n                    <a class="shop-link" href="').concat(t.buy_links[1].url,'" target="_blank"><img class="shop-icon" src="').concat(o(i),'" alt="apple shop" width="16" height="16"></a>\n                  </li>\n                    <li class="shop-item">\n                        <a class="shop-link" href="').concat(t.buy_links[4].url,'" target="_blank" ><img class="shop-icon book-shop-icon" src="').concat(o(s),'" alt="book shop" width="16" height="16"></a>\n                      </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>')}),"")}});t.paginate()}function w(){0!==h.length?(k(),d.classList.add("shopping-list-filled")):(p.innerHTML="",u.innerHTML="",b())}function b(){d.classList.remove("shopping-list-filled")}w(),p.addEventListener("click",(function(o){if("BUTTON"===o.target.nodeName){var e=o.target.closest(".book-card").id;h.splice(h.findIndex((function(o){return o._id===e})),1),document.getElementById(e).remove(),localStorage.setItem("shopping-trash",JSON.stringify(h)),0===h.length&&b(),w()}}))}();
//# sourceMappingURL=shopping.e39c9998.js.map
