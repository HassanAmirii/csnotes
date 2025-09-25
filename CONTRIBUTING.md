# Contributing Guide

Thank you for helping improve this repository. Follow these rules to keep everything clean and consistent.

1. **File format**

   - All notes must be `.html` files.
   - Place them under the `/notes` directory.

2. **Style**

   - Do not add CSS or JS.
   - Only semantic HTML (`<h1>`, `<p>`, `<ul>`, `<code>`, etc).
   - Water.css is already linked for styling.

3. **Navigation**

   - At the **top** of each note, add:
     ```html
     <p><a href="../index.html">← Back to Home</a></p>
     ```
   - Ensure filenames are descriptive and lowercase with hyphens.

4. **Index linking**

   - Add your note link to `index.html` in the correct order:
     ```html
     <li>
       Day 2 – Lecture 4: Arrays <a href="notes/day2-arrays.html">Read</a>
     </li>
     ```

5. **Commit message**

   - Be descriptive:
     ```
     add: day2 lecture4 notes on arrays
     fix: typo in lecture3
     ```

6. **Resources**

   - If you have helpful external references, put them in `/resources` and link from the note or index.

7. **Author credit**
   - please give yourself credit !
   - In `index.html`, every note entry must include contributor credit in this form:
     ```html
     <li>
       Day 2 – Lecture 2: Data Types
       <a href="notes/day2-datatypes.html">Read</a>
       <small>by ContributorName</small>
     </li>
     ```
   - Inside each note file, include an author line directly under the title:
     ```html
     <p><em>Author: ContributorName</em></p>
     ```

---

Keep it minimal, keep it readable.
