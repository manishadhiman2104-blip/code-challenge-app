

// Single-file React component that contains all 70 Java solutions as strings.
// Paste this file into your React project (e.g., src/components/QuestionSolutions.jsx)
// It shows categories, questions and displays the Java solution when a question is clicked.

 const questionsData = [
  {
    category: "Arrays",
    questions: [
      { title: "Two Sum Problem", level: "Easy", input: "[2,7,11,15], target=9", output: "[0,1]", hint: "Use a hashmap to store numbers and their indices, then check if target-num exists.", description: "Find indices of two numbers in the array that add up to the target value." },
      { title: "Maximum Subarray Sum (Kadane’s Algorithm)", level: "Medium", input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6", hint: "Keep track of current sum and max sum while iterating; reset current sum if it becomes negative.", description: "Calculate the largest sum of contiguous subarray using Kadane's algorithm." },
      { title: "Sort an Array of 0s, 1s, and 2s", level: "Easy", input: "[0,2,1,2,0]", output: "[0,0,1,2,2]", hint: "Use the Dutch National Flag algorithm with three pointers.", description: "Sort an array consisting only of 0s, 1s, and 2s in linear time." },
      { title: "Find Duplicate Number in Array", level: "Medium", input: "[1,3,4,2,2]", output: "2", hint: "Use a set or cycle detection (Floyd’s Tortoise and Hare) to find duplicates.", description: "Detect the repeated number in an array containing n+1 integers."},
      { title: "Merge Intervals", level: "Medium", input: "[[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", hint: "Sort intervals by start time, then merge overlapping intervals.", description: "Combine overlapping intervals in a list to produce a set of non-overlapping intervals." },
      { title: "Rearrange Array Alternately", level: "Medium", input: "[1,2,3,4,5,6]", output: "[6,1,5,2,4,3]", hint: "Use two pointers at start and end; pick elements alternately.", description: "Reorder array so that max and min elements alternate."},
      { title: "Best Time to Buy and Sell Stock", level: "Easy", input: "[7,1,5,3,6,4]", output: "5", hint: "Track minimum price so far and update maximum profit.", description: "Find the maximum profit from a single buy-sell transaction." },
      { title: "Find Missing Number", level: "Easy", input: "[3,0,1]", output: "2", hint: "Use sum formula n*(n+1)/2 minus sum of array.", description: "Find the only missing number in an array containing 0 to n." },
      { title: "Rotate Array by K Positions", level: "Medium", input: "[1,2,3,4,5,6,7], k=3", output: "[5,6,7,1,2,3,4]", hint: "Reverse whole array, then reverse first k and last n-k elements.", description: "Rotate array to the right by k steps." },
      { title: "Subarray with Given Sum", level: "Medium", input: "[1,2,3,7,5], sum=12", output: "[2,3,7]", hint: "Use sliding window for positive numbers or hashmap for all integers.", description: "Find a contiguous subarray whose sum equals the target value." }
    ]
  },
  {
    category: "Strings",
    questions: [
      { title: "Reverse Words in a String", level: "Easy", input: "'the sky is blue'", output: "'blue is sky the'", hint: "Split by spaces, reverse array, join back.", description: "Reverse the order of words in a sentence."  },
      { title: "Check for Anagrams", level: "Easy", input: "'listen','silent'", output: "true", hint: "Sort both strings or count character frequencies.", description: "Check if two strings are anagrams of each other." },
      { title: "Longest Palindromic Substring", level: "Medium", input: "'babad'", output: "'bab'", hint: "Expand around centers or use dynamic programming.", description: "Find the longest substring that reads the same forwards and backwards." },
      { title: "Count and Say Problem", level: "Medium", input: "4", output: "'1211'", hint: "Generate sequence iteratively by counting consecutive digits.", description: "Generate the nth term in the count-and-say sequence." },
      { title: "Implement strstr()", level: "Easy", input: "'hello','ll'", output: "2", hint: "Check every position of haystack if substring matches needle.", description: "Find the first occurrence of a substring in a string." },
      { title: "Longest Common Prefix", level: "Easy", input: "['flower','flow','flight']", output: "'fl'", hint: "Compare characters column by column among all strings.", description: "Find the longest common prefix string among a list of strings." },
      { title: "String Compression", level: "Medium", input: "'aabcccccaaa'", output: "'a2b1c5a3'", hint: "Count consecutive characters and append count.", description: "Compress a string by replacing consecutive characters with character + count." },
      { title: "Valid Parentheses for strings", level: "Easy", input: "'()[]{}'", output: "true", hint: "Use a stack to match opening and closing brackets.", description: "Check if parentheses/brackets are correctly balanced." },
      { title: "Minimum Window Substring", level: "Hard", input: "'ADOBECODEBANC','ABC'", output: "'BANC'", hint: "Use sliding window with hashmap to track counts.", description: "Find the smallest substring containing all characters of another string." },
      { title: "Group Anagrams for strings", level: "Medium", input: "['eat','tea','tan','ate','nat','bat']", output: "[['eat','tea','ate'],['tan','nat'],['bat']]", hint: "Use sorted string as key in a hashmap to group words.", description: "Group words that are anagrams of each other." }
    ]
  },
  {
    category: "Linked list",
            
            
    questions: [
      { title: "Reverse a Linked List", level: "Easy", input: "1->2->3->4->NULL", output: "4->3->2->1->NULL", hint: "Iteratively reverse pointers or use recursion.", description: "Reverse the nodes of a singly linked list." },
      { title: "Detect Loop in Linked List", level: "Medium", input: "1->2->3->4->2(loop)", output: "true", hint: "Use Floyd's cycle detection algorithm.", description: "Check if a linked list has a cycle." },
      { title: "Merge Two Sorted Linked Lists", level: "Easy", input: "1->2->4, 1->3->4", output: "1->1->2->3->4->4", hint: "Merge lists by comparing nodes iteratively.", description: "Merge two sorted linked lists into a single sorted list."},
      { title: "Remove Nth Node from End", level: "Medium", input: "1->2->3->4->5, n=2", output: "1->2->3->5", hint: "Use two pointers with gap of n nodes.", description: "Remove the nth node from the end of the linked list."},
      { title: "Intersection Point of Two Linked Lists", level: "Medium", input: "A:1->3->5->7->9, B:2->4->7->9", output: "7", hint: "Calculate lengths and align lists to find intersection.", description: "Find the node where two linked lists intersect." },
      { title: "Add Two Numbers Represented by Linked Lists", level: "Medium", input: "2->4->3 + 5->6->4", output: "7->0->8", hint: "Add digits with carry like normal addition.", description: "Add two numbers represented as linked lists." },
      { title: "Palindrome Linked List", level: "Easy", input: "1->2->2->1", output: "true", hint: "Find middle, reverse second half, compare halves.", description: "Check if a linked list is a palindrome." },
      { title: "Flatten a Linked List", level: "Hard", input: "1->2->3, each node has child", output: "1->2->3->...flattened", hint: "Recursively merge child lists into main list.", description: "Flatten a multilevel linked list into a single list." },
      { title: "Sort a Linked List", level: "Medium", input: "4->2->1->3", output: "1->2->3->4", hint: "Use merge sort for linked lists.", description: "Sort a linked list using merge sort." },
      { title: "Clone a Linked List with Random Pointers", level: "Hard", input: "1->2->3 with random", output: "1'->2'->3' cloned", hint: "Use hashmap or interweaving nodes method.", description: "Clone a linked list with next and random pointers." }
    ]
  },
  {
    category: "Stack & Queue",
    questions: [
      { title: "Implement Stack using Queues", level: "Easy", input: "push(1), push(2), pop()", output: "2", hint: "Use two queues and push elements accordingly.", description: "Simulate a stack using two queues." },
      { title: "Implement Queue using Stacks", level: "Easy", input: "enqueue(1), enqueue(2), dequeue()", output: "1", hint: "Use two stacks to reverse order when dequeuing.", description: "Simulate a queue using two stacks." },
      { title: "Next Greater Element", level: "Medium", input: "[4,5,2,25]", output: "[5,25,25,-1]", hint: "Use a stack to keep track of next greater elements.", description: "Find the next greater element for each array element." },
      { title: "Valid Parentheses", level: "Easy", input: "'()[]{}'", output: "true", hint: "Use a stack to match opening and closing brackets.", description: "Check if parentheses/brackets are correctly balanced." },
      { title: "Min Stack", level: "Medium", input: "push(2), push(0), push(3), pop()", output: "min=0", hint: "Maintain a stack of minimum values along with normal stack.", description: "Design a stack that supports retrieving minimum element in O(1)." },
      { title: "Largest Rectangle in Histogram", level: "Hard", input: "[2,1,5,6,2,3]", output: "10", hint: "Use stack to maintain bars and calculate area.", description: "Find the area of the largest rectangle in a histogram." },
      { title: "Stock Span Problem", level: "Medium", input: "[100,80,60,70,60,75,85]", output: "[1,1,1,2,1,4,6]", hint: "Use stack to track previous higher stock prices.", description: "Calculate stock span values for each day." },
      { title: "Implement LRU Cache", level: "Hard", input: "capacity=2, put(1,1), put(2,2), get(1)", output: "1", hint: "Use hashmap + doubly linked list for O(1) operations.", description: "Implement a Least Recently Used (LRU) cache with O(1) operations." },
      { title: "Circular Queue Implementation", level: "Medium", input: "enqueue(10), enqueue(20), dequeue()", output: "10", hint: "Use modulo operator to wrap around indices.", description: "Implement a circular queue using array." },
      { title: "Expression Evaluation (Postfix/Infix)", level: "Medium", input: "'2 3 + 4 *'", output: "20", hint: "Use a stack to evaluate postfix expressions.", description: "Evaluate a mathematical expression in postfix notation." }
    ]
  },
  // Trees
{
  category: "Trees",
  questions: [
    { title: "Inorder, Preorder, Postorder Traversal", level: "Easy", input: "Binary Tree", output: "Inorder:[..], Preorder:[..], Postorder:[..]", hint: "Use recursion or iterative stack approach.", description: "Perform inorder, preorder, and postorder traversal of a binary tree." },
    { title: "Level Order Traversal", level: "Easy", input: "Binary Tree", output: "[1,2,3,4,5]", hint: "Use a queue for BFS traversal.", description: "Traverse a binary tree level by level." },
    { title: "Height of Binary Tree", level: "Medium", input: "Binary Tree", output: "3", hint: "Height = 1 + max(leftHeight, rightHeight).", description: "Compute the height (max depth) of a binary tree." },
    { title: "Diameter of Binary Tree", level: "Medium", input: "Binary Tree", output: "5", hint: "Recursively calculate height and track max path through nodes.", description: "Find the length of the longest path between any two nodes." },
    { title: "Check if Two Trees are Identical", level: "Easy", input: "Tree1, Tree2", output: "true", hint: "Compare nodes recursively.", description: "Determine if two binary trees are structurally identical and have same node values." },
    { title: "Lowest Common Ancestor (LCA)", level: "Medium", input: "Nodes 4 and 5", output: "2", hint: "Recursively find nodes in left/right subtree.", description: "Find the lowest common ancestor of two nodes in a binary tree." },
    { title: "Balanced Binary Tree Check", level: "Medium", input: "Binary Tree", output: "true", hint: "Check height difference <=1 for all nodes.", description: "Check if a binary tree is height-balanced." },
    { title: "Boundary Traversal of Tree", level: "Hard", input: "Binary Tree", output: "[1,2,4,5,6,3]", hint: "Traverse left boundary, leaves, and right boundary in order.", description: "Traverse the boundary nodes of a binary tree in anti-clockwise order." },
    { title: "Vertical Order Traversal", level: "Medium", input: "Binary Tree", output: "[[4],[2],[1,5,6],[3]]", hint: "Use BFS with column tracking.", description: "Print nodes of binary tree in vertical order." },
    { title: "Serialize and Deserialize a Binary Tree", level: "Hard", input: "Binary Tree", output: "'1,2,3,#,#,4,5'", hint: "Use preorder traversal with placeholders for nulls.", description: "Convert a binary tree to string and back to tree structure." }
  ]
},

// Graphs
{
  category: "Graphs",
  questions: [
    { title: "BFS Traversal", level: "Easy", input: "Graph", output: "[0,1,2,3]", hint: "Use a queue to explore nodes level by level.", description: "Perform breadth-first traversal of a graph."  },
    { title: "DFS Traversal", level: "Easy", input: "Graph", output: "[0,1,3,2]", hint: "Use recursion or stack to explore nodes depth-first.", description: "Perform depth-first traversal of a graph." },
    { title: "Detect Cycle in Undirected Graph", level: "Medium", input: "Graph", output: "true", hint: "Use DFS and parent tracking.", description: "Check if an undirected graph contains a cycle." },
    { title: "Detect Cycle in Directed Graph", level: "Medium", input: "Graph", output: "true", hint: "Use DFS with recursion stack to detect cycles.", description: "Check if a directed graph contains a cycle." },
    { title: "Topological Sorting", level: "Medium", input: "DAG", output: "[5,4,2,3,1,0]", hint: "Use DFS post-order or Kahn's algorithm.", description: "Return a topological order of a Directed Acyclic Graph (DAG)."},
    { title: "Shortest Path in Unweighted Graph", level: "Medium", input: "Graph, source=0", output: "[0,1,1,2]", hint: "Use BFS to calculate shortest distances.", description: "Compute shortest distance from source to all vertices in unweighted graph." },
    { title: "Dijkstra’s Algorithm", level: "Medium", input: "Graph, source=0", output: "[0,4,12,19]", hint: "Use priority queue to select the next minimum distance node.", description: "Find shortest path distances from source using weighted graph." },
    { title: "Minimum Spanning Tree (Kruskal/Prim)", level: "Hard", input: "Graph", output: "[[0,1,4],[1,2,8],...]", hint: "Use Kruskal with Union-Find or Prim with priority queue.", description: "Find the minimum spanning tree of a weighted graph." },
    { title: "Number of Islands", level: "Medium", input: "[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]", output: "3", hint: "Use DFS/BFS to traverse each island and mark visited.", description: "Count number of connected groups of 1s in a 2D grid."  },
    { title: "Graph Coloring Problem", level: "Hard", input: "Graph", output: "true", hint: "Use backtracking to assign colors ensuring no adjacent nodes have same color.", description: "Determine if the graph can be colored with given colors without conflicts."  }

  ]
},


// Hashing
{
  category: "Hashing",
  questions: [
    { title: "Two Sum using HashMap", level: "Easy", input: "[2,7,11,15], target=9", output: "[0,1]", hint: "Use hashmap to store seen numbers and check complement.", description: "Find indices of two numbers that add up to target using hash map." },
    { title: "Subarray with Zero Sum", level: "Medium", input: "[4,2,-3,1,6]", output: "[2,-3,1]", hint: "Use prefix sum and hashmap to track sums.", description: "Find a subarray whose sum equals zero."  },
    { title: "Count Distinct Elements in Window", level: "Medium", input: "[1,2,1,3,4,2,3], k=4", output: "[3,4,4,3]", hint: "Use sliding window and hashmap for counts.", description: "Count distinct numbers in every window of size k."  },
    { title: "Longest Consecutive Sequence", level: "Medium", input: "[100,4,200,1,3,2]", output: "4", hint: "Use set to expand sequence from each number.", description: "Find length of longest consecutive sequence in array."  },
    { title: "Check if Array Pairs are Divisible by K", level: "Medium", input: "[9,7,5,3], k=6", output: "true", hint: "Count frequency of remainders and pair them.", description: "Check if array elements can be paired such that sum divisible by K." },
    { title: "Group Anagrams", level: "Medium", input: "['eat','tea','tan','ate','nat','bat']", output: "[['eat','tea','ate'],['tan','nat'],['bat']]", hint: "Use sorted string as key in hashmap.", description: "Group words that are anagrams of each other using hashing." },
    { title: "Find All Duplicates in Array", level: "Easy", input: "[4,3,2,7,8,2,3,1]", output: "[2,3]", hint: "Use array index marking or hashmap.", description: "Find all numbers that appear twice in an array."  },
    { title: "Intersection of Two Arrays", level: "Easy", input: "[1,2,2,1], [2,2]", output: "[2]", hint: "Use set to find common elements.", description: "Return the intersection of two arrays."  },
    { title: "Subarray Sum Equals K", level: "Medium", input: "[1,1,1], k=2", output: "2", hint: "Use prefix sum hashmap to count subarrays.", description: "Count subarrays whose sum equals k."  },
    { title: "Find First Non-Repeating Character", level: "Easy", input: "'leetcode'", output: "'l'", hint: "Count frequency of characters, return first with count 1.", description: "Find the first character in string that occurs only once."  }
]
},

// Dynamic Programming
{
  category: "Dynamic Programming",
  questions: [
    { title: "Fibonacci using DP", level: "Easy", input: "n=5", output: "5", hint: "Use memoization or bottom-up DP to avoid recomputation.", description: "Compute nth Fibonacci number using dynamic programming." },
    { title: "0/1 Knapsack Problem", level: "Medium", input: "wt=[1,2,3], val=[10,20,30], W=5", output: "50", hint: "Use DP table: dp[i][w]=max(include item i, exclude item i).", description: "Maximize value that fits into knapsack without exceeding weight limit." },
    { title: "Longest Common Subsequence", level: "Medium", input: "text1='abcde', text2='ace'", output: "3", hint: "Use a DP table comparing prefixes of both strings.", description: "Find the length of longest common subsequence between two strings."},
    { title: "Longest Increasing Subsequence", level: "Medium", input: "[10,9,2,5,3,7,101,18]", output: "4", hint: "Use DP: dp[i]=length of LIS ending at i; or binary search method for optimization.", description: "Find the length of the longest increasing subsequence in an array."  },
    { title: "Edit Distance", level: "Hard", input: "word1='horse', word2='ros'", output: "3", hint: "Use DP table where dp[i][j]=min operations to convert word1[0..i] to word2[0..j].", description: "Find minimum operations to convert one string to another." },
    { title: "Matrix Chain Multiplication", level: "Hard", input: "[40,20,30,10,30]", output: "26000", hint: "Use DP: dp[i][j]=min cost of multiplying matrices i to j.", description: "Find the minimum cost to multiply a chain of matrices." },
    { title: "Coin Change Problem", level: "Medium", input: "coins=[1,2,5], amount=11", output: "3", hint: "Use DP: dp[i]=min coins to make amount i.", description: "Find minimum coins to make a given amount."},
    { title: "Subset Sum Problem", level: "Medium", input: "[3,34,4,12,5,2], sum=9", output: "true", hint: "Use DP table dp[i][j]=true if sum j can be formed with first i elements.", description: "Check if a subset of numbers sums up to target value." },
    { title: "Minimum Path Sum", level: "Medium", input: "[[1,3,1],[1,5,1],[4,2,1]]", output: "7", hint: "Use DP: dp[i][j]=min(dp[i-1][j], dp[i][j-1])+grid[i][j].", description: "Find minimum path sum from top-left to bottom-right in a grid."  },
    { title: "Partition Equal Subset Sum", level: "Medium", input: "[1,5,11,5]", output: "true", hint: "Check if subset sum equal to totalSum/2 exists using DP.", description: "Determine if array can be partitioned into two subsets with equal sum." }
  ]
},

];

    





// All 70 Java solutions as strings. Each key matches the question title exactly.
 export const solutions = {
  // ---------- Arrays (10) ----------
  "Two Sum Problem": `

public class Main {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] res = twoSum(nums, target);
        System.out.println("Indices: [" + res[0] + ", " + res[1] + "]");
    }

    public static int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{-1, -1}; // No match found
    }
}

`
,

  "Maximum Subarray Sum (Kadane’s Algorithm)": `// Kadane's Algorithm - Java
public class Kadane {
    public static int maxSubArray(int[] nums) {
        int maxEnding = nums[0], maxSoFar = nums[0];
        for (int i = 1; i < nums.length; i++) {
            maxEnding = Math.max(nums[i], maxEnding + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEnding);
        }
        return maxSoFar;
    }
}
`,

  "Sort an Array of 0s, 1s, and 2s": `// Dutch National Flag - Java
public class Sort012 {
    public static void sort012(int[] arr) {
        int low=0, mid=0, high=arr.length-1;
        while (mid<=high){
            if (arr[mid]==0) { int t=arr[low]; arr[low]=arr[mid]; arr[mid]=t; low++; mid++; }
            else if (arr[mid]==1) mid++;
            else { int t=arr[mid]; arr[mid]=arr[high]; arr[high]=t; high--; }
        }
    }
}
`,

  "Find Duplicate Number in Array": `// Find duplicate using HashSet - Java
import java.util.*;
public class FindDuplicate {
    public static Integer findDuplicate(int[] nums) {
        Set<Integer> s = new HashSet<>();
        for (int x: nums) if (!s.add(x)) return x;
        return null;
    }
}
`,

  "Merge Intervals": `// Merge Intervals - Java
import java.util.*;
public class MergeIntervals {
    public static int[][] merge(int[][] intervals) {
        if (intervals.length<=1) return intervals;
        Arrays.sort(intervals, (a,b)->Integer.compare(a[0], b[0]));
        List<int[]> res = new ArrayList<>();
        int[] cur = intervals[0];
        for (int i=1;i<intervals.length;i++){
            if (intervals[i][0] <= cur[1]) cur[1] = Math.max(cur[1], intervals[i][1]);
            else { res.add(cur); cur = intervals[i]; }
        }
        res.add(cur);
        return res.toArray(new int[res.size()][]);
    }
}
`,

  "Rearrange Array Alternately": `// Rearrange alternately: max, min, 2nd max, 2nd min ...
import java.util.*;
public class RearrangeAlternately {
    public static int[] rearrange(int[] arr) {
        int n = arr.length;
        int[] a = Arrays.copyOf(arr, n);
        Arrays.sort(a);
        int[] res = new int[n];
        int l=0, r=n-1, idx=0;
        while (l<=r){
            if (idx<n) res[idx++]=a[r--];
            if (l<=r && idx<n) res[idx++]=a[l++];
        }
        return res;
    }
}
`,

  "Best Time to Buy and Sell Stock": `// Best Time to Buy and Sell Stock (single transaction)
public class BestTimeToSell {
    public static int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE, profit=0;
        for (int p: prices){
            if (p<min) min=p; else profit=Math.max(profit, p-min);
        }
        return profit;
    }
}
`,

  "Find Missing Number": `// Find missing number from 1..n
public class FindMissing {
    public static int missingNumber(int[] nums, int n){
        long sum = (long)n*(n+1)/2;
        long actual = 0; for (int x: nums) actual+=x;
        return (int)(sum-actual);
    }
}
`,

  "Rotate Array by K Positions": `// Rotate array right by k
public class RotateArray {
    public static void rotate(int[] nums, int k){
        int n = nums.length; k%=n; if (k<0) k+=n;
        reverse(nums,0,n-1); reverse(nums,0,k-1); reverse(nums,k,n-1);
    }
    private static void reverse(int[] a,int i,int j){ while (i<j){int t=a[i];a[i]=a[j];a[j]=t;i++;j--;}} 
}
`,

  "Subarray with Given Sum": `// Subarray with given sum for non-negative numbers - sliding window
public class SubarraySum {
    public static int[] find(int[] arr, int target){
        int s=0; for (int e=0, start=0; e<arr.length; e++){
            s += arr[e];
            while (s>target && start<=e) s -= arr[start++];
            if (s==target) return new int[]{start, e};
        }
        return new int[]{-1,-1};
    }
}
`,

  // ---------- Strings (10) ----------
  "Reverse Words in a String": `// Reverse words in a string - Java
public class ReverseWords {
    public static String reverseWords(String s){
        String[] parts = s.trim().split("\\s+");
        Collections.reverse(Arrays.asList(parts));
        return String.join(" ", parts);
    }
}
`,

  "Check for Anagrams": `// Check if two strings are anagrams
import java.util.*;
public class Anagram {
    public static boolean isAnagram(String s, String t){
        if (s.length()!=t.length()) return false;
        int[] cnt = new int[26];
        for (char c: s.toCharArray()) cnt[c-'a']++;
        for (char c: t.toCharArray()) cnt[c-'a']--;
        for (int x: cnt) if (x!=0) return false; return true;
    }
}
`,

  "Longest Palindromic Substring": `// Expand around center - Longest Palindromic Substring
public class LongestPalSubstr {
    public static String longestPalindrome(String s){
        if (s==null || s.length()<1) return "";
        int start=0,end=0;
        for (int i=0;i<s.length();i++){
            int len1 = expand(s,i,i);
            int len2 = expand(s,i,i+1);
            int len = Math.max(len1,len2);
            if (len > end-start+1){
                start = i - (len-1)/2;
                end = i + len/2;
            }
        }
        return s.substring(start,end+1);
    }
    private static int expand(String s,int l,int r){
        while (l>=0 && r<s.length() && s.charAt(l)==s.charAt(r)){ l--; r++; }
        return r-l-1;
    }
}
`,

  "Count and Say Problem": `// Count and Say sequence
public class CountAndSay {
    public static String countAndSay(int n){
        String s = "1";
        for (int i=1;i<n;i++) s = next(s);
        return s;
    }
    private static String next(String s){
        StringBuilder sb = new StringBuilder();
        int i=0;
        while (i<s.length()){
            char c = s.charAt(i); int cnt=0;
            while (i<s.length() && s.charAt(i)==c){ cnt++; i++; }
            sb.append(cnt).append(c);
        }
        return sb.toString();
    }
}
`,

  "Implement strstr()": `// Implement strstr() - Java (indexOf equivalent)
public class StrStr {
    public static int strstr(String haystack, String needle){
        if (needle.isEmpty()) return 0;
        for (int i=0;i+needle.length()<=haystack.length();i++){
            if (haystack.substring(i,i+needle.length()).equals(needle)) return i;
        }
        return -1;
    }
}
`,

  "Longest Common Prefix": `// Longest Common Prefix - Java
public class LongestCommonPrefix {
    public static String longestCommonPrefix(String[] strs){
        if (strs==null||strs.length==0) return "";
        String prefix = strs[0];
        for (int i=1;i<strs.length;i++){
            while (strs[i].indexOf(prefix)!=0){
                prefix = prefix.substring(0,prefix.length()-1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }
}
`,

  "String Compression": `// String compression - counts consecutive characters
public class StringCompression {
    public static String compress(String s){
        StringBuilder sb = new StringBuilder();
        int i=0;
        while (i<s.length()){
            char c = s.charAt(i); int cnt=0;
            while (i<s.length() && s.charAt(i)==c){cnt++; i++;}
            sb.append(c).append(cnt);
        }
        return sb.toString();
    }
}
`,

  "Valid Parentheses for strings" : `// Valid parentheses - stack
import java.util.*;
public class ValidParentheses {
    public static boolean isValid(String s){
        Map<Character,Character> m = Map.of(')','(',']','[','}','{');
        Deque<Character> st = new ArrayDeque<>();
        for (char c: s.toCharArray()){
            if (m.containsValue(c)) st.push(c);
            else if (m.containsKey(c)){
                if (st.isEmpty() || st.pop()!=m.get(c)) return false;
            }
        }
        return st.isEmpty();
    }
}
`,

  "Minimum Window Substring": `// Minimum Window Substring - sliding window w/ counts
import java.util.*;
public class MinWindow {
    public static String minWindow(String s, String t){
        if (s.length()==0 || t.length()==0) return "";
        int[] need = new int[128];
        for (char c: t.toCharArray()) need[c]++;
        int left=0, right=0, required=t.length();
        int minLen = Integer.MAX_VALUE, minLeft=0;
        while (right<s.length()){
            char r = s.charAt(right++);
            if (need[r]-- > 0) required--;
            while (required==0){
                if (right-left < minLen){ minLen = right-left; minLeft = left; }
                char l = s.charAt(left++);
                if (need[l]++ == 0) required++;
            }
        }
        return minLen==Integer.MAX_VALUE?"":s.substring(minLeft,minLeft+minLen);
    }
}
`,

  "Group Anagrams for strings": `// Group Anagrams - Java
import java.util.*;
public class GroupAnagrams {
    public static List<List<String>> groupAnagrams(String[] strs){
        Map<String, List<String>> map = new HashMap<>();
        for (String s: strs){
            char[] ca = s.toCharArray(); Arrays.sort(ca);
            String key = new String(ca);
            map.computeIfAbsent(key, k->new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }
}
`,

  // ---------- Linked List (10) ----------
  "Reverse a Linked List": `// Reverse singly linked list
public class ReverseLinkedList {
    static class ListNode { int val; ListNode next; ListNode(int v){val=v;} }
    public static ListNode reverse(ListNode head){
        ListNode prev=null, cur=head;
        while (cur!=null){ ListNode nxt=cur.next; cur.next=prev; prev=cur; cur=nxt; }
        return prev;
    }
}
`,

  "Detect Loop in Linked List": `// Detect cycle using Floyd's algorithm
public class DetectCycle {
    static class ListNode{int val; ListNode next; ListNode(int v){val=v;}}
    public static boolean hasCycle(ListNode head){
        ListNode slow=head, fast=head;
        while (fast!=null && fast.next!=null){ slow=slow.next; fast=fast.next.next; if (slow==fast) return true; }
        return false;
    }
}
`,

  "Merge Two Sorted Linked Lists": `// Merge two sorted linked lists
public class MergeSortedLists {
    static class ListNode{int val; ListNode next; ListNode(int v){val=v;}}
    public static ListNode merge(ListNode a, ListNode b){
        ListNode dummy=new ListNode(0), cur=dummy;
        while (a!=null && b!=null){ if (a.val<b.val){cur.next=a; a=a.next;} else {cur.next=b; b=b.next;} cur=cur.next; }
        cur.next = (a!=null)?a:b; return dummy.next;
    }
}
`,

  "Remove Nth Node from End": `// Remove Nth node from end - two pointers
public class RemoveNthFromEnd {
    static class ListNode{int val; ListNode next; ListNode(int v){val=v;}}
    public static ListNode remove(ListNode head, int n){
        ListNode dummy=new ListNode(0); dummy.next=head;
        ListNode first=dummy, second=dummy;
        for (int i=0;i<=n;i++) first=first.next;
        while (first!=null){ first=first.next; second=second.next; }
        second.next = second.next.next;
        return dummy.next;
    }
}
`,

  "Intersection Point of Two Linked Lists": `// Intersection point - two pointer switching heads
public class Intersection {
    static class ListNode{int val; ListNode next; ListNode(int v){val=v;}}
    public static ListNode getIntersection(ListNode a, ListNode b){
        if (a==null||b==null) return null;
        ListNode p=a, q=b;
        while (p!=q){ p = (p==null)?b:p.next; q = (q==null)?a:q.next; }
        return p;
    }
}
`,

  "Add Two Numbers Represented by Linked Lists": `// Add two numbers stored in reverse order in linked lists
public class AddTwoNumbers {
    static class ListNode{int val; ListNode next; ListNode(int v){val=v;}}
    public static ListNode add(ListNode l1, ListNode l2){
        ListNode dummy=new ListNode(0), cur=dummy; int carry=0;
        while (l1!=null || l2!=null || carry!=0){
            int s = carry + (l1!=null?l1.val:0) + (l2!=null?l2.val:0);
            carry = s/10; cur.next = new ListNode(s%10); cur=cur.next;
            if (l1!=null) l1=l1.next; if (l2!=null) l2=l2.next;
        }
        return dummy.next;
    }
}
`,

  "Palindrome Linked List": `// Check if linked list is palindrome - reverse second half
public class PalindromeList {
    static class ListNode{int val; ListNode next; ListNode(int v){val=v;}}
    public static boolean isPalindrome(ListNode head){
        if (head==null||head.next==null) return true;
        ListNode slow=head, fast=head;
        while (fast.next!=null && fast.next.next!=null){ slow=slow.next; fast=fast.next.next; }
        ListNode second = reverse(slow.next); ListNode p=head, q=second;
        while (q!=null){ if (p.val!=q.val) return false; p=p.next; q=q.next; }
        slow.next = reverse(second); // restore
        return true;
    }
    private static ListNode reverse(ListNode h){ ListNode p=null; while(h!=null){ListNode n=h.next; h.next=p; p=h; h=n;} return p; }
}
`,

  "Flatten a Linked List": `// Flatten a multilevel linked list (list of lists) - sample approach using merge
// Problem variations exist; here we assume each node has 'next' and 'down' pointers and we want a single sorted list
import java.util.*;
public class FlattenLinkedList {
    static class Node{ int val; Node next, down; Node(int v){val=v;} }
    public static Node flatten(Node head){
        if (head==null || head.next==null) return head;
        head.next = flatten(head.next);
        head = merge(head, head.next);
        return head;
    }
    private static Node merge(Node a, Node b){
        Node dummy=new Node(0), cur=dummy;
        while (a!=null && b!=null){
            if (a.val < b.val){ cur.down = a; a = a.down; }
            else { cur.down = b; b = b.down; }
            cur = cur.down;
        }
        cur.down = (a!=null)?a:b;
        return dummy.down;
    }
}
`,

  "Sort a Linked List": `// Sort a linked list using merge sort - O(n log n)
public class SortLinkedList {
    static class ListNode{int val; ListNode next; ListNode(int v){val=v;}}
    public static ListNode sortList(ListNode head){
        if (head==null || head.next==null) return head;
        ListNode slow=head, fast=head, prev=null;
        while (fast!=null && fast.next!=null){ prev=slow; slow=slow.next; fast=fast.next.next; }
        prev.next=null;
        ListNode l1 = sortList(head);
        ListNode l2 = sortList(slow);
        return merge(l1,l2);
    }
    private static ListNode merge(ListNode a, ListNode b){
        ListNode dummy=new ListNode(0), cur=dummy;
        while (a!=null && b!=null){ if (a.val<b.val){cur.next=a; a=a.next;} else {cur.next=b; b=b.next;} cur=cur.next; }
        cur.next = (a!=null)?a:b; return dummy.next;
    }
}
`,

  "Clone a Linked List with Random Pointers": `// Clone linked list with random pointers - O(n) time, O(1) space
import java.util.*;
public class CloneRandomList {
    static class Node{ int val; Node next, random; Node(int v){val=v;} }
    public static Node copyRandomList(Node head){
        if (head==null) return null;
        // 1) weave copied nodes
        Node cur=head;
        while (cur!=null){ Node copy=new Node(cur.val); copy.next=cur.next; cur.next=copy; cur=copy.next; }
        // 2) assign randoms
        cur=head; while (cur!=null){ if (cur.random!=null) cur.next.random = cur.random.next; cur=cur.next.next; }
        // 3) unweave
        cur=head; Node dummy=new Node(0), copyCur=dummy;
        while (cur!=null){ copyCur.next = cur.next; copyCur=copyCur.next; cur.next = cur.next.next; cur=cur.next; }
        return dummy.next;
    }
}
`,

  // ---------- Stack & Queue (10) ----------
  "Implement Stack using Queues": `// Implement Stack using two Queues
import java.util.*;
public class StackUsingQueues {
    Queue<Integer> q1 = new LinkedList<>(), q2 = new LinkedList<>();

    public void push(int x) {
        q2.add(x);
        while (!q1.isEmpty()) q2.add(q1.remove());
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
    }

    public int pop() {
        if (q1.isEmpty()) throw new RuntimeException("Stack is empty");
        return q1.remove();
    }

    public int top() {
        if (q1.isEmpty()) throw new RuntimeException("Stack is empty");
        return q1.peek();
    }

    public boolean isEmpty() {
        return q1.isEmpty();
    }
}
`,

"Implement Queue using Stacks": `// Implement Queue using two Stacks
import java.util.*;
public class QueueUsingStacks {
    Stack<Integer> s1 = new Stack<>();
    Stack<Integer> s2 = new Stack<>();

    public void enqueue(int x) {
        s1.push(x);
    }

    public int dequeue() {
        if (s2.isEmpty()) while (!s1.isEmpty()) s2.push(s1.pop());
        if (s2.isEmpty()) throw new RuntimeException("Queue is empty");
        return s2.pop();
    }
}
`,

"Next Greater Element": `// Next Greater Element using Stack
import java.util.*;
public class NextGreaterElement {
    public static int[] nextGreater(int[] arr) {
        int n = arr.length;
        int[] res = new int[n];
        Stack<Integer> st = new Stack<>();
        for (int i = n - 1; i >= 0; i--) {
            while (!st.isEmpty() && st.peek() <= arr[i]) st.pop();
            res[i] = st.isEmpty() ? -1 : st.peek();
            st.push(arr[i]);
        }
        return res;
    }
}
`,

"Valid Parentheses": `
import java.util.*;
public class ValidParenthesesStack {
    public static boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') st.push(c);
            else {
                if (st.isEmpty()) return false;
                char t = st.pop();
                if ((c == ')' && t != '(') || (c == ']' && t != '[') || (c == '}' && t != '{'))
                    return false;
            }
        }
        return st.isEmpty();
    }
}
`,

"Min Stack": `// Min Stack - keeps track of minimum element
import java.util.*;
public class MinStack {
    Stack<Integer> st = new Stack<>();
    Stack<Integer> minSt = new Stack<>();

    public void push(int x) {
        st.push(x);
        if (minSt.isEmpty() || x <= minSt.peek()) minSt.push(x);
    }

    public void pop() {
        if (st.peek().equals(minSt.peek())) minSt.pop();
        st.pop();
    }

    public int top() { return st.peek(); }

    public int getMin() { return minSt.peek(); }
}
`,

"Largest Rectangle in Histogram": `// Largest Rectangle in Histogram using Stack
import java.util.*;
public class LargestRectangle {
    public static int largestRectangleArea(int[] heights) {
        Stack<Integer> st = new Stack<>();
        int max = 0;
        for (int i = 0; i <= heights.length; i++) {
            int h = (i == heights.length) ? 0 : heights[i];
            while (!st.isEmpty() && h < heights[st.peek()]) {
                int height = heights[st.pop()];
                int width = st.isEmpty() ? i : i - st.peek() - 1;
                max = Math.max(max, height * width);
            }
            st.push(i);
        }
        return max;
    }
}
`,

"Stock Span Problem": `// Stock Span Problem using Stack
import java.util.*;
public class StockSpan {
    public static int[] calculateSpan(int[] price) {
        int n = price.length;
        int[] span = new int[n];
        Stack<Integer> st = new Stack<>();
        for (int i = 0; i < n; i++) {
            while (!st.isEmpty() && price[st.peek()] <= price[i]) st.pop();
            span[i] = st.isEmpty() ? i + 1 : i - st.peek();
            st.push(i);
        }
        return span;
    }
}
`,

"Implement LRU Cache": `// LRU Cache using LinkedHashMap
import java.util.*;
public class LRUCache extends LinkedHashMap<Integer, Integer> {
    private int capacity;
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity;
    }
}
`,

"Circular Queue Implementation": `// Circular Queue using array
public class CircularQueue {
    int[] arr;
    int front, rear, size, cap;

    public CircularQueue(int capacity) {
        cap = capacity;
        arr = new int[cap];
        front = 0;
        rear = -1;
        size = 0;
    }

    public void enqueue(int x) {
        if (size == cap) throw new RuntimeException("Full");
        rear = (rear + 1) % cap;
        arr[rear] = x;
        size++;
    }

    public int dequeue() {
        if (size == 0) throw new RuntimeException("Empty");
        int val = arr[front];
        front = (front + 1) % cap;
        size--;
        return val;
    }
}
`,

"Expression Evaluation (Postfix/Infix)": `// Evaluate Postfix Expression
import java.util.*;
public class EvaluatePostfix {
    public static int evaluate(String exp) {
        Stack<Integer> st = new Stack<>();
        for (char c : exp.toCharArray()) {
            if (Character.isDigit(c)) st.push(c - '0');
            else {
                int b = st.pop();
                int a = st.pop();
                switch (c) {
                    case '+': st.push(a + b); break;
                    case '-': st.push(a - b); break;
                    case '*': st.push(a * b); break;
                    case '/': st.push(a / b); break;
                }
            }
        }
        return st.pop();
    }
}
`,
// ---------- Trees (10) ----------
"Inorder, Preorder, Postorder Traversal": `// Inorder, Preorder, Postorder - recursive and iterative samples
import java.util.*;
public class TreeTraversals {
    static class TreeNode { int val; TreeNode left, right; TreeNode(int v){val=v;} }

    // Recursive
    public static void inorder(TreeNode root, List<Integer> out){
        if (root==null) return;
        inorder(root.left, out); out.add(root.val); inorder(root.right, out);
    }
    public static void preorder(TreeNode root, List<Integer> out){
        if (root==null) return;
        out.add(root.val); preorder(root.left, out); preorder(root.right, out);
    }
    public static void postorder(TreeNode root, List<Integer> out){
        if (root==null) return;
        postorder(root.left, out); postorder(root.right, out); out.add(root.val);
    }

    // Iterative inorder example
    public static List<Integer> inorderIter(TreeNode root){
        List<Integer> res = new ArrayList<>();
        Deque<TreeNode> st = new ArrayDeque<>();
        TreeNode cur = root;
        while (cur!=null || !st.isEmpty()){
            while (cur!=null){ st.push(cur); cur=cur.left; }
            cur = st.pop(); res.add(cur.val); cur = cur.right;
        }
        return res;
    }
}
`,

"Level Order Traversal": `// Level Order Traversal (BFS)
import java.util.*;
public class LevelOrder {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    public static List<List<Integer>> levelOrder(TreeNode root){
        List<List<Integer>> res = new ArrayList<>();
        if (root==null) return res;
        Queue<TreeNode> q = new LinkedList<>(); q.add(root);
        while (!q.isEmpty()){
            int sz = q.size(); List<Integer> level = new ArrayList<>();
            for (int i=0;i<sz;i++){
                TreeNode n = q.poll(); level.add(n.val);
                if (n.left!=null) q.add(n.left); if (n.right!=null) q.add(n.right);
            }
            res.add(level);
        }
        return res;
    }
}
`,

"Height of Binary Tree": `// Height (max depth) of binary tree - DFS
public class TreeHeight {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    public static int maxDepth(TreeNode root){
        if (root==null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}
`,

"Diameter of Binary Tree": `// Diameter of Binary Tree - compute height and track diameter
public class Diameter {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    private static int ans = 0;
    public static int diameterOfBinaryTree(TreeNode root){
        ans = 0; depth(root); return ans;
    }
    private static int depth(TreeNode node){
        if (node==null) return 0;
        int L = depth(node.left), R = depth(node.right);
        ans = Math.max(ans, L + R);
        return 1 + Math.max(L, R);
    }
}
`,

"Check if Two Trees are Identical": `// Check whether two binary trees are identical
public class IdenticalTrees {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    public static boolean isSame(TreeNode p, TreeNode q){
        if (p==null && q==null) return true;
        if (p==null || q==null) return false;
        if (p.val != q.val) return false;
        return isSame(p.left, q.left) && isSame(p.right, q.right);
    }
}
`,

"Lowest Common Ancestor (LCA)": `// LCA in binary tree (not BST) - recursive
public class LCA {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q){
        if (root==null || root==p || root==q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left!=null && right!=null) return root;
        return left != null ? left : right;
    }
}
`,

"Balanced Binary Tree Check": `// Check if tree is height-balanced
public class BalancedTree {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    public static boolean isBalanced(TreeNode root){
        return height(root) != -1;
    }
    private static int height(TreeNode node){
        if (node==null) return 0;
        int L = height(node.left); if (L==-1) return -1;
        int R = height(node.right); if (R==-1) return -1;
        if (Math.abs(L-R) > 1) return -1;
        return 1 + Math.max(L, R);
    }
}
`,

"Boundary Traversal of Tree": `// Boundary traversal (anticlockwise) - root, left boundary (no leaves), leaves, right boundary (no leaves)
import java.util.*;
public class BoundaryTraversal {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }

    public static List<Integer> boundaryOfBinaryTree(TreeNode root){
        List<Integer> res = new ArrayList<>();
        if (root==null) return res;
        if (!isLeaf(root)) res.add(root.val);
        addLeftBoundary(root.left, res);
        addLeaves(root, res);
        addRightBoundary(root.right, res);
        return res;
    }
    private static boolean isLeaf(TreeNode node){ return node!=null && node.left==null && node.right==null; }
    private static void addLeftBoundary(TreeNode node, List<Integer> res){
        while (node!=null){
            if (!isLeaf(node)) res.add(node.val);
            node = (node.left!=null)?node.left:node.right;
        }
    }
    private static void addRightBoundary(TreeNode node, List<Integer> res){
        Deque<Integer> stack = new ArrayDeque<>();
        while (node!=null){
            if (!isLeaf(node)) stack.push(node.val);
            node = (node.right!=null)?node.right:node.left;
        }
        while (!stack.isEmpty()) res.add(stack.pop());
    }
    private static void addLeaves(TreeNode node, List<Integer> res){
        if (node==null) return;
        if (isLeaf(node)){ res.add(node.val); return; }
        addLeaves(node.left, res); addLeaves(node.right, res);
    }
}
`,

"Vertical Order Traversal": `// Vertical order traversal using column index and BFS
import java.util.*;
public class VerticalOrder {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    public static List<List<Integer>> verticalOrder(TreeNode root){
        List<List<Integer>> res = new ArrayList<>();
        if (root==null) return res;
        Map<Integer, List<Integer>> map = new TreeMap<>();
        Queue<TreeNode> qn = new LinkedList<>();
        Queue<Integer> qc = new LinkedList<>();
        qn.add(root); qc.add(0);
        while (!qn.isEmpty()){
            TreeNode node = qn.poll(); int col = qc.poll();
            map.computeIfAbsent(col, k->new ArrayList<>()).add(node.val);
            if (node.left!=null){ qn.add(node.left); qc.add(col-1); }
            if (node.right!=null){ qn.add(node.right); qc.add(col+1); }
        }
        for (List<Integer> v : map.values()) res.add(v);
        return res;
    }
}
`,

"Serialize and Deserialize a Binary Tree": `// Serialize and Deserialize a binary tree using pre-order with null marker
import java.util.*;
public class Codec {
    static class TreeNode{ int val; TreeNode left,right; TreeNode(int v){val=v;} }
    public String serialize(TreeNode root){
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }
    private void serializeHelper(TreeNode node, StringBuilder sb){
        if (node==null){ sb.append("#,"); return; }
        sb.append(node.val).append(",");
        serializeHelper(node.left, sb); serializeHelper(node.right, sb);
    }
    public TreeNode deserialize(String data){
        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(q);
    }
    private TreeNode deserializeHelper(Queue<String> q){
        String s = q.poll();
        if (s.equals("#")) return null;
        TreeNode node = new TreeNode(Integer.parseInt(s));
        node.left = deserializeHelper(q); node.right = deserializeHelper(q);
        return node;
    }
}
`,

// ---------- Graphs (10) ----------
"BFS Traversal": `// BFS traversal of a graph represented as adjacency list
import java.util.*;
public class GraphBFS {
    public static List<Integer> bfs(int start, List<List<Integer>> adj){
        List<Integer> order = new ArrayList<>();
        boolean[] vis = new boolean[adj.size()];
        Queue<Integer> q = new LinkedList<>();
        q.add(start); vis[start]=true;
        while (!q.isEmpty()){
            int u = q.poll(); order.add(u);
            for (int v: adj.get(u)) if (!vis[v]){ vis[v]=true; q.add(v); }
        }
        return order;
    }
}
`,

"DFS Traversal": `// DFS traversal (iterative and recursive)
import java.util.*;
public class GraphDFS {
    public static List<Integer> dfsRecursive(int start, List<List<Integer>> adj){
        List<Integer> res = new ArrayList<>();
        boolean[] vis = new boolean[adj.size()];
        dfs(start, adj, vis, res);
        return res;
    }
    private static void dfs(int u, List<List<Integer>> adj, boolean[] vis, List<Integer> res){
        vis[u]=true; res.add(u);
        for (int v: adj.get(u)) if (!vis[v]) dfs(v, adj, vis, res);
    }

    public static List<Integer> dfsIterative(int start, List<List<Integer>> adj){
        List<Integer> res = new ArrayList<>();
        boolean[] vis = new boolean[adj.size()];
        Deque<Integer> st = new ArrayDeque<>(); st.push(start);
        while (!st.isEmpty()){
            int u = st.pop();
            if (vis[u]) continue;
            vis[u]=true; res.add(u);
            for (int v: adj.get(u)) if (!vis[v]) st.push(v);
        }
        return res;
    }
}
`,

"Detect Cycle in Undirected Graph": `// Detect cycle in undirected graph using DFS (parent tracking)
import java.util.*;
public class CycleUndirected {
    public static boolean hasCycle(List<List<Integer>> adj){
        int n = adj.size();
        boolean[] vis = new boolean[n];
        for (int i=0;i<n;i++) if (!vis[i] && dfs(i, -1, adj, vis)) return true;
        return false;
    }
    private static boolean dfs(int u, int parent, List<List<Integer>> adj, boolean[] vis){
        vis[u]=true;
        for (int v: adj.get(u)){
            if (!vis[v]){
                if (dfs(v, u, adj, vis)) return true;
            } else if (v != parent) return true;
        }
        return false;
    }
}
`,

"Detect Cycle in Directed Graph": `// Detect cycle in directed graph using DFS + recursion stack
import java.util.*;
public class CycleDirected {
    public static boolean hasCycle(int n, List<List<Integer>> adj){
        boolean[] vis = new boolean[n], rec = new boolean[n];
        for (int i=0;i<n;i++) if (!vis[i] && dfs(i, adj, vis, rec)) return true;
        return false;
    }
    private static boolean dfs(int u, List<List<Integer>> adj, boolean[] vis, boolean[] rec){
        vis[u]=true; rec[u]=true;
        for (int v: adj.get(u)){
            if (!vis[v] && dfs(v, adj, vis, rec)) return true;
            if (rec[v]) return true;
        }
        rec[u]=false; return false;
    }
}
`,

"Topological Sorting": `// Topological sort using Kahn's algorithm (BFS)
import java.util.*;
public class TopologicalSort {
    public static List<Integer> topoSort(int n, List<List<Integer>> adj){
        int[] indeg = new int[n];
        for (List<Integer> edges: adj) for (int v: edges) indeg[v]++;
        Queue<Integer> q = new LinkedList<>();
        for (int i=0;i<n;i++) if (indeg[i]==0) q.add(i);
        List<Integer> res = new ArrayList<>();
        while (!q.isEmpty()){
            int u = q.poll(); res.add(u);
            for (int v: adj.get(u)) if (--indeg[v]==0) q.add(v);
        }
        return res.size()==n ? res : new ArrayList<>(); // empty if cycle exists
    }
}
`,

"Shortest Path in Unweighted Graph": `// Shortest path in unweighted graph using BFS (returns distances)
import java.util.*;
public class ShortestUnweighted {
    public static int[] shortestPaths(int src, List<List<Integer>> adj){
        int n = adj.size();
        int[] dist = new int[n]; Arrays.fill(dist, -1);
        Queue<Integer> q = new LinkedList<>();
        q.add(src); dist[src]=0;
        while (!q.isEmpty()){
            int u = q.poll();
            for (int v: adj.get(u)) if (dist[v]==-1){ dist[v]=dist[u]+1; q.add(v); }
        }
        return dist;
    }
}
`,

"Dijkstra’s Algorithm": `// Dijkstra's algorithm using priority queue (adj list with weights)
import java.util.*;
public class Dijkstra {
    static class Edge{ int to; int w; Edge(int t,int w){to=t;this.w=w;} }
    public static int[] dijkstra(int n, List<List<Edge>> adj, int src){
        int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src]=0;
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a->a[0]));
        pq.add(new int[]{0, src});
        while (!pq.isEmpty()){
            int[] cur = pq.poll(); int d = cur[0], u = cur[1];
            if (d != dist[u]) continue;
            for (Edge e: adj.get(u)){
                if (dist[e.to] > d + e.w){ dist[e.to] = d + e.w; pq.add(new int[]{dist[e.to], e.to}); }
            }
        }
        return dist;
    }
}
`,

"Minimum Spanning Tree (Kruskal/Prim)": `// Kruskal's MST using Union-Find
import java.util.*;
public class KruskalMST {
    static class Edge{ int u,v,w; Edge(int u,int v,int w){this.u=u;this.v=v;this.w=w;} }
    static class DSU {
        int[] p; DSU(int n){ p=new int[n]; for(int i=0;i<n;i++) p[i]=i; }
        int find(int x){ return p[x]==x?x:(p[x]=find(p[x])); }
        boolean union(int a,int b){ a=find(a); b=find(b); if(a==b) return false; p[b]=a; return true; }
    }
    public static int kruskal(int n, List<Edge> edges){
        Collections.sort(edges, Comparator.comparingInt(e->e.w));
        DSU dsu = new DSU(n); int cost=0;
        for (Edge e: edges) if (dsu.union(e.u, e.v)) cost += e.w;
        return cost;
    }
}
`,

"Number of Islands": `// Number of Islands using DFS
public class NumberOfIslands {
    public static int numIslands(char[][] grid){
        if (grid==null || grid.length==0) return 0;
        int m = grid.length, n = grid[0].length, count=0;
        for (int i=0;i<m;i++) for (int j=0;j<n;j++) if (grid[i][j]=='1'){ count++; dfs(grid,i,j); }
        return count;
    }
    private static void dfs(char[][] g, int i, int j){
        if (i<0||j<0||i>=g.length||j>=g[0].length||g[i][j]!='1') return;
        g[i][j]='0';
        dfs(g,i+1,j); dfs(g,i-1,j); dfs(g,i,j+1); dfs(g,i,j-1);
    }
}
`,

"Graph Coloring Problem": `// Graph coloring (m-coloring) using backtracking (returns one feasible coloring)
import java.util.*;
public class GraphColoring {
    public static int[] graphColoring(List<List<Integer>> adj, int m){
        int n = adj.size();
        int[] color = new int[n];
        if (solve(0, color, adj, m)) return color;
        return null;
    }
    private static boolean solve(int v, int[] color, List<List<Integer>> adj, int m){
        if (v==color.length) return true;
        for (int c=1;c<=m;c++){
            boolean ok=true;
            for (int nei: adj.get(v)) if (color[nei]==c){ ok=false; break; }
            if (ok){ color[v]=c; if (solve(v+1, color, adj, m)) return true; color[v]=0; }
        }
        return false;
    }
}
`,

// ---------- Hashing (10) ----------
"Two Sum using HashMap": `// Two Sum returning indices using HashMap
import java.util.*;
public class TwoSumHash {
    public static int[] twoSum(int[] nums, int target){
        Map<Integer,Integer> m = new HashMap<>();
        for (int i=0;i<nums.length;i++){
            int need = target - nums[i];
            if (m.containsKey(need)) return new int[]{m.get(need), i};
            m.put(nums[i], i);
        }
        return new int[]{-1,-1};
    }
}
`,

"Subarray with Zero Sum": `// Find any subarray with sum zero using prefix sum and HashMap
import java.util.*;
public class SubarrayZeroSum {
    public static int[] findSubarray(int[] arr){
        Map<Integer,Integer> map = new HashMap<>();
        map.put(0,-1); int sum=0;
        for (int i=0;i<arr.length;i++){
            sum += arr[i];
            if (map.containsKey(sum)) return new int[]{map.get(sum)+1, i};
            map.put(sum, i);
        }
        return new int[]{-1,-1};
    }
}
`,

"Count Distinct Elements in Window": `// Count distinct elements in every window of size k
import java.util.*;
public class DistinctInWindow {
    public static List<Integer> countDistinct(int[] arr, int k){
        Map<Integer,Integer> freq = new HashMap<>();
        List<Integer> res = new ArrayList<>();
        for (int i=0;i<arr.length;i++){
            freq.put(arr[i], freq.getOrDefault(arr[i],0)+1);
            if (i >= k){
                int out = arr[i-k];
                freq.put(out, freq.get(out)-1);
                if (freq.get(out)==0) freq.remove(out);
            }
            if (i >= k-1) res.add(freq.size());
        }
        return res;
    }
}
`,

"Longest Consecutive Sequence": `// Longest consecutive sequence using HashSet - O(n)
import java.util.*;
public class LongestConsecutive {
    public static int longestConsecutive(int[] nums){
        Set<Integer> s = new HashSet<>();
        for (int n: nums) s.add(n);
        int best=0;
        for (int n: s){
            if (!s.contains(n-1)){
                int cur = 1, x = n;
                while (s.contains(x+1)){ cur++; x++; }
                best = Math.max(best, cur);
            }
        }
        return best;
    }
}
`,

"Check if Array Pairs are Divisible by K": `// Check if array can be paired such that sum of each pair divisible by k
import java.util.*;
public class PairDivisibleByK {
    public static boolean canArrange(int[] arr, int k){
        int[] cnt = new int[k];
        for (int a: arr) cnt[((a%k)+k)%k]++;
        if (cnt[0]%2!=0) return false;
        for (int i=1;i<k;i++){
            if (cnt[i] != cnt[k-i]) return false;
        }
        return true;
    }
}
`,

"Group Anagrams": `// (already provided earlier) Group anagrams using hashmap with sorted key
import java.util.*;
public class GroupAnagramsHash {
    public static List<List<String>> groupAnagrams(String[] strs){
        Map<String, List<String>> map = new HashMap<>();
        for (String s: strs){
            char[] ca = s.toCharArray(); Arrays.sort(ca);
            String key = new String(ca);
            map.computeIfAbsent(key, k->new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }
}
`,

"Find All Duplicates in Array": `// Find duplicates where numbers 1..n appear — mark visited by negation
import java.util.*;
public class FindAllDuplicates {
    public static List<Integer> findDuplicates(int[] nums){
        List<Integer> res = new ArrayList<>();
        for (int i=0;i<nums.length;i++){
            int idx = Math.abs(nums[i]) - 1;
            if (nums[idx] < 0) res.add(Math.abs(nums[i]));
            else nums[idx] = -nums[idx];
        }
        return res;
    }
}
`,

"Intersection of Two Arrays": `// Intersection (unique) of two arrays using HashSet
import java.util.*;
public class IntersectionArrays {
    public static int[] intersection(int[] a, int[] b){
        Set<Integer> sa = new HashSet<>();
        for (int x: a) sa.add(x);
        Set<Integer> res = new HashSet<>();
        for (int x: b) if (sa.contains(x)) res.add(x);
        int[] out = new int[res.size()]; int i=0;
        for (int x: res) out[i++]=x;
        return out;
    }
}
`,

"Subarray Sum Equals K": `// Count number of subarrays with sum = k using prefix-sum hashmap
import java.util.*;
public class SubarraySumK {
    public static int subarraySum(int[] nums, int k){
        Map<Integer,Integer> map = new HashMap<>();
        map.put(0,1); int sum=0, count=0;
        for (int n: nums){
            sum += n;
            if (map.containsKey(sum - k)) count += map.get(sum - k);
            map.put(sum, map.getOrDefault(sum,0)+1);
        }
        return count;
    }
}
`,

"Find First Non-Repeating Character": `// Find first non-repeating char in string
import java.util.*;
public class FirstUniqueChar {
    public static int firstUniqChar(String s){
        int[] cnt = new int[26];
        for (char c: s.toCharArray()) cnt[c-'a']++;
        for (int i=0;i<s.length();i++) if (cnt[s.charAt(i)-'a']==1) return i;
        return -1;
    }
}
`,

// ---------- Dynamic Programming (10) ----------
"Fibonacci using DP": `// Fibonacci using bottom-up DP (iterative)
public class FibonacciDP {
    public static long fib(int n){
        if (n<=1) return n;
        long[] dp = new long[n+1];
        dp[0]=0; dp[1]=1;
        for (int i=2;i<=n;i++) dp[i]=dp[i-1]+dp[i-2];
        return dp[n];
    }
}
`,

"0/1 Knapsack Problem": `// 0/1 Knapsack - iterative DP (space optimized)
public class Knapsack {
    public static int knapsack(int[] wt, int[] val, int W){
        int n = wt.length;
        int[] dp = new int[W+1];
        for (int i=0;i<n;i++){
            for (int w=W; w>=wt[i]; w--){
                dp[w] = Math.max(dp[w], dp[w-wt[i]] + val[i]);
            }
        }
        return dp[W];
    }
}
`,

"Longest Common Subsequence": `// LCS - DP table
public class LCS {
    public static int lcs(String a, String b){
        int m=a.length(), n=b.length();
        int[][] dp = new int[m+1][n+1];
        for (int i=1;i<=m;i++){
            for (int j=1;j<=n;j++){
                if (a.charAt(i-1)==b.charAt(j-1)) dp[i][j]=dp[i-1][j-1]+1;
                else dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[m][n];
    }
}
`,

"Longest Increasing Subsequence": `// LIS - patience sorting (n log n)
import java.util.*;
public class LIS {
    public static int lengthOfLIS(int[] nums){
        List<Integer> tails = new ArrayList<>();
        for (int x: nums){
            int idx = Collections.binarySearch(tails, x);
            if (idx < 0) idx = -idx-1;
            if (idx == tails.size()) tails.add(x); else tails.set(idx, x);
        }
        return tails.size();
    }
}
`,

"Edit Distance": `// Edit (Levenshtein) Distance - DP
public class EditDistance {
    public static int minDistance(String a, String b){
        int m=a.length(), n=b.length();
        int[][] dp = new int[m+1][n+1];
        for (int i=0;i<=m;i++) dp[i][0]=i;
        for (int j=0;j<=n;j++) dp[0][j]=j;
        for (int i=1;i<=m;i++){
            for (int j=1;j<=n;j++){
                if (a.charAt(i-1)==b.charAt(j-1)) dp[i][j]=dp[i-1][j-1];
                else dp[i][j] = 1 + Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1]));
            }
        }
        return dp[m][n];
    }
}
`,

"Matrix Chain Multiplication": `// Matrix Chain Multiplication - DP O(n^3)
public class MatrixChain {
    public static int matrixChainOrder(int[] dims){
        int n = dims.length - 1;
        int[][] dp = new int[n+1][n+1];
        for (int len=2; len<=n; len++){
            for (int i=1; i<=n-len+1; i++){
                int j = i+len-1; dp[i][j] = Integer.MAX_VALUE;
                for (int k=i; k<j; k++){
                    int q = dp[i][k] + dp[k+1][j] + dims[i-1]*dims[k]*dims[j];
                    dp[i][j] = Math.min(dp[i][j], q);
                }
            }
        }
        return dp[1][n];
    }
}
`,

"Coin Change Problem": `// Coin Change - number of ways (unbounded) using DP
import java.util.*;
public class CoinChange {
    public static int change(int amount, int[] coins){
        int[] dp = new int[amount+1]; dp[0]=1;
        for (int c: coins){
            for (int i=c;i<=amount;i++) dp[i] += dp[i-c];
        }
        return dp[amount];
    }
}
`,

"Subset Sum Problem": `// Subset sum - DP boolean table (or bitset optimization)
public class SubsetSum {
    public static boolean subsetSum(int[] nums, int sum){
        BitSet bs = new BitSet(sum+1);
        bs.set(0);
        for (int n: nums){
            BitSet shifted = bs.get(0, sum+1);
            shifted = shifted << n;
            bs.or(shifted);
        }
        return bs.get(sum);
    }
}
`,

"Minimum Path Sum": `// Minimum path sum in grid - DP
public class MinPathSum {
    public static int minPathSum(int[][] grid){
        int m = grid.length, n = grid[0].length;
        int[][] dp = new int[m][n];
        dp[0][0] = grid[0][0];
        for (int i=1;i<m;i++) dp[i][0] = dp[i-1][0] + grid[i][0];
        for (int j=1;j<n;j++) dp[0][j] = dp[0][j-1] + grid[0][j];
        for (int i=1;i<m;i++) for (int j=1;j<n;j++)
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
        return dp[m-1][n-1];
    }
}
`,

"Partition Equal Subset Sum": `// Partition equal subset sum - subset sum DP reduced to target = total/2
public class PartitionEqualSubset {
    public static boolean canPartition(int[] nums){
        int sum = 0; for (int n: nums) sum += n;
        if (sum % 2 != 0) return false;
        int target = sum / 2;
        boolean[] dp = new boolean[target+1];
        dp[0] = true;
        for (int n: nums){
            for (int t = target; t >= n; t--) if (dp[t-n]) dp[t] = true;
        }
        return dp[target];
    }
}
`
};
export default questionsData;


