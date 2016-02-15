describe("fizzBuzz", function() {

  it("should return fizz when given 3", function(){
    expect(fizzBuzz(3)).toEqual("fizz")
  });

  it("should return buzz when given 5", function() {
    expect(fizzBuzz(5)).toEqual('buzz')
  });

  it("should return fizzbuzz when given 15", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz')
  });

  it("should return fizzbuzz when given 30", function() {
    expect(fizzBuzz(30)).toEqual('fizzbuzz')
  });

});
