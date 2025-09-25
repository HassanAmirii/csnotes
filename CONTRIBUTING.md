# Contributing Guide

Thank you for helping improve this repository. Follow these rules to keep everything clean and consistent.

1. **File format**

- Place your note under the correct level folder: /notes/100-level, /notes/200-level, etc.
- Add your note link to index.html under the corresponding level section.
- Include author credit in both index.html and inside the note file.

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

4. **Index linking & Author credit**

   - Add your note link to `index.html` in the correct order and include your name for credit:
     ```html
     <li>
       Day 2 – Lecture 4: Arrays
       <a href="notes/day2-arrays.html">Read</a>
       <small>by YourName</small>
     </li>
     ```
   - Inside each note file, include an author line directly under the title:
     ```html
     <p><em>Author: YourName</em></p>
     ```

5. **Commit message**

   - Be descriptive:
     ```
     add: day2 lecture4 notes on arrays
     fix: typo in lecture3
     ```

6. **Resources**

   - If you have helpful external references, put them in `/resources` and link from the note or index.

---

Keep it minimal, keep it readable.
