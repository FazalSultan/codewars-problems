const address = {
    street: '123 Main St',
    city: 'Ilorin',
    state: {
        name: 'Kwara',
        abbreviation: 'KW',
    location: {
        Add: 'SWAT',
        District: 'Babozai Swat'
    }
    }
};



const { street, city, state: { name ,location : {Add , District} } } = address;
console.log(street, city, name ,Add , District); // Output: 123 Main St Ilorin Kwara