# Filtro de Alertas de Sensores de Vazão

## Descrição do Problema
Um sistema de monitoramento de vazão de água em uma rede hidráulica recebe leituras de sensores. É necessário filtrar as leituras que ultrapassam o limite de vazão máxima permitido.

## Requisitos
- Receber um array de objetos com nome do sensor e valor da vazão.
- Filtrar apenas os sensores com vazão maior que 150 L/min.
- Retornar um array com os nomes dos sensores que geraram alerta.

## Exemplo de Uso

const leituras = [
  { sensor: 'S1', vazao: 120 },
  { sensor: 'S2', vazao: 160 },
  { sensor: 'S3', vazao: 100 }
];

const alertas = filtrarAlertas(leituras);
console.log(alertas);

Saída:
[ 'S2' ]