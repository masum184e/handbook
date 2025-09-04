- [Installation](#installation)
  - [Composer](#composer)
  - [Laravel Installer](#laravel-installer)
  - [Comparision Table](#comparision-table)
  - [Common Post-Installation Steps](#common-post-installation-steps)
- [Project Structure](#project-structure)
  - [app](#app)
  - [bootstrap](#bootstrap)
  - [config](#config)
  - [database](#database)
  - [public](#public)
  - [resources](#resources)
  - [routes](#routes)
  - [storage](#storage)
  - [tests](#tests)
  - [vendor](#vendor)
  - [.env](#env)
  - [artisan](#artisan)
  - [composer.json](#composerjson)
- [Service Providers and Configuration Files](#service-providers-and-configuration-files)
  - [Service Providers](#service-providers)
  - [Configuration Files](#configuration-files)
  - [How Service Providers and Config Files Work Together](#how-service-providers-and-config-files-work-together)
- [Environment Variables](#environment-variables)
  - [How Laravel Uses `.env`](#how-laravel-uses-env)
  - [Database Configuration](#database-configuration)
  - [Accessing `.env` Values in Code](#accessing-env-values-in-code)
- [Laravel Request Lifecycle](#laravel-request-lifecycle)
  - [Entry Point](#step-1-entry-point--publicindexphp)
  - [Bootstrap Laravel](#step-2-bootstrap-laravel--bootstrapappphp)
  - [Kernel Handling](#step-3-kernel-handling--apphttpkernel)
  - [Service Providers Boot](#step-4-service-providers-boot)
  - [Middleware](#step-5-middleware-before)
  - [Routing](#step-6-routing)
  - [Controller](#step-7-controller--action-execution)
  - [Response Preparation](#step-8-response-preparation)
  - [Middleware](#step-9-middleware-after)
  - [Send Response to Browser](#step-10-send-response-to-browser)
  - [Example](#example-of-request-lifecycle)
- [Composer](#composer)
  - [Why Laravel Uses Composer](#why-laravel-uses-composer)
  - [Basic Composer Commands](#basic-composer-commands)
  - [Key Composer Files in Laravel](#key-composer-files-in-laravel)
  - [How Autoloading Works in Laravel](#how-autoloading-works-in-laravel)
- [Fundamentals](#fundamentals)
  - [How Laravel Request Flows in MVC](#how-laravel-request-flows-in-mvc)
- [Routing](#routing)
  - [Basic Route Types](#basic-route-types)
  - [Naming Routes](#naming-routes)
  - [Redirect Routes](#redirect-routes)
  - [View Routes](#view-routes)
  - [Grouping Routes](#grouping-routes)
- [Blade Syntax](#blade-syntax)
  - [Static File](#static-file)
  - [How Laravel Integrates HTML, CSS, and JS](#how-laravel-integrates-html-css-and-js)
  - [Conditional Rendering](#if--conditional-rendering)
  - [Looping Through Data](#foreach--looping-through-data)
  - [Include Another Blade Template](#include--include-another-blade-template)
  - [Blade Layouts](#blade-layouts)
- [Controllers](#controllers)
  - [Creating a Controller](#creating-a-controller)
  - [Resource Controller](#resource-controller)
  - [Routing to Controllers](#routing-to-controllers)
  - [How Routes are Generated](#how-routes-are-generated)
  - [API Controller](#api-controller)
  - [Key Differences Between `--resource` and `--api`](#key-differences-between---resource-and---api)
- [Models & Eloquent ORM](#models--eloquent-orm)
  - [Creating a Model](#creating-a-model)
  - [Creating Model with Migrations](#creating-model-with-migrations)
  - [Configuring Model Properties](#configuring-model-properties)
  - [Using the Model](#using-the-model)
  - [Full Flow of Migrations](#full-flow-of-migrations)
  - [Relationships](#relationships)
    - [One-to-One](#one-to-one)
    - [One-to-Many](#one-to-many)
    - [Many-to-Many](#many-to-many)
    - [HasManyThrough](#hasmanythrough)
    - [Polymorphic relationships](#polymorphic-relationships)
- [Migrations](#migrations)
  - [Creating a Migration](#creating-a-migration)
  - [Migration File Structure](#migration-file-structure)
  - [Running Migrations](#running-migrations)
  - [Rolling Back Migrations](#rolling-back-migrations)
  - [Example of Adding a New Column](#example-of-adding-a-new-column)

# Installation

## Composer

Using Composer’s `create-project` command:

```bash
composer create-project laravel/laravel myapp
```

- `laravel/laravel` → Laravel’s official skeleton package

This command:

- Downloads the Laravel framework and dependencies
- Sets up folder structure
- Creates `.env` file for environment settings

**Run the Application**

```
cd myapp
php artisan serve
```

### Composer

- Composer is PHP’s dependency manager (like `npm` for JavaScript or `pip` for Python).
- It installs libraries/packages and manages their versions based on requirements.

### create-project

- The command `composer create-project` is not Laravel-specific — it’s a general Composer feature.
- `create-project` is a Composer command that:

  - Downloads a package from Packagist (the PHP package registry) or another repository.
  - Installs it into a new folder instead of your current directory.
  - Runs `composer install` automatically after downloading the package.
  - Allows you to optionally specify a version of the package.

  `"composer create-project"` = “Get me a fresh copy of a package(not only laravel) and set it up in its own folder so I can start working on it.”

### laravel/laravel

- This is the package name you are telling Composer to download.
- On Packagist, `laravel/laravel` is not the Laravel framework itself, but the Laravel starter application.
  - It contains:
    - Default Laravel folder structure (`app/`, `routes/`, `config/`, etc.)
    - A `composer.json` that lists `"laravel/framework"` as a dependency.
  - The actual framework code (routing, Eloquent ORM, queue system, etc.) lives in the `laravel/framework` package, which is installed as part of the process.

So:

- `laravel/laravel` → Skeleton + setup files.
- `laravel/framework` → The actual Laravel codebase (installed later).

### Full process when you run it

1. Composer looks for `laravel/laravel` on Packagist.
2. Downloads the latest release (or specific version if you give one like `laravel/laravel:^11.0`).
3. Extracts it into a folder named `myapp`.
4. Reads its `composer.json` file.
5. Installs all dependencies — including the Laravel framework itself from `laravel/framework`.
6. Runs any scripts defined in `composer.json` (e.g., generating the `APP_KEY`).
7. You now have a ready-to-use Laravel app.

## Laravel Installer

Laravel provides its own global installer, which speeds up new project creation.

1. Install Laravel Installer Globally

```bash
composer global require laravel/installer
```

Ensure `~/.composer/vendor/bin` (Mac/Linux) or `%USERPROFILE%\AppData\Roaming\Composer\vendor\bin` (Windows) is in your PATH.

2. laravel new myapp

```bash
laravel new myapp
```

- Downloads latest Laravel version
- Installs dependencies
- Creates `.env` file
- Runs `composer install` automatically

3. Run the Application

```
cd myapp
php artisan serve
```

## Comparision Table

| Feature                 | Composer Method                           | Laravel Installer Method                |
| ----------------------- | ----------------------------------------- | --------------------------------------- |
| Setup Time              | Slower (downloads dependencies each time) | Faster (uses cached files)              |
| Extra Installation Step | None                                      | Must install Laravel Installer globally |
| Command Used            | `composer create-project ...`             | `laravel new ...`                       |
| Recommended For         | First-time Laravel installation           | Frequent Laravel project creation       |

## Common Post-Installation Steps

After installation, you usually:

1. Set Environment Variables in .env (DB, mail, etc.)
2. Generate App Key (if not already done):

```bash
php artisan key:generate
```

3. Migrate Database

```bash
php artisan migrate
```

# Project Structure

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

## `app/`

- **Purpose:** Contains your application’s core code — controllers, models, middleware, jobs, etc.
- **Subfolders:**

  - `Console/` → Artisan commands.
  - `Exceptions/` → App’s exception handling.
  - `Http/` → Controllers, middleware, and request handling.
  - `Models/` → Eloquent models.
  - `Providers/` → Service providers (bootstrap services for your app).

- **Example:**

  - `app/Http/Controllers/UserController.php` → Handles user-related requests.

## `bootstrap/`

- **Purpose:** Initializes (bootstraps) the framework before handling requests.
- **Key File:** `app.php` — loads configuration and registers services.
- **Example:** When you run `php artisan serve`, Laravel starts here before loading routes and controllers.

## `config/`

- **Purpose:** Stores configuration files for services and app settings.
- **Examples:**
  - `app.php` → Application name, timezone, locale.
  - `database.php` → DB connection settings.
  - `mail.php` → Mail service settings.
- **Example:**
  To change timezone:
  ```
  'timezone' => 'Asia/Dhaka',
  ```

## `database/`

- **Purpose:** Contains migrations, seeders, and factories.
- **Subfolders:**

  - `migrations/` → Version control for database schema.
  - `seeders/` → Populate DB with initial or sample data.
  - `factories/` → Generate fake data for testing.

- **Example:** `2025_08_14_000000_create_users_table.php` → Migration file for users table.

## `public/`

- **Purpose:** Web root — only folder directly accessible from the web.
- **Contents:**
  - `index.php` → Entry point for all HTTP requests.
  - Assets (images, CSS, JS) if needed.
- **Example:** When you visit `http://localhost:8000`, the request hits `public/index.php`.

## `resources/`

- **Purpose:** Contains raw resources (not compiled yet).
- **Subfolders:**
  - `views/` → Blade templates.
  - `lang/` → Language files for localization.
  - `css/`, `js/` → Frontend assets (used with Vite/Laravel Mix).
- **Example:** resources/views/welcome.blade.php → Default welcome page.

## `routes/`

- **Purpose:** Defines URL routes for your application.
- **Files:**

  - `web.php` → Routes for web interface (uses sessions, CSRF).
  - `api.php` → Routes for API (stateless).
  - `console.php` → Artisan command routes.
  - `channels.php` → Broadcast channels.

- **Example:**

```php
Route::get('/hello', function () {
    return 'Hello Laravel';
});
```

## `storage/`

- **Purpose:** Stores generated files — logs, cache, compiled templates, file uploads.
- **Subfolders:**
  - `app/` → Application files.
  - `framework/` → Framework cache, compiled Blade views.
  - `logs/` → Log files (`laravel.log`).
- **Example:** Uploaded file saved as storage/app/uploads/profile.png.

## `tests/`

- **Purpose:** Contains automated tests (PHPUnit / Pest).
- **Subfolders:**
  - `Feature/` → High-level tests (HTTP requests, full workflows).
  - `Unit/` → Small, isolated tests for individual functions.
- **Example:** `tests/Feature/UserTest.php` tests user registration flow.

## `vendor/`

- **Purpose:** Composer dependencies (framework + packages).
- **Example:** Laravel core is inside `vendor/laravel/framework`.

## `.env`

- **Purpose:** Environment configuration file (database credentials, API keys).
- **Example:**

```env
APP_NAME=Laravel
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mydb
DB_USERNAME=root
DB_PASSWORD=
```

## `artisan`

- **Purpose:** CLI tool to run Laravel commands.
- **Example:**

```shell
php artisan route:list
```

## `composer.json`

- **Purpose:** Lists project dependencies and autoload rules.
- **Example:**

```json
"require": {
    "php": "^8.1",
    "laravel/framework": "^10.0"
}
```

# Service Providers and Configuration Files

## Service Providers

- Service providers are the central place to bootstrap (register and configure) services in Laravel.
- They tell Laravel how to load components like routes, events, middleware, and custom services.
- Every major feature in Laravel (auth, queue, events, etc.) is bootstrapped by a service provider.

### Where Are They Defined?

- Default location: `app/Providers/`
- Laravel registers them in `config/app.php` under the `providers` array.

Example in `config/app.php`:

```php
'providers' => [
    /*
     * Laravel Framework Service Providers...
     */
    Illuminate\Auth\AuthServiceProvider::class,
    Illuminate\Broadcasting\BroadcastServiceProvider::class,
    // ...

    /*
     * Application Service Providers...
     */
    App\Providers\AppServiceProvider::class,
    App\Providers\AuthServiceProvider::class,
    App\Providers\RouteServiceProvider::class,
],
```

### Structure of a Service Provider

A service provider class usually has two main methods:

```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MyCustomServiceProvider extends ServiceProvider
{
    // Register bindings in the service container
    public function register()
    {
        // For example: bind an interface to a concrete class
        $this->app->bind('MyService', function () {
            return new \App\Services\MyService();
        });
    }

    // Perform actions after all services have been registered
    public function boot()
    {
        // For example: load custom routes
        require base_path('routes/custom.php');
    }
}
```

### Registering a Custom Service Provider

1. Create:

```shell
php artisan make:provider MyCustomServiceProvider
```

2. Add it to config/app.php → providers array:

```php
App\Providers\MyCustomServiceProvider::class,
```

### Example Use Case:

Let’s say you want to create a Currency Converter Service for your app.

- In `register()` → Bind your converter class to the Laravel service container.
- In `boot()` → You might load currency-related configuration or event listeners.

## Configuration Files

- Stored in the `config/` folder.
- Contain all application settings (app name, DB, cache, mail, session, etc.).
- Readable via the `config()` helper.

### Common Configuration Files

| File           | Purpose                                             |
| -------------- | --------------------------------------------------- |
| `app.php`      | App name, environment, timezone, providers, aliases |
| `database.php` | DB connections & settings                           |
| `mail.php`     | Mail server config                                  |
| `queue.php`    | Queue driver config                                 |
| `session.php`  | Session driver and lifetime                         |
| `services.php` | Third-party service credentials                     |

### Changing the Application Timezone

`config/app.php`

```php
'timezone' => 'Asia/Dhaka',
```

Now, all date/time functions will default to Dhaka time.

### Accessing Config Values in Code

```php
// Get a config value
$appName = config('app.name');

// Set a config value at runtime
config(['app.debug' => false]);
```

### Using Environment Variables in Config

- `.env` file stores sensitive data.
- Config files pull from `.env` using `env()`.

Example from `config/database.php`:

```php
'connections' => [
    'mysql' => [
        'driver'    => 'mysql',
        'host'      => env('DB_HOST', '127.0.0.1'),
        'database'  => env('DB_DATABASE', 'forge'),
        'username'  => env('DB_USERNAME', 'forge'),
        'password'  => env('DB_PASSWORD', ''),
    ],
],
```

`.env`

```
DB_HOST=127.0.0.1
DB_DATABASE=mydb
DB_USERNAME=root
DB_PASSWORD=secret
```

## How Service Providers and Config Files Work Together

Service Providers can read config values when booting services.

For example, a custom `CurrencyServiceProvider` might read an API key from `config/currency.php`.

Example `config/currency.php`:

```php
return [
    'api_key' => env('CURRENCY_API_KEY', 'default-key'),
];
```

Example provider:

```php
public function register()
{
    $this->app->singleton('CurrencyService', function ($app) {
        $apiKey = config('currency.api_key');
        return new \App\Services\CurrencyConverter($apiKey);
    });
}
```

- Service Providers = Bootstrap Laravel features & custom logic.
- Configuration Files = Central place for app settings, linked to `.env`.
- Together, they give Laravel flexibility and scalability.

# Environment Variables

## How Laravel Uses `.env`

- Laravel loads `.env` using the vlucas/phpdotenv package.
- Values are accessed in config files via:
  ```php
  env('KEY_NAME', 'default_value')
  ```
- In app code, you normally use:
  ```php
  config('app.name'); // Reads from config/app.php, which pulls from .env
  ```

## Database Configuration

`.env`

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=myapp
DB_USERNAME=root
DB_PASSWORD=secret
```

`config/database.php`

```php
'connections' => [
    'mysql' => [
        'driver' => 'mysql',
        'host' => env('DB_HOST', '127.0.0.1'),
        'port' => env('DB_PORT', '3306'),
        'database' => env('DB_DATABASE', 'forge'),
        'username' => env('DB_USERNAME', 'forge'),
        'password' => env('DB_PASSWORD', ''),
    ],
],
```

When Laravel boots, it:

- Reads `.env` → finds `DB_HOST=127.0.0.1`
- Passes it to `config/database.php`
- Database connection is set accordingly

## Accessing `.env` Values in Code

While you can call:

```php
env('APP_NAME');
```

Laravel best practice is:

```php
config('app.name'); // Reads from config/app.php
```

Because config files can be cached with:

```shell
php artisan config:cache
```

(Direct `env()` calls won’t work after caching unless inside config files.)

# Laravel Request Lifecycle

A Laravel request goes through these main stages:

```
Browser / API Client
        ↓
public/index.php
        ↓
bootstrap/app.php
        ↓
HTTP Kernel (App\Http\Kernel)
        ↓
Service Providers Booted
        ↓
Middleware Applied
        ↓
Route Handling (routes/web.php or api.php)
        ↓
Controller / Closure Execution
        ↓
Response Prepared
        ↓
Middleware (After) Applied
        ↓
Send Response to Browser
```

## Step 1: Entry Point → `public/index.php`

- Every HTTP request first hits `public/index.php`.
- This file:
  - Loads the Composer autoloader.
  - Bootstraps the Laravel application by including `bootstrap/app.php`.
- **Example:** If you visit `http://localhost:8000/users`, the request lands here first.

## Step 2: Bootstrap Laravel → `bootstrap/app.php`

- Creates the application instance (`$app`).
- Binds important interfaces (HTTP Kernel, Console Kernel, Exception Handler).
- Returns the app instance to `index.php`.

## Step 3: Kernel Handling → `App\Http\Kernel`

- The HTTP Kernel is responsible for:
  - Loading service providers (from `config/app.php`).
  - Running the boot methods of all registered providers.
  - Applying the global middleware stack.
- The Kernel has two middleware types:
  1. Global middleware — runs on every request (e.g., `CheckForMaintenanceMode`, `TrimStrings`).
  2. Route middleware — applied to specific routes.

## Step 4: Service Providers Boot

- All service providers in `config/app.php` are registered, then booted.
- This step loads all necessary parts of the framework (routing, database, sessions, etc.).

## Step 5: Middleware (Before)

- Middleware are filters that can run before and after a request.
- Examples:
  - `Authenticate` → checks if the user is logged in.
  - `VerifyCsrfToken` → checks CSRF tokens for form submissions.

## Step 6: Routing

- The router examines the request URI and HTTP method.
- Matches it to a route in `routes/web.php` or `routes/api.php`.
- Executes the assigned closure or controller method.

Example `routes/web.php`:

```php
Route::get('/users', [UserController::class, 'index']);
```

## Step 7: Controller / Action Execution

- The matched controller method runs.
- Example:

```php
class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }
}
```

## Step 8: Response Preparation

- The controller usually returns:
  - View response → rendered Blade template.
  - JSON response → API data.
  - Redirect → another route.
- Laravel converts this into an HTTP response object.

## Step 9: Middleware (After)

- “After” middleware runs on the outgoing response.
- Examples:
  - Adding security headers.
  - Logging the request/response.

## Step 10: Send Response to Browser

- The HTTP response is sent back to the client.
- The browser or API client receives it and displays the result.

## Example of Request Lifecycle

1. User visits `http://localhost:8000/hello`
2. `public/index.php` → loads Laravel.
3. `bootstrap/app.php` → creates app instance.
4. `App\Http\Kernel` → loads service providers & middleware.
5. Router finds:

   ```php
   Route::get('/hello', function () {
       return 'Hello Laravel!';
   });
   ```

6. Closure executes, returns `Hello Laravel!`.
7. Laravel prepares HTTP response.
8. Middleware (after) modifies response if needed.
9. Browser displays:
   ```
   Hello Laravel!
   ```

# Composer

Composer is the dependency manager for PHP — similar to `npm` in Node.js or `pip` in Python.

- It installs, updates, and autoloads PHP libraries.
- It keeps track of packages in a file called `composer.json`.
- Laravel itself is installed via Composer, and most Laravel features depend on Composer packages.

## Why Laravel Uses Composer

Laravel is made of many smaller packages (like `illuminate/*`) that are maintained separately. Composer:

- Manages dependencies — so you don’t manually download and store libraries.
- Handles autoloading — you don’t have to manually include files (`require` statements).
- Ensures version control — works with semantic versioning (`^8.0`, `~1.2`).

## Basic Composer Commands

| Command                           | Description                                               |
| --------------------------------- | --------------------------------------------------------- |
| `composer init`                   | Create a `composer.json` file interactively               |
| `composer install`                | Install dependencies from `composer.json`                 |
| `composer update`                 | Update dependencies to latest allowed versions            |
| `composer require vendor/package` | Add a package                                             |
| `composer remove vendor/package`  | Remove a package                                          |
| `composer dump-autoload`          | Rebuild autoloader (needed after adding classes manually) |

## Key Composer Files in Laravel

`composer.json`

```json
{
  "require": {
    "php": "^8.1",
    "laravel/framework": "^10.0",
    "guzzlehttp/guzzle": "^7.2"
  },
  "autoload": {
    "psr-4": {
      "App\\": "app/"
    }
  }
}
```

- `require` → runtime dependencies
- `autoload` → tells Composer how to find your classes (Laravel uses PSR-4 autoloading)

`composer.lock`

- Stores the exact versions installed so your teammates get the same setup.
- You commit this file to version control.

## How Autoloading Works in Laravel

Composer generates a file:

```bash
/vendor/autoload.php
```

Laravel’s entry point:

```php
require __DIR__.'/../vendor/autoload.php';
```

This allows Laravel to instantly load all your classes, controllers, and packages based on namespace definitions in `composer.json`.

# Fundamentals

## How Laravel Request Flows in MVC

1. User sends request → example: visits `/users`
2. Route (`routes/web.php`) → decides which Controller to call
3. Controller → talks to Model to get data
4. Model → fetches data from DB
5. Controller → passes data to View
6. View → displays the result to the user

# Routing

Routes in Laravel are defined in the file:

```bash
routes/web.php   → For web (browser-based) requests
routes/api.php   → For API requests (usually JSON responses)
```

They map URLs to specific logic (usually inside a controller or a closure function).

## Basic Route Types

- **GET Route:** `Route::get('/user', [UserController::class, 'show']);`
- **POST Route:** `Route::post('/user', [UserController::class, 'create']);`
- **PUT/PATCH Route:** `Route::put('/user/{id}', [UserController::class, 'update']);`
  - PUT → Usually replaces the whole record.
  - PATCH → Usually updates part of the record.
- **DELETE Route:** `Route::delete('/user/{id}', [UserController::class, 'show']);`
- **Optional Parameter:**
  ```php
  Route::get('/user/{name?}', function ($name = "Guest") {
    return "Hello, " . $name;
  });
  ```
  - without `?`, `name` parameter is required.
  - passing function is called closures function.
- **Parameter Constraints:**
  ```php
  Route::get('/user/{name}/{age}', function ($name, $age) {
      return "$name is $age years old.";
  })->where([
      'name' => '[A-Za-z]+',
      'age' => '[0-9]+'
  ]);
  ```
  - Restricts `{id}` to only numbers using regex.

## Naming Routes

You can assign a name to a route and refer to it elsewhere (e.g., in redirects or Blade templates).

```php
Route::get('/dashboard', function () {
    return "Welcome to Dashboard!";
})->name('dashboard');

// Using the named route in redirect
Route::get('/go-dashboard', function () {
    return redirect()->route('dashboard');
});
```

- `{{ route('dashboard') }}` - in blade templates.
- `route('user.profile', ['id' => 25])` - with parameters.

## Redirect Routes

```php
Route::redirect('/old-home', '/new-home');
```

Visiting `/old-home` automatically sends the user to `/new-home`.

## View Routes

Shortcut to directly return a Blade view without a controller.

```php
Route::view('/welcome', 'welcome');
```

This will render `resources/views/welcome.blade.php`.

## Grouping Routes

Grouping allows you to apply middleware, prefixes, or namespaces.

- If all routes share a common starting path, you can use `prefix()`.
- If you want all routes in a group to share a name prefix, use `name()`.
- You can apply middleware to all routes in the group, use `middleware(['auth])`.

```php
Route::prefix('admin')
    ->name('admin.')
    ->middleware(['auth', 'isAdmin'])
    ->group(function () {
        Route::get('/dashboard', function () {
            return "Admin Dashboard";
        })->name('dashboard');
        Route::get('/users', function () {
            return "Admin Users List";
        })->name('users');
    });
```

- URL: `/admin/dashboard` → Name: `admin.dashboard`
- URL: `/admin/users` → Name: `admin.users`

# Blade Syntax

Passing parameter in Blade:

```php
// Generating URL in Blade:
{{ route('profile', ['username' => 'JohnDoe']) }}
```

## Static File

```php
<!-- resources/views/home.blade.php -->
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<h1 class="title">Welcome</h1>
```

- Laravel uses `public/` for serving static assets like CSS files.
- `asset('css/style.css')` generates the correct URL which is stored at `public/css`.

## How Laravel Integrates HTML, CSS, and JS

1. Views (`resources/views/`) → HTML + Blade syntax
2. Assets:

   - CSS in `public/css/`
   - JS in `public/js/`

3. Vite (or Laravel Mix) compiles modern CSS/JS frameworks like Tailwind or Vue.
4. Blade Directives like `@vite` and `@section` make asset loading easy.

**Example with Vite:**

```php
<!DOCTYPE html>
<html>
<head>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <h1>Laravel + Vite</h1>
</body>
</html>
```

## `@if` – Conditional Rendering

The `@if` directive is used to conditionally display content in a Blade template.
It works like a standard PHP `if` statement but is cleaner and easier to read in views.

```php
@if ($user->isAdmin())
    <p>Welcome, Administrator!</p>
@else
    <p>Welcome, Regular User!</p>
@endif
```

- You can also use `@elseif` for more conditions

## `@foreach` – Looping Through Data

The `@foreach` directive loops over an array or collection.

```php
<ul>
@foreach ($products as $product)
    <li>{{ $product->name }} - ${{ $product->price }}</li>
@endforeach
</ul>
```

- The `{{ }}` syntax is used to escape and print variables.

## `@include` – Include Another Blade Template

`@include` allows you to reuse Blade components by including other view files.

```php
{{-- main.blade.php --}}
<div>
    <h1>Main Page</h1>
    @include('partials.navbar')
</div>
```

## Blade Layouts

In Laravel, Blade layouts let you define a master template (parent layout) that contains common HTML structure, and then have multiple child templates that fill in specific parts of that structure.

It’s like creating a “mold” for your pages so you don’t repeat the same header, footer, or navigation code in every file.

Blade layouts rely on 3 main directives:

1. `@extends` — tells a child template which layout to use.
2. `@section` — defines the content for a specific area.
3. `@yield` — creates placeholders in the layout for sections.

### Create the Master Layout – Define a Section Placeholder

`@yield` is used in layout templates to specify where child content should be injected.

```php
{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    @include('partials.navbar') {{-- Common navbar for all pages --}}

    <div class="container">
        @yield('content') {{-- Main content placeholder --}}
    </div>

    <footer>
        <p>© 2025 My Website</p>
    </footer>
</body>
</html>
```

- `@yield('title')` and `@yield('content')` are placeholders where child templates will insert content.
- Works together with `@section`.

### Create a Child Template – Define Content for a Section

`@section` defines the actual content that fills a `@yield` placeholder in the parent layout.

```php
{{-- resources/views/home.blade.php --}}
@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
    <h1>Welcome to My Website</h1>
    <p>This is the homepage.</p>
@endsection
```

- `@extends('layouts.app')` tells Blade that this template uses `layouts/app.blade.php` as its layout.
- `@section('title', 'Home Page')` sets the title section in one line.
- `@section('content')` matches the `@yield('content')` from the layout, filling it with actual HTML.

### Putting It All Together

`layouts/app.blade.php`

```php
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    @include('partials.navbar')

    <main>
        @yield('content')
    </main>
</body>
</html>
```

`home.blade.php`

```php
@extends('layouts.app')

@section('title', 'Home Page')

@section('content')
    <h1>Product List</h1>
    <ul>
        @foreach ($products as $product)
            @if ($product->inStock)
                <li>{{ $product->name }} - ${{ $product->price }}</li>
            @else
                <li>{{ $product->name }} - Out of Stock</li>
            @endif
        @endforeach
    </ul>
@endsection
```

- The layout provides the skeleton with `@yield` placeholders.
- The child view fills in the placeholders using `@section`.
- The partial is included in the layout so it appears across multiple pages.

### How It Works Together

When `home.blade.php` is rendered:

1. Laravel looks at `@extends('layouts.app')`.
2. It loads `layouts/app.blade.php`.
3. It replaces `@yield('title')` with "Home Page".
4. It replaces `@yield('content')` with the HTML from `@section('content')`.
5. The `@include('partials.navbar')` is inserted from the partial file.

### Extra Blade Layout Features

- `@parent` → Allows a section to append content to the layout’s default content.
- `@stack` & `@push` → Useful for adding scripts/styles from child views to a layout stack.
- Nested Layouts → A layout can itself extend another layout.

# Controllers

In Laravel, a controller is a PHP class that groups related request-handling logic into methods.
It acts as the middleman between your routes and your business logic (models, services, etc.).

## Creating a Controller

You can create controllers in Laravel using Artisan CLI.

```bash
php artisan make:controller ProductController
```

This creates a file in:

```bash
app/Http/Controllers/ProductController.php
```

It contains a class like:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
}
```

## Resource Controller

If you want to create a controller with predefined CRUD methods, use:

```bash
php artisan make:controller ProductController --resource
```

This creates methods like:

- `index()` → list all resources
- `create()` → show create form
- `store()` → save new resource
- `show($id)` → show a single resource
- `edit($id)` → show edit form
- `update(Request $request, $id)` → update existing resource
- `destroy($id)` → delete resource

## Routing to Controllers

In `routes/web.php`:

```php
use App\Http\Controllers\ProductController;

// Single route
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::resource('products', ProductController::class);
```

- Visiting `http://your-app.test/products` calls `index()`
- Visiting `http://your-app.test/products/5` calls `show(5)`

## How Routes are Generated

You can see all routes generated by running:

```bash
php artisan route:list
```

Example output:

```bash
GET|HEAD   products              → ProductController@index
GET|HEAD   products/create       → ProductController@create
POST       products              → ProductController@store
GET|HEAD   products/{product}    → ProductController@show
GET|HEAD   products/{product}/edit → ProductController@edit
PUT|PATCH  products/{product}    → ProductController@update
DELETE     products/{product}    → ProductController@destroy
```

## API Controller

An API Controller is a controller in Laravel designed specifically for handling API requests.

Key differences from normal web controllers:

- Returns JSON responses instead of HTML views.
- No need for methods like `create()` or `edit()` (because APIs usually don’t serve HTML forms).
- Often uses `api.php` routes instead of `web.php`.
- Can be created with the `--api` flag in Artisan, which skips view-related methods.

```BASH
php artisan make:controller ProductController --api
```

This will generate a controller without `create()` and `edit()` methods — only the CRUD methods that make sense for APIs.

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = [
            ["id" => 1, "name" => "Laptop", "price" => 1200],
            ["id" => 2, "name" => "Phone", "price" => 800],
        ];

        return response()->json($products);
    }
}
```

For APIs, we use `routes/api.php` instead of `routes/web.php`:

```php
use App\Http\Controllers\ProductController;

Route::apiResource('products', ProductController::class);
```

## Key Differences Between `--resource` and `--api`

| Feature               | Resource Controller              | API Controller                      |
| --------------------- | -------------------------------- | ----------------------------------- |
| `create()` & `edit()` | ✅ Included                      | ❌ Removed                          |
| Designed for          | Web apps with HTML views         | APIs with JSON responses            |
| Routes                | `Route::resource()` in `web.php` | `Route::apiResource()` in `api.php` |
| Response type         | HTML views or JSON               | JSON only                           |

# Models & Eloquent ORM

A model in Laravel is a PHP class that represents a table in your database and provides an abstraction layer for interacting with that table using Eloquent ORM (Object-Relational Mapping).

- Each model maps to one database table.
- Each model object represents one row in that table.
- Eloquent lets you interact with the database without writing raw SQL.

## Creating a Model

Laravel’s Artisan command makes it quick:

```bash
php artisan make:model Product
```

**Default Content:**

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // By default, Eloquent assumes:
    // Table name: 'products'
    // Primary key: 'id'
    // Timestamps: 'created_at' & 'updated_at'
}
```

## Creating Model with Migrations

Often you create a model along with its table schema:

```bash
php artisan make:model Product -m
```

This creates:

- `app/Models/Product.php` (Model)
- `database/migrations/2025_08_15_000000_create_products_table.php` (Migration)

You then edit the migration to define columns:

```php
public function up(): void
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->decimal('price', 8, 2);
        $table->integer('stock')->default(0);
        $table->timestamps();
    });
}
```

**Run migration:**

```bash
php artisan migrate
```

## Configuring Model Properties

Eloquent provides some important properties you can configure.

### `$table`

If the table name doesn’t follow Laravel’s naming convention (plural of model name):

```php
protected $table = 'my_products';
```

### `$primaryKey`

If your primary key is not `id`:

```php
protected $primaryKey = 'product_id';
```

### `$timestamps`

If the table doesn’t have `created_at` and `updated_at` columns:

```php
public $timestamps = false;
```

### `$fillable`

Defines which columns can be mass assigned:

```php
protected $fillable = ['name', 'price', 'stock'];
```

**Example useage:**

```php
Product::create([
    'name' => 'Laptop',
    'price' => 1200.50,
    'stock' => 10
]);
```

Without `$fillable`, the above would throw a MassAssignmentException.

### `$guarded`

The opposite of `$fillable` — defines which columns cannot be mass assigned.

```php
protected $guarded = ['id'];
```

## Using the Model

### Insertion

```php
$product = new Product();
$product->name = 'Phone';
$product->price = 800.00;
$product->stock = 5;
$product->save();
```

### Retrieve

```php
$allProducts = Product::all();
$singleProduct = Product::find(1);
$expensive = Product::where('price', '>', 1000)->get();
```

### Update

```php
$product = Product::find(1);
$product->stock = 20;
$product->save();
```

### Delete

```php
Product::destroy(1);
// or
$product = Product::find(2);
$product->delete();
```

## Full Flow of Migrations

1. **Create model with migration**

```shell
php artisan make:model Product -m
```

2. **Migration**

```php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->decimal('price', 8, 2);
    $table->integer('stock')->default(0);
    $table->timestamps();
});
```

3. **Model configuration**

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'price', 'stock'];
}
```

4. **Using the model**

```php
// Create
Product::create([
    'name' => 'Tablet',
    'price' => 350.00,
    'stock' => 15
]);

// Read
$products = Product::all();

// Update
$product = Product::find(1);
$product->price = 300.00;
$product->save();

// Delete
Product::destroy(1);
```

- Naming conventions matter (table plural, primary key `id`, timestamps).
- `$fillable` and `$guarded` protect against mass assignment vulnerabilities.
- You can create models with or without migrations, but usually both are used together.

## Relationships

### One-to-One

A row in one table is related to exactly one row in another table.

Example: A User has one Profile.

**Database Structure:**

```bash
users
  id | name | email
profiles
  id | user_id | bio | avatar
```

**Model Definition:**
`User.php`

```php
public function profile(){
    return $this->hasOne(Profile::class);
}
```

`Profile.php`

```php
public function user(){
    return $this->belongsTo(User::class);
}
```

**Usage:**

```php
$user = User::find(1);
echo $user->profile->bio; // Access profile info

$profile = Profile::find(1);
echo $profile->user->name; // Access user info
```

### One-to-Many

One record in a table can be related to multiple records in another table.

Example: A Post has many Comments.

**Database Structure:**

```bash
posts
  id | title | content
comments
  id | post_id | body
```

**Model Definitions:**
`Post.php`

```php
public function comments(){
    return $this->hasMany(Comment::class);
}
```

`Comment.php`

```php
public function post(){
    return $this->belongsTo(Post::class);
}
```

**Usage:**

```php
$post = Post::find(1);
foreach ($post->comments as $comment) {
    echo $comment->body;
}

$comment = Comment::find(1);
echo $comment->post->title;
```

### Many-to-Many

A record in one table can belong to many records in another table, and vice versa.
This requires a pivot table.

**Databsae Structure:**

```
students
  id | name
courses
  id | title
course_student
  student_id | course_id
```

**Model Definitions:**
`Model.php`

```php
public function courses(){
    return $this->belongsToMany(Course::class);
}
```

`Course.php`

```php
public function students(){
  return $this->belongsToMany(Student::class);
}
```

**Usage:**

```php
// Attach relationship
$student = Student::find(1);
$student->courses()->attach(2); // Add course_id 2

// Detach relationship
$student->courses()->detach(2);

// Sync relationships (replace with new set)
$student->courses()->sync([1, 3]);

// Retrieve
foreach ($student->courses as $course) {
    echo $course->title;
}
```

### HasManyThrough

A “shortcut” relationship to access related models through an intermediate model.

Example: A Country has many Posts through Users.

**Database Structure:**

```
countries
  id | name
users
  id | country_id | name
posts
  id | user_id | title
```

**Model definitions**
`Country.php`

```php
public function posts(){
    return $this->hasManyThrough(Post::class, User::class);
}
```

- Country → Users (`hasMany`)
- Users → Posts (`hasMany`)
- HasManyThrough skips explicitly loading users.

**Usage:**

```php
$country = Country::find(1);
foreach ($country->posts as $post) {
    echo $post->title;
}
```

### Polymorphic relationships

Allows a model to belong to multiple other models using a single association.

**Database Structure:**

```
posts
  id | title
videos
  id | title
comments
  id | commentable_id | commentable_type | body
```

**Model Definitions:**
`Comment.php`

```php
public function commentable(){
    return $this->morphTo();
}
```

`Post.php`

```php
public function comments(){
    return $this->morphMany(Comment::class, 'commentable');
}
```

`Video.php`

```php
public function comments(){
    return $this->morphMany(Comment::class, 'commentable');
}
```

**Usage:**

```php
$post = Post::find(1);
$post->comments()->create(['body' => 'Nice post!']);

$video = Video::find(1);
$video->comments()->create(['body' => 'Great video!']);

// Retrieve polymorphic parent
$comment = Comment::find(1);
echo $comment->commentable->title; // Works for both Post or Video
```

### Summary of Relationsips

| Relationship   | Example                     | Laravel Method(s)       |
| -------------- | --------------------------- | ----------------------- |
| One-to-One     | User → Profile              | `hasOne` / `belongsTo`  |
| One-to-Many    | Post → Comments             | `hasMany` / `belongsTo` |
| Many-to-Many   | Student ↔ Course            | `belongsToMany`         |
| HasManyThrough | Country → Posts (via Users) | `hasManyThrough`        |
| Polymorphic    | Comments on Post & Video    | `morphMany`, `morphTo`  |

# Migrations

- Migrations are version control for your database schema.
- They allow you to define and modify database tables using PHP instead of manually writing SQL queries.
- Think of them as the blueprint for your database that can be shared and tracked in version control (like Git).

## Creating a Migration

You can create a migration file using Artisan command:

```bash
php artisan make:migration create_users_table
```

- `make:migration` → tells Laravel to create a new migration.
- `create_users_table` → the name of the migration (follows convention: `create_<table>_table`).

After running this, a new file will be created in:

```bash
database/migrations/2025_08_16_000000_create_users_table.php
```

(The timestamp ensures migrations run in order.)

## Migration File Structure

A migration file has two main methods:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();                      // Auto-increment primary key
            $table->string('name');            // VARCHAR field
            $table->string('email')->unique(); // Unique constraint
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();           // For "remember me" sessions
            $table->timestamps();              // created_at & updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users'); // rollback action
    }
};
```

- `up()` → Defines changes to apply (create/modify tables).
- `down()` → Defines how to reverse changes (rollback).

## Running Migrations

After creating a migration, run:

```shell
php artisan migrate
```

This executes all pending migrations and creates/updates tables in your database.

## Rolling Back Migrations

If something goes wrong, you can undo:

```bash
php artisan migrate:rollback
```

- Rolls back the last batch of migrations.

To rollback all migrations:

```bash
php artisan migrate:reset
```

To rollback and re-run migrations in one go:

```bash
To rollback and re-run migrations in one go:
```

## Example of Adding a New Column

If you want to add a column (say `phone`) to an existing `users` table:

```bash
php artisan make:migration add_phone_to_users_table --table=users
```

**Generated Migrations:**

```php
public function up(): void
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('phone')->nullable()->after('email');
    });
}

public function down(): void
{
    Schema::table('users', function (Blueprint $table) {
        $table->dropColumn('phone');
    });
}
```

**Run:**

```php
php artisan migrate
```

Now `users` table has a `phone` column.
