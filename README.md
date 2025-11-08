# 🗓️ Day of the Week Finder

A simple JavaScript project that allows users to find the **day of the week** for any given date.  
It demonstrates the use of JavaScript’s built-in `Date` object and basic DOM manipulation.

---

## 🚀 Features
- Enter any date to instantly find the day of the week.
- Displays results dynamically without reloading the page.
- Simple and responsive user interface.
- Lightweight and beginner-friendly code.

---

## 🧠 How It Works
1. The user inputs a date in the provided field.  
2. JavaScript takes the input and creates a new `Date` object.  
3. Using the `getDay()` method, it determines which day (0–6) the date corresponds to.  
4. The script maps that number to a weekday name (e.g., Sunday, Monday, etc.).  
5. The result is displayed on the webpage.

---

## 💻 Example Code
```javascript
function findDayOfWeek() {
  const dateInput = document.getElementById("dateInput").value;
  const date = new Date(dateInput);

  if (isNaN(date)) {
    document.getElementById("result").textContent = "Please enter a valid date.";
    return;
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[date.getDay()];
  
  document.getElementById("result").textContent = `That day is a ${dayName}.`;
}
