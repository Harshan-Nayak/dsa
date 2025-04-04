---
id: recursion-backtracking-pattern
title: Recursion & Backtracking Pattern
sidebar_label: Recursion & Backtracking
sidebar_position: 10
---

# Recursion & Backtracking Pattern

## Overview

Recursion and Backtracking are fundamental algorithmic patterns that involve breaking down complex problems into smaller subproblems and exploring multiple paths to find solutions. This pattern is essential for solving problems that require exhaustive search, combinatorial optimization, and problems with a natural recursive structure.

### When to Use This Pattern
- **Tree/Graph Traversal**: DFS, path finding
- **Divide and Conquer**: Breaking problems into subproblems
- **Combinatorial Problems**: Generating permutations/combinations
- **State Space Search**: Finding all possible solutions
- **Dynamic Programming Base**: Building optimal solutions
- **Expression Parsing**: Mathematical expressions
- **Game Theory**: Decision trees
- **Maze Solving**: Path finding problems
- **Constraint Satisfaction**: Sudoku, N-Queens
- **String Pattern Matching**: Regular expressions

### Key Characteristics
- **Base Case**: Termination condition
- **Recursive Case**: Problem reduction
- **State Management**: Tracking progress
- **Backtracking Logic**: Undoing choices
- **Solution Space**: Search tree/graph

### Real-World Applications
- **Game AI**: Decision making
- **Compiler Design**: Expression parsing
- **Path Finding**: Navigation systems
- **Circuit Design**: Logic optimization
- **Resource Allocation**: Scheduling

### Why Recursion & Backtracking Pattern Matters
- **Problem Decomposition**: Breaking complex problems
- **Solution Space Exploration**: Finding all possibilities
- **Optimal Solutions**: Finding best outcomes
- **Natural Expression**: Elegant problem solving

Let's explore how recursion and backtracking operations work in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Basic Recursion & Backtracking Operations
class RecursionBacktracking {
public:
    // Power calculation using recursion
    double power(double x, int n) {
        if (n == 0) return 1;
        if (n < 0) return 1 / power(x, -n);
        if (n % 2) return x * power(x, n - 1);
        double half = power(x, n / 2);
        return half * half;
    }
    
    // Generate permutations
    void permute(vector<int>& nums, int start, vector<vector<int>>& result) {
        if (start == nums.size()) {
            result.push_back(nums);
            return;
        }
        for (int i = start; i < nums.size(); i++) {
            swap(nums[start], nums[i]);
            permute(nums, start + 1, result);
            swap(nums[start], nums[i]);
        }
    }
    
    // N-Queens solver
    bool isSafe(vector<string>& board, int row, int col, int n) {
        // Check row and column
        for (int i = 0; i < n; i++) {
            if (board[row][i] == 'Q' || board[i][col] == 'Q')
                return false;
        }
        // Check diagonals
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        for (int i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        return true;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Basic Recursion & Backtracking Operations
class RecursionBacktracking {
    // Power calculation using recursion
    public double power(double x, int n) {
        if (n == 0) return 1;
        if (n < 0) return 1 / power(x, -n);
        if (n % 2 == 1) return x * power(x, n - 1);
        double half = power(x, n / 2);
        return half * half;
    }
    
    // Generate permutations
    public void permute(int[] nums, int start, List<List<Integer>> result) {
        if (start == nums.length) {
            result.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));
            return;
        }
        for (int i = start; i < nums.length; i++) {
            swap(nums, start, i);
            permute(nums, start + 1, result);
            swap(nums, start, i);
        }
    }
    
    // N-Queens solver
    public boolean isSafe(char[][] board, int row, int col, int n) {
        // Check row and column
        for (int i = 0; i < n; i++) {
            if (board[row][i] == 'Q' || board[i][col] == 'Q')
                return false;
        }
        // Check diagonals
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        for (int i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        return true;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Basic Recursion & Backtracking Operations
class RecursionBacktracking:
    # Power calculation using recursion
    def power(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        if n < 0:
            return 1 / self.power(x, -n)
        if n % 2:
            return x * self.power(x, n - 1)
        half = self.power(x, n // 2)
        return half * half
    
    # Generate permutations
    def permute(self, nums: List[int], start: int, result: List[List[int]]) -> None:
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            self.permute(nums, start + 1, result)
            nums[start], nums[i] = nums[i], nums[start]
    
    # N-Queens solver
    def is_safe(self, board: List[List[str]], row: int, col: int, n: int) -> bool:
        # Check row and column
        for i in range(n):
            if board[row][i] == 'Q' or board[i][col] == 'Q':
                return False
        # Check diagonals
        for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
            if board[i][j] == 'Q':
                return False
        for i, j in zip(range(row, -1, -1), range(col, n)):
            if board[i][j] == 'Q':
                return False
        return True
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Basic Recursion | Simple recursive calls | O(n) to O(2^n) | O(n) |
| Backtracking | State space search | O(n!) to O(2^n) | O(n) |
| Divide & Conquer | Problem splitting | O(n log n) | O(log n) |
| State Space Tree | Solution exploration | O(b^d) | O(d) |

Where:
- n is the input size
- b is the branching factor
- d is the maximum depth of recursion

## Recursion & Backtracking Sub-Patterns

### 1. Basic Recursion Problems

#### Easy Problems
1. **Power of Two** ([LeetCode 231](https://leetcode.com/problems/power-of-two/))
   - Pattern: Simple recursion
   - Key Points: Base case handling
   - Time: O(log n), Space: O(log n)

2. **Fibonacci Number** ([LeetCode 509](https://leetcode.com/problems/fibonacci-number/))
   - Pattern: Recursive sequence
   - Key Points: Subproblem relation
   - Time: O(2^n), Space: O(n)

#### Medium Problems
1. **Pow(x, n)** ([LeetCode 50](https://leetcode.com/problems/powx-n/))
   - Pattern: Divide and conquer
   - Problem: Calculate x raised to power n
   - Approach:
     1. Handle negative powers
     2. Use binary exponentiation
     3. Handle edge cases
   - Time: O(log n), Space: O(log n)
   - Example Solution:
   ```python
   def myPow(self, x: float, n: int) -> float:
       if n == 0:
           return 1
       if n < 0:
           return 1 / self.myPow(x, -n)
       if n % 2:
           return x * self.myPow(x, n - 1)
       half = self.myPow(x, n // 2)
       return half * half
   ```

### 2. Permutation Problems

#### Medium Problems
1. **Permutations** ([LeetCode 46](https://leetcode.com/problems/permutations/))
   - Pattern: Backtracking
   - Key Points: State tracking
   - Time: O(n!), Space: O(n)

2. **Beautiful Arrangement** ([LeetCode 526](https://leetcode.com/problems/beautiful-arrangement/))
   - Pattern: Backtracking
   - Key Points: Constraint checking
   - Time: O(k), Space: O(n), where k is valid arrangements

#### Hard Problems
1. **Permutation Sequence** ([LeetCode 60](https://leetcode.com/problems/permutation-sequence/))
   - Pattern: Mathematical + Recursive
   - Problem: Find kth permutation
   - Approach:
     1. Calculate factorial values
     2. Build sequence iteratively
     3. Track used numbers
   - Time: O(n^2), Space: O(n)
   - Example Solution:
   ```python
   def getPermutation(self, n: int, k: int) -> str:
       numbers = list(range(1, n + 1))
       result = []
       k -= 1
       while n > 0:
           n -= 1
           # get the index of current digit
           index, k = divmod(k, math.factorial(n))
           result.append(str(numbers[index]))
           # remove handled number
           numbers.pop(index)
       return ''.join(result)
   ```

### 3. Combination Problems

#### Medium Problems
1. **Combinations** ([LeetCode 77](https://leetcode.com/problems/combinations/))
   - Pattern: Backtracking
   - Key Points: Combination building
   - Time: O(C(n,k)), Space: O(k)

2. **Letter Combinations** ([LeetCode 17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/))
   - Pattern: Recursive combination
   - Key Points: String building
   - Time: O(4^n), Space: O(n)

#### Hard Problems
1. **N-Queens** ([LeetCode 51](https://leetcode.com/problems/n-queens/))
   - Pattern: Backtracking
   - Problem: Place N queens on NxN board
   - Approach:
     1. Try each position
     2. Check validity
     3. Backtrack if invalid
   - Time: O(n!), Space: O(n^2)
   - Example Solution:
   ```python
   def solveNQueens(self, n: int) -> List[List[str]]:
       def backtrack(row):
           if row == n:
               result.append([''.join(row) for row in board])
               return
           for col in range(n):
               if is_safe(row, col):
                   board[row][col] = 'Q'
                   backtrack(row + 1)
                   board[row][col] = '.'
       
       board = [['.'] * n for _ in range(n)]
       result = []
       backtrack(0)
       return result
   ```

### 4. Subset Problems

#### Medium Problems
1. **Subsets** ([LeetCode 78](https://leetcode.com/problems/subsets/))
   - Pattern: Backtracking
   - Key Points: Power set generation
   - Time: O(2^n), Space: O(n)

2. **Subsets II** ([LeetCode 90](https://leetcode.com/problems/subsets-ii/))
   - Pattern: Backtracking + Duplicates
   - Key Points: Duplicate handling
   - Time: O(2^n), Space: O(n)

#### Hard Problems
1. **Regular Expression Matching** ([LeetCode 10](https://leetcode.com/problems/regular-expression-matching/))
   - Pattern: Recursive matching
   - Problem: Pattern matching with wildcards
   - Approach:
     1. Handle base cases
     2. Match current characters
     3. Handle special patterns
   - Time: O(2^(m+n)), Space: O(m+n)
   - Example Solution:
   ```python
   def isMatch(self, s: str, p: str) -> bool:
       if not p:
           return not s
       first_match = bool(s) and p[0] in {s[0], '.'}
       if len(p) >= 2 and p[1] == '*':
           return (self.isMatch(s, p[2:]) or
                   first_match and self.isMatch(s[1:], p))
       return first_match and self.isMatch(s[1:], p[1:])
   ```

## Tips for Recursion & Backtracking Problems
1. Identify base cases clearly
2. Ensure progress towards base case
3. Maintain state properly
4. Consider space complexity
5. Use memoization when applicable
6. Handle edge cases
7. Track visited states
8. Prune search space early


Happy Coding! 🚀