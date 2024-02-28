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
  const exampleUsage1 = solution([3, 8, 9, 7, 6], 3);
  console.log(exampleUsage1); // Output: [9, 7, 6, 3, 8]
  
  const exampleUsage2 = solution([0, 0, 0], 1);
  console.log(exampleUsage2); // Output: [0, 0, 0]
  
  const exampleUsage3 = solution([1, 2, 3, 4], 4);
  console.log(exampleUsage3); // Output: [1, 2, 3, 4]
  