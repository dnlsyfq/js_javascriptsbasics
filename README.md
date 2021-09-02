HTML



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

![](/img/dom_1.png)