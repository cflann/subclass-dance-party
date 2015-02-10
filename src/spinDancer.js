var SpinDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.lineOffset = "250px";
  this.$node= $('<img src="img/Ron.png"></img>');
  this.$node.addClass('spin');
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  SpinDancer.prototype = Object.create(Dancer.prototype);

  SpinDancer.prototype.constructor = BlinkyDancer;

  SpinDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.animate("animation", "rotate(0.75turn)");
  };

  SpinDancer.prototype.lineUp = function(pos) {
    var topPos = 50 + (pos * ($('body').height()/$('.spin').length));
    this.$node.animate({
      top: ""+topPos+"px",
      left: this.lineOffset
    });
  };