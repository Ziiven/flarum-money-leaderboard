(()=>{var e={313:e=>{"use strict";e.exports=flarum.extensions["ziiven-decoration-store"]}},o={};function t(a){var r=o[a];if(void 0!==r)return r.exports;var n=o[a]={exports:{}};return e[a](n,n.exports,t),n.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";t.r(a);const e=flarum.core.compat["forum/app"];var o=t.n(e);const r=flarum.core.compat.extend,n=flarum.core.compat["common/extend"],i=flarum.core.compat["components/IndexPage"];var s=t.n(i);const d=flarum.core.compat["components/LinkButton"];var l=t.n(d);const u=flarum.core.compat["forum/components/HeaderSecondary"];var c=t.n(u);const p=flarum.core.compat["common/components/Button"];var y=t.n(p);const f=flarum.core.compat["forum/components/SessionDropdown"];var L=t.n(f);function b(e,o){return b=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},b(e,o)}function h(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,b(e,o)}const v=flarum.core.compat["components/Page"];var M=t.n(v);const x=flarum.core.compat["common/helpers/listItems"];var g=t.n(x);const I=flarum.core.compat["components/LoadingIndicator"];var C=t.n(I);const z=flarum.core.compat["components/Button"];var B=t.n(z);const R=flarum.core.compat.Component;var k=t.n(R);const N=flarum.core.compat["components/Link"];var w=t.n(N);const T=flarum.core.compat["helpers/avatar"];var H=t.n(T);const P=flarum.core.compat["helpers/username"];var O=t.n(P),S=function(e){function o(){return e.apply(this,arguments)||this}return h(o,e),o.prototype.view=function(){var e,o,a=this.attrs,r=a.leaderboardListItem,n=a.rankID,i=app.forum.attribute("antoinefr-money.moneyname")||"[money]",s=r.attribute("money"),d="1"===app.forum.attribute("moneyLeaderBoardHideMoneyText")?s:i.replace("[money]",s),l="MoneyLeaderboardListItemTrophyNone",u="MoneyLeaderboardListItemRankTop";if(1===n?l="MoneyLeaderboardListItemTrophyGold":2===n?l="MoneyLeaderboardListItemTrophySilver":3===n?l="MoneyLeaderboardListItemTrophyBronze":u="MoneyLeaderboardListItemRankLower","ziiven-decoration-store"in flarum.extensions){var c=t(313).components;e=c.avatarWithFrame,o=c.usernameWithColor}return m("div",{className:"MoneyLeaderboardListItemContainer"},m("div",{class:"MoneyLeaderboardListHeaderRank"},m("div",{class:u},n),m("div",{class:l},m("i",{class:"fas fa-trophy"}))),m("div",{class:"MoneyLeaderboardListHeaderUser"},m(w(),{href:app.route.user(r),className:"transferHistoryUser",style:"color:var(--heading-color)"},e?e(r):H()(r),o?o(r):O()(r))),m("div",{class:"MoneyLeaderboardListHeaderMoney"},d))},o}(k()),_=function(e){function o(){return e.apply(this,arguments)||this}h(o,e);var t=o.prototype;return t.oninit=function(o){e.prototype.oninit.call(this,o),this.loading=!0,this.moreResults=!1,this.moneyLeaderboardList=[],this.totalLoadCount=0,this.additionalInfo=app.forum.attribute("moneyLeaderBoardAdditionalInfo"),this.maxLoadCount=app.forum.attribute("leaderboardMaxLoadCount")||50,this.initloadCount=app.forum.attribute("leaderboardInitLoadCount")||20,this.loadMoreCount=app.forum.attribute("leaderboardLoadMoreCount")||10,this.loadResults(0,this.initloadCount)},t.oncreate=function(o){e.prototype.oncreate.call(this,o);var t=app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-title");app.setTitle(t),app.setTitleCount(0),$(".item-nav button .Button-label").text(t)},t.view=function(){var e,o=this,t=0;return this.loading&&(e=C().component({size:"large"})),m("div",{className:"MoneyLeaderboardPage"},s().prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,g()(s().prototype.sidebarItems().toArray()))),m("div",{class:"MoneyLeaderboardContainer"},m("div",{class:"MoneyLeaderboardListTitle"},app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-title")),this.additionalInfo&&this.additionalInfo.length>0&&m("p",{class:"MoneyLeaderboardListAdditionalInformation"},this.additionalInfo),m("div",{class:"MoneyLeaderboardListHeader"},m("div",{class:"MoneyLeaderboardListHeaderRank"},app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-rank")),m("div",{class:"MoneyLeaderboardListHeaderUser"},app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-user")),m("div",{class:"MoneyLeaderboardListHeaderMoney"},app.translator.trans("ziven-money-leaderboard.forum.leaderboard-list-money"))),m("ul",{class:"MoneyLeaderboardList"},this.moneyLeaderboardList.map((function(e){return t++,m("li",{class:"MoneyLeaderboardListItems"},S.component({leaderboardListItem:e,rankID:t}))}))),!this.loading&&0===this.moneyLeaderboardList.length&&m("div",null,m("div",{style:"font-size:1.4em;color: var(--muted-more-color);text-align: center;height: 300px;line-height: 100px;"},app.translator.trans("ziven-money-leaderboard.forum.transfer-list-empty"))),!e&&this.hasMoreResults()&&m("div",{style:"text-align:center;padding:20px"},m(B(),{className:"Button Button--primary",disabled:this.loading,loading:this.loading,onclick:function(){return o.loadMore()}},app.translator.trans("ziven-money-leaderboard.forum.leaderboard-load-more"))),e&&m("div",{className:"MoneyLeaderboard-loadMore"},e)))))},t.hasMoreResults=function(){return this.moreResults&&this.maxLoadCount>this.totalLoadCount},t.loadMore=function(){this.loading=!0,this.loadResults(this.moneyLeaderboardList.length,this.loadMoreCount)},t.parseResults=function(e){return this.moreResults=!!e.payload.links&&!!e.payload.links.next,[].push.apply(this.moneyLeaderboardList,e),this.loading=!1,m.redraw(),e},t.loadResults=function(e,o){if(void 0===e&&(e=0),void 0===o&&(o=20),this.maxLoadCount!==this.totalLoadCount){var t=o;return this.maxLoadCount<this.totalLoadCount+o&&(t=this.maxLoadCount-this.totalLoadCount,this.totalLoadCount=this.maxLoadCount),this.totalLoadCount+=o,app.store.find("moneyLeaderboard",{page:{offset:e,limit:t}}).catch((function(){})).then(this.parseResults.bind(this))}},o}(M());o().initializers.add("ziven-money-leaderboard",(function(){o().routes.moneyLeaderboard={path:"/moneyLeaderboard",component:_},(0,n.extend)(L().prototype,"items",(function(e){if(o().forum.attribute("allowViewLeaderbaord")){var t=o().forum.attribute("moneyLeaderBoardEntryPosition");0==t?(0,r.extend)(s().prototype,"navItems",(function(e){var t=o().forum.attribute("moneyLeaderBoardIcon");return e.add("MoneyLeaderboard",m(l(),{icon:t,href:o().route("moneyLeaderboard")},o().translator.trans("ziven-money-leaderboard.forum.leaderboard-name")),15),e})):1==t&&(0,n.extend)(c().prototype,"items",(function(e){var t=o().forum.attribute("moneyLeaderBoardIcon");e.add("MoneyLeaderboard",m(y(),{className:"Button Button--flat",style:"width:36px",onclick:function(){window.location.href=o().route("moneyLeaderboard")},icon:t},o().translator.trans("ziven-money-leaderboard.forum.leaderboard-name")),15)}))}}))}))})(),module.exports=a})();
//# sourceMappingURL=forum.js.map