(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,12],{281:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(18),r(32),r(58),r(283)),d=r.n(o),l={data:function(){return{schedule:[],Monday:[],Tuesday:[],Wednesday:[],Thursday:[],Friday:[],Saturday:[]}},methods:{getSchedule:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://beyonddancers.com/admin/schedule").then((function(e){t.sortArray(e.data)}));case 2:case"end":return e.stop()}}),e)})))()},sortArray:function(t){var e=this;t.forEach((function(t){switch(t.day){case"Monday":e.Monday.push(t);break;case"Tuesday":e.Tuesday.push(t);break;case"Wednesday":e.Wednesday.push(t);break;case"Thursday":e.Thursday.push(t);break;case"Friday":e.Friday.push(t);break;case"Saturday":e.Saturday.push(t)}})),this.schedule.push(this.Monday),this.schedule.push(this.Tuesday),this.schedule.push(this.Wednesday),this.schedule.push(this.Thursday),this.schedule.push(this.Friday),this.schedule.push(this.Saturday),console.log(this.schedule)}},created:function(){this.getSchedule()}},c=r(42),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"schedule-all1 row-grid"},[e("div",{staticClass:"container1"},[t._m(0),t._v(" "),e("table",{staticClass:"row-grid"},[t._m(1),t._v(" "),e("tbody",[t._m(2),t._l(t.Monday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n                "+t._s(r.timeStart+"-"+r.timeEnd)+"\n              ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])})),t._v(" "),t._m(3),t._l(t.Tuesday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n                "+t._s(r.timeStart+"-"+r.timeEnd)+"\n              ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])})),t._v(" "),t._m(4),t._l(t.Wednesday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n                "+t._s(r.timeStart+"-"+r.timeEnd)+"\n              ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])})),t._v(" "),t._m(5),t._l(t.Thursday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n                "+t._s(r.timeStart+"-"+r.timeEnd)+"\n              ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])})),t._v(" "),t._m(6),t._l(t.Friday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n                "+t._s(r.timeStart+"-"+r.timeEnd)+"\n              ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])})),t._v(" "),t._m(7),t._l(t.Saturday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n                "+t._s(r.timeStart+"-"+r.timeEnd)+"\n              ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])}))],2)]),t._v(" "),t._m(8)]),t._v(" "),e("div",{staticClass:"container-sm"},[t._m(9),t._v(" "),e("table",{staticClass:"row-grid"},[t._m(10),t._v(" "),e("tbody",[t._m(11),t._l(t.Monday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n              "+t._s(r.timeStart+"-"+r.timeEnd)+"\n            ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])})),t._v(" "),t._m(12),t._l(t.Tuesday,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"freespace freespace2"}),t._v(" "),e("td",{attrs:{"data-label":"Class Name"}},[t._v(t._s(r.className))]),t._v(" "),e("td",{attrs:{"data-label":"Age"}},[t._v(t._s(r.ageGroup))]),t._v(" "),e("td",{attrs:{"data-label":"Class Time"}},[t._v("\n                "+t._s(r.timeStart+"-"+r.timeEnd)+"\n              ")]),t._v(" "),e("td",{attrs:{"data-label":"Studio"}},[t._v(t._s(r.studioNum))]),t._v(" "),e("td",{attrs:{"data-label":"Add Info"}},[t._v(t._s(r.addInformation))])])})),t._v(" "),e("tr")],2)]),t._v(" "),t._m(13)])])}),[function(){var t=this,e=t._self._c;return e("h3",[t._v("CLASS / PROGRAM SCHEDULE"),e("br"),t._v("\n(January 23, 2023 - June 10, 2023)")])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Days")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Class Name")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Age Group")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Class Time")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Studio")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Additional Information")])])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Monday")])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Tuesday")])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Wednesday")])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Thursday")])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Friday")])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Saturday")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sche-note row-grid"},[e("p",[t._v("\n     Additional Notes:\nTeam classes in color with additional information  which say twice a week meet twice a week\nAge group is in parenthesis next to class name\n        ")]),t._v(" "),e("button",{staticClass:"btn btn-secondary row-grid"},[e("a",{attrs:{href:"../../Schedule.pdf",target:"_blank",download:""}},[t._v("\n                Download Schedule")])])])},function(){var t=this,e=t._self._c;return e("h3",[t._v("CLASS / PROGRAM SCHEDULE"),e("br"),t._v("\n(January 23, 2023 - June 10, 2023)")])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Days")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Class Name")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Age Group")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Class Time")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Studio")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Additional Information")])])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Monday")])])},function(){var t=this._self._c;return t("tr",[t("th",{staticClass:"day-txt"},[this._v("Tuesday")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sche-note row-grid"},[e("p",[t._v("\n   Additional Notes:\nTeam classes in color with additional information  which say twice a week meet twice a week\nAge group is in parenthesis next to class name\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-secondary row-grid"},[e("a",{attrs:{href:"Schedule.pdf",target:"_blank",download:""}},[t._v("\n        Download Schedule")])])])}],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";r.r(e);var n={props:["src","video"]},o=r(42),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[t.video?e("div",{staticClass:"video-wrapper"},[e("div",{staticClass:"vimeo-container"},[e("iframe",{attrs:{src:"https://player.vimeo.com/video/"+t.video+"?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1&quality=1080p",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""}})])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},485:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"join-title"},[t("h1",[this._v("Join Us Today!")])])},function(){var t=this._self._c;return t("div",{staticClass:"join-p"},[t("p",[this._v("\n            If you are interested in joining Beyond Dance Studio, we encourage\n            you to pre-register to secure your spot with us!\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"join-img"},[t("img",{attrs:{src:r(310),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"who-we-are row-max-grid"},[e("div",{staticClass:"container"},[e("div",{staticClass:"who-all"},[e("div",{staticClass:"who-title"}),t._v(" "),e("div",{staticClass:"who-desc"},[e("img",{attrs:{src:r(312),alt:""}}),t._v(" "),e("div",{staticClass:"desc-p"},[e("h1",[t._v("Who We Are")]),t._v(" "),e("p",[t._v("\n              Beyond Dance Studio is the first of its kind in Ethiopia\n              offering a wide range of kids dance, martial arts and\n              instrumental classes from Ballet, Jazz, Taekwondo, Piano and\n              Beyond. Our vision is to introduce the joy of dance to hundreds\n              of children across Addis Ababa. We grow our students to become\n              confident, creative and courageous individuals who make lasting\n              memories along the way. Beyond Dance’s vision is to introduce\n              the joy of dance to hundreds of children across Addis Ababa.\n              When you decide to join us at Beyond Dance, you too will be able\n              to take advantage of our professional staff at our\n              fully-equipped and recently renovated studio. Whether you’re a\n              beginner or an experienced dancer looking to improve your\n              technique, we guarantee you’ll find it here.\n            ")]),t._v(" "),e("button",{staticClass:"btn btn-thrid"},[e("a",{attrs:{href:"dancestudio"}},[t._v("Discover More")])])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"separt1"},[t("div",{staticClass:"container"},[t("div",{staticClass:"box"})])])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-secondary row-grid"},[t("a",{attrs:{href:"Schedule.pdf",target:"_blank",download:""}},[this._v("\n              Download Schedule")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"show-videos row-grid"},[e("div",{staticClass:"single-video"},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/uqEmLvvkg4k",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),e("div",{staticClass:"single-video"},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/hZsczpTkXj8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),e("div",{staticClass:"single-video"},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/1G6uCoGnBRs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),e("div",{staticClass:"single-video"},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/7bRxWXRofeM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"map"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title center"},[t._v("Get Our Location")]),t._v(" "),e("p",{staticClass:"text center"},[t._v("\n        If you want to register or contact us in person here is the link for\n        our location.\n      ")]),t._v(" "),e("div",{staticClass:"separt1"},[e("div",{staticClass:"container"},[e("div",{staticClass:"box"})])]),t._v(" "),e("div",{staticClass:"map-container"},[e("div",{staticClass:"location"},[e("div",{staticClass:"map-responsive"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7979184031483!2d38.78157451478621!3d8.9907343935474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85365f26ad5b%3A0x9f836f1aa87df253!2sBeyond%20Dance%20Studio!5e0!3m2!1sen!2set!4v1662642722811!5m2!1sen!2set",width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"rate-us"},[e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("h4",[t._v("Rate Us Now")]),t._v(" "),e("div",{staticClass:"separt1"},[e("div",{staticClass:"container"},[e("div",{staticClass:"box"})])]),t._v(" "),e("div",{staticClass:"rating-stars row-grid"},[e("input",{attrs:{type:"radio",name:"rating",id:"rs0",checked:""}}),e("label",{attrs:{for:"rs0"}}),t._v(" "),e("input",{attrs:{type:"radio",name:"rating",id:"rs1"}}),e("label",{attrs:{for:"rs1"}}),t._v(" "),e("input",{attrs:{type:"radio",name:"rating",id:"rs2"}}),e("label",{attrs:{for:"rs2"}}),t._v(" "),e("input",{attrs:{type:"radio",name:"rating",id:"rs3"}}),e("label",{attrs:{for:"rs3"}}),t._v(" "),e("input",{attrs:{type:"radio",name:"rating",id:"rs4"}}),e("label",{attrs:{for:"rs4"}}),t._v(" "),e("input",{attrs:{type:"radio",name:"rating",id:"rs5"}}),e("label",{attrs:{for:"rs5"}}),t._v(" "),e("span",{staticClass:"rating-counter"})]),t._v(" "),e("p",{staticClass:"row-max-grid"},[t._v("\n          Click the links below to check our reviews and give us a rating on\n          Google Reviews.\n        ")]),t._v(" "),e("div",{staticClass:"btn-review"},[e("button",{staticClass:"btn btn-secondary"},[e("a",{attrs:{href:"https://www.google.com/search?q=beyond+dance+studio&oq=beyond+dance+studio&aqs=chrome..69i57j69i60l3.14601j0j1&sourceid=chrome&ie=UTF-8#lrd=0x164b85365f26ad5b:0x9f836f1aa87df253,1,,,"}},[t._v("\n              View Our Reviews\n            ")])]),t._v(" "),e("button",{staticClass:"btn btn-thrid"},[e("a",{attrs:{href:"https://www.google.com/search?q=beyond+dance+studio&oq=beyond+dance+studio&aqs=chrome..69i57j69i60l3.14601j0j1&sourceid=chrome&ie=UTF-8#lrd=0x164b85365f26ad5b:0x9f836f1aa87df253,3,,,"}},[t._v("\n              Review Us Now")])])])])])])}],o=r(255),d=r(281),l=r(309),c={name:"IndexPage",components:{Footer:o.default,Schedule:d.default,Homevideo:l.default},data:function(){return{homeclass:[{img:"balletlogo.svg",title:"Ballet",desc:"The focus will be set on placement, alignment, flexibility and musicality through a blend of traditional "},{img:"takwalogo.svg",title:"Taekwondo",desc:"Taekwondo is a system of symmetrical body exercises or techniques designed for self-defense and counter..."},{img:"hiphoplogo.svg",title:"HIP HOP",desc:" Hip Hop is very unique, as it allows its dancers to perform with freedom of movement, adding in ..."},{img:"gymlogo.svg",title:"Gymnastics",desc:"Gymnastics is a sport that includes physical exercises requiring balance, strength, flexibility, agility,..."},{img:"yogalogo.svg",title:"Jazz",desc:"Standard jazz combinations will be taught to a mixture of traditional jazz, Broadway and popular music."},{img:"painologo.svg",title:"Piano",desc:" Students learn basic piano skills and fundamentals of music literacy, including basic notation, rhythms, ...."}]}}},v=r(42),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("Navlink"),t._v(" "),e("Homevideo",{staticClass:"row-grid",attrs:{video:"744993912"}}),t._v(" "),e("div",{staticClass:"join-cta row-max-grid"},[e("div",{staticClass:"container"},[e("div",{staticClass:"join-txt"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("button",{staticClass:"btn row-grid btn-purple"},[e("nuxt-link",{attrs:{to:"/register"}},[t._v("Register Now ")])],1)]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"class-all row-max-grid"},[e("div",{staticClass:"container"},[e("div",{staticClass:"class-title"},[e("h2",[t._v("Classes")]),t._v(" "),e("div",[e("a",{staticClass:"grid",attrs:{href:"/program"}},t._l(t.homeclass,(function(n){return e("figure",{key:n.id,staticClass:"effect-bubba"},[e("img",{staticClass:"img-logo",attrs:{src:r(274)("./"+n.img),alt:""}}),t._v(" "),e("figcaption",[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v("\n                  "+t._s(n.desc)+"\n                ")])])])})),0)]),t._v(" "),e("div",{staticClass:"class-note row-max-grid"},[e("p",[t._v("\n            Click the button below to register for classes and view\n            descriptions of all programs, including ballet, taekwondo, jazz,\n            and other classes..\n          ")]),t._v(" "),e("button",{staticClass:"btn btn-thrid row-grid"},[e("nuxt-link",{attrs:{to:"/program"}},[t._v("See all the program ")])],1)])])])]),t._v(" "),e("div",{staticClass:"schedule-show row-max-grid"},[e("div",{staticClass:"container"},[e("h2",[t._v("Schedule")]),t._v(" "),t._m(4),t._v(" "),e("img",{staticClass:"row-grid",attrs:{src:r(311),alt:""}}),t._v(" "),e("div",{staticClass:"sche-note row-grid"},[e("p",[t._v("\n          Please click the button below to download the schedule, which is\n          displayed in full in an image.\n        ")]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-thrid row-grid"},[e("nuxt-link",{attrs:{to:"/program"}},[t._v("See all the program ")])],1),t._v(" "),t._m(5)])])])]),t._v(" "),e("div",{staticClass:"show-case row-max-grid row-bottom-grid"},[e("div",{staticClass:"container"},[t._m(6),t._v(" "),e("p",{staticClass:"row-max-grid"},[t._v("\n        Please click the button below to view the program's highlights. This\n        is the show case for 2022.\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-secondary"},[e("nuxt-link",{attrs:{to:"/program"}},[t._v("Performances & Videos")])],1)])]),t._v(" "),t._m(7),t._v(" "),e("Contactus"),t._v(" "),e("div",{staticClass:"try-hover"}),t._v(" "),t._m(8),t._v(" "),e("Footer")],1)}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{Navlink:r(257).default,Homevideo:r(309).default,Contactus:r(268).default,Footer:r(255).default})}}]);