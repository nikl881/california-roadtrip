describe("parseInt function", function() {
  it("Should return '5' when '5.3' is passed in", () => {
    expect(parseInt(5.3)).toBe(5);
  });
});

describe("initMap", function() {
  it("Initialize the Google Map", () => {
     spyOn(google.maps, "Map"); 
     initMap();
     expect(google.maps.Map).toHaveBeenCalled()
  });
});