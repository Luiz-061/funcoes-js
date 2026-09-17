function calcularIMC(ps, alt){
  const rst = ps / (alt * alt);

   console.log(`${ps} / (${alt} ^ 2) = ${rst}`);
}