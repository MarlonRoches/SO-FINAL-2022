function suma(x, y) {
    // 5x +y
    var resultado = 0
for (let i = 0; i < 5; i++) {
    x += x;
}
x += y   
// TEMPORAL
// % de que x , y se utilicen en tiempo del metodo 
return x;
}


// ESPACIAL
// PAGINA 1
// ↓            ↓
// [x,0,0,0,0,0,y,0,0,0,0,0]
