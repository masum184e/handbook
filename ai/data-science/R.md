# Contents

- [Introduction](#introduction)
  - [Syntax](#syntax)
  - [Data Types](#data-types)
- [Data Structure](#data-structure)
  - [Vectors](#vectors)
  - [Lists](#lists)
  - [Matrices](#matrices)
  - [Data frames](#data-frames)
  - [Factors](#factors)
- [Data Import and Export](#data-import-and-export)
  - [Reading Data](#reading-data)
  - [Writting Data](#writting-data)
  - [MySQL Database Connection](#mysql-database-connection)
- [Data Manipulation](#data-manipulation)
  - [Inspecting](#inspecting)
  - [Subsetting](#subsetting)
  - [Applying Functions](#applying-functions)
- [Data Visualization](#data-visualization)
  - [Plotting](#plotting)
  - [Subplot](#subplot)
  - [Saving Plots](#saving-plots)
  - [Advanced Visualization with `ggplot2`](#advanced-visualization-with-ggplot2)
- [Programming](#programming)
  - [Debugging](#debugging)
  - [Error Handling](#error-handling)

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

A vector in R is a one-dimensional data structure that holds elements of the same data type. It is the most basic and commonly used data structure in R.

1. `vec <- c(1.5, 2.3, 3.7, 4.8)` - Creates vector.
2. `arth_ops <- vec1 +-*/ vec2` - Perform Arithmetic operator.
3. `vec[1]` - return first element(1.5)
4. `vec[c(2, 4)` - second and fourth element(2.3, 4.8)
5. `vec[vec > 3]` - element greater than 3(3.7, 4.8)
6. `length(vec)`, `sum(vec)`, `mean(vec)`, `max(vec)`, `min(vec)` - some common function
7. `sort(vec, decreasing = TRUE)` - sort in decreasing order.

### Vector Recycling

If two vectors of different lengths are used in an operation, R repeats the shorter vector to match the length.

```r
vec1 <- c(1, 2, 3, 4)
vec2 <- c(10, 20)  # Shorter vector

result <- vec1 + vec2  # vec2 will repeat as (10, 20, 10, 20)
print(result)  # [1] 11 22 13 24
```

## Lists

A list in R is a heterogeneous data structure that can hold elements of different data types (such as numbers, characters, vectors, matrices, and even other lists). Unlike vectors, which must contain elements of the same type, lists can store different types of data.

1. `list()` function is used to create list
   ```r
   # Creating a list with different data types
   my_list <- list(
     name = "Alice",       # Character
     age = 25,            # Numeric
     scores = c(90, 85, 88), # Numeric Vector
     passed = TRUE        # Logical
   )
   ```
2. Accessing

   ```r
   # Access by index
   print(my_list[[1]])   # Output: "Alice"

   # Access by name
   print(my_list$age)    # Output: 25

   # Access vector element inside list
   print(my_list$scores[2])  # Output: 85
   ```

3. Add OR Remove new element

   ```r
   # Add a new element (City)
   my_list$city <- "New York"

   # Remove an element (Passed status)
   my_list$passed <- NULL
   ```

4. `length(my_list)` - return length of the list
5. `merged_list <- c(list1, list2)` - merge two list
6. `vec_from_list <- unlist(my_list$scores)` - convert list to a vector

## Matrices

A matrix in R is a two-dimensional data structure that stores elements of the same data type (numeric, character, or logical). It consists of rows and columns and is useful for mathematical operations.

### Creation

**Syntax:**

```r
matrix(data, nrow, ncol, byrow = FALSE)
```

- `data`: The vector of values to be placed in the matrix.
- `nrow`: The number of rows.
- `ncol`: The number of columns.
- `byrow`: If TRUE, fills by row; otherwise, fills by column (default).

**Example:**

```r
# Create a 3x3 numeric matrix
mat <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, ncol = 3)
```

### Accessing

```r
# Define a matrix
mat <- matrix(1:9, nrow = 3, ncol = 3)

# Access element at row 2, column 3
print(mat[2, 3])  # Output: 6

# Access entire second row
print(mat[2, ])   # Output: 4 5 6

# Access entire third column
print(mat[, 3])   # Output: 3 6 9
```

1. `result <- mat1 %*% mat2` - Perform matrix multiplication.
2. `t_mat <- t(mat)` - Transpose a Matrix
3. `det_mat <- det(mat)` - Compute determinant
4. `inv_mat <- solve(mat)` - Compute inverse (if determinant ≠ 0)

## Data frames

A Data Frame in R is a two-dimensional table-like data structure that stores heterogeneous data types (numeric, character, logical, etc.) in columns. It is similar to a table in a database or a spreadsheet in Excel.

**Characteristics of Data Frames**

- Stores data in a tabular format (rows and columns).
- Each column can have a different data type (numeric, character, factor, etc.).
- Rows represent observations, and columns represent variables.
- Column names and row names can be assigned.
- Supports indexing and manipulation.

1. A data frame is created using the `data.frame()` function.
   ```r
   # Creating a simple data frame
   df <- data.frame(
     Name = c("Alice", "Bob", "Charlie"),  # Character column
     Age = c(25, 30, 35),                  # Numeric column
     Passed = c(TRUE, FALSE, TRUE)         # Logical column
   )
   ```
2. Accessing:

   ```r
   # Access entire column
   print(df$Name)  # Output: "Alice" "Bob" "Charlie"

   # Access specific row and column
   print(df[2, 1])  # Output: "Bob" (Row 2, Column 1)

   # Access entire second row
   print(df[2, ])  # Output: Bob 30 FALSE

   # Access multiple columns
   print(df[, c("Name", "Age")])
   ```

3. `df <- rbind(df, new_row)` - Add a new row.
4. `df <- df[-1, ]` - Remove the first row.
5. `df_sorted <- df[order(df$Age), ]` - Sort data frame by Age in ascending order
6. You can get summary statistics using `summary()`.

## Factors

A factor in R is a data structure used to represent categorical variables, which have a fixed set of possible values, called levels. Factors are used to handle nominal and ordinal data types, such as categories (e.g., "Male", "Female") or ordered categories (e.g., "Low", "Medium", "High").

Factors are particularly useful in statistical modeling because they help R recognize that the data represent categorical values rather than continuous numeric values. They can save memory and provide more efficient data handling, especially when dealing with large datasets.

**Characteristics of Factors**

- **Levels**: A factor has a set of distinct categories called levels. These levels represent the unique values a factor can take.
- **Ordering**: Factors can be either unordered (nominal) or ordered (ordinal). For example, the factor "Low", "Medium", "High" is ordered.

- **Internal Representation**: Factors are internally stored as integer vectors, with each level being an integer and the corresponding category being a string.

### Creation

Syntax:

```r
factor(x, levels = NULL, labels = NULL, ordered = FALSE)
```

- `x`: A vector of categorical data.
- `levels`: The possible levels (categories) of the factor. If not provided, R will automatically infer them.
- `labels`: The names of the levels (optional).
- `ordered`: If `TRUE`, the factor is ordered (ordinal); otherwise, it is unordered (nominal).

**Example:**

```r
color <- factor(c("Red", "Blue", "Green", "Red", "Blue", "Green", "Red"))
```

#### Specifying Levels and Labels

```r
rating <- factor(c("Good", "Bad", "Average", "Good", "Average"),
                 levels = c("Bad", "Average", "Good"),
                 labels = c("Poor", "Fair", "Excellent"))
```

Output:

```r
[1] Excellent Poor    Fair    Excellent Fair
Levels: Poor Fair Excellent
```

#### Creating an Ordered Factor (Ordinal)

```r
size <- factor(c("Medium", "Small", "Large", "Small", "Medium", "Large"),
               levels = c("Small", "Medium", "Large"),
               ordered = TRUE)
```

Output:

```r
[1] Medium Small  Large  Small  Medium Large
Levels: Small < Medium < Large
```

### Accessing

You can access the levels and values of a factor using the `levels()` function and the internal integer representation of the factor.

```r
# Accessing the levels of a factor
levels(size)  # Output: "Small", "Medium", "Large"

# Accessing the underlying integer values
as.integer(size)  # Output: 2 1 3 1 2 3
```

# Data Import and Export

## Reading Data

1. **CSV:**
   ```r
   data <- read.csv("data.csv", header = TRUE, sep = ",")
   ```
   - `header = TRUE`: Ensures the first row is treated as column names.
   - `sep = ","`: Specifies that values are separated by commas.
2. **Excel:**
   R does not have built-in functions to read Excel files, but we can use the `readxl` package.

   Install and Load the readxl Package

   ```r
   install.packages("readxl")  # Install the package (if not installed)
   library(readxl)  # Load the package
   ```

   Read Excel:

   ```r
   data <- read_excel("data.xlsx", sheet = 1)
   ```

   - `sheet = 1`: Specifies which sheet to read (default is the first sheet).

3. **JSON:**
   Install and Load the jsonlite Package
   ```r
   install.packages("jsonlite")  # Install the package
   library(jsonlite)  # Load the package
   ```
   Read JSON:
   ```r
   data <- fromJSON("data.json")
   ```
4. **XML:**
   Install and Load the XML Package

   ```r
   install.packages("XML")  # Install the package
   library(XML)  # Load the package
   ```

   Read XML:

   ```r
   xml_data <- xmlTreeParse("data.xml", useInternalNodes = TRUE)

   # Convert to dataframe
   data <- xmlToDataFrame(nodes = getNodeSet(xml_data, "//employee"))
   ```

   - `xmlTreeParse()`: Parses the XML file.
   - `useInternalNodes = TRUE`: Keeps the XML structure in memory.
   - `getNodeSet(xml_data, "//employee")`: Extracts all <employee> nodes.
   - `xmlToDataFrame()`: Converts XML data into a dataframe.

## Writting Data

1. **CSV:**

   ```r
   # Create a sample dataframe
   data <- data.frame(
     Name = c("John", "Alice", "Bob"),
     Age = c(30, 28, 35),
     Salary = c(50000, 60000, 55000)
   )

   # Write data to CSV file
   write.csv(data, "output.csv", row.names = FALSE)
   ```

- `row.names = FALSE`: Excludes row numbers from the output.
- `write.csv()`: Saves data as a CSV file.

2. **Excel:**
   Install and Load the writexl Package
   ```r
   install.packages("writexl")  # Install the package
   library(writexl)  # Load the package
   ```
   Write Data:
   ```r
   # Write data to an Excel file
   write_xlsx(data, "output.xlsx")
   ```

## MySQL Database Connection

### 1. Setting Up a Connection

To connect R to a MySQL database, we need the RMySQL or DBI package.

**Installing Required Packages**

```r
install.packages("RMySQL")  # Install RMySQL package
install.packages("DBI")     # Install DBI package
```

- `DBI`: Provides a generic database interface.
- `RMySQL`: Allows R to interact with MySQL databases.

### 2. Connecting to MySQL Database

To establish a connection, we need the following information:

- Host: The database server (e.g., "localhost" or an IP address)
- User: MySQL username
- Password: MySQL password
- Database Name: The database to connect to

```r
# Load necessary libraries
library(RMySQL)
library(DBI)

# Establish connection
conn <- dbConnect(RMySQL::MySQL(),
                  dbname = "my_database",
                  host = "localhost",
                  user = "root",
                  password = "your_password")

# Print success message
print("Connected to MySQL database successfully!")
```

### 3. Listing Table

```r
# List all tables in the database
tables <- dbListTables(conn)
```

### 4. Read Data

```r
# Read full table into R dataframe
employee_data <- dbReadTable(conn, "employees")
```

### 5. Read Specific Column

```r
# Run an SQL query
query <- "SELECT Name, Age, Salary FROM employees WHERE Age > 30"

# Execute query and fetch results
result <- dbGetQuery(conn, query)
```

### 6. Write Data

```r
# Create a sample dataframe
new_employees <- data.frame(
  Name = c("David", "Emma"),
  Age = c(27, 31),
  Salary = c(50000, 65000)
)

# Write dataframe to MySQL table
dbWriteTable(conn, "employees", new_employees, append = TRUE, row.names = FALSE)
```

### 7. Update Data

```r
# Define an SQL update query
update_query <- "UPDATE employees SET Salary = 70000 WHERE Name = 'John'"

# Execute the update query
dbExecute(conn, update_query)
```

### 8. Remove Data

```r
# Define delete query
delete_query <- "DELETE FROM employees WHERE Name = 'David'"

# Execute query
dbExecute(conn, delete_query)
```

### 8. Close Connection

```r
# Disconnect from MySQL
dbDisconnect(conn)
```

# Data Manipulation

Subsetting data is a fundamental operation in data manipulation in R, allowing users to extract specific rows, columns, or elements from a dataset. This is useful when working with large datasets and only specific portions of the data are required for analysis.

## Inspecting

| **Pandas Method**                        | **Equivalent R Method**                     | **Explanation**                                                                  |
| ---------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------- |
| `df.info()`                              | `str(df)`                                   | Provides a summary of the dataset including data types and sample values.        |
| `df.head(n)`                             | `head(df, n)`                               | Returns the first `n` rows of the dataset.                                       |
| `df.tail(n)`                             | `tail(df, n)`                               | Returns the last `n` rows of the dataset.                                        |
| `df.shape`                               | `dim(df)`                                   | Returns a tuple with the number of rows and columns.                             |
| `df.describe()`                          | `summary(df)`                               | Generates descriptive statistics such as min, max, mean, median, quartiles, etc. |
| `df.columns`                             | `colnames(df)` or `names(df)`               | Returns column names of the dataframe.                                           |
| `df.index`                               | `rownames(df)`                              | Returns row labels or index names.                                               |
| `df.dtypes`                              | `sapply(df, class)` or `str(df)`            | Returns the data type of each column.                                            |
| `df.isnull()`                            | `is.na(df)`                                 | Returns a boolean matrix indicating missing (`NA`) values.                       |
| `df.notnull()`                           | `!is.na(df)`                                | Returns a boolean matrix indicating non-missing values.                          |
| `df.sum()`                               | `colSums(df, na.rm=TRUE)`                   | Returns the sum of each column.                                                  |
| `df.mean()`                              | `colMeans(df, na.rm=TRUE)`                  | Returns the mean of each column.                                                 |
| `df.median()`                            | `apply(df, 2, median, na.rm=TRUE)`          | Returns the median of each column.                                               |
| `df.std()`                               | `apply(df, 2, sd, na.rm=TRUE)`              | Returns the standard deviation of each column.                                   |
| `df.min()`                               | `apply(df, 2, min, na.rm=TRUE)`             | Returns the minimum value for each column.                                       |
| `df.max()`                               | `apply(df, 2, max, na.rm=TRUE)`             | Returns the maximum value for each column.                                       |
| `df['column'].value_counts()`            | `table(df$column)`                          | Returns counts of unique values in a column.                                     |
| `df.sample(n)`                           | `df[sample(nrow(df), n), ]`                 | Returns `n` random samples from the dataset.                                     |
| `df.corr()`                              | `cor(df, use="complete.obs")`               | Computes correlation matrix of numerical columns.                                |
| `df.nunique()`                           | `sapply(df, function(x) length(unique(x)))` | Returns the number of unique values per column.                                  |
| `df['column'].str.upper()`               | `toupper(df$column)`                        | Converts string to uppercase.                                                    |
| `df['column'].str.lower()`               | `tolower(df$column)`                        | Converts string to lowercase.                                                    |
| `df['column'].str.len()`                 | `nchar(df$column)`                          | Returns the length of each string in a column.                                   |
| `df['column'].str.replace('old', 'new')` | `gsub('old', 'new', df$column)`             | Replaces substrings in a column.                                                 |
| `df['column'].str.contains('pattern')`   | `grepl('pattern', df$column)`               | Checks if a pattern exists in each row of the column.                            |

## Subsetting

### Using Indexing (`[ ]`)

Indexing is the most basic way to subset data in R. It can be done using row and column indices.

```r
# Creating a numeric vector
vec <- c(10, 20, 30, 40, 50)

# Subsetting using index positions
vec[1]   # Extracts first element (10)
vec[2:4] # Extracts elements from index 2 to 4 (20, 30, 40)
vec[c(1, 3, 5)] # Extracts elements at positions 1, 3, and 5 (10, 30, 50)
```

### Subsetting Using Logical Conditions

```r
# Extracting rows where Score is greater than 85
high_scores <- df[df$Score > 85, ]
```

### Using the `subset()` Function

```r
# Extracting rows where Score is greater than 85
high_scores <- subset(df, Score > 85)

# Extracting specific columns with condition
high_scores_name <- subset(df, Score > 85, select = c(Name, Score))
```

### Using `dplyr` Package

The `dplyr` package makes subsetting and filtering easier with functions like `filter()`, `select()`, and `slice()`.

```r
# Install and load dplyr package
install.packages("dplyr")
library(dplyr)

# Filtering rows where Score > 85
high_scores <- df %>% filter(Score > 85)

# Selecting specific columns
selected_data <- df %>% select(Name, Score)

# Filtering and selecting in one step
filtered_selected <- df %>% filter(Score > 85) %>% select(Name, Score)

print(filtered_selected)
```

## Applying Functions

In R, the `apply`, `lapply`, `sapply`, and `tapply` functions are commonly used for applying functions to data structures efficiently. They are part of the **apply family** and help perform operations on matrices, lists, and vectors without using explicit loops.

### `apply()`

The `apply()` function is used for applying a function to the rows or columns of a matrix or data frame.
**Syntax:**

```r
apply(X, MARGIN, FUN, ...)
```

- `X`: The matrix or data frame.
- `MARGIN`: 1 for rows, 2 for columns.
- `FUN`: The function to be applied.

```r
1  2  3
4  5  6
7  8  9
```

- `1` - calculate the sum of each column c(12, 15, 18)
- `2` - calculate the sum of each row c(6, 15, 24)

### `lapply()`

`lapply()` applies a function to each element of a list or vector and returns a list.
**Syntax:**

```r
lapply(X, FUN, ...)
```

- `X`: The list or vector.
- `FUN`: The function to be applied.

```r
my_list <- list(a = 1:5, b = 6:10, c = 11:15)
```

Calculate the sum for each vector, returning a list:

```
$a
[1] 15

$b
[1] 40

$c
[1] 65
```

### `sapply()`

`sapply()` is similar to `lapply()` but tries to return a vector or matrix instead of a list.

```r
sapply(X, FUN, ...)
```

Similar to `lapply()`, but `sapply()` simplifies the output into a named numeric vector:

```r
a  b  c
15 40 65
```

### `tapply()`

`tapply()` is used to apply a function to subsets of a vector grouped by a factor.

```r
tapply(X, INDEX, FUN, ...)
```

- `X`: The numeric vector.
- `INDEX`: A factor or list of factors for grouping.
- `FUN`: The function to apply.

**Example:**

```r
# Creating a data frame
df <- data.frame(
  values = c(10, 20, 30, 40, 50, 60),
  group = c("A", "B", "A", "B", "A", "B")
)

# Applying mean function by group
result <- tapply(df$values, df$group, mean)
print(result)
```

**Explaination:**
Groups are `"A"` and `"B"`:

```r
A: (10, 30, 50)
B: (20, 40, 60)
```

`tapply(df$values, df$group, mean)` calculates mean for each group:

```r
A  B
30 40
```

### Summary

| Function   | Input Type         | Output Type              | Use Case                                             |
| ---------- | ------------------ | ------------------------ | ---------------------------------------------------- |
| `apply()`  | Matrix, Data Frame | Vector, Matrix           | Apply function to rows/columns                       |
| `lapply()` | List, Vector       | List                     | Apply function to each element                       |
| `sapply()` | List, Vector       | Simplified Vector/Matrix | Similar to `lapply()`, but returns simplified output |
| `tapply()` | Vector + Factor    | Vector (Grouped Result)  | Apply function by group                              |

# Data Visualization

## Plotting

The `plot()` function is the most commonly used function in Base R for creating scatter plots, line plots, and other types of graphs.

**Syntax:**

```r
plot(x, y, type = "p", col = "black", main = "Title", xlab = "X-axis", ylab = "Y-axis")
```

- `x`, `y` → Numeric vectors (data for the x-axis and y-axis).
- `type` → `"p"` for points (scatter plot), `"l"` for lines, `"b"` for both.
- `col` → Color of points or lines.
- `main` → Title of the plot.
- `xlab`, `ylab` → Labels for x and y axes.
- `lwd` → Sets the line width for line plot.
- `pch` → change point shape.
- `grid` → adds a grid to the plot.

### Bar Chart

Used to visualize categorical data.

```r
# Sample data
categories <- c("A", "B", "C", "D")
values <- c(10, 20, 15, 25)

# Bar chart
barplot(values, names.arg = categories, col = "skyblue", main = "Bar Chart", ylab = "Values")
```

### Histogram

Used to show the distribution of numerical data.

```r
# Generating random data
data <- rnorm(100, mean = 50, sd = 10)  # 100 random values

# Histogram
hist(data, col = "orange", breaks = 10, main = "Histogram", xlab = "Values", border = "black")
```

### Boxplot

Used for visualizing distributions and detecting outliers.

```r
# Generating random data
set.seed(123)
data1 <- rnorm(50, mean = 30, sd = 5)
data2 <- rnorm(50, mean = 40, sd = 5)

# Boxplot
boxplot(data1, data2, names = c("Group 1", "Group 2"), col = c("red", "blue"), main = "Boxplot")
```

- `boxplot(data1, data2)` compares two groups.

## Subplot

```r
# Setting up 2x2 plot layout
par(mfrow = c(2, 2))

# Four different plots
plot(x, y, type = "p", main = "Scatter Plot")
plot(x, y, type = "l", main = "Line Plot")
barplot(values, names.arg = categories, col = "green", main = "Bar Chart")
hist(data, col = "purple", main = "Histogram")
```

## Saving Plots

```r
png("myplot.png", width = 600, height = 400)  # Open a PNG file
plot(x, y, main = "Saved Plot")
dev.off()  # Close the file
```

## Advanced Visualization with `ggplot2`

### Key Components of ggplot2

- `Data (data)` – The dataset used for visualization.
- `Aesthetics (aes())` – Defines how variables are mapped to graphical properties (e.g., x-axis, y-axis, color, size).
- `Geometries (geom_*)` – Defines the type of plot (e.g., points, lines, bars).
- `Facets (facet_*)` – Allows for multi-panel plots by splitting data.
- `Scales (scale_*)` – Modifies how data is mapped (e.g., color gradients, axes).
- `Themes (theme_*)` – Controls non-data elements like grid lines, titles, background, etc.

### Example

Scatter Plot with Regression Line:

```r
# Load necessary library
library(ggplot2)

# Load the mtcars dataset
data(mtcars)

# Create an advanced scatter plot
ggplot(mtcars, aes(x = wt, y = mpg, color = factor(cyl), size = hp)) +
  geom_point(alpha = 0.7) +         # Scatter plot with transparency
  geom_smooth(method = "lm", se = FALSE, color = "black", linetype = "dashed") +  # Regression line
  scale_color_manual(values = c("red", "blue", "green")) +  # Custom colors for cylinders
  labs(title = "Car Weight vs. MPG",
       subtitle = "Colored by Cylinder Count",
       x = "Weight (1000 lbs)",
       y = "Miles per Gallon (MPG)",
       color = "Cylinders",
       size = "Horsepower") +       # Custom labels
  theme_minimal()                   # Use a clean theme
```

#### Explanation

1. **Data Mapping (`aes()`)**

- `x = wt` and `y = mpg`: Weight vs. Miles per Gallon.
- `color = factor(cyl)`: Cylinder count used for color differentiation.
- `size = hp`: Horsepower represented by point size.

2. **Plot Elements**

- `geom_point(alpha = 0.7)`: Creates a scatter plot with transparency.
- `geom_smooth(method = "lm", se = FALSE, color = "black", linetype = "dashed")`: Adds a regression line without confidence intervals.

3. **Customization**

- `scale_color_manual(values = c("red", "blue", "green"))`: Assigns specific colors to cylinder categories.
- `labs(...)`: Adds a title, subtitle, and axis labels.
- `theme_minimal()`: Uses a clean and simple theme.

### Faceted Plots

If you want to split the plot into multiple panels based on a categorical variable:

```r
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point() +
  facet_wrap(~cyl) +  # Separate plots for each cylinder category
  theme_light()
```

This creates separate plots for different cylinder values.

### Combining Multiple Geoms

```r
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point(aes(color = factor(gear))) + # Points colored by gear count
  geom_smooth(method = "loess", color = "blue") + # LOESS smooth curve
  theme_classic()
```

This adds both points and a smooth LOESS curve to the plot.

# Programming

**`for` Loop:**

```r
for (i in 1:5) {
    print(paste("Iteration:", i))
}
for (num in numbers) {
    print(num)
}
```

## Function

**Syntax:**

```r
function_name <- function(){
  # code here
}
```

**Return Multiple Value:**

```r
calculate <- function(x, y) {
    sum_val <- x + y
    prod_val <- x * y
    return(list(sum = sum_val, product = prod_val))
}
```

## Debugging

- `traceback()` helps find where an error occurred after execution fails.
  ```r
  square <- function(x) { return(x * x)}
  square("hello")
  traceback()
  ```
- `browser()` pauses execution and allows interactive debugging.
  ```r
  calculate <- function(x, y) {
    sum_val <- x + y
    browser()
    prod_val <- x * y
    return(list(sum = sum_val, product = prod_val))
  }
  ```
- `debug()` enables step-by-step debugging of a function.

  ```r
  sample_function <- function(x) {
    return(x^2 + 10)
  }

  # Enable debugging
  debug(sample_function)

  sample_function(4)

  # Disable debugging
  undebug(sample_function)
  ```

## Error Handling

- `try()` allows execution to continue even if an error occurs.

  ```r
  result <- try(log("hello"))  # Invalid input

  print("Execution continues...")  # This line runs even after the error

  # Check if an error occurred
  if (inherits(result, "try-error")) {
      print("An error occurred, but execution continues.")
  }
  ```

- `tryCatch()` allows handling different types of errors.
  ```r
  safe_divide <- function(a, b) {
    result <- tryCatch(
        {
            a / b  # Attempt division
        },
        warning = function(w) {
            print("Warning: Something went wrong!")
            return(NA)
        },
        error = function(e) {
            print("Error: Division by zero!")
            return(NA)
        },
        finally = {
            print("Execution completed.")
        }
    )
    return(result)
  }
  # Call function
  safe_divide(10, 0)
  ```
