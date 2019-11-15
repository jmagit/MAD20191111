function Persona(n, a, e) {
    var o = this;
    var edad = e;
    this.nombre = n;
    this.apellidos = a;
    this.nombreCompleto = function () {
        return o.nombre + ' ' + this.apellidos;
    }
    this.dameEdad = function () { return edad; }
    this.ponEdad = function (nueva) {
        if (!nueva && isNaN(+nueva) && nueva > 0) {
            throw new Error('la edad es invalida');
        }
        edad = nueva;
    } 
    this.cumple = function () {
        ++edad;
    }
    this.alga = function () { this.edad }
}

function personaliza(p1, p2, p3) {
    this.nombre = this.nombre.toUpperCase();
}

var p = new Persona('Pepito', 'Grillo', 199);
var c = new Persona('Carmelo', 'Coton', 55);
d = Persona('Carmelo', 'Coton', 55);
c.nombreCompleto = function () {
    return this.apellidos + ', ' + this.nombre;
}

personaliza.call(p, p1, p2, p3);
personaliza.apply(p, [p1, p2, p3]);
personaliza.bind(c);
personaliza(p1, p2, p3);

p.nombreCompleto.call(c)
p.nombreCompleto.bind(c);

p.nombreCompleto();
c.nombreCompleto();

p.nombre = 4;
p.edad = 33;
try {
    p.ponEdad();

} catch (e) {
    console.error(e.message);
}

cmp = "edad";
p[cmp] = 'viejisimo';

(
    function () {
        var t1 = [10, 20, 30, [1, 2]];
        var t2 = [10, 20, 30, [1, 2]];

        // ...

    }
)();


/*
var t1 = [10, 20, 30, [1, 2]];
var t2 = [10, 20, 30, [1, 2]];

// ...

*/
if (t1 == t2) { }
t1[3][0] = 3;
if (t1[0] == t2[0]) { }
t1[7] = 2;
t1[3] = [];

for (var i = 0, j = 10; i < 5; i++, j--) {
    t1[i]
}

for (var i in t1) {
    a += t1[i];
}
a = 1;
switch (c) {
    case "tres":
    case 3:
        a += 1;
    case 2:
        a += 1;
    case 1:
        a += 1;

}

function kk() {
    var a = 1;
     if (true) {
         var b = 2;

         kkf();
       // ...
    }
    c = a + b;
    return c;
}

var c, b = 3;
if (kk() === c) {
    // ...
}
function kk(p) {
    //this.arguments
    c = b;
    return function (a, b) { return a + b * p; };
}

// kk()(3, 4);
fn = kk(2);
fn(3, 4);

kk = 4;

kk = function (a, b) { return a+b; }

kk(4, 4);
var operacion = 'a';
a = 1;
b = '2$2';
operacion += ' + b';
NoEsNumero = isNaN(parseFloat(b))
NoEsNumero = typeof (b) == "number";
c = +a + +b;
if(a > b) operacion += ' - c';
isNaN(parseFloat(b))
a = -a;
b = +b;

a += 2;
a = aa + 2;
operacion = 'a + ' + leido; // b; p.muerete();
rslt = eval(operacion);
rslt == (a + b)
rslt = a == 1 && b = 12;

a === 1 && bb
bb = 4

a++;
a += 1; a = a + 1;

b = ++a; i < ++a

a += b + ' unidad' + b > 1 ? 'es' : '' + 'algo';


function suma(a, b) { return a + b; }

var l = [1, 2];
var [a, b] = l;

rslt = suma(l[0], l[1]);
rslt = suma(...l);

o = { a: 1, b: 2 };

rslt = suma(o.a, o.b);
rslt = suma(...o);

l.find(function (item) { return item.nombre === 'Pepito' });
l.find(item => item.nombre === 'Pepito');
(a, b) => { // ...
    return item.nombre === 'Pepito';
}

let fn = item => item.nombre === 'Pepito';

o = { a: 1, b: 2, m: item => item.nombre === 'Pepito' };
var x = 10, y = 20;
let p = { x: x, y: y };
p = { x, y, kk };