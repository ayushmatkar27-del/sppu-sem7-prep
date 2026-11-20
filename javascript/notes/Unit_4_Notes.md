# 📚 Unit 4: Regular Expressions & Strings (SPPU End-Sem Model Answers)
**Subject:** JavaScript (Elective - III) | **Course:** B.E. E&TC / Electronics (2019 Pattern)  
**Standard Exam Weightage:** 6 Marks per question | **Target:** 6/6 Marks in SPPU End Semester Exam.

---

## 📑 Index of Questions Covered

1. [Q1. Explain Character Classes in JavaScript. What are common character classes in Regular Expressions? (Repeated 7 times)](#q1-explain-character-classes-in-javascript-what-are-common-character-classes-in-regular-expressions)
2. [Q2. Explain String Methods used for Regular Expression in JavaScript with suitable examples. (Repeated 7 times)](#q2-explain-string-methods-used-for-regular-expression-in-javascript-with-suitable-examples)
3. [Q3. What are the limitations of Regular Expression? Describe limitations of RegEx. (Repeated 5 times)](#q3-what-are-the-limitations-of-regular-expression-describe-limitations-of-regex)
4. [Q4. What is Regular Expression in JavaScript and explain the need of regular expressions. (Repeated 4 times)](#q4-what-is-regular-expression-in-javascript-and-explain-the-need-of-regular-expressions)
5. [Q5. Explain Look Ahead and Look Behind concepts in JavaScript. (Repeated 4 times)](#q5-explain-look-ahead-and-look-behind-concepts-in-javascript)
6. [Q6. Write a JavaScript program to study string-related built-in methods in JavaScript. (Repeated 4 times)](#q6-write-a-javascript-program-to-study-string-related-built-in-methods-in-javascript)
7. [Q7. List the 6 Repetition Quantifiers with their meaning. Explain any 2 with example. (Repeated 4 times)](#q7-list-the-6-repetition-quantifiers-with-their-meaning-explain-any-2-with-example)
8. [Q8. Write a short note on Advanced Regular Expressions. (Repeated 3 times)](#q8-write-a-short-note-on-advanced-regular-expressions)
9. [Q9. Explain search() and split() method used in regular expression with suitable example. (Repeated 2 times)](#q9-explain-search-and-split-method-used-in-regular-expression-with-suitable-example)
10. [Q10. Describe the term Greedy Matching in regular expression with example. Differentiate between Greedy and Lazy Matching. (Repeated 2 times)](#q10-describe-the-term-greedy-matching-in-regular-expression-with-example-differentiate-between-greedy-and-lazy-matching)
11. [Q11. Explain Static Properties of the RegExp Class Object. (Repeated 2 times)](#q11-explain-static-properties-of-the-regexp-class-object)
12. [Q12. Describe the term "Capturing Groups" in regular expression with suitable example. (1 time)](#q12-describe-the-term-capturing-groups-in-regular-expression-with-suitable-example)
13. [Q13. List the RegExp object properties. Explain any two in detail. (1 time)](#q13-list-the-regexp-object-properties-explain-any-two-in-detail)
14. [Q14. Write a JavaScript program to compare two strings using various methods. (1 time)](#q14-write-a-javascript-program-to-compare-two-strings-using-various-methods)
15. [Q15. Write a JavaScript program to perform following operations on a given string: Reverse string, Replace characters, Check Palindrome. (1 time)](#q15-write-a-javascript-program-to-perform-following-operations-on-a-given-string-reverse-string-replace-characters-check-palindrome)

---

## Q1. Explain Character Classes in JavaScript. What are common character classes in Regular Expressions?
**[Marks: 6 | Frequency: 7 Times (Nov 2022, May 2023, Nov 2023, May 2024, Nov 2024, May 2025, May 2026)]**

### 1. Definition (1.5 Marks)
A **Character Class** tells the Regular Expression engine to match any **one character** out of an allowed set of characters. It allows you to define categories of characters (digits, letters, whitespace) concisely.
* **Custom Bracket Notation (`[...]`):** `[aeiou]` matches any single lowercase vowel.
* **Predefined Metacharacter Shorthands:** `\d`, `\w`, `\s`.

### 2. Common Character Classes Table (2.5 Marks)
| Class | Equivalent Set | Matches What? | Example Match |
| :--- | :--- | :--- | :--- |
| `\d` | `[0-9]` | Any single digit | `"9"` in `"Room 9"` |
| `\D` | `[^0-9]` | Any non-digit character | `"R"` in `"Room 9"` |
| `\w` | `[a-zA-Z0-9_]` | Any alphanumeric word char + underscore | `"a"`, `"7"`, `"_"` |
| `\W` | `[^a-zA-Z0-9_]` | Any non-word char (symbols, space) | `"@"`, `"!"`, `" "` |
| `\s` | `[ \t\r\n\v\f]` | Any whitespace (space, tab, newline) | Space / Tab |
| `\S` | `[^ \s]` | Any non-whitespace character | Any visible letter/digit |
| `.` (Dot) | Any except newline | Matches almost any single character | `"a.c"` matches `"abc"` |

### 3. Program Demonstration (2 Marks)
```javascript
// Validating a 10-digit Indian Mobile Number starting with 6, 7, 8, or 9
var phonePattern = /^[6-9]\d{9}$/;
console.log(phonePattern.test("9876543210")); // true
console.log(phonePattern.test("1234567890")); // false
```

---

## Q2. Explain String Methods used for Regular Expression in JavaScript with suitable examples.
**[Marks: 6 | Frequency: 7 Times (Nov 2022, May 2023, Nov 2023, May 2024, Nov 2024, May 2025, May 2026)]**

### 1. Four Big String Methods for RegEx (2 Marks)
1. `match(regexp)`: Retrieves matches as an array or `null`.
2. `search(regexp)`: Tests for match and returns the starting index, or `-1` if not found.
3. `replace(regexp, newSubstr)`: Replaces matches with replacement text.
4. `split(regexp)`: Splits a string into an array using a regex delimiter pattern.

### 2. Complete Program (4 Marks)
```javascript
var text = "Contact support at info@sppu.ac.in or exam2026@sppu.ac.in.";

// 1. match() with /g flag
var emails = text.match(/[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
console.log("Emails found:", emails); // ['info@sppu.ac.in', 'exam2026@sppu.ac.in']

// 2. search()
var yearIndex = text.search(/\d{4}/);
console.log("Year index:", yearIndex);

// 3. replace()
var masked = text.replace(/\d+/g, "XXXX");
console.log("Masked:", masked);

// 4. split()
var cities = "Pune;Mumbai,Nashik Nagpur".split(/[;, ]+/);
console.log("Cities:", cities); // ['Pune', 'Mumbai', 'Nashik', 'Nagpur']
```

---

## Q3. What are the limitations of Regular Expression? Describe limitations of RegEx.
**[Marks: 5/6 | Frequency: 5 Times (Nov 2022, May 2023, Nov 2023, May 2024, May 2025)]**

### 1. Limitations (3 Marks)
1. **Cannot Parse Arbitrarily Nested Structures:** Regular expressions belong to Type-3 grammars and have no memory stack to balance arbitrary nested HTML tags (`<div><div>...</div></div>`) or parentheses.
2. **Catastrophic Backtracking (ReDoS):** Complex patterns with nested quantifiers (e.g., `(a+)+$`) can run in exponential time $\mathcal{O}(2^n)$, freezing CPU threads.
3. **Low Readability & Maintainability:** Complex patterns look cryptic and are hard to debug.
4. **No Arithmetic / Numerical Logic:** Cannot check numeric bounds like `1 <= age <= 100` without awkward regex patterns.

### 2. Solutions Table (2 Marks)
| Limitation | Reason | Better Solution |
| :--- | :--- | :--- |
| Nested HTML Tags | Lacks stack memory for pairs | Use DOMParser / HTML Parser |
| Catastrophic Backtracking | Exponential backtracking paths | Atomic grouping, input length caps |
| Numerical Range Checking | Treats numbers as characters | `parseInt()` + standard `if` check |

---

## Q4. What is Regular Expression in JavaScript and explain the need of regular expressions.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

### 1. Definition (2 Marks)
A **Regular Expression** is an object describing a pattern of characters. It is used to perform pattern-matching and search-and-replace functions on text.
* Literal syntax: `var regex = /pattern/flags;`
* Object syntax: `var regex = new RegExp("pattern", "flags");`

### 2. Need for Regular Expressions (4 Key Needs) (4 Marks)
1. **Client-Side Form Validation:** Verifying emails, mobile numbers, passwords, and pin codes in 1 line of code.
2. **Data Extraction / Scraping:** Extracting dates, currency values, and URLs from unformatted text.
3. **Formatting & Sanitization:** Reformatting telephone numbers, trimming whitespace, and masking sensitive data.
4. **Native Performance:** Regex patterns are compiled directly to machine instructions by browser engines (V8).

---

## Q5. Explain Look Ahead and Look Behind concepts in JavaScript.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

### 1. Concept: Zero-Width Assertions (2 Marks)
Look-arounds match characters based on what comes *immediately after* (Look Ahead) or *immediately before* (Look Behind) them **without including** those characters in the matched string.

### 2. The 4 Look-Around Types (4 Marks)
| Type | Syntax | Meaning | Example |
| :--- | :--- | :--- | :--- |
| **Positive Lookahead** | `X(?=Y)` | Matches `X` only if followed by `Y` | `\d+(?=px)` matches `"100"` in `"100px"` |
| **Negative Lookahead** | `X(?!Y)` | Matches `X` only if NOT followed by `Y` | `\d+(?!px)` matches `"100"` in `"100kg"` |
| **Positive Lookbehind**| `(?<=Y)X` | Matches `X` only if preceded by `Y` | `(?<=\$)\d+` matches `"50"` in `"$50"` |
| **Negative Lookbehind**| `(?<!Y)X` | Matches `X` only if NOT preceded by `Y` | `(?<!\$)\d+` matches `"50"` in `"€50"` |

```javascript
var text = "Price: ₹1500 and 250 USD";
console.log(text.match(/(?<=₹)\d+/)[0]);   // "1500" (Lookbehind)
console.log(text.match(/\d+(?=\s*USD)/)[0]); // "250"  (Lookahead)
```

---

## Q6. Write a JavaScript program to study string-related built-in methods in JavaScript.
**[Marks: 5/6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

```javascript
var str = "  Savitribai Phule Pune University  ";

console.log("Length:", str.length);
console.log("Trimmed:", str.trim());
console.log("Uppercase:", str.trim().toUpperCase());
console.log("CharAt(0):", str.trim().charAt(0));
console.log("IndexOf 'Pune':", str.indexOf("Pune"));
console.log("Substring(0, 10):", str.trim().substring(0, 10));
console.log("Replaced:", str.trim().replace("University", "Campus"));
console.log("Split by Space:", str.trim().split(" "));
```

---

## Q7. List the 6 Repetition Quantifiers with their meaning. Explain any 2 with example.
**[Marks: 6 | Frequency: 4 Times (May 2024, Nov 2024, May 2025, Nov 2025)]**

| Quantifier | Meaning | Example | Match |
| :--- | :--- | :--- | :--- |
| `*` | 0 or more times | `/go*l/` | `"gl"`, `"gol"`, `"goool"` |
| `+` | 1 or more times | `/go+l/` | `"gol"`, `"gool"` (not `"gl"`) |
| `?` | 0 or 1 time (optional) | `/colou?r/` | `"color"`, `"colour"` |
| `{n}` | Exactly n times | `/\d{4}/` | `"2026"` |
| `{n,}` | At least n times | `/\d{2,}/` | `"25"`, `"1000"` |
| `{n, m}` | Between n and m times | `/\w{6,12}/` | Usernames 6-12 chars |

---

## Q8. Write a short note on Advanced Regular Expressions.
**[Marks: 6 | Frequency: 3 Times (May 2024, Nov 2024, May 2025)]**

1. **Non-Capturing Groups `(?:...)`:** Groups expressions together without storing submatch in memory.
2. **Backreferences `\1, \2`:** Matches previously captured text inside the same pattern (e.g. `/<([a-z]+)>.*?<\/\1>/` for HTML tags).
3. **Look-Arounds:** Positive/negative lookahead and lookbehind assertions.
4. **RegExp Flags:** `g` (global), `i` (case-insensitive), `m` (multiline), `s` (dotAll), `u` (unicode).

---

## Q9. Explain search() and split() method used in regular expression with suitable example.
**[Marks: 6 | Frequency: 2 Times (Nov 2024, Nov 2025)]**

* **`search(regex)`:** Returns starting index of the first match or `-1`.
  ```javascript
  "Exam 2026".search(/\d{4}/); // 5
  ```
* **`split(regex)`:** Splits string into array by pattern.
  ```javascript
  "Pune,Mumbai;Nashik".split(/[,;]/); // ['Pune', 'Mumbai', 'Nashik']
  ```

---

## Q10. Describe Greedy Matching in regular expression with example. Differentiate between Greedy and Lazy Matching.
**[Marks: 5 | Frequency: 2 Times (Nov 2024, Nov 2025)]**

* **Greedy (`*`, `+`):** Matches the longest possible string.
* **Lazy (`*?`, `+?`):** Matches the shortest possible string.
```javascript
var html = "<p>First</p><p>Second</p>";
console.log(html.match(/<p>.*<\/p>/)[0]);  // Greedy: "<p>First</p><p>Second</p>"
console.log(html.match(/<p>.*?<\/p>/)[0]); // Lazy:   "<p>First</p>"
```

---

## Q11. Explain Static Properties of the RegExp Class Object.
**[Marks: 6 | Frequency: 2 Times (May 2024, May 2025)]**

| Static Property | Alias | Description |
| :--- | :--- | :--- |
| `RegExp.input` | `RegExp.$_` | The original string searched |
| `RegExp.lastMatch` | `RegExp["$&"]` | Exact matched text |
| `RegExp.leftContext` | `RegExp["$\`"]` | String before the match |
| `RegExp.rightContext` | `RegExp["$'"]` | String after the match |
| `RegExp.$1 ... $9` | - | Captured groups 1 to 9 |

---

## Q12. Describe the term "Capturing Groups" in regular expression with suitable example.
**[Marks: 6 | Frequency: 1 Time (Nov 2025)]**

Parentheses `(...)` create capturing groups that store matched sub-expressions in `$1`, `$2`.
```javascript
var dateStr = "2026-11-15";
var reordered = dateStr.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
console.log(reordered); // "15/11/2026"
```

---

## Q13. List the RegExp object properties. Explain any two in detail.
**[Marks: 6 | Frequency: 1 Time (Nov 2025)]**

* `source`: Raw pattern string.
* `global`: Boolean indicating `/g` flag.
* `ignoreCase`: Boolean indicating `/i` flag.
* `lastIndex`: The character index where the next match will start (used in loops with `exec()`).

---

## Q14. Write a JavaScript program to compare two strings using various methods.
**[Marks: 5 | Frequency: 1 Time (Nov 2025)]**

```javascript
var s1 = "Apple", s2 = "apple";
console.log("=== comparison:", s1 === s2); // false (case-sensitive)
console.log("Case-insensitive:", s1.toLowerCase() === s2.toLowerCase()); // true
console.log("Alphabetical < :", s1 < s2); // true ('A' < 'a')
console.log("localeCompare:", s1.localeCompare(s2)); // -1
```

---

## Q15. Write a JavaScript program to perform: Reverse string, Replace characters, Palindrome check.
**[Marks: 5 | Frequency: 1 Time (May 2026)]**

```javascript
function reverseString(s) {
    return s.split('').reverse().join('');
}
function replaceVowels(s) {
    return s.replace(/[aeiou]/gi, '*');
}
function isPalindrome(s) {
    var clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

console.log(reverseString("College")); // "egelloC"
console.log(replaceVowels("Engineering")); // "*ng*n**r*ng"
console.log(isPalindrome("Radar")); // true
```
