function Persona(n, a, e) {
    var o = this;
    var edad = e;
    this.nombre = n;
    this.apellidos = a;
    this.edad = function () { return edad; }
    this.nombreCompleto = function () {
        return o.nombre + ' ' + this.apellidos;
    }
    this.cumple = function () {
        ++edad;
    }
}

var p = new Persona('Pepito', 'Grillo', 199);
var c = new Persona('Carmelo', 'Coton', 55);
d = Persona('Carmelo', 'Coton', 55);
c.nombreCompleto = function () {
    return this.apellidos + ', ' + this.nombre;
}
p.nombreCompleto.bind(c);

p.nombreCompleto();
c.nombreCompleto();

p.nombre = 4;
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

a = 1;
b = '2$2';
NoEsNumero = isNaN(parseFloat(b))
NoEsNumero = typeof (b) == "number";
c = +a + +b;
isNaN(parseFloat(b))
a = -a;
b = +b;

a += 2;
a = aa + 2;


a == 1 && b = 12;

a === 1 && bb
bb = 4

a++;
a += 1; a = a + 1;

b = ++a; i < ++a

a += b + ' unidad' + b > 1 ? 'es' : '' + 'algo';
