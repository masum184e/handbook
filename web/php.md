# Contents

- [Basic](#basic)
  - [Constant](#constants)
  - [Scope](#scope)
  - [Build in Functions](#build-in-functions)
  - [Anonymous Functions](#anonymous-functions)
  - [Closures](#closures)
  - [Array](#array)
- [JSON](#json)
- [Standard PHP Library](#standard-php-library)
  - [SplStack](#splstack-stack)
  - [SplQueue](#splqueue-queue)
  - [SplDoublyLinkedList](#spldoublylinkedlist)
- [Form Handling](#form-handling)
  - [superglobals](#common-superglobals)
    - [$\_GET](#_get)
    - [$\_POST](#_post)
    - [$\_REQUEST](#_request)
    - [$\_SERVER](#_server)
  - [Validation VS Sanitization](#validation-vs-sanitization)
  - [File Uploading](#file-uploading)
- [Database Interaction (MySQL)](#database-interaction-mysql)
  - [Database Connection](#database-connection)
  - [CRUD](#crud)
- [`.htaccess`](#htaccess)
  - [Why](#why-implement-htaccess)
  - [Configurations](#configurations)
- [Laravel](#laravel)
  - [Migrations](#migrations)
  - [Model](#model)
  - [Seeders](#seeders)

# Basic

**PHP Tags:** PHP code is embedded within HTML using special tags. PHP code starts with `<?php` and ends with `?>`.

**Variables:** Variables in PHP start with a dollar sign (`$`) followed by the variable name.

**Echo and Print:** `echo` and `print` are used to output data. Both can display text or variables, though `echo` is slightly faster and allows multiple parameters.

**`foreach` Loop**
The `foreach` loop is designed specifically for iterating over arrays. It goes through each element of an array, making it particularly useful for associative arrays.

```php
$fruits = ["apple", "banana", "cherry"];

foreach ($fruits as $fruit) {
    echo "Fruit: $fruit\n";
}
```

```php
$person = ["name" => "John", "age" => 30, "city" => "New York"];

foreach ($person as $key => $value) {
    echo "$key: $value\n";
}
```

**Pass by Reference:** pass arguments by reference using the `&` symbol, so changes made to the parameter inside the function affect the original variable.

```php
function addFive(&$num) {
    $num += 5;
}

$number = 10;
addFive($number); // Pass $number by reference
echo "New value: $number";
```

## Constants

define constants using either the `define()` function or the `const` keyword.

```php
define("CONSTANT_NAME", value, case_insensitivity);
const PI = 3.14159;
```

### Magic Constants

PHP also has magic constants that provide information about the file, line number, and other context-specific details. These constants change based on where they are used within the code.

Some commonly used magic constants include:

1. `__LINE__`: The current line number in the file.
2. `__FILE__`: The full path and filename of the file.
3. `__DIR__`: The directory of the file.
4. `__FUNCTION__`: The function name.
5. `__CLASS__`: The class name.
6. `__METHOD__`: The class method name.

## Scope

**Static Scope:** In PHP, variables within functions are typically destroyed after the function executes. Static variables, however, retain their values between function calls. You can declare a variable as static by using the static keyword.

```php
function testStaticScope() {
    static $counter = 0; // Declared as static
    $counter++;
    echo "Counter: $counter\n";
}

testStaticScope(); // Output: Counter: 1
testStaticScope(); // Output: Counter: 2
testStaticScope(); // Output: Counter: 3
```

**Global Scope:** PHP also provides a `$GLOBALS` superglobal array, which allows access to global variables from anywhere in the code, even inside functions, without needing the `global` keyword.

```php
$globalVariable = "I'm global!";

function testGlobalScope() {
    echo $GLOBALS['globalVariable']; // Accessing global variable using $GLOBALS
}

testGlobalScope(); // Output: I'm global!
```

## Build-in Functions

### String

- `strlen()`: Returns the length of a string.
- `str_replace()`: Replaces occurrences of a substring within a string.
- `strpos()`: Finds the position of the first occurrence of a substring in a string.

### Array

- `array_push()`: Adds one or more elements to the end of an array.
- `array_pop()`: Removes the last element from an array.
- `count()`: Returns the number of elements in an array.

### Date

- `date()`: Formats a local date and time.
- `time()`: Returns the current Unix timestamp.
- `strtotime()`: Parses an English textual datetime into a Unix timestamp.

## Anonymous Functions

An anonymous function is simply a function without a name. It’s often assigned to a variable so you can reuse or call it multiple times if needed. Anonymous functions are commonly used in scenarios where the function is used only in a specific place, like within a callback.

```php
$sayHello = function($name) {
    return "Hello, $name!";
};

// Using the function
echo $sayHello("Alice"); // Output: Hello, Alice!
```

## Closures

In PHP, a closure is a special kind of anonymous function that can capture variables from its surrounding scope, allowing it to "remember" values even after it has been called. This is done using the `use` keyword.

Closures are helpful when you need to use a variable that was defined outside the function but only within the function’s scope.

```php
// Define a variable outside the function
$message = "Good Morning";

// Create a closure that uses the $message variable
$greet = function($name) use ($message) {
    return "$message, $name!";
};

// Using the closure
echo $greet("Alice"); // Output: Good Morning, Alice!
```

```php
$count = 1;

// Closure to increment $count
$incrementCount = function() use (&$count) {
    $count++;
};

// Call the closure multiple times
$incrementCount();
$incrementCount();
echo $count; // Output: 3
```

## Array

There are three primary types of arrays:

1. **Indexed Arrays**: Arrays with numerical indices, starting at zero by default.
2. **Associative Arrays**: Arrays with custom keys (strings) instead of numerical indices.
   . **Multidimensional Arrays**: Arrays that contain one or more arrays within them.

### Sorting Functions

- `sort()`: Sorts an indexed array in ascending order.
- `rsort()`: Sorts an indexed array in descending order.
- `asort()`: Sorts an associative array by value in ascending order, preserving keys.
- `ksort()`: Sorts an associative array by key in ascending order.
- `arsort()`: Sorts an associative array by value in descending order, preserving keys.
- `krsort()`: Sorts an associative array by key in descending order.

### Merging Arrays

- `array_merge()`: Merges two or more arrays, appending values from later arrays.
- `array_merge_recursive()`: Similar to `array_merge()`, but it merges nested arrays recursively.

### Array Filtering

- `array_filter()`: Filters elements of an array based on a callback function. Only elements for which the callback returns `true` are kept.

### Array Mapping

- `array_map()`: Applies a callback function to each element in one or more arrays, returning a new array with the results.

### Array Searching

- `in_array()`: Checks if a value exists in an array.
- `array_search()`: Searches for a specific value and returns the first corresponding key.

### Array Reduction

- `array_reduce()`: Reduces an array to a single value by applying a callback function.

# JSON

## Encoding JSON

To convert a PHP array or object into JSON format, you use the `json_encode()` function. This function takes a PHP array or object as input and returns a JSON-encoded string.

`json_encode()` automatically handles nested arrays and objects, converting them into valid JSON format.

## Decoding JSON

To convert a JSON string back into a PHP array or object, use the `json_decode()` function. By default, `json_decode()` converts JSON into a PHP object, but you can specify a second parameter as true to get an associative array instead.

## Handling JSON Errors

Both json_encode() and json_decode() can sometimes encounter errors. You can use json_last_error() and json_last_error_msg() to check for issues.

```php
// Malformed JSON string
$jsonData = '{"name":"Alice","age":25,"city":"New York"'; // Missing closing brace

$data = json_decode($jsonData);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo "JSON Error: " . json_last_error_msg(); // Output: JSON Error: Syntax error
}
```

# Standard PHP Library

## SplStack (Stack)

```php
$stack = new SplStack();

// Push elements onto the stack
$stack->push("first");
$stack->push("second");
$stack->push("third");

// Pop elements off the stack
echo $stack->pop(); // Output: third
echo $stack->pop(); // Output: second
echo $stack->pop(); // Output: first
```

- `$stack->push()` adds elements to the stack.
- `$stack->pop()` removes and returns the top element.

## SplQueue (Queue)

```php
$queue = new SplQueue();

// Enqueue elements into the queue
$queue->enqueue("first");
$queue->enqueue("second");
$queue->enqueue("third");

// Dequeue elements from the queue
echo $queue->dequeue(); // Output: first
echo $queue->dequeue(); // Output: second
echo $queue->dequeue(); // Output: third
```

- `$queue->enqueue()` adds elements to the end of the queue.
- `$queue->dequeue()` removes and returns elements from the front of the queue.

## SplDoublyLinkedList

```php
$list = new SplDoublyLinkedList();

// Adding elements to the list
$list->push("first");
$list->push("second");
$list->push("third");

// Traverse the list forwards
$list->rewind();
while ($list->valid()) {
    echo $list->current() . "\n"; // Output: first, second, third
    $list->next();
}

// Traverse the list backwards
$list->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);
foreach ($list as $item) {
    echo $item . "\n"; // Output: third, second, first
}
```

- `$list->push()` adds elements to the end of the list.
- `rewind()` and `next()` allow for forward traversal.

## Summary of Key SPL Data Structures

1. **SplStack**: LIFO stack.
2. **SplQueue**: FIFO queue.
3. **SplDoublyLinkedList**: Doubly linked list allowing bidirectional traversal.
4. **SplFixedArray**: Array with a fixed size.
5. **SplHeap**: Priority-based sorting with `SplMinHeap` and `SplMaxHeap`.
6. **SplObjectStorage**: Stores objects as keys with optional associated data.
7. **SplPriorityQueue**: Queue with element priorities.

# Form Handling

## Common superglobals

### `$_GET`

The `$_GET` superglobal is used to collect data sent via URL parameters, typically from a form submission using the GET method or from a URL query string. Data sent via GET is visible in the URL, which makes it suitable for non-sensitive data, like search queries or pagination.

```html
<form action="handleForm.php" method="get">
  Name: <input type="text" name="name" /> Age: <input type="text" name="age" />
  <input type="submit" value="Submit" />
</form>
```

```php
<?php
// handleForm.php
// Retrieve the values passed in the URL
$name = $_GET['name']; // "Alice"
$age = $_GET['age'];   // "25"

echo "Name: " . $name . "<br>"; // Output: Name: Alice
echo "Age: " . $age;            // Output: Age: 25
?>
```

### `$_POST`

The `$_POST` superglobal collects data submitted through a form using the POST method. Unlike GET, data sent with POST is not visible in the URL, making it more suitable for sensitive data like passwords or large text inputs.

```html
<form action="handleForm.php" method="post">
  Name: <input type="text" name="name" /> Age: <input type="text" name="age" />
  <input type="submit" value="Submit" />
</form>
```

```php
<?php
// handleForm.php
// Retrieve form data submitted via POST
$name = $_POST['name'];
$age = $_POST['age'];

echo "Name: " . $name . "<br>"; // Output: Name: (user input)
echo "Age: " . $age;            // Output: Age: (user input)
?>
```

### `$_REQUEST`

The `$_REQUEST` superglobal is a combination of `$_GET`, `$_POST`, and `$_COOKIE`. It contains data from both GET and POST requests, as well as cookie data, if available. It can be convenient if you don’t know the method used to send data, but it’s usually recommended to use `$_GET` or `$_POST` directly to avoid ambiguity.

```php
<?php
// handleForm.php
// Retrieve data regardless of the method used (GET or POST)
$name = $_REQUEST['name'];
$age = $_REQUEST['age'];

echo "Name: " . $name . "<br>";
echo "Age: " . $age;
?>
```

### `$_SERVER`

The $\_SERVER superglobal contains server and environment information, providing details about the server, the request, and the client making the request. It includes information like the client’s IP address, the request method, script location, and more. $\_SERVER is used to access server-level data rather than form data.

### Common Values

- `$_SERVER['REQUEST_METHOD']` – The request method used (GET, POST, etc.).
- `$_SERVER['SERVER_NAME']` – The name of the server.
- `$_SERVER['REMOTE_ADDR']` – The IP address of the client.
- `$_SERVER['HTTP_USER_AGENT']` – Information about the client’s browser.
- `$_SERVER['PHP_SELF']` – The filename of the currently executing script.
- `$_SERVER['REQUEST_URI']` – The URI used to access the page.

## Validation VS Sanitization

### Validation

Validation is the process of checking if the input data meets certain criteria or expectations

- Checking if input is empty.
- Verifying if an email is in the correct format.
- Validating if a string contains only specific characters (e.g., only letters and numbers).
- Ensuring that numbers are within a particular range.

- `filter_var($email, FILTER_VALIDATE_EMAIL)` checks if `$email` is in a valid email format.
- `filter_var($age, FILTER_VALIDATE_INT, ["options" => ["min_range" => 18, "max_range" => 100]])` ensures that `$age` is an integer between 18 and 100.

### Sanitization

Sanitization involves cleaning the input data by removing or encoding unwanted characters. This helps prevent security issues such as SQL injection, XSS (Cross-Site Scripting), and other attacks.

- `filter_var($username, FILTER_SANITIZE_STRING)` removes HTML tags and special characters from `$username`, which helps prevent XSS attacks.
- `filter_var($url, FILTER_SANITIZE_URL)` removes any characters that would make the URL invalid.

### XSS Protection

We use `htmlspecialchars()` to prevent XSS (Cross-Site Scripting) by encoding any special characters that could potentially execute JavaScript if output directly into HTML.

### Example

```php
<?php
// Validate and sanitize user inputs from $_POST superglobal

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Step 1: Retrieve data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    // Step 2: Sanitize and Validate 'name'
    $name = filter_var($name, FILTER_SANITIZE_STRING);  // Sanitizing name (removes any HTML tags)

    if (empty($name)) {
        echo "Name is required.<br>";
    } else {
        // Validate name (checks that it only contains letters and spaces)
        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            echo "Only letters and spaces are allowed in the name.<br>";
        }
    }

    // Step 3: Sanitize and Validate 'email'
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);  // Sanitizing email (removes unwanted characters)

    if (empty($email)) {
        echo "Email is required.<br>";
    } else {
        // Validate email (checks if it is a valid email format)
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format.<br>";
        }
    }

    // Step 4: Sanitize and Validate 'age'
    $age = filter_var($age, FILTER_SANITIZE_NUMBER_INT);  // Sanitizing age (removes any non-numeric characters)

    if (empty($age)) {
        echo "Age is required.<br>";
    } else {
        // Validate age (checks if the age is a valid number and greater than zero)
        if (!filter_var($age, FILTER_VALIDATE_INT) || $age <= 0) {
            echo "Age must be a positive number.<br>";
        }
    }

    // Step 5: Output the sanitized and validated data
    if (!empty($name) && !empty($email) && !empty($age)) {
        echo "Name: " . htmlspecialchars($name) . "<br>";  // htmlspecialchars for XSS protection
        echo "Emacl: " . htmlspecialchars($email) . "<br>"; // htmlspecialchars for XSS protection
        echo "Age: " . htmlspecialchars($age) . "<br>";     // htmlspecialchars for XSS protection
    }
}
?>
```

## File Uploading

### Steps

1. **Create an HTML Form**: The form should include `enctype="multipart/form-data"` in the `<form>` tag, and a file input field, so users can select a file to upload.
2. **\_Access the File Using `$_FILES`**: When the form is submitted, PHP populates the `$_FILES` array with information about the uploaded file.
3. **Validate the Uploaded File**: Check the file size, type, and any errors to ensure it meets requirements.
4. **Move the File to a Directory**: Use `move_uploaded_file()` to save the uploaded file to a specific location on the server.

```html
<form action="upload.php" method="post" enctype="multipart/form-data">
  <label for="file">Choose a file:</label>
  <input type="file" name="file" id="file" required />
  <input type="submit" value="Upload" />
</form>
```

```php
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $file = $_FILES['file'];

    // Allowed file types (MIME types)
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    // Maximum file size (2 MB)
    $maxFileSize = 2 * 1024 * 1024; // 2 MB in bytes

    // Check for file upload errors
    if ($file['error'] !== 0) {
        echo "Error occurred during file upload. Error code: " . $file['error'];
        exit;
    }

    // Validate file size
    if ($file['size'] > $maxFileSize) {
        echo "File is too large. Maximum allowed size is 2 MB.";
        exit;
    }

    // Validate file type
    if (!in_array($file['type'], $allowedTypes)) {
        echo "Invalid file type. Only JPEG, PNG, and GIF files are allowed.";
        exit;
    }

    // Generate a unique name for the file (to avoid overwriting)
    $uploadDirectory = 'uploads/';
    $uniqueName = uniqid() . '-' . basename($file['name']);
    $destination = $uploadDirectory . $uniqueName;

    // Ensure the upload directory exists
    if (!is_dir($uploadDirectory)) {
        mkdir($uploadDirectory, 0755, true);
    }

    // Move the uploaded file to the destination directory
    if (move_uploaded_file($file['tmp_name'], $destination)) {
        echo "File uploaded successfully!<br>";
        echo "File Name: " . $uniqueName;
    } else {
        echo "Failed to upload file.";
    }
} else {
    echo "No file uploaded.";
}
?>
```

# Database Interaction (MySQL)

## Database Connection

```php
<?php
// Step 1: Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "test_db";

// Step 2: Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Step 3: Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
```

## CRUD

### Create

```php
<?php

$name = "John Doe";
$email = "john@example.com";
$sql = "INSERT INTO users (name, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $email); // 'ss' means two string values
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
?>
```

### Read

```php
<?php

$sql = "SELECT name, email FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "No results found.";
}

$conn->close();
?>
```

### Update

```php
<?php
$name = "Jane Doe";
$email = "jane@example.com";
$userId = 1;
$sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $name, $email, $userId);
$stmt->execute();

echo "Record updated successfully";

$stmt->close();
$conn->close();
?>
```

### Delete

```php
<?php

$userId = 1;
$sql = "DELETE FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();

echo "Record deleted successfully";

$stmt->close();
$conn->close();
?>
```

# `.htaccess`

The `.htaccess` (Hypertext Access) file is a configuration file used by Apache web servers to control various aspects of website behavior. It allows you to override global server settings on a per-directory basis without modifying the main server configuration file (`httpd.conf`).

The `.htaccess` file is useful for implementing security measures, URL redirections, custom error pages, access controls, and other server configurations.

## Why Implement `.htaccess`?

1. Security

- Restrict access to certain files or directories.
- Prevent directory listing.
- Block specific IP addresses.
- Implement authentication.

2. URL Rewriting & Redirection

- Redirect users to another page.
- Convert dynamic URLs into SEO-friendly URLs.
- Force HTTPS for secure connections.

3. Custom Error Pages

- Create custom error pages (e.g., 404 Not Found, 500 Internal Server Error).

4. Performance Optimization

- Enable caching to speed up website loading.
- Compress files using Gzip.
- Prevent hotlinking of images and other media.

5. Access Control

- Password-protect directories.
- Allow or deny access based on IP addresses.

## Configurations

### 1. Redirect HTTP to HTTPS

Forcing users to use a secure HTTPS connection:

```
RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
```

- `RewriteEngine On`: Enables the rewriting engine.
- `RewriteCond %{HTTPS} !=on`: Checks if the request is not HTTPS.
- `RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]`: Redirects to HTTPS.

### 2. URL Rewriting

Convert URLs like `example.com/page.php?id=10` to `example.com/page/10`:

```
RewriteEngine On
RewriteRule ^page/([0-9]+)/?$ page.php?id=$1 [L,QSA]
```

- `^page/([0-9]+)/?$` matches URLs like `page/10`.
- `page.php?id=$1` rewrites it back to the dynamic page.

### 3. Redirect Old URL to New URL

Redirect an old page to a new page:

```
Redirect 301 /old-page.html https://example.com/new-page.html
```

301 is a permanent redirect.

### 4. Block Specific IP Addresses

Prevent access from a specific IP:

```
Deny from 192.168.1.100
```

To allow only a certain IP:

```
Order Deny,Allow
Deny from all
Allow from 192.168.1.200
```

### 5. Password-Protect a Directory

Create an `.htpasswd` file with the username and encrypted password:

```
AuthType Basic
AuthName "Restricted Area"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

### 6. Prevent Directory Listing

Disable users from viewing a list of files in a directory:

```
Options -Indexes
```

### 7. Enable Gzip Compression

Reduce page load time by compressing resources:

```
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### 8. Prevent Hotlinking

Prevent other websites from using your images:

```
RewriteEngine On
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^https://example.com/ [NC]
RewriteRule \.(jpg|jpeg|png|gif)$ - [F]
```

This blocks hotlinking of image files unless the request comes from `example.com`.

# REST API

## REST Principles
A RESTful API follows six key principles:

### 1. Client-Server Architecture
- The client and server are separate entities.
- The client sends requests, and the server processes them and returns responses.

Example: A frontend React app (client) sends an HTTP request to a PHP backend (server) for data.

### 2. Statelessness
- The server does not store any client state between requests.
- Each request from a client must contain all necessary information.

Example: Every API request must include authentication credentials (e.g., a JWT token), as the server does not remember previous requests.

### 3. Cacheability
- Responses must define whether they can be cached.
- Caching can improve performance and reduce server load.

Example: Using HTTP headers like Cache-Control: max-age=3600 allows browsers to cache data for an hour.

### 4. Uniform Interface
- A consistent API structure makes it easy to understand and use.
- Uses standard HTTP methods like GET, POST, PUT, DELETE.
### 5. Layered System
- Clients interact with an API without needing to know about the underlying backend layers.
- There may be intermediaries like load balancers or proxies.
### 6. Code on Demand (Optional)
- A server can return executable code (like JavaScript) to be run on the client.
## Authentication
### JWT
**Installation:**
```shell
composer require firebase/php-jwt
```
**Generate JWT:**
```php
<?php
require './../vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function create_jwt($user_email) {
    $issuedAt = time();
    $expirationTime = $issuedAt + 3600; // Token valid for 1 hour
    $payload = [
        'iss' => 'yourdomain.com',   // Issuer
        'iat' => $issuedAt,          // Issued at
        'exp' => $expirationTime,    // Expiration time
        'userEmail' => $user_email
    ];

    // Encode the payload to create the JWT
    $jwt = JWT::encode($payload, JWT_SECRET_KEY, 'HS256');
    return $jwt;
}
?>
```

# Laravel
## Project Structure
```
project-name/
│── app/              # Main application logic (Models, Controllers)
│── bootstrap/        # Laravel bootstrapping files
│── config/           # Configuration files (database, mail, cache)
│── database/         # Migrations, seeders, factories
│── public/           # Entry point (index.php)
│── resources/        # Views (Blade templates), assets (CSS, JS)
│── routes/           # API & Web routes
│── storage/          # Logs, cache, session storage
│── tests/            # Automated tests
│── vendor/           # Composer dependencies
│── .env              # Environment configuration
│── artisan           # CLI tool for Laravel
│── composer.json     # Composer dependencies
```
## Configuring
Setup database credentials and run the database migrations
```shell
php artisan migrate
```
## Migrations

Migrations in Laravel are a way to define database schemas in a structured, version-controlled manner. Instead of manually creating tables in a database, migrations allow you to define the structure using PHP code. It allow to track chnages in the database schema over time.

### Steps

1. Run the following command:

```shell
php artisan make:migration posts
```

2. Define the schema

```php
  public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->string('title');
            $table->text('content');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps(); // Creates `created_at` and `updated_at` columns
        });
    }
```

3. Run the migration

```shell
php artisan migrate
```

4. Undo Changes

- If you want to undo the last migration:

```shell
php artisan migrate:rollback
```

- To rollback all migrations and start fresh:

```shell
php artisan migrate:fresh
```

## Model

A model is a class that interacts with a database table. Laravel uses Eloquent ORM (Object-Relational Mapping) to work with databases efficiently.

### Steps

1. Run the following command

```shell
php artisan make:model Post
```

2. Define the model

```php
class Post extends Model
{
    use HasFactory;

    // Define the table name if different from the default (plural form of model name)
    protected $table = 'posts';

    // Define the primary key (optional, default is 'id')
    protected $primaryKey = 'id';

    // Enable or disable timestamps (created_at and updated_at)
    public $timestamps = true;

    // Allow mass assignment (set fillable fields)
    protected $fillable = ['title', 'content'];

    // If you want to prevent mass assignment on some fields
    protected $guarded = ['id'];

    // Define date fields explicitly (optional)
    protected $dates = ['created_at', 'updated_at'];
}
```

### CRUD

#### Create

```php
Post::create([
    'title' => 'Laptop',
    'content' => 'A high-end gaming laptop'
]);
```

#### Read

**Get All Post**

```php
$posts = Post::all();
```

**Find a Specific Post by ID**

```php
$post = Post::find(1);
```

#### Update

```php
Post::where('id', 1)->update(['title' => "Gaming Laptop"]);
```

#### Delete

```php
Post::destroy(1);
```

### Relationships

1. **One-to-Many**

```php
public function category(){
    return $this->belongsTo(Category::class);
}
```

## Seeders

Seeders in Laravel allow you to populate your database with dummy data for testing and development. Instead of manually inserting records, you can automate the process using Laravel's built-in seeder system.

### Steps

1. Run the following command

```shell
php artisan make:factory PostFactory --model=Post
```

2. Define the factory

```php
public function definition(): array{
    return [
        'title' => $this->faker->name(),
        'content' => $this->faker->description()
    ];
}
```

3. Use the factory in seeder

```php
User::factory(10)->create();
```

4. Run all seeders

```shell
php artisan db:seed
```
