function calcularIMC(ps, alt){
  const rst = ps / (alt * alt);

   console.log(`${ps} / (${alt} ^ 2) = ${rst}`);
}

calcularIMC(47.5, 1.60)