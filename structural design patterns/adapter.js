//array of cities
const citiesHabitantsInMillions =[
    { city: "Pune", habitants: 8.9},
    { city: "Mumbai", habitants: 9.9},
    { city: "Solapur", habitants: 2.9},
    { city: "Nashik", habitants: 4.9},
    { city: "Kolhapur", habitants: 6.9}
]


//new city we want to add 
const newCity= {
    city: "Nagpur",
    habitants: 4000000
}

//our adapter function takes the newObj and converts the habitants property to the format  all other cities have
const toMillionAdapter = city => { city.habitants =  parseFloat((city.habitants/1000000).toFixed(1))}
toMillionAdapter(newCity);

citiesHabitantsInMillions.push(newCity);

//and this function returns the largest habitants number
const MostHabitantsInMillions = () => {
    let maxHabitants = Math.max(...citiesHabitantsInMillions.map(city=>city.habitants));
    return citiesHabitantsInMillions.find((city)=> city.habitants === maxHabitants);
}

console.log(MostHabitantsInMillions());