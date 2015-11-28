marked.setOptions({
    highlight: function(code,lang) {
        return hljs.highlightAuto(code,[lang]).value;
    }
});
shingetsu.initialize(function(){
 $("dd").each(function(i,ele){
  var t=$(ele).text();
  if(t.substring(0,"@markdown".length)=="@markdown"){
   $(ele).html(marked(t.substring("@markdown".length)));
  }
 });
});
