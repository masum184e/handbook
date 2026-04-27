## Document Class

```tex
\documentclass{thesisclass}
```

* This defines the type of document you’re creating.
* It controls formatting like:

  * font size and style
  * margins
  * spacing
  * chapter/section formatting
* **If LaTeX can’t find this file, you’ll get an error.**
* `thesisclass` is usually a **custom class file** (`thesisclass.cls`) provided by your university or supervisor.

### Article

The `article` class is used for short, structured documents, such as:

* essays
* reports (short ones)
* assignments
* research papers (without chapters)

**What it controls**

By choosing `article`, LaTeX automatically decides things like:

* default font size and layout
* how titles and sections look
* numbering style
* page formatting

**Structure in article**

It supports:

* `\section{}`
* `\subsection{}`
* `\subsubsection{}`

But it does NOT support chapters. If you try:

```tex
\chapter{...}
```

it will give an error.

### Other common document classes

Here’s how `article` compares:

* `article` → short documents (no chapters)
* `report` → longer documents (has chapters)
* `book` → very large documents (books, theses with chapters)
* `beamer` → presentations (slides)

## Begin Document

```tex
\begin{document}
```

* This marks the start of the actual content.
* Everything before this is setup (called the **preamble**).
* Everything after this is what appears in your output PDF.

## End Document

```tex
\end{document}
```

* This marks the end of your document.
* Anything written after this will be ignored by LaTeX.

## Minimal Working Example (MWE)

```tex
\documentclass{article}

\begin{document}

Your content goes here

\end{document}
```

* This is the smallest valid LaTeX document.
* If your file is completely empty, LaTeX may fail to generate a PDF.

## Sections and Numbering

* `\section{}` → creates a numbered section (e.g., 1, 2, 3)
* `\section*{}` → creates an unnumbered section

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

* Produces:

  1. First item
  2. Second item

### Bullet List (itemize)

```tex
\begin{itemize}
    \item First point
    \item Second point
\end{itemize}
```

* Produces:

  * First point
  * Second point

## Key Notes

* `\section*{}` → removes automatic numbering (avoids unwanted numbering like 0.1)
* `enumerate` → gives ordered numbering (1, 2, 3)
* `itemize` → gives bullet points
* Always ensure environments are properly closed:

  ```tex
  \begin{...}
  \end{...}
  ```
