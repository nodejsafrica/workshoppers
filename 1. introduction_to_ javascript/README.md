[![Node.js Africa](https://img.shields.io/badge/node.js%20africa-contributor-green.svg)](http://github.com/nodejsafrica/team-nodejs-africa)

# INTRODUCTION TO JAVASCRIPT

Javascript is a front-end or client-side programming language, basically created for DOM manipulation and creating dynamic web-pages. In 2008 Javascript moved from being just a client-side programming language to being a server-side language with the introduction of Node.js. Now, javascript can live out of the browser DOM and can be used in creating desktop, mobile and web applications.

# Getting Started!

## Step 1:
**Good pratice:  Always create a folder to store your projects.**
- Make sure you have a folder storing your projects.
- Create an index.html file.
- Prepare a boilerplate.
- Your boilerplate should look like this 
```
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Javascript Developer!</title>
    </head>
    <body>
    </body>
</html>
```

- Add a script tag  `<script src=""></script>` in the body of the html page.
Like this 
```
    <body>
        <script src=""></script>
    </body>
```
- NB: the script should always be at the bottom of the file. So it loads last on the HTML page, more explanation will be done soon. 

## Step 2: 
- Create a file call it script.js.
- Open the index.html
- Give the "src" attribute of the script tag a value which will be name of the file you created.
- Like this "`<script src="script.js"></script>`".

## Step 3:
- Open the script.js file. 
- Add the following code. 
```
(function(){
    alert("Hello Javascript");
})();
```

- Open the index.html file your browser. *please, it's best to use Google Chrome as it supports most Javascript APIs*.
- Horray!!!, You just wrote your first javascript code.

