---
id: two-pointers-pattern
title: Two Pointers Pattern
sidebar_label: Two Pointers
sidebar_position: 3
---

# Two Pointers Pattern

## Overview

The Two Pointers technique is a powerful algorithmic pattern that uses two pointers to traverse an array or string, often moving towards each other or in the same direction. This pattern is particularly effective for solving problems with a linear time complexity, offering significant performance improvements over brute-force approaches.

### When to Use This Pattern
- **Sorted Array Operations**: When working with sorted arrays for searching or merging
- **Palindrome Problems**: Checking or manipulating palindromic structures
- **Two Sum Problems**: Finding pairs that satisfy certain conditions
- **In-Place Array Modifications**: Removing duplicates or moving elements
- **Sliding Window**: When fixed or variable size window traversal is needed
- **Cycle Detection**: Finding cycles in linked lists or sequences
- **String Manipulation**: Comparing or modifying strings from both ends
- **Container Problems**: Finding optimal container sizes or areas
- **Subsequence Verification**: Checking if one sequence exists in another
- **Meeting Point Problems**: Finding where two sequences intersect

### Key Characteristics
- **Linear Time Complexity**: Usually achieves O(n) time complexity
- **Space Efficient**: Typically requires O(1) extra space
- **In-place Operations**: Often modifies the input array directly
- **Ordered Data**: Most effective with sorted arrays or specific patterns

### Real-World Applications
- **String Manipulation**: Palindrome checking, string reversal
- **Array Operations**: Merging sorted arrays, finding pairs
- **Memory Management**: Managing buffer operations
- **Network Protocols**: Sliding window protocols
- **Database Operations**: Merge join algorithms

### Why Two Pointers Matter
- **Performance**: Reduces time complexity from O(n²) to O(n)
- **Memory Efficiency**: Constant space complexity in most cases
- **Versatility**: Solves various array and string problems
- **Simplicity**: Easy to implement and understand

Let's explore how the two pointers technique works in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Two pointers moving towards each other
void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}

// Two pointers moving in same direction
void removeDuplicates(vector<int>& arr) {
    if (arr.empty()) return;
    int slow = 0;
    for (int fast = 1; fast < arr.size(); fast++) {
        if (arr[fast] != arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Two pointers moving towards each other
public void reverseArray(int[] arr) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

// Two pointers moving in same direction
public int removeDuplicates(int[] arr) {
    if (arr.length == 0) return 0;
    int slow = 0;
    for (int fast = 1; fast < arr.length; fast++) {
        if (arr[fast] != arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow + 1;
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Two pointers moving towards each other
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

# Two pointers moving in same direction
def remove_duplicates(arr):
    if not arr:
        return 0
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    return slow + 1
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Opposite Direction | Pointers start from ends moving inward | O(n) | O(1) |
| Same Direction | Both pointers move forward | O(n) | O(1) |
| Sliding Window | Fixed or variable window size | O(n) | O(1) |
| Fast and Slow | Different speed pointers | O(n) | O(1) |

## Two Pointers on Arrays

### 1. Merge Sorted Array (LeetCode 88)

**Problem Statement:**
Merge two sorted arrays nums1 and nums2 into nums1 in non-decreasing order.

**Intuition:**
- Use two pointers starting from the end of both arrays
- Compare elements and place larger one at the end of nums1
- Continue until all elements are placed

**Solutions:**

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;
        
        while (p2 >= 0) {
            if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;
        
        while (p2 >= 0) {
            if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        p1 = m - 1
        p2 = n - 1
        p = m + n - 1
        
        while p2 >= 0:
            if p1 >= 0 and nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            p -= 1
```

</TabItem>
</Tabs>

**Time Complexity:** O(n + m) - We traverse both arrays once
**Space Complexity:** O(1) - We modify nums1 in-place

## Practice Problems

### Array Problems
1. [Move Zeroes](https://leetcode.com/problems/move-zeroes/) (LeetCode 283)
   - Move all zeroes to end while maintaining relative order
   - Time: O(n), Space: O(1)

2. [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) (LeetCode 167)
   - Find two numbers that add up to target in sorted array
   - Time: O(n), Space: O(1)

3. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) (LeetCode 11)
   - Find two lines that together with x-axis forms container with most water
   - Time: O(n), Space: O(1)

4. [3Sum](https://leetcode.com/problems/3sum/) (LeetCode 15)
   - Find all unique triplets that sum to zero
   - Time: O(n²), Space: O(1)

5. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) (LeetCode 42)
   - Calculate how much water can be trapped between bars
   - Time: O(n), Space: O(1)

### String Problems
1. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) (LeetCode 125)
   - Check if string is palindrome considering only alphanumeric
   - Time: O(n), Space: O(1)

2. [Reverse String](https://leetcode.com/problems/reverse-string/) (LeetCode 344)
   - Reverse string in-place
   - Time: O(n), Space: O(1)

3. [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/) (LeetCode 1768)
   - Merge two strings by adding letters in alternating order
   - Time: O(n + m), Space: O(1)

4. [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) (LeetCode 151)
   - Reverse words while maintaining word order
   - Time: O(n), Space: O(1)

5. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) (LeetCode 5)
   - Find longest palindromic substring
   - Time: O(n²), Space: O(1)

## Tips for Two Pointer Problems
1. Consider whether the input needs to be sorted
2. Choose appropriate pointer movement strategy (opposite/same direction)
3. Handle edge cases: empty input, single element, duplicates
4. Be careful with pointer bounds and conditions
5. Consider using helper functions for complex operations

Happy Coding! 🚀