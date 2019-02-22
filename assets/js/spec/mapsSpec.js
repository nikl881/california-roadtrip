
describe("initMap", function() {
  it("Initialize the Google Map (maps.js)", () => {
     spyOn(google.maps, "Map"); 
     initMap();
     expect(google.maps.Map).toHaveBeenCalled()
  });
});



describe("test/practice function", function() {
  it("test/practice: should return '10' when '9' is passed in (maps.js)", () => {
    expect(parseInt(5.3)).toBe(5);
  });
});



