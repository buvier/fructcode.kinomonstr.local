objDoc = document;
var strTitle = objDoc.title;
var strURL = document.URL;
alert (strTitle + ', ' + strURL);
var strHead = document.head.textContent;
alert (strHead);
var cPs = document.getElementsByTagName('p');
for (i = 0; i < cPs.length; i++) {
  cPs[i].className = 'paragraph'
}
var oP1 = document.getElementById('div0').textContent;
alert (oP1);