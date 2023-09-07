import{h as u,A as d,l as g,P as y,_ as S,u as T,i as D,j as A,d as _,t as w,o as a,c,a as e,k as l,m as r,n as h,F as C,e as x,q as B,s as L,v as N,p as P,g as j}from"./index-792fb8e5.js";import{t as E}from"./TicketsService-b76a0651.js";class I{constructor(n){this.id=n.id,this.creatorId=n.creatorId,this.eventId=n.eventId,this.body=n.body,this.isAttending=n.isAttending,this.creator=n.creator}}class V{async getCommentsByEventId(n){try{const i=await u.get(`api/events/${n}/comments`);d.comments=i.data.map(t=>new I(t))}catch(i){g.error(i),y.error(i.message)}}async createComment(n,i){try{const t=await u.post("api/comments",{body:n,eventId:i});d.comments.push(new I(t.data))}catch(t){g.error(t),y.error(t.message)}}async deleteComment(n){try{await u.delete(`api/comments/${n}`),d.comments=d.comments.filter(i=>i.id!=n)}catch(i){g.error(i),y.error(i.message)}}}const b=new V;const q={setup(){const o=T(),n=D(""),i=async()=>{await w.getTowerEventById(o.params.eventId)},t=async()=>{await b.getCommentsByEventId(o.params.eventId)},k=async()=>{await E.getTicketsByEventId(o.params.eventId)};return A(()=>{i(),t(),k()}),{account:_(()=>d.account),route:o,activeEvent:_(()=>d.activeTowerEvent),comments:_(()=>d.comments),commentBody:n,tickets:_(()=>d.tickets),async attendEvent(){await E.createTicket(o.params.eventId),d.activeTowerEvent.ticketCount++},async unattendEvent(){await E.deleteTicket(),d.activeTowerEvent.ticketCount--},async createComment(){await b.createComment(n.value,o.params.eventId),n.value=""},async deleteComment(v){await y.confirm("Delete this comment")&&await b.deleteComment(v)},async cancelEvent(){await y.confirm("Cancel this event?")&&await w.cancelEvent(o.params.eventId)},isAttending:_(()=>d.account?d.tickets.find(v=>v.accountId==d.account.id):!1)}}},m=o=>(P("data-v-83fec78d"),o=o(),j(),o),F={key:0,class:"row details-section m-0"},M={class:"col-12 event-block mt-3 px-0"},R=["src","alt"],U={class:"row event-info d-flex p-4"},z={class:"col-md-5 col-12 event-img-container"},G=["src","alt"],H={class:"col-md-7 col-12 px-3 mt-md-0 mt-3"},J={class:"d-flex flex-column h-100"},K={class:"mb-3 mb-md-0 d-flex justify-content-between"},O={class:"fs-2"},Q={class:"fs-4"},W={class:"fs-4"},X={class:"fs-4"},Y={class:"custom-fs-6"},Z={class:"mt-auto d-flex justify-content-between align-items-end"},$={key:0,class:"fs-2 mb-0 text-danger"},tt={key:1,class:"fs-2 mb-0 text-danger"},et={key:2,class:"fs-2 mb-0"},nt={key:0},st=m(()=>e("i",{class:"mdi mdi-account-minus me-2"},null,-1)),at={key:1,disabled:"",class:"btn btn-secondary fs-3"},ct=m(()=>e("i",{class:"mdi mdi-account-cancel"},null,-1)),ot={key:2,disabled:"",class:"btn btn-secondary fs-3"},it=m(()=>e("i",{class:"mdi mdi-account-cancel"},null,-1)),dt=m(()=>e("i",{class:"mdi mdi-account-plus me-2"},null,-1)),lt={key:0,class:"col-12 mt-3"},rt=m(()=>e("p",{class:"fs-3"},"Attendee List",-1)),mt={class:"d-flex flex-wrap attendee-block p-2"},vt={class:"tagtooltip"},_t=["title","src"],ht={class:"col-md-6 col-12 mx-auto mt-4"},yt=m(()=>e("p",{class:"fs-3"},"See what people are saying",-1)),ft={class:"mb-3 d-flex"},ut=m(()=>e("button",{type:"submit",class:"d-flex btn btn-primary"},[h("Post"),e("i",{class:"ms-1 mdi mdi-send-variant"})],-1)),gt={key:1},Et=["src","alt"],bt={class:"mb-0 mt-3"},kt={class:"mb-3"},pt=["onClick"];function wt(o,n,i,t,k,v){return t.activeEvent?(a(),c("div",F,[e("div",M,[e("img",{class:"event-bg-image",src:t.activeEvent.coverImg,alt:t.activeEvent.name},null,8,R),e("div",U,[e("div",z,[e("img",{class:"img-fluid event-img",src:t.activeEvent.coverImg,alt:t.activeEvent.name},null,8,G)]),e("div",H,[e("div",J,[e("div",null,[e("div",K,[e("h2",O,l(t.activeEvent.name),1),!t.activeEvent.isCanceled&&t.activeEvent.creatorId==t.account.id?(a(),c("button",{key:0,onClick:n[0]||(n[0]=(...s)=>t.cancelEvent&&t.cancelEvent(...s)),class:"btn btn-danger fs-3"},"Cancel Event")):r("",!0)]),e("h3",Q,l(t.activeEvent.location),1),e("h3",W,l(t.activeEvent.startDate.toLocaleDateString()),1),e("h3",X,l("Starting at "+t.activeEvent.startDate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),1),e("p",Y,l(t.activeEvent.description),1)]),e("div",Z,[e("div",null,[t.activeEvent.isCanceled?(a(),c("p",$,"Event is cancelled")):t.activeEvent.capacity-t.activeEvent.ticketCount<1?(a(),c("p",tt,"At Capacity")):r("",!0),t.activeEvent.isCanceled?r("",!0):(a(),c("p",et,l(t.activeEvent.capacity-t.activeEvent.ticketCount+" spots left"),1))]),t.account.id?(a(),c("div",nt,[t.isAttending?(a(),c("button",{key:0,onClick:n[1]||(n[1]=(...s)=>t.unattendEvent&&t.unattendEvent(...s)),class:"btn btn-danger fs-3"},[st,h("Not Attending")])):t.activeEvent.isCanceled?(a(),c("button",at,[ct,h("Event Cancelled")])):t.activeEvent.capacity-t.activeEvent.ticketCount==0?(a(),c("button",ot,[it,h("Event At Capacity")])):(a(),c("button",{key:3,onClick:n[2]||(n[2]=(...s)=>t.attendEvent&&t.attendEvent(...s)),class:"btn btn-primary fs-3"},[dt,h("Attend")]))])):r("",!0)])])])])]),t.tickets.length>0?(a(),c("div",lt,[rt,e("div",mt,[(a(!0),c(C,null,x(t.tickets,s=>{var f,p;return a(),c("div",{key:s.id,class:"tooltip-container mb-auto"},[e("span",vt,l((f=s.profile)==null?void 0:f.name),1),e("img",{class:"ticket-avatar",title:(p=s.profile)==null?void 0:p.name,src:s.profile.picture},null,8,_t)])}),128))])])):r("",!0),e("div",ht,[yt,!t.activeEvent.isCanceled&&t.account.id?(a(),c("form",{key:0,onSubmit:n[4]||(n[4]=B((...s)=>t.createComment&&t.createComment(...s),["prevent"]))},[e("div",ft,[L(e("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>t.commentBody=s),type:"text",minLength:"5",maxlength:"500",class:"form-control","aria-describedby":"helpId",required:"",placeholder:"Share your thoughts..."},null,512),[[N,t.commentBody]]),ut])],32)):r("",!0),t.comments.length<1?(a(),c("p",gt,"No comments found...")):(a(!0),c(C,{key:2},x(t.comments,s=>(a(),c("div",{class:"comment d-flex justify-content-start align-items-center px-4 py-3t mb-3",key:s.id},[e("img",{class:"ticket-avatar me-2",src:s.creator.picture,alt:s.creator.name},null,8,Et),e("div",null,[e("h5",bt,l(s.creator.name),1),e("p",kt,l(s.body),1)]),s.creatorId==t.account.id?(a(),c("i",{key:0,onClick:f=>t.deleteComment(s.id),role:"button",class:"ms-auto fs-1 text-danger mdi mdi-trash-can"},null,8,pt)):r("",!0)]))),128))])])):r("",!0)}const It=S(q,[["render",wt],["__scopeId","data-v-83fec78d"]]);export{It as default};
