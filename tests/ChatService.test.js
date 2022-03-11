
const controller = require('../Controller/LaptopController');


test('test the sum function', () => {

    var expected = 20;

    var actual = controller.SubStract(35 , 15);  

    expect(actual).toBe(expected);
});

test('test the sum function', () => {

    var expected = 30;

    var actual = controller.SubStract(45 , 15);  

   
    expect(actual).toBe(expected); 
});


test("test user A is online ", () => {

    var expected = "online"; 

    var actual  = controller.Status("A");
    expect(actual).toBe(expected); 
})