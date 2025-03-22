# Contents

- [Introduction](#introduction)

# Introduction

## Syntax

- R is case sensitive
- `<-` or `=` is used to assign value
- `#` is used to make comment
- `c()` is used to create vector(array) and `[]` is use for indexing

## Data Types

- Common data structures are integer, numberic, charecter, boolean, vector
- two dimensional array created with `matrix()` as well as `data.frame()`
  ```R
  mat <- matrix(1:6, nrow = 2, ncol = 3)
  print(mat)
  ```
  ```R
  df <- data.frame(Name = c("Alice", "Bob"), Age = c(25, 30))
  print(df)
  ```
- list can hold element of different type and `[[]]` is used for accessing element
  ```R
  lst <- list(1, "Hello", TRUE)
  print(lst)
  ```
- factor is used to represent categorical data
  ```R
  cat <- factor(c("Low", "Medium", "High"))
  print(cat)
  ```
- `Inf` represnt Infinity

# Data Structure

## Vectors

## Lists

## Matrices

## Data frames

## Factors

# Data Import and Export
