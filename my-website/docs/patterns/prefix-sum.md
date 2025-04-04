---
id: prefix-sum-pattern
title: Prefix Sum Pattern
sidebar_label: Prefix Sum
sidebar_position: 4
---

# Prefix Sum Pattern

## Overview

Prefix Sum is a powerful algorithmic pattern that pre-computes cumulative sums of array elements to enable efficient range queries and array manipulations. This technique transforms problems requiring repeated summations into constant-time operations through preprocessing.

### When to Use This Pattern
- **Range Sum Queries**: When you need to calculate sums of subarrays frequently
- **Cumulative Statistics**: Computing running totals, averages, or other statistics
- **Difference Arrays**: When dealing with multiple range updates
- **2D Grid Operations**: Processing image regions or matrix blocks
- **Equilibrium Index**: Finding points where left sum equals right sum
- **Subarray Problems**: Finding subarrays with given sum or properties
- **Streaming Data**: Processing continuous data with running calculations
- **Game Scoring**: Tracking cumulative scores or achievements
- **Time Series**: Analyzing temporal data with cumulative metrics
- **Resource Allocation**: Managing cumulative resource usage

### Key Characteristics
- **Pre-computation**: Builds auxiliary array storing cumulative sums
- **Constant-time Queries**: O(1) time for range sum queries
- **Linear Preprocessing**: O(n) time to build prefix sum array
- **Additional Space**: Requires O(n) extra space for storage

### Real-World Applications
- **Financial Analysis**: Computing cumulative returns over time periods
- **Image Processing**: Integral images for feature detection
- **Database Systems**: Optimizing range sum queries
- **Signal Processing**: Running averages and smoothing
- **Gaming**: Calculating cumulative scores and statistics

### Why Prefix Sum Matters
- **Query Efficiency**: Reduces range sum queries from O(n) to O(1)
- **Versatility**: Applies to various array manipulation problems
- **Simplicity**: Easy to implement and understand
- **Memory-Time Tradeoff**: Uses extra space for faster queries

Let's explore how prefix sum works with a practical example:

Consider an array `[3,1,4,2,5]`. The prefix sum array would be `[3,4,8,10,15]`, calculated as:
```
prefix[0] = 3              // First element
prefix[1] = 3 + 1 = 4      // Sum up to second element
prefix[2] = 3 + 1 + 4 = 8  // Sum up to third element
prefix[3] = 8 + 2 = 10     // Sum up to fourth element
prefix[4] = 10 + 5 = 15    // Sum up to fifth element
```

To find the sum of any subarray [i,j], we can use: `prefix[j] - prefix[i-1]` (with appropriate handling for i=0).

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class PrefixSum {
public:
    // Build prefix sum array
    vector<int> buildPrefixSum(vector<int>& nums) {
        vector<int> prefix(nums.size());
        prefix[0] = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            prefix[i] = prefix[i-1] + nums[i];
        }
        return prefix;
    }
    
    // Get sum of range [left, right]
    int getRangeSum(vector<int>& prefix, int left, int right) {
        if (left == 0) return prefix[right];
        return prefix[right] - prefix[left-1];
    }
    
    // 2D prefix sum for matrix
    vector<vector<int>> build2DPrefixSum(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        vector<vector<int>> prefix(m, vector<int>(n));
        
        // Fill first row and column
        prefix[0][0] = matrix[0][0];
        for (int i = 1; i < m; i++)
            prefix[i][0] = prefix[i-1][0] + matrix[i][0];
        for (int j = 1; j < n; j++)
            prefix[0][j] = prefix[0][j-1] + matrix[0][j];
            
        // Fill rest of the matrix
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] 
                             - prefix[i-1][j-1] + matrix[i][j];
            }
        }
        return prefix;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
class PrefixSum {
    // Build prefix sum array
    public int[] buildPrefixSum(int[] nums) {
        int[] prefix = new int[nums.length];
        prefix[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1] + nums[i];
        }
        return prefix;
    }
    
    // Get sum of range [left, right]
    public int getRangeSum(int[] prefix, int left, int right) {
        if (left == 0) return prefix[right];
        return prefix[right] - prefix[left-1];
    }
    
    // 2D prefix sum for matrix
    public int[][] build2DPrefixSum(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int[][] prefix = new int[m][n];
        
        // Fill first row and column
        prefix[0][0] = matrix[0][0];
        for (int i = 1; i < m; i++)
            prefix[i][0] = prefix[i-1][0] + matrix[i][0];
        for (int j = 1; j < n; j++)
            prefix[0][j] = prefix[0][j-1] + matrix[0][j];
            
        // Fill rest of the matrix
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                prefix[i][j] = prefix[i-1][j] + prefix[i][j-1]
                             - prefix[i-1][j-1] + matrix[i][j];
            }
        }
        return prefix;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
class PrefixSum:
    def build_prefix_sum(self, nums):
        prefix = [0] * len(nums)
        prefix[0] = nums[0]
        for i in range(1, len(nums)):
            prefix[i] = prefix[i-1] + nums[i]
        return prefix
    
    def get_range_sum(self, prefix, left, right):
        if left == 0:
            return prefix[right]
        return prefix[right] - prefix[left-1]
    
    def build_2d_prefix_sum(self, matrix):
        if not matrix: return []
        m, n = len(matrix), len(matrix[0])
        prefix = [[0] * n for _ in range(m)]
        
        # Fill first row and column
        prefix[0][0] = matrix[0][0]
        for i in range(1, m):
            prefix[i][0] = prefix[i-1][0] + matrix[i][0]
        for j in range(1, n):
            prefix[0][j] = prefix[0][j-1] + matrix[0][j]
        
        # Fill rest of the matrix
        for i in range(1, m):
            for j in range(1, n):
                prefix[i][j] = (prefix[i-1][j] + prefix[i][j-1]
                              - prefix[i-1][j-1] + matrix[i][j])
        return prefix
```

</TabItem>
</Tabs>

## Common Operations and Their Complexities

| Operation | Description | Time Complexity | Space Complexity |
|-----------|-------------|-----------------|------------------|
| Build Prefix Sum | Create prefix sum array | O(n) | O(n) |
| Range Query | Get sum of range [i,j] | O(1) | O(1) |
| Build 2D Prefix | Create 2D prefix sum | O(m×n) | O(m×n) |
| 2D Range Query | Get sum of rectangle | O(1) | O(1) |
| Update (Point) | Update single element | O(n) | O(1) |

## Detailed Problem Examples

### 1. Range Sum Query - Immutable (LeetCode 303)

**Problem Statement:**
Given an integer array nums, handle multiple queries to calculate the sum of elements between indices left and right inclusive.

**Intuition:**
- Pre-compute prefix sums during initialization
- For each query, use prefix array to calculate range sum in O(1) time
- Handle edge cases where left = 0

**Solutions:**

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class NumArray {
private:
    vector<int> prefix;
    
public:
    NumArray(vector<int>& nums) {
        prefix = vector<int>(nums.size());
        if (nums.empty()) return;
        
        prefix[0] = nums[0];
        for (int i = 1; i < nums.size(); i++) {
            prefix[i] = prefix[i-1] + nums[i];
        }
    }
    
    int sumRange(int left, int right) {
        if (left == 0) return prefix[right];
        return prefix[right] - prefix[left-1];
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
class NumArray {
    private int[] prefix;
    
    public NumArray(int[] nums) {
        prefix = new int[nums.length];
        if (nums.length == 0) return;
        
        prefix[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1] + nums[i];
        }
    }
    
    public int sumRange(int left, int right) {
        if (left == 0) return prefix[right];
        return prefix[right] - prefix[left-1];
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
class NumArray:
    def __init__(self, nums: List[int]):
        self.prefix = [0] * len(nums)
        if not nums: return
        
        self.prefix[0] = nums[0]
        for i in range(1, len(nums)):
            self.prefix[i] = self.prefix[i-1] + nums[i]
    
    def sumRange(self, left: int, right: int) -> int:
        if left == 0:
            return self.prefix[right]
        return self.prefix[right] - self.prefix[left-1]
```

</TabItem>
</Tabs>

**Time Complexity:** 
- Initialization: O(n)
- Query: O(1)

**Space Complexity:** O(n) for storing prefix sum array

## Practice Problems

### Easy Problems
1. [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) (LeetCode 1480)
   - Calculate running sum of array
   - Time: O(n), Space: O(1)

2. [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) (LeetCode 303)
   - Handle multiple range sum queries
   - Time: O(1) per query, Space: O(n)

3. [Left and Right Sum Differences](https://leetcode.com/problems/left-and-right-sum-differences/)
   - Find absolute difference between left and right sums
   - Time: O(n), Space: O(n)

4. [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
   - Find index where sum of left equals sum of right
   - Time: O(n), Space: O(1)

### Medium Problems
1. [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)
   - Handle 2D range sum queries
   - Time: O(1) per query, Space: O(m×n)

2. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
   - Calculate product excluding self using prefix products
   - Time: O(n), Space: O(1)

3. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
   - Count subarrays with sum K using prefix sums
   - Time: O(n), Space: O(n)

4. [Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)
   - Find longest subarray with sum K
   - Time: O(n), Space: O(n)

### Hard Problems
1. [Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)
   - Count submatrices with sum equal to target
   - Time: O(n³), Space: O(n²)

2. [Maximum Sum of 3 Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/)
   - Find three non-overlapping subarrays with maximum sum
   - Time: O(n), Space: O(n)

## Tips for Prefix Sum Problems
1. Consider using prefix sum when dealing with range queries
2. Watch out for edge cases, especially when left = 0
3. For 2D problems, build row-wise and column-wise prefix sums
4. Consider using hash map with prefix sums for subarray problems
5. Be careful with integer overflow in large sum calculations

Happy Coding! 🚀