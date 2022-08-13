const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
    movies: [{ name: 'no.1', year: 2015 }, { name: 'king khan', year: 2018 }],
    act: function () {
        console.log('Acting Like Sakib Khan');
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2021,
        manufacturer: {
            name: 'tesla',
            ceo: 'elon mask',
            country: 'usa'
        }
    }
}
console.log(nayok.act);
nayok.act();