---
id: hashing-pattern
title: Hashing Pattern
sidebar_label: Hashing
sidebar_position: 7
---

# Hashing Pattern

## Overview

Hashing is a fundamental algorithmic pattern that involves mapping data of arbitrary size to fixed-size values. This pattern is crucial for implementing efficient data structures, optimizing search operations, and solving various algorithmic problems that require quick data access and manipulation.

### When to Use This Pattern
- **Fast Data Retrieval**: O(1) average time complexity for lookups
- **Duplicate Detection**: Finding duplicates in arrays/strings
- **Frequency Counting**: Tracking element occurrences
- **String Manipulation**: Anagram detection, pattern matching
- **Caching**: Implementing efficient caching systems
- **Data Deduplication**: Removing duplicate elements
- **Prefix Sum Problems**: Subarray sum calculations
- **Set Operations**: Implementing union/intersection
- **Data Integrity**: Checksum verification
- **Load Balancing**: Distributing data across systems

### Key Characteristics
- **Constant Time Access**: O(1) average case lookups
- **Space-Time Tradeoff**: Uses extra space for better time complexity
- **Collision Handling**: Manages duplicate hash values
- **Dynamic Operations**: Supports insertions and deletions
- **Flexible Implementation**: Various hash function choices

### Real-World Applications
- **Database Indexing**: Fast record retrieval
- **Cryptography**: Message digest generation
- **Caching Systems**: Web cache implementation
- **Load Balancers**: Request distribution
- **Data Deduplication**: Storage optimization

### Why Hashing Matters
- **Performance**: Constant-time operations
- **Scalability**: Efficient for large datasets
- **Versatility**: Solves various problem types
- **Data Organization**: Efficient data structuring

Let's explore how hashing works in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Basic Hash Operations
class HashOperations {
public:
    // Count frequency of elements
    unordered_map<int, int> countFrequency(vector<int>& nums) {
        unordered_map<int, int> freq;
        for (int num : nums) {
            freq[num]++;
        }
        return freq;
    }
    
    // Find duplicates
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> result;
        unordered_set<int> seen;
        for (int num : nums) {
            if (!seen.insert(num).second) {
                result.push_back(num);
            }
        }
        return result;
    }
    
    // Check if arrays have common elements
    bool hasCommonElements(vector<int>& arr1, vector<int>& arr2) {
        unordered_set<int> set(arr1.begin(), arr1.end());
        for (int num : arr2) {
            if (set.count(num)) return true;
        }
        return false;
    }
};

// Subarray Sum Equals K
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixSum = {{0, 1}};
    int sum = 0, count = 0;
    for (int num : nums) {
        sum += num;
        count += prefixSum[sum - k];
        prefixSum[sum]++;
    }
    return count;
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Basic Hash Operations
class HashOperations {
    // Count frequency of elements
    public Map<Integer, Integer> countFrequency(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        return freq;
    }
    
    // Find duplicates
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> result = new ArrayList<>();
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (!seen.add(num)) {
                result.add(num);
            }
        }
        return result;
    }
    
    // Check if arrays have common elements
    public boolean hasCommonElements(int[] arr1, int[] arr2) {
        Set<Integer> set = new HashSet<>();
        for (int num : arr1) set.add(num);
        for (int num : arr2) {
            if (set.contains(num)) return true;
        }
        return false;
    }
}

// Subarray Sum Equals K
public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> prefixSum = new HashMap<>();
    prefixSum.put(0, 1);
    int sum = 0, count = 0;
    for (int num : nums) {
        sum += num;
        count += prefixSum.getOrDefault(sum - k, 0);
        prefixSum.put(sum, prefixSum.getOrDefault(sum, 0) + 1);
    }
    return count;
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Basic Hash Operations
class HashOperations:
    # Count frequency of elements
    def count_frequency(self, nums: List[int]) -> Dict[int, int]:
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        return freq
    
    # Find duplicates
    def find_duplicates(self, nums: List[int]) -> List[int]:
        result = []
        seen = set()
        for num in nums:
            if num in seen:
                result.append(num)
            seen.add(num)
        return result
    
    # Check if arrays have common elements
    def has_common_elements(self, arr1: List[int], arr2: List[int]) -> bool:
        set1 = set(arr1)
        return any(num in set1 for num in arr2)

# Subarray Sum Equals K
def subarray_sum(nums: List[int], k: int) -> int:
    prefix_sum = {0: 1}
    curr_sum = count = 0
    for num in nums:
        curr_sum += num
        count += prefix_sum.get(curr_sum - k, 0)
        prefix_sum[curr_sum] = prefix_sum.get(curr_sum, 0) + 1
    return count
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Basic Hash Operations | Insert, lookup, delete | O(1) average | O(n) |
| Frequency Counting | Count element occurrences | O(n) | O(n) |
| Two-Pass Hashing | Two iterations with hash table | O(n) | O(n) |
| Prefix Sum Hashing | Cumulative sum with hash table | O(n) | O(n) |

## Hashing Sub-Patterns

### 1. Basic Hashing Problems

#### Easy Problems
1. **Find Common Elements** ([LeetCode 349](https://leetcode.com/problems/intersection-of-two-arrays/))
   - Pattern: Hash Set
   - Example Solution:
   ```cpp
   vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
       unordered_set<int> set(nums1.begin(), nums1.end());
       vector<int> result;
       for (int num : nums2) {
           if (set.count(num)) {
               result.push_back(num);
               set.erase(num);
           }
       }
       return result;
   }
   ```
   - Time: O(n), Space: O(n)

2. **Contains Duplicate** ([LeetCode 217](https://leetcode.com/problems/contains-duplicate/))
   - Find if array has duplicates
   - Pattern: Hash Set
   - Key Points: Single pass with set
   - Time: O(n), Space: O(n)

3. **Valid Anagram** ([LeetCode 242](https://leetcode.com/problems/valid-anagram/))
   - Check if strings are anagrams
   - Pattern: Frequency Counter
   - Key Points: Compare character frequencies
   - Time: O(n), Space: O(1)

#### Medium Problems
1. **Group Anagrams** ([LeetCode 49](https://leetcode.com/problems/group-anagrams/))
   - Group strings by anagrams
   - Pattern: Sorted string as key
   - Example Solution:
   ```cpp
   vector<vector<string>> groupAnagrams(vector<string>& strs) {
       unordered_map<string, vector<string>> groups;
       for (string& s : strs) {
           string key = s;
           sort(key.begin(), key.end());
           groups[key].push_back(s);
       }
       vector<vector<string>> result;
       for (auto& pair : groups) {
           result.push_back(pair.second);
       }
       return result;
   }
   ```
   - Time: O(n * k * log k), Space: O(n * k)

2. **Majority Element II** ([LeetCode 229](https://leetcode.com/problems/majority-element-ii/))
   - Find elements appearing > n/3 times
   - Pattern: Frequency Counter
   - Key Points: Use hash map for counting
   - Time: O(n), Space: O(n)

#### Hard Problems
1. **First Missing Positive** ([LeetCode 41](https://leetcode.com/problems/first-missing-positive/))
   - Find smallest missing positive integer
   - Pattern: Index as Hash Key
   - Key Points: In-place modification
   - Time: O(n), Space: O(1)

### 2. Hashing with Prefix Sum

#### Medium Problems
1. **Subarray Sum Equals K** ([LeetCode 560](https://leetcode.com/problems/subarray-sum-equals-k/))
   - Count subarrays with sum K
   - Pattern: Prefix Sum + Hash Map
   - Example Solution:
   ```cpp
   int subarraySum(vector<int>& nums, int k) {
       unordered_map<int, int> prefixSum = {{0, 1}};
       int sum = 0, count = 0;
       for (int num : nums) {
           sum += num;
           count += prefixSum[sum - k];
           prefixSum[sum]++;
       }
       return count;
   }
   ```
   - Time: O(n), Space: O(n)

2. **Continuous Subarray Sum** ([LeetCode 523](https://leetcode.com/problems/continuous-subarray-sum/))
   - Check for subarray with sum multiple of k
   - Pattern: Prefix Sum Modulo
   - Key Points: Use remainder as key
   - Time: O(n), Space: O(n)

#### Hard Problems
1. **Count Beautiful Subarrays II** ([LeetCode 2588](https://leetcode.com/problems/count-beautiful-subarrays-ii/))
   - Complex subarray counting
   - Pattern: Advanced Prefix Sum
   - Key Points: Use hash map for optimization
   - Time: O(n), Space: O(n)

## Tips for Hashing Problems
1. Choose appropriate hash function
2. Handle collisions properly
3. Consider space-time tradeoffs
4. Use built-in hash containers
5. Handle edge cases carefully
6. Consider load factor impact
7. Use appropriate hash table size
8. Implement efficient hash functions

Happy Coding! 🚀