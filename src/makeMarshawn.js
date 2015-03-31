var makeMarshawn = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  return new Marshawn(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

var Marshawn = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};
 Marshawn.prototype = Object.create(Dancer.prototype); Marshawn.prototype.constructor = Marshawn;
 Marshawn.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.apply(this, arguments);

    // toggle() is a jQuer  method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

  };

/*
Refactor the Dancer class and its subclass BlinkyDancer from functional
 inheritance to pseudoclassical.

Feel free to Refer to the lecture slides on Code Sharing Patterns
Make at least two new kinds of dancers. This will require creating
 a new factory function for each one (and making sure that your new
 javascript files are included in dancefloor.html).
 */