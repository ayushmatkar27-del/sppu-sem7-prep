# 📚 Unit 5: Document Object Model & Event Handling (SPPU End-Sem Model Answers)
**Subject:** JavaScript (Elective - III) | **Course:** B.E. E&TC / Electronics (2019 Pattern)  
**Standard Exam Weightage:** 6 Marks per question | **Target:** 6/6 Marks in SPPU End Semester Exam.

---

## 📑 Index of Questions Covered

1. [Q1. Explain Event and Event Handler with an example. What is the role of Event Handlers in JavaScript? (Repeated 8/8 times - 100%)](#q1-explain-event-and-event-handler-with-an-example-what-is-the-role-of-event-handlers-in-javascript)
2. [Q2. Describe Netscape 4 Event Model in detail. (Repeated 4 times)](#q2-describe-netscape-4-event-model-in-detail)
3. [Q3. Define JavaScript Object Model and explain four distinct object models used in JavaScript. (Repeated 4 times)](#q3-define-javascript-object-model-and-explain-four-distinct-object-models-used-in-javascript)
4. [Q4. Write a JavaScript program to create a Home page of any website and change background color using onmouseover & onfocus events. (Repeated 4 times)](#q4-write-a-javascript-program-to-create-a-home-page-of-any-website-and-change-background-color-using-onmouseover--onfocus-events)
5. [Q5. Describe Document properties and methods with their HTML relationship. (Repeated 4 times)](#q5-describe-document-properties-and-methods-with-their-html-relationship)
6. [Q6. Differentiate between HTML and DHTML. (Repeated 4 times)](#q6-differentiate-between-html-and-dhtml)
7. [Q7. Explain DOM and CSS Elements with example. Write short note on DOM and HTML Elements. (Repeated 4 times)](#q7-explain-dom-and-css-elements-with-example-write-short-note-on-dom-and-html-elements)
8. [Q8. List different DOM methods used for accessing elements. Explain any two with suitable example. (Repeated 3 times)](#q8-list-different-dom-methods-used-for-accessing-elements-explain-any-two-with-suitable-example)
9. [Q9. Describe how to create, insert and append nodes in DOM with an example program. (Repeated 3 times)](#q9-describe-how-to-create-insert-and-append-nodes-in-dom-with-an-example-program)
10. [Q10. Describe different Event Model Issues in JavaScript (Cross-Browser Compatibility). (Repeated 3 times)](#q10-describe-different-event-model-issues-in-javascript-cross-browser-compatibility)
11. [Q11. Explain DOM Level 2 Event Model (Event Flow: Capturing Phase & Bubbling Phase). (1 time)](#q11-explain-dom-level-2-event-model-event-flow-capturing-phase--bubbling-phase)

---

## Q1. Explain Event and Event Handler with an example. What is the role of Event Handlers in JavaScript?
**[Marks: 6 | Frequency: 8/8 Times (100% Guaranteed)]**

### 1. Definitions (2 Marks)
* **Event:** An occurrence in the browser window initiated by the user (clicking, mouse hovering, keypress) or browser system (page load, error).
* **Event Handler:** A JavaScript function written to react to an event when it occurs.
* **Role:** Acts as the bridge between static HTML elements and interactive JavaScript functions.

### 2. Working Program (4 Marks)
```html
<button id="myBtn">Click or Hover Me</button>
<p id="msg"></p>

<script>
    var btn = document.getElementById("myBtn");
    
    // Click event handler
    btn.addEventListener("click", function(e) {
        document.getElementById("msg").innerHTML = "Button clicked! Event type: " + e.type;
    });

    // Mouseover event handler
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "blue";
        btn.style.color = "white";
    });
</script>
```

---

## Q2. Describe Netscape 4 Event Model in detail.
**[Marks: 6 | Frequency: 4 Times (May 2024, Nov 2024, May 2025, Nov 2025)]**

### 1. Concept: Top-Down Event Capturing (3 Marks)
* In Netscape 4, events originate at the highest level (`window` or `document`) and travel **DOWNWARDS** to the target element. This is called **Event Capturing (Trickling)**.
* Parent elements can intercept events before their children receive them.

### 2. Methods Used (3 Marks)
* `window.captureEvents(Event.CLICK)`: Intercepts clicks at window level.
* `window.routeEvent(e)`: Passes event down to the lower target element.
* `window.releaseEvents(Event.CLICK)`: Releases interception.

---

## Q3. Define JavaScript Object Model and explain four distinct object models used in JavaScript.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

1. **Core Object Model:** Standard built-ins (`Object, Array, Function, Math, Date, RegExp`).
2. **Browser Object Model (BOM):** Browser window representations (`window, location, history, navigator`).
3. **DOM Level 0 (Legacy DOM):** Array-based element collections (`document.forms[], document.images[]`).
4. **W3C DOM Level 1, 2, 3:** Standard Node tree with hierarchical traversal and manipulation APIs (`getElementById, querySelector`).

---

## Q4. Program: Change Background Color using onmouseover & onfocus.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

```html
<button onmouseover="document.body.style.backgroundColor='lightblue'"
        onmouseout="document.body.style.backgroundColor='white'">
    Hover for Blue Background
</button>

<input type="text" placeholder="Click to focus..."
       onfocus="document.body.style.backgroundColor='lightyellow'"
       onblur="document.body.style.backgroundColor='white'">
```

---

## Q5. Describe Document properties and methods with their HTML relationship.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

* **Properties:**
  - `document.title`: Matches `<title>`.
  - `document.body`: Matches `<body>`.
  - `document.forms`: Array of `<form>` tags.
  - `document.images`: Array of `<img>` tags.
* **Methods:**
  - `getElementById(id)`: Selects by unique ID.
  - `createElement(tag)`: Creates dynamic HTML element node.
  - `appendChild(node)`: Attaches element into DOM tree.

---

## Q6. Differentiate between HTML and DHTML.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

| Parameter | HTML | DHTML |
| :--- | :--- | :--- |
| **Nature** | Static markup language | Combination of HTML + CSS + JS + DOM |
| **Interactivity** | None; static pages | High; responds to user actions in real-time |
| **Server Load** | Higher (reloads entire page for changes) | Lower (updates client-side without page reload) |
| **Animations** | No animation support | Supports dropdowns, tickers, sliders |

---

## Q7. Explain DOM and CSS Elements with example.
**[Marks: 6 | Frequency: 4 Times]**

JavaScript DOM exposes the `element.style` object where CSS properties are written in **camelCase**:
* `background-color` &rarr; `element.style.backgroundColor`
* `font-size` &rarr; `element.style.fontSize`
* `display` &rarr; `element.style.display = 'none'` (hides element)

---

## Q8. List different DOM methods used for accessing elements.
**[Marks: 6 | Frequency: 3 Times (Nov 2024, May 2025, Nov 2025)]**

1. `document.getElementById("id")`: Single element by ID.
2. `document.getElementsByClassName("cls")`: HTMLCollection by class.
3. `document.getElementsByTagName("p")`: HTMLCollection by tag name.
4. `document.querySelector(".cls")`: First element matching CSS selector.
5. `document.querySelectorAll(".cls")`: NodeList of all matching elements.

---

## Q9. Describe how to create, insert and append nodes in DOM.
**[Marks: 6 | Frequency: 3 Times (Nov 2024, May 2025, Nov 2025)]**

```javascript
// Step 1: Create element node
var li = document.createElement("li");

// Step 2: Create text node
var text = document.createTextNode("JavaScript Elective III");

// Step 3: Append text to element
li.appendChild(text);

// Step 4: Append element to parent list
document.getElementById("myList").appendChild(li);
```

---

## Q10. Describe different Event Model Issues in JavaScript.
**[Marks: 6 | Frequency: 3 Times (Nov 2024, May 2025, Nov 2025)]**

| Parameter | W3C Standard | Legacy IE (<= IE 8) |
| :--- | :--- | :--- |
| Event Registration | `addEventListener("click", fn)` | `attachEvent("onclick", fn)` |
| Event Object | Passed as parameter `fn(e)` | Global `window.event` |
| Target Element | `e.target` | `e.srcElement` |
| Stop Bubbling | `e.stopPropagation()` | `e.cancelBubble = true` |
| Prevent Default | `e.preventDefault()` | `e.returnValue = false` |

---

## Q11. Explain DOM Level 2 Event Model (Capturing & Bubbling).
**[Marks: 6 | Frequency: 1 Time (May 2024)]**

W3C DOM Level 2 defines a 3-phase flow:
1. **Capturing Phase:** Downward from `window` to target parent.
2. **Target Phase:** Executed on the clicked target.
3. **Bubbling Phase:** Upward from target back up to `window`.
`element.addEventListener("click", handler, false);` &rarr; `false` listens in Bubbling phase, `true` in Capturing phase.
