shingetsu.initialize(function(){
 $.each($("dd"),function(i,ele){
  var t=$(ele).text();
  if(t.startsWith("@markdown")){$(ele).html(marked(t.substring("@markdown".length)));}
 });
});
