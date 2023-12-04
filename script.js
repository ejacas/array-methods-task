/*
1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę)
2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.
*/


// 1, 2 uzduotis
const cars = ["BMW", "VW", "Audi"]
cars.forEach(function(item, index){
    console.log(index + ": " + item)
})
console.log("=====================")


// 3 uzduotis
const friends = ["peTrAS", "JoNAs", "mARiUS", "LuKAS", "doVYdaS"]
console.log(friends)


// 4 uzduotis
const ages = [17, 19, 22, 30, 50, 70, 100,]
const filter = ages.filter(function(x){
    return x >= 18
})
console.log(filter)
console.log("=====================")


// 5 uzduotis
const cities = ["Vilnius", "Kaunas", "Siauliai", "Palanga", "Klaipeda"]

console.log(cities)

