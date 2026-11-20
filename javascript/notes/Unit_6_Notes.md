# 📚 Unit 6: BOM, Windows, Forms & Location (SPPU End-Sem Model Answers)
**Subject:** JavaScript (Elective - III) | **Course:** B.E. E&TC / Electronics (2019 Pattern)  
**Standard Exam Weightage:** 6 Marks per question | **Target:** 6/6 Marks in SPPU End Semester Exam.

---

## 📑 Index of Questions Covered

1. [Q1. Simple Calculator Program (Add, Sub, Mul, Div, Square) (Repeated 7 times)](#q1-simple-calculator-program-add-sub-mul-div-square)
2. [Q2. Controlling Windows & Window Features (open, close, resize) (Repeated 7 times)](#q2-controlling-windows--window-features-open-close-resize)
3. [Q3. Student Information Form with Full Validations (Name, Phone, Email) (Repeated 6 times)](#q3-student-information-form-with-full-validations-name-phone-email)
4. [Q4. Frames in HTML and JavaScript (Tags & Properties) (Repeated 6 times)](#q4-frames-in-html-and-javascript-tags--properties)
5. [Q5. Popular Windows Events (List and Explain) (Repeated 4 times)](#q5-popular-windows-events-list-and-explain)
6. [Q6. Form Handling Concepts (Fields, Dynamic Forms & Usability) (Repeated 4 times)](#q6-form-handling-concepts-fields-dynamic-forms--usability)
7. [Q7. Location Object Properties and Methods (Repeated 3 times)](#q7-location-object-properties-and-methods)
8. [Q8. alert() and confirm() Methods of Window Object (Repeated 2 times)](#q8-alert-and-confirm-methods-of-window-object)
9. [Q9. Browser Object Model (BOM) with Hierarchy Diagram (Repeated 2 times)](#q9-browser-object-model-bom-with-hierarchy-diagram)

---

## Q1. Simple Calculator Program (Add, Sub, Mul, Div, Square)
**[Marks: 6 | Frequency: 7 Times (Nov 2022, May 2023, Nov 2023, Nov 2024, May 2025, Nov 2025, May 2026)]**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>
    <h2>JavaScript Calculator</h2>
    <input type="number" id="num1" placeholder="Number 1"><br><br>
    <input type="number" id="num2" placeholder="Number 2"><br><br>

    <button onclick="calculate('+')">+</button>
    <button onclick="calculate('-')">-</button>
    <button onclick="calculate('*')">*</button>
    <button onclick="calculate('/')">/</button>
    <button onclick="calculate('sq')">Square</button>

    <h3 id="res">Result: </h3>

    <script>
        function calculate(op) {
            var n1 = parseFloat(document.getElementById("num1").value);
            var n2 = parseFloat(document.getElementById("num2").value);
            var out = document.getElementById("res");

            if (isNaN(n1)) { out.innerHTML = "Please enter Number 1!"; return; }

            switch(op) {
                case '+': out.innerHTML = "Result: " + (n1 + n2); break;
                case '-': out.innerHTML = "Result: " + (n1 - n2); break;
                case '*': out.innerHTML = "Result: " + (n1 * n2); break;
                case '/': 
                    if (n2 === 0) out.innerHTML = "Cannot divide by 0!";
                    else out.innerHTML = "Result: " + (n1 / n2).toFixed(2);
                    break;
                case 'sq': out.innerHTML = "Square: " + (n1 * n1); break;
            }
        }
    </script>
</body>
</html>
```

---

## Q2. Controlling Windows & Window Features (open, close, resize)
**[Marks: 6 | Frequency: 7 Times]**

### 1. Controlling Window
Using JavaScript's `window` object to programmatically open, move, resize, and close browser windows without manual user intervention.

### 2. Methods & Window Features Table
* `window.open(url, target, features)`: Opens popup/new tab.
* `window.close()`: Closes window.
* `window.resizeTo(w, h)`: Resizes viewport.
* `window.moveTo(x, y)`: Repositions window.
* **Features String:** `"width=500,height=400,top=100,left=100,resizable=yes,scrollbars=yes"`

---

## Q3. Student Information Form with Full Validations (Name, Phone, Email)
**[Marks: 6 | Frequency: 6 Times (Nov 2022, May 2023, Nov 2023, May 2025, Nov 2025, May 2026)]**

```javascript
function validateStudentForm() {
    var name = document.forms["studForm"]["fullName"].value.trim();
    var phone = document.forms["studForm"]["phone"].value.trim();
    var email = document.forms["studForm"]["email"].value.trim();

    // 1. Name: Min 3 alphabets
    if (!/^[A-Za-z\s]{3,}$/.test(name)) {
        alert("Enter valid name (min 3 letters)");
        return false;
    }

    // 2. Mobile: 10 digits starting with 6,7,8,9
    if (!/^[6-9]\d{9}$/.test(phone)) {
        alert("Enter valid 10-digit mobile number starting with 6-9");
        return false;
    }

    // 3. Email: user@domain.ext
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Enter valid email ID");
        return false;
    }

    return true; // Validated successfully
}
```

---

## Q4. Frames in HTML and JavaScript (Tags & Properties)
**[Marks: 6 | Frequency: 6 Times]**

* `<frameset cols="50%,50%">`: Replaces `<body>` to split window into layout grid.
* `<frame src="page.html">`: Displays sub-document inside frameset.
* `<iframe src="page.html" width="400" height="300">`: Inline frame inside standard body.
* **JavaScript Frame Access:**
  ```javascript
  var frame = document.getElementById("myIframe");
  frame.src = "new_page.html";
  frame.contentWindow.document.body.style.backgroundColor = "yellow";
  ```

---

## Q5. Popular Windows Events (List and Explain)
**[Marks: 6 | Frequency: 4 Times]**

* `onload`: Entire page, images, and styles finish loading.
* `onunload`: User navigates away or closes tab.
* `onbeforeunload`: Prompts user before leaving unsaved form data.
* `onresize`: Browser window size changes.
* `onscroll`: Viewport scrolls.
* `onerror`: Unhandled JavaScript error occurs.

---

## Q6. Form Handling Concepts (Fields, Dynamic Forms & Usability)
**[Marks: 6 | Frequency: 4 Times]**

1. **Form Fields:** Interactive inputs (`text`, `radio`, `checkbox`, `select`).
2. **Validations:** Preventing empty or corrupt data before submission.
3. **Dynamic Forms:** Changing form elements conditionally (e.g. revealing credit card fields only when "Card" payment is chosen).
4. **Form Usability:** Autofocus, inline error hints, disable repeat submits.

---

## Q7. Location Object Properties and Methods
**[Marks: 5 | Frequency: 3 Times]**

For URL: `https://www.sppu.ac.in:8080/exams/timetable.html?year=2026#results`
* `location.href`: Complete URL string.
* `location.hostname`: `"www.sppu.ac.in"`.
* `location.port`: `"8080"`.
* `location.pathname`: `"/exams/timetable.html"`.
* `location.search`: `"?year=2026"`.
* `location.hash`: `"#results"`.
* **Methods:** `location.assign(url)` (navigates), `location.replace(url)` (replaces history), `location.reload()` (refreshes).

---

## Q8. alert() and confirm() Methods of Window Object
**[Marks: 6 | Frequency: 2 Times]**

| Parameter | `alert(msg)` | `confirm(msg)` |
| :--- | :--- | :--- |
| **Purpose** | Informational notification | Asks for user decision |
| **Buttons** | Single `[ OK ]` | `[ OK ]` and `[ Cancel ]` |
| **Return** | `undefined` | `true` (OK) or `false` (Cancel) |

---

## Q9. Browser Object Model (BOM) with Hierarchy Diagram
**[Marks: 6 | Frequency: 2 Times]**

```
                     [ window ] (Top Object)
                          |
    +--------------+------+-------+--------------+
    |              |              |              |
[document]    [history]      [location]    [navigator]
```
* `window`: Root browser tab environment.
* `document`: DOM document representation.
* `history`: Browser history stack.
* `location`: Active URL handling.
* `navigator`: Browser name, version, and device capabilities.
