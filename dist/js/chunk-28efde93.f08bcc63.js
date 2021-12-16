(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28efde93"],{"7e55":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{"grid-list-md":""}},[i("Toolbar"),i("v-sheet",{attrs:{elevation:"1"}},[i("div",{staticClass:"pa-4 mx-md-auto"},[i("h1",{staticClass:"text-h4 text--primary"},[e._v("Add")]),e.submitted?i("p",{attrs:{id:"addResponseText"}},[e._v(e._s(e.responseText))]):i("div",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{rules:[function(e){return!!e||"Name is required"}],label:"Name",required:""},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}}),i("v-textarea",{attrs:{rules:[function(e){return!!e||"Image URL is required"}],label:"Image URL",required:"",rows:"2"},model:{value:e.item.image,callback:function(t){e.$set(e.item,"image",t)},expression:"item.image"}}),i("v-textarea",{attrs:{rules:[function(e){return!!e||"Description is required"}],label:"Description",required:""},model:{value:e.item.description,callback:function(t){e.$set(e.item,"description",t)},expression:"item.description"}}),i("v-text-field",{attrs:{rules:[function(e){return!!e||"Price is required"}],label:"Price",required:""},model:{value:e.item.price,callback:function(t){e.$set(e.item,"price",t)},expression:"item.price"}}),i("v-text-field",{attrs:{rules:[function(e){return!!e||"Color is required"}],label:"Color",required:""},model:{value:e.item.color,callback:function(t){e.$set(e.item,"color",t)},expression:"item.color"}}),i("v-text-field",{attrs:{rules:[function(e){return!!e||"Taste is required"}],label:"Taste",required:""},model:{value:e.item.taste,callback:function(t){e.$set(e.item,"taste",t)},expression:"item.taste"}}),i("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"Expiry Date","persistent-hint":"","prepend-icon":"mdi-calendar",required:""},model:{value:e.item.expiresDate,callback:function(t){e.$set(e.item,"expiresDate",t)},expression:"item.expiresDate"}},"v-text-field",r,!1),a))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[i("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu1=!1}},model:{value:e.item.expiresDate,callback:function(t){e.$set(e.item,"expiresDate",t)},expression:"item.expiresDate"}})],1),i("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"Expiry Time","persistent-hint":"","prepend-icon":"mdi-clock",required:""},model:{value:e.item.expiresTime,callback:function(t){e.$set(e.item,"expiresTime",t)},expression:"item.expiresTime"}},"v-text-field",r,!1),a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[i("v-time-picker",{attrs:{format:"24hr","use-seconds":"","no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.item.expiresTime,callback:function(t){e.$set(e.item,"expiresTime",t)},expression:"item.expiresTime"}})],1),i("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.addItem}},[i("v-icon",[e._v("mdi-save")]),e._v(" Add")],1),i("v-btn",{attrs:{to:"/"}},[e._v("Cancel")])],1)],1)])])],1)},r=[],s=i("9769"),n={name:"AddItem",data(){return{valid:!0,item:{},submitted:!1,responseText:"",menu1:!1,menu2:!1}},methods:{addItem(){if(this.$refs.form.validate()){let e={name:this.item.name,description:this.item.description,price:this.item.price,color:this.item.color,taste:this.item.taste};e.expires=`${this.item.expiresDate}T${this.item.expiresTime}.100Z`,s["a"].create(e).then(e=>{this.submitted=!0,this.responseText=e.statusText}).catch(e=>{console.log(e)})}}}},o=n,l=(i("8c55"),i("2877")),c=i("6544"),m=i.n(c),u=i("8336"),d=i("a523"),p=i("2e4b"),v=i("4bd4"),x=i("132d"),f=i("e449"),b=i("8dd9"),h=i("8654"),k=i("a844"),T=i("c964"),q=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=q.exports;m()(q,{VBtn:u["a"],VContainer:d["a"],VDatePicker:p["a"],VForm:v["a"],VIcon:x["a"],VMenu:f["a"],VSheet:b["a"],VTextField:h["a"],VTextarea:k["a"],VTimePicker:T["a"]})},"8c55":function(e,t,i){"use strict";var a=i("abd6"),r=i.n(a);r.a},abd6:function(e,t,i){}}]);
//# sourceMappingURL=chunk-28efde93.f08bcc63.js.map