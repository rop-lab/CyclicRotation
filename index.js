// Function implementation
function solution (A, K) {
    //check the length of rotation
    const N = A.length;
    if (N === 0) {
      return A;
    }
    K = K % N;
    if (K === 0) {
      return A;
    }
    //no rotation
    const rotatedArray = [];
  
    for (let i = 0; i < N; i++) {
      const newValue = (i + K) % N;
      rotatedArray[newValue] = A[i];
    }
    return rotatedArray;
  
  }
  const result  = solution(A, K);
  console.log(result);