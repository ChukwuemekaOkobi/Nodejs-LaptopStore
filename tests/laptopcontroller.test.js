
test("test addition", ()=>{

    var a = 34; 
    var b = 15; 

    const result = a + b; 

    expect(result).toBe(49)
});


test("test subtraction ", ()=>{

    var a = 34; 
    var b = 15; 

    const result = a - b; 

    expect(result).toBe(19)
});

test("test string ", () =>{

    const word = "sleepsleep"; 

    const count = word.length; 

    expect(count).toBe(10);
})