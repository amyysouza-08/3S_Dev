const hobbies = [
    "Correr",
    "Nadar", 
    "Viajar",
    "Cantar"
    ];

const novosHobbies = hobbies.map((hob)=>{
    return `<p>${hob}</p>`;
});
console.log(novosHobbies);