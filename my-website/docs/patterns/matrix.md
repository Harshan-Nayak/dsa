---
id: matrix-pattern
title: Matrix Pattern
sidebar_label: Matrix
sidebar_position: 8
---

# Matrix Pattern

## Overview

Matrix operations are fundamental algorithmic patterns that involve manipulating 2D arrays. This pattern is essential for solving problems related to image processing, game development, and various computational problems that require structured data manipulation in a grid format.

### When to Use This Pattern
- **Image Processing**: Pixel manipulation and transformations
- **Game Development**: Grid-based game mechanics
- **Data Analysis**: 2D data manipulation and analysis
- **Graph Algorithms**: Grid-based pathfinding
- **Dynamic Programming**: 2D state transitions
- **Pattern Recognition**: Grid pattern matching
- **Simulation**: Grid-based simulations
- **Geometric Operations**: Shape transformations
- **Data Visualization**: Grid-based visualizations
- **Space Optimization**: In-place matrix operations

### Key Characteristics
- **2D Array Structure**: Organized data in rows and columns
- **Index-based Access**: O(1) element access
- **Space Efficiency**: In-place operations possible
- **Multiple Traversal Patterns**: Row, column, diagonal
- **Boundary Handling**: Edge case management

### Real-World Applications
- **Digital Image Processing**: Image rotation, scaling
- **Game Boards**: Chess, Tic-tac-toe, Sudoku
- **Scientific Computing**: Matrix operations
- **Computer Graphics**: Transformations
- **Machine Learning**: Feature matrices

### Why Matrix Pattern Matters
- **Structured Data**: Organized 2D data representation
- **Efficient Operations**: In-place modifications
- **Visual Problems**: Natural representation for visual data
- **Algorithm Design**: Foundation for complex operations

Let's explore how matrix operations work in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Basic Matrix Operations
class MatrixOperations {
public:
    // Rotate matrix 90 degrees clockwise
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();
        // Transpose
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
        // Reverse each row
        for (int i = 0; i < n; i++) {
            reverse(matrix[i].begin(), matrix[i].end());
        }
    }
    
    // Set matrix zeroes
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        bool firstRow = false, firstCol = false;
        
        // Check first row and column
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) firstRow = true;
        }
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) firstCol = true;
        }
        
        // Use first row and column as markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = matrix[0][j] = 0;
                }
            }
        }
        
        // Set zeroes based on markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // Handle first row and column
        if (firstRow) {
            for (int j = 0; j < n; j++) matrix[0][j] = 0;
        }
        if (firstCol) {
            for (int i = 0; i < m; i++) matrix[i][0] = 0;
        }
    }
    
    // Spiral traversal
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        if (matrix.empty()) return result;
        
        int top = 0, bottom = matrix.size() - 1;
        int left = 0, right = matrix[0].size() - 1;
        
        while (top <= bottom && left <= right) {
            // Traverse right
            for (int j = left; j <= right; j++) {
                result.push_back(matrix[top][j]);
            }
            top++;
            
            // Traverse down
            for (int i = top; i <= bottom; i++) {
                result.push_back(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                // Traverse left
                for (int j = right; j >= left; j--) {
                    result.push_back(matrix[bottom][j]);
                }
                bottom--;
            }
            
            if (left <= right) {
                // Traverse up
                for (int i = bottom; i >= top; i--) {
                    result.push_back(matrix[i][left]);
                }
                left++;
            }
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Basic Matrix Operations
class MatrixOperations {
    // Rotate matrix 90 degrees clockwise
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        // Transpose
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        // Reverse each row
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n/2; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][n-1-j];
                matrix[i][n-1-j] = temp;
            }
        }
    }
    
    // Set matrix zeroes
    public void setZeroes(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        boolean firstRow = false, firstCol = false;
        
        // Check first row and column
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) firstRow = true;
        }
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) firstCol = true;
        }
        
        // Use first row and column as markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = matrix[0][j] = 0;
                }
            }
        }
        
        // Set zeroes based on markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // Handle first row and column
        if (firstRow) {
            for (int j = 0; j < n; j++) matrix[0][j] = 0;
        }
        if (firstCol) {
            for (int i = 0; i < m; i++) matrix[i][0] = 0;
        }
    }
    
    // Spiral traversal
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix == null || matrix.length == 0) return result;
        
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;
        
        while (top <= bottom && left <= right) {
            // Traverse right
            for (int j = left; j <= right; j++) {
                result.add(matrix[top][j]);
            }
            top++;
            
            // Traverse down
            for (int i = top; i <= bottom; i++) {
                result.add(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                // Traverse left
                for (int j = right; j >= left; j--) {
                    result.add(matrix[bottom][j]);
                }
                bottom--;
            }
            
            if (left <= right) {
                // Traverse up
                for (int i = bottom; i >= top; i--) {
                    result.add(matrix[i][left]);
                }
                left++;
            }
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Basic Matrix Operations
class MatrixOperations:
    # Rotate matrix 90 degrees clockwise
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        # Transpose
        for i in range(n):
            for j in range(i, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        # Reverse each row
        for i in range(n):
            matrix[i].reverse()
    
    # Set matrix zeroes
    def setZeroes(self, matrix: List[List[int]]) -> None:
        m, n = len(matrix), len(matrix[0])
        first_row = first_col = False
        
        # Check first row and column
        for j in range(n):
            if matrix[0][j] == 0: first_row = True
        for i in range(m):
            if matrix[i][0] == 0: first_col = True
        
        # Use first row and column as markers
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = matrix[0][j] = 0
        
        # Set zeroes based on markers
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
        
        # Handle first row and column
        if first_row:
            for j in range(n): matrix[0][j] = 0
        if first_col:
            for i in range(m): matrix[i][0] = 0
    
    # Spiral traversal
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix: return []
        
        result = []
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1
        
        while top <= bottom and left <= right:
            # Traverse right
            for j in range(left, right + 1):
                result.append(matrix[top][j])
            top += 1
            
            # Traverse down
            for i in range(top, bottom + 1):
                result.append(matrix[i][right])
            right -= 1
            
            if top <= bottom:
                # Traverse left
                for j in range(right, left - 1, -1):
                    result.append(matrix[bottom][j])
                bottom -= 1
            
            if left <= right:
                # Traverse up
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1
        
        return result
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Matrix Traversal | Row, column, diagonal scanning | O(m×n) | O(1) |
| Matrix Transformation | Rotation, reflection | O(m×n) | O(1) |
| Matrix Modification | Setting values, zeroing | O(m×n) | O(1) |
| Spiral Traversal | Spiral order access | O(m×n) | O(m×n) |

## Matrix Sub-Patterns

### 1. Matrix Transformation and Modification

#### Easy Problems
1. **Convert 1D Array Into 2D Array** ([LeetCode 2022](https://leetcode.com/problems/convert-1d-array-into-2d-array/))
   - Pattern: Array reshaping
   - Key Points: Index mapping
   - Time: O(m×n), Space: O(1)

2. **Modify the Matrix** ([LeetCode 2482](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/))
   - Pattern: Matrix modification
   - Key Points: In-place changes
   - Time: O(m×n), Space: O(1)

#### Medium Problems
1. **Set Matrix Zeroes** ([LeetCode 73](https://leetcode.com/problems/set-matrix-zeroes/))
   - Pattern: Matrix modification
   - Problem: Given an m x n matrix, if an element is 0, set its entire row and column to 0's.
   - Approach:
     1. Use first row and column as markers
     2. Store states of first row/column
     3. Mark zeros using first row/column
     4. Set zeros based on markers
   - Time: O(m×n), Space: O(1)
   - Example Solution:
   ```python
   def setZeroes(matrix):
       m, n = len(matrix), len(matrix[0])
       first_row = first_col = False
       
       # Check first row/column
       for j in range(n):
           if matrix[0][j] == 0: first_row = True
       for i in range(m):
           if matrix[i][0] == 0: first_col = True
       
       # Mark zeros
       for i in range(1, m):
           for j in range(1, n):
               if matrix[i][j] == 0:
                   matrix[i][0] = matrix[0][j] = 0
       
       # Set zeros based on markers
       for i in range(1, m):
           for j in range(1, n):
               if matrix[i][0] == 0 or matrix[0][j] == 0:
                   matrix[i][j] = 0
       
       # Handle first row/column
       if first_row:
           for j in range(n): matrix[0][j] = 0
       if first_col:
           for i in range(m): matrix[i][0] = 0
   ```

### 2. Matrix Patterns and Validity Checks

#### Easy Problems
1. **Check if Matrix is X-Matrix** ([LeetCode 2319](https://leetcode.com/problems/check-if-matrix-is-x-matrix/))
   - Pattern: Pattern validation
   - Key Points: Diagonal checking
   - Time: O(n²), Space: O(1)

2. **Make a Square with the Same Color** ([LeetCode 2784](https://leetcode.com/problems/check-if-it-is-a-straight-line/))
   - Pattern: Pattern validation
   - Key Points: Color matching
   - Time: O(n²), Space: O(1)

#### Medium Problems
1. **Valid Sudoku** ([LeetCode 36](https://leetcode.com/problems/valid-sudoku/))
   - Pattern: Grid validation
   - Problem: Determine if a 9x9 Sudoku board is valid by checking rows, columns, and 3x3 boxes.
   - Approach:
     1. Use hash sets for each row, column, and box
     2. Check each cell's digit against these sets
     3. Validate no duplicates in any row, column, or box
   - Time: O(1), Space: O(1)
   - Example Solution:
   ```python
   def isValidSudoku(board):
       rows = [set() for _ in range(9)]
       cols = [set() for _ in range(9)]
       boxes = [set() for _ in range(9)]
       
       for i in range(9):
           for j in range(9):
               if board[i][j] == '.':
                   continue
               
               num = board[i][j]
               box_idx = (i // 3) * 3 + j // 3
               
               # Check if number exists
               if (num in rows[i] or
                   num in cols[j] or
                   num in boxes[box_idx]):
                   return False
               
               # Add number to sets
               rows[i].add(num)
               cols[j].add(num)
               boxes[box_idx].add(num)
       
       return True
   ```

2. **Queens That Can Attack the King** ([LeetCode 1222](https://leetcode.com/problems/queens-that-can-attack-the-king/))
   - Pattern: Direction checking
   - Key Points: Eight directions
   - Time: O(n²), Space: O(n²)

### 3. Matrix Traversal and Summation

#### Easy Problems
1. **Matrix Diagonal Sum** ([LeetCode 1572](https://leetcode.com/problems/matrix-diagonal-sum/))
   - Pattern: Diagonal traversal
   - Key Points: Primary and secondary diagonals
   - Time: O(n), Space: O(1)

2. **Richest Customer Wealth** ([LeetCode 1672](https://leetcode.com/problems/richest-customer-wealth/))
   - Pattern: Row summation
   - Key Points: Maximum row sum
   - Time: O(m×n), Space: O(1)

#### Medium Problems
1. **Spiral Matrix** ([LeetCode 54](https://leetcode.com/problems/spiral-matrix/))
   - Pattern: Spiral traversal
   - Problem: Given an m x n matrix, return all elements in spiral order (right, down, left, up).
   - Approach:
     1. Use four pointers (top, bottom, left, right)
     2. Traverse in spiral direction
     3. Update boundaries after each direction
     4. Handle remaining elements
   - Time: O(m×n), Space: O(1)
   - Example Solution:
   ```python
   def spiralOrder(matrix):
       if not matrix: return []
       
       result = []
       top, bottom = 0, len(matrix) - 1
       left, right = 0, len(matrix[0]) - 1
       
       while top <= bottom and left <= right:
           # Traverse right
           for j in range(left, right + 1):
               result.append(matrix[top][j])
           top += 1
           
           # Traverse down
           for i in range(top, bottom + 1):
               result.append(matrix[i][right])
           right -= 1
           
           if top <= bottom:
               # Traverse left
               for j in range(right, left - 1, -1):
                   result.append(matrix[bottom][j])
               bottom -= 1
           
           if left <= right:
               # Traverse up
               for i in range(bottom, top - 1, -1):
                   result.append(matrix[i][left])
               left += 1
       
       return result
   ```

2. **Matrix Block Sum** ([LeetCode 1314](https://leetcode.com/problems/matrix-block-sum/))
   - Pattern: Block summation
   - Key Points: Prefix sum
   - Time: O(m×n), Space: O(m×n)

## Tips for Matrix Problems
1. Consider in-place modifications
2. Handle matrix boundaries carefully
3. Use direction arrays for traversal
4. Implement efficient space solutions
5. Watch for edge cases
6. Use auxiliary space when needed
7. Consider symmetry properties
8. Optimize traversal patterns

Happy Coding! 🚀