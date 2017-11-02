const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    let res = utils.square(5);

    expect(res).toBe(25).toBeA('number')
});

it('should verify has first name', () => {
    let user = {location: 'NY',
                age: '25'};

    let res = utils.setName(user, 'Mark Hank');

    expect(res).toInclude({firstName: 'Mark'}).toInclude({lastName: 'Hank'}).toBeA('object');
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(13);
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toExclude({
//         age: 23
//     })
// });