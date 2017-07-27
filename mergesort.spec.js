describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4]) ).toEqual([ [1,2], [3,4]]);
  });
});

describe('MergeSort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('sorts an already sorted array', function(){
    expect( mergeSort([1,2,3,4,5,6,7,8,9,10]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
  });


  it('sorts an unsorted array', function(){
    expect( mergeSort([3,4,5,6,9,10,2,1,8,7]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );

    expect( mergeSort([6,7,8,9,2,3,4,5]) ).toEqual( [2,3,4,5,6,7,8,9] );
  });
});
*/
