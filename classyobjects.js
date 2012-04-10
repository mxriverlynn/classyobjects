// ------------------------------
// ClassyObjects.js
// Copright (C) 2012 Derick Bailey, Muted Solutions, LLC
//
// A class-y framework for prototypal inheritance in JavaScript
//
// For more information, see 
// WatchMeCode Episode 5: JavaScript Objects & Prototypes
// http://watchmecode.net/javascript-objects
// -------------------------------


// This function is directly borrowed from
// [Douglas Crockford](http://javascript.crockford.com/prototypal.html)
if (!Object.create || !typeof Object.create === "function"){
  Object.create = function(obj){
    var F = function(){};
    F.prototype = obj;
    return new F();
  }
}

// The ClassyObjects Namespace
// ---------------------------
//
var ClassyObjects = {};

// CopyTo
// ------

// Copies the key/value pairs (methods and attributes)
// from a source object to a target object. Loosely based
// on the implementation of Underscorejs' `extend`
// functionality.
ClassyObjects.copyTo = function(target, source){
  for(var attr in source){
    target[attr] = source[attr];
  }
}

// Inherits
// --------

// Create an "class" that inherits from the object you
// specify, and is augmented with the object definition
// provided.
ClassyObjects.inherits = function(inherited, definition){
  var inheritedInstance = Object.create(inherited);

  ClassyObjects.copyTo(inheritedInstance, definition);

  var ClassConstructor = function(){
    this.super = inherited;
  };
  ClassConstructor.prototype = inheritedInstance;

  return ClassConstructor;
}

// Extend
// ------

// Add this method to an existing object, and you can
// then extend from that object to create a new "class"
// that inherits from it.
ClassyObjects.extend = function(definition){
  var prototype = this;
  if (typeof this === "function")
    prototype = this.prototype;
  var Constructor = ClassyObjects.inherits(prototype, definition);
  Constructor.extend = this.extend;
  return Constructor;
}

// Define
// ------

// Define a new "class" with the object definition that
// you provide. It will have the `extend` function attached
// to it, so that you can inherit / extend from the
// resulting "class".
ClassyObjects.define = function(definition){
  var classyObj = {};
  classyObj.extend = ClassyObjects.extend;
  return classyObj.extend(definition);
}
