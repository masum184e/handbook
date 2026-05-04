## Document Class

```tex
\documentclass{thesisclass}
```

- This defines the type of document you’re creating.
- It controls formatting like:
  - font size and style
  - margins
  - spacing
  - chapter/section formatting

- **If LaTeX can’t find this file, you’ll get an error.**
- `thesisclass` is usually a **custom class file** (`thesisclass.cls`) provided by your university or supervisor.

### Article

The `article` class is used for short, structured documents, such as:

- essays
- reports (short ones)
- assignments
- research papers (without chapters)

**What it controls**

By choosing `article`, LaTeX automatically decides things like:

- default font size and layout
- how titles and sections look
- numbering style
- page formatting

**Structure in article**

It supports:

- `\section{}`
- `\subsection{}`
- `\subsubsection{}`

But it does NOT support chapters. If you try:

```tex
\chapter{...}
```

it will give an error.

### Other common document classes

Here’s how `article` compares:

- `article` → short documents (no chapters)
- `report` → longer documents (has chapters)
- `book` → very large documents (books, theses with chapters)
- `beamer` → presentations (slides)

## Begin Document

```tex
\begin{document}
```

- This marks the start of the actual content.
- Everything before this is setup (called the **preamble**).
- Everything after this is what appears in your output PDF.

## End Document

```tex
\end{document}
```

- This marks the end of your document.
- Anything written after this will be ignored by LaTeX.

## Minimal Working Example (MWE)

```tex
\documentclass{article}

\begin{document}

Your content goes here

\end{document}
```

- This is the smallest valid LaTeX document.
- If your file is completely empty, LaTeX may fail to generate a PDF.

## Sections and Numbering

- `\section{}` → creates a numbered section (e.g., 1, 2, 3)
- `\section*{}` → creates an unnumbered section

Example:

```tex
\section{Introduction}
\section*{Acknowledgment}
```

## Lists in LaTeX

### Numbered List (enumerate)

```tex
\begin{enumerate}
    \item First item
    \item Second item
\end{enumerate}
```

- Produces:
  1. First item
  2. Second item

### Bullet List (itemize)

```tex
\begin{itemize}
    \item First point
    \item Second point
\end{itemize}
```

- Produces:
  - First point
  - Second point

### Key Notes

- `\section*{}` → removes automatic numbering (avoids unwanted numbering like 0.1)
- `enumerate` → gives ordered numbering (1, 2, 3)
- `itemize` → gives bullet points
- Always ensure environments are properly closed:

  ```tex
  \begin{...}
  \end{...}
  ```

## Citation

### Common Citation Styles

1. **APA (American Psychological Association)**
   - Widely used in social sciences
   - In-text: (Author, Year)
   - Example: (Smith, 2020)
2. **MLA (Modern Language Association)**
   - Used in humanities
   - In-text: (Author Page)
   - Example: (Smith 23)
3. **Chicago Style**
    Two variants:
    - Author-Date → (Smith 2020)
    - Notes & Bibliography → footnotes
4. **IEEE (Institute of Electrical and Electronics Engineers)**
   - Used in engineering, CS
   - Numeric style: [1], [2]
   - References ordered by appearance
5. **Vancouver**
   - Similar to IEEE (numeric)
   - Common in medical research
6. **Harvard**
   - Author-date style like APA
   - Example: (Smith, 2020)
7. **AMA (American Medical Association)**
   - Numeric superscript style
   - Example: ¹
8. **ACS (American Chemical Society)**
   - Multiple formats:
   - Numeric
   - Author-date

### Using BibTeX

1. Create a `.bib` file  
   Make a file like `references.bib`

    ```bibtex
    @article{einstein1905,
      author  = {Albert Einstein},
      title   = {On the Electrodynamics of Moving Bodies},
      journal = {Annalen der Physik},
      year    = {1905}
    }
    ```

2. Add bibliography style in your `.tex`

    Place this near the end of your document:

    ```tex
    \bibliographystyle{plain}  % or IEEEtran, apalike, etc.
    \bibliography{references}
    ```

3. Cite inside your text

    ```tex
    This theory was proposed by Einstein \cite{einstein1905}.
    ```

4. Compile correctly

    BibTeX requires a multi-step compilation:

      1. `pdflatex file.tex`
      2. `bibtex file`
      3. `pdflatex file.tex`
      4. `pdflatex file.tex`

5. Output

    - Citation appears like: [1]
    - Reference list generated automatically

### Using BibLaTeX

1. Add package in preamble

    ```tex
    \usepackage[backend=biber,style=apa]{biblatex}
    \addbibresource{references.bib}
    ```

    Chaange styles easily

    | Style     | Config                     |
    | --------- | -------------------------- |
    | APA       | `style=apa`                |
    | MLA       | `style=mla`                |
    | Chicago   | `style=chicago-authordate` |
    | IEEE      | `style=ieee`               |
    | Harvard   | `style=authoryear`         |
    | Vancouver | `style=numeric`            |
    | AMA       | `style=numeric-comp`       |


2. Create the same `.bib` file
3. Cite in text

    ```
    Einstein introduced relativity \cite{einstein1905}.
    \textcite{einstein1905}   % Einstein (1905)
    \parencite{einstein1905}  % (Einstein, 1905)
    ```

4. Print bibliography

    ```tex
    \printbibliography
    ```

### Choosing citation styles

**Numeric style (IEEE-like)**

```tex
\usepackage[style=numeric]{biblatex}
```

Output: [1]

**Author-year (APA-like)**

```tex
\usepackage[style=authoryear]{biblatex}
```

Output: `(Einstein, 1905)`

### Common citation commands

| Command           | Output                |
| ----------------- | --------------------- |
| `\cite{key}`      | [1] or (Author, Year) |
| `\textcite{key}`  | Author (Year)         |
| `\parencite{key}` | (Author, Year)        |
