---
id: arrays-pattern
title: Arrays Pattern
sidebar_label: Arrays
sidebar_position: 2
---

# Arrays Pattern

## Overview

Arrays are fundamental data structures that serve as the building blocks of modern programming. They offer a systematic way to store and manage collections of similar data elements in contiguous memory locations. Here's what makes arrays essential:

### When to Use This Pattern
- **Sequential Data Storage**: When elements need to be stored and accessed in order
- **Fixed-Size Collections**: When the size of data is known beforehand
- **Random Access Needs**: When direct access to elements by index is required
- **Matrix Operations**: Working with 2D or multi-dimensional data
- **Buffer Management**: Implementing circular buffers or queues
- **Cache-Friendly Operations**: When memory locality is important
- **Primitive Data Collections**: Storing numbers, characters, or simple types
- **In-Place Modifications**: When data needs to be modified without extra space
- **Batch Processing**: Processing elements in chunks or blocks
- **Memory-Efficient Storage**: When minimal overhead per element is needed

### Key Characteristics
- **Contiguous Memory**: Elements are stored in adjacent memory locations
- **Random Access**: Direct access to any element using its index
- **Fixed Size** (in most languages): Memory allocated at declaration (except dynamic arrays)
- **Homogeneous Elements**: All elements must be of the same data type

### Real-World Applications
- **Image Processing**: Pixels stored in 2D arrays
- **Financial Data**: Stock prices, transaction records
- **Scientific Computing**: Numerical computations, data analysis
- **Gaming**: Storing game states, character positions
- **Database Systems**: Record management, indexing

### Why Arrays Matter
- **Performance**: O(1) access time for elements
- **Memory Efficiency**: Minimal overhead per element
- **Cache Friendly**: Sequential memory access pattern
- **Versatility**: Foundation for more complex data structures

Let's explore how arrays work in different programming languages and their common operations.

## Array Implementation in Different Languages

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Fixed-size array
int arr[5] = {1, 2, 3, 4, 5};

// Dynamic array (vector)
#include <vector>
vector<int> dynamicArr = {1, 2, 3, 4, 5};
dynamicArr.push_back(6); // Adds element at the end
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Fixed-size array
int[] arr = {1, 2, 3, 4, 5};

// Dynamic array (ArrayList)
import java.util.ArrayList;
ArrayList<Integer> dynamicArr = new ArrayList<>();
dynamicArr.add(1); // Adds element at the end
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Python lists (dynamic arrays)
arr = [1, 2, 3, 4, 5]
arr.append(6)  # Adds element at the end

# Using NumPy for fixed-size arrays
import numpy as np
np_arr = np.array([1, 2, 3, 4, 5])
```

</TabItem>
</Tabs>

## Common Operations and Their Complexities

| Operation | Description | Time Complexity | Space Complexity |
|-----------|-------------|-----------------|------------------|
| Access | Get element at index i | O(1) | O(1) |
| Search | Find element in unsorted array | O(n) | O(1) |
| Insert at end | Add element at end | O(1)* | O(1) |
| Insert at index | Add element at index i | O(n) | O(1) |
| Delete at end | Remove last element | O(1)* | O(1) |
| Delete at index | Remove element at index i | O(n) | O(1) |
| Update | Modify element at index i | O(1) | O(1) |

*Amortized time complexity for dynamic arrays

## Detailed Problem Examples

### 1. Two Sum (LeetCode 1)

**Problem Statement:**
Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array that add up to the target.

**Intuition:**
- We can use a hash map to store the complement (target - current number) we've seen so far
- For each number, we check if its complement exists in the hash map
- This allows us to find the pair in a single pass through the array

**Solutions:**

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// C++ Solution
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map; // value -> index
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.count(complement)) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Python Solution
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}  # value -> index
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []
```

</TabItem>
</Tabs>

**Time Complexity:** O(n) - We traverse the array once
**Space Complexity:** O(n) - We store at most n elements in the hash map

### 2. Maximum Subarray (LeetCode 53)

**Problem Statement:**
Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.

**Intuition:**
- We can use Kadane's Algorithm to solve this problem
- For each position, we decide whether to start a new subarray or extend the existing one
- We keep track of both the current sum and the maximum sum seen so far

**Solutions:**

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// C++ Solution
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }
        return maxSum;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Java Solution
class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Python Solution
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = current_sum = nums[0]
        
        for num in nums[1:]:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        return max_sum
```

</TabItem>
</Tabs>

**Time Complexity:** O(n) - We traverse the array once
**Space Complexity:** O(1) - We only use two variables regardless of input size

## Practice Problems

### Easy Problems
1. [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) (LeetCode 1480)
   - Calculate running sum of a 1D array
   - Time: O(n), Space: O(1)

2. [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) (LeetCode 1929)
   - Create array ans of length 2n where ans[i] == nums[i % n]
   - Time: O(n), Space: O(n)

3. [Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/) (LeetCode 1431)
   - Check if kid can have greatest number of candies
   - Time: O(n), Space: O(n)

4. [Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum/) (LeetCode 1572)
   - Sum of matrix diagonals
   - Time: O(n), Space: O(1)

5. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) (LeetCode 36)
   - Determine if Sudoku board is valid
   - Time: O(1), Space: O(1)

6. [Move Zeroes](https://leetcode.com/problems/move-zeroes/)
   - Move all zeroes to end while maintaining relative order
   - Time: O(n), Space: O(1)

7. [Majority Element](https://leetcode.com/problems/majority-element/)
   - Find element appearing more than n/2 times
   - Time: O(n), Space: O(1)

8. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
   - Remove duplicates in-place from sorted array
   - Time: O(n), Space: O(1)

9. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
   - Find maximum profit from one transaction
   - Time: O(n), Space: O(1)

### Medium Problems
1. [Rotate Array](https://leetcode.com/problems/rotate-array/)
   - Rotate array to right by k steps
   - Time: O(n), Space: O(1)

2. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
   - Calculate product of all elements except self
   - Time: O(n), Space: O(1)

3. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
   - Find maximum profit from multiple transactions
   - Time: O(n), Space: O(1)

4. [Number of Zero-Filled Subarrays](https://leetcode.com/problems/number-of-zero-filled-subarrays/)
   - Count subarrays filled with zeros
   - Time: O(n), Space: O(1)

5. [Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/)
   - Find if there exists increasing triplet
   - Time: O(n), Space: O(1)

### Hard Problems
1. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
   - Find smallest missing positive integer
   - Time: O(n), Space: O(1)




## Tips for Array Problems
1. Consider using two-pointer technique for array manipulation
2. Look for patterns that can be solved in-place to optimize space
3. For sorted arrays, binary search can reduce time complexity
4. Use hash tables when frequency counting is needed
5. Consider edge cases: empty array, single element, duplicates

Happy Coding! 🚀
