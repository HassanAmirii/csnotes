# Contributing Guide

Thank you for helping improve this repository. Follow these rules to keep everything clean and consistent.

1. **File format**

- Place your note under the correct level folder: /notes/<your note>.html.
- Add your note link to index.html under the Table of contents section.
- Include author credit in both index.html and inside the note file.

2. **Style**

   - Do not add CSS or JS.
   - Only semantic HTML (`<h1>`, `<p>`, `<ul>`, `<code>`, etc).
   - simple.css is already linked for styling.

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
       < you topic name >
       <a href="notes/<your topic name>.html">Read</a>
       <small>by YourName</small>
     </li>
     ```
   - Inside each note file, include an author line directly under the title of your note:
     ```html
     <p><em>Author: YourName</em></p>
     ```

5. **Commit message**

   - Be descriptive:
     ```
     add:  notes on arrays
     fix: typo in lecture3
     ```

6. **Resources**

   - If you have helpful external references, put them in `/resources` and link from the note or index.

---

Keep it minimal, keep it readable.
