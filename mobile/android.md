# Android

Android is an open-source mobile operating system based on the Linux kernel and primarily designed for touch-screen devices such as smartphones and tablets.

## XML - eXtensible Markup Language

It is a versatile markup language primarily designed to store and transport data.

- XML files often start with a prolog defining the XML version and encoding.(**< ?xml version="1.0" encoding="UTF-8"? >**)
- It allows users to define their own customized tags, similar to HTML, but not need to be predefined.
- XML documents are structured hierarchically. There is one root element, and all other elements are nested within it.
- It is `case-sensitive`

XML used in android development primarily for defining the user interface (UI) layouts and resource files.

`xmlns`(XML Namespace) is a mechanism in XML to avoid element name conflicts by qualifying names that may have the same name but different meanings or contexts.

## ADB vs AVD

**AVD(Android Virtual Device)** refers to the emulator that allows you to simulate an Android device `on your computer`. It helps you test and run Android apps in a virtual environment `without` needing `a physical device`.

**ADB()** is a command-line tool that allows developers to communicate with an Android device (`physical` or virtual) for debugging and performing various system-level tasks.

## .apk

.APK stands for Android Package (Kit), and it is the file format used by the Android operating system to distribute and install applications. Just like a .exe file in Windows or a .ipa file on iOS, an .apk file contains all the components an app needs to run on an Android device.

**Components of an APK File:**

1. Manifest File(AndroidManifest.xml) - contains essential metadata about the app.
2. Dex Files(classes.dex) - contain the compiled code for the app.
3. Resources - include files such as images, layout files etc.

# Contents

- Layout
  - [LinearyLayout](#linearlayout)
  - [RelativeLayout](#relativelayout)
  - [ConstraintLayout](#constraintlayout)
  - [GridLayout](#gridlayout)
  - [AbsoluteLayout](#absolutelayout)
  - [FrameLayout](#framelayout)
  - [TabLayout](#tablayout)
- ViewGroup
  - [ListView](#listview)
  - [ScrollView](#scrollview)
  - [CardView](#cardview)
  - [RecyclerView](#recyclerView)
- Views
  - [ZoomControls](#zoomcontrols)
  - [CalendarView](#calendarview)
  - [AnalogClock](#analogclock)
  - [TextClock](#textclock)
  - [TextView](#textview)
  - [ImageView](#imageview)
  - [RatingBar](#ratingbar)
  - [SeekBar](#seekbar)
  - [ProgressBar](#progressbar)
  - [Switch](#switch)
  - [Spinner](#spinner)
  - [DatePicker](#datepicker)
  - [TimePicker](#timepicker)
  - [NumberPicker](#numberpicker)
  - [RadioGroup](#radiogroup)
  - [ChipGroup](#chipgroup)
  - [AutoCompleteTextView](#autocompletetextView)
  - [View](#view)
- [App Lifecycle](#app-lifecycle)
- [Themes](#themes)
- [Styling](#styling)
- [Eventlistener](#eventlistener)
- [Inflater](#inflater)
- [Toast](#toast)
- [AlertDialog](#alertdialog)
- [Activity](#activity)
- [Intent](#intent)
- [Fragment](#fragment)
- [Bottom Navigation](#bottom-navigation)
- [Actionbar](#actionbar)
- [Toolbar](#toolbar)
- [AppBarLayout](#appbarlayout)
- [Logging](#logging)
- [Database](#database)
  - [Shared Preferences](#sharedpreferences)
  - [File Storage](#file-storage)
- [JSON Parsing](#json-parsing)
- [Retrofit](#retrofit)
- [Google Map](#google-map)

# Layouts

## LinearLayout

It arranges its child views in a single direction, either vertically or horizontally. This makes it a straightforward choice for creating simple layouts where views are stacked in a single column or row.

- `android:orientation` - determine the direction of the child view
  - `vertical` - stack children from top to bottom
  - `horizontal` - places children side by side from left to right
- `android:gravity` - Aligns the content of a view within its own boundaries.(use in parent)
- `android:layout_gravity` - Aligns the view itself within its parent's boundaries.(use in child)
- `android:layout_weight` - distribute space among child views. It allows you to specify how much of the extra space in the layout should be allocated to each child view. This attribute only works when the size of the view is set to `0dp`
- `android:weightSum` - defines the total weight of all child views.

LinearLayout is easy to understand and implement. It provides a predictable way to arrange views in a single direction. Allows for easy alignment of child views along a single axis. But LinearLayout lead to poor performance, as the layout becomes more complex and takes longer to render.

## RelativeLayout

It allows you to position and size child views in relation to each other or to the parent container.

- `android:layout_alignParentTop`, `android:layout_alignParentBottom`, `android:layout_alignParentLeft`, `android:layout_alignParentRight` - Aligns the child view to the corresponding edge of the **parent**.
- `android:layout_centerInParent`, `android:layout_centerHorizontal`, `android:layout_centerVertical` - Centers the child view in the **parent**, either completely or along one axis.
- `android:layout_above`, `android:layout_below`, `android:layout_toLeftOf`, `android:layout_toRightOf` - Positions the child view relative to **another child view**.
- `android:layout_margin`, `android:layout_marginTop`, `android:layout_marginBottom`, `android:layout_marginLeft`, `android:layout_marginRight` - Sets the space around the child view.
- `android:layout_alignTop`, `android:layout_alignBottom`, `android:layout_alignLeft`, `android:layout_alignRight` - Aligns the edges of **two child views**.

It allows for complex layouts where child views can be positioned relative to each other and to the parent. It helps to avoid deeply nested layouts, which can improve performance and useful for responsive designs where the position of views may change based on different screen sizes or orientations.

## ConstraintLayout

It allows you to position and size widgets in a flexible way without nesting multiple layouts. Widgets can be constrained to each other or the parent layout. This allows for precise control over the positioning. It reduce the hierchy of view group.

**Add Dependency:**

```t
implementation("androidx.constraintlayout:constraintlayout:2.1.4")
```

Now sync your project.

**XML Layout:**

```xml
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent" android:layout_height="match_parent">
</androidx.constraintlayout.widget.ConstraintLayout>
```

**Constratint:**

- `app:layout_constraintEnd_toEndOf` - make the view constraint from right
- `app:layout_constraintBottom_toBottomOf` - make the view constraint from bottom
- `app:layout_constraintStart_toStartOf` - make the view constraint from left
- `app:layout_constraintTop_toTopOf` - make the view constraint from top

**Bias:**
A way to control the position of the view. The bias value ranges from 0(start) to 1(end).

- `app:layout_constraintHorizontal_bias` - control horizontal positioning.
- `app:layout_constraintVertical_bias` - control vertical positioning.
- `tools:layout_editor_absoluteX`, `layout_editor_absoluteY` are ignorable, it has no effect in run time.

- `Inferror Constraints` button set the view where it is in the layout.
- Must constraint the view horizontally & vertically
- **Chain** property work like two way constraint
- **Guideline** property work like margin
- View doesn't have `match_parent` property, it use `match_constraint` or `0dp` for similar task

[Explore More](https://www.geeksforgeeks.org/constraintlayout-in-android/)

## GridLayout

**Parent Attributes:**

- `android:rowCount`: Specifies the total number of rows in the grid.
- `android:columnCount`: Specifies the total number of columns in the grid.

**Child Attributes:**

- `layout_row`: Defines the row index of a child.
- `layout_column`: Defines the column index of a child.
- `layout_rowSpan`: Specifies how many rows the child should span.
- `layout_columnSpan`: Specifies how many columns the child should span.

It's depricated, use **flow** property of **constraint layout**.

## AbsoluteLayout

It allow to specify the exact x and y coordinates for each view within the layout. Each child view is positioned based on its x and y coordinates.

```xml
<AbsoluteLayout>
    <Button android:layout_x="50dp" android:layout_y="50dp"/>
</AbsoluteLayout>
```

Absolute Layout is **deprecated**.

## FrameLayout

It is used to display a single child view. It is designed to hold a single child view by default, but if you add more than one child, they will be stacked on top of each other with the most recently added view appearing on top.

It used as the default layout of fragment container.

**Control the stack programmitically:**

```java
layout.bringToFront();
```

## TabLayout

It provides a horizontal layout to display tabs. It often used in conjuction with `ViewPager` to navigate between different pages.

1. **Fragment**
   Create fragment for each tab item.
2. **FragmentPagerAdapter**

```java
public class TabAdapter extends FragmentPagerAdapter {
    private List<Fragment> fragmentList=new ArrayList<>();
    private List<String> fragmentTitleList=new ArrayList<>();
    public TabAdapter(@NonNull FragmentManager fm, int behavior) {
        super(fm, behavior);
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
        return fragmentList.get(position);
    }

    @Override
    public int getCount() {
        return fragmentList.size();
    }

    public void addFragment(Fragment fragment, String title){
        fragmentList.add(fragment);
        fragmentTitleList.add(title);
    }
    @Nullable
    @Override
    public CharSequence getPageTitle(int position) {
        return fragmentTitleList.get(position);
    }
}
```

3. **Merge**

```java
ViewPager viewPager=findViewById(R.id.view_pager_container);
TabLayout tab_container=findViewById(R.id.tab_container);

TabAdapter tabAdapter=new TabAdapter(getSupportFragmentManager(), FragmentPagerAdapter.BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT);
tabAdapter.addFragment(new FragA(), "BTN A");
tabAdapter.addFragment(new FragB(), "BTN B");

viewPager.setAdapter(tabAdapter);
tab_container.setupWithViewPager(viewPager);
```

## Layout

```xml
<com.google.android.material.tabs.TabLayout />
```

## ViewPager

It allow the user to swipe left or right through pages of content, typically fragments

```xml
<androidx.viewpager.widget.ViewPager  />
```

# ViewGroup

## ListView

Each item in the list is an instance of View, which by default is a TextView but can be any layout.

### ArrayAdapter

The Adapter acts as a bridge between the UI Component and the Data Source. It converts data from the data sources into view items that can be displayed into the UI Component. Data Source can be Arrays, HashMap, Database, etc. and UI Components can be ListView, GridView, Spinner, etc. When you have a list of single type items which are stored in an array you can use ArrayAdapter.

ArrayAdapter has a layout with a single TextView. If you want to have a more complex layout instead of ArrayAdapter use `CustomArrayAdapter/BaseAdapter`

```java
private ListView listView = findViewById(R.id.listView);
String[] items = {"Item 1", "Item 2", "Item 3", "Item 4", "Item 5"};
ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, items);
listView.setAdapter(adapter);
listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
       @Override
       public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
           String selectedItem = (String) parent.getItemAtPosition(position);
           Toast.makeText(MainActivity.this, "Clicked: " + selectedItem, Toast.LENGTH_SHORT).show();
       }
   });
```

The `simple_list_item_1` layout is defined in the Android SDK. You don't need to create or modify it. You can directly use it in your adapters. It consists of a single TextView element that is used to display the text of each item in the list. It's the layout for list item, you can use your own layout also.

### BaseAdapter

**Layout:**

```xml
<LinearLayout>
    <TextView android:id="@+id/title" />
    <TextView android:id="@+id/title" />
</LinearLayout>
```

**Model Class:**

`@models/Item`

```java
public class Item {
    private String title;
    private String description;

    public Item(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }
}
```

**Custom Adapter:**

`@adapters/ItemAdapter`

```java
public class ItemAdapter extends BaseAdapter {
    private Context context;
    private List<Item> items;

    public ItemAdapter(Context context, List<Item> items) {
        this.context = context;
        this.items = items;
    }

    @Override
    public int getCount() {
        return items.size();
    }

    @Override
    public Object getItem(int position) {
        return items.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View view, ViewGroup parent) {
        if (view == null) {
            view = LayoutInflater.from(context).inflate(R.layout.list_item, parent, false);
            TextView title = view.findViewById(R.id.title);
            TextView description = view.findViewById(R.id.description);

            Item item = items.get(position);
            title.setText(item.getTitle());
            description.setText(item.getDescription());
        }
        return view;
    }
}
```

**Use Custom Adapter:**

```java
List<Item> listItems = new ArrayList<>();
listItems.add(new Item("Title 1", "Description 1"));
listItems.add(new Item("Title 2", "Description 2"));
listItems.add(new Item("Title 3", "Description 3"));
listItems.add(new Item("Title 4", "Description 4"));

ItemAdapter itemAdapter=new ItemAdapter(this, listItems);
ListView listView = findViewById(R.id.listView);
listView.setAdapter(itemAdapter);
```

## ScrollView

A view group that allows the view hierarchy placed within it to be scrolled vertically.

## HorizontalScrollView

A view group that allows the view hierarchy placed within it to be scrolled horizontally.

It can only contain a `single` child view or a single layout. Avoid nesting ScrollView with other scrollable views, as it can lead to performance issues and an unpredictable user experience.

```java
scrollView.setLayoutParams(new ScrollView.LayoutParams(ScrollView.LayoutParams.MATCH_PARENT, ScrollView.LayoutParams.MATCH_PARENT));
LinearLayout linearLayout = new LinearLayout(this);
linearLayout.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT));
linearLayout.setOrientation(LinearLayout.VERTICAL);

for (int i = 1; i <= 20; i++) {
    TextView textView = new TextView(this);
    textView.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT));
    textView.setText("Item " + i);
    linearLayout.addView(textView);
}
scrollView.addView(linearLayout);
setContentView(scrollView);
```

**Attributes:**

- `android:fillViewport`: If set to true, the ScrollView will stretch its content to fill the viewport.
- `android:scrollbars`: Allows you to specify the visibility and style of scrollbars (e.g., none, vertical, horizontal).
  **Methods:**
- `scrollTo(int x, int y)`: Scroll to the specified position.
- `smoothScrollTo(int x, int y)`: Smoothly scroll to the specified position.
- `fullScroll(int direction)`: Scroll to the beginning or end of the scroll view.

**Smooth Scrolling:**

```java
goBottomButton.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        scrollView.post(new Runnable() {
            @Override
            public void run() {
                scrollView.smoothScrollTo(0, scrollView.getBottom());
                //  scrollView.smoothScrollTo(0, 500); // Smooth scroll to 500 pixels down
                //  horizontalScrollView.smoothScrollTo(horizontalScrollView.getChildAt(0).getWidth(), 0);
            }
        });
    }
});
```

## CardView

It provides a layout that includes rounded corners and a shadow, making it look elevated above other content.
**Add Dependency:**

```t
implementation ("androidx.cardview:cardview:1.0.0")
```

**XML Layout:**

```xml
<androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android" xmlns:app="http://schemas.android.com/apk/res-auto" >
</androidx.cardview.widget.CardView>
```

- `app:cardCornerRadius`: To set the radius of the corners.
- `app:cardElevation`: To set the elevation (shadow) of the card.
- `app:cardBackgroundColor`: To set the background color of the card.
- `app:cardMaxElevation`: To set the maximum elevation.
- `app:cardUseCompatPadding`: To ensure that the content of the CardView doesn’t interfere with the card’s shadow.

## RecyclerView

RecyclerView is an advanced and flexible version of ListView.

1. **XML Layout**

```xml
<androidx.recyclerview.widget.RecyclerView android:id="@+id/recyclerView" />
```

2. **Item Layout**

```xml
<LinearLayout >
    <TextView android:id="@+id/textView" />
</LinearLayout>
```

3. **ViewHolder and Adapter**

```java
public class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {

    private List<String> itemList;

    public MyAdapter(List<String> itemList) {
        this.itemList = itemList;
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {
        TextView textView;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            textView = itemView.findViewById(R.id.textView);
        }
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_view, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.textView.setText(itemList.get(position));
    }

    @Override
    public int getItemCount() {
        return itemList.size();
    }
}
```

4. **Integration**

```java
recyclerView = findViewById(R.id.recyclerView);
recyclerView.setLayoutManager(new LinearLayoutManager(this));
itemList = new ArrayList<>();
for (int i = 1; i <= 20; i++) itemList.add("Item " + i);
myAdapter = new MyAdapter(itemList);
recyclerView.setAdapter(myAdapter);
```

## Manage Data

### Remove Data

```java
public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
    ...
  holder.removeButton.setOnClickListener(v -> {
    itemList.remove(position);
    notifyItemRemoved(position);
    notifyItemRangeChanged(position, itemList.size());
  });
}
...
public MyViewHolder(@NonNull View itemView) {
  ...
  removeButton = itemView.findViewById(R.id.removeButton);
}
```

### Update Data

**Adaptar:**

```java
public void updateItem(int position, String updatedItem) {
  if (position >= 0 && position < itemList.size()) {
    itemList.set(position, updatedItem);
    notifyItemChanged(position);
  }
}
```

**MainActivity:**

```java
adapter.notifyDataSetChanged();
...
String newItem = "Item " + (itemList.size() + 1);
adapter.updateItem(newItem);
```

### Insert Data

**Adaptar:**

```java
public void addItem(String newItem) {
  itemList.add(newItem);
  notifyItemInserted(itemList.size() - 1);
  recycclerView.scrollToPosition(itemList.size() - 1);
}
```

**MainActivity:**

```java
adapter.notifyDataSetChanged();
...
String newItem = "Item " + (itemList.size() + 1);
adapter.addItem(newItem);
```

## Animation

**Adaptar:**

```java
private int lastPosition = -1;
public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
  ...
  setAnimation(holder.itemView, position);
}
...
private void setAnimation(View viewToAnimate, int position) {
 if (position > lastPosition) { // Prevent re-animating on scroll
   Animation animation = AnimationUtils.loadAnimation(viewToAnimate.getContext(), android.R.anim.fade_in);
   viewToAnimate.startAnimation(animation);
   lastPosition = position;
 }
}
```

# Views

## ZoomControls

```java
//  <ZoomControls android:id="@+id/zoomControls" />
private ZoomControls zoomControls = findViewById(R.id.zoomControls);
zoomControls.getChildAt(0).setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Toast.makeText(MainActivity.this, "Zoom Out", Toast.LENGTH_LONG).show();
    }
});
zoomControls.getChildAt(1).setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Toast.makeText(MainActivity.this, "Zoom In", Toast.LENGTH_LONG).show();
    }
});
```

## CalendarView

**Attributes:**

- `android:firstDayOfWeek`: Sets the first day of the week.
- `android:minDate`: Limits the selectable dates to those on or after the specified date.
- `android:maxDate`: Limits the selectable dates to those on or before the specified date.
- `android:showWeekNumber`: Shows or hides the week numbers.

**Handling Date Selection:**

```java
CalendarView calendarView = findViewById(R.id.calendarView);
calendarView.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
    @Override
    public void onSelectedDayChange(CalendarView view, int year, int month, int dayOfMonth) {
        String date = dayOfMonth + "/" + (month + 1) + "/" + year;
        Toast.makeText(MainActivity.this, "Selected date: " + date, Toast.LENGTH_SHORT).show();
    }
});
```

To change the color of selector, use theme attribute and to make more grip on calendar related task explore material design.

## AnalogClock

It shows the current time using hour, minute, and second hands.

```xml
<AnalogClock android:id="@+id/analogClock" />
```

## TextClock

It shows the current time in a digital format.

**Attributes:**

- `android:format12Hour`: Specifies the format string for 12-hour mode(hh:mm:ss a).
- `android:format24Hour`: Specifies the format string for 24-hour mode(HH:mm:ss).
- `android:timeZone` - Set time zone

**XML Layout:**

```xml
<TextClock android:id="@+id/textClock" />
```

## WebView

- `loadUrl()` - Loads the given URL
- `webView.setWebViewClient(new WebViewClient())` - Sets a WebViewClient to handle various web events. Enable navigating multiple webpage within the application.
- `WebSettings` - Configure various settings for the WebView.

```java
WebSettings webSettings = webView.getSettings();
webSettings.setJavaScriptEnabled(true); // Enable JavaScript
webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE); // Disable caching
webSettings.setDomStorageEnabled(true); // Enable DOM storage
```

**Handling Back Button:**

Handle back button so that it doesn't close the entire application

```java
OnBackPressedDispatcher onBackPressedDispatcher =getOnBackPressedDispatcher();
onBackPressedDispatcher.addCallback(this, new OnBackPressedCallback(true) {
    @Override
    public void handleOnBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            finish();
        }
    }
});
```

### HTML Content

**WebView:**

```java
String htmlContent = "<html><body><h1>Hello, World!</h1><p>This is a sample HTML content.</p></body></html>";
webView.loadData(htmlContent, "text/html", "UTF-8");
// webView.loadUrl("file:///android_asset/index.html"); // Local file
```

**TextView:**

```java
String htmlContent = "<h1>Hello, World!</h1><p>This is <b>bold</b> and <i>italic</i> text.</p>";
CharSequence styledText = Html.fromHtml(htmlContent);
textView.setText(styledText);
textView.setMovementMethod(LinkMovementMethod.getInstance()); // Handle clicks on links
```

## TextView

- `android:text` - sets the initial text displayed by the View
- `android:layout_width` or `android:layout_height` - sets the widht and height of the view. Possible values are:
  - `match_parent` - it will set the entire height/width of parent view
  - `wrap_content`- it will set the space as much as needed
- `android:id` - assigned identifier is used to refer the view in java/kotlin
- `android:textColor` - sets the color of the text.
- `android:textSize` - sets the font size of the text.
- `android:visibility` - control the visibility. Possible values are `visible`, `invisible`, `gone`.
- `android:backgroundTint` - specify a color overlay to the background of drawable item.

## ImageView

- `android:src` - specify the image to be displayed
- `android:scaleType` - control how an image is resized. Possible values are:
  - `fitXY` - scale the image to fit exactly within the view
  - `fitStart` - scale the image to fit within the view and align it to the top left.
  - `fitEnd` - scale the image to fit within the view and align it to the bottom right.
  - `fitCenter` - scale the image to fit within the view and center it.
- `android:adjustViewBounds` - adjust the bounds to maintain the aspect ratio. Possible values are true or false.

### Use Image from Other Resources

1. **Add Glide Dependency:**

```t
implementation 'com.github.bumptech.glide:glide:4.12.0'
annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'
```

2. **Define ImageView in XML Layout**

3. **Load Image from URL using Glide:**

```java
String imageUrl = "https://example.com/path/to/image.jpg";

Glide.with(this)
        .load(imageUrl)
        .placeholder(R.drawable.placeholder)
        .error(R.drawable.error_image)
        .into(imageView);
```

Always try to use `png` images while working with android studio.

## RatingBar

- `android:numStars`: Sets the number of stars in the RatingBar.
- `android:rating`: Sets the initial rating of the RatingBar.
- `android:stepSize`: Sets the step size of the rating. For example, if the step size is 0.5, the rating can be 0.5, 1.0, 1.5, etc.
- `android:isIndicator`: If set to true, the RatingBar is in indicator mode and the user cannot change the rating.
- `android:progressDrawable`: Sets a drawable(design) to be used for the progress indicator.

**Interact with Java:**

```java
ratingBar.setOnRatingBarChangeListener(new RatingBar.OnRatingBarChangeListener() {
    @Override
    public void onRatingChanged(RatingBar ratingBar, float rating, boolean fromUser) {
        Toast.makeText(getApplicationContext(), "Rating: " + rating, Toast.LENGTH_SHORT).show();
    }
});
```

## SeekBar

It's as same as input type range in HTML

- `android:max`: Sets the maximum value of the SeekBar.
- `android:progress`: Sets the initial progress value of the SeekBar.
- `android:thumb`: Sets a drawable for the thumb.
- `android:progressDrawable`: Sets a drawable for the progress line.

**Interact with Java:**

```java
seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
    @Override
    public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
        // Handle progress change
        Toast.makeText(getApplicationContext(), "Progress: " + progress, Toast.LENGTH_LONG).show();
    }

    @Override
    public void onStartTrackingTouch(SeekBar seekBar) {
        // Handle start of tracking touch
        Toast.makeText(MainActivity.this, "Start Track Touched", Toast.LENGTH_LONG).show();
    }

    @Override
    public void onStopTrackingTouch(SeekBar seekBar) {
        // Handle stop of tracking touch
        Toast.makeText(MainActivity.this, "Stop Track Touched", Toast.LENGTH_LONG).show();
    }
});
```

- `onProgressChanged` - handle the change of the progress
- `onStartTrackingTouch` - handle the tracking touch of the progress
- `onStopTrackingTouch` - handle the stop tracking touch of the progress

## ProgressBar

- `android:max`: Sets the maximum value of the determinate ProgressBar.
- `android:progress`: Sets the initial progress value of the determinate ProgressBar.
- `android:indeterminate`: If set to true, the ProgressBar is indeterminate.
- `android:progressDrawable`: Sets a drawable for the progress indicator.
- `android:indeterminateDrawable`: Sets a drawable for the indeterminate progress indicator.

**Interact with Java:**

- `getProgress()`, `setProgress()` - perform task following their name

## Switch

It is a subclass of `CompoundButton`

- `android:text`: Sets the text label for the Switch.
- `android:checked`: Sets the initial checked state of the Switch.
- `android:thumb`: Sets a drawable for the thumb (the part that moves).
- `android:track`: Sets a drawable for the track (the part that stays fixed).
- `android:switchTextAppearance`: Sets the text appearance for the Switch.
- `android:switchMinWidth`: Sets the minimum width of the Switch(without text).
- `android:switchPadding`: Sets the padding between the switch and the text.
- `android:showText`: Sets whether to show text (On/Off) inside the switch.

**Interact with Java:**

```java
switch1.setOnCheckedChangeListener((buttonView, isChecked) -> {
    if (isChecked) {
        // Switch is on
        Toast.makeText(getApplicationContext(), "Switch is ON", Toast.LENGTH_LONG).show();
    } else {
        // Switch is off
        Toast.makeText(getApplicationContext(), "Switch is OFF", Toast.LENGTH_LONG).show();
    }
});
```

## EditText

It is a subclass of `TextView`

- `android:inputType` - specify the type of the data. Possible values are:
- `android:textCapWords` - Capitalize the first letter of each word.
- `android:textCapCharacters` - Capitalize all characters.
- `android:textCapSentences` - Capitalize the first letter of each sentence.
- `android:textAutoCorrect` - Enable auto-correction.
- `android:textMultiLine` - Allow multiple lines of text input.
- `android:hint` - set placeholder
- `android:text` - set the initial text
- `android:maxLength` - specify the maximum length of the text can be entered
- `android:imeOptions` - specify additional options for an input method editor. This will display a `Go`, `Search`, `Enter`, `Done` button on the keyboard. Possible values are `actionDone`, `actionGo`, `actionNext`, `actionSearch`, `actionSend`, `flagNoFullscreen`
- `android:textCursorDrawble` - customize the appearance of the cursor. You need to create a custom drawable resource and apply it here.
- `clearFocus()` - dismiss the soft keyboard if it's open
- `getText()`, `setText()` - perform task following their name

**Interact with Java:**

```java
editText.addTextChangedListener(new TextWatcher() {
    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {
        // Do something before text is changed
    }

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {
        // Do something as the text is being changed
    }

    @Override
    public void afterTextChanged(Editable s) {
        // Do something after the text has changed
    }
});
```

## Spinner

Spinner is like ListView but it work like `select` tag in html. They both provide a dropdown menu that allows users to select one option from a list of choices.

## DatePicker

- `android:minDate` - The earliest selectable date.
- `android:maxDate` - The latest selectable date.

**Interact with Java:**

```java
datePicker.setOnDateChangedListener(new DatePicker.OnDateChangedListener() {
    @Override
    public void onDateChanged(DatePicker datePicker, int year, int month, int date) {
        Toast.makeText(MainActivity.this, year+" "+month+" "+date, Toast.LENGTH_LONG).show();
    }
});
```

## TimePicker

- `android:timePickerMode` - Specifies whether the time picker should use a spinner or a clock-style interface.
  - `spinner` - shows hours and minutes in a dropdown-style spinner.
  - `clock` - provides a clock-style interface for selection.
- `setIs24HourView(true)` - make the time in a 24-hour format.

**Interact with Java:**

```java
timePicker.setOnTimeChangedListener(new TimePicker.OnTimeChangedListener() {
    @Override
    public void onTimeChanged(TimePicker view, int hourOfDay, int minute) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, hourOfDay);
        calendar.set(Calendar.MINUTE, minute);

        // Format the time to 12-hour format with AM/PM
        SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a", Locale.getDefault());
        String time = sdf.format(calendar.getTime());

        // Show the time in a Toast message
        Toast.makeText(MainActivity.this, "Selected time: " + time, Toast.LENGTH_LONG).show();
    }
});
```

## NumberPicker

It allow users to select a number from a predefined range.

- `setMinValue` - Minimum value displayed in the NumberPicker.
- `setMaxValue` - Maximum value displayed in the NumberPicker.
- `setValue` - Initial value displayed in the NumberPicker.
- `setWrapSelectorWheel` - Whether to wrap the selector wheel when reaching the minimum or maximum value.
- `setDisplayedValues` - Sets list of values displayed in the NumberPicker.

**Interact with Java:**

```java
numberPicker.setOnValueChangedListener(new NumberPicker.OnValueChangeListener() {
    @Override
    public void onValueChange(NumberPicker picker, int oldVal, int newVal) {
        // Handle value change
        selectedValueTextView.setText("Selected Value: " + newVal+" "+oldVal);
    }
});
```

## RadioGroup

Radio buttons are usually placed inside a RadioGroup to ensure that only one button can be selected at a time.

```xml
<RadioGroup android:id="@+id/radioGroup" >
    <RadioButton android:text="Male" />
    <RadioButton android:text="Female" />
    <RadioButton android:text="Other" />
</RadioGroup>
```

**Interact with Java:**

```java
radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
    @Override
    public void onCheckedChanged(RadioGroup group, int checkedId) {
        RadioButton radioButton = findViewById(checkedId);
        Toast.makeText(getApplicationContext(), "Selected: " + radioButton.getText(), Toast.LENGTH_LONG).show();
    }
});
```

## ChipGroup

Chips are typically used to display tags, categories, or selections.

**Types of Chips:**

1. **Entry Chip:** Used for inputting information.
2. **Filter Chip:** Used for filtering content.
3. **Choice Chip:** Used for single selection from a set.
4. **Action Chip:** Used to trigger actions related to primary content.

**Add Dependency:**

```t
implementation ("com.google.android.material:material:1.4.0")
```

Now sync your project.

**XML Layout:**

```xml
<com.google.android.material.chip.ChipGroup >
    <com.google.android.material.chip.Chip style="@style/Widget.MaterialComponents.Chip.Action" />
    <com.google.android.material.chip.Chip style="@style/Widget.MaterialComponents.Chip.Entry" />
    <com.google.android.material.chip.Chip style="@style/Widget.MaterialComponents.Chip.Filter" />
<com.google.android.material.chip.ChipGroup >
```

**ChipGroup Attributes:**

- `app:singleSelection` - only one chip can be selected at a time.
- `app:selectionRequired` - at least one chip must be selected.

**Chip Attributes:**

- `app:chipIcon` - set an icon on the chip.
- `app:chipBackgroundColor` - set the background color.
- `app:chipStrokeColor` - set the stroke color.
- `app:chipStrokeWidth` - set the stroke width.
- `app:closeIconEnabled` - enable a close icon on the chip.
- `app:closeIcon` - set a custom close icon.

**Interact with Java:**

```java
chip_group=findViewById(R.id.chip_group);
btn=findViewById(R.id.btn);
btn.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View view) {
        Chip chip=new Chip(MainActivity.this);
        chip.setText("Chip 1");
        chip.setCloseIconVisible(true);

        chip.setOnCloseIconClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                chip_group.removeView(chip);
            }
        });
        chip_group.addView(chip);
    }
});
```

## AutoCompleteTextView

An AutoCompleteTextView only offers suggestion about the whole text. But `MultiAutoCompleteTextView` offers multiple suggestions for the substring of the text.
**Interact with Java:**

```java
ArrayAdapter<String> adapter=new ArrayAdapter<String>(this,android.R.layout.simple_dropdown_item_1line,countries);
        AutoCompleteTextView textView=(AutoCompleteTextView)findViewById(R.id.autoComplete);
        textView.setThreshold(3);
        //  textViewM.setTokenizer(new MultiAutoCompleteTextView.CommaTokenizer());  // USED FRO MULTIAUTOCOMPLETETEXTVIEW
        textView.setAdapter(adapter);
```

- `setThreshold` - specify the number of characters after which the dropdown with the autocomplete suggestions list would be displayed.

# View

Basic building block for user interface.

It does not display any content on its own, it can be used as a placeholder, a separator, or a background element.

# App Lifecycle

The Android app lifecycle represents the different states an application can be in, based on user interaction and system behavior.

## App Lifecycle States:

1. **Foreground (Active)** → The app is visible and being used.
2. **Background** → The app is running but not visible.
3. **Killed** → The system terminates the app to free memory.

## How the System Manages the App Lifecycle:

- When a user launches an app, it moves from the background to the foreground.
- If the user switches to another app, the current app moves to the background.
- If the system needs memory, it may kill the app running in the background.

# Styling

## Shape

- `<solid>` tag specifies the fill color of the shape.
- `<stroke>` tag defines the border width and color.
- `<corners>` tag allows you to set the radius for rounded corners.
- `<padding>` tag specifies the padding inside the shape.
- `<size>` tag can define the width and height of the shape (useful for lines and rings).
- `<shape>` is the container tag, shape type is set by `android:shape` attribute along with shape tag
- `<gradient>` is used to define a gradient background

**Rectangle:**

```xml
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="#e9ecf3" />
    <corners android:radius="8dp" />
    <stroke android:width="2dp" android:color="#c0c0c0" />
    <padding android:left="10dp" android:top="10dp" android:right="10dp" android:bottom="10dp" />
</shape>
```

## Layer List

`<layer-list>` tag is used to define a list of layers (drawable objects) that are drawn on top of each other. It allows you to combine different drawable elements (such as shapes, gradients, images, etc.) into a single drawable.

```xml
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item>
        <shape android:shape="rectangle">
            <stroke android:width="4dp" android:color="#ff0000"/>
        </shape>
    </item>
    <item
        android:left="30dp"
        android:drawable="@android:drawable/btn_plus"
        >
    </item>
</layer-list>
```

## Themes

- Theme.Holo
- Theme.Holo.Light
- Theme.Material
- Theme.Material.Light
- Theme.AppCompat
- Theme.AppCompat.Light
- Theme.AppCompat.Light.DarkActionBar
- Theme.AppCompat.DayNight
- Theme.AppCompat.DayNight.DarkActionBar
- Theme.AppCompat.NoActionBar
- Theme.AppCompat.Light.NoActionBar
- Theme.AppCompat.DayNight.NoActionBar

Themes are applied to entire activities or applications, while styles are applied to individual views.

### Define a New Theme

```xml
<resources>
    <style name="themeName">
        <item name="viewAttribute">attributeValue</item>
    </style>
    <style name="anotherTheme" parent="themeName">
        <item name="colorPrimary">@color/primaryColor</item>
    </style>
</resources>
```

All the design from `themeName` inherited to `anotherTheme`.

### Apply Theme

**Application:**
Apply theme to the whole application with `<application>` tag and `android:theme` attribute.

```xml
<application android:theme="@style/themeName" ><application>
```

**Activity:**
Apply theme to a specific activity with `<activity>` tag and `android:theme` attribute.

```xml
<activity android:theme="@style/themeName" ><activity>
```

# Eventlistener

- `Button myButton = findViewById(R.id.myButton)` - finds a button with the id `myButton` defined in the layout XML file and assigns it to a variable named myButton.

  It should be declare outside of `onCreate` and initialize inside it.

- `myButton.setOnClickListener(new View.OnClickListener() { ... })` - sets an OnClickListener on the button called `myButton`.

## Handling Multiple Eventlistner

- **Implement the Listener Interfaces:** Implement the listener interfaces for the events you want to handle. For example, if you want to handle click events on buttons, you'll implement the View.OnClickListener interface.

```java
public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    ...
}
```

- **Register the Listeners:** Register the listener instances with the appropriate views.

```java
Button myButton = findViewById(R.id.myButton);
myButton.setOnClickListener(this);
```

- **Override the Listener Methods:** Implement the required methods of the listener interfaces which will contain the logic that you want to execute when the corresponding events occur.

```java
@Override
public void onClick(View view) {
    ...
}
```

**Boilerplate:**

```java
public class MainActivity extends AppCompatActivity implements View.OnClickListener {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    Button myButton = findViewById(R.id.myButton);
    myButton.setOnClickListener(this);
  }

  @Override
  public void onClick(View view) {
    if(v.getId()==R.id.myButton){
      myText.setText("Button is clicked");
    }
  }
}
```

## Inner Class

- **Instantiate the Inner Class and Set the Listener:** Instantiate an object of the inner class and set it as the listener for the view using the `setOnClickListener` method.

```java
myButton.setOnClickListener(new MyButtonClickListener());
```

- **Define the Inner Class:** Define an inner class within your activity class. It will implement the interface corresponding to the event you want to handle. In this case, we're handling click events, so the inner class implements View.OnClickListener.

```java
private class MyButtonClickListener implements View.OnClickListener {
    @Override
    public void onClick(View view) {
        ...
    }
}
```

**Boilerplate:**

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        ...
        myButton.setOnClickListener(new MyButtonClickListener());
    }

    private class MyButtonClickListener implements View.OnClickListener {
        @Override
        public void onClick(View view) {
            if(v.getId()==R.id.myButton){
                myText.setText("Button is clicked");
            }
        }
    }
}
```

## Event Handler in XML

**XML:**

```xml
<Button ... android:onClick="onButtonClick" />
```

**JAVA:**

```java
public void onButtonClick(View view) {
  Toast.makeText(this, "Button clicked", Toast.LENGTH_SHORT).show();
}
```

## View Methods

- `setText()`, `setTextColor()`, `setTextSize()`, `getText()`, `getTextSize()`, `getCurrentTextColor()` - methods works by following their name
- `setOnClickListener()`- sets a listener to be invoked when the TextView is clicked.
- `setTypeface()` - set the font
- `getId()` - gets the view ID

# Inflater

The primary purpose of LayoutInflater is to convert an XML layout file into a view object that can be used in your activity or fragment so that you can access it programmatically.

Each xml inside layout directory is not an activity. If it's an activity you can access it it by it's corresponding java file. But what about those file which is not an activity. There LayoutInflater comes, you can access those layout which are not an activity by LayoutInflater.

**LayoutInflater Instance:**

```java
LayoutInflater inflater = getLayoutInflater();
//  LayoutInflater inflater = LayoutInflater.from(this);
```

**Inflating a Layout:**

```java
View inflatedView = inflater.inflate(R.layout.my_layout, parent, false);
```

- `R.layout.my_layout` - The layout XML file which should be inflated.
- `parent` - The parent view where the inflated layout will be attached. If there have no parent use `null`.
- `false` - A boolean indicating whether to attach the inflated layout to the parent view immediately. Typically set to false when you intend to add the view programmatically.

**Access View:**

```java
TextView textView = inflatedView.findViewById(R.id.custom_text);
```

# Toast

Toast isa lightweight way to display a short message to the user. It appears for a short duration and then disappears automatically.

## Basic Usage

```java
Toast.makeText(context, "Hello, Toast!", Toast.LENGTH_SHORT).show();
```

## Custom Toast

**Custom Layout for Toast:**

```xml
<LinearLayout android:id="@+id/customToast">
    <ImageView android:id="@+id/toast_icon" />
    <TextView android:id="@+id/toast_message" />
</LinearLayout>
```

**Inflate the custom layout for the Toast:**

```java
LayoutInflater inflater = getLayoutInflater();
View layout = inflater.inflate(R.layout.custom_toast,(ViewGroup)findViewById(R.id.custom_toast_id));
```

**Create and show the Toast:**

```java
Toast customToast = new Toast(MainActivity.this);
customToast.setDuration(Toast.LENGTH_LONG);
customToast.setGravity(Gravity.CENTER, 0, 0);
customToast.setView(layout);
customToast.show();
```

# AlertDialog

**Default AlertDialog**

```java
AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
builder.setTitle("Alert")
        .setMessage("Are you sure you want to proceed?")
        .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        })
        .setNegativeButton("No", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        });

AlertDialog alertDialog = builder.create();
alertDialog.show();
```

**Custom AlertDialog**

```java
LayoutInflater inflater = getLayoutInflater();
View dialogView = inflater.inflate(R.layout.dialog_layout, null);
builder.setView(dialogView);
builder.setTitle("Custom Alert")
    .setPositiveButton("Submit", new DialogInterface.OnClickListener() {
        @Override
        public void onClick(DialogInterface dialogInterface, int i) {
            String input =  dialogView.findViewById(R.id.inputEditText).getText().toString();
            Toast.makeText(MainActivity.this, "You entered: " + input, Toast.LENGTH_SHORT).show();
        }
    })
```

# Activity

Activity is a single screen with UI which serve as the entry point for user interaction with an app.

An activity is a class in Android that is designed to facilitate interaction between the user and the app. It typically consists of:

- `Layout (UI)`: The visual elements displayed to the user, defined in XML files.
- `Java/Kotlin Code`: The logic behind the activity, managing user interactions, data, and app functionality.

## Activity Lifecycle

Let's see the 7 lifecycle methods of android activity.

- `onCreate()`: Called when the activity is first created. Here, you typically initialize UI components and load essential data.
- `onStart()`: Called when the activity becomes visible to the user.
- `onResume()`: Called when the activity is ready to interact with the user.
- `onPause()`: Called when the activity loses focus but is still partially visible (e.g., when a dialog appears).
- `onStop()`: Called when the activity is no longer visible to the user.
- `onRestart()`: Called when the activity is restarted after being stopped.
- `onDestroy()`: Called before the activity is destroyed.

<img align="right" width="40%" src="https://static.javatpoint.com/images/androidimages/Android-Activity-Lifecycle.png" alt="masum184e" />
<pre>
    onCreate -> onStart -> onResume 
             <b>OTHER ACTIVITY</b> 
            onPause -> onStop
                <b>REOPEN</b> 
      onRestart -> onStart -> onResume
        <b>CLOSE APP, BACK BUTTON</b>
    onPause -> onStop -> onDestroy
</pre>

**Interact with Java:**

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_second);

    Toast.makeText(this, "SECOND ACTIVITY - CREATE", Toast.LENGTH_LONG).show();
}

@Override
protected void onStart(){
    super.onStart();
    Toast.makeText(this, "SECOND ACTIVITY - START", Toast.LENGTH_LONG).show();
}

@Override
protected void onResume(){
    super.onResume();
    Toast.makeText(this, "SECOND ACTIVITY - RESUME", Toast.LENGTH_LONG).show();
}

@Override
protected void onPause(){
    super.onPause();
    Toast.makeText(this, "SECOND ACTIVITY - PAUSE", Toast.LENGTH_LONG).show();
}

@Override
protected void onStop(){
    super.onStop();
    Toast.makeText(this, "SECOND ACTIVITY - STOP", Toast.LENGTH_LONG).show();
}

@Override
protected void onRestart(){
    super.onRestart();
    Toast.makeText(this, "SECOND ACTIVITY - RESTART", Toast.LENGTH_LONG).show();
}

@Override
protected void onDestroy(){
    super.onDestroy();
    Toast.makeText(this, "SECOND ACTIVITY - DESTROY", Toast.LENGTH_LONG).show();
}
```

- **Launching :** onCreate() -> load activity -> onStart() -> onResume()
- **Navigation :** old activity -> onPause() -> current activity -> onCreate() -> load activity -> onStart() -> onResume() -> old activity -> onStop()
- **Home :** current activity -> onPause() -> onStop()
- **Recents :** remove app from recents -> onDestroy()

# Intent

In Android, Intents are used for communication between components such as activities, services, and broadcast receivers. There are two types of intents:

1. **Explicit Intent** → Used to navigate to a specific component (e.g., opening another activity within the same app).
2. **Implicit Intent** → Used to request an action from another app without specifying the exact component (e.g., opening a web page or sharing text).

## Explicit Intent

Intent class is used to navigate through activity. Intent class accept two parameter, first one is current activity, and another one is navigated activity.

```java
Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);
```

## Implicit Intent

An Implicit Intent is used when you do not specify the exact component, but instead, request an action that can be handled by another app.

**Open a Web Page:**

```java
Intent intent = new Intent(Intent.ACTION_VIEW);
intent.setData(Uri.parse("https://www.google.com"));
startActivity(intent);
```

This will open the browser to display Google.

**Make a Phone Call:**

```java
Intent intent = new Intent(Intent.ACTION_DIAL);
intent.setData(Uri.parse("tel:+123456789"));
startActivity(intent);
```

This will open the dialer app with the number pre-filled.

**Share Text:**

```java
Intent intent = new Intent(Intent.ACTION_SEND);
intent.setType("text/plain");
intent.putExtra(Intent.EXTRA_TEXT, "Check out this cool app!");
startActivity(Intent.createChooser(intent, "Share via"));
```

This will show a chooser to share the text via apps like WhatsApp, Messages, etc.

**Open Camera:**

```java
Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
startActivity(intent);
```

## Bundle

`Bundle` is a collection of key-value pairs that is used to pass data between different components of an application such as between activities, fragments. It's a convenient way to package and transmit data because it can hold a variety of data types including primitive types, strings, arrays and even custom parceable objects.

## Pass Data Between Activity

**Send:** `intent.putExtra()` - is used to send extra data with key value pair

```java
intent.putExtra("EXTRA_MESSAGE", "Hello from MainActivity!");
```

**Recieve:** `getIntent()` and `getStringExtra()` - is used to retreive data from activity

```java
Intent intent = getIntent();
String message = intent.getStringExtra("EXTRA_MESSAGE","DEFAULT_VALUE);
```

## Navigation

1. Declare Activities in `AndroidManifest.xml`:

```xml
<application ... >
    <activity android:name=".MainActivity">...</activity>
    <activity android:name=".SecondActivity" />
</application>
```

2. Handle `MainActivity`:

**XML File:**

```xml
<EditText android:id="@+id/inputBox" .../>
<Button android:id="@+id/myButton" onClick="handleNext" .../>
<TextView android:id="@+id/myView" .../>
```

**Java File:**

```java
public class MainActivity extends AppCompatActivity {
    ...
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        ...
        myButton=findViewById(R.id.myButton);
        inputBox=findViewById(R.id.inputBox);
        myView=findViewById(R.id.myView);

        Intent intent = getIntent();
        String message = intent.getStringExtra("ACTIVITY_MESSAGE");
        if(message!=null){
            myView.setText("From Second Activity: "+message);
        }

    }

    public void handleNext(View v){
        if(v.getId()==R.id.myButton){
            Intent intent = new Intent(this, SecondActivity.class);
            intent.putExtra("ACTIVITY_MESSAGE", inputBox.getText().toString());
            startActivity(intent);
        }
    }
}
```

3. Handle `SecondActivity`:

**XML File:**

```xml
<EditText android:id="@+id/inputSecondBox" .../>
<Button android:id="@+id/mySecondButton" android:onClick="handlePrev" .../>
<TextView android:id="@+id/mySecondView" .../>
```

**Java File:**

```java
public class SecondActivity extends AppCompatActivity {
    ...
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        ...
        mySecondView=findViewById(R.id.mySecondView);
        inputSecondBox=findViewById(R.id.inputSecondBox);
        mySecondButton=findViewById(R.id.mySecondButton);

        Intent intent = getIntent();
        String message = intent.getStringExtra("ACTIVITY_MESSAGE");
        if(message!=null){
            mySecondView.setText("From Main Activity: "+message);
        }

    }

    public void handlePrev(View v){
        if(v.getId()==R.id.mySecondButton){
            Intent intent = new Intent(this, MainActivity.class);
            intent.putExtra("ACTIVITY_MESSAGE", inputSecondBox.getText().toString());
            startActivity(intent);
        }
    }
}
```

`onCreate`, `onStart`, `onResume`, `onPause`, `onStop`, `onRestart`, `onDestroy` all are the instances of activity class. As you use onCreate method for initial rendering.

# Fragment

Fragment represents a reusable portion of your application's user interface. It is similar to activity but can't run by independently, it needs help of activity. It is child of activity.

For 3-5 fragments use TabLayout, for 5-7 fragments use BottomNavigation, for more than 7 fragments use NavigationDrawer.

Fragments have their own lifecycle, which is closely tied to the lifecycle of the host activity.

- `onAttach()`
- `onCreate()`
- `onCreateView()`
- `onActivityCreated()`
- `onStart()`
- `onResume()`
- `onPause()`
- `onStop()`
- `onDestroyView()`
- `onDestroy()`

## Static Fragment

1. **Fragment Class:**
   Create a fragment by extending the Fragment class and overriding key lifecycle methods.

```java
@Override
public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    return inflater.inflate(R.layout.fragment_frag_a, container, false);
}
```

2. **Fragment Layout:**
   By default, FrameLayout is the default layout. But you can use any of the layout to create fragment.
3. **Merge with Activity:**
   `<fragment>` tag and `name` attribute is used to statically add a fragment to an activity.

```xml
<fragment android:name="com.example.project_name.fragment_name" />
```

**Handle Fragment:**

```java
public View onCreateView(LayoutInflater inflater, ViewGroup container Bundle savedInstanceState) {
    View view=inflater.inflate(R.layout.fragment_frag_a, container, false);
    Button btn= view.findViewById(R.id.button);
    btn.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Toast.makeText(getContext(), "Fragment A", Toast.LENGTH_LONG).show();
        }
    });

    return view;
}
```

## Dynamic Fragment

Just instead using `<fragment>` tag, handle it programmitically.

```java
FragmentManager fragmentManager=getSupportFragmentManager();
fragmentManager.beginTransaction().replace(R.id.layout_contaner, new BlankFragment()).commit();
```

- `layout_container` - where fragment should stay.
- `BlankFragment` - class name of new fragment.

## Passs Data Between Fragment

**Send Data:**

```java
sendButton.setOnClickListener(v -> {
    // Create the data to pass
    Bundle bundle = new Bundle();
    bundle.putString("message", "Hello from SenderFragment!");

    // Create an instance of the target fragment and set arguments
    ReceiverFragment receiverFragment = new ReceiverFragment();
    receiverFragment.setArguments(bundle);

    // Replace current fragment with ReceiverFragment
    getParentFragmentManager()
            .beginTransaction()
            .replace(R.id.fragment_container, receiverFragment)
            .addToBackStack(null) // Add to back stack for navigation
            .commit();
});
```

**Recieve Data:**

````java
// Retrieve the passed data
Bundle arguments = getArguments();
if (arguments != null) {
    String message = arguments.getString("message");
    textView.setText(message);
}
***Load Container:***
```java
// Load SenderFragment initially
if (savedInstanceState == null) {
    getSupportFragmentManager()
            .beginTransaction()
            .replace(R.id.fragment_container, new SenderFragment())
            .commit();
}
````

## Pass Data Between Fragment to Activity

**Send Data:**

```java
public class SenderFragment extends Fragment {

    private OnDataPassListener dataPassListener;

    // Define an interface for communication
    public interface OnDataPassListener {
        void onDataPass(String data);
    }

    // Attach the fragment to the activity and ensure it implements the interface
    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        try {
            dataPassListener = (OnDataPassListener) context;
        } catch (ClassCastException e) {
            throw new ClassCastException(context.toString() + " must implement OnDataPassListener");
        }
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        sendButton.setOnClickListener(v -> {
            // Send data to the activity
            String dataToSend = "Hello from SenderFragment!";
            dataPassListener.onDataPass(dataToSend);
        });
    }
}
```

**Recieve Data:**

```java
protected void onCreate(Bundle savedInstanceState) {
...
    if (savedInstanceState == null) {
        getSupportFragmentManager()
            .beginTransaction()
            .replace(R.id.fragment_container, new SenderFragment())
            .commit();
    }
}
@Override
public void onDataPass(String data) {
    // Display the received data in the TextView
    System.out.println(data);
}
```

## Pass Data Between Activity to Fragment

**Send Data:**

```java
// Create a bundle to pass data
Bundle bundle = new Bundle();
bundle.putString("message", "Hello from MainActivity!");

// Create an instance of ReceiverFragment and set arguments
ReceiverFragment receiverFragment = new ReceiverFragment();
receiverFragment.setArguments(bundle);
```

**Recieve Data:**

```java
Bundle arguments = getArguments();
if (arguments != null) {
    String message = arguments.getString("message");
    textView.setText(message);
}
```

# Bottom Navigation

**1. Menu Resource File:**

```xml
<menu>
    <item />
    <item />
</menu>
```

**2. Fragment:** Create fragment for each of the item.

**3. XML Layout:**

```xml
<FrameLayout
    android:id="@+id/layout_container"
    android:layout_height="0dp"
    android:layout_weight="1"
    />
<com.google.android.material.bottomnavigation.BottomNavigationView
    android:id="@+id/bottomNavigation"
    android:layout_height="60dp"
    app:menu="@menu/menu_main"
    />
```

**4. Handling Item Selection:**

```java
bottomNavigation.setOnItemSelectedListener(new NavigationBarView.OnItemSelectedListener() {
    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
        int currentItemId=menuItem.getItemId();

        if(currentItemId==R.id.action_save)load_fragment(new FragmentA());
        else if(currentItemId==R.id.action_manage)load_fragment(new FragmentB());
        else if(currentItemId==R.id.action_home)load_fragment(new FragmentC());
        else if(currentItemId==R.id.action_places)load_fragment(new FragmentD());
        else load_fragment(new FragmentE());

        return true;
    }
});
bottomNavigation.setSelectedItemId(R.id.action_save);
```

- `bottomNavigation.setSelectedItemId(R.id.action_save);` - set the inital fragment
- `return true` - set the active design of selected menu item

# Actionbar

It is a component provided by the Android framework that serves as the primary toolbar at the top of the screen. It is responsible for displaying the app title, icon, and navigation options such as back, home, or up buttons. It also contains menu items, which often include search, settings, and other action-related icons. Automatically provided by Android when you use a theme that supports an ActionBar (e.g., Theme.AppCompat.Light.DarkActionBar).

## Basic Usage

1.  **Set up The Theme:**
    The activity or the whole application, where toolbar should be implement must contain a theme that support an ActionBar.

        - `android:label` attribute from `<application>` tag or `<activity>` tag is the default label of toolbar.

2.  **Customize with Java**

```java
ActionBar actionBar = getSupportActionBar();
if (actionBar != null) {
    actionBar.setTitle("My Title");
    actionBar.setSubtitle("My Subtitle");
    actionBar.setDisplayHomeAsUpEnabled(true);
}
```

- `setDisplayHomeAsUpEnabled` - display a back arrow which navigates up in the application's hierarchy.
- `return true;` - means that you have handled the menu item selection.
- `return false;` - indicates that you have not handled the event, and the system should continue to process it(rare);
- `return super.onOptionsItemSelected(item);` - allow the superclass to handle the event.

## Custom Actionbar

```java
ActionBar actionBar = getSupportActionBar();
if (actionBar != null) {
    actionBar.setDisplayHomeAsUpEnabled(true);
    actionBar.setDisplayShowCustomEnabled(true);
    actionBar.setCustomView(R.layout.custom_actionbar);
}
```

## Back Button

```java
@Override
public boolean onSupportNavigateUp() {
    finish();
    return true;
}
```

## Menu Items

**Displaying 3 dots in right side of actionbar:**

```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
    MenuInflater inflater = getMenuInflater();
    inflater.inflate(R.menu.menu_main, menu);
    return true;
}
```

**Handling click event on each menu item:**

```java
@Override
public boolean onOptionsItemSelected(@NonNull MenuItem item) {
    int id = item.getItemId();

    // Handle 3-dot menu items
    if (id == R.id.action_manage) {
        Toast.makeText(this, "Manage clicked!", Toast.LENGTH_SHORT).show();
        return true;
    } else if (id == R.id.action_save) {
        Toast.makeText(this, "Save clicked!", Toast.LENGTH_SHORT).show();
        return true;
    } else if (id == R.id.action_home) {
        Toast.makeText(this, "Home clicked!", Toast.LENGTH_SHORT).show();
        return true;
    }

    return super.onOptionsItemSelected(item);
}
```

# Toolbar

It is a more flexible and customizable version of the `ActionBar`. It was introduced with Android 5.0 (Lollipop) as part of the Material Design guidelines. `Toolbar` provides all the functionality of the `ActionBar` but can be placed anywhere in your layout, not just at the top.

It is a ViewGroup that can be added to any part of your layout and can act as a complete replacement for the ActionBar.

Toolbar can replace the ActionBar. By using the `setSupportActionBar(Toolbar toolbar)` method in an `AppCompatActivity`, you can promote a Toolbar to act as the app’s ActionBar.

```java
import androidx.appcompat.widget.Toolbar;
...
Toolbar toolbar = findViewById(R.id.toolbar);
setSupportActionBar(toolbar);
ActionBar actionBar = getSupportActionBar();
```

# AppBarLayout

It is part of the Android `CoordinatorLayout` and is primarily used in more complex layouts to create collapsing toolbars or other dynamic app bar effects. It’s a container that helps handle scroll-based animations like collapsing or expanding headers, which is common in Material Design.

**Define the XML Layout:**

```xml
<androidx.coordinatorlayout.widget.CoordinatorLayout>
    <com.google.android.material.appbar.AppBarLayout android:theme="@style/ThemeOverlay.AppCompat.Dark.ActionBar">
        <com.google.android.material.appbar.CollapsingToolbarLayout
            android:layout_height="200dp"
            app:layout_scrollFlags="scroll|exitUntilCollapsed"
            app:contentScrim="?attr/colorPrimary"
            app:expandedTitleMarginStart="48dp"
            app:expandedTitleMarginEnd="64dp">

            <androidx.appcompat.widget.Toolbar
                android:id="@+id/toolbar"
                android:layout_height="?attr/actionBarSize"
                app:layout_collapseMode="pin" />

        </com.google.android.material.appbar.CollapsingToolbarLayout>
    </com.google.android.material.appbar.AppBarLayout>

    <!-- Main content, such as a RecyclerView -->
    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recycler_view"
        app:layout_behavior="@string/appbar_scrolling_view_behavior" />

</androidx.coordinatorlayout.widget.CoordinatorLayout>
```

**Setting up the Toolbar:**

```java
// Set up the Toolbar as the ActionBar
Toolbar toolbar = findViewById(R.id.toolbar);
setSupportActionBar(toolbar);

// Set the title for the collapsing toolbar layout
CollapsingToolbarLayout collapsingToolbar = findViewById(R.id.collapsing_toolbar);
collapsingToolbar.setTitle("Collapsible AppBar");
```

# Logging

It allow developers to track the flow of their application, debug issues, and monitor behavior during runtime. Android provides a built-in logging framework through the `android.util.Log` class, which allows developers to output log messages of varying severity levels.

## Log Levels

1. **Error:** Used to log error conditions that might cause the application to crash or behave unexpectedly(`catch` block).
2. **Warning:** Used to indicate potential issues that do not prevent the application from functioning but should be addressed.
3. **Info:** Used for informational messages that highlight the progress of the application. These messages can be useful for tracking significant application events. It uses to display the system message.
4. **Debug:** Used for debugging messages. These messages are useful during development but will be disabled in production builds.
5. **Verbose:** The least important level, typically used for providing detailed information during debugging.
6. **Assert:** Used to log assertions, indicating conditions that should never occur. This level is typically used for critical errors.

## Logging Methods

`Log.v()`,`Log.d()`,`Log.i()`,`Log.w()`,`Log.e()`,`Log.wtf()` is used for verbose, debug, informational, warning, error, assertion message respectively. Each method required a tag and log message. Debugging and Error are most of the uses methods.

**Example:**

```java
Log.i("TAG","MESSAGE")
```

## Message Format

**Syntax:** `date time PID-TID package application_name priority tag:message`

- `PID` - Process ID
- `TID` - Thread ID
  **Example:**

```
2024-08-19 13:42:14.215 17520-17547 ProfileInstaller        com.example.learning                 D  Installing profile for com.example.learning
```

- `2024-08-19` - date
- `13:42:14.215` - time
- `17520` - PID
- `17547` - TID
- `ProfileInstaller` - Application ame
- `com.example.learning` - package
- `D` -priority
- `Installing profile for com.example.learning` - message

# Database

## SharedPreferences

It is used for storing small amounts of primitive data in key-value pairs. You can use it for storing user setting, last score, location caching

**Store Data:**

```java
SharedPreferences sharedPreferences = getSharedPreferences("MyPreferences", Context.MODE_PRIVATE);
SharedPreferences.Editor editor = sharedPreferences.edit();
editor.putString("key", "value");
editor.putInt("key", 123);
editor.apply();  // or editor.commit();
```

**Retrieve Data:**

```java
SharedPreferences sharedPreferences = getSharedPreferences("MyPreferences", Context.MODE_PRIVATE);
if(sharedPreferences.contains("key")){
  String value = sharedPreferences.getString("key", "default_value");
  int number = sharedPreferences.getInt("key",123);
}
```

**Update Data:** Updating data is same as inserting it.

**Delete Data:**

```java
SharedPreferences sharedPreferences = getSharedPreferences("MyPreferences", Context.MODE_PRIVATE);
SharedPreferences.Editor editor = sharedPreferences.edit();
editor.remove("key");
editor.apply();
```

## File Storage

File storage in Android is used to save and retrieve data in the form of files. Android provides two main storage options:

1. **Internal Storage** – Private to the app, stored in app-specific directories, and inaccessible to other apps.
2. **External Storage** – Accessible to other apps and users but requires permissions.

### Internal Storage

Internal storage is private to the application, meaning other apps cannot access its files. When the app is uninstalled, all stored files are deleted.

**When to Use Internal Storage?**

- Saving app-specific files (e.g., logs, config files, private images)
- Storing sensitive user data (since files are not accessible to other apps)
- Data should not be shared outside the app

Use internal storage to store private data within the device's internal memory.

**Store Data:**

```java
String filename = "myfile.txt";
String fileContents = "Hello World!";
FileOutputStream fos = openFileOutput(filename, Context.MODE_PRIVATE);
fos.write(fileContents.getBytes());
fos.close();
```

**Retrieve Data:**

```java
String filename = "myfile.txt";
FileInputStream fis = openFileInput(filename);
InputStreamReader isr = new InputStreamReader(fis);
BufferedReader bufferedReader = new BufferedReader(isr);
StringBuilder sb = new StringBuilder();
String line;
while ((line = bufferedReader.readLine()) != null) {
    sb.append(line);
}
String fileContents = sb.toString();
```

### External Storage

External storage is accessible by the user and other apps. It is suitable for storing large files such as images, videos, and documents.

**Permissions Required**

Unlike internal storage, external storage requires runtime permissions

```java
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

**Request Runtime Permissions**

```java
import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class MainActivity extends AppCompatActivity {
    private static final int REQUEST_CODE = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, REQUEST_CODE);
        } else {
            writeToFile("Hello, External Storage!");
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions,
                                           @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                writeToFile("Hello, External Storage!");
            } else {
                Toast.makeText(this, "Permission Denied", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
```

**Writing Data to External Storage:**

```java
import android.os.Environment;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class ExternalStorageHelper {
    private static final String FILE_NAME = "example.txt";

    public static void writeToExternalStorage(String data) {
        if (isExternalStorageWritable()) {
            File file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS), FILE_NAME);
            try (FileOutputStream fos = new FileOutputStream(file)) {
                fos.write(data.getBytes());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static boolean isExternalStorageWritable() {
        return Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED);
    }
}
```

**Reading Data from External Storage:**

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ExternalStorageHelper {
    private static final String FILE_NAME = "example.txt";

    public static String readFromExternalStorage() {
        StringBuilder stringBuilder = new StringBuilder();
        File file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOCUMENTS), FILE_NAME);
        try (FileInputStream fis = new FileInputStream(file)) {
            int ch;
            while ((ch = fis.read()) != -1) {
                stringBuilder.append((char) ch);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return stringBuilder.toString();
    }
}
```

**Use in Activity:**

```java
ExternalStorageHelper.writeToExternalStorage("Hello, External Storage!");
String data = ExternalStorageHelper.readFromExternalStorage();
Log.d("ExternalStorage", "Read Data: " + data);
```

# JSON Parsing

## Step 1: Add Moshi DependencyStep 1: Add Moshi Dependency

```js
dependencies {
    implementation 'com.squareup.moshi:moshi:1.12.0'
    implementation 'com.squareup.moshi:moshi-kotlin:1.12.0'
}
```

## Step 2: Create Model Class

```java
import com.squareup.moshi.Json;

public class Post {
    @Json(name = "userId")
    private int userId;

    @Json(name = "id")
    private int id;

    @Json(name = "title")
    private String title;

    @Json(name = "body")
    private String body;

    // Getters
}
```

## Step 3: Parse JSON String Using Moshi

```java
import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;

public class MoshiExample {
    public static void main(String[] args) {
        // Sample JSON String
        String jsonString = "{ \"userId\": 1, \"id\": 101, \"title\": \"Learn JSON Parsing\", \"body\": \"Moshi example.\" }";

        // Moshi Instance
        Moshi moshi = new Moshi.Builder().build();
        JsonAdapter<Post> jsonAdapter = moshi.adapter(Post.class);

        // Convert JSON to Java Object
        try {
            Post post = jsonAdapter.fromJson(jsonString);
            System.out.println("Title: " + post.getTitle());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

# Retrofit

Enable internet permissoin.

```t
<uses-permission android:name="android.permission.INTERNET" />
```

Update Dependency

```t
dependencies {
    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
}
```

## GET

### All

1. **Define API endpoints** Define the endpoints in `java/com.example.project_name/data/ApiService.java` file.
   ```java
   public interface ApiService {
       @GET("posts")
       Call<List<PostRequest>> getAllPosts();
   }
   ```
2. **Define data model** Define the data models in `java/com.example.project_name/models/PostRequest.java` file.

   ```java
   public class PostRequest {
       private String title;
       private String body;

   }
   // Getters and Setters Method
   ```

3. **Make the call** Call the API asynchronously and handle the response or failure.

   ```java
   Retrofit retrofit = new Retrofit.Builder()
           .baseUrl("https://jsonplaceholder.typicode.com/")
           .addConverterFactory(GsonConverterFactory.create())
           .build();

   ApiService apiService = retrofit.create(ApiService.class);

   Call<List<PostRequest>> call = apiService.getAllPosts();

   call.enqueue(new Callback<List<PostRequest>>() {
       @Override
       public void onResponse(Call<List<PostRequest>> call, Response<List<PostRequest>> response) {
           if (response.isSuccessful()) {
               List<PostRequest> posts = response.body();
               for (PostRequest post : posts) {
                   Log.d("Retrofit", "Post Title: " + post.getTitle());
               }
           } else {
               Log.e("Retrofit", "Request failed. Code: " + response.code());
           }
       }

       @Override
       public void onFailure(Call<List<PostRequest>> call, Throwable t) {
           Log.e("Retrofit", "Request failed. Error: " + t.getMessage());
       }
   });
   ```

## Single

1. **Update the endpoint**

   ```java
   @GET("posts/{id}")
   Call<PostRequest> getPost(@Path("id") int postId);
   ```

   2. **Update the call**

   ```java
   Call<PostRequest> call = apiService.getPost(1);

   call.enqueue(new Callback<PostRequest>() {
       @Override
       public void onResponse(Call<PostRequest> call, Response<PostRequest> response) {
           if (response.isSuccessful()) {
               PostRequest post = response.body();
               Log.d("Retrofit", "Post Title: " + post.getTitle());
           } else {
               Log.e("Retrofit", "Request failed. Code: " + response.code());
           }
       }

       @Override
       public void onFailure(Call<PostRequest> call, Throwable t) {
           Log.e("Retrofit", "Request failed. Error: " + t.getMessage());
       }
   });
   ```

## POST

1. **Update the endpoint**
   ```java
   @POST("posts")
   Call<PostRequest> createPost(@Body PostRequest post);
   ```
2. **Set Constructor in data models**
   ```java
   public PostRequest(int userId, String title, String body) {
       this.title = title;
       this.body = body;
   }
   ```
3. **Send the data**
   ```java
   PostRequest newPost = new PostRequest("Retrofit POST Request", "This is a POST request example.");
   Call<PostRequest> call = apiService.createPost(newPost);
   ```

# Google Map

1. Enable the Maps SDK for Android
   - Navigate to **APIs & Services > Library**.
   - Search for **Maps SDK for Android** and enable it.
2. Generate an API Key:
   - Navigate to **APIs & Services > Credentials**.
   - Click **Create Credentials > API Key**.
3. Add Dependency
   ```
   implementation 'com.google.android.gms:play-services-maps:18.1.0'
   ```
4. Add Permissions inside `manifest`
   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
   <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
   ```
5. Add Google Maps API Key inside `application`
   ```xml
   <meta-data
       android:name="com.google.android.geo.API_KEY"
       android:value="YOUR_API_KEY_HERE" />
   ```
6. Add a Map Fragment
   ```xml
   <fragment
   android:id="@+id/map"
   android:name="com.google.android.gms.maps.SupportMapFragment"
   android:layout_width="match_parent"
   android:layout_height="match_parent" />
   ```
7. Initialize the Map

   ```java
   private GoogleMap mMap;
   private Marker selectedMarker;

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       ...
       // Obtain the SupportMapFragment and get notified when the map is ready to use.
       SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.map);
       if (mapFragment != null) {
           mapFragment.getMapAsync(this);
       }
   }

   @Override
   public void onMapReady(GoogleMap googleMap) {
       mMap = googleMap;

       // Set initial location (e.g., Sydney, Australia)
       LatLng initialLocation = new LatLng(-34, 151);
       mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(initialLocation, 10));

       // Set a listener for map clicks
       mMap.setOnMapClickListener(latLng -> {
           // Add a marker at the clicked location
           if (selectedMarker != null) {
               selectedMarker.remove(); // Remove previous marker
           }
           selectedMarker = mMap.addMarker(new MarkerOptions()
                   .position(latLng)
                   .title("Selected Location"));

           // Display the coordinates in the TextView and a Toast
           String coordinates = "Lat: " + latLng.latitude + ", Lng: " + latLng.longitude;
           coordinatesTextView.setText(coordinates);
           Toast.makeText(MainActivity.this, coordinates, Toast.LENGTH_SHORT).show();
       });
   }
   ```

## Overlay

Overlays are additional graphics (such as images or shapes) displayed over the map, and the two main options for overlays are:

1. **Ground Overlays**: Used to display an image or bitmap over a specific area on the map.
2. **Tile Overlays**: Used to provide custom tiles for specific map areas.

### Ground Overlay

Ground overlays are used to display a static image over a specified latitude/longitude rectangle on the map.

```java
private GroundOverlay currentOverlay;
...
public void onMapReady(GoogleMap googleMap) {
    ...
    mMap.setOnMapClickListener(latLng -> {
        if (currentOverlay != null) {
            currentOverlay.remove();
        }

        GroundOverlayOptions groundOverlayOptions = new GroundOverlayOptions()
            .image(BitmapDescriptorFactory.fromResource(R.drawable.bmw))
            .position(latLng, 8600f, 6500f); // Specify width and height in meters

        currentOverlay = mMap.addGroundOverlay(groundOverlayOptions);
    })
    ...
}
```

### Tile Overlay

Tile overlays allow you to use custom tiles (e.g., generated tiles from a server or local assets) and overlay them on the map.

1. Add the logic for creating custom tiles:

```java
import com.google.android.gms.maps.model.Tile;
import com.google.android.gms.maps.model.TileOverlayOptions;
import com.google.android.gms.maps.model.UrlTileProvider;

import java.net.MalformedURLException;
import java.net.URL;

public class CustomTileProvider extends UrlTileProvider {

    private static final String TILE_URL = "https://your-tile-server.com/tiles/%d/%d/%d.png";

    public CustomTileProvider() {
        super(256, 256); // Tile size
    }

    @Override
    public URL getTileUrl(int x, int y, int zoom) {
        try {
            return new URL(String.format(TILE_URL, zoom, x, y));
        } catch (MalformedURLException e) {
            e.printStackTrace();
            return null;
        }
    }
}
```

2. **Add the tile overlay to your map**

```java
TileOverlayOptions tileOverlayOptions = new TileOverlayOptions()
    .tileProvider(new CustomTileProvider());

    mMap.addTileOverlay(tileOverlayOptions);
```

**Polygon Overlay:**

```java
PolygonOptions polygonOptions = new PolygonOptions()
    .add( new LatLng(latLng.latitude + 0.01, latLng.longitude + 0.01), // Top-right
        new LatLng(latLng.latitude + 0.01, latLng.longitude - 0.01), // Top-left
        new LatLng(latLng.latitude - 0.01, latLng.longitude - 0.01), // Bottom-left
        new LatLng(latLng.latitude - 0.01, latLng.longitude + 0.01)  // Bottom-right
    )
    .strokeColor(Color.RED)
    .fillColor(Color.argb(50, 150, 50, 50));
mMap.addPolygon(polygonOptions);
```

**Circle Overlay:**

```java
private Circle currentCircle;
...
@Override
public void onMapReady(GoogleMap googleMap) {
    mMap.setOnMapClickListener(latLng -> {
        if (currentCircle != null) {
            currentCircle.remove();
        }

        CircleOptions circleOptions = new CircleOptions()
        .center(latLng) // Set the center of the circle
        .radius(500)    // Set the radius in meters
        .strokeWidth(5) // Set the stroke width
        .strokeColor(0xFF0000FF) // Stroke color (ARGB, semi-transparent blue)
        .fillColor(0x550000FF); // Fill color (ARGB, semi-transparent blue)

        currentCircle = mMap.addCircle(circleOptions);

    })
}
```

## Geocoder

It converts geographic coordinates (latitude and longitude) into a human-readable address (known as reverse geocoding) and vice versa (known as forward geocoding). It uses the device’s network or GPS for location data.

### Reverse Geocoding

Reverse geocoding converts a geographic location (latitude and longitude) into a human-readable address.

```java
public String reverse_geocoding(double latitude, double longitude){
    Geocoder geocoder = new Geocoder(this, Locale.getDefault());
    try {
        // Get address list
        List<Address> addresses = geocoder.getFromLocation(latitude, longitude, 1);

        if (addresses != null && !addresses.isEmpty()) {
            Address address = addresses.get(0);

            // Get address details
            String fullAddress = address.getAddressLine(0); // Full address
            String city = address.getLocality();           // City
            String state = address.getAdminArea();         // State
            String country = address.getCountryName();     // Country
            String postalCode = address.getPostalCode();   // Postal code

            // Display the address
            return "Address: " + fullAddress +
                    "\nCity: " + city +
                    "\nState: " + state +
                    "\nCountry: " + country +
                    "\nPostal Code: " + postalCode ;
        } else {
            return "No address found for this location.";
        }
    } catch (IOException e) {
        e.printStackTrace();
        return "Unable to get address. Check your internet connection.";
    }
}
```

### Forward Geocoding

Forward geocoding converts an address or location name into geographic coordinates.

```java
public String forward_geocoding(String locationName){
    Geocoder geocoder = new Geocoder(this, Locale.getDefault());
    try {
        // Get coordinates list
        List<Address> addresses = geocoder.getFromLocationName(locationName, 1);

        if (addresses != null && !addresses.isEmpty()) {
            Address address = addresses.get(0);

            // Get latitude and longitude
            double latitude = address.getLatitude();
            double longitude = address.getLongitude();

            // Display the coordinates
            return "Address: " + locationName +
                    "\nLatitude: " + latitude +
                    "\nLongitude: " + longitude;
        } else {
            return "No coordinates found for this address.";
        }
    } catch (IOException e) {
        e.printStackTrace();
        return "Unable to get coordinates. Check your internet connection.";
    }
}
```

# File Structure

```
app
├─ build
├─ libs
├─ src
│   ├─ main
│   │   ├─ java
│   │   │   └─ com/example/myapplication
│   │   │
│   │   ├─ res
│   │   │   ├─ layout - store XML layout files that define the user interface of your activities and fragments.
│   │   │   │
│   │   │   ├─ drawable - store drawable resources such as PNG files, vector graphics, and XML shapes.
│   │   │   │
│   │   │   ├─ values - store XML files that define values like strings, colors, and dimensions. Common files include strings.xml, colors.xml, and dimens.xml.
│   │   │   │
│   │   │   ├─ mipmap - store resources for application icons, typically in different resolutions.
│   │   │   │
│   │   │   └─ menu - store XML files that define menus for activities or fragments.
│   │   │
│   │   │
│   │   └─ manifests
│   │       └─ AndroidManifest.xml - It describes essential information about your app, including the package name, components (activities, services, broadcast receivers, content providers), permissions, and other application-level configurations.
│   ├─ androidTest
│   │   └─  java
│   │       └─ com/example/myapplication
│   │           └─ ExampleInstrumentedTest.java
│   └─ test
│      └─ java
│          └─ com/example/myapplication
│
└─ build.gradle

```

### TableLayout

A type of `ViewGroup` that arranges it's child in grid format. It organizes views into rows and columns, and allows for complex layouts where alignment and spacing are important.

It consists of `TableRow` objects, each representing a row in the table.

- `android:stretchColumns`
- `android:shrinkColumns`
- `android:collapseColumns`
- `android:layout_span`
- `android:layout_column`

### FrameLayout

It is designed to block out an area on the screen to display a single item. Generally, It is used to hold a single child view, but it can also be used to overlay multiple child views, stacking them on top of each other. It display view layer by layer and one layer at a time.

- `android:foreground`
- `android:foregroundGravity`
- `android:measureAllChildren`

### Alert

```
        AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
        builder.setTitle("Alert Dialog Title")
                .setMessage("This is the message of the alert dialog.")
                .setIcon(android.R.drawable.ic_dialog_alert)
                .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        // Action for 'OK' Button
                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        // Action for 'Cancel' Button
                    }
                })
                .setNeutralButton("Later", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        // Action for 'Later' Button
                    }
                });

        // Show the AlertDialog
        AlertDialog alert = builder.create();
        alert.show();
```

- `setcancelable=false` - used to prevent a dialog from being dismissed when the user touches outside of the dialog.

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

# AndroidManifest.xml

## Tags

- `<manifest>` - root element. It contains information about the application package and its components, as well as any permissions the application needs. Attributes are `package`, `versionCode`, `versionName`.
- `<application>` - container for application components such as activities, services, broadcast receivers, and content providers. It also contains various settings, such as application-level resources and metadata.
- `<activity>` - declares an activity, which is a single screen in an application. Each activity must be declared in the manifest file with certain attributes that define its behavior.
- `<intent-filter>` - used within `<activity>`, `<service>`, and `<receiver>` to specify the types of intents that the component can respond to. It contains one or more `<action>`, `<category>`, and `<data>` elements.
  - `<action>`: Declares the action an intent filter can handle.
    - `android.intent.action.MAIN`: The main entry point for an application. Typically used with the launcher activity.
    - `android.intent.action.VIEW`: Display data to the user.
    - `android.intent.action.EDIT`: Allow the user to edit data.
    - `android.intent.action.SEND`: Send data to another activity.
    - `android.intent.action.PICK`: Select an item from a list of items.
    - `android.intent.action.DELETE`: Delete data.
  - `<category>`: Declares the category an intent filter can handle.
    - `android.intent.category.DEFAULT`: The default category for activities. Should be included in all intent filters that are meant to respond to implicit intents.
    - `android.intent.category.LAUNCHER`: Indicates that the activity can be the initial activity of a task and should be displayed in the application launcher.
    - `android.intent.category.BROWSABLE`: Allows an activity to be started by a web browser to display data referenced by a link.
    - `android.intent.category.ALTERNATIVE`: Provides an alternative action for the user to choose.
    - `android.intent.category.SELECTED_ALTERNATIVE`: An alternative action that the user has selected.
    - `android.intent.category.TAB`: Specifies that an activity can be used as a tab.
  - `<data>`: Declares the type of data an intent filter can handle.

## Attributes

- `android:icon` - Specifies the default icon for the application
- `android:label` - Specifies the default label (name) for the application
- `android:roundIcon` - Specifies the round icon for devices that support round icons
- `android:supportsRtl` - Indicates whether the application supports right-to-left (RTL) layouts.

# ActionBar

### Accessing ActionBar

```
@Override
public boolean onOptionsItemSelected(MenuItem item) {
    switch (item.getItemId()) {
        case android.R.id.home:
            // Handle the back button click here
            onBackPressed();
            return true;
        default:
            return super.onOptionsItemSelected(item);
    }
}
@Override
public void onBackPressed() {
    // Handle the back press logic here, if needed
    super.onBackPressed();
}
```

Navigate back without `onOptionsItemSelected` through `android:parentActivityName` attribute in `activity` tag in `AndroidManifest.xml`

### Adding Actions/Icons to ActionBar

```
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item
        android:id="@+id/action_search"
        android:icon="@drawable/ic_search"
        android:title="Search"
        android:showAsAction="ifRoom" />
    <item
        android:id="@+id/action_settings"
        android:title="Settings"
        android:showAsAction="never" />
</menu>
```

### Inflate the menu in your activity

```
@Override
public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(R.menu.menu_main, menu);
    return true;
}
```
