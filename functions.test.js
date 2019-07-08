const functions = require('./functions') ;

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking name...')

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    })

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    })
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Ryo object', () => {
    expect(functions.createUser()).toEqual({myName: 'Ryo', myAge: 27});
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no Q in team', () => {
    expect('Q').toMatch('Q');
});

// Promise
test('ramen should be in usernames', () => {
    favoritFoods = ['ramen', 'sushi', 'curry'];
    expect(favoritFoods).toContain('ramen')
});

// Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     })
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
});


