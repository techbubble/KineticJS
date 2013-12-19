function Turtle(initializer)
{
    for(var item in initializer)
    {
        this[item] = initializer[item];
    }
    this.swimming = false;
    this.hungry = true;
}

Turtle.prototype.swim = function() {
    this.swimming = true;
}

Turtle.prototype.stop = function() {
    this.swimming = false;
}

Turtle.prototype.eat = function() {
    this.hungry = false;
}