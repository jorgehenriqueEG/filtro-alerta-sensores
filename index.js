function filtrarAlertas(leituras) {
  const alertas = [];
  for (let i = 0; i < leituras.length; i++) {
    if (leituras[i].vazao > 150) {
      alertas.push(leituras[i].sensor);
    }
  }
  return alertas;
}