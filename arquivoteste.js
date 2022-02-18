const todosOsNumeros = [1,5,7,4,8,6,9,3];
let filtrarNumerosPares = (array) => array.filter((num) => num%2 ==0);

console.log(filtrarNumerosPares(todosOsNumeros));

//Usando atribuição de desestruturação para extrair valores de objetos:

const temperatura = {
    yesterday: 28,
    today: 32,
    tomorrow: 25
  };
  
 
  const {yesterday} = temperatura;
  const {today} = temperatura;
  const {tomorrow}= temperatura;
   
  console.log(temperatura);

  