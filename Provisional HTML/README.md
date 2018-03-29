# Provisional HTML Crash Course

[![Node.js Africa](https://img.shields.io/badge/node.js%20africa-contributor-green.svg)](http://github.com/nodejsafrica/team-nodejs-africa)

This course is not a comprehensive HTML course but something to get you started with JS. We strongly advice more research should be done, but also hope that end of this course you should be ready to write simple HTML and JS.

## Getting Started
- Install a code editor [Visual studio code VSC](https://code.visualstudio.com/Download) : A code editor is software or tool that helps you write clean codes, rather than using the regular notepad on your local machine.
- Making sure you have the latest version of chrome installed [Google Chrome](https://www.google.com/chrome/).
- Now you are all ready... Let's learn.

## Step 1:
**Good pratice: Make sure you create a folder to save your html projects**
- Open your code editor 
- Open the folder *using vs code: windows->  CTRL + O, mac -> CMD + O*
- Navigate to your project folder and click open 
- Your code editor should look like this ![vscode](img/vscode.PNG)
- Click on file -> New File -> File name should be index.html

If you were able to complete this task, you deserve a Hi-Five! **Award: HTML Boss!**


## Step 2: Create the HTML file
Now you have a file named index.html, you might be probably thinking:
- What's next?
- What's HTML? 
- Why was the file named *'index'* not something other than that?

### What's HTML?
HTML stands for HyperText Markup Language, there is no web application or website that does not some html codes. Therefore, HTML is the building block of any application that runs in your browser from simple static webpages to dynamic pages.

HTML being a markup language, meaning it should have some sort of tags or elements marking or matching up to something, right? Yes! HTML has it's own elements and tag that are represented in the browser and rendered in different forms according to it's uses. Like:
`<img src="">` that's an image tag, if a src is passed in, it renders an image on the browser but `<p></p>` can not render an image on the browser. 

Good! Now we understand that markups are elements that are represented in codes as tags and rendered in the browser based on their definition and uses.

### Why was the file named index.html
The browser looks up for the index, as the name simple means a search point. Think of it as human looking for a definition or word in a book or dictionary, it's eaiser to check the index page of the textbook or dictionary for the content you need, right? The browser performs in a similar manner it looks up the index as a seacrching point to render a webpage.

### What next?

## Step 3: Creating a boileplate
- Prepare a boilerplate 
- Typing `html:5` and clicking on 'CTRL + Spacebar + Enter' or 'CMD + Spacebar + Return' should give you something like this:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

if that didn't happen copy and paste the code in your index.hmtl file.
*Don't bother with the meta tag for now, but know it's for page description*.

- Notice the `<!Doctype HTML>` at the top of the file? It tells the browser that the code in the this file an HTML5 code and it should use just HTML5 tag names and attributes.
- Next the `<head></head>` tag: The head tag holds meta data, things that can't been seen on the webpage but they exist. For now pay attention to the `<title></title>` tag that holds the title of the page.

## Step 4: Opening and serving the webpage
- How do we see what we've done so far in the browser.
- Right click on the index.html in vs code and click copy file path 
- Paste the file path in the URL search bar of your browser and click enter or return 

An empty page should be rendered, 
- Now open your code editor and try changing the content of the title tag to `<title>My First HTML</title>` hit save 'CTRL + S' or 'CMD + S'.
- Refresh the browser and see your changes ![My First HTML](img/html.PNG)

- *NB:- Whenever you make a change in the html file always save and refresh to see your changes..*

## Step 5: More Tags
[HTML Tags](https://www.html-5-tutorial.com/all-html-tags.htm) You could look that up for all the avaliable html tags.

## Step 6: Working with Tags
Every tag has an opening and a closing tag except some like `<br>`, `<img>`, `<link>`, and `<meta>` you could also lookout for those not listed here.

This course is to prepare you for JS and we won't be doing much talks about style or any of that our major concentration are attributes and event of each element or tags.

We encourage you to think of the box, not be littling your thoughts and imagination. 

- Open the html file you created earlier add the follwing line of code to your index.html    
```
    <div>
      <h1>My First HTML Project</h1>
        <input type="" class="" id="" placeholder="" value="" style="">
        <p class="" id="" style=""></p>
    </div>
```
Awesome!
- Consider the code above, notice that they are some text in the tag defintions, these are considered to be called attributes and HTML attribute is a modifier of an HTML element type. An attribute either modifies the default functionality of an element type or provides functionality to certain element types might be unable to function correctly without them.

## Step 7: Understanding and Working with HTML Attributes
Because this course is to prepare you for Javascript, we will be talking more about HTML attributes. Basically front-end javascript is the manipulation of html element and their attributes.

### Common Attributes
- id 
- class
- style

Every html element has the above attributes and most time this attributes are what we use in manipulating the DOM in JavaScript.

### Simple DOM Manipulation 
- Consider the code below and update this code in your index.html file 
```
    <div>
      <h1>My First HTML Project</h1>
        <input type="text" id="username" placeholder="Enter your username">
        <p id="name">Your Name Appears Here</p>
    </div>
```
-  Awesome! save and refresh in your browser.
-  Now, add the following code to your html file
```
    <script type="text/javascript">
        (function() {
            document.getElementById("username").addEventListener("keyup", function() {
                document.getElementById("name").innerText = document.getElementById("username").value;
            });
        })();
    </script>
```
- Your code should look like this at the end
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My First HTML</title>
</head>

<body>
    <div>
        <h1>My First HTML Project</h1>
        <input type="text" id="username" placeholder="Enter your username">
        <p id="name">Your Name Appears Here</p>
    </div>

    <script type="text/javascript">
        (function() {
            document.getElementById("username").addEventListener("keyup", function() {
                document.getElementById("name").innerText = document.getElementById("username").value;
            });
        })();
    </script>
</body>

</html>
```
- Horray! You just wrote your first Javascript and You are ready to learn more JS and learn more attributes.

