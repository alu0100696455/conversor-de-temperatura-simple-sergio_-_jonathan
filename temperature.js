"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var regexp = /^\s*([-+]?\d+(?:\.\d*)?\s*(?:e\s*[-+]?\d+)?\s*)\º?((f(a(h(r(e(n(h(e(i(t)?)?)?)?)?)?)?)?)?)|(c(e(l(s(i(u(s)?)?)?)?)?)?))$/i;
  var temp = original.value;

  var m = temp.match(regexp);
  //var unidades = ["fahrenheit", "celsius"];
  //var pref_f = unidades[0].match(m[2]);
  //var pref_c = unidades[1].match(m[2]);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = num.replace(/\s/g, '');
    num = parseFloat(num);
    if (type.match(/^c/i)) {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Fahrenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "¡ERROR! Ha insertado una temperatura incorrecta. Ejemplo válido: 32.3e5 ºF";
  }
}
