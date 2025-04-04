---
id: linked-list-pattern
title: Linked List Pattern
sidebar_label: Linked List
sidebar_position: 9
---

# Linked List Pattern

## Overview

Linked List operations are fundamental algorithmic patterns that involve manipulating sequences of nodes where each node points to the next node in the sequence. This pattern is essential for solving problems related to sequential data storage, memory management, and various computational problems that require dynamic data manipulation.

### When to Use This Pattern
- **Dynamic Data Storage**: Flexible size allocation
- **Memory Management**: Non-contiguous memory utilization
- **Queue/Stack Implementation**: FIFO/LIFO data structures
- **Polynomial Manipulation**: Representing terms
- **Hash Table Chaining**: Collision resolution
- **Undo Operations**: History tracking
- **Music Playlists**: Song sequencing
- **Browser History**: Navigation tracking
- **Task Scheduling**: Process management
- **Cache Implementation**: LRU cache design

### Key Characteristics
- **Node-based Structure**: Data with next pointers
- **Dynamic Size**: O(1) insertion/deletion
- **Sequential Access**: O(n) element access
- **Memory Efficiency**: Space allocated as needed
- **Pointer Manipulation**: Node linking/unlinking

### Real-World Applications
- **Memory Allocation**: Memory management systems
- **File Systems**: Directory structures
- **Music Players**: Playlist management
- **Web Browsers**: History tracking
- **Task Schedulers**: Process queues

### Why Linked List Pattern Matters
- **Dynamic Memory**: Efficient memory utilization
- **Flexible Operations**: Easy insertions/deletions
- **Sequential Problems**: Natural representation for sequences
- **Algorithm Design**: Foundation for advanced data structures

Let's explore how linked list operations work in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Basic Linked List Operations
class ListNode {
public:
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class LinkedListOperations {
public:
    // Reverse a linked list
    ListNode* reverse(ListNode* head) {
        ListNode *prev = nullptr, *curr = head;
        while (curr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    
    // Find middle node
    ListNode* findMiddle(ListNode* head) {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
    
    // Detect cycle
    bool hasCycle(ListNode* head) {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) return true;
        }
        return false;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Basic Linked List Operations
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

class LinkedListOperations {
    // Reverse a linked list
    public ListNode reverse(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    
    // Find middle node
    public ListNode findMiddle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    // Detect cycle
    public boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Basic Linked List Operations
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedListOperations:
    # Reverse a linked list
    def reverse(self, head: ListNode) -> ListNode:
        prev, curr = None, head
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        return prev
    
    # Find middle node
    def findMiddle(self, head: ListNode) -> ListNode:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
    
    # Detect cycle
    def hasCycle(self, head: ListNode) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Traversal | Sequential node visiting | O(n) | O(1) |
| Reversal | In-place direction change | O(n) | O(1) |
| Fast/Slow Pointers | Two-pointer technique | O(n) | O(1) |
| Cycle Detection | Floyd's algorithm | O(n) | O(1) |

## Linked List Sub-Patterns

### 1. Basic Linked List Operations

#### Easy Problems
1. **Intersection of Two Linked Lists** ([LeetCode 160](https://leetcode.com/problems/intersection-of-two-linked-lists/))
   - Pattern: Two-pointer technique
   - Key Points: Finding intersection point
   - Time: O(n), Space: O(1)

2. **Design Linked List** ([LeetCode 707](https://leetcode.com/problems/design-linked-list/))
   - Pattern: Implementation
   - Key Points: Basic operations
   - Time: O(1) or O(n), Space: O(n)

#### Medium Problems
1. **Remove Nth Node From End** ([LeetCode 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/))
   - Pattern: Two-pointer technique
   - Problem: Remove the nth node from the end of the list
   - Approach:
     1. Use two pointers n nodes apart
     2. Move both until end
     3. Remove target node
   - Time: O(n), Space: O(1)
   - Example Solution:
   ```python
   def removeNthFromEnd(head, n):
       dummy = ListNode(0)
       dummy.next = head
       first = dummy
       second = dummy
       
       # Advance first pointer by n+1 steps
       for i in range(n + 1):
           first = first.next
       
       # Move both pointers until first reaches end
       while first:
           first = first.next
           second = second.next
       
       # Remove nth node
       second.next = second.next.next
       return dummy.next
   ```

### 2. In-place Reversal Pattern

#### Easy Problems
1. **Reverse Linked List** ([LeetCode 206](https://leetcode.com/problems/reverse-linked-list/))
   - Pattern: In-place reversal
   - Key Points: Pointer manipulation
   - Time: O(n), Space: O(1)

2. **Palindrome Linked List** ([LeetCode 234](https://leetcode.com/problems/palindrome-linked-list/))
   - Pattern: Reversal + Two-pointer
   - Key Points: Middle finding + reversal
   - Time: O(n), Space: O(1)

#### Medium Problems
1. **Reverse Linked List II** ([LeetCode 92](https://leetcode.com/problems/reverse-linked-list-ii/))
   - Pattern: In-place reversal
   - Problem: Reverse a linked list from position m to n
   - Approach:
     1. Locate start position
     2. Reverse specified portion
     3. Connect with rest of list
   - Time: O(n), Space: O(1)
   - Example Solution:
   ```python
   def reverseBetween(head, m, n):
       if not head or m == n:
           return head
           
       dummy = ListNode(0)
       dummy.next = head
       prev = dummy
       
       # Move to position m
       for i in range(m - 1):
           prev = prev.next
       
       # Reverse from position m to n
       curr = prev.next
       for i in range(n - m):
           temp = curr.next
           curr.next = temp.next
           temp.next = prev.next
           prev.next = temp
       
       return dummy.next
   ```

### 3. Fast/Slow Pointer Pattern

#### Easy Problems
1. **Middle of the Linked List** ([LeetCode 876](https://leetcode.com/problems/middle-of-the-linked-list/))
   - Pattern: Fast/slow pointers
   - Key Points: Two-speed traversal
   - Time: O(n), Space: O(1)

2. **Happy Number** ([LeetCode 202](https://leetcode.com/problems/happy-number/))
   - Pattern: Cycle detection
   - Key Points: Floyd's algorithm
   - Time: O(log n), Space: O(1)

#### Medium Problems
1. **Linked List Cycle II** ([LeetCode 142](https://leetcode.com/problems/linked-list-cycle-ii/))
   - Pattern: Fast/slow pointers
   - Problem: Find the node where cycle begins
   - Approach:
     1. Detect cycle using Floyd's algorithm
     2. Reset one pointer to head
     3. Move both pointers at same speed
   - Time: O(n), Space: O(1)
   - Example Solution:
   ```python
   def detectCycle(head):
       if not head or not head.next:
           return None
       
       # Find meeting point
       slow = fast = head
       while fast and fast.next:
           slow = slow.next
           fast = fast.next.next
           if slow == fast:
               break
       else:
           return None
       
       # Find cycle start
       slow = head
       while slow != fast:
           slow = slow.next
           fast = fast.next
       
       return slow
   ```
   
### 4. Design Pattern Problems

#### Easy Problems
1. **Design HashSet** ([LeetCode 705](https://leetcode.com/problems/design-hashset/))
   - Pattern: Array of Linked Lists
   - Key Points: Collision handling
   - Implementation: Chaining with linked lists
   - Time: O(1) average, Space: O(n)

2. **Design HashMap** ([LeetCode 706](https://leetcode.com/problems/design-hashmap/))
   - Pattern: Array of Linked Lists
   - Key Points: Key-value storage with collision handling
   - Implementation: Separate chaining
   - Time: O(1) average, Space: O(n)

#### Medium Problems
1. **Design Browser History** ([LeetCode 1472](https://leetcode.com/problems/design-browser-history/))
   - Pattern: Doubly Linked List
   - Key Points: Navigation tracking
   - Implementation: Bidirectional traversal
   - Time: O(1) for visit, O(n) for navigate
   - Example Solution:
   ```python
   class BrowserHistory:
       def __init__(self, homepage: str):
           self.current = Node(homepage)
           
       def visit(self, url: str) -> None:
           self.current.next = Node(url)
           self.current.next.prev = self.current
           self.current = self.current.next
           
       def back(self, steps: int) -> str:
           while steps > 0 and self.current.prev:
               self.current = self.current.prev
               steps -= 1
           return self.current.url
           
       def forward(self, steps: int) -> str:
           while steps > 0 and self.current.next:
               self.current = self.current.next
               steps -= 1
           return self.current.url
   ```

2. **LRU Cache** ([LeetCode 146](https://leetcode.com/problems/lru-cache/))
   - Pattern: Doubly Linked List + HashMap
   - Key Points: O(1) access and update
   - Implementation: Hash table for lookup, DLL for order
   - Time: O(1) for all operations

#### Hard Problems
1. **Design Text Editor** ([LeetCode 2296](https://leetcode.com/problems/design-a-text-editor/))
   - Pattern: Doubly Linked List
   - Key Points: Cursor movement and text manipulation
   - Implementation: Character-wise linked list
   - Time: O(k) for operations with k characters

2. **All O'one Data Structure** ([LeetCode 432](https://leetcode.com/problems/all-oone-data-structure/))
   - Pattern: Doubly Linked List + HashMap
   - Key Points: O(1) increment/decrement with ordering
   - Implementation: Bucket-based linked list
   - Time: O(1) for all operations

3. **LFU Cache** ([LeetCode 460](https://leetcode.com/problems/lfu-cache/))
   - Pattern: Multiple Doubly Linked Lists + HashMap
   - Key Points: Frequency tracking with O(1) operations
   - Implementation: Frequency buckets with LRU per bucket
   - Time: O(1) for all operations

## Tips for Linked List Problems
1. Use dummy nodes for edge cases
2. Consider two-pointer techniques
3. Draw pointer changes before coding
4. Watch for null pointers
5. Test with small examples
6. Consider both empty and single-node lists
7. Maintain proper links during modifications
8. Use fast/slow pointers for cycle detection


Happy Coding! 🚀