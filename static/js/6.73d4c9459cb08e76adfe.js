webpackJsonp([6],{DWEF:function(t,e){},Ijou:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("pFYg"),r=n.n(i),a={name:"x-content",props:{text:{type:String},textAlign:{type:String,default:"left"},verticalAlign:{type:String,default:"top"}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cell-container"},[e("div",{staticClass:"cell-content",attrs:{cellpadding:"0"}},[e("div",{staticClass:"x-cell",style:{"text-align":this.textAlign,"vertical-align":this.verticalAlign}},[this._v("\n      "+this._s(this.text)+"\n    ")])])])},staticRenderFns:[]};var s={name:"x-cell",components:{XContent:n("VU/8")(a,l,!1,function(t){n("JRQA")},"data-v-59c17164",null).exports},inject:["cellSize"],props:{colspan:{type:Number,default:1},rowspan:{type:Number,default:1},text:{type:String},width:{type:Number},height:{type:Number},rowIndex:{type:Number,required:!0},cellIndex:{type:Number,required:!0},textAlign:{type:String,default:"left"},verticalAlign:{type:String,default:"top"}},computed:{style:function(){var t={};return void 0!==this.height?t.height=this.height+"px":0===this.cellIndex&&(t.height=this.cellSize.height+"px"),void 0!==this.width?t.width=this.width+"px":0===this.rowIndex&&(t.width=this.cellSize.width+"px"),t}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:this.colspan,rowspan:this.rowspan}},[e("x-content",{style:this.style,attrs:{text:this.text,textAlign:this.textAlign,verticalAlign:this.verticalAlign}})],1)},staticRenderFns:[]};var c={name:"x-row",components:{XCell:n("VU/8")(s,o,!1,function(t){n("hbPU")},"data-v-24bd65e8",null).exports},props:{columns:{type:Array,required:!0},rowIndex:{type:Number,required:!0}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",t._l(t.columns,function(e,i){return n("x-cell",{key:e.key,attrs:{rowspan:e.rowspan,colspan:e.colspan,text:e.text,cellIndex:i,rowIndex:t.rowIndex,width:e.width,height:e.height,textAlign:e.textAlign,verticalAlign:e.verticalAlign}})}))},staticRenderFns:[]};var d=function(t,e){return t>e?e:t},h=function(t,e){return t<e?e:t},f=function(t,e,n){return t>=e&&t<=n},x=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1},p=function(t,e){for(var n=-1,i=0;i<t.length;i++)e(t[i])&&(n=i);return n},y={name:"xtable-content",components:{XRow:n("VU/8")(c,u,!1,function(t){n("OAJa")},"data-v-70074b22",null).exports},mounted:function(){this.init()},props:{rowCount:{type:Number},colCount:{type:Number},table:{type:Array}},data:function(){return{rows:50,cols:14,selectStart:null,selecting:!1,showMenu:!1,tableData:[],selectedArea:null}},computed:{selectedAreaClientRect:function(){var t=this.getCoordinate(),e=document.querySelector(".x-table").getBoundingClientRect(),n=document.querySelector(".x-table tr:nth-child("+t.y1+") td:nth-child("+t.x1+")").getBoundingClientRect(),i=document.querySelector(".x-table tr:nth-child("+t.y2+") td:nth-child("+t.x2+")").getBoundingClientRect();return{width:i.left-n.left+i.width-1+"px",height:i.top-n.top+i.height-1+"px",top:n.y-e.y-1+"px",left:n.x-e.x-1+"px"}}},methods:{getCoordinate:function(){var t=this.selectedArea,e=this.tableData[t.y1].findIndex(function(e){return e.x===t.x1}),n=this.findTopLeftCell(t.x2,t.y2);return{x1:e+1,y1:t.y1+1,x2:this.tableData[n.y].indexOf(n)+1,y2:n.y+1}},findTopPosition:function(t,e){for(var n=e-1;n>=0;n--){var i=this.tableData[n].findIndex(function(e){return e.x===t});if(-1!==i)return{x:i,y:n,data:this.tableData[n][i]}}},findTopLeftCell:function(t,e){for(var n=e;n>=0;n--){var i=this.tableData[n].findIndex(function(n){return f(t,n.x,n.x+n.colspan-1)&&f(e,n.y,n.y+n.rowspan-1)});if(-1!==i)return this.tableData[n][i]}},calcSelectArea:function(t){var e=this;if(-1===this.tableData[t.y1].findIndex(function(e){return e.x===t.x1})){var n=this.findTopLeftCell(t.x1,t.y1);t.x1=n.x,t.y1=n.y,t.x1=d(t.x1,t.x2),t.y1=d(t.y1,t.y2),t.x2=h(t.x1,t.x2),t.y2=h(t.y1,t.y2)}for(var i=function(n){var i=e.tableData[t.y1].findIndex(function(t){return t.x===n}),r=null;if(!((r=-1===i?e.findTopPosition(n,t.y1).data:e.tableData[t.y1][i]).x+r.colspan-1<=t.x2&&r.y===t.y1))return r.x+r.colspan-1>t.x2&&(t.x2=r.x+r.colspan-1),r.y<t.y1&&(t.y1=r.y),e.calcSelectArea(t),{v:void 0};n+=r.colspan-1,a=n},a=t.x1;a<=t.x2;a++){var l=i(a);if("object"===(void 0===l?"undefined":r()(l)))return l.v}for(a=t.y1;a<=t.y2;a++){var s=this.tableData[a].findIndex(function(e){return e.x===t.x1});-1===s&&(s=p(this.tableData[a],function(e){return e.x<=t.x1}));var o=this.tableData[a][s];if(!(o.x===t.x1&&o.y+o.rowspan-1<=t.y2))return o.y+o.rowspan-1>t.y2&&(t.y2=o.y+o.rowspan-1),o.x<t.x1&&(t.x1=o.x),void this.calcSelectArea(t);a+=o.rowspan-1}for(var c=function(n){var i=e.tableData[t.y2].findIndex(function(t){return t.x===n}),r=null;if(!((r=-1===i?e.findTopPosition(n,t.y2).data:e.tableData[t.y2][i]).y+r.rowspan-1===t.y2&&r.x+r.colspan-1<=t.x2))return r.y+r.rowspan-1>t.y2&&(t.y2=r.y+r.rowspan-1),r.x+r.colspan-1>t.x2&&(t.x2=r.x+r.colspan-1),e.calcSelectArea(t),{v:void 0};n+=r.colspan-1,u=n},u=t.x1;u<=t.x2;u++){var f=c(u);if("object"===(void 0===f?"undefined":r()(f)))return f.v}for(var x=t.y1;x<=t.y2;x++){var y=this.tableData[x].findIndex(function(e){return e.x+e.colspan-1===t.x2});-1===y&&(y=p(this.tableData[x],function(e){return e.x<=t.x2}));var v=this.tableData[x][y];if(!(v.x+v.colspan-1===t.x2&&v.y+v.rowspan-1<=t.y2))return v.x+v.colspan-1>t.x2&&(t.x2=v.x+v.colspan-1),v.y+v.rowspan-1>t.y2&&(t.y2=v.y+v.rowspan-1),void this.calcSelectArea(t);x+=v.rowspan-1}},setSelectArea:function(t,e){if(t&&e){var n={x1:d(t.x,e.x),y1:d(t.y,e.y),x2:h(t.x+t.colspan-1,e.x+e.colspan-1),y2:h(t.y+t.rowspan-1,e.y+e.rowspan-1)};this.calcSelectArea(n),this.selectedArea=n}},init:function(){if(void 0===this.table){for(var t=[],e=0;e<this.rowCount;e++){for(var n=[],i=0;i<this.colCount;i++)n.push({x:i,y:e,colspan:1,rowspan:1});t.push(n)}this.tableData=t}else this.tableData=this.table},getCell:function(t,e){},mousedown:function(t){if(0===t.button){this.selectStart=this.getCell()}},mousedown1:function(t,e){if(0===t.button){this.showMenu=!1;this.selectStart=e,this.selecting=!0,this.setSelectArea(e,e),document.addEventListener("mouseup",this.mouseup)}},mouseup:function(){this.selecting=!1,document.removeEventListener("mouseup",this.mouseup)},showContextmenu:function(t,e){e.selected?(this.$refs.tableContext.style.top=t.clientY+"px",this.$refs.tableContext.style.left=t.clientX+"px",this.showMenu=!0):this.setSelectArea()},mouseenter:function(t){this.selecting&&this.setSelectArea(this.selectStart,t)},mergeCell:function(){var t=this.selectedArea,e=this.tableData[t.y1],n=e.findIndex(function(t){return t.selected}),i=p(e,function(t){return t.selected});this.tableData[t.y1][n].rowspan=t.y2-t.y1+1,this.tableData[t.y1][n].colspan=t.x2-t.x1+1,e.splice(n+1,i-n);for(var r=t.y1+1;r<=t.y2;r++){e=this.tableData[r];var a=x(e,function(t){return t.selected}),l=p(e,function(t){return t.selected});-1!==a&&-1!==l&&e.splice(a,l-a+1)}this.selectedArea.x2=this.selectedArea.x1,this.selectedArea.y2=this.selectedArea.y1,this.setSelectArea(this.selectedArea.start,this.selectedArea.end),this.showMenu=!1},cellBorder:function(){for(var t=this.selectedArea,e=t.y1;e<=t.y2;e++){this.tableData[e].filter(function(t){return t.selected}).map(function(t){var e=t.style||{};e.border="1px solid #212121",t.style=e})}this.setSelected(this.selectedArea,!1),this.showMenu=!1}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{ref:"table",staticClass:"x-table-content",attrs:{cellspacing:"0",cellpadding:"0"},on:{mousedown:function(e){t.mousedown(e)}}},[n("tbody",t._l(t.tableData,function(t,e){return n("x-row",{key:e,attrs:{columns:t,rowIndex:e}})}))])},staticRenderFns:[]};var b={name:"x-table",components:{XtableContent:n("VU/8")(y,v,!1,function(t){n("pQzU")},"data-v-2db79d40",null).exports},provide:function(){return{cellSize:this.cellSize}},watch:{scrollLeft:function(t){this.$refs.tableHeader.$el.scrollTo(t,0)},scrollTop:function(t){this.$refs.tableRownum.$el.scrollTo(0,t)}},data:function(){return{cellSize:{width:80,height:28},rows:50,cols:30,scrollLeft:0,scrollTop:0}},mounted:function(){},computed:{header:function(){for(var t=[],e=0;e<this.cols;e++)t.push({text:this.numberToletter(e),x:e,y:0,textAlign:"center",verticalAlign:"middle"});return[t]},rownum:function(){for(var t=[],e=this.cellSize.height,n=0;n<this.rows;n++)t.push([{text:n+1+"",x:0,y:n,textAlign:"center",verticalAlign:"middle",width:e}]);return t}},methods:{numberToletter:function(t,e){var n=String.fromCharCode(65+t%26)+(e||""),i=parseInt(t/26);return i>0&&(n=this.numberToletter(i-1,n)),n},scroll:function(){this.scrollLeft=this.$refs.tableBody.$el.scrollLeft,this.scrollTop=this.$refs.tableBody.$el.scrollTop}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",{staticClass:"x-table-tool",staticStyle:{height:"auto"}},[n("div",{staticClass:"tool-align"},[n("el-button-group",[n("el-button",{attrs:{size:"mini",icon:"fc-icon-vertical-align-top"}}),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"fc-icon-vertical-align-middl"}}),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"fc-icon-vertical-align-botto"}})],1),t._v(" "),n("el-button-group",[n("el-button",{attrs:{size:"mini",icon:"fc-icon-align-left"}}),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"fc-icon-align-center"}}),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"fc-icon-align-right"}})],1)],1)]),t._v(" "),n("el-container",{staticClass:"x-table"},[n("el-aside",{staticClass:"x-table-rownum"},[n("el-container",[n("el-header",{staticClass:"x-table-header",style:{height:t.cellSize.height+"px!important"}}),t._v(" "),n("el-main",{ref:"tableRownum",staticClass:"x-rownum-container"},[n("xtable-content",{attrs:{table:t.rownum}})],1)],1)],1),t._v(" "),n("el-container",{staticClass:"x-table-view"},[n("el-header",{staticClass:"x-table-header"},[n("el-container",[n("el-main",{ref:"tableHeader",staticClass:"x-header-container"},[n("xtable-content",{attrs:{table:t.header}})],1),t._v(" "),n("el-aside",{attrs:{width:"8px"}})],1)],1),t._v(" "),n("el-main",{ref:"tableBody",staticClass:"x-table-body",nativeOn:{scroll:function(e){return t.scroll(e)}}},[n("xtable-content",{attrs:{rowCount:t.rows,colCount:t.cols}})],1)],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(b,m,!1,function(t){n("DWEF")},"data-v-dedc0670",null);e.default=g.exports},JRQA:function(t,e){},OAJa:function(t,e){},hbPU:function(t,e){},pQzU:function(t,e){}});