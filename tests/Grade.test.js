const controller = require('../Controller/LaptopController');


test('test return and A for 90', () => {

    var expected = "A";

    var actual = controller.GetGrade(90);  

    expect(actual).toBe(expected);
});

test ('test returns a B for 65', () => {

    var actual = controller.GetGrade(65); 

    expect(actual).toBe("B");
})

test ('test return  an F for 40 ', () => {

    var actual = controller.GetGrade(40); 

    expect(actual).toBe("F");
})