# View
### TextView

- `android:text` - sets the initial text displayed by the View
- `android:layout_width` or `android:layout_height` - sets the widht and height of the view. Possible values are:
    - `match_parent` - it will set the entire height/width of parent view 
    - `wrap_content`- it will set the space as much as needed
- `android:id` - assigned identifier is used to refer the view in java/kotlin
- `android:textColor` - sets the color of the text.
- `android:textSize` - sets the size of the text.
- `android:visibility` - control the visibility. Possible values are `visible`, `invisible`, `gone`.
- `android:backgroundTint` - 

### ImageView

- `android:src` - specify the image to be displayed
- `android:scaleType` -
- `android:adjustViewBounds` -
- `android:cropToPadding` - 
- `android:clickable` - make an image clickable
- `android:onClick` - specify the method should be invoked when the image is clicked

### EditText

- `android:inputType` - specify the type of the data
- `android:hint` - set placeholder
- `android:text` - set the initial text
- `android:maxLength` - specify the maximum length of the text can be entered
- `android:imeOptions` -
- `android:textCursorDrawble` -
- `clearFocus()` - dismiss the soft keyboard if it's open

### Adapter
Adapter pulls the data from the source & convert into a view and then set the view into ListView/GridView/Spinner. Commonly used adapters are:
- Array Adapter - single list item
- Base Adapter - customized list item

```
ListView listView = findViewById(R.id.listView);

String[] countries = {"USA", "Canada", "UK", "Australia", "Germany","France"};

ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, countries);

listView.setAdapter(adapter);
```

Adapter takes three parameters: the context (`this`), the layout for each item (`android.R.layout.simple_list_item_1` is a `built-in layout` provided by Android for a simple list item), and the array of data.
`setAdapter()` populates the ListView with the data provided by the adapter.

### ListView
ListView is a viewgroup that can display a list of scrollable items. Each of the item is clickable
- `android:divider` -
- `android:dividerHeight` -
- `android:dividerSelector` -

List Data Container:
```
<string-array name="list_container">
    <item>Item 1</item>
    <item>Item 2</item>
    <item>Item 3</item>
    <item>Item 4</item>
    <item>Item 5</item>
</string-array>
```

Accessing the data container:
```
String[] items = getResources().getStringArray(R.array.list_container);
```

Apply Eventlistner on each item:
```
listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        String selectedItem = (String) parent.getItemAtPosition(position);

        Toast.makeText(MainActivity.this, "Selected item: " + selectedItem, Toast.LENGTH_SHORT).show();

        Intent intent = new Intent(MainActivity.this, AnotherActivity.class);
        intent.putExtra("SELECTED_ITEM", selectedItem);
        startActivity(intent);
                }
        });
```

# Java Handling
### Eventlistener
- `Button myButton = findViewById(R.id.myButton)` - finds a button with the id `myButton` defined in the layout XML file and assigns it to a variable named myButton.
- `myButton.setOnClickListener(new View.OnClickListener() { ... })` - sets an OnClickListener on the button myButton.

### Handling Multiple Eventlistner

- __Implement the Listener Interfaces:__ implement the listener interfaces for the events you want to handle. For example, if you want to handle click events on buttons, you'll implement the View.OnClickListener interface.
```
public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    ...
}
```
- __Register the Listeners:__ Register the listener instances with the appropriate views.
```
Button myButton = findViewById(R.id.myButton);
myButton.setOnClickListener(this);
```

- __Override the Listener Methods:__ Implement the required methods of the listener interfaces which will contain the logic that you want to execute when the corresponding events occur.
```
@Override
public void onClick(View view) {
    ...
}
```
__Boilerplate:__
```
public class MainActivity extends AppCompatActivity implements View.OnClickListener {
  Button myButton = findViewById(R.id.myButton);
  myButton.setOnClickListener(this);

  @Override
  public void onClick(View view) {
    if(v.getId()==R.id.myButton){
        myText.setText("Button is clicked");
    }
  }
}
```

### Inner Class
- __Instantiate the Inner Class and Set the Listener:__ Instantiate an object of the inner class and set it as the listener for the view using the `setOnClickListener` method.
```
myButton.setOnClickListener(new MyButtonClickListener());
```
- __Define the Inner Class:__ Define an inner class within your activity class. It will implement the interface corresponding to the event you want to handle. In this case, we're handling click events, so the inner class implements View.OnClickListener.
```
private class MyButtonClickListener implements View.OnClickListener {
    @Override
    public void onClick(View view) {
        ...
    }
}

```

__Boilerplate:__
```
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        ...
        myButton.setOnClickListener(new MyButtonClickListener());
    }

    private class MyButtonClickListener implements View.OnClickListener {
        @Override
        public void onClick(View view) {
            textView.setText("Hello World");
        }
    }
}

```

### View Methods
- `setText()`, `setTextColor()`, `setTextSize()`, `getText()`, `getTextSize()`, `getTextColors()` - methods works by following their name
- `setOnClickListener()`- sets a listener to be invoked when the TextView is clicked.
- `setTypeface()` - 
- `getId()` -

# Activity
Activity is a single screen with UI
<pre>
                onCreate -> onStart -> onResume 
                         <b>OTHER ACTIVITY</b> 
                        onPause -> onStop
                            <b>REOPEN</b> 
               onRestart -> onStart -> onResume
                    <b>CLOSE APP, BACK BUTTON</b>
                onPause -> onStop -> onDestroy
</pre>
Let's see the 7 lifecycle methods of android activity.
<img src="https://static.javatpoint.com/images/androidimages/Android-Activity-Lifecycle.png">

### Navigate Activity
Intent class is used to navigate through activity. Intent class accept two parameter, first one is current activity, and another one is navigated activity.
```
Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);
```

### Pass Data Between Activity
__Send__

`intent.putExtra()` - is used to send extra data with key value pair
```
intent.putExtra("EXTRA_MESSAGE", "Hello from MainActivity!");
```
__Recieve__

`getIntent()` and `getStringExtra()` - is used to retreive data from activity
```
Intent intent = getIntent();
String message = intent.getStringExtra("EXTRA_MESSAGE");
```
```
Bundle bundle = getIntent().getStringExtra("EXTRA_MESSAGE");
if(bundle!=null){
    String value=bundle.getString("EXTRA_MESSAGE");
    textView.setText(value);
}
```