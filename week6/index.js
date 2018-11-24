var body = document.body;           //seleksi body
var mainDiv = document.createElement('div');    //buat element <div> with ELEMENT
var mainDivAttributeId = document.createAttribute('id');   //buat ID with ATTRIBUTE (didalam element)

//to give value to ID
mainDivAttributeId.value = 'main';    //id ='main'

//to set value to <div> element 
mainDiv.setAttributeNode(mainDivAttributeId); //<div id="main">

//tambahin ke body (parent children relationship)
body.appendChild(mainDiv);

//buat DIV k2
var insideMainDiv = document.createElement('div');
insideMainDiv.setAttribute('id', 'inside-main');      //to directly give attribute and set its value
mainDiv.appendChild(insideMainDiv);

//buat H1 (element)
var h1 = document.createElement('h1');
var h1text = document.createTextNode('Heading Sample 1');
h1.appendChild(h1text);
insideMainDiv.appendChild(h1);

//create button with text
var button = document.createElement('button');
var buttonText = document.createTextNode('Click Me!');
button.appendChild(buttonText);
//add alert
button.addEventListener('click', function () {
  alert('hello!');
});
insideMainDiv.appendChild(button);


//untuk menghapus element
insideMainDiv.removeChild(h1);


//===============================================================================
var bodychild = body.children;
console.log(bodychild);     //will show you bodychild in ARRAY

var contohDiv1 = document.getElementById('main');
var contohDiv1child = contohDiv1.children;          //in ARRAY (walaupun cuma ada 1 value)

var contohDiv1firstChild = contohDiv1[0];
console.log(contohDiv1firstChild); // <p id="main">...</p>


//akses child through parent
for (var i = 0; i < contohDiv1child.length; i++) {
  var contohDiv1children = contohDiv1child[i];
  console.log(contohDiv1children);
}

//akses parent through child
var contohP1 = document.getElementById('contohp1');
var contohp1Parent = contohp1.parentNode;
console.log(contohp1Parent);