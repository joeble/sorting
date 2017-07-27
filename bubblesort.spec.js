describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});
before(function () {
  spyOn(bubbleSort, "swap").and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('Expect the swap counter to equal 100', function () {
  var arr = [];
  bubbleSort(arr);
  expect(bubbleSort.swap.calls.count()).toEqual(100);
});
