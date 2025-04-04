---
id: bit-manipulation-pattern
title: Bit Manipulation Pattern
sidebar_label: Bit Manipulation
sidebar_position: 6
---

# Bit Manipulation Pattern

## Overview

Bit Manipulation is a fundamental algorithmic pattern that involves performing operations at the bit level. This pattern is crucial for optimizing space and time complexity, implementing low-level system operations, and solving various algorithmic problems efficiently.

### When to Use This Pattern
- **Optimizing Space**: Storing multiple flags in a single integer
- **Arithmetic Operations**: Implementing efficient arithmetic operations
- **State Management**: Managing binary states and flags
- **Data Compression**: Basic compression techniques
- **Error Detection**: Implementing parity checks
- **Cryptography**: Basic encryption operations
- **Network Protocols**: Handling network packets and flags
- **Hardware Interfacing**: Low-level hardware communication
- **Performance Optimization**: Optimizing mathematical operations
- **Gaming Logic**: Implementing game states and flags

### Key Characteristics
- **Constant Space**: Often requires O(1) extra space
- **Fast Operations**: Bitwise operations are CPU-efficient
- **Platform Independent**: Works consistently across systems
- **Memory Efficient**: Reduces memory usage
- **Multiple Applications**: Solves various problem types

### Real-World Applications
- **Network Protocols**: TCP/IP flag management
- **Graphics Processing**: Image manipulation
- **Operating Systems**: Process flags and permissions
- **Database Systems**: Bitmap indexing
- **Game Development**: State management

### Why Bit Manipulation Matters
- **Performance**: Direct hardware-level operations
- **Memory**: Efficient memory utilization
- **Optimization**: Reduces time and space complexity
- **System Programming**: Essential for low-level programming

Let's explore how bit manipulation works in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Basic Bit Operations
class BitOperations {
public:
    // Get bit at position i
    bool getBit(int num, int i) {
        return (num & (1 << i)) != 0;
    }
    
    // Set bit at position i
    int setBit(int num, int i) {
        return num | (1 << i);
    }
    
    // Clear bit at position i
    int clearBit(int num, int i) {
        return num & ~(1 << i);
    }
    
    // Count set bits
    int countSetBits(int num) {
        int count = 0;
        while (num) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }
};

// Single Number Problem
int singleNumber(vector<int>& nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Basic Bit Operations
class BitOperations {
    // Get bit at position i
    public boolean getBit(int num, int i) {
        return (num & (1 << i)) != 0;
    }
    
    // Set bit at position i
    public int setBit(int num, int i) {
        return num | (1 << i);
    }
    
    // Clear bit at position i
    public int clearBit(int num, int i) {
        return num & ~(1 << i);
    }
    
    // Count set bits
    public int countSetBits(int num) {
        int count = 0;
        while (num != 0) {
            count += num & 1;
            num >>>= 1;
        }
        return count;
    }
}

// Single Number Problem
public int singleNumber(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Basic Bit Operations
class BitOperations:
    # Get bit at position i
    def get_bit(self, num: int, i: int) -> bool:
        return (num & (1 << i)) != 0
    
    # Set bit at position i
    def set_bit(self, num: int, i: int) -> int:
        return num | (1 << i)
    
    # Clear bit at position i
    def clear_bit(self, num: int, i: int) -> int:
        return num & ~(1 << i)
    
    # Count set bits
    def count_set_bits(self, num: int) -> int:
        count = 0
        while num:
            count += num & 1
            num >>= 1
        return count

# Single Number Problem
def single_number(nums: List[int]) -> int:
    result = 0
    for num in nums:
        result ^= num
    return result
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Basic Bit Operations | Get, set, clear bits | O(1) | O(1) |
| Counting Bits | Count set bits in number | O(1) to O(log n) | O(1) |
| Bit Manipulation | XOR, AND, OR operations | O(1) | O(1) |
| Bit Masking | Using masks for operations | O(1) | O(1) |

## Bit Manipulation Sub-Patterns

### 1. Basic Bit Concepts

#### Easy Problems
1. **Get, Set, Clear ith Bit**
   - Pattern: Basic bit operations
   - Example Solution:
   ```cpp
   class Solution {
   public:
       bool getBit(int n, int i) {
           return (n & (1 << i)) != 0;
       }
       
       int setBit(int n, int i) {
           return n | (1 << i);
       }
       
       int clearBit(int n, int i) {
           return n & ~(1 << i);
       }
   };
   ```
   - Time: O(1), Space: O(1)

2. **Number of 1 Bits** ([LeetCode 191](https://leetcode.com/problems/number-of-1-bits/))
   - Count set bits in an integer
   - Pattern: Bit counting
   - Key Points: Use bit manipulation to count 1s
   - Time: O(1), Space: O(1)

3. **Counting Bits** ([LeetCode 338](https://leetcode.com/problems/counting-bits/))
   - Count bits for range of numbers
   - Pattern: Dynamic Programming with bits
   - Key Points: Use previous results
   - Time: O(n), Space: O(n)

### 2. Bitwise XOR Pattern

#### Medium Problems
1. **Single Number** ([LeetCode 136](https://leetcode.com/problems/single-number/))
   - Find unique element
   - Pattern: XOR all elements
   - Example Solution:
   ```cpp
   int singleNumber(vector<int>& nums) {
       int result = 0;
       for (int num : nums) {
           result ^= num;
       }
       return result;
   }
   ```
   - Time: O(n), Space: O(1)

2. **Single Number III** ([LeetCode 260](https://leetcode.com/problems/single-number-iii/))
   - Find two unique elements
   - Pattern: XOR with bit separation
   - Key Points: Use rightmost set bit
   - Time: O(n), Space: O(1)

#### Hard Problems
1. **Find XOR Sum of All Pairs Bitwise AND** ([LeetCode 1835](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/))
   - Complex XOR operations
   - Pattern: Bit-by-bit processing
   - Key Points: Use distributive property
   - Time: O(n), Space: O(1)

### 3. Bitwise AND Pattern

#### Medium Problems
1. **Bitwise AND of Numbers Range** ([LeetCode 201](https://leetcode.com/problems/bitwise-and-of-numbers-range/))
   - Find AND of range
   - Pattern: Common prefix
   - Example Solution:
   ```cpp
   int rangeBitwiseAnd(int left, int right) {
       int shift = 0;
       while (left < right) {
           left >>= 1;
           right >>= 1;
           shift++;
       }
       return left << shift;
   }
   ```
   - Time: O(log n), Space: O(1)

2. **Longest Subarray with Maximum Bitwise AND**
   - Find optimal subarray
   - Pattern: Sliding window with AND
   - Key Points: Monotonic property of AND
   - Time: O(n), Space: O(1)

#### Hard Problems
1. **Triples with Bitwise AND Equal to Zero** ([LeetCode 982](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/))
   - Complex AND operations
   - Pattern: Preprocessing with AND
   - Key Points: Use lookup table
   - Time: O(n²), Space: O(n)

### 4. Bitwise OR Pattern

#### Medium Problems
1. **Maximum OR** ([LeetCode 2680](https://leetcode.com/problems/maximum-or/))
   - Optimize OR operations
   - Pattern: Prefix and suffix OR
   - Key Points: Precompute OR values
   - Time: O(n), Space: O(n)

#### Hard Problems
1. **Find Subarray with Bitwise OR Closest to K**
   - Optimize subarray selection
   - Pattern: Sliding window with OR
   - Key Points: Use bit properties of OR
   - Time: O(n), Space: O(1)

## Tips for Bit Manipulation Problems
1. Use bitwise operators efficiently
2. Consider edge cases with negative numbers
3. Understand basic bit properties
4. Use masks for specific bit operations
5. Consider using lookup tables for optimization
6. Be careful with sign extension
7. Test with boundary cases
8. Consider platform-specific behavior

Happy Coding! 🚀