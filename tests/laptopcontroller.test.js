const controller = require('../Controller/LaptopController');



test('test the sum function', () => {

    var expected = 45;

    var actual = controller.Sum(30 , 15);  

    expect(actual).toBe(expected);
});
