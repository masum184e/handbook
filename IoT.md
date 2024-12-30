# Content

- [Introduction](#introduction)
- [Development Boards](#development-boards)
  - [ESP 32 Board](#esp-32-board)
    - [Chip](#processoresp-wroom32)
    - [Pin](#power-and-control-pins)
    - [Wi-Fi Module](#wi-fi-module)
- [Arduino Programming](#arduino---programming)
- [Components](#components)
  - [Breadboard](#breadboard)
  - [Buzzer](#buzzer)
  - [Ultrasonic Sonar Sensor](#ultrasonic-sonar-sensor)
  - [Infrared Sensor](#infrared-sensor)
  - [Servo Motor](#servo-motor)
  - [Potentiometer](#potentiometer)
  - [Push Button](#push-button)

# Introduction

A robot is a programmable machine that can carry out tasks autonomously or semi-autonomously. These machines are capable of perceiving their environment, processing information, and executing actions to achieve specific objectives.

## Key Components

Input, processor, output, memory, power supply are the hardware part of the robots, programming is called software.

### 1.`Input(Sensors)`

It gather real-time data from the environment to make informed decisions and take actions.

- Vision sensors (cameras, infrared)
- Proximity sensors (to detect nearby objects)
- Gyroscopes and accelerometers (for orientation and movement)
- Touch sensors (detect physical interaction)
- Microphones (for sound recognition)

### 2.`Processor(Microcontroller)`

It processes the sensor data, runs algorithms, and sends commands to actuators to execute appropriate actions. It is a cheap or specialized circuit which is used for making decision. This is handled by a control system (microcontroller, processor, or compute).

- `Microcontroller`: A compact integrated circuit designed to manage the operations of a robot. Examples include Arduino, STM32.
- `Microprocessor`: A more powerful processing unit like a Raspberry Pi or NVIDIA Jetson, used for robots that need more computing power for complex tasks like AI-based navigation or object recognition.

### 3.`Output (Actuators)`

It execute physical actions like moving, picking up objects, or even communicating with humans based on the decisions made by the control system.

- **Motors**: Electric motors that convert electrical signals into mechanical movement.
  - **DC motors** for general motion control (e.g., driving wheels).
  - **Servo motors** for precise angular control (e.g., in robotic arms).
  - **Stepper motors** for controlled, incremental movements.
- **End Effectors**: Tools at the end of robotic arms, like grippers, welders, or cutting tools, that allow the robot to interact with objects in the environment.
- **Displays/Sound Output**: Some robots also output information to screens, lights, or speakers to communicate with humans.

### 4.`Memory`

It enables the robot to remember and store critical data, ensuring the robot can function efficiently by recalling programs and sensor information when needed.

### 5.`Power Supply`

Robots need energy to operate, which can come from batteries, solar power, electrical grids, or other sources.

### 6.`Programming(Software)`

It defines the logic of the robot’s behavior, allowing it to understand sensor data, process it, and perform actions.

# Development Boards

A development board in robotics is a small, single-board computer or microcontroller board used to control and interact with sensors, actuators, and other electronic components in robotic systems. These boards are essential for prototyping and development in robotics, as they allow for programming, testing, and integration of various robotic functions. They come with input/output (I/O) pins, communication interfaces, and often support additional modules, making them versatile and widely used in both educational and professional robotics projects.

## Key Features of Development Boards for Robotics

1. **Microcontroller or Processor**: The board's "brain" that executes code and processes data. Microcontrollers (like the ATmega on Arduino boards) and microprocessors (like the ARM Cortex on Raspberry Pi boards) are common choices.
2. **I/O Pins**: These pins enable the board to interact with external components such as sensors, motors, LEDs, and displays. Pins can be digital (for on/off signals) or analog (for variable signals).
3. **Power Supply Options**: Development boards are often designed to work with various power sources (battery, USB, or adapter) to meet different project needs.
4. **Communication Interfaces**: Interfaces like I2C, SPI, UART, Bluetooth, and Wi-Fi allow communication between the board and other components, as well as with external devices like computers or smartphones.
5. **Programming Interface**: Most boards have a USB or other port for programming and debugging. They are compatible with IDEs (Integrated Development Environments) that allow users to write and upload code.

## Examples of Development Boards

### 1. **Arduino Uno**

- **Description**: The Arduino Uno is one of the most popular microcontroller-based development boards, especially suited for beginners. It uses the ATmega328P microcontroller, which is an 8-bit microcontroller with 32 KB of flash memory for storing code.
- **Key Features**:
  - 14 digital I/O pins and 6 analog inputs.
  - Operates at 5V, making it compatible with many sensors and actuators.
  - Simple programming via the Arduino IDE.
- **Example Project**: **Line-Following Robot**
  - **Explanation**: In a line-following robot project, the Arduino Uno controls the motors and processes signals from infrared (IR) sensors. The IR sensors detect the contrast between a black line and a white surface. Based on this data, the Arduino adjusts motor speed and direction to keep the robot on track.

### 2. **ESP32**

- **Description**: The ESP32 is a microcontroller board with built-in Wi-Fi and Bluetooth capabilities. It’s well-suited for IoT (Internet of Things) applications in robotics where remote control or data logging is required.
- **Key Features**:
  - Dual-core processor and multiple GPIO pins.
  - Supports low-power operation, making it suitable for battery-powered projects.
  - Built-in Wi-Fi and Bluetooth for easy network connectivity.
- **Example Project**: **Remote-Controlled Car**
  - **Explanation**: With the ESP32, you can create a small car that can be controlled remotely over Wi-Fi. By setting up a server on the ESP32, commands can be sent from a smartphone or computer to control the car’s movement. This can be extended to include additional functionalities like sending sensor data back to the user.

### 3. **Raspberry Pi 4**

- **Description**: The Raspberry Pi 4 is a small, powerful single-board computer with a microprocessor, making it capable of running an operating system like Linux. It’s ideal for complex robotics projects that require high computing power.
- **Key Features**:
  - Multiple USB ports, GPIO pins, HDMI output, and camera interface.
  - Capable of handling more complex tasks like image processing, making it suitable for machine learning applications.
  - Can connect to the internet via Ethernet or Wi-Fi.
- **Example Project**: **Obstacle-Avoiding Robot with Vision**
  - **Explanation**: The Raspberry Pi 4 can be used to control a robot that avoids obstacles using camera input. By processing images from a camera feed, the Raspberry Pi can use machine learning algorithms (such as object detection) to identify obstacles. It can then adjust motor controls to navigate around obstacles.

## Choosing the Right Development Board

The choice of board depends on the project requirements:

- **Simple projects** (like controlling LEDs or making simple sensors interact) are well-suited to boards like the **Arduino Uno**.
- **IoT-based robotics projects** where **connectivity** is essential benefit from using boards like the **ESP32**.
- **Complex projects** requiring higher computation power, such as **image processing or machine learning tasks**, are more appropriate for the **Raspberry Pi**.

## Microprocessor vs Microcontroller

| **Feature**                   | **Microprocessor**                                                               | **Microcontroller**                                                            |
| ----------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Architecture**              | CPU only; requires external memory, I/O, and peripherals                         | Integrated CPU, memory (RAM, ROM, Flash), I/O peripherals                      |
| **Primary Function**          | General-purpose processing; suited for complex computations                      | Dedicated control-oriented tasks; designed for specific embedded applications  |
| **Components**                | Lacks built-in memory and I/O; needs external components                         | Built-in memory (RAM/ROM), timers, ADC, and GPIO pins                          |
| **Processing Power**          | High processing power; capable of handling complex tasks                         | Moderate processing power; optimized for real-time control                     |
| **Power Consumption**         | Higher power consumption due to complex operations                               | Low power consumption, suitable for battery-operated devices                   |
| **Cost**                      | Generally more expensive due to higher complexity                                | Lower cost, as it integrates all components on a single chip                   |
| **Ease of Development**       | Requires additional components and a more complex setup                          | Easier to develop with, often simpler setup and programming                    |
| **Performance**               | High-performance, suitable for multitasking and complex algorithms               | Moderate performance, ideal for handling simple, dedicated tasks               |
| **Applications in Robotics**  | Used in advanced robotics for tasks like image processing, AI, and path planning | Used for motor control, sensor reading, and actuator control in simpler robots |
| **Examples**                  | Intel i5, AMD Ryzen, ARM Cortex-A series                                         | Arduino (ATmega328), STM32, PIC series, ARM Cortex-M series                    |
| **Programming Complexity**    | More complex; often requires operating systems (e.g., Linux)                     | Simple, often programmed using bare-metal or RTOS                              |
| **External Support Required** | Requires additional chips for I/O, memory, etc.                                  | Self-contained; minimal external components needed                             |
| **Size and Form Factor**      | Larger size, typically in SoC or computer boards                                 | Small, compact size; available in various form factors                         |
| **Examples in Robotics**      | NVIDIA Jetson for autonomous robots, Raspberry Pi for AI tasks                   | Arduino for simple robots, ARM Cortex-M for robotic arms                       |
| **Memory Architecture**       | Uses separate external RAM and ROM                                               | On-chip memory (usually a mix of RAM, ROM, and Flash)                          |
| **Typical Clock Speed**       | Higher clock speeds, often >1 GHz                                                | Lower clock speeds, usually in the range of MHz                                |
| **Data Processing**           | Suitable for processing large datasets, running AI models                        | Limited to smaller, control-oriented data processing                           |

# ESP 32 Board

## Processor(ESP-WROOM32)

- Dual-core Xtensa LX6 micro-processor running up to 240 MHz which works independently.
- Integrated Wi-Fi(802.11b/g/n HT40) and Bluetooth(2.4GHZ)
- 520 KB SRAM and 448 KB ROM
- It includes bluetooth classic and bluetooth low energey protocol
- The external part of ESP-WROOM32 board is called antena
- Typically uses SPI flash with sizes ranging from 4 MB to 16 MB which is why it can load JSON/XML data and IoT services.

## LED

### Power LED

It indicates that the board is powered and operational. It is connected to the power supply circuit of the board. The LED is directly connected to the 3.3V or 5V power supply line, depending on the voltage regulator.

### Status LED

It provides visual feedback for debugging or signaling application states. It can be controlled programmatically using the microcontroller's GPIO pins. It is commonly connected to GPIO2 pin.

**Used to indicate events such as:**

- Boot process completion.
- Wi-Fi connection status.
- Error codes in the program

## Micro USB Port

It is used for both powering the board and data communication between the board and a host computer.

It supplies 5V to the board from a USB power source and the onboard 3.3V LDO Voltage Regulator steps this down to 3.3V to power the ESP32 chip and peripherals.

It is used to upload to the microcontroller via the onboard USB-to-Serial converter.

## LDO Voltage Regulator

An LDO (Low Dropout) regulator is a type of linear voltage regulator that operates efficiently with a minimal voltage difference (dropout voltage) between its input and output.

It converts a higher input voltage (e.g., 5V from USB or battery) to a lower, stable output voltage (e.g., 3.3V required by the ESP32).

Keep the micro usb port at left side the rectangular black box from upper side wide from left to right is called LDO Voltage Regulator.

## USB to TTL Converter (CP2102)

It facilitates communication between the ESP32 microcontroller and a host computer. It converts USB signals (used by computers) to TTL (Transistor-Transistor Logic) level signals (used by microcontrollers like the ESP32). This chip is especially useful for programming, serial communication, and debugging.

Keep the micro usb port at left side the squared black box from lower side is the CP2102 chip.

## Power and Control Pins

| **Board Label** | **ESP32 Function** | **Description**                                           |
| --------------- | ------------------ | --------------------------------------------------------- |
| **EN**          | EN                 | Enable pin. Active HIGH. Used to reset the chip.          |
| **BOOT**        | GPIO0              | Boot mode selection pin. Pull LOW to enter flashing mode. |

### Boot

It is used to put the ESP32 into bootloader (flash) mode. This mode allows you to upload new firmware to the microcontroller.

#### How to use

**To Upload Code (Manual Mode):**

- Press and hold the BOOT button.
- While holding it, click the Upload button in your IDE.
- Release the BOOT button once the upload starts.

#### Flash Mode

Flash mode is a special operational mode of the ESP32 microcontroller that allows it to receive firmware or code updates via a connected computer. During flash mode, the ESP32 enters its bootloader, enabling communication with tools like the Arduino IDE

The BOOT button on an ESP32 development board plays a key role in manually initiating flash mode when the auto-reset circuit is not present or fails.

#### Controlling

```cpp
#define BOOT_BUTTON_PIN 0  // GPIO 0 is the BOOT button

void setup() {
  pinMode(BOOT_BUTTON_PIN, INPUT_PULLUP); // Configure GPIO 0 with a pull-up resistor
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(BOOT_BUTTON_PIN) == LOW) {
    Serial.println("BOOT button pressed!");
  }
}
```

### EN

The EN (Enable) button is connected to the reset pin (EN) of the ESP32. It acts as a hardware reset for the ESP32 chip.

#### How to use

1. Simply press the EN button to reset the ESP32.
2. When the EN button is pressed:

- The ESP32 is powered down momentarily.
- Upon release, the ESP32 reboots and `executes the code from the beginning`.

## Pin Labels and GPIO Mapping

| **Board Label** | **ESP32 GPIO Number** | **Description**                                |
| --------------- | --------------------- | ---------------------------------------------- |
| **3U3**         | ---                   | 3.3V power output (regulated onboard).         |
| **GND**         | ---                   | Ground pin. Common reference for the circuit.  |
| **D15**         | GPIO15                | General-purpose I/O, ADC2 channel 3, touch T3. |
| **D2**          | GPIO2                 | General-purpose I/O, ADC2 channel 2, touch T2. |
| **D4**          | GPIO4                 | General-purpose I/O, ADC2 channel 0, touch T0. |
| **RX2**         | GPIO16                | UART2 RX pin.                                  |
| **TX2**         | GPIO17                | UART2 TX pin.                                  |
| **D5**          | GPIO5                 | General-purpose I/O, HSPI_CS.                  |
| **D18**         | GPIO18                | General-purpose I/O, SPI_CLK, PWM.             |
| **D19**         | GPIO19                | General-purpose I/O, SPI_MISO, PWM.            |
| **D21**         | GPIO21                | I2C SDA, general-purpose I/O.                  |
| **RX0**         | GPIO3                 | UART0 RX pin (used for programming).           |
| **TX0**         | GPIO1                 | UART0 TX pin (used for programming).           |
| **D22**         | GPIO22                | I2C SCL, general-purpose I/O.                  |
| **D23**         | GPIO23                | SPI_MOSI, general-purpose I/O.                 |

| **Board Label** | **ESP32 GPIO Number** | **Description**                                |
| --------------- | --------------------- | ---------------------------------------------- |
| **VIN**         | ---                   | Input power pin (typically 5V).                |
| **GND**         | ---                   | Ground pin. Common reference for the circuit.  |
| **D13**         | GPIO13                | General-purpose I/O, ADC2 channel 4, touch T4. |
| **D12**         | GPIO12                | General-purpose I/O, ADC2 channel 5, touch T5. |
| **D14**         | GPIO14                | General-purpose I/O, ADC2 channel 6, touch T6. |
| **D27**         | GPIO27                | General-purpose I/O, ADC2 channel 7, touch T7. |
| **D26**         | GPIO26                | General-purpose I/O, DAC2, ADC2 channel 9.     |
| **D25**         | GPIO25                | General-purpose I/O, DAC1, ADC2 channel 8.     |
| **D33**         | GPIO33                | General-purpose I/O, ADC1 channel 5, touch T8. |
| **D32**         | GPIO32                | General-purpose I/O, ADC1 channel 4, touch T9. |
| **D35**         | GPIO35                | Input-only GPIO, ADC1 channel 7.               |
| **D34**         | GPIO34                | Input-only GPIO, ADC1 channel 6.               |
| **UN**          | GPIO39 (VN)           | Input-only GPIO, ADC1 channel 3.               |
| **UP**          | GPIO36 (VP)           | Input-only GPIO, ADC1 channel 0.               |
| **EN**          | EN                    | Chip enable pin. Active HIGH.                  |

## Pin Concpets

### ADC

- ADC (Analog-to-Digital Converter) is a module that converts an analog voltage signal into a digital value.
- The ESP32 has two ADC peripherals: ADC1 and ADC2.

| **Feature**           | **ADC1**                                          | **ADC2**                                             |
| --------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| **Channel Count**     | 8 channels (GPIO32–GPIO39)                        | 10 channels (GPIO0, GPIO2, GPIO4, GPIO12–27)         |
| **Independent Use**   | Fully independent                                 | Shared with Wi-Fi; cannot be used with Wi-Fi active. |
| **Power Consumption** | Low                                               | Higher when active.                                  |
| **Best Use Cases**    | High-priority ADC tasks (e.g., critical sensors). | Auxiliary or backup ADC tasks.                       |

Each channel corresponds to a specific GPIO pin.

ADC pins aren't meant to handle both digital and analog signal simultaneously.

**ADC1 Channels and GPIO Pins:**

| **ADC1 Channel** | **GPIO Pin** | **Notes**                    |
| ---------------- | ------------ | ---------------------------- |
| ADC1_CH4         | GPIO32       | General-purpose GPIO/Analog. |
| ADC1_CH5         | GPIO33       | General-purpose GPIO/Analog. |
| ADC1_CH6         | GPIO34       | Input-only, analog/digital.  |
| ADC1_CH7         | GPIO35       | Input-only, analog/digital.  |

**ADC2 Channels and GPIO Pins:**

| **ADC2 Channel** | **GPIO Pin** | **Notes**                    |
| ---------------- | ------------ | ---------------------------- |
| ADC2_CH0         | GPIO4        | General-purpose GPIO/Analog. |
| ADC2_CH2         | GPIO2        | General-purpose GPIO/Analog. |
| ADC2_CH5         | GPIO12       | General-purpose GPIO/Analog. |
| ADC2_CH4         | GPIO13       | General-purpose GPIO/Analog. |
| ADC2_CH6         | GPIO14       | General-purpose GPIO/Analog. |
| ADC2_CH3         | GPIO15       | General-purpose GPIO/Analog. |
| ADC2_CH8         | GPIO25       | General-purpose GPIO/Analog. |
| ADC2_CH9         | GPIO26       | General-purpose GPIO/Analog. |
| ADC2_CH7         | GPIO27       | General-purpose GPIO/Analog. |

### PWM

PWM (Pulse Width Modulation) is a technique used to create a square wave signal where the duty cycle (the ratio of the time the signal is HIGH to the total time of one cycle) is modulated to convey information or control power to devices.

#### PWM for Servo Control

A servo motor expects a PWM signal with a specific frequency and a range of pulse widths. The pulse width determines the angle of rotation of the servo. Typically, a servo operates at 50 Hz (20 ms period), with the pulse width ranging between:

- 1 ms (0°): Servo rotates to the minimum angle (e.g., 0°).
- 1.5 ms (90°): Servo moves to the midpoint angle (e.g., 90°).
- 2 ms (180°): Servo rotates to the maximum angle (e.g., 180°).

### Digital Signal

A digital signal is a discrete signal that represents data using binary numbers (0s and 1s). It switches between fixed levels of high and low.

**Characteristics:**

1. **Discrete:** Digital signals have a limited number of values, typically two (HIGH or LOW).
2. **Waveform:** They are represented as square waves.
3. **Binary Representation:** Data is encoded as 0s and 1s.
4. **Noise Resistance:** Digital signals are less prone to noise and degradation compared to analog signals.

**Examples:**

- Data transmission over the internet
- Output from a digital temperature sensor like DS18B20
- Signals in microcontrollers and digital electronics
- Music files (e.g., MP3 format)

#### Digital Device

1. Push-button
2. Motion Sensor
3. Ultrasonic Sensor
4. Infrared Sensor
5. Hall Effect Sensor
6. Touch Sensor
7. Color Sensor
8. Relay Modules
9. Stepper Motor Drivers

### Analog Signal

An analog signal is a continuous signal that represents physical measurements. These signals vary over time and can take on any value within a range.

**Characteristics:**

1. **Continuous:** Analog signals have infinite possible values within a range.
2. **Waveform:** They are generally represented as smooth sine waves.
3. **Amplitude:** The signal's strength changes continuously over time.
4. **Frequency:** It indicates how fast the signal oscillates.

**Examples:**

- Sound waves (e.g., human voice)
- Voltage from sensors like LDR or thermistors
- Video signals from traditional CRT TVs
- Temperature or pressure readings

#### Analog Device

1. Potentiometers
2. Temperature Sensors
3. Light Sensors
4. Sound Sensors
5. Gas Sensors
6. Pressure Sensors
7. Force Sensors
8. Moisture Sensors

## Description

### 1. VIN

Input pin to supply power to the ESP32. Typically connected to a 5V source. Connect VIN with positive(+) voltage of the battery.

### 2. GND

Common reference point for all circuits. Always connect to the ground of external devices. Connect GND with negative(-) voltage of any external devices including battery and sensors.

### 3. D13

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 4. D12

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 5. D14

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 6. D27

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 7. D26

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 8. D25

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 9. D33

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 10. D32

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 11. D35

- Only function as an input pin (it does not support output).
- Supports both analog and digital input and can read logic levels (HIGH or LOW). It function as an analog input((0-3.3V)), as it's connected to the ADC1 analog-to-digital converter.

- `digitalRead(35)` read digital input
- `analogRead(35)` read digital input

### 12. D34

- Only function as an input pin (it does not support output).
- Supports both analog and digital input and can read logic levels (HIGH or LOW). It function as an analog input((0-3.3V)), as it's connected to the ADC1 analog-to-digital converter.

- `digitalRead(34)` read digital input
- `analogRead(34)` read digital input

### 13. UN

### 14. UP

### 15. EN

## Description

### 1.3U3

Provides a 3.3V output from the onboard voltage regulator. Can be used to power low-power sensors or modules. It provides positive(+) voltage.

### 2. GND

Common reference point for all circuits. Always connect to the ground of external devices. Connect GND with negative(-) voltage of any external devices including battery and sensors.

### 3. D15

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 4. D2

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 5. D4

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 6. RX2

### 7. TX2

### 8. D5

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 9. D18

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 10. D19

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 11. D21

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 12. RX0

### 13. TX0

### 14. D22

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

### 15. D23

- Digital Input and Output(LED)
- PWM Output(Servo Motor)

## Wi-Fi Module

The ESP32 can operate in three modes:

1. **Station Mode (STA):** Connects to a Wi-Fi network as a client.
2. **Access Point Mode (AP):** Creates its own Wi-Fi network.
3. **AP+STA Mode:** Combines both modes.

### STA

In Station Mode (STA), the ESP32 connects to an existing Wi-Fi network as a client, similar to how your smartphone or laptop connects to a router. This mode is commonly used to:

- Fetch or send data to the internet.
- Communicate with local devices on the same network.
- Interact with cloud services (e.g., Firebase, AWS, etc.).

When operating in STA mode:

1. ESP32 joins a Wi-Fi network using the SSID (Wi-Fi name) and password.
2. The router assigns an IP address to ESP32, enabling communication.

#### Steps to Use STA Mode

1. Initialize the Wi-Fi library.
2. Provide network credentials.
3. Attempt to connect to the Wi-Fi.
4. Monitor connection status.
5. Once connected, retrieve the assigned IP address and confirm successful connection

#### Wi-Fi Connection

```cpp
#include <WiFi.h> // Include Wi-Fi library for ESP32
#include <HTTPClient.h>

// Replace with your Wi-Fi network credentials
const char* ssid = "**********";        // Wi-Fi name
const char* password = "**********"; // Wi-Fi password

void setup() {
  Serial.begin(115200); // Initialize serial monitor for debugging

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("\nConnected to Wi-Fi!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP()); // Print ESP32's IP address

  // Fetch data from server
  fetchData();
}

void loop() {
  // Re-fetch data every 10 seconds
  fetchData();
  delay(10000);
}

void fetchData() {
  if (WiFi.status() == WL_CONNECTED) { // Ensure the Wi-Fi is still connected
    HTTPClient http;

    // Specify the server URL
    String serverUrl = "http://jsonplaceholder.typicode.com/posts/1"; // Example API
    http.begin(serverUrl); // Initialize HTTP connection

    int httpResponseCode = http.GET(); // Send HTTP GET request

    if (httpResponseCode > 0) { // If the request is successful
      Serial.println("HTTP GET Successful!");
      Serial.print("HTTP Response Code: ");
      Serial.println(httpResponseCode);

      // Get the response payload
      String payload = http.getString();
      Serial.println("Response:");
      Serial.println(payload); // Print the fetched data
    } else {
      Serial.print("Error in HTTP request. Code: ");
      Serial.println(httpResponseCode);
    }
    http.end(); // End the HTTP connection
  } else {
    Serial.println("Wi-Fi not connected. Unable to fetch data.");
  }
}
```

### AP
In Access Point Mode (AP), the ESP32 creates its own Wi-Fi network. Devices such as smartphones or laptops can connect to this network to communicate directly with the ESP32. This is especially useful when there’s no existing Wi-Fi network available, or if you want to create a standalone system.

### How It Works
1. **ESP32 as an AP:**
  -The ESP32 broadcasts its SSID (Wi-Fi name) and allows clients to connect.
  - It assigns IP addresses to clients using a built-in DHCP server.
2. **Communication:**
  - The ESP32 can host a web server or exchange data directly with the connected devices.
3. **Benefits:**
  - Does not require an external router.
  - Allows localized control and communication.

#### Steps to Set Up ESP32 in AP Mode
1. Initialize Wi-Fi in AP mode using `WiFi.softAP()`.
2. Define the SSID and password for the ESP32 network.
3. Optionally, set the IP address using `WiFi.softAPConfig()` (default IP is `192.168.4.1`).
4. Create a web server to interact with clients.

#### Configuring Wi-Fi Network
```cpp
#include <WiFi.h> // Use <ESP8266WiFi.h> if using ESP8266

// Replace with your desired network name (SSID) and password
const char* ssid = "MyESP32AP";
const char* password = "securepassword";

// Set up a basic web server on port 80
WiFiServer server(80);

void setup() {
  // Start the serial monitor for debugging
  Serial.begin(115200);
  Serial.println();

  // Configure ESP32/ESP8266 as an Access Point
  Serial.println("Setting up Access Point...");
  WiFi.softAP(ssid, password);

  // Print the IP address of the AP
  IPAddress IP = WiFi.softAPIP();
  Serial.print("Access Point IP: ");
  Serial.println(IP);

  // Start the server
  server.begin();
  Serial.println("Server started");
}

void loop() {
  // Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    Serial.print("Error");
    return;
  }

  Serial.println("New Client Connected");

  // Wait until the client sends data
  while (!client.available()) {
    delay(1);
  }

  // Read the request
  String request = client.readStringUntil('\r');
  Serial.println("Request:");
  Serial.println(request);

  // Respond to the client
  String htmlResponse = R"rawliteral(
    <!DOCTYPE html>
    <html>
      <head>
        <title>ESP32 Access Point</title>
      </head>
      <body>
        <h1>Welcome to ESP32 Access Point!</h1>
        <p>You are connected to the ESP32 network.</p>
      </body>
    </html>
  )rawliteral";

  // Send the response headers and content
  client.println("HTTP/1.1 200 OK");
  client.println("Content-type:text/html");
  client.println("Connection: close");
  client.println();
  client.print(htmlResponse);

  // Close the connection
  client.stop();
  Serial.println("Client disconnected");
}
```

The ESP32/ESP8266 assigns itself an IP address (e.g., `192.168.4.1`) for clients to connect.

#### Controlling LED
```cpp
#include <WiFi.h> // Include Wi-Fi library

const char* ssid = "ESP32_AccessPoint";  // Set Wi-Fi SSID
const char* password = "12345678";       // Set Wi-Fi password (min 8 characters)

const int ledPin = 2; // GPIO pin for the LED

WiFiServer server(80); // Create a web server on port 80

void setup() {
  Serial.begin(115200); // Initialize serial communication
  pinMode(ledPin, OUTPUT); // Set LED pin as output
  digitalWrite(ledPin, LOW); // Turn LED off initially

  // Start the ESP32 as an Access Point
  WiFi.softAP(ssid, password);
  Serial.println("Access Point Started");
  Serial.print("IP Address: ");
  Serial.println(WiFi.softAPIP()); // Print the AP's IP address

  server.begin(); // Start the server
}

void loop() {
  WiFiClient client = server.available(); // Check for incoming clients

  if (client) {
    Serial.println("New Client Connected.");
    String request = "";

    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        request += c;

        // Break if end of HTTP request
        if (c == '\n' && request.endsWith("\r\n\r\n")) {
          break;
        }
      }
    }

    // Process HTTP request
    if (request.indexOf("/LED=ON") != -1) {
      digitalWrite(ledPin, HIGH); // Turn LED on
    } else if (request.indexOf("/LED=OFF") != -1) {
      digitalWrite(ledPin, LOW); // Turn LED off
    }

    // Send HTTP response
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/html");
    client.println("Connection: close");
    client.println();

    client.println("<!DOCTYPE HTML>");
    client.println("<html>");
    client.println("<head><title>ESP32 AP Mode</title></head>");
    client.println("<body>");
    client.println("<h1>ESP32 Access Point</h1>");
    client.println("<button onclick=\"location.href='/LED=ON'\">Turn ON</button>");
    client.println("<button onclick=\"location.href='/LED=OFF'\">Turn OFF</button>");
    client.println("</body></html>");

    client.stop(); // Close the connection
    Serial.println("Client Disconnected.");
  }
}
```
# Arduino - Programming

## Sketch

Every sketch (which is what Arduino programs are called) has two essential functions: setup() and loop(). These functions define the structure of the program and how it operates.

### `setup()`

The `setup()` function is called once when your Arduino board is powered on or reset. It is used to initialize variables, pin modes, libraries, and other components that your program will use.

**Syntax:**

```cpp
void setup() {
  // Initialization code here
}
```

### `loop()`

The `loop()` function is the heart of an Arduino sketch. After the setup() function runs once, the `loop()` function runs continuously in a loop, allowing your program to repeat certain actions indefinitely.

**Syntax:**

```cpp
void loop() {
  // Code that runs repeatedly
}
```

## Structure

Every Arduino sketch must contain these two functions, even if they are empty. Here's how the basic structure looks:

```cpp
void setup() {
  // Code that runs once goes here
}

void loop() {
  // Code that runs repeatedly goes here
}
```

### Example

Let's consider an example where an LED is connected to pin 13 of the Arduino, and we want it to blink on and off every second.

```cpp
// Define the pin number for the LED
const int ledPin = 13;

void setup() {
  // Initialize the digital pin as an output.
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Turn the LED on (HIGH is the voltage level)
  digitalWrite(ledPin, HIGH);
  // Wait for a second
  delay(1000);
  // Turn the LED off by making the voltage LOW
  digitalWrite(ledPin, LOW);
  // Wait for a second
  delay(1000);
}
```

## Variable Declaration & Data Type

**Common Data Types:**

- `int`
- `unsigned int`
- `long`
- `unsigned long`
- `float`
- `char`
- `boolean`
- `byte`
- `string`

**Variable Declaration Synatx:**

```
dataType variableName = initialValue;
```

**Example:**

```cpp
int sensorValue = 0;
float pi = 3.14;
char grade = 'A';
boolean isOn = true;
```

## Constant

### Predefined Constants

Arduino provides some built-in constants that have predefined values. Examples include:

- `HIGH` (1): Represents a high voltage (on).
- `LOW` (0): Represents a low voltage (off).
- `INPUT`, `OUTPUT`, and `INPUT_PULLUP`: Used for setting pin modes.

**Example:**

```cpp
pinMode(ledPin, OUTPUT);  // Set ledPin as an output
```

### `const` Keyword

Declares a variable as a constant, meaning its value cannot be changed once it’s assigned.

**Syntax:**

```
const dataType variableName = value;
```

### `#define` Preprocessor Directive

Defines a symbolic constant that is replaced by its value during the program's preprocessing step.

**Syntax:**

```
#define constantName value
```

## String

There are two main types of strings in Arduino:

- Character arrays (C-style strings).
- String objects (from the `String` class).

### Character Arrays

A character array is an array of characters terminated by a null character (`\0`). It is a C-style string.

**Declaring a Character Array:**

```cpp
char myString[] = "Hello, World!";
```

This is equivalent to:

```cpp
char myString[] = {'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'};
```

You can manipulate character arrays using functions from the C library (`string.h`), such as `strlen()`, `strcpy()`, and `strcat()`.

### String Class

**Declaring a String Object:**

```cpp
String myString = "Hello, Arduino!";
```

## Common Methods

### 1. Basic Functions

| **Function**               | **Usage**                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| `setup()`                  | Called once when the Arduino starts. Used to initialize variables, pin modes, libraries, etc. |
| `loop()`                   | Called repeatedly after `setup()`. Contains the main logic of the program.                    |
| `pinMode(pin, mode)`       | Sets the mode of a pin (e.g., INPUT, OUTPUT).                                                 |
| `digitalWrite(pin, value)` | Sets a digital pin to HIGH or LOW (ON/OFF).                                                   |
| `digitalRead(pin)`         | Reads the value from a digital pin (HIGH or LOW).                                             |
| `analogWrite(pin, value)`  | Writes an analog value (PWM) to a pin. Values range from 0 to 255.                            |
| `analogRead(pin)`          | Reads the value from an analog pin (range: 0-1023).                                           |
| `delay(ms)`                | Pauses the program for a specified number of milliseconds.                                    |
| `millis()`                 | Returns the number of milliseconds since the program started running.                         |

---

### 2. Mathematical Functions

| **Function**                                   | **Usage**                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------ |
| `min(x, y)`                                    | Returns the smaller of two numbers.                                |
| `max(x, y)`                                    | Returns the larger of two numbers.                                 |
| `abs(x)`                                       | Returns the absolute value of a number.                            |
| `pow(base, exponent)`                          | Returns the result of raising `base` to `exponent`.                |
| `sqrt(x)`                                      | Returns the square root of a number.                               |
| `map(value, fromLow, fromHigh, toLow, toHigh)` | Maps a number from one range to another.                           |
| `constrain(x, a, b)`                           | Constrains a value to lie between two limits (a and b).            |
| `random(max)`                                  | Returns a random number between 0 and the specified maximum.       |
| `random(min, max)`                             | Returns a random number between the specified minimum and maximum. |
| `randomSeed(seed)`                             | Initializes the random number generator with a seed value.         |

---

### 3. Timing Functions

| **Function**            | **Usage**                                                             |
| ----------------------- | --------------------------------------------------------------------- |
| `delay(ms)`             | Pauses the program for a specified number of milliseconds.            |
| `millis()`              | Returns the number of milliseconds since the program started running. |
| `micros()`              | Returns the number of microseconds since the program started.         |
| `delayMicroseconds(us)` | Pauses the program for a specified number of microseconds.            |

---

### 4. Serial Communication

| **Function**             | **Usage**                                                                   |
| ------------------------ | --------------------------------------------------------------------------- |
| `Serial.begin(baudrate)` | Initializes serial communication with the specified baud rate (e.g., 9600). |
| `Serial.print(data)`     | Sends data to the serial port (without a newline).                          |
| `Serial.println(data)`   | Sends data to the serial port (with a newline at the end).                  |
| `Serial.read()`          | Reads incoming data from the serial buffer.                                 |
| `Serial.available()`     | Returns the number of bytes available in the serial buffer.                 |
| `Serial.flush()`         | Waits for outgoing serial data to be transmitted.                           |
| `Serial.end()`           | Disables serial communication.                                              |

---

### 5. Analog I/O

| **Function**              | **Usage**                                            |
| ------------------------- | ---------------------------------------------------- |
| `analogRead(pin)`         | Reads the value from an analog pin (range: 0-1023).  |
| `analogWrite(pin, value)` | Writes a PWM signal to an analog pin (range: 0-255). |

---

### 6. Digital I/O

| **Function**               | **Usage**                                                 |
| -------------------------- | --------------------------------------------------------- |
| `pinMode(pin, mode)`       | Configures a digital pin to be either an INPUT or OUTPUT. |
| `digitalWrite(pin, value)` | Sets a digital pin to HIGH or LOW.                        |
| `digitalRead(pin)`         | Reads the value from a digital pin (HIGH or LOW).         |

---

### 7. Interrupt Functions

| **Function**                      | **Usage**                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------ |
| `attachInterrupt(pin, ISR, mode)` | Attaches an interrupt to a pin. The ISR is a function that runs when the interrupt occurs. |
| `detachInterrupt(pin)`            | Disables the interrupt for a specified pin.                                                |
| `noInterrupts()`                  | Disables all interrupts.                                                                   |
| `interrupts()`                    | Re-enables interrupts after they have been disabled.                                       |

---

### 8. Bitwise Operations

| **Function**                     | **Usage**                                                                   |
| -------------------------------- | --------------------------------------------------------------------------- |
| `bitRead(value, bit)`            | Reads a bit from a value.                                                   |
| `bitWrite(value, bit, bitValue)` | Writes a bit to a value.                                                    |
| `bitSet(value, bit)`             | Sets a bit to 1 in a value.                                                 |
| `bitClear(value, bit)`           | Clears a bit to 0 in a value.                                               |
| `bit(bitNumber)`                 | Returns the value of a given bit number (e.g., bit(3) returns 0b1000 or 8). |

---

### 9. Other Common Functions

| **Function**                                   | **Usage**                                             |
| ---------------------------------------------- | ----------------------------------------------------- |
| `isnan(x)`                                     | Returns `true` if the argument is NaN (Not a Number). |
| `isinf(x)`                                     | Returns `true` if the argument is infinity.           |
| `lowByte(x)`                                   | Returns the low byte of an integer.                   |
| `highByte(x)`                                  | Returns the high byte of an integer.                  |
| `shiftOut(dataPin, clockPin, bitOrder, value)` | Shifts out a byte of data one bit at a time.          |

---

### 10. Library-Related Methods

| **Function**                | **Usage**                                                         |
| --------------------------- | ----------------------------------------------------------------- |
| `#include <library.h>`      | Includes a library in your sketch.                                |
| `libraryObject.begin()`     | Initializes the library, usually in the `setup()` function.       |
| `libraryObject.read()`      | Reads data from the hardware component controlled by the library. |
| `libraryObject.write(data)` | Sends data to the hardware component controlled by the library.   |

# Components

## Breadboard

The breadboard is a white rectangular board with small embedded holes to insert electronic components.

### Layout

### Power Rails

Along the top and bottom edges, there are two long rows. These are typically used to distribute power and are labeled `+` for positive voltage and `-` for ground. Each rail is isolated and can provide different voltages for various parts of the circuit. They are connected `horizontally`.

It means a single horizontal line of a breadboard has the same connection. It is because the metal strip underneath the breadboard at the top and bottom are connected horizontally. Hence, it provides the same connection in a row. The two top and bottom parts of a breadboard are generally used for power connections.

### Terminal Strips

**Arrangement:** Terminal strips are the main area where electronic components are inserted. Each column has a series of holes aligned `vertically`, and each row is grouped into 5-hole blocks.

The vertical connection of the center part means a single vertical line in a breadboard provides the same connection. It is useful when we need to connect the different components in series.

**Electrical Connection:** In each 5-hole block, all five holes are electrically connected in a row (or column), allowing multiple component leads to be connected together. For example, if you insert the legs of an LED into one of these blocks, the current can flow through the connected path.

**Central Divider/Gap:** The terminal strips are divided by a central channel that runs lengthwise. This gap is specifically designed to accommodate ICs. When you place an IC in this central gap, each pin on one side of the IC is isolated from the pins on the other side, making it easier to connect other components to individual pins.

## Buzzer

A buzzer is a simple component used to produce sound. Buzzers can be either active or passive:

- **Active Buzzer**: Emits a constant tone when powered. Requires only HIGH/LOW signals.
- **Passive Buzzer**: Needs a PWM (Pulse Width Modulation) signal to produce varying tones.

Active Buzzer is used for alarm, simple feedback (button presses). Passive Buzzer is used for playing melodies, generating dynamic alerts or tones.

### Hardware Setup

- Connect the positive terminal (VCC) of the buzzer to a GPIO pin (e.g., GPIO23).
- Connect the negative terminal (GND) of the buzzer to the GND pin on the ESP32.
- Connect the posiive terminal with register

### Controlling

**Active Buzzer:** With an active buzzer, you only need to send a HIGH signal to make it beep.

```cpp
digitalWrite(buzzerPin, HIGH/LOW); // Turn ON/OFF buzzer
```

**Passive Buzzer:** For a passive buzzer, you use PWM signals to generate tones.

```cpp
tone(buzzerPin, 1000); // Play 1kHz tone
...
noTone(buzzerPin);
```

## Ultrasonic Sonar Sensor

Sonar sensors, like the HC-SR04, are used for distance measurement by emitting ultrasonic waves and measuring their echo.

### Structure

The HC-SR04 sensor has four pins:

- **VCC**: Power supply (5V).
- **GND**: Ground.
- **TRIG**: Trigger pin (to send ultrasonic signals).
- **ECHO**: Echo pin (to receive the reflected signal).

### Hardware Setup

- Connect VCC to the ESP32's VIN (5V).
- Connect GND to the ESP32's GND.
- Connect the TRIG pin to a GPIO pin (e.g., GPIO5).
- Connect the ECHO pin to another GPIO pin (e.g., GPIO18).

### Controlling

```cpp
#define TRIG_PIN 5   // GPIO5 connected to TRIG
#define ECHO_PIN 18  // GPIO18 connected to ECHO

void setup() {
    Serial.begin(115200);             // Start Serial communication
    pinMode(TRIG_PIN, OUTPUT);        // Set TRIG as OUTPUT
    pinMode(ECHO_PIN, INPUT);         // Set ECHO as INPUT
}

void loop() {
    // Send a HIGH pulse for 10 µs to the TRIG pin
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG_PIN, LOW);

    // Measure the duration of the ECHO pin HIGH
    long duration = pulseIn(ECHO_PIN, HIGH);

    // Calculate the distance in cm (duration / 2) * 0.034
    float distance = (duration / 2.0) * 0.034;

    // Print the distance
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");

    delay(500); // Delay before the next measurement
}
```

### How It Works

1. The ESP32 sends a HIGH pulse (`10 µs`) to the TRIG pin to emit ultrasonic waves.
2. The sensor emits a sound wave at `40 kHz`.
3. The wave hits an object and reflects back.
4. The sensor sets the ECHO pin HIGH for the time it takes the wave to return.
5. The ESP32 calculates the distance based on the time the ECHO pin stays HIGH.

### Applications

- **Obstacle Detection**: Robots or vehicles can use sonar sensors to avoid collisions.
- **Level Monitoring**: Measure water or material levels in a container.
- **Automation**: Trigger actions (e.g., opening doors) based on proximity.

## Infrared Sensor

Infrared (IR) sensors are widely used for object detection, proximity sensing, and remote control systems. They work by emitting infrared light and detecting the reflected signal or decoding signals from IR remotes.

### Types of IR Sensors

- **\_IR Proximity Sensor**: Used for detecting nearby objects. Emits IR light and detects the reflected light.
- **\_IR Receiver Module (e.g., TSOP1738)**: Decodes IR signals from a remote control.
- **\_IR Transmitter and Receiver Pair**: Used in line-following robots or simple communication.

### Structure

An IR proximity sensor typically has 3 pins:

- **VCC**: Power supply (3.3V or 5V).
- **GND**: Ground.
- **OUT**: Output pin (digital HIGH/LOW signal).

### Hardware Setup

- Connect VCC to the ESP32's 3.3V (or 5V if supported by the sensor).
- Connect GND to the ESP32's GND.
- Connect the OUT pin to a GPIO pin (e.g., GPIO23).

### Controlling

```cpp
#define IR_PIN 23 // GPIO23 connected to the OUT pin of the IR sensor

void setup() {
    Serial.begin(115200);    // Start Serial communication
    pinMode(IR_PIN, INPUT);  // Set IR_PIN as INPUT
}

void loop() {
    int irValue = digitalRead(IR_PIN); // Read the sensor value

    if (irValue == LOW) { // Object detected
        Serial.println("Object Detected!");
    } else {
        Serial.println("No Object");
    }

    delay(100); // Small delay to reduce Serial output clutter
}
```

### Applications

- **Object Detection**: Detect nearby objects using IR proximity sensors like automatic door opening systems.
- **Line-Following Robots**: Use an IR pair to follow a line or detect edges.
- **Remote Control**: Use an IR receiver to decode and respond to remote control signals.
- **Communication**: Simple data transmission using an IR transmitter and receiver.

## Servo Motor

Servo motors are used for precise control of angular position. They can rotate to a specific angle based on a control signal.

### Characteristics

- Controlled using Pulse Width Modulation (PWM).
- The pulse width determines the position:
  - `1 ms` corresponds to `0°`.
  - `1.5 ms` corresponds to `90°` (center position).
  - `2 ms` corresponds to `180°`.

### Structure

A servo motor typically has 3 wires:

- **Signal (PWM)**: Receives the control signal (connect to a GPIO pin on the ESP32).
- **Power (VCC)**: Provides power to the motor (usually 5V).
- **Ground (GND)**: Connects to the ground of the ESP32.

### Hardware Setup

- **Signal Pin**: Connect to an ESP32 GPIO pin (e.g., GPIO23).
- **VCC**: Connect to the ESP32's `VIN` (5V) pin.
- **GND**: Connect to the ESP32's `GND`.

### Standard Wire Color Codes

- **Signal Pin:** Usually orange, yellow, or white.
- **VCC (Power):** Usually red.
- **GND (Ground):** Usually black or brown.

### Controlling

**Install the Servo Library:**

- Go to Tools > Manage Libraries.
- Search for "ESP32 Servo" and install the Servo Library by Kevin Harrington.

```cpp
#include <ESP32Servo.h>

Servo myServo; // Create a Servo object

#define SERVO_PIN 23 // GPIO23 for the servo signal

void setup() {
    Serial.begin(115200);
    myServo.attach(SERVO_PIN); // Attach the servo to the GPIO pin
    Serial.println("Servo Control Initialized");
}

void loop() {
    // Rotate to 0°
    myServo.write(0);
    Serial.println("Servo at 0°");
    delay(1000);

    // Rotate to 90°
    myServo.write(90);
    Serial.println("Servo at 90°");
    delay(1000);

    // Rotate to 180°
    myServo.write(180);
    Serial.println("Servo at 180°");
    delay(1000);
}
```

## Potentiometer

A potentiometer is a variable resistor that allows you to adjust resistance manually. It's commonly used to control voltage or signal levels, such as adjusting the brightness of LEDs, volume control, or analog inputs for microcontrollers.

### Structure

A typical potentiometer has three terminals:

- **VCC**: Connects to the power supply (3.3V or 5V).
- **GND**: Connects to the ground.
- **Output**: The variable voltage output based on the potentiometer’s position.

The output voltage ranges between 0V and the supplied VCC, depending on the wiper's position.

### Hardware Setup

- VCC terminal to the ESP32’s 3V3 or 5V pin.
- GND terminal to the ESP32’s GND.
- Output terminal to an analog input pin on the ESP32 (e.g., GPIO34).

### Standard Configuration of Pins

- **Side Pins**:
  - One side pin connects to VCC.
  - The other side pin connects to GND.
- **Middle Pin**:
  - The middle pin is the Output (wiper). It provides a variable voltage between VCC and GND based on the potentiometer's position.

### Using ESP32 ADC for Potentiometer

ESP32 has analog-to-digital converters (ADC) that read analog input values and convert them into digital values. By default, ESP32’s ADC converts the input voltage (0–3.3V) to a digital value between 0 and 4095.

### Controlling

```cpp
#define POT_PIN 34 // GPIO34 for potentiometer output

void setup() {
  Serial.begin(115200); // Initialize Serial Monitor
  pinMode(POT_PIN, INPUT); // Set potentiometer pin as input
  Serial.println("Potentiometer Reading Started");
}

void loop() {
  int potValue = analogRead(POT_PIN); // Read the ADC value
  float voltage = potValue * (3.3 / 4095.0); // Convert ADC value to voltage

  // Display the results
  Serial.print("ADC Value: ");
  Serial.print(potValue);
  Serial.print(" | Voltage: ");
  Serial.print(voltage, 2); // Display voltage with 2 decimal places
  Serial.println(" V");

  delay(500); // Delay for readability
}
```

### Applications

- **User Interfaces**: Volume, brightness, or speed control knobs.
- **Sensors**: As analog input devices in robotics and IoT.
- **Calibration**: Used to fine-tune circuits during development or testing.

## Push Button

A push button is a simple input device that can send signals to the ESP32 when pressed or released.

### Structure

There are only two terminals:

- One pin connects to GPIO (signal pin)
- The other pin connects to GND (ground)

### Hardware Setup

- Connect one terminal of the button to GPIO 13.
- Connect the other terminal of the button to GND.
- Connect the LED to GPIO 26 (with a resistor to limit current).

### Behaviour

- When the button is not pressed, the circuit is open, and the GPIO reads a default state (HIGH or LOW based on pull-up or pull-down resistors).
- When the button is pressed, the circuit is closed, and the GPIO detects the change.

### Controlling

```cpp
#define BUTTON_PIN 34  // D34 pin

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON_PIN, INPUT); // Set GPIO34 as input
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN); // Read button state
  if (buttonState == LOW) {
    Serial.println("Button Pressed");
  } else {
    Serial.println("Button Released");
  }
  delay(1000); // Debounce delay
}
```

**Push Button as Switch:**

```cpp
#define BUTTON_PIN 13 // GPIO connected to the push button
#define LED_PIN 26    // GPIO connected to the LED

bool ledState = false; // To store the LED state
int buttonState = 0;   // Current state of the button
int lastButtonState = 0; // Previous state of the button

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP); // Enable internal pull-up resistor
  pinMode(LED_PIN, OUTPUT);          // Set LED pin as output
  digitalWrite(LED_PIN, LOW);        // Turn off LED initially
  Serial.begin(115200);              // Start serial communication
}

void loop() {
  buttonState = digitalRead(BUTTON_PIN); // Read the button state

  // Check for a button press (HIGH -> LOW transition)
  if (buttonState == LOW && lastButtonState == HIGH) {
    delay(50); // Debounce delay
    if (digitalRead(BUTTON_PIN) == LOW) { // Verify button press
      ledState = !ledState; // Toggle LED state
      digitalWrite(LED_PIN, ledState ? HIGH : LOW); // Update LED
      Serial.println(ledState ? "LED ON" : "LED OFF");
    }
  }

  lastButtonState = buttonState; // Save the button state for next iteration
}
```
