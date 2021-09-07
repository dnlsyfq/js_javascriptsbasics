HTML

Project Example :
 a

### <script></script>

* defer 
defer attribute specifies scripts should be executed after the HTML file is completely parsed. When the HTML parser encounters a <script> element with the defer attribute, it loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file.

```
<script src="example.js" defer></script> 
```

e.g. 
```
<html>
 
  <head>
  	<link rel="stylesheet" href="style.css">
  	<!--  Add the defer attribute to the script below:  -->
  	<script id="blue" src="turnBlue.js" defer></script>
  </head>

  <body>		
  	<p class="centered" id="logo">Codecademy</p>

  	<script id="yellow" src="turnYellow.js"></script>
  </body>
</html>
```
```
const elemLogo = document.getElementById('logo');

elemLogo.style.color = 'cyan';

```
```
const elem = document.getElementById('logo');

elem.style.color = 'yellow';
```

* async 
async attribute loads and executes the script asynchronously with the rest of the webpage. This means that, similar to the defer attribute, the HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, with the async attribute, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded.

```
<script src="example.js" async></script>
```




---

### document
document.write( i + "<br />");

### Javascript and the DOM


<img src="images/dom_1.png?raw=true">


* document.getElementById("")
```
document.getElementById("").style.color = '';

```

```
    <p id="one">Here is some text</p>
    <script>
        document.getElementById("one").style.color = 'red';
    </script>
```

```
const headline = document.getElementById('headline');
const btnmain = document.getElementById('btn-main');

btnmain.addEventListener('click',() =>{
    headline.style.border = 'solid 2px red';                     
});

```

```
const button = document.getElementById('btn-phrase');
const input = document.getElementById('input-phrase');

button.addEventListener('click', () => {
  alert(input.value);
});
```


* document.getElementsByTagName()
return htmlcollection
```
<p>Here is paragraph</p>
<p>Here is another paragraph</p>
<p>Here is one more paragraph</p>

<script>
    let myParagraph = document.getElementsByTagName('p');
    console.log(myParagraph);
</script>
```
```
<script>
    // let myParagraph = document.getElementsByTagName('p');
    // console.log(myParagraph);
    let myText = document.getElementsByTagName('p');
    for(let i = 0; i < myText.length; i++){
        myText[i].style.color = 'red';
    }

</script>

```

```
const li = document.getElementsByTagName('li');
for(let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'yellow';
}
```

* document.getElementsByClassName()
return htmlcollection
```
<p class="blue">Here is some text</p>
<p>Here is some more text</p>
<p class="blue">Here is even more text</p>

<script>
    var myText = document.getElementsByClassName('blue');
    for(var i = 0; i < myText.length; i++){
        myText[i].style.color='blue';
    }
</script>
```

```
const highlights = document.getElementsByClassName('highlight');
//for(let i = 0; i < highlight.length; i++){
//    highlight[i].style.backgroundColor = 'cornsilk';
//}

for(const highlight of highlights){
    highlight.style.backgroundColor = 'cornsilk';
}
```

* document.querySelector();
Use CSS Queries
return first match
```
<div id="special">
    <p class="someclass">Here is some text</p>
    <p>Here is some more text</p>
    <p>Here is one more paragraph</p>
</div>

    <script>
        var myText = document.querySelector('#special .someclass');
        myText.style.color = 'red';
    </script>

```
```
document.querySelector('button');
document.querySelector('.btn-toggle'); // class
document.querySelector('#headline'); // id
document.querySelector('[title="Page Title"]'); // title="Page Title"
document.querySelectorAll('nav a');
document.querySelectorAll('#gallery a');
```

* document.querySelectorAll();
Use CSS Queries
get all elements matched , return a nodelist of elements 
nodelist
  * contains elements nodes and text nodes
  * iterate for, for of , map() and forEach()
  *  static 
```
<div id="special">
    <p>Here is some text</p>
    <p>Here is some more text</p>
</div>
<p>Not this paragraph!</p>

<script>
    var myText = document.querySelectorAll("#special p");
    for(var i=0; i < myText.length; i++){
        myText[i].style.fontWeight = "bold";
    }
</script>
```

### DOM properties

* element.style.color = ""
* element.style.property = ""
* element.innerHTML = ""
use this property to change the html inside any element on web page
```
<div id="special">
    <p>Here is some text</p>
    <p>Here is some more text</p>
</div>

<script>
    var myDiv = document.getElementById('special');
    myDiv.innerHTML = "<p>I love cheese</p>";
</script>
```

* element.className = ""
setting className properly allows you to set the class
or classes for an element

```
    <style>
        .blue {color:blue;}
    </style>
    
    <div id="special">
        <p>Here is some text</p>
        <p>Here is some more text</p>
    </div>
    
    <script>
        var firstPara = document.querySelector('p');
        firstPara.className = 'blue';
    </script>
```


### DOM methods 

* .setAttribute("attributeName",value);
```
<form>
    <label><input type="checkbox">YES!</label>
</form>

<script>
    var myCheckbox = document.querySelector('input');
    myCheckbox.setAttribute('checked','checked');
</script>


```


* .removeAttribute("attributeName");
* .getAttribute("attributeName");

### Creating Elements and Text Nodes

```
<div>
    <p>Here is a paragraph</p>
</div>

<script>
    var myTag = document.createElement('p');
    var mySentence = document.createTextNode('second paragraph');
    myTag.appendChild(mySentence);
    document.querySelector('div').appendChild(myTag);
</script>

```

```

      <input type="text" id="main" class="input-main">
      <button id="btn-main">Update Heading</button>
  
    
         
      <ul aria-live="polite">
                <li class="highlight">Make coffee</li>
                <li>Practice JavaScript</li>
                <li>Walk the cat</li>
                <li>Watch a Treehouse video</li>
                <li class="highlight">Go swimming</li>
                <li class="highlight">Play my guitar</li>
      </ul>
     
     
    const btnUpdate = document.getElementById('btn-main');
    btnUpdate.addEventListener('click',() =>{
        const input = document.querySelector('.input-main');
        const item = document.createElement('li');
        item.textContent = input.value;
        document.querySelector('ul').appendChild(item);
    });



```

### append nodes

* ParentNode.append()
* ParentNode.prepend(child)
* ParentNode.append(child)

### insert html at specified positions

* element.insertAdjacentHTML(position,html);
  Use the InsertAdjacentHTML method to insert elements into the DOM. This method provides more control over inserting HTML inside a parent

```
     <input type="text" id="main" class="input-main">
     <button id="btn-main">Update Heading</button>
                
     const btnUpdate = document.getElementById('btn-main');
     btnUpdate.addEventListener('click',() =>{
        const input = document.querySelector('.input-main');
        const list = document.querySelector('ul');
    
        list.insertAdjacentHTML(
          'afterbegin',
          `<li>${input.value}</li>`
        );

        input.value = '';

    });

```

### Remove Elements

```
<div>
    <p>Here is a paragraph</p>
    <p>Remove this paragraph</p>
</div>

<script>
    var myDiv = document.querySelector('div');
    myDiv.removeChild(myDiv.children[1]);
</script>
```

```
btnRemove.addEventListener('click',() => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();
})
```

```
btnRemove.addEventListener('click',() => {
    const ul = document.querySelector('ul');
    ul.removeChild(ul.lastElementChild);

})
```

### DOM

window.document 
document.body.style.backgroundColor = ''
document.body.innerHTML = ''
document.body.remove()


---

# Treehouse

### Browser Events

document.body.addEventListener(<event>,<function>)
```
const body = document.body;

body.addEventListener('click',() => {
//     console.log('You clicked the body');                          
     body.innerHTML = '<h1>Hello, World</h1>';
});
```

```
const headline = document.getElementById('headline');
const btnmain = document.getElementById('btn-main');

document.getElementsByTagName('li').style.backgroundColor = 'skyblue';

btnmain.addEventListener('click',() =>{
    headline.style.border = 'solid 2px red';    
    headline.style.fontSize = '60px';
});

```

```
        <div class="list-container">
            <ul aria-live="polite">
                <li class="highlight">Make coffee</li>
                <li>Practice JavaScript</li>
                <li>Walk the cat</li>
                <li>Watch a Treehouse video</li>
                <li class="highlight">Go swimming</li>
                <li class="highlight">Play my guitar</li>
            </ul>
            <button class="btn-remove">Remove Last Task</button>
        </div>
        
        const btnToggle = document.querySelector('.btn-toggle');
        
        btnToggle.addEventListener('click',() => {
            const listContainer = document.querySelector('.list-container');
        
            if(listContainer.style.display === "none"){
                listContainer.style.display = '';
                btnToggle.textContent = 'Hide List';
            } else {
                listContainer.style.display = 'none';
                btnToggle.textContent = 'Show List';
            }
        
        });
```

### accessing element

* document.body
* document.head

### get and set content with textContent and innerHTML

* Element.textContent
* Element.innerHTML

```
const btnUpdate = document.getElementById('btn-main');
btnUpdate.addEventListener('click',() =>{

    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');

    headline.textContent = input.value;
    input.value = '';
});
```

### change element attributes

* element.attribute
  * element.className
```
const myInput = document.querySelector('input');
myInput.type = 'checkbox';
myInput.title = 'hover words';

```

```
.grow {
  font-size: 4.8rem;
  transition: font-size 0.8s ease-in-out;
}

element.className = 'grow';
```

### Set Inline Styles with the style Property

```<div style="background-color:teal;"></div>```

* element.style   // list all

