var circle={
  area: function(r){
    var pi = 3.14, a;
    a = pi * r * r;
    console.log('ares of circle is: ' + a);
  },
  circumference: function(r){
    var pi = 3.14, c;
    c = 2 * pi * r;
    console.log('Circumference of circle is: ' + c);
  }
};
module.exports=circle