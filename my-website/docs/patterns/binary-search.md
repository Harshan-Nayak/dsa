---
id: binary-search-pattern
title: Binary Search Pattern
sidebar_label: Binary Search
sidebar_position: 4
---

# Binary Search Pattern

## Overview

Binary Search is a fundamental algorithmic pattern that efficiently finds a target value within a sorted collection by repeatedly dividing the search space in half. This pattern significantly reduces time complexity from linear to logarithmic, making it extremely efficient for large datasets.

### When to Use This Pattern
- **Sorted Array Searching**: Finding elements in sorted arrays
- **Answer Space Problems**: Finding optimal values within a range
- **Matrix Searching**: Searching in sorted 2D arrays
- **Rotated Array Operations**: Finding elements in rotated sorted arrays
- **Boundary Finding**: Locating first/last occurrences
- **Optimization Problems**: Minimizing/maximizing values
- **Kth Element Problems**: Finding kth smallest/largest elements
- **Missing/Duplicate Finding**: Identifying missing or duplicate elements
- **Peak Finding**: Locating local or global peaks
- **Threshold Problems**: Finding values meeting specific criteria

### Key Characteristics
- **Logarithmic Time Complexity**: Usually achieves O(log n) time complexity
- **Sorted Data**: Typically requires sorted input for standard implementation
- **Space Efficient**: Usually requires O(1) extra space
- **Divide and Conquer**: Reduces search space by half in each step
- **Multiple Variations**: Can be adapted for various problem types

### Real-World Applications
- **Database Indexing**: Efficient record lookup
- **System Design**: Load balancing and rate limiting
- **Network Routing**: IP address lookup tables
- **Version Control**: Finding first bad version
- **Resource Allocation**: Optimal resource distribution

### Why Binary Search Matters
- **Performance**: Reduces time complexity from O(n) to O(log n)
- **Scalability**: Extremely efficient for large datasets
- **Versatility**: Solves various optimization problems
- **Precision**: Provides exact results for sorted data

Let's explore how binary search works in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Standard Binary Search
int binarySearch(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// First and Last Position
vector<int> searchRange(vector<int>& nums, int target) {
    int first = findBound(nums, target, true);
    int last = findBound(nums, target, false);
    return {first, last};
}

int findBound(vector<int>& nums, int target, bool isFirst) {
    int left = 0, right = nums.size() - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result = mid;
            if (isFirst) right = mid - 1;
            else left = mid + 1;
        }
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Standard Binary Search
public int binarySearch(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// First and Last Position
public int[] searchRange(int[] nums, int target) {
    int first = findBound(nums, target, true);
    int last = findBound(nums, target, false);
    return new int[]{first, last};
}

private int findBound(int[] nums, int target, boolean isFirst) {
    int left = 0, right = nums.length - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result = mid;
            if (isFirst) right = mid - 1;
            else left = mid + 1;
        }
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Standard Binary Search
def binary_search(nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# First and Last Position
def search_range(nums: List[int], target: int) -> List[int]:
    first = find_bound(nums, target, True)
    last = find_bound(nums, target, False)
    return [first, last]

def find_bound(nums: List[int], target: int, is_first: bool) -> int:
    left, right = 0, len(nums) - 1
    result = -1
    
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            result = mid
            if is_first:
                right = mid - 1
            else:
                left = mid + 1
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return result
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Standard Binary Search | Search in sorted array | O(log n) | O(1) |
| Rotated Array Search | Search in rotated sorted array | O(log n) | O(1) |
| Matrix Binary Search | Search in sorted 2D matrix | O(log(m*n)) | O(1) |
| Answer Space Binary Search | Find optimal value in range | O(log n) | O(1) |

## Binary Search Sub-Patterns

### 1. Standard Binary Search

**Problem: Search Insert Position (LeetCode 35)**

**Problem Statement:**
Given a sorted array and a target value, return the index where the target should be inserted.

**Solutions:**

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int left = 0, right = nums.size();
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) right = mid;
            else left = mid + 1;
        }
        return left;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0, right = nums.length;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) right = mid;
            else left = mid + 1;
        }
        return left;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)
        
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] >= target:
                right = mid
            else:
                left = mid + 1
        return left
```

</TabItem>
</Tabs>

**Time Complexity:** O(log n)
**Space Complexity:** O(1)

## Sub-Patterns and Example Problems

### 1. Standard Binary Search Pattern
#### Problems
1. [Binary Search](https://leetcode.com/problems/binary-search/) (LeetCode 704) - Easy
   - Basic binary search implementation
   - Pattern: Classic binary search
   - Key Points: Array must be sorted
   - Time: O(log n), Space: O(1)

2. [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) (LeetCode 374) - Easy
   - Interactive binary search
   - Pattern: Decision-based binary search
   - Key Points: Uses API calls to make decisions
   - Time: O(log n), Space: O(1)

3. [Search Insert Position](https://leetcode.com/problems/search-insert-position/) (LeetCode 35) - Easy
   - Find insertion position in sorted array
   - Pattern: Modified binary search
   - Key Points: Returns position where element should be inserted
   - Time: O(log n), Space: O(1)

#### Detailed Example: Binary Search (LeetCode 704)
**Problem**: Given a sorted array of integers and a target value, return the index of the target if it exists in the array, otherwise return -1.

**Intuition**: Since the array is sorted, we can use binary search to efficiently find the target by repeatedly dividing the search space in half.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1
```

</TabItem>
</Tabs>

### 2. Upper/Lower Bound Pattern
#### Problems
1. [Find First and Last Position](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) (LeetCode 34) - Medium
   - Find range of target element
   - Pattern: Dual binary search for boundaries
   - Key Points: Handle duplicates, find both ends
   - Time: O(log n), Space: O(1)

2. [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) (LeetCode 744) - Easy
   - Ceiling letter in sorted array
   - Pattern: Modified binary search with wrap-around
   - Key Points: Circular nature of letters
   - Time: O(log n), Space: O(1)

3. [Search Range](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) (LeetCode 34) - Medium
   - Find first and last occurrence
   - Pattern: Two-pass binary search
   - Key Points: Separate searches for left and right bounds
   - Time: O(log n), Space: O(1)

#### Detailed Example: Find First and Last Position (LeetCode 34)
**Problem**: Given a sorted array of integers and a target value, find the starting and ending position of the target.

**Intuition**: Use binary search twice - once to find the leftmost position and once to find the rightmost position of the target.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = findBound(nums, target, true);
        int last = findBound(nums, target, false);
        return {first, last};
    }
    
    int findBound(vector<int>& nums, int target, bool isFirst) {
        int left = 0, right = nums.size() - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                result = mid;
                if (isFirst) right = mid - 1;
                else left = mid + 1;
            }
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return result;
    }
};
```

</TabItem>
</Tabs>

### 3. Matrix Search Pattern
#### Problems
1. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) (LeetCode 74) - Medium
   - Binary search on sorted matrix
   - Pattern: Single binary search on flattened matrix
   - Key Points: Matrix can be treated as 1D array
   - Time: O(log(m*n)), Space: O(1)

2. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) (LeetCode 240) - Medium
   - Search in row-column sorted matrix
   - Pattern: Staircase traversal
   - Key Points: Start from top-right or bottom-left corner
   - Time: O(m + n), Space: O(1)

3. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) (LeetCode 378) - Medium
   - Find kth smallest element
   - Pattern: Binary search on value range
   - Key Points: Count elements smaller than mid
   - Time: O(n * log(max-min)), Space: O(1)

#### Detailed Example: Search a 2D Matrix (LeetCode 74)
**Problem**: Search for a target value in an m x n matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.

**Intuition**: Treat the 2D matrix as a flattened sorted array and perform binary search.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (matrix.empty() || matrix[0].empty()) return false;
        
        int m = matrix.size(), n = matrix[0].size();
        int left = 0, right = m * n - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int element = matrix[mid / n][mid % n];
            
            if (element == target) return true;
            if (element < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }
};
```

</TabItem>
</Tabs>

### 4. Rotated Array Pattern
#### Problems
1. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) (LeetCode 33) - Medium
   - Search in rotated array
   - Pattern: Modified binary search with pivot
   - Key Points: One half is always sorted
   - Time: O(log n), Space: O(1)

2. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) (LeetCode 153) - Medium
   - Find minimum element
   - Pattern: Binary search for inflection point
   - Key Points: Compare with rightmost element
   - Time: O(log n), Space: O(1)

3. [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) (LeetCode 81) - Medium
   - Search in rotated array with duplicates
   - Pattern: Modified binary search with duplicate handling
   - Key Points: Skip duplicates at boundaries
   - Time: O(log n) average, O(n) worst case, Space: O(1)

4. [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) (LeetCode 154) - Hard
   - Find minimum in array with duplicates
   - Pattern: Binary search with duplicate handling
   - Key Points: Handle equal elements carefully
   - Time: O(log n) average, O(n) worst case, Space: O(1)

#### Detailed Example: Search in Rotated Sorted Array (LeetCode 33)
**Problem**: Search for a target value in a rotated sorted array.

**Intuition**: In a rotated array, one half is always sorted. Use this property to determine which half to search in.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid])
                    right = mid - 1;
                else
                    left = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[right])
                    left = mid + 1;
                else
                    right = mid - 1;
            }
        }
        return -1;
    }
};
```

</TabItem>
</Tabs>

### 5. Answer Space Pattern
#### Problems
1. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) (LeetCode 875) - Medium
   - Minimize eating speed
   - Pattern: Binary search on result space
   - Key Points: Check feasibility for each speed
   - Time: O(n * log(max)), Space: O(1)

2. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) (LeetCode 410) - Hard
   - Minimize maximum subarray sum
   - Pattern: Binary search with greedy validation
   - Key Points: Use greedy approach to validate splits
   - Time: O(n * log(sum)), Space: O(1)

3. [Capacity To Ship Packages](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) (LeetCode 1011) - Medium
   - Find minimum ship capacity
   - Pattern: Binary search on capacity range
   - Key Points: Check if capacity is sufficient
   - Time: O(n * log(sum)), Space: O(1)

4. [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/) (LeetCode 1552) - Medium
   - Maximize minimum distance
   - Pattern: Binary search with feasibility check
   - Key Points: Count valid positions for given force
   - Time: O(n * log(range)), Space: O(1)

#### Detailed Example: Koko Eating Bananas (LeetCode 875)
**Problem**: Find the minimum eating speed k such that Koko can eat all bananas within h hours.

**Intuition**: Binary search on the possible eating speeds to find the minimum valid speed.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int left = 1;
        int right = *max_element(piles.begin(), piles.end());
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (canEatAll(piles, mid, h))
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    }
    
    bool canEatAll(vector<int>& piles, int k, int h) {
        int hours = 0;
        for (int pile : piles) {
            hours += (pile + k - 1) / k;
            if (hours > h) return false;
        }
        return true;
    }
};
```

</TabItem>
</Tabs>

## Tips for Binary Search Problems
1. Always consider array bounds carefully
2. Use `left + (right - left) / 2` to avoid integer overflow
3. Consider whether to use `<` or `<=` in the while loop
4. Handle duplicates appropriately
5. For rotated arrays, one half is always sorted
6. For answer space problems, define clear checking functions

Happy Coding! 🚀