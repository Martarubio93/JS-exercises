
//Contar numero de veces que se repiten y colocarlos de mayor a menor
const citiesList = [
  "Madrid",
  "Valencia",
  "Bilbao",
  "Estepona",
  "Socuéllamos",
  "Estepona",
  "Madrid",
  "Madrid",
  "Valencia",
  "Estepona",
  "Logroño",
  "Socuéllamos",
  "Valencia",
  "Valencia",
  "Estepona",
  "Estepona"
];





function numRepeatCities (numCities){
    const cities = []
    citiesList.forEach(city => {
       cities[city] = !cities[city] ? 1 : cities [city] += 1
    })
    //pasar un objeto a un array para ordenarlo
    return Object.keys(cities)
    .map(city => ({name : city, times: cities[city]}))
    .sort((a,b) => b.times - a.times)
  
}

console.log(numRepeatCities())





