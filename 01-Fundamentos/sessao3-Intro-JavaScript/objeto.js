let person = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

person['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(`A jogadora ${person.name} ${person.lastName} tem ${person.age} anos de idade.`)
console.table(person)