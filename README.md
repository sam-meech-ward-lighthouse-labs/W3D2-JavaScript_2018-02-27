# Client side javascript

* Makes websites interactive.
* Offload _some_ operations to client.
* Make the website dynamic.
* Update a web page without reloading the whole page.

### HTML & the DOM

<!DOCTYPE html> <!-- Let's the browser know it's an html page -->
https://en.wikipedia.org/wiki/Quirks_mode

* html tag is the outermost container. There can only be one html tag
* head and body go inside the html tag. There can only be a head and a body inside the html tag.
* meta and title go inside head. We can have **lots** of tags inside head
* **lots** of tags inside body.
* All the visible tags go inside the body. Tags like: 'p', 'h1', 'h2', 'a', 'img' 

DOM Document Object Model 
* The html page as JavaScript Object.

```js
var node = {
  parent: {},
  children: [],
  id: ,
  classes: [],
  data: ...
};
```

```js
var body = {
  parent: {html},
  children: [h2, ul],
}
```

### Global Vars

* The global object. `global` in node, it's `window` in browser javascript.

* The `window` object is our global object. Any property of the `window` object is also global. Andy global variable is a property of the `window` object.

* `document` is our code document.

* Use `document` to traverse the html

#### Traversal

* using `children` and `parent` to navigate around the html.

#### Selection

* We want to select an element directly.
* I want the first p tag
* I want all elements with the class name 'terodactal'

`getElementsByTagName`
`document.getElementsByClassName('text-items')`
`document.getElementById("hipsterCat")`

* You can only have one id name.
* You can have multiple things with the same class name.

`document.querySelector(`
`document.querySelectorAll(`

#### Manipulation 

* changing the tag / node 
* example: changing 'terodactal' to spelled _differently_ 
* change an image in the img tag

`document.querySelector('#not-cats li').style.cssText = 'font-family: wingdings;';`

#### Creation

* create new tags / nodes
* example: you may want to create a new message for like a twitter clone or something.

`var myH3 = document.createElement('h3');`
`document.body.appendChild(myH3);`

Use `debugger;` to setup breakpoints in your javascript. 

## Including Javascript Files

Use script tags to include javascript in your html file:

```js
<script>
  console.log("Inside the html file");
</script>

<script src="kitties.js"></script>
```

put the script tags at the bottom of the `body` so that your html loads before 

## Events

* `onclick`, `keydown`, `keyup`, `load` or somthing
* User input, some sort of **event**


