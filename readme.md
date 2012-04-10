# ClassyObjects

An example of creating a class-like, or "classy" inheritance
framework for JavaScript objects.

## About ClassyObjects

ClassyObjects was originally built in my [JavaScript Objects
And Prototypes](http://watchmecode.net/javascript-objects)
screencast. I decided to open-source the end result in
case anyone decides that they wants to look at it without
having to re-type it entirely by hand.

There's a very heavy dose of influence in this framework,
from both [Underscore.js](http://underscorejs.org) and 
[Backbone.js](http://backbonejs.org). It was not my
intention to steal from these libraries, nor to provide
alternatives to them. The code in this example library
was written without the use of Underscore, in order to
illustrate some of the patterns and practices of working
with objects and prototypes in JavaScript.

For more information on how I built it, and why it looks
the way it does, check out the screencast (paid).

## Example Usage

```js

// Define a new "class" (constructor function)
// -----------------------------------

var Foo = ClassyObjects.define({
  widget: function(){
    console.log("widget");
  }
});

// Extend this "class" to create another
// ------------------------------------
var Bar = Foo.extend({
  bar: "baz",

  quux: function(){
    console.log("whatever");
  },
    
  widget: function(){
    this.super.widget();
    console.log("widget modified");
  }
});

// Use the objects that we defined
// ------------------------------------

var b = new Bar();
console.log(b.bar);
b.quux();
b.widget();
```

## Unsupported, Bug-Filled, Example Code

This project is not suitable for use in any production
environment, for any purpose. 

As stated above, I built it specifically for the 
screencast in which I show how to manage and manipulate 
JavaScript objects and prototypal inheritance.

There are several remaining bugs and design flaws in this
code, some of which I note in the screencast. There are
also larger issues related to the use of a class-y framework
in JavaScript in the first place.

This code is provided as-is, with no warranty of any kind,
and no guarantee that it will work at all. It is provided
as a reference only, and should not be used.

## Legal Mumbo Jumbo (MIT License)

Copyright (c) 2011 Derick Bailey, Muted Solutions, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
