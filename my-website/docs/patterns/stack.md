---
id: stack-pattern
title: Stack Pattern
sidebar_label: Stack
sidebar_position: 5
---

# Stack Pattern

## Overview

Stack is a fundamental data structure that follows the Last-In-First-Out (LIFO) principle. It supports two primary operations: push (add an element) and pop (remove the most recently added element). This pattern is crucial for solving problems involving nested structures, backtracking, and maintaining ordered operations.

### When to Use This Pattern
- **Parentheses Matching**: Validating and processing nested parentheses
- **Expression Evaluation**: Calculating arithmetic expressions
- **Function Call Management**: Tracking function calls and recursion
- **Undo Operations**: Implementing undo/redo functionality
- **Browser History**: Managing navigation history
- **Syntax Parsing**: Validating and processing syntax
- **Monotonic Relationships**: Finding next greater/smaller elements
- **Backtracking**: Maintaining state during backtracking
- **String Processing**: Handling nested string operations
- **Graph Traversal**: Implementing depth-first search

### Key Characteristics
- **LIFO Order**: Last element added is the first to be removed
- **Constant Time Operations**: O(1) for push and pop operations
- **Memory Efficient**: Space complexity proportional to elements
- **Order Preservation**: Maintains insertion order of elements
- **Multiple Variations**: Can be adapted for various problem types

### Real-World Applications
- **Browser Navigation**: Back/forward functionality
- **Text Editors**: Undo/redo operations
- **Compiler Design**: Syntax parsing and validation
- **Memory Management**: Call stack implementation
- **Expression Evaluation**: Calculator applications

### Why Stack Matters
- **Simplicity**: Simple yet powerful data structure
- **Efficiency**: O(1) time complexity for basic operations
- **Versatility**: Solves various algorithmic problems
- **State Management**: Excellent for tracking states and history

Let's explore how stack works in different programming languages and common problem patterns.

## Implementation Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
// Basic Stack Implementation
class Stack {
private:
    vector<int> data;

public:
    void push(int x) {
        data.push_back(x);
    }

    int pop() {
        if (empty()) throw runtime_error("Stack is empty");
        int top = data.back();
        data.pop_back();
        return top;
    }

    int top() {
        if (empty()) throw runtime_error("Stack is empty");
        return data.back();
    }

    bool empty() {
        return data.empty();
    }
};

// Parentheses Validator
bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            if (c == ')' && st.top() != '(') return false;
            if (c == '}' && st.top() != '{') return false;
            if (c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
// Basic Stack Implementation
class Stack {
    private List<Integer> data;

    public Stack() {
        data = new ArrayList<>();
    }

    public void push(int x) {
        data.add(x);
    }

    public int pop() {
        if (empty()) throw new RuntimeException("Stack is empty");
        return data.remove(data.size() - 1);
    }

    public int top() {
        if (empty()) throw new RuntimeException("Stack is empty");
        return data.get(data.size() - 1);
    }

    public boolean empty() {
        return data.isEmpty();
    }
}

// Parentheses Validator
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.empty()) return false;
            if (c == ')' && stack.peek() != '(') return false;
            if (c == '}' && stack.peek() != '{') return false;
            if (c == ']' && stack.peek() != '[') return false;
            stack.pop();
        }
    }
    return stack.empty();
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Basic Stack Implementation
class Stack:
    def __init__(self):
        self.data = []

    def push(self, x: int) -> None:
        self.data.append(x)

    def pop(self) -> int:
        if self.empty():
            raise Exception("Stack is empty")
        return self.data.pop()

    def top(self) -> int:
        if self.empty():
            raise Exception("Stack is empty")
        return self.data[-1]

    def empty(self) -> bool:
        return len(self.data) == 0

# Parentheses Validator
def is_valid(s: str) -> bool:
    stack = []
    for c in s:
        if c in '({[':
            stack.append(c)
        else:
            if not stack:
                return False
            if c == ')' and stack[-1] != '(':
                return False
            if c == '}' and stack[-1] != '{':
                return False
            if c == ']' and stack[-1] != '[':
                return False
            stack.pop()
    return len(stack) == 0
```

</TabItem>
</Tabs>

## Common Patterns and Their Complexities

| Pattern | Description | Time Complexity | Space Complexity |
|---------|-------------|-----------------|------------------|
| Basic Stack Operations | Push, pop, top operations | O(1) | O(n) |
| Parentheses Matching | Validate nested parentheses | O(n) | O(n) |
| Expression Evaluation | Evaluate arithmetic expressions | O(n) | O(n) |
| Monotonic Stack | Next greater/smaller element | O(n) | O(n) |

## Stack Sub-Patterns

### 1. Parentheses Problems

#### Easy Problems
1. **Valid Parentheses** ([LeetCode 20](https://leetcode.com/problems/valid-parentheses/))
   - Pattern: Basic Stack Matching
   - Example Solution:
   ```cpp
   bool isValid(string s) {
       stack<char> st;
       for (char c : s) {
           if (c == '(' || c == '{' || c == '[') {
               st.push(c);
           } else {
               if (st.empty()) return false;
               if (c == ')' && st.top() != '(') return false;
               if (c == '}' && st.top() != '{') return false;
               if (c == ']' && st.top() != '[') return false;
               st.pop();
           }
       }
       return st.empty();
   }
   ```
   - Time: O(n), Space: O(n)

2. **Maximum Nesting Depth of the Parentheses** ([LeetCode 1614](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/))
   - Pattern: Depth Counter
3. **Remove Outermost Parentheses** ([LeetCode 1021](https://leetcode.com/problems/remove-outermost-parentheses/))
   - Pattern: Level Counter

#### Medium Problems
1. **Minimum Add to Make Parentheses Valid** ([LeetCode 921](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/))
   - Pattern: Balance Counter
2. **Minimum Remove to Make Valid Parentheses** ([LeetCode 1249](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/))
   - Pattern: Two-pass Validation
3. **Maximum Nesting Depth of Two Valid Parentheses Strings** ([LeetCode 1111](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/))
   - Pattern: Split Strategy
4. **Check if a Parentheses String Can Be Valid** ([LeetCode 2116](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/))
   - Pattern: Forward-Backward Check
5. **Reverse Substrings Between Each Pair of Parentheses** ([LeetCode 1190](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/))
   - Pattern: Stack of Strings
6. **Score of Parentheses** ([LeetCode 856](https://leetcode.com/problems/score-of-parentheses/))
   - Pattern: Depth Multiplier
7. **Minimum Insertions to Balance a Parentheses String** ([LeetCode 1541](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/))
   - Pattern: State Machine

#### Hard Problems
1. **Longest Valid Parentheses** ([LeetCode 32](https://leetcode.com/problems/longest-valid-parentheses/))
   - Pattern: Dynamic Programming with Stack
2. **Redundant Parenthesis**
   - Pattern: Expression Tree

### 2. Design Problems

#### Medium Problems
1. **Min Stack** ([LeetCode 155](https://leetcode.com/problems/min-stack/))
   - Pattern: Auxiliary Stack
   - Example Solution:
   ```cpp
   class MinStack {
   private:
       stack<int> s1;    // main stack
       stack<int> s2;    // min stack
   public:
       void push(int val) {
           s1.push(val);
           if (s2.empty() || val <= s2.top()) s2.push(val);
       }

       void pop() {
           if (s1.top() == s2.top()) s2.pop();
           s1.pop();
       }

       int top() { return s1.top(); }
       int getMin() { return s2.top(); }
   };
   ```
   - Time: O(1) for all operations
   - Space: O(n)

2. **Design a Stack With Increment Operation** ([LeetCode 1381](https://leetcode.com/problems/design-a-stack-with-increment-operation/))
   - Pattern: Lazy Increment

#### Hard Problems
1. **Maximum Frequency Stack** ([LeetCode 895](https://leetcode.com/problems/maximum-frequency-stack/))
   - Pattern: Frequency Map with Stack
2. **Dinner Plate Stacks** ([LeetCode 1172](https://leetcode.com/problems/dinner-plate-stacks/))
   - Pattern: Multiple Stack Management

### 3. Monotonic Stack Problems

#### Core Patterns
1. **Next Greater Element to the Right (NGER)**
   - Pattern: Decreasing Stack
   - Example:
     - Input: N = 4, arr[] = [1 3 2 4]
     - Output: [3 4 4 -1]
   - Approach:
     ```cpp
     vector<int> NGER(vector<int> arr) {
         stack<int> st;
         vector<int> v;
         int n = arr.size();

         for(int i = n - 1; i >= 0; i--) {
             while(st.size() > 0 && st.top() <= arr[i]) {
                 st.pop();
             }

             if(st.size() == 0) {
                 v.push_back(-1);
             } else {
                 v.push_back(st.top());
             }

             st.push(arr[i]);
         }

         reverse(v.begin(), v.end());
         return v;
     }
     ```

2. **Next Greater Element to the Left (NGEL)**
   - Pattern: Decreasing Stack
   - Approach: Similar to NGER but iterate from start and no reverse needed
   - Implementation:
     ```cpp
     vector<int> NGEL(vector<int>& arr) {
         stack<int> st;
         vector<int> v;
         int n = arr.size();

         for(int i = 0; i < n; i++) {
             while(st.size() > 0 && st.top() <= arr[i]) {
                 st.pop();
             }

             if(st.size() == 0) {
                 v.push_back(-1);
             } else {
                 v.push_back(st.top());
             }

             st.push(arr[i]);
         }

         return v;
     }
     ```

3. **Next Smaller Element to the Right (NSER)**
   - Pattern: Increasing Stack
   - Approach: Similar to NGER with reversed comparison
   - Implementation:
     ```cpp
     vector<int> NSER(vector<int> arr) {
         stack<int> st;
         vector<int> v;
         int n = arr.size();

         for(int i = n - 1; i >= 0; i--) {
             while(st.size() > 0 && st.top() >= arr[i]) {
                 st.pop();
             }

             if(st.size() == 0) {
                 v.push_back(-1);
             } else {
                 v.push_back(st.top());
             }

             st.push(arr[i]);
         }

         reverse(v.begin(), v.end());
         return v;
     }
     ```

4. **Next Smaller Element to the Left (NSEL)**
   - Pattern: Increasing Stack
   - Approach: Similar to NSER but iterate from start
   - Implementation:
     ```cpp
     vector<int> NSEL(vector<int>& arr) {
         stack<int> st;
         vector<int> v;
         int n = arr.size();

         for(int i = 0; i < n; i++) {
             while(st.size() > 0 && st.top() >= arr[i]) {
                 st.pop();
             }

             if(st.size() == 0) {
                 v.push_back(-1);
             } else {
                 v.push_back(st.top());
             }

             st.push(arr[i]);
         }

         return v;
     }
     ```

#### Pattern Summary
| Problem | Stack Type | Operator | Traversal |
|---------|------------|-----------|------------|
| NGER | Decreasing | &lt;= | Right to Left |
| NGEL | Decreasing | &lt;= | Left to Right |
| NSER | Increasing | &gt;= | Right to Left |
| NSEL | Increasing | &gt;= | Left to Right |

#### Easy Problems
1. **Final Prices With a Special Discount in a Shop** ([LeetCode 1475](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/))
   - Pattern: Next Smaller Element
2. **Next Greater Element I** ([LeetCode 496](https://leetcode.com/problems/next-greater-element-i/))
   - Pattern: Monotonic Decreasing

#### Medium Problems
1. **Daily Temperatures** ([LeetCode 739](https://leetcode.com/problems/daily-temperatures/))
   - Pattern: Next Greater with Index
   - Example Solution:
   ```cpp
   vector<int> dailyTemperatures(vector<int>& temperatures) {
       int n = temperatures.size();
       vector<int> result(n);
       stack<int> st;  // store indices

       for (int i = 0; i < n; i++) {
           while (!st.empty() && temperatures[i] > temperatures[st.top()]) {
               int prevDay = st.top();
               st.pop();
               result[prevDay] = i - prevDay;
           }
           st.push(i);
       }
       return result;
   }
   ```
   - Time: O(n), Space: O(n)

2. **Car Fleet** ([LeetCode 853](https://leetcode.com/problems/car-fleet/))
   - Pattern: Monotonic Speed Stack
3. **132 Pattern** ([LeetCode 456](https://leetcode.com/problems/132-pattern/))
   - Pattern: Monotonic with Third Element
4. **Remove Duplicate Letters** ([LeetCode 316](https://leetcode.com/problems/remove-duplicate-letters/))
   - Pattern: Lexicographical Order
5. **Online Stock Span** ([LeetCode 901](https://leetcode.com/problems/online-stock-span/))
   - Pattern: Price Span
6. **Sum of Subarray Minimums** ([LeetCode 907](https://leetcode.com/problems/sum-of-subarray-minimums/))
   - Pattern: Left-Right Boundary

#### Hard Problems
1. **Largest Rectangle in Histogram** ([LeetCode 84](https://leetcode.com/problems/largest-rectangle-in-histogram/))
   - Pattern: Height Boundaries
2. **Trapping Rain Water** ([LeetCode 42](https://leetcode.com/problems/trapping-rain-water/))
   - Pattern: Two Pointer with Stack
3. **Maximum Score of a Good Subarray** ([LeetCode 1793](https://leetcode.com/problems/maximum-score-of-a-good-subarray/))
   - Pattern: Bidirectional Stack
4. **Sum of Total Strength of Wizards** ([LeetCode 2281](https://leetcode.com/problems/sum-of-total-strength-of-wizards/))
   - Pattern: Contribution Technique

### 4. Advanced Stack Problems

#### Medium Problems
1. **Merge Intervals** ([LeetCode 56](https://leetcode.com/problems/merge-intervals/))
   - Pattern: Interval Merging
2. **Asteroid Collision** ([LeetCode 735](https://leetcode.com/problems/asteroid-collision/))
   - Pattern: Collision Simulation
3. **Evaluate Reverse Polish Notation** ([LeetCode 150](https://leetcode.com/problems/evaluate-reverse-polish-notation/))
   - Pattern: Postfix Evaluation
   - Problem Description: Given an array of tokens representing an arithmetic expression in Reverse Polish Notation (postfix notation), evaluate the expression. Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
   - Example Solution:
   <Tabs>
   <TabItem value="cpp" label="C++">

   ```cpp
   int evalRPN(vector<string>& tokens) {
       stack<int> st;
       for (const string& token : tokens) {
           if (token == "+" || token == "-" || token == "*" || token == "/") {
               int b = st.top(); st.pop();
               int a = st.top(); st.pop();
               if (token == "+") st.push(a + b);
               else if (token == "-") st.push(a - b);
               else if (token == "*") st.push(a * b);
               else st.push(a / b);
           } else {
               st.push(stoi(token));
           }
       }
       return st.top();
   }
   ```

   </TabItem>
   <TabItem value="java" label="Java">

   ```java
   public int evalRPN(String[] tokens) {
       Stack<Integer> stack = new Stack<>();
       for (String token : tokens) {
           if (token.equals("+") || token.equals("-") ||
               token.equals("*") || token.equals("/")) {
               int b = stack.pop();
               int a = stack.pop();
               switch (token) {
                   case "+": stack.push(a + b); break;
                   case "-": stack.push(a - b); break;
                   case "*": stack.push(a * b); break;
                   case "/": stack.push(a / b); break;
               }
           } else {
               stack.push(Integer.parseInt(token));
           }
       }
       return stack.peek();
   }
   ```

   </TabItem>
   <TabItem value="python" label="Python">

   ```python
   def evalRPN(self, tokens: List[str]) -> int:
       stack = []
       for token in tokens:
           if token in {"+", "-", "*", "/"}:
               b = stack.pop()
               a = stack.pop()
               if token == "+": stack.append(a + b)
               elif token == "-": stack.append(a - b)
               elif token == "*": stack.append(a * b)
               else: stack.append(int(a / b))  # handle division
           else:
               stack.append(int(token))
       return stack[-1]
   ```

   </TabItem>
   </Tabs>

   - Approach:
     1. Use a stack to store operands
     2. When encountering a number, push it onto the stack
     3. When encountering an operator, pop two operands, apply the operator, and push result back
     4. The final answer will be the only element left in the stack
   - Time Complexity: O(n) where n is the number of tokens
   - Space Complexity: O(n) for the stack storage
4. **Simplify Path** ([LeetCode 71](https://leetcode.com/problems/simplify-path/))
   - Pattern: Path Processing
5. **Basic Calculator II** ([LeetCode 227](https://leetcode.com/problems/basic-calculator-ii/))
   - Pattern: Operator Precedence

#### Hard Problems
1. **Basic Calculator** ([LeetCode 224](https://leetcode.com/problems/basic-calculator/))
   - Pattern: Recursive Expression
2. **Basic Calculator IV** ([LeetCode 770](https://leetcode.com/problems/basic-calculator-iv/))
   - Pattern: Symbolic Expression
3. **Number of Atoms** ([LeetCode 726](https://leetcode.com/problems/number-of-atoms/))
   - Pattern: Chemical Formula
4. **Robot Collisions**
   - Pattern: Collision Resolution

## Tips for Stack Problems
1. Consider using stack for nested structures
2. For parentheses problems, match opening with closing
3. Use monotonic stack for next greater/smaller problems
4. Track additional information (indices, frequencies) when needed
5. Consider two stacks for min/max operations
6. Handle edge cases (empty stack, invalid input)

Happy Coding! 🚀

