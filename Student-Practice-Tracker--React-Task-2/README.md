# Student Practice Tracker – React

A simple React application developed as part of **React Day 2 Practice** to understand the fundamentals of **Components, JSX, Props, State, and Lifecycle using `useState` and `useEffect`**.

## 📌 Project Overview

The **Student Practice Tracker** displays student information and keeps track of the number of completed practice sessions.

The application demonstrates:

- React Components
- JSX
- Props
- State using `useState`
- Side effects using `useEffect`
- Component mounting
- Component updating
- Component unmounting
- Effect cleanup
- Conditional rendering

## ✨ Features

- Displays **Student Management System** header
- Displays student details:
  - Name: Anu
  - Department: CSE
  - Year: 3rd Year
- Tracks completed practice sessions
- **Complete Practice** button increases the count
- **Reset** button resets the count to 0
- **Show/Hide Profile** button controls the StudentProfile component
- Browser title updates according to the practice count
- Effect cleanup restores the previous document title
- Practice count is preserved even when the profile is hidden

## 🛠️ Technologies Used

- React
- JavaScript
- JSX
- Vite
- HTML
- CSS

## 📂 Project Structure

```text
student-practice-tracker/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StudentProfile.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Open the project

```bash
cd student-practice-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

## 🧩 Components

### Header

The `Header` component displays the main heading:

```text
Student Management System
```

### StudentProfile

The `StudentProfile` component receives student information and practice count through props.

It displays:

```text
Name: Anu
Department: CSE
Year: 3rd Year
Practice Sessions Completed: 0
```

It also uses `useEffect` to update the browser title whenever the practice count changes.

### Footer

The `Footer` component displays:

```text
© 2026 Student Management System
```

## 🔄 Props

Props are used to pass data from the parent component (`App`) to the child component (`StudentProfile`).

Example:

```jsx
<StudentProfile
  name="Anu"
  department="CSE"
  year="3rd Year"
  practiceCount={practiceCount}
/>
```

## 🔢 State

The practice count is stored as state in `App.jsx`:

```jsx
const [practiceCount, setPracticeCount] = useState(0);
```

The initial value is `0`.

When the user clicks **Complete Practice**:

```jsx
setPracticeCount(practiceCount + 1);
```

The count increases by one.

When the user clicks **Reset**:

```jsx
setPracticeCount(0);
```

The count returns to zero.

The count is maintained in `App.jsx`, so hiding the profile does not reset the value.

## ⚡ useEffect and Lifecycle

`StudentProfile` uses `useEffect`:

```jsx
useEffect(() => {
  const previousTitle = document.title;

  document.title = `Practice Sessions: ${practiceCount}`;

  return () => {
    document.title = previousTitle;
  };
}, [practiceCount]);
```

### Mounting

When `StudentProfile` first appears, the effect runs and changes the browser title to:

```text
Practice Sessions: 0
```

### Updating

Whenever `practiceCount` changes, the effect runs again.

For example:

```text
Practice Sessions: 0
        ↓
Complete Practice
        ↓
Practice Sessions: 1
```

The dependency array:

```jsx
[practiceCount]
```

causes the effect to run whenever the practice count changes.

### Unmounting

When the user clicks **Hide Profile**, the `StudentProfile` component is removed from the page.

The cleanup function runs:

```jsx
return () => {
  document.title = previousTitle;
};
```

This restores the previous browser title.

## 🧪 Testing

The following actions were tested:

| Action | Expected Result |
|---|---|
| Initial page load | Practice count = 0 |
| Click Complete Practice | Count increases by 1 |
| Click Complete Practice twice | Count becomes 2 |
| Click Reset | Count becomes 0 |
| Click Hide Profile | Student profile disappears |
| Click Show Profile | Student profile appears again |
| Hide and Show Profile | Practice count is preserved |

## 🎯 Learning Outcomes

This project helps understand:

1. Creating reusable React components
2. Writing JSX
3. Passing data using props
4. Managing data using state
5. Updating state using setter functions
6. Using `useEffect`
7. Understanding component lifecycle
8. Understanding conditional rendering
9. Understanding effect cleanup
10. Preserving state in a parent component

## 👨‍💻 Author

**Thaanumalian**

GitHub: `thaanumalian24bcs295-code`

Email: `thaanumalian24bcs295@gmail.com`

---

## 📄 Task Information

**Task:** React Day 2 – Basics, Components, JSX, Props, State and Lifecycle

**Project:** Student Practice Tracker

**Year:** 2026