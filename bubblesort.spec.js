describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an already sorted array', function(){
    expect( bubbleSort([1,2,3,4,5,6,7,8,9,10]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
  });


  it('sorts an unsorted array', function(){
    expect( bubbleSort([3,4,5,6,9,10,2,1,8,7]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );

    expect( bubbleSort([6,7,8,9,2,3,4,5]) ).toEqual( [2,3,4,5,6,7,8,9] );
  });
});


describe('Check that Swap works', function(){
  before(function () {
    spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing
   });
  it('Expect the swap counter to equal 100', function () {
    bubbleSort([3,4,5,6,9,10,2,1,8,7]);
    expect(swap.calls.count()).toEqual(100);
  });
});





