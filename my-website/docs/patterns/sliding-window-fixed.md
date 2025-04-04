---
id: sliding-window-fixed-pattern
title: Fixed Size Sliding Window Pattern
sidebar_label: Fixed Size Sliding Window
sidebar_position: 4
---

# Fixed Size Sliding Window Pattern

## Overview

The Fixed Size Sliding Window pattern is a powerful algorithmic technique that involves maintaining a window of fixed size k while traversing through an array or string. This window "slides" through the data structure one element at a time, making it highly efficient for solving various problems that require analyzing subarrays or substrings of a specific length.

### When to Use This Pattern
- **Subarray Operations**: Finding subarrays of fixed length that meet certain criteria
- **String Pattern Matching**: Locating fixed-length patterns or anagrams
- **Array Averages**: Computing averages of fixed-size subarrays
- **Maximum/Minimum Values**: Finding extreme values in fixed-size windows
- **Binary Substrings**: Analyzing fixed-length binary patterns
- **Distinct Elements**: Counting unique elements in fixed-size windows
- **Sum Calculations**: Computing sums of consecutive elements
- **Statistical Metrics**: Calculating medians or other statistics in windows
- **Pattern Recognition**: Identifying repeated patterns of fixed length
- **Data Streaming**: Processing fixed-size chunks of streaming data

### Key Characteristics
- **Fixed Window Size**: Window length remains constant throughout traversal
- **Linear Time Complexity**: Typically achieves O(n) time complexity
- **Constant Space**: Usually requires O(1) or O(k) extra space
- **Sequential Processing**: Elements are processed in order
- **Window Sliding**: One element added, one removed per slide

### Real-World Applications
- **Moving Averages**: Stock price analysis
- **Network Monitoring**: Fixed-time traffic analysis
- **Image Processing**: Pixel window operations
- **Signal Processing**: Fixed-width filters
- **Data Analytics**: Time-series analysis

### Why Fixed Size Sliding Window Matters
- **Efficiency**: Eliminates redundant computations
- **Optimization**: Perfect for fixed-size subarray problems
- **Simplicity**: Easy to implement and understand
- **Performance**: Maintains consistent time complexity

Let's explore how the fixed size sliding window technique works in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Maximum Average Subarray I
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        double sum = 0;
        // Calculate sum of first window
        for (int i = 0; i < k; i++) {
            sum += nums[i];
        }
        
        double maxSum = sum;
        // Slide window and update maxSum
        for (int i = k; i < nums.size(); i++) {
            sum = sum + nums[i] - nums[i - k];
            maxSum = max(maxSum, sum);
        }
        
        return maxSum / k;
    }
};

// Find All Anagrams
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        if (s.length() < p.length()) return {};
        
        vector<int> result;
        vector<int> pCount(26, 0);
        vector<int> window(26, 0);
        
        // Count characters in pattern
        for (char c : p) {
            pCount[c - 'a']++;
        }
        
        // Initialize first window
        for (int i = 0; i < p.length(); i++) {
            window[s[i] - 'a']++;
        }
        
        if (window == pCount) result.push_back(0);
        
        // Slide window
        for (int i = p.length(); i < s.length(); i++) {
            window[s[i - p.length()] - 'a']--;
            window[s[i] - 'a']++;
            
            if (window == pCount) {
                result.push_back(i - p.length() + 1);
            }
        }
        
        return result;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Maximum Average Subarray I
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        double sum = 0;
        // Calculate sum of first window
        for (int i = 0; i < k; i++) {
            sum += nums[i];
        }
        
        double maxSum = sum;
        // Slide window and update maxSum
        for (int i = k; i < nums.length; i++) {
            sum = sum + nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, sum);
        }
        
        return maxSum / k;
    }
}

// Find All Anagrams
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        if (s.length() < p.length()) return new ArrayList<>();
        
        List<Integer> result = new ArrayList<>();
        int[] pCount = new int[26];
        int[] window = new int[26];
        
        // Count characters in pattern
        for (char c : p.toCharArray()) {
            pCount[c - 'a']++;
        }
        
        // Initialize first window
        for (int i = 0; i < p.length(); i++) {
            window[s.charAt(i) - 'a']++;
        }
        
        if (Arrays.equals(window, pCount)) result.add(0);
        
        // Slide window
        for (int i = p.length(); i < s.length(); i++) {
            window[s.charAt(i - p.length()) - 'a']--;
            window[s.charAt(i) - 'a']++;
            
            if (Arrays.equals(window, pCount)) {
                result.add(i - p.length() + 1);
            }
        }
        
        return result;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Maximum Average Subarray I
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        # Calculate sum of first window
        curr_sum = sum(nums[:k])
        max_sum = curr_sum
        
        # Slide window and update max_sum
        for i in range(k, len(nums)):
            curr_sum = curr_sum + nums[i] - nums[i - k]
            max_sum = max(max_sum, curr_sum)
        
        return max_sum / k

# Find All Anagrams
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(s) < len(p):
            return []
        
        result = []
        p_count = [0] * 26
        window = [0] * 26
        
        # Count characters in pattern
        for c in p:
            p_count[ord(c) - ord('a')] += 1
        
        # Initialize first window
        for i in range(len(p)):
            window[ord(s[i]) - ord('a')] += 1
        
        if window == p_count:
            result.append(0)
        
        # Slide window
        for i in range(len(p), len(s)):
            window[ord(s[i - len(p)]) - ord('a')] -= 1
            window[ord(s[i]) - ord('a')] += 1
            
            if window == p_count:
                result.append(i - len(p) + 1)
        
        return result
```

</TabItem>
</Tabs>

## Visual Demonstration

<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>{`
      @keyframes slideWindow {
        0% { transform: translateX(0); }
        25% { transform: translateX(60px); }
        50% { transform: translateX(120px); }
        75% { transform: translateX(180px); }
        100% { transform: translateX(240px); }
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
    <text x="30" y="30" class="element-text">1</text>
    <text x="90" y="30" class="element-text">3</text>
    <text x="150" y="30" class="element-text">5</text>
    <text x="210" y="30" class="element-text">7</text>
    <text x="270" y="30" class="element-text">9</text>
    <text x="330" y="30" class="element-text">11</text>
    <text x="390" y="30" class="element-text">13</text>
    <text x="450" y="30" class="element-text">15</text>
    
    <!-- Fixed-size sliding window (size=3) -->
    <rect x="0" y="0" width="180" height="60" class="window"/>
  </g>
  
  <!-- Description -->
  <text x="400" y="180" text-anchor="middle" font-family="system-ui" font-size="14">
    Fixed-size window (k=3) sliding through the array
  </text>
</svg>

This animation demonstrates how a fixed-size sliding window operates on an array. Notice how the window (highlighted in blue) maintains its constant size of k=3 elements while sliding through the array. This visualization helps understand how the window processes consecutive subarrays of fixed length.

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Sum/Average | Calculate sum/average of k elements | O(n) | O(1) |
| Pattern Match | Find fixed-length patterns | O(n) | O(k) |
| Distinct Elements | Count unique elements in k-window | O(n) | O(k) |
| Max/Min Value | Find extreme values in k-window | O(n) | O(1) |
| Median Finding | Find median in k-window | O(n log k) | O(k) |

## Practice Problems

### Easy Level
1. [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
   - Find maximum average value in subarray of size k
   - Time: O(n), Space: O(1)

2. [Substrings of Size Three with Distinct Characters](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)
   - Count substrings of size 3 with unique characters
   - Time: O(n), Space: O(1)

### Medium Level
1. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
   - Find all anagrams of pattern in string
   - Time: O(n), Space: O(1)

2. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
   - Check if string contains permutation of pattern
   - Time: O(n), Space: O(1)

3. [Maximum Sum of Distinct Subarrays With Length K](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/)
   - Find maximum sum of k-length subarray with distinct elements
   - Time: O(n), Space: O(k)

4. [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
   - Find maximum number of vowels in k-length substring
   - Time: O(n), Space: O(1)

### Hard Level
1. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
   - Find maximum element in each k-sized window
   - Time: O(n), Space: O(k)

2. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
   - Find median in each k-sized window
   - Time: O(n log k), Space: O(k)

3. [Maximum Sum of 3 Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/)
   - Find three non-overlapping subarrays with maximum sum
   - Time: O(n), Space: O(n)

## Tips for Fixed Size Sliding Window Problems
1. Initialize the first window correctly
2. Maintain window state efficiently while sliding
3. Handle edge cases: empty input, k > array length
4. Consider using auxiliary data structures for complex conditions
5. Optimize space usage by reusing variables when possible

Happy Coding! 🚀