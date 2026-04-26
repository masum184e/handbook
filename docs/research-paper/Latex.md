## Document Class
```tex
\documentclass{thesisclass}
```
- This defines the type of document you’re creating.
- It controls formatting like:
    - font size and style
    - margins
    - chapter/section formatting
- **If LaTeX can’t find this file, you’ll get an error.**

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

Other common document classes

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
- Everything before this is setup (preamble).
- Everything after this is what appears in your output PDF.

**Empty document**

```tex
\documentclass{article}

\begin{document}

Your content goes here

\end{document}
```
- An empty file give *No PDF* error, so try to keep something in it.
