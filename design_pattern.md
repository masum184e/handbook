# Content
- [Code Smells](#code-smells)
    - [Within Classes](#code-smells-within-classes)
        - [Comment](#comment)
        - [Long Method](#long-method)
        - [Long Parameter List](#long-parameter-list)
        - [Duplicate Code](#duplicate-code)
        - [Dead Code](#dead-code)
        - [Large Class](#large-class)
    - [Between Classes](#between-classes)
        - [Data Class](#data-class)
        - [Data Clumps](#data-clumps)
        - [Alternative Classes with Different Interfaces](#alternative-classes-with-different-interfaces)
        - [Refused Bequest](#refused-bequest)
        - [Lazy Class](#lazy-class)
        - [Shotgun Surgery](#shotgun-surgery)
- [Solid Principle](#solid-principle)
    - [Single Responsibility Principle (SRP)](#single-responsibility-principle-srp)
    - [Open/Closed Principle (OCP)](#openclosed-principle-ocp)
    - [Liskov Substitution Principle (LSP)](#liskov-substitution-principle-lsp)
    - [Interface Segregation Principle (ISP)](#interface-segregation-principle-isp)
    - [Dependency Inversion Principle (DIP)](#dependency-inversion-principle-dip)
- [Design Patterns](#design-patterns)
    - [Creational Design Pattern](#creational-design-pattern)
        - [Singleton Method Design Pattern](#singleton-method-design-pattern)
        - [Factory Method Design Pattern](#factory-method-design-pattern)
        - [Abstract Factory Method Design Pattern](#abstract-factory-design-pattern)
        - [Prototype Method Design Pattern](#prototype-method-design-pattern)
        - Builder Method Design Pattern
    - [Structural Design Pattern](#structural-design-pattern)
        - [Adapter Method Design Pattern](#adapter-method-design-pattern)
        - [Decorator Method Design Pattern](#decorator-method-design-pattern)
        - Bridge Method Design Pattern
        - [Composite Method Design Pattern](#composite-method-design-pattern)
        - Facade Method Design Pattern
        - Flyweight Method Design Pattern
        - Proxy Method Design Pattern
    - Behavioral Design Pattern
        - [Chain Of Responsibility Method Design Pattern](#chain-of-responsibility-method-design-pattern)
        - Interpreter Method Design Pattern
        - [State Method Design Pattern](#state-method-design-pattern)
        - [Strategy Method Design Pattern](#strategy-method-design-pattern)
        - [Template Method Design Pattern](#template-method-design-pattern)
        - Visitor Method Design Pattern
        - [Command Method Design Pattern](#command-method-design-pattern)
        - Mediator Method Design Pattern
        - Memento Method Design Patterns
        - Observer Method Design Pattern
        - [Iterator Method Design Pattern](#iterator-method-design-pattern)
        - [Null Object Design Pattern](#null-object-design-pattern)
- [Refactoring](#refactoring)
- [Anti Pattern](#anti-pattern)
# Code Smells
When we work on an application and write codes for it, we see a few patterns that are needed to be refactored. Those patterns either `duplicates`, or might make `code dependent on other code`. Such patterns are called Code Smells and detection of such code is called Code Smelling.

Code Smells are not the bugs of the program. With code smells too, your program might work just fine. They do not prevent the program from functioning or are incorrect. They just signify the weakness in design and might increase the risk of bugs and program failure in the future.

## Types of Code Smells
Although there are more than a hundred of code smells. The list of the most common and the most repeating code smells are given below. These are broadly divided into `2 main categories`.
    - Within Classes
    - Between Classes
## Code Smells Within Classes
### Comment
Comment can be used for explaining the code. But what if our written code is self-explanatory, then we don't need to use comment. Overuse or missuse can give worst readiability experience.

__Definition:__ Comment Code Smell refers to the overuse or misuse of comments in the code, indicating that the code might be poorly written or not self-explanatory enough.

While comments can be helpful in explaining complex logic, excessive or unnecessary comments often suggest that the code itself could be improved to become more readable or self-explanatory.

#### Why Comment Code Smell is a Problem?
- __Redundant Comments:__ When comments explain something that is obvious from the code itself, they become redundant.

    __Example:__
    ```java
    // This is a constructor for the Customer class
    public Customer() {
        // Initialize the customer's name to an empty string
        this.name = "";
        // Set the customer's age to zero
        this.age = 0;
    }
    ```
    The comments here are stating what is already clear from the code, a constructor.
    __Better Approach:__
    ```java
    public Customer() {
        this.name = "";
        this.age = 0;
    }
    ```
- __Outdated Comments:__ Comments can become outdated if the code changes but the comments don’t get updated.

    __Example:__
    ```java
    // Fetch the customer's name from the database
    String customerName = getCustomerNameFromCache();
    ```
    The comment suggests that the code is fetching the customer's name from the database, but the method is actually fetching it from a cache.

    __Better Aproach:__
    ```java
    String customerName = getCustomerName();
    ```
- __Commented-Out Code:__ Leaving large blocks of commented-out code can cause confusion about whether that code is still needed or not.

    __Example:__
    ```java
    public void processPayment(Payment payment) {
        // PaymentGateway gateway = new PaymentGateway();
        // gateway.connect();
        // gateway.process(payment);
    
        payment.processLocally();
    }
    ```
    It’s not clear whether this code should be kept for future use, removed completely, or if it’s obsolete.
    __Better Aproach:__
    ```java
    public void processPayment(Payment payment) {
        payment.processLocally();
    }
    ```
### Long Method 
A long method contains too many lines of code. Any code with more than 25 lines of code should make you question.
#### Why Long Methods Are a Problem
- Reduced Readability
- Harder to Debug
- Low Reusability

__Solution:__ Split the method into smaller methods, each with a single responsibility.
### Long Parameter List
Any function with more parameters is obviously more complex. One of the thumb rules is to use a maximum of 3 to 4 parameters in a function.
#### Why Long Parameter Lists Are a Problem?
- Reduces Readability
- Increases the Likelihood of Errors
- Difficult to Maintain

__Solution:__ When a set of parameters naturally belongs together, group them into a single object and pass it through the method.
### Duplicate Code
Duplicate Code code smell occurs when the same or very similar code appears in more than one place in a program. This is considered problematic because it leads to higher maintenance costs, increases the chances of bugs, and makes code more difficult to modify or extend.

__Solution:__
- __Extract Method__: If you have similar blocks of code in different parts of a class, you can refactor that logic into a separate method. If the duplicated code is found across multiple classes, extract the common code into a shared method(in a different class).
- __Pull-Up Constructor Body__: If multiple classes contain similar behavior, you can use inheritance or interfaces to abstract the shared logic into a base class or interface.
### Dead Code
Dead Code code smell refers to parts of the codebase that are never executed or used in the program.

__Solution:__ Just removed it.
### Large Class
Large Class code smell occurs when a class in an application contains too many responsibilities or too much code, making it difficult to understand, maintain, and modify. This happens when a class tries to handle more than it should, violating the Single Responsibility Principle (SRP), which states that a class should have only one reason to change.

__Solution:__ Just separate into multiple classes.
## Between Classes
### Data Class
A Data Class code smell refers to classes that primarily consist of fields, no methods, may associated with getter and setter methods. It have lacking of meaningful behavior or logic. Instead of having methods that operate on their data, they simply store it.

These classes typically violate key object-oriented principles like encapsulation and cohesion. Instead of encapsulating behavior and acting as meaningful abstractions, they act as mere containers for data. They can’t independently operate on the data that they own.

__Solution:__ introduce some behavior and keep some logic inside the class
### Data Clumps
Data Clumps code smell occurs when the same group of data items (variables, parameters, fields) tend to appear together in multiple places in the code. Instead of repeating the same set of data multiple times, this group should be encapsulated in a class or structure, which reduces duplication, increases readability, and improves maintainability.

__Problem:__
```java
public class Order {
    private String customerName;
    private String customerAddress;
    private String customerPhone;
    
    public Order(String customerName, String customerAddress, String customerPhone) {
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.customerPhone = customerPhone;
    }

    public void processOrder(String customerName, String customerAddress, String customerPhone) {
        System.out.println("Processing order for " + customerName);
        System.out.println("Shipping to: " + customerAddress);
        System.out.println("Contact phone: " + customerPhone);
    }

    public void shipOrder(String customerName, String customerAddress, String customerPhone) {
        System.out.println("Shipping order for " + customerName);
        System.out.println("Address: " + customerAddress);
        System.out.println("Phone: " + customerPhone);
    }
}
```
__Solution:__
```java
public class Customer {
    private String name;
    private String address;
    private String phone;

    public Customer(String name, String address, String phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }
}

public class Order {
    private Customer customer;
    
    public Order(Customer customer) {
        this.customer = customer;
    }

    public void processOrder() {
        System.out.println("Processing order for " + customer.getName());
        System.out.println("Shipping to: " + customer.getAddress());
        System.out.println("Contact phone: " + customer.getPhone());
    }

    public void shipOrder() {
        System.out.println("Shipping order for " + customer.getName());
        System.out.println("Address: " + customer.getAddress());
        System.out.println("Phone: " + customer.getPhone());
    }
}
```
### Alternative Classes with Different Interfaces
Alternative Classes with Different Interfaces code smell occurs when two or more classes are doing the same or similar jobs but have different method names or interfaces.

__Solution:__ If two classes have similar functionality, merge them into once class with a single interface. If classes perform similar but slightly different tasks, introduce a common interface or abstract class that both classes can implement or inherit from. If the classes can't be merged, you can extract the common functionality into a helper class and delegate the work to it.
### Refused Bequest
Refused Bequest is a code smell that occurs when a subclass inherits methods or properties from a parent class but doesn’t use or “want” them. This can happen when a subclass extends a base class but only needs part of its functionality, resulting in an awkward inheritance relationship. The subclass essentially "refuses" some of the inheritance it receives, leading to unused or irrelevant code in the subclass.

This code smell usually indicates poor inheritance design and violates the Liskov Substitution Principle (LSP), which states that objects of a subclass should be able to substitute objects of the base class without altering the correctness of the program.

__Solution:__ refactor the base class into two or more classes and allow the subclass to inherit from the appropriate one or you can use interface.
### Lazy Class
Lazy Class is a code smell that occurs when a class doesn’t do enough work to justify its existence. This happens when a class is created for a specific purpose but over time ends up with very few methods or limited functionality.

__Soultion:__ Remove unnecessary part, or merge the use full part with a relevent class
### Shotgun Surgery
Shotgun Surgery is a code smell that occurs when a change in one part of the code requires making several small changes across multiple classes or methods.

__Solution:__ Consolidate related behavior into a single class or fewer classes. Group related data into classes, and hide unnecessary dependencies.
# Solid Principle
The SOLID principles are a set of five design principles intended to make object-oriented software designs more understandable, flexible, and maintainable

The SOLID principle helps in reducing tight coupling. Tight coupling means a group of classes are highly dependent on one another which you should avoid in your code.

Opposite of tight coupling is loose coupling and your code is considered as a good code when it has loosely-coupled classes.
Loosely coupled classes minimize changes in your code, helps in making code more reusable, maintainable, flexible and stable.
## Single Responsibility Principle (SRP)
A class should have only one reason to change, meaning it should only have one job or responsibility.
## Open/Closed Principle (OCP)
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
## Liskov Substitution Principle (LSP)
Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
## Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they do not use. Instead of one large interface, multiple smaller and more specific interfaces are preferable.
## Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details, and details should depend on abstractions.

__Example__: Suppose a class `BackendDeveloper` directly depends on another class `Database`. This creates tight coupling between the two classes.

__Violation of DIP:__
```java
class Database {
    public void connect() {
        System.out.println("Connected to database");
    }
}

class BackendDeveloper {
    private Database database;

    public BackendDeveloper(Database database) {
        this.database = database;
    }

    public void develop() {
        database.connect();
        System.out.println("Developing backend...");
    }
}
```
__Applying DIP:__
```java
interface DatabaseConnection {
    void connect();
}

class MySQLConnection implements DatabaseConnection {
    public void connect() {
        System.out.println("Connected to MySQL database");
    }
}

class BackendDeveloper {
    private DatabaseConnection databaseConnection;

    public BackendDeveloper(DatabaseConnection databaseConnection) {
        this.databaseConnection = databaseConnection;
    }

    public void develop() {
        databaseConnection.connect();
        System.out.println("Developing backend...");
    }
}
```
# Design Patterns
## Creational Design Pattern
These patterns deal with object creation. They aim to simplify the creation process and provide mechanisms for creating objects in a manner that suits the given situation.
### Singleton Method Design Pattern
Ensures that a class has only one instance and provides a global point of access to it.
#### Structure
- `Private constructor`: This prevents other classes from creating new instances.
- `Static private instance`: This holds the single instance of the class.
- `Static method (getInstance)`: Provides a global point of access to the instance.
#### Example
```java
class Singleton {
    // Step 1: Create a private static instance of the class.
    private static Singleton instance;

    // Step 2: Make the constructor private to prevent instantiation.
    private Singleton(){
        System.out.println("Object Created");
        ...
    }

    // Step 3: Provide a public static method to get the instance.
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

public class Main{
    public static void main(String[] args){
        Singleton a1 = Singleton.getInstance();
        Singleton a2 = Singleton.getInstance();
        Singleton a3 = Singleton.getInstance();
        Singleton a4 = Singleton.getInstance();
        Singleton a5 = Singleton.getInstance();
        // Singleton a2 = new Singleton();
    }
}
```
### Factory Method Design Pattern
Defines an interface for creating an object but lets subclasses alter the type of object that will be created. This pattern is useful when the creation process varies based on input conditions.
#### Structure
- `Product (interface)`: Defines the interface for objects created by the factory method.
- `Concrete Product`: Implements the product interface.
- `Factory`: Declares the factory method, which returns an object of type Product. It may also define the default implementation of the factory method.
#### Example
```java
// Product interface
interface Animal {
    void speak();
}

// Concrete Products
class Dog implements Animal {
    public void speak() {
        System.out.println("Bark!");
    }
}

class Cat implements Animal {
    public void speak() {
        System.out.println("Meow!");
    }
}

// Factory
class AnimalFactory {
    public Animal getAnimal(String type) {
        if ("Dog".equalsIgnoreCase(type)) {
            return new Dog();
        } else if ("Cat".equalsIgnoreCase(type)) {
            return new Cat();
        }
        return null;
    }
}
```
### Abstract Factory Design Pattern
It provides an interface for creating families of related or dependent objects without specifying their concrete classes. This pattern is especially useful when your system needs to create different types of objects that belong to a group, where each object group is logically related but differs in concrete implementation.
#### Structure
- `Abstract Product`: Declares an interface for a type of product object.
- `Abstract Factory`: Declares an interface for creating abstract products.
- `Concrete Product`: Implements the interface to create specific products.
- `Concrete Factory`: Implements the interface to create concrete products.
- `Client`: Uses the factory methods to create objects but remains unaware of their concrete implementation.
#### Example
```java
// Abstract product for Button
interface Button{
    public void paint();
}

// Abstract product for Checkbox
interface CheckBox{
    public void paint();
}

// Concrete product for Windows Button
class WindowsButton implements Button{
    public void paint(){
        System.out.println("Windows Button");
    }
}

// Concrete product for MacOS Button
class MacButton implements Button{
    public void paint(){
        System.out.println("Mac Button");
    }
}

// Concrete product for Windows Checkbox
class WindowsCheckbox implements CheckBox{
    public void paint(){
        System.out.println("Windows Checkbox");
    }
}

// Concrete product for MacOS Checkbox
class MacCheckbox implements CheckBox{
    public void paint(){
        System.out.println("Mac Checkbox");
    }
}

// Abstract factory
interface GUIFactory{
    public Button createButton();
    public CheckBox createCheckbox();
}

// Concrete factory for Windows
class WindowsFactory implements GUIFactory{
    public Button createButton(){
        return new WindowsButton();
    }
    public CheckBox createCheckbox(){
        return new WindowsCheckbox();
    }
}

// Concrete factory for MacOS
class MacFactory implements GUIFactory{
    public Button createButton(){
        return new MacButton();
    }
    public CheckBox createCheckbox(){
        return new MacCheckbox();
    }
}

// Client class
class Client{
    private Button button;
    private CheckBox checkBox;

    Client(GUIFactory factory){
        button = factory.createButton();
        checkBox = factory.createCheckbox();
    }

    public void paint(){
        button.paint();
        checkBox.paint();
    }
}

// Implementation
class Main{
    public static void main(String[] args){
        GUIFactory factory;
        String osName = System.getProperty("os.name").toLowerCase();
        if (osName.contains("mac")) {
            factory = new MacFactory();
        }else{
            factory = new WindowsFactory();
        }

        Client client = new Client(factory);
        client.paint();
    }
}
```
### Prototype Method Design Pattern
It is used to create objects by copying an existing object (called the prototype) rather than creating new instances from scratch. This pattern is particularly useful when object creation is costly (due to complexity, time, or memory), and when the object to be created is similar to an existing one.
#### Structure
- __Prototype__: An interface (or abstract class) that defines the `clone()` method.
- __Concrete Prototype__: Implements the `clone()` method to create a copy of the object.
- __Client__: Creates a new object by calling `clone()` on the prototype.
#### Example
```java
// Step 1: Define Prototype Interface
interface Prototype {
    Prototype clone();  // Method for cloning
}

// Step 2: Create Concrete Prototype
class SoftwareLicense implements Prototype {
    private String licenseType;
    private String ownerName;

    public SoftwareLicense(String licenseType, String ownerName) {
        this.licenseType = licenseType;
        this.ownerName = ownerName;
    }

    @Override
    public SoftwareLicense clone() {
        return new SoftwareLicense(this.licenseType, this.ownerName);
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public void displayLicense() {
        System.out.println("License Type: " + this.licenseType + ", Owner: " + this.ownerName);
    }
}

// Step 3: Client code
public class Main {
    public static void main(String[] args) {
        SoftwareLicense originalLicense = new SoftwareLicense("Premium", "Alice");
        originalLicense.displayLicense();

        SoftwareLicense clonedLicense1 = originalLicense.clone();
        System.out.println("\nFirst Copy");
        clonedLicense1.displayLicense();
        clonedLicense1.setOwnerName("Bob");
        clonedLicense1.displayLicense();

        SoftwareLicense clonedLicense2 = originalLicense.clone();
        System.out.println("\nSecond Copy");
        clonedLicense2.displayLicense();
        clonedLicense2.setOwnerName("Charlie");
        clonedLicense2.displayLicense();

        SoftwareLicense nestedClone1 = clonedLicense1.clone();
        System.out.println("\nFirst Nested Copy");
        nestedClone1.displayLicense();
        nestedClone1.setOwnerName("John");
        nestedClone1.displayLicense();
    }
}
```
## Structural Design Pattern
Structural patterns deal with object composition and typically help simplify the structure by identifying relationships.
### Adapter Method Design Pattern
Allows objects with incompatible interfaces to work together by wrapping one of the objects with an adapter that performs the necessary conversions.
#### Structure
- `Target Interface`: This is the interface that the client expects and uses.
- `Adaptee`: This is the class with an incompatible interface that needs to be adapted.
- `Adapter`: This class implements the target interface and wraps the adaptee. It translates the requests from the client into the method calls that are understood by the adaptee.
- `Client`: The client interacts with the system using the target interface, unaware that an adapter is being used behind the scenes.
#### Example
```java
// Target interface
interface MediaPlayer {
    void play(String audioType, String fileName);
}

// Adaptee
class VLCPlayer {
    public void playVLC(String fileName) {
        System.out.println("Playing VLC file: " + fileName);
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private VLCPlayer vlcPlayer;

    public MediaAdapter() {
        vlcPlayer = new VLCPlayer();
    }

    @Override
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("vlc")) {
            vlcPlayer.playVLC(fileName);
        }
    }
}

// Client
class AudioPlayer implements MediaPlayer {
    private MediaAdapter mediaAdapter;

    @Override
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("vlc")) {
            mediaAdapter = new MediaAdapter();
            mediaAdapter.play(audioType, fileName);
        } else {
            System.out.println("Unsupported media type.");
        }
    }
}
```
### Decorator Method Design Pattern
It allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. It’s useful when you want to add responsibilities to objects at runtime without modifying their code.
#### Structure
- __Component__: This is the interface or abstract class that defines the behavior that can be dynamically extended.
- __Concrete Component__: The base class that implements the component interface. It can be decorated with additional responsibilities.
- __Decorator__: This abstract class or interface extends the component class and has a reference to the component object. It delegates calls to the component and adds new behavior before or after delegating.
- __Concrete Decorators__: These classes implement the decorator and add specific behavior to the component.
#### Example
```java
// Component Interface
interface Coffee {
    String getDescription();
    double cost();
}

// ConcreteComponent
class SimpleCoffee implements Coffee {
    @Override
    public String getDescription() {
        return "Simple Coffee";
    }

    @Override
    public double cost() {
        return 2.0;  // Base cost of simple coffee
    }
}

// Decorator Class (implements the Coffee interface and holds a reference to a Coffee object)
abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;  // Coffee object to be decorated

    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription();
    }

    @Override
    public double cost() {
        return decoratedCoffee.cost();
    }
}

// Concrete Decorator for adding milk
class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Milk";
    }

    @Override
    public double cost() {
        return decoratedCoffee.cost() + 0.5;  // Milk adds $0.5 to the cost
    }
}

// Concrete Decorator for adding sugar
class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Sugar";
    }

    @Override
    public double cost() {
        return decoratedCoffee.cost() + 0.2;  // Sugar adds $0.2 to the cost
    }
}

// Concrete Decorator for adding whipped cream
class WhipDecorator extends CoffeeDecorator {
    public WhipDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Whipped Cream";
    }

    @Override
    public double cost() {
        return decoratedCoffee.cost() + 0.7;  // Whipped Cream adds $0.7 to the cost
    }
}

public class Main {
    public static void main(String[] args) {
        // Create a simple coffee
        Coffee coffee = new SimpleCoffee();
        System.out.println(coffee.getDescription() + " $" + coffee.cost());

        // Add milk to the coffee
        coffee = new MilkDecorator(coffee);
        System.out.println(coffee.getDescription() + " $" + coffee.cost());

        // Add sugar to the coffee
        coffee = new SugarDecorator(coffee);
        System.out.println(coffee.getDescription() + " $" + coffee.cost());

        // Add whipped cream to the coffee
        coffee = new WhipDecorator(coffee);
        System.out.println(coffee.getDescription() + " $" + coffee.cost());
    }
}
```
### Composite Method Design Pattern
It allow you to treat individual objects and compositions of objects uniformly. It is useful when you have to work with tree-like hierarchical structures, where individual objects (leaf nodes) and compositions of objects (composite nodes) are part of the same hierarchy.
#### Structure
- __Component__: This is the interface or abstract class that declares the operations common to both leaf and composite nodes.
- __Leaf__: Represents individual objects that cannot have children. It implements the Component interface.
- __Composite__: Represents objects that can contain other Component objects (both leaf and composite). It implements the Component interface and contains methods for adding, removing, and managing child components
#### Example
```java
import java.util.ArrayList;
import java.util.List;

// Component interface
interface FileSystemComponent {
    void showDetails();
}

// Leaf class: File
class File implements FileSystemComponent {
    private String name;

    public File(String name) {
        this.name = name;
    }

    @Override
    public void showDetails() {
        System.out.println("File: " + name);
    }
}

class Folder implements FileSystemComponent {
    private String name;
    private List<FileSystemComponent> components = new ArrayList<>();

    public Folder(String name) {
        this.name = name;
    }

    // Adding a new component (File or Folder)
    public void addComponent(FileSystemComponent component) {
        components.add(component);
    }

    // Removing a component
    public void removeComponent(FileSystemComponent component) {
        components.remove(component);
    }

    // Show details of the folder and its contents
    @Override
    public void showDetails() {
        System.out.println("Folder: " + name);
        for (FileSystemComponent component : components) {
            component.showDetails();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating individual files (leaf nodes)
        FileSystemComponent file1 = new File("File1.txt");
        FileSystemComponent file2 = new File("File2.txt");
        FileSystemComponent file3 = new File("File3.jpg");

        // Creating folders (composite nodes)
        Folder folder1 = new Folder("Documents");
        Folder folder2 = new Folder("Images");

        // Adding files to folders
        folder1.addComponent(file1);  // Adding file1 to Documents
        folder1.addComponent(file2);  // Adding file2 to Documents
        folder2.addComponent(file3);  // Adding file3 to Images

        // Creating the root folder and adding sub-folders
        Folder rootFolder = new Folder("Root");
        rootFolder.addComponent(folder1);  // Adding Documents folder to Root
        rootFolder.addComponent(folder2);  // Adding Images folder to Root

        // Displaying the file system structure
        rootFolder.showDetails();
    }
}
```
## Behavioral Design Pattern
### Chain Of Responsibility Method Design Pattern
It allow multiple objects to handle a request, where each object in the chain has the option to either process the request or pass it to the next handler in the chain. This pattern helps in decoupling the sender of a request from its receiver, allowing multiple handlers to process the request in a flexible manner.
#### Structure
- __Handler__: Defines an interface for handling requests and an optional method to set the next handler in the chain.
- __Concrete Handler__: Implements the handler interface and processes the request. It can also forward the request to the next handler if it cannot handle it.
- __Client__: Sends the request to the handler and does not know which object in the chain will handle it.
#### Example
```java
// Handler interface
interface SupportHandler {
    void setNextHandler(SupportHandler nextHandler); // Set the next handler in the chain
    void handleRequest(String request);              // Handle the request
}

// Concrete handler for low-level support
class LowLevelSupportHandler implements SupportHandler {
    private SupportHandler nextHandler;

    @Override
    public void setNextHandler(SupportHandler nextHandler) {
        this.nextHandler = nextHandler;
    }

    @Override
    public void handleRequest(String request) {
        if (request.equals("LowLevel")) {
            System.out.println("LowLevelSupportHandler: Handling low-level support request.");
        } else if (nextHandler != null) {
            System.out.println("LowLevelSupportHandler: Passing request to the next handler.");
            nextHandler.handleRequest(request);
        }
    }
}

// Concrete handler for mid-level support
class MidLevelSupportHandler implements SupportHandler {
    private SupportHandler nextHandler;

    @Override
    public void setNextHandler(SupportHandler nextHandler) {
        this.nextHandler = nextHandler;
    }

    @Override
    public void handleRequest(String request) {
        if (request.equals("MidLevel")) {
            System.out.println("MidLevelSupportHandler: Handling mid-level support request.");
        } else if (nextHandler != null) {
            System.out.println("MidLevelSupportHandler: Passing request to the next handler.");
            nextHandler.handleRequest(request);
        }
    }
}

// Concrete handler for high-level support
class HighLevelSupportHandler implements SupportHandler {
    private SupportHandler nextHandler;

    @Override
    public void setNextHandler(SupportHandler nextHandler) {
        this.nextHandler = nextHandler;
    }

    @Override
    public void handleRequest(String request) {
        if (request.equals("HighLevel")) {
            System.out.println("HighLevelSupportHandler: Handling high-level support request.");
        } else {
            System.out.println("HighLevelSupportHandler: Cannot handle the request.");
        }
    }
}

// Client code
public class Main {
    public static void main(String[] args) {
        // Creating the chain of responsibility
        SupportHandler lowLevel = new LowLevelSupportHandler();
        SupportHandler midLevel = new MidLevelSupportHandler();
        SupportHandler highLevel = new HighLevelSupportHandler();

        // Setting the chain
        lowLevel.setNextHandler(midLevel);
        midLevel.setNextHandler(highLevel);

        // Client sends requests
        System.out.println("Client sends a LowLevel request:");
        lowLevel.handleRequest("LowLevel");

        System.out.println("\nClient sends a MidLevel request:");
        lowLevel.handleRequest("MidLevel");

        System.out.println("\nClient sends a HighLevel request:");
        lowLevel.handleRequest("HighLevel");

        System.out.println("\nClient sends an unknown request:");
        lowLevel.handleRequest("Unknown");
    }
}
```
### State Method Design Pattern
It allow an object to alter its behavior when its internal state changes. This pattern is particularly useful for implementing state machines, where the object behaves differently based on its current state. Instead of using a large number of conditional statements to manage state changes, this pattern encapsulates state-specific behavior in separate classes.
#### Structure
- __Context__: The class that has a current state and can change its behavior based on that state.
- __State Interface__: An interface that defines the methods that concrete state classes must implement.
- __Concrete States__: Classes that implement the `State` interface and define the behavior for a specific state.
#### Example
```java
// State Interface
interface TrafficLightState {
    void change(TrafficLight context);  // Method to change state
    String getColor();                   // Method to get the current color
}

// Concrete State for Red Light
class RedLightState implements TrafficLightState {
    @Override
    public void change(TrafficLight context) {
        System.out.println("Changing light from Red to Green.");
        context.setState(new GreenLightState()); // Change to Green state
    }

    @Override
    public String getColor() {
        return "Red"; // Return current color
    }
}

// Concrete State for Green Light
class GreenLightState implements TrafficLightState {
    @Override
    public void change(TrafficLight context) {
        System.out.println("Changing light from Green to Yellow.");
        context.setState(new YellowLightState()); // Change to Yellow state
    }

    @Override
    public String getColor() {
        return "Green"; // Return current color
    }
}

// Concrete State for Yellow Light
class YellowLightState implements TrafficLightState {
    @Override
    public void change(TrafficLight context) {
        System.out.println("Changing light from Yellow to Red.");
        context.setState(new RedLightState()); // Change to Red state
    }

    @Override
    public String getColor() {
        return "Yellow"; // Return current color
    }
}

// Context Class
class TrafficLight {
    private TrafficLightState currentState; // Current state of the traffic light

    public TrafficLight() {
        currentState = new RedLightState(); // Initial state
    }

    public void setState(TrafficLightState state) {
        this.currentState = state; // Change the current state
    }

    public void change() {
        currentState.change(this); // Delegate to the current state's change method
    }

    public String getColor() {
        return currentState.getColor(); // Delegate to the current state's getColor method
    }
}

// Client code
public class Main {
    public static void main(String[] args) {
        TrafficLight trafficLight = new TrafficLight();

        // Current color
        System.out.println("Current Light: " + trafficLight.getColor());
        
        // Change the light
        trafficLight.change();
        System.out.println("Current Light: " + trafficLight.getColor());

        // Change the light
        trafficLight.change();
        System.out.println("Current Light: " + trafficLight.getColor());

        // Change the light
        trafficLight.change();
        System.out.println("Current Light: " + trafficLight.getColor());
    }
}
```
### Strategy Method Design Pattern
It defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. This pattern allows the algorithm to vary independently from clients that use it. The Strategy pattern is particularly useful when you have multiple ways to perform a specific task, and you want to select one of those algorithms at runtime.
#### Structure
- __Context__: The class that uses a strategy. It maintains a reference to a `Strategy` object and can change it at runtime.
- __Strategy Interface__: An interface that defines the method(s) that all concrete strategies will implement.
- __Concrete Strategies__: Classes that implement the `Strategy` interface, providing specific implementations of the algorithm.
#### Example
```java
// Strategy Interface
interface SortingStrategy {
    void sort(int[] numbers); // Method to sort the array
}

// Concrete Strategy for Bubble Sort
class BubbleSort implements SortingStrategy {
    @Override
    public void sort(int[] numbers) {
        System.out.println("Sorting using Bubble Sort");
        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = 0; j < numbers.length - i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    // Swap numbers[j] and numbers[j + 1]
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }
}

// Concrete Strategy for Quick Sort
class QuickSort implements SortingStrategy {
    @Override
    public void sort(int[] numbers) {
        System.out.println("Sorting using Quick Sort");
        quickSort(numbers, 0, numbers.length - 1);
    }

    private void quickSort(int[] numbers, int low, int high) {
        if (low < high) {
            int pi = partition(numbers, low, high);
            quickSort(numbers, low, pi - 1);
            quickSort(numbers, pi + 1, high);
        }
    }

    private int partition(int[] numbers, int low, int high) {
        int pivot = numbers[high]; // last element as pivot
        int i = (low - 1); // index of smaller element
        for (int j = low; j < high; j++) {
            if (numbers[j] < pivot) {
                i++;
                // Swap numbers[i] and numbers[j]
                int temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
        // Swap numbers[i + 1] and numbers[high] (or pivot)
        int temp = numbers[i + 1];
        numbers[i + 1] = numbers[high];
        numbers[high] = temp;
        return i + 1;
    }
}

// Context Class
class Sorter {
    private SortingStrategy strategy; // Reference to a strategy

    public void setStrategy(SortingStrategy strategy) {
        this.strategy = strategy; // Set the sorting strategy
    }

    public void sort(int[] numbers) {
        if (strategy != null) {
            strategy.sort(numbers); // Delegate the sorting to the strategy
        }
    }
}

// Client code
public class Main {
    public static void main(String[] args) {
        Sorter sorter = new Sorter();

        int[] numbers = {5, 3, 8, 1, 2};

        // Set BubbleSort strategy
        sorter.setStrategy(new BubbleSort());
        sorter.sort(numbers); // Sort using Bubble Sort

        // Set QuickSort strategy
        sorter.setStrategy(new QuickSort());
        sorter.sort(numbers); // Sort using Quick Sort
    }
}
```
### Template Method Design Pattern
It defines the skeleton of an algorithm in a base class, allowing subclasses to override specific steps of the algorithm without changing its overall structure. This pattern is useful when you have a common algorithm that can be implemented in different ways by subclasses.
#### Structure
- __Abstract Class__: Contains the template method that defines the algorithm's structure and may include some abstract methods that subclasses must implement.
- __Concrete Classes__: Subclasses that implement the abstract methods defined in the base class, providing specific behavior for those steps.
#### Example
```java
// Template Interface
interface Meal {
    // Template method
    default void prepareMeal() {
        gatherIngredients(); // Step 1: Gather ingredients
        cook();              // Step 2: Cooking
        serve();             // Step 3: Serving
    }

    // Method signatures for specific steps
    void gatherIngredients();
    void cook();

    // Default method for serving the meal
    default void serve() {
        System.out.println("Serving the meal.");
    }
}

// Concrete Class for preparing a Pasta dish
class Pasta implements Meal {
    @Override
    public void gatherIngredients() {
        System.out.println("Gathering ingredients for Pasta: pasta, tomato sauce, cheese.");
    }

    @Override
    public void cook() {
        System.out.println("Cooking Pasta: boiling pasta and adding sauce.");
    }
}

// Concrete Class for preparing a Salad dish
class Salad implements Meal {
    @Override
    public void gatherIngredients() {
        System.out.println("Gathering ingredients for Salad: lettuce, tomatoes, cucumber, dressing.");
    }

    @Override
    public void cook() {
        System.out.println("Tossing the Salad ingredients together.");
    }
}

// Client code
public class Main {
    public static void main(String[] args) {
        Meal pasta = new Pasta();
        pasta.prepareMeal(); // Prepare Pasta

        System.out.println(); // New line for separation

        Meal salad = new Salad();
        salad.prepareMeal(); // Prepare Salad
    }
}
```
### Command Method Design Pattern
It encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. This pattern decouples the sender of a request from its receiver, allowing for better flexibility and control over the execution of requests.
#### Structure
- __Command Interface__: Declares a method for executing a command.
- __Concrete Command__: Implements the command interface and defines the binding between a receiver and an action.
- __Receiver__: Knows how to perform the operations associated with the command.
- __Invoker__: Asks the command to execute the request.
- __Client__: Creates the command and associates it with a receiver.
#### Example
```java
// Command Interface
interface Command {
    void execute();
}

// Concrete Command for turning on the light
class LightOnCommand implements Command {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOn();
    }
}

// Concrete Command for turning off the light
class LightOffCommand implements Command {
    private Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOff();
    }
}

// Receiver class
class Light {
    public void turnOn() {
        System.out.println("Light is ON");
    }

    public void turnOff() {
        System.out.println("Light is OFF");
    }
}

// Invoker class
class RemoteControl {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
    }
}

// Client code
public class Main {
    public static void main(String[] args) {
        Light livingRoomLight = new Light();

        // Create Command Objects
        Command lightOn = new LightOnCommand(livingRoomLight);
        Command lightOff = new LightOffCommand(livingRoomLight);

        // Create Invoker
        RemoteControl remote = new RemoteControl();

        // Turn the light ON
        remote.setCommand(lightOn);
        remote.pressButton();  // Output: Light is ON

        // Turn the light OFF
        remote.setCommand(lightOff);
        remote.pressButton();  // Output: Light is OFF
    }
}
```
### Iterator Method Design Pattern
It provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. This pattern allows for traversing elements of a collection (like lists, sets, etc.) without needing to understand the details of the collection’s implementation.
#### Structure
- `Iterator Interface`: Defines the methods for traversing elements.
- `Concrete Iterator`: Implements the iterator interface to iterate over the collection.
- `Aggregate Interface`: Defines a method to create an iterator.
- `Concrete Aggregate`: Implements the aggregate interface to provide the appropriate iterator.
- `Client`: Uses the iterator to traverse the collection.
#### Example
```java
// Iterator Interface
interface Iterator {
    boolean hasNext();
    Object next();
}

// Aggregate Interface
interface BookCollection {
    Iterator createIterator();
}

// Concrete Iterator for BookCollection
class BookIterator implements Iterator {
    private Book[] books;
    private int position;

    public BookIterator(Book[] books) {
        this.books = books;
        this.position = 0;
    }

    @Override
    public boolean hasNext() {
        return position < books.length && books[position] != null;
    }

    @Override
    public Object next() {
        return hasNext() ? books[position++] : null;
    }
}

// Concrete Aggregate
class Library implements BookCollection {
    private Book[] books;
    private int count;

    public Library(int size) {
        books = new Book[size];
        count = 0;
    }

    public void addBook(Book book) {
        if (count < books.length) {
            books[count++] = book;
        } else {
            System.out.println("Library is full. Cannot add more books.");
        }
    }

    @Override
    public Iterator createIterator() {
        return new BookIterator(books);
    }
}

// Book class (the element)
class Book {
    private String title;

    public Book(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }
}

// Client code
public class Main {
    public static void main(String[] args) {
        Library library = new Library(5);
        library.addBook(new Book("1984"));
        library.addBook(new Book("To Kill a Mockingbird"));
        library.addBook(new Book("The Great Gatsby"));

        // Create an iterator for the library
        Iterator iterator = library.createIterator();

        // Traverse the collection
        while (iterator.hasNext()) {
            Book book = (Book) iterator.next();
            System.out.println("Book Title: " + book.getTitle());
        }
    }
}
```
### Null Object Design Pattern
It uses a special instance of a class that acts as a default or `null` object, eliminating the need for `null` checks in the code. Instead of returning null or an empty value, the pattern provides a neutral object that implements the same interface as the other objects, allowing methods to be called without checking for null.
#### Structure
- `Subject Interface`: Defines the behavior that concrete objects must implement.
- `Real Object`: A concrete implementation of the subject interface that performs the intended behavior.
- `Null Object`: A concrete implementation of the subject interface that does nothing or provides default behavior.
#### Example
```java
// Subject Interface
interface Logger {
    void log(String message);
}

// Real Object
class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println("ConsoleLogger: " + message);
    }
}

// Null Object
class NullLogger implements Logger {
    @Override
    public void log(String message) {
        // Do nothing
    }
}

// Client Class
class Application {
    private Logger logger;

    // Constructor that accepts a logger
    public Application(Logger logger) {
        this.logger = logger != null ? logger : new NullLogger();  // Use NullLogger if logger is null
    }

    public void run() {
        logger.log("Application is starting...");
        // Other application logic
        logger.log("Application is running...");
    }
}

// Main Class
public class Main {
    public static void main(String[] args) {
        // Using a real logger
        Logger consoleLogger = new ConsoleLogger();
        Application appWithLogger = new Application(consoleLogger);
        appWithLogger.run();

        // Using a null logger
        Application appWithoutLogger = new Application(null);
        appWithoutLogger.run();
    }
}
```
# Refactoring
Refactoring refers to the process of restructuring or rewriting existing code without changing its external behavior. The goal of refactoring is to improve the internal structure of the code, making it more efficient, readable, and maintainable. This process often involves cleaning up code, optimizing algorithms, removing redundancies, and adhering to best practices.
## Why Refactor Code?
1. __Improved Readability__: Clean and well-structured code is easier for developers to understand and maintain.
2. __Simplified __Maintenance: Well-organized code makes it easier to identify bugs, add new features, and apply fixes.
3. __Enhanced Performance__: By optimizing inefficient code or algorithms, you can improve the overall performance of the application.
4. __Reduce Complexity__: Refactoring reduces code complexity by removing unnecessary structures or duplications.

## Common Refactoring Techniques
1. __Renaming Variables or Functions__: Improve clarity by using descriptive names for variables and functions.
2. __Extract Method__: Split a large method into smaller, more focused methods to improve modularity.
3. __Remove Duplicated Code__: Consolidate repeated code into reusable functions or methods.
4. __Replace Magic Numbers with Constants__: Use named constants instead of hardcoded values to improve understanding.
5. __Simplify Conditional Statements__: Refactor complex if-else or switch statements into more readable alternatives.
## Original Code
__Original Code:__
```java
public class DiscountCalculator {

    public double calculateDiscount(double price, String customerType) {
        double discount = 0;

        if (customerType.equals("regular")) {
            discount = price * 0.05;
        } else if (customerType.equals("member")) {
            discount = price * 0.1;
        } else if (customerType.equals("vip")) {
            discount = price * 0.2;
        }

        return price - discount;
    }

    public static void main(String[] args) {
        DiscountCalculator calculator = new DiscountCalculator();
        System.out.println("Final Price: " + calculator.calculateDiscount(100.0, "vip"));
    }
}
```
__Refactored Code:__
```java
public class DiscountCalculator {

    // Step 1: Define an enum for customer types with discount rates.
    public enum CustomerType {
        REGULAR(0.05),
        MEMBER(0.1),
        VIP(0.2);

        private final double discountRate;

        CustomerType(double discountRate) {
            this.discountRate = discountRate;
        }

        public double getDiscountRate() {
            return discountRate;
        }
    }

    // Step 2: Use the enum in the discount calculation.
    public double calculateDiscount(double price, CustomerType customerType) {
        double discount = price * customerType.getDiscountRate();
        return price - discount;
    }

    public static void main(String[] args) {
        DiscountCalculator calculator = new DiscountCalculator();
        // Step 3: Pass the CustomerType enum instead of a string.
        System.out.println("Final Price: " + calculator.calculateDiscount(100.0, CustomerType.VIP));
    }
}
```
# Anti-Pattern

An **anti-pattern** is a common solution to a recurring problem that initially seems appropriate but ultimately results in poor outcomes. These patterns often lead to inefficiencies, difficult-to-maintain code, or system instability. While they might appear to solve the issue at first, they usually introduce long-term technical debt, making the system more complex, error-prone, or harder to maintain.

### Why Anti-Patterns Occur
1. **Inexperience**: Developers might use poor solutions due to a lack of experience or understanding of best practices.
2. **Time Pressure**: When under tight deadlines, teams might choose shortcuts that lead to anti-patterns.
3. **Lack of Refactoring**: Code can degrade into anti-patterns if not regularly refactored or cleaned up.
4. **Complex Requirements**: Sometimes complex or unclear requirements push developers to adopt convoluted or inefficient solutions.

---

### Common Anti-Patterns

1. **Spaghetti Code**:
   - **Definition**: Code with a disorganized, tangled structure, making it hard to read, understand, and maintain. It often occurs when developers don't follow a clear architectural design.
   - **Effect**: Hard to debug and modify, increasing the likelihood of bugs when making changes.
   
2. **God Object** (or **God Class**):
   - **Definition**: A single class or object that handles too many responsibilities and knows too much about other parts of the system, violating the **Single Responsibility Principle**.
   - **Effect**: Makes code difficult to extend and maintain because any change to one feature in the God Object risks breaking unrelated parts of the system.

3. **Golden Hammer**:
   - **Definition**: Over-relying on a single technology, framework, or solution for all problems, even when it's not the best fit.
   - **Effect**: Leads to inefficiencies, as some problems require specialized tools or approaches.

4. **Lava Flow**:
   - **Definition**: Dead or outdated code that is left in the system because developers are afraid to remove it, fearing it might break the application.
   - **Effect**: Increases code complexity and introduces potential bugs when the outdated code interferes with newer code.

5. **Copy-Paste Programming**:
   - **Definition**: Copying code from one section of the program to another without abstracting the logic into reusable methods or components.
   - **Effect**: Leads to code duplication, making the codebase difficult to maintain, as any changes need to be made in multiple places.

6. **Reinventing the Wheel**:
   - **Definition**: Developers create custom solutions for problems that are already solved by existing libraries, frameworks, or tools.
   - **Effect**: Wastes time and effort, and custom solutions are often less optimized and tested than existing, mature solutions.

---

### Example: **God Object Anti-Pattern**

Let's look at an example in Java, where a **God Object** has taken on too many responsibilities. In this case, the `OrderProcessor` class handles not only order processing but also payment, inventory, and customer notifications.

#### Original Code (God Object)

```java
public class OrderProcessor {

    public void processOrder(String productId, int quantity, String customerEmail) {
        // Process payment
        System.out.println("Processing payment...");

        // Update inventory
        System.out.println("Updating inventory...");

        // Send notification to customer
        System.out.println("Sending notification to customer: " + customerEmail);
    }
}
```
__Problems:__
1. __Single Responsibility Violation__: The OrderProcessor class is doing too much. It's handling payment processing, inventory management, and sending customer notifications—all of which should be separate concerns.
2. __Difficult to Extend__: Any change to one feature, such as updating inventory, might break payment processing or notifications.
3. __Hard to Test__: It's difficult to test the individual parts in isolation because everything is bundled together

#### Refactored Code (Following SOLID Principles)
Let’s refactor the code to address the God Object anti-pattern. We’ll extract different responsibilities into separate classes.
```java
// Separate class for payment processing
public class PaymentProcessor {
    public void processPayment(String productId, int quantity) {
        System.out.println("Processing payment for product: " + productId);
    }
}

// Separate class for inventory management
public class InventoryManager {
    public void updateInventory(String productId, int quantity) {
        System.out.println("Updating inventory for product: " + productId);
    }
}

// Separate class for customer notifications
public class CustomerNotifier {
    public void sendNotification(String customerEmail) {
        System.out.println("Sending notification to customer: " + customerEmail);
    }
}

// Refactored OrderProcessor class delegating responsibilities
public class OrderProcessor {

    private PaymentProcessor paymentProcessor;
    private InventoryManager inventoryManager;
    private CustomerNotifier customerNotifier;

    public OrderProcessor(PaymentProcessor paymentProcessor, InventoryManager inventoryManager, CustomerNotifier customerNotifier) {
        this.paymentProcessor = paymentProcessor;
        this.inventoryManager = inventoryManager;
        this.customerNotifier = customerNotifier;
    }

    public void processOrder(String productId, int quantity, String customerEmail) {
        paymentProcessor.processPayment(productId, quantity);
        inventoryManager.updateInventory(productId, quantity);
        customerNotifier.sendNotification(customerEmail);
    }
}
```
### Avoiding Anti-Patterns
1. __Follow SOLID Principles__: These design principles help you structure your code to avoid common anti-patterns like the God Object or Spaghetti Code.
2. __Frequent Refactoring__: Regularly refactor your code to ensure it stays clean and maintainable.
3. __Peer Reviews__: Code reviews help catch anti-patterns early before they spread across the codebase.
4. __Write Unit Tests__: Good tests help ensure that your refactoring doesn’t introduce new bugs and that the system's external behavior remains consistent.
5. __Learn from Design Patterns__: Use design patterns (e.g., Factory, Observer, Strategy) to solve common problems in a structured and maintainable way.