// Function implementation
function solution(A, K) {
    // Iteration
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
  
  // Example usage
  const example1 = solution([3, 8, 9, 7, 6], 3);
  console.log(example1); // Output: [9, 7, 6, 3, 8]
  
  const example2 = solution([0, 0, 0], 1);
  console.log(example2); // Output: [0, 0, 0]
  
  const example3 = solution([1, 2, 3, 4], 4);
  console.log(example3); // Output: [1, 2, 3, 4]
  