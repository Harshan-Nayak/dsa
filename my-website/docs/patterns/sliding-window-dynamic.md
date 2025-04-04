---
id: sliding-window-dynamic-pattern
title: Dynamic Size Sliding Window Pattern
sidebar_label: Dynamic Size Sliding Window
sidebar_position: 5
---

# Dynamic Size Sliding Window Pattern

## Overview

The Dynamic Size Sliding Window pattern is an advanced variation of the sliding window technique where the window size can grow or shrink based on certain conditions. Unlike fixed-size windows, dynamic windows adjust their boundaries to find optimal subarrays or substrings that satisfy given constraints. This flexibility makes it particularly powerful for solving problems where the optimal solution length isn't known beforehand.

### When to Use This Pattern
- **Variable Length Subarrays**: Finding subarrays that meet specific criteria
- **Substring Problems**: Finding longest/shortest substrings with constraints
- **Optimization Problems**: Minimizing/maximizing window size under conditions
- **Constraint-based Problems**: Finding windows that satisfy given constraints
- **Two-Pointer Variations**: When both window boundaries need adjustment
- **Cumulative Calculations**: When running sums/products need tracking
- **Character Frequency**: Managing character counts in strings
- **Subarray Properties**: Checking dynamic range conditions
- **Target Sum Problems**: Finding variable-length subarrays with sum conditions
- **Optimization with Constraints**: Balancing multiple conditions

### Key Characteristics
- **Variable Window Size**: Window length changes based on conditions
- **Two-Pointer Technique**: Often uses two pointers for window boundaries
- **Dynamic Adjustment**: Window expands/contracts based on criteria
- **Optimization Focus**: Finds optimal window size for conditions
- **State Tracking**: Maintains window state during adjustments

### Real-World Applications
- **Network Traffic Analysis**: Variable time window monitoring
- **Stock Market Analysis**: Dynamic period trend detection
- **Text Processing**: Finding optimal substring matches
- **Resource Allocation**: Dynamic resource window management
- **Stream Processing**: Variable chunk size analysis

### Why Dynamic Size Sliding Window Matters
- **Flexibility**: Adapts to varying conditions and constraints
- **Optimization**: Finds optimal subarray sizes automatically
- **Efficiency**: Maintains linear time complexity despite variable size
- **Versatility**: Solves complex substring and subarray problems

Let's explore how the dynamic size sliding window technique works visually and then dive into different programming language implementations.

## Visual Demonstration

<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>{`
      @keyframes slideWindow {
        0% { transform: translateX(0); width: 60px; }
        25% { transform: translateX(100px); width: 120px; }
        50% { transform: translateX(200px); width: 60px; }
        75% { transform: translateX(300px); width: 180px; }
        100% { transform: translateX(400px); width: 60px; }
      }
      .window {
        fill: rgba(64, 196, 255, 0.2);
        stroke: #40c4ff;
        stroke-width: 2;
        animation: slideWindow 5s infinite;
      }
      .element {
        fill: #2196f3;
      }
      .element-text {
        font-family: monospace;
        font-size: 14px;
        fill: white;
        text-anchor: middle;
        dominant-baseline: middle;
      }
    `}</style>
  </defs>
  
  <!-- Array elements -->
  <g transform="translate(50, 80)">
    <!-- Array boxes -->
    <rect x="0" y="0" width="60" height="60" class="element"/>
    <rect x="60" y="0" width="60" height="60" class="element"/>
    <rect x="120" y="0" width="60" height="60" class="element"/>
    <rect x="180" y="0" width="60" height="60" class="element"/>
    <rect x="240" y="0" width="60" height="60" class="element"/>
    <rect x="300" y="0" width="60" height="60" class="element"/>
    <rect x="360" y="0" width="60" height="60" class="element"/>
    <rect x="420" y="0" width="60" height="60" class="element"/>
    
    <!-- Array values -->
    <text x="30" y="30" class="element-text">2</text>
    <text x="90" y="30" class="element-text">4</text>
    <text x="150" y="30" class="element-text">6</text>
    <text x="210" y="30" class="element-text">8</text>
    <text x="270" y="30" class="element-text">10</text>
    <text x="330" y="30" class="element-text">12</text>
    <text x="390" y="30" class="element-text">14</text>
    <text x="450" y="30" class="element-text">16</text>
    
    <!-- Sliding window -->
    <rect x="0" y="0" width="60" height="60" class="window"/>
  </g>
  
  <!-- Description -->
  <text x="400" y="180" text-anchor="middle" font-family="system-ui" font-size="14">
    Dynamic window adjusting its size based on array elements
  </text>
</svg>

This animation demonstrates how a dynamic sliding window operates on an array. Notice how the window (highlighted in blue) dynamically adjusts its size while sliding through the array. The window can expand or contract based on certain conditions, making it ideal for problems like finding subarrays with specific properties.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Longest Substring Without Repeating Characters
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> charIndex(128, -1);
        int maxLength = 0;
        int start = 0;
        
        for (int end = 0; end < s.length(); end++) {
            if (charIndex[s[end]] >= start) {
                start = charIndex[s[end]] + 1;
            }
            charIndex[s[end]] = end;
            maxLength = max(maxLength, end - start + 1);
        }
        
        return maxLength;
    }
};

// Minimum Size Subarray Sum
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int minLength = INT_MAX;
        int start = 0;
        int sum = 0;
        
        for (int end = 0; end < nums.size(); end++) {
            sum += nums[end];
            
            while (sum >= target) {
                minLength = min(minLength, end - start + 1);
                sum -= nums[start];
                start++;
            }
        }
        
        return minLength == INT_MAX ? 0 : minLength;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Longest Substring Without Repeating Characters
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charIndex = new HashMap<>();
        int maxLength = 0;
        int start = 0;
        
        for (int end = 0; end < s.length(); end++) {
            char c = s.charAt(end);
            if (charIndex.containsKey(c)) {
                start = Math.max(start, charIndex.get(c) + 1);
            }
            charIndex.put(c, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }
        
        return maxLength;
    }
}

// Minimum Size Subarray Sum
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int minLength = Integer.MAX_VALUE;
        int start = 0;
        int sum = 0;
        
        for (int end = 0; end < nums.length; end++) {
            sum += nums[end];
            
            while (sum >= target) {
                minLength = Math.min(minLength, end - start + 1);
                sum -= nums[start];
                start++;
            }
        }
        
        return minLength == Integer.MAX_VALUE ? 0 : minLength;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Longest Substring Without Repeating Characters
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index = {}
        max_length = 0
        start = 0
        
        for end, char in enumerate(s):
            if char in char_index and char_index[char] >= start:
                start = char_index[char] + 1
            char_index[char] = end
            max_length = max(max_length, end - start + 1)
        
        return max_length

# Minimum Size Subarray Sum
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_length = float('inf')
        start = 0
        curr_sum = 0
        
        for end in range(len(nums)):
            curr_sum += nums[end]
            
            while curr_sum >= target:
                min_length = min(min_length, end - start + 1)
                curr_sum -= nums[start]
                start += 1
        
        return min_length if min_length != float('inf') else 0
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Substring Search | Find substrings meeting criteria | O(n) | O(k) |
| Target Sum | Find subarrays with sum conditions | O(n) | O(1) |
| Character Frequency | Track character counts | O(n) | O(k) |
| Two-Pointer Sliding | Adjust both window boundaries | O(n) | O(1) |
| State Management | Track window state variables | O(n) | O(k) |

## Practice Problems

### Medium Level
1. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
   - Find longest substring with unique characters
   - Time: O(n), Space: O(k)

2. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
   - Find longest substring after k character replacements
   - Time: O(n), Space: O(1)

3. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
   - Find shortest subarray with sum ≥ target
   - Time: O(n), Space: O(1)

4. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
   - Find longest sequence after flipping k zeros
   - Time: O(n), Space: O(1)

5. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
   - Maximum fruits from two types
   - Time: O(n), Space: O(1)

6. [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)
   - Count subarrays with product less than k
   - Time: O(n), Space: O(1)

7. [Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/)
   - Find most frequent substring with constraints
   - Time: O(n), Space: O(k)

8. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)
   - Count subarrays with k odd numbers
   - Time: O(n), Space: O(1)

### Hard Level
1. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
   - Find smallest window containing all characters
   - Time: O(n), Space: O(k)

2. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
   - Find substrings containing all words
   - Time: O(n*k), Space: O(k)

3. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
   - Count subarrays with exactly k distinct integers
   - Time: O(n), Space: O(k)

## Tips for Dynamic Size Sliding Window Problems
1. Identify the window expansion/contraction conditions
2. Maintain necessary state variables for window validation
3. Consider edge cases: empty input, single element
4. Optimize space usage by reusing variables
5. Use appropriate data structures for state tracking
6. Handle window size updates efficiently
7. Consider using helper functions for complex conditions
8. Validate window boundaries during adjustments

Happy Coding! 🚀