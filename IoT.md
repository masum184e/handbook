# Content

- [Introduction](#introduction)
- [Development Boards](#development-boards)
  - [ESP 32](#esp-32)
    - [Chip](#processoresp-wroom32)
    - [Pin](#power-and-control-pins)
    - [Wi-Fi Module](#wi-fi-module)
      - [STA](#sta)
      - [AP](#ap)
      - [Static IP Address](#static-ip-address)
      - [Password Protection](#password-protection)
      - [Control Server From Anywhere](#control-server-from-anywhere)
      - [Send Email](#send-email)
      - [WhatsApp Bot\*](#whatsapp-bot)
    - [Bluetooth](#bluetooth)
      - [Classic Bluetooth](#classic-bluetooth)
      - [Bluetooth Low Energy\*](#bluetooth-low-energy)
    - [Modes](#modes)
    - [Hall Effect\*](#hall-effect)
    - [Memory Management](#memory-management)
      - [Flash Memory](#flash-memory)
      - [MicroSD Card\*](#microsd-card)
      - [Google Sheets\*](#google-sheets)
      - [Firebase\*](#firebase)
    - [Device to Device Communication](#device-to-device-communication)
      - [ESP-NOW\*](#esp-now)
      - [ESP-MESH\*](#esp-mesh)
  - [Arduino Uno](#arduino-uno)
    - [Components](#components)
    - [Pins](#pins)
- [Arduino Programming](#arduino---programming)
- [Components](#components)
  - [LED](#led-1)
  - [Breadboard](#breadboard)
  - [Buzzer](#buzzer)
  - [Ultrasonic Sonar Sensor](#ultrasonic-sonar-sensor)
  - [Infrared Sensor](#infrared-sensor)
  - [Servo Motor](#servo-motor)
  - [Potentiometer](#potentiometer)
  - [Push Button](#push-button)
  - [PIR Motion Sensor\*](#pir-motion-sensor)
  - [LCD Display\*](#lcd-display)
  - [I2C LCD Display\*](#i2c-lcd-display)
  - [Seven Segment Display\*](#seven-segment-display)
  - [DHT11 Humidity and Temperature Sensor\*](#dht11-humidity-and-temperature-sensor)
  - [LDR Sensor\*](#ldr-sensor)
  - [Soil Moisture\*](#soil-moisture)
  - [MQ-5 Gas Sensor\*](#mq-5-gas-sensor)
  - [BMP180 Sensor\*](#bmp180-sensor)
  - [DC Motor](#dc-motor)
  - [Motor Driver](#motor-driver)
  - [Motor Shield\*](#motor-shield)
  - [HC-05 Bluetooth\*](#hc-05-bluetooth)
  - [Relay Module\*](#relay-module)
  - [OLED Display\*](#oled-display)
  - [GSM Module\*](#gsm-module)

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

# ESP 32

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

A AMS117 3.3V regulator ic supply 3.3V to the board. ESP32 active with 3.3V and all the GPIO pin output 3.3V

For those device who require more voltage, ESP32 have a VIN pin. VIN source external power which is more than 3.3V. Even for those device whose require 3.3V, ESP32 have a 3V3 pin for them also.

It is used to upload to the microcontroller via the onboard USB-to-Serial converter.

## LDO Voltage Regulator

An LDO (Low Dropout) regulator is a type of linear voltage regulator that operates efficiently with a minimal voltage difference (dropout voltage) between its input and output.

It converts a higher input voltage (e.g., 5V from USB or battery) to a lower, stable output voltage (e.g., 3.3V required by the ESP32).

Keep the micro usb port at left side the rectangular black box from upper side wide from left to right is called LDO Voltage Regulator.

## USB to TTL Converter (CP2102)

It facilitates communication between the ESP32 microcontroller and a host computer. It converts USB signals (used by computers) to TTL (Transistor-Transistor Logic) level signals (used by microcontrollers like the ESP32). This chip is especially useful for programming, serial communication, and debugging.

Keep the micro usb port at left side the squared black box from lower side is the CP2102 chip.

## Power and Control Pins

- It have 25GPIO(General Purpose Input Output) pin.
- Due to multiplexing, one GPIO pin can do multiple task.

**Characeterstics:**

- 15 ADC pin with 12 bit.
- 2 UART(Universal Asynchronous Receiver and Transmitter) pin. It enable two channel for serial communication.
- Each GPIO pin consider as PWM pin, means there have 25 PWM pin.
- 2 DAC(Digital to Analog Converter) pin with 8 bit.

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
- Computer only understand digital data, then how will it process analog data. Here come ADC pin, this pin read analog data but convert it as digital data as computer can understand.

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

- we control electricity, higher electricity produce higher output.
- suppose a device required 4s electricity to perform it's operation.
- if we supply 2s electricity and turn off 2s, it will perform with it's half power.
- pwm function with this principle and 2s is called duty cycle.
- each pin of arduino is 8 resolution bit(it will consume 8bit space in the memory) which will store value 0-255

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

We want ESP32 to act as local server in a local network. Which makes it as IoT device. ESP32 will act as a server and mobile, laptop will act as client. Server & client will be connected through same router.

#### How It Works

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

**Another Way:**

```cpp
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "Your_SSID";        // 🔁 Replace with your WiFi SSID
const char* password = "Your_PASSWORD"; // 🔁 Replace with your WiFi password

WebServer server(80); // Web server runs on port 80

#define LED_PIN 2

void handleRoot() {
  // Send HTML page to client
  server.send(200, "text/html", R"rawliteral(
    <!DOCTYPE html><html>
    <head><title>ESP32 LED</title></head>
    <body>
      <h1>ESP32 LED Control</h1>
      <p><a href="/on"><button>Turn ON</button></a></p>
      <p><a href="/off"><button>Turn OFF</button></a></p>
    </body>
    </html>
  )rawliteral");
}

void handleOn() {
  digitalWrite(LED_PIN, HIGH);
  server.sendHeader("Location", "/"); // Redirect to homepage
  server.send(303);
}

void handleOff() {
  digitalWrite(LED_PIN, LOW);
  server.sendHeader("Location", "/");
  server.send(303);
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\n✅ Connected!");
  Serial.print("🔗 IP Address: ");
  Serial.println(WiFi.localIP()); // Print the IP address

  // Route handlers
  server.on("/", handleRoot);
  server.on("/on", handleOn);
  server.on("/off", handleOff);

  server.begin();
  Serial.println("🌐 Web server started");
}

void loop() {
  server.handleClient(); // Handle web requests
}
```

### Static IP Address

Setting a static IP address on an ESP32 means assigning a fixed IP to your board so it doesn't change every time it connects to your Wi-Fi network.

Normally, ESP32 uses DHCP to get an IP from your router.

#### Controlling

```cpp
#include <WiFi.h>

// Replace with your network credentials
const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// Set your desired static IP, gateway, subnet
IPAddress local_IP(192.168.1.123);
IPAddress gateway(192.168.1.1);
IPAddress subnet(255.255.255.0);
IPAddress primaryDNS(8.8.8.8);   // optional
IPAddress secondaryDNS(8.8.4.4); // optional

void setup() {
  Serial.begin(115200);

  // Configure static IP BEFORE WiFi.begin
  if (!WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)) {
    Serial.println("⚠️ Failed to configure static IP");
  }

  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("\n✅ Connected to WiFi");
  Serial.print("📡 ESP32 IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // nothing here
}
```

### Password Protection

To protect a web server on an ESP32 with a password, you'll need to implement basic HTTP authentication. This involves checking credentials (username and password) sent by the browser in the `Authorization` header of the HTTP request. If they’re not provided (or are incorrect), you send a response requesting authentication.

#### How HTTP Authentication Works

When a client (e.g., a browser) accesses a protected route:

1. The ESP32 checks for the `Authorization` header.
2. If it's missing or incorrect, the ESP32 responds with a `401 Unauthorized` status and includes a `WWW-Authenticate` header.
3. The browser then shows a login prompt to the user.
4. If the user enters correct credentials, the browser resends the request with the proper `Authorization` header.
5. ESP32 decodes this header (Base64) and checks the username/password.

##### Controlling

```cpp
#include <WiFi.h>

// WiFi credentials
const char* ssid = "YOUR_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// Login credentials
const char* http_username = "admin";
const char* http_password = "esp32";

// Create server on port 80
WiFiServer server(80);

void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("\nWiFi connected");
  Serial.println("IP address: " + WiFi.localIP().toString());

  server.begin();
}

void loop() {
  WiFiClient client = server.available(); // check for new client
  if (client) {
    Serial.println("New Client Connected");

    String currentLine = "";
    String request = "";
    bool isAuth = false;

    unsigned long timeout = millis() + 1000;
    while (client.connected() && millis() < timeout) {
      if (client.available()) {
        char c = client.read();
        request += c;

        // End of headers is two line breaks
        if (request.endsWith("\r\n\r\n")) {
          break;
        }
      }
    }

    // Check for Authorization header
    int authIndex = request.indexOf("Authorization: Basic ");
    if (authIndex != -1) {
      int start = authIndex + strlen("Authorization: Basic ");
      int end = request.indexOf("\r\n", start);
      String encoded = request.substring(start, end);

      // Compare with expected base64: admin:esp32 = YWRtaW46ZXNwMzI=
      if (encoded == "YWRtaW46ZXNwMzI=") {
        isAuth = true;
      }
    }

    if (!isAuth) {
      client.println("HTTP/1.1 401 Unauthorized");
      client.println("WWW-Authenticate: Basic realm=\"ESP32 Login\"");
      client.println("Content-Type: text/html");
      client.println("Connection: close");
      client.println();
      client.println("<h1>401 Unauthorized</h1>");
    } else {
      // Authorized, send protected content
      client.println("HTTP/1.1 200 OK");
      client.println("Content-Type: text/html");
      client.println("Connection: close");
      client.println();
      client.println("<!DOCTYPE html><html>");
      client.println("<head><title>ESP32 Auth</title></head>");
      client.println("<body><h1>Welcome, authorized user!</h1></body>");
      client.println("</html>");
    }

    delay(1);
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
```

### Control Server From Anywhere

Ngrok creates a secure tunnel from a public internet URL to your local ESP32 server running on a private network (your Wi-Fi). This makes it possible to access your ESP32’s web interface from anywhere — even if you’re behind NAT or don’t have a static IP.

#### How ngrok Works with ESP32

ESP32 is usually not directly accessible from the internet. ngrok helps with that:

1. ESP32 runs a local web server.
2. A computer (e.g., laptop, Raspberry Pi) on the same local network runs `ngrok`, which opens a tunnel to the ESP32.
3. ngrok gives you a public HTTPS URL (like `https://xyz.ngrok.io`) that forwards traffic to the ESP32.
4. Anyone with the link can access the ESP32 web server via ngrok — even from outside your home.

#### Setup ngrok

On your computer (same network as ESP32):

1. Go to https://ngrok.com/download and download for your OS.
2. Unzip and install it.
3. Sign up for a free account at ngrok.com.
4. Get your auth token from your dashboard.
5. In terminal, run:

```shell
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

#### Forwared HTTP Traffic to ESP32

Let’s say your ESP32’s IP is `192.168.1.123`. Run:

```shell
Let’s say your ESP32’s IP is 192.168.1.123. Run:
```

This command starts a tunnel from a public ngrok URL to port 80 on your ESP32.

You’ll see output like:

```shell
Forwarding   https://abc123.ngrok.io -> http://192.168.1.123:80
```

Now, open `https://abc123.ngrok.io` in any browser, anywhere in the world, and it will connect to your ESP32's web server!

### Send Email1

**Install ESP-Mail-Client library to communicate with an SMTP server**

Before sending emails using Gmail, you need to enable Less Secure Apps (or generate an App Password if you have 2FA enabled).

```cpp
#include <WiFi.h>
#include <ESP_Mail_Client.h>

// WiFi Credentials
#define WIFI_SSID "yourwifi"
#define WIFI_PASSWORD "yourpassword"

// SMTP Server Settings (Gmail)
#define SMTP_HOST "smtp.gmail.com"
#define SMTP_PORT 587

// Sender Credentials
#define AUTHOR_EMAIL "sender@email.com"
#define AUTHOR_PASSWORD "abcdefghij"

// Create an SMTP session
SMTPSession smtp;

// Function Prototype
bool sendEmail(const char* recipientEmail, const char* subject, const char* messageBody);

// SMTP Callback Function
void smtpCallback(SMTP_Status status);

void setup() {
    Serial.begin(115200);

    // Connect to WiFi
    Serial.print("Connecting to WiFi...");
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }
    Serial.println("\nConnected to WiFi");

    // Send Email using Function
    if (sendEmail("masum1834e@gmail.com", "ESP32 Email Test", "Hello from ESP32! This is a test email.")) {
        Serial.println("Email sent successfully!");
    } else {
        Serial.println("Email sending failed.");
    }
}

void loop() {
}

// Function to Send Email
bool sendEmail(const char* recipientEmail, const char* subject, const char* messageBody) {
    smtp.debug(1);
    smtp.callback(smtpCallback);

    ESP_Mail_Session session;
    session.server.host_name = SMTP_HOST;
    session.server.port = SMTP_PORT;
    session.login.email = AUTHOR_EMAIL;
    session.login.password = AUTHOR_PASSWORD;
    session.login.user_domain = "";

    SMTP_Message message;
    message.sender.name = "ESP32";
    message.sender.email = AUTHOR_EMAIL;
    message.subject = subject;
    message.addRecipient("Receiver", recipientEmail);
    message.text.content = messageBody;

    // Secure Connection
    // session.timezone_offset = 0;
    session.secure.startTLS = false;

    // Connect to SMTP Server
    if (!smtp.connect(&session)) {
        Serial.println("Failed to connect to SMTP server.");
        return false;
    }

    // Send Email
    if (!MailClient.sendMail(&smtp, &message)) {
        Serial.println("Error sending email: " + smtp.errorReason());
        return false;
    }
    return true;
}

// Callback Function for Status
void smtpCallback(SMTP_Status status) {
    Serial.println(status.info());
}
```

### WhatsApp Bot

You can use services like CallMeBot to send WhatsApp messages from your ESP32, even though the ESP32 itself doesn’t have native support for WhatsApp.

#### How to Get Your WhatsApp API Key from CallMeBot

1. Save +34 644 70 71 65 in your phone contacts as CallMeBot.
2. Open WhatsApp and send this exact message to the bot:

```
I allow callmebot to send me messages
```

3. After a few seconds, you’ll receive a message with your API key.

#### Controlling

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

// Your Wi-Fi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// Replace with your phone number (international format) and API key from CallMeBot
String phoneNumber = "+1234567890"; // e.g., +919876543210
String apiKey = "YOUR_API_KEY";
String message = "Hello from ESP32 via WhatsApp bot!";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi connected!");
  sendWhatsAppMessage();
}

void loop() {
  // Nothing here
}

void sendWhatsAppMessage() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Encode the message to be URL-safe
    String encodedMessage = urlencode(message);

    String url = "https://api.callmebot.com/whatsapp.php?phone=" + phoneNumber +
                 "&text=" + encodedMessage +
                 "&apikey=" + apiKey;

    http.begin(url);
    int httpResponseCode = http.GET();

    if (httpResponseCode > 0) {
      Serial.println("WhatsApp message sent successfully!");
      String response = http.getString();
      Serial.println(response);
    } else {
      Serial.print("Error sending message. HTTP error code: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("WiFi not connected");
  }
}

// Helper function to URL-encode special characters
String urlencode(String str) {
  String encoded = "";
  char c;
  char code0, code1;
  for (int i = 0; i < str.length(); i++) {
    c = str.charAt(i);
    if (isalnum(c)) {
      encoded += c;
    } else {
      code1 = (c & 0xf) + '0';
      if ((c & 0xf) > 9) code1 = (c & 0xf) - 10 + 'A';
      c = (c >> 4) & 0xf;
      code0 = c + '0';
      if (c > 9) code0 = c - 10 + 'A';
      encoded += '%';
      encoded += code0;
      encoded += code1;
    }
  }
  return encoded;
}
```

## Bluetooth

### Classic Bluetooth

Classic Bluetooth (BT) on ESP32 is the original Bluetooth standard used for:

- Audio (headsets, speakers)
- File transfers
- Serial data (SPP - Serial Port Profile)

ESP32 supports Bluetooth SPP, which allows it to emulate a virtual serial port over Bluetooth, just like HC-05 or HC-06 modules.

#### Characterstics

- **SPP (Serial Port Profile):** Makes Bluetooth act like a serial (UART) port
- **BluetoothSerial.h:** Arduino library for BT SPP
- **Device role:** ESP32 can act as a Master or Slave (mostly Slave for phones)
- **Pairing:** BT pairing is needed for first-time connections

#### Controlling

```cpp
#include "BluetoothSerial.h"  // Include the BluetoothSerial library

BluetoothSerial SerialBT;     // Create a BluetoothSerial object

void setup() {
  Serial.begin(115200);              // USB serial monitor
  SerialBT.begin("ESP32_BT_Device"); // Start Bluetooth with name
  Serial.println("✅ Bluetooth started. Pair with 'ESP32_BT_Device'");
}

void loop() {
  // Send message every 2 seconds
  SerialBT.println("Hello from ESP32!");
  delay(2000);

  // Read incoming data from Bluetooth
  if (SerialBT.available()) {
    String incoming = SerialBT.readString();
    Serial.print("📥 Received via BT: ");
    Serial.println(incoming);

    // Echo it back
    SerialBT.print("Echo: ");
    SerialBT.println(incoming);
  }
}
```

### Bluetooth Low Energy

BLE is a wireless communication protocol designed for low-power, short-range communication. Unlike Classic Bluetooth, which is always connected and streaming, BLE only wakes up when needed, making it ideal for IoT and battery-powered devices.

It uses 2.4GHz frequency like bluetooth classic but different module system.

The key differences between BLE & Bluetooth classic is it stay in sleep mode without spending any energy untill a connection has been build. It has been actived after building a connection. Even after building a connection after few millisecond connection has been destroyed by exchanging data.

**Steps:**

1. Build BLE Server
2. Build BLE Service
3. Build Characterstics on Services
4. Build Descriptor on Characterstics
5. Turn ON the services
6. Start advertising

#### Characterstics

- Dual-mode (Classic + BLE)
- BLE Server (Peripheral)
- BLE Client (Central)
- Multiple services and characteristics
- Secure pairing and bonding

#### Terminology

- **Peripheral:** Device that advertises and waits for a central (e.g., ESP32 BLE server)
- **Central:** Device that connects to the peripheral (e.g., smartphone)
- **GATT:** Generic Attribute Profile (data structure)
- **Service:** Group of characteristics (e.g., Heart Rate Service)
- **Characteristic:** Data value with optional notifications

#### Controlling

**Server:**

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

// UUIDs for the custom BLE service and characteristic
#define SERVICE_UUID        "91bad492-b950-4226-aa2b-4ede9fa42f59"
#define CHARACTERISTIC_UUID "0d563a58-196a-48ce-ace2-dfec78acc814"

BLECharacteristic *pCharacteristic;
bool deviceConnected = false;

class MyServerCallbacks : public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
    Serial.println("✅ Device connected");
  }

  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
    Serial.println("❌ Device disconnected");
  }
};

void setup() {
  Serial.begin(115200);

  // 1. Initialize BLE
  BLEDevice::init("ESP32_BLE");

  // 2. Create BLE Server
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // 3. Create Service
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // 4. Create Characteristic
  pCharacteristic = pService->createCharacteristic(
                      CHARACTERISTIC_UUID,
                      BLECharacteristic::PROPERTY_NOTIFY |
                      BLECharacteristic::PROPERTY_READ
                    );

  // 5. Start the service
  pService->start();

  // 6. Start advertising
  pServer->getAdvertising()->start();
  Serial.println("🚀 BLE server is now advertising...");
}

void loop() {
  if (deviceConnected) {
    // Send message via BLE notification
    pCharacteristic->setValue("Hello from ESP32!");
    pCharacteristic->notify(); // Notify client
    Serial.println("📤 Sent notification");
    delay(2000); // Send every 2 seconds
  }
}
```

**Client:**

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEClient.h>
#include <BLEAddress.h>
#include <BLEAdvertisedDevice.h>

// UUIDs - must match the server's
#define SERVICE_UUID        "91bad492-b950-4226-aa2b-4ede9fa42f59"
#define CHARACTERISTIC_UUID "0d563a58-196a-48ce-ace2-dfec78acc814"

static BLEAdvertisedDevice* myDevice;
static bool doConnect = false;
static bool connected = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;

class MyAdvertisedDeviceCallbacks : public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("🔍 Found device: ");
    Serial.println(advertisedDevice.toString().c_str());

    // Check if the advertised device has the correct service UUID
    if (advertisedDevice.haveServiceUUID() &&
        advertisedDevice.getServiceUUID().equals(BLEUUID(SERVICE_UUID))) {
      Serial.println("✅ Target device found. Will try to connect...");
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
    }
  }
};

static void notifyCallback(
  BLERemoteCharacteristic* pBLERemoteCharacteristic,
  uint8_t* pData, size_t length, bool isNotify) {
  Serial.print("📩 Notification received: ");
  Serial.println(std::string((char*)pData, length));
}

void connectToServer() {
  Serial.println("🔗 Connecting to BLE server...");

  BLEClient* pClient = BLEDevice::createClient();

  // Connect to the server
  pClient->connect(myDevice);
  Serial.println("🎉 Connected to server!");

  // Get the remote service
  BLERemoteService* pRemoteService = pClient->getService(SERVICE_UUID);
  if (pRemoteService == nullptr) {
    Serial.println("❌ Failed to find service.");
    return;
  }

  // Get the remote characteristic
  pRemoteCharacteristic = pRemoteService->getCharacteristic(CHARACTERISTIC_UUID);
  if (pRemoteCharacteristic == nullptr) {
    Serial.println("❌ Failed to find characteristic.");
    return;
  }

  // Read the initial value
  if (pRemoteCharacteristic->canRead()) {
    std::string value = pRemoteCharacteristic->readValue();
    Serial.print("📖 Initial read: ");
    Serial.println(value.c_str());
  }

  // Subscribe to notifications
  if (pRemoteCharacteristic->canNotify()) {
    pRemoteCharacteristic->registerForNotify(notifyCallback);
  }

  connected = true;
}

void setup() {
  Serial.begin(115200);
  Serial.println("📡 Starting BLE client...");

  BLEDevice::init("");
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->start(10, false);
}

void loop() {
  if (doConnect && !connected) {
    connectToServer();
    doConnect = false;
  }

  delay(1000); // Wait before next loop
}
```

- `pCharacteristic->addDescription(new BLE2902());` - set BLE Descriptor.

#### BLE Characteristic Properties and Uses

| **Property**                               | **Description**                                                     | **Common Use Cases**                                                   |
| ------------------------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `READ`                                     | Client can read the value from the server (ESP32).                  | Reading sensor values (e.g., temperature, battery level, device info). |
| `WRITE`                                    | Client can write a new value to the server.                         | Sending commands from app to ESP32 (e.g., toggle LED, change mode).    |
| `WRITE_NR` <br> _(Write Without Response)_ | Client writes without expecting a reply (faster, less reliable).    | Fast or frequent updates (e.g., joystick, real-time commands).         |
| `NOTIFY`                                   | Server sends data updates automatically when value changes, no ACK. | Push sensor updates from ESP32 to phone app (e.g., heart rate, speed). |
| `INDICATE`                                 | Like NOTIFY, but requires an acknowledgment from the client.        | Critical data that must be acknowledged (e.g., medical devices).       |
| `BROADCAST`                                | Allows the characteristic to be broadcast (advertised).             | Rarely used—used for public data like beacon IDs.                      |
| `AUTH_SIGNED_WRITE`                        | Write operations must be signed with authentication.                | Secure data transfer (e.g., financial, sensitive data).                |
| `EXTENDED_PROPERTIES`                      | Allows for extended behaviors defined in spec.                      | Advanced features (rarely used in basic apps).                         |

### Dabble

Dabble is a mobile app by STEMpedia that lets you use your smartphone as a Bluetooth controller — like a gamepad, terminal, sensor dashboard, etc.

The `Dabble.h` library allows your ESP32 to communicate with the Dabble app using Serial over Bluetooth Classic.

`Dabble` uses Bluetooth Classic, so iOS is not supported (Android only).

#### Controlling

Install `Dabble` by `STEMpedia`.

```cpp
#define CUSTOM_SETTINGS
#define INCLUDE_GAMEPAD_MODULE  // Use gamepad from the Dabble app

#include <DabbleESP32.h>

#define LED_PIN 2  // GPIO2 (built-in LED)

void setup() {
  Serial.begin(115200);           // Serial monitor
  Dabble.begin("ESP32-Dabble");   // Initialize Bluetooth with name
  pinMode(LED_PIN, OUTPUT);
  Serial.println("✅ Dabble ready. Open the app and connect.");
}

void loop() {
  Dabble.processInput();  // Required in every loop()

  if (GamePad.isUpPressed()) {
    digitalWrite(LED_PIN, HIGH);
    Serial.println("🔆 LED ON (Up Pressed)");
  }

  if (GamePad.isDownPressed()) {
    digitalWrite(LED_PIN, LOW);
    Serial.println("💤 LED OFF (Down Pressed)");
  }

  delay(100);  // Slight delay for stability
}
```

## Modes

### Active Mode

- The ESP32 is fully operational.
- The CPU(s) are running at the configured clock speed.
- Peripherals such as Wi-Fi, Bluetooth, ADC, and GPIOs are active.
- This mode consumes the most power.
- Normally it require 160-260mA, when wifi & bluetooth require more power it consume 790mA.

**Example:**

```cpp
void setup() {
    Serial.begin(115200);
    Serial.println("ESP32 is in Active Mode");
}

void loop() {
    Serial.println("Performing tasks...");
    delay(1000); // Simulate active processing
}
```

### Modem Sleep Mode

- The CPU remains active, but the **Wi-Fi and Bluetooth modules are turned off** intermittently.
- Most power consuming component is Wifi, bluetooth, radio. That's why in modem sleep mode this are turned off including input-output of GPIO pins.
- Suitable for applications where Wi-Fi is not needed all the time, saving power.
- It requires 3-20mA to active ESP32.
- After few time it move to active mode which called Association sleep pattern.
- Normally you can't active modem sleep mode, you have to move station mode first and build wifi connection with router first.
- ESP32 connect with wifi following DTIM(Delivary Traffic Indication Message) Beacon Mechanism

**Example:**

```cpp
void setup() {
    Serial.begin(115200);
    WiFi.disconnect(true);  // Disable Wi-Fi to save power
    WiFi.mode(WIFI_OFF);
    Serial.println("Modem Sleep Mode Activated");
}

void loop() {
    Serial.println("Processing data without Wi-Fi...");
    delay(2000);
}
```

### Light Sleep Mode

- The CPU is paused, but memory and some peripherals remain active.
- Wi-Fi and Bluetooth can remain connected but will wake the CPU when needed.
- Consumes less power than Active and Modem Sleep modes.
- GPIO input-output, RAM, ESP32 codre are keep in Clock Gating
- It require only 0.8mA to active ESP32

**Example:**

```cpp
void setup() {
    Serial.begin(115200);
    esp_sleep_enable_timer_wakeup(5000000); // Wake up after 5 seconds
    Serial.println("Entering Light Sleep Mode...");
    delay(1000);
}

void loop() {
    Serial.println("Going to sleep...");
    delay(1000);
    esp_light_sleep_start(); // Enter light sleep
    Serial.println("Woke up!");
}
```

### Deep Sleep Mode

- The CPU, Wi-Fi, and Bluetooth are completely turned off.
- Only a small section of RAM is retained.
- The device can wake up using a timer or an external GPIO interrupt.
- Consumes the least power.

**Example:**

```cpp
void setup() {
    Serial.begin(115200);
    Serial.println("ESP32 Entering Deep Sleep Mode...");
    esp_sleep_enable_timer_wakeup(10 * 1000000); // Wake up after 10 seconds
    esp_deep_sleep_start(); // Enter deep sleep
}

void loop() {
    // This code won't run as ESP32 restarts after waking up
}
```

### Comparison of Power Consumption

## Hall Effect

The Hall Effect is the generation of a small voltage difference across an electrical conductor when a magnetic field is applied perpendicular to the flow of current. In microcontrollers, a Hall sensor is used to detect the presence and strength of a magnetic field.

The ESP32 has a built-in Hall sensor, which is located between GPIO36 (VP) and GPIO39 (VN). This internal sensor measures changes in the magnetic field near the chip.

⚠️ Note: The internal Hall sensor is not super accurate, but it's enough for basic magnetic field detection (e.g., detecting if a magnet is near).

### Controlling

```cpp
int hallValue = hallRead();
Serial.print("Hall sensor value: ");
Serial.println(hallValue);
delay(500);
```

It returns a value based on the strength and polarity of the magnetic field near the chip.

- Positive values → one magnetic polarity.
- Negative values → opposite polarity.
- Near 0 → little to no magnetic field.

## Memory Management

### Flash Memory

Flash memory in the ESP32 is a non-volatile storage medium, meaning it retains data even after power-off. It can be used for both read and write data.

Most ESP32 development boards come with 4MB to 16MB of external SPI Flash connected via the SPI interface.

Flash Writing Restrictions:

- Flash must be erased before it’s written.
- Data is written in 4 KB sectors.
- Frequent writing wears Flash out over time (limited write cycles).

#### Flash Memory Partitioning

ESP32 divides Flash into sections using a partition table. This defines how Flash is organized:

| Name       | Type | Subtype    | Offset  | Size   | Description                    |
| ---------- | ---- | ---------- | ------- | ------ | ------------------------------ |
| bootloader | app  | bootloader | 0x1000  | 0x8000 | ESP32 bootloader               |
| app0       | app  | factory    | 0x10000 | 1MB    | Main firmware application      |
| nvs        | data | nvs        | 0x9000  | 0x6000 | Non-volatile key-value storage |
| spiffs     | data | spiffs     | ...     | ...    | Filesystem storage (optional)  |

The actual layout may vary based on your project and can be customized in the partition.csv file.

#### Types of Data Stored in Flash

1. **Program Code:** The application is stored in Flash and loaded into IRAM/DRAM during execution.

2. **NVS (Non-Volatile Storage):** A key-value storage for config settings, WiFi credentials, etc.

3. **SPIFFS / LittleFS:** Used to store files (HTML, images, data logs) in a filesystem format.

4. **Custom Data (Raw or Binary):** You can define a custom partition to store structured or raw data (e.g., sensor logs).

#### Controlling

```cpp
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);

  // Open Preferences with namespace "myApp"
  preferences.begin("myApp", false);  // false = read/write mode // true = read

  // Read the stored counter
  int counter = preferences.getInt("counter", 0); // default = 0 if not found
  Serial.println("Current counter: " + String(counter));

  // Increment and save the counter
  counter++;
  preferences.putInt("counter", counter);
  Serial.println("New counter saved: " + String(counter));

  // Done
  preferences.end();
}

void loop() {
  // Nothing needed here
}
```

`Preferences` used the following format to store the data.

```
namespace{
  key1: value1
  key2: value2
}
```

Example:

```
myApp{
  counter: 0
}
```

- `namespace` name can be max 15 character.
- `preferences.clear();` - remove entire namespace.
- `preferences.remove("counter");` - remove specific key.
- `preferences.isKey("key");` - Check if a key exists.

### MicroSD Card

Using a microSD card gives your ESP32 access to large external storage — ideal for data logging, storing images, HTML files, etc.

The ESP32 communicates with the SD card using the SPI protocol or the SDMMC (4-bit native) interface. SPI is more common and easier to wire.

**What You Need**

1. ESP32 board
2. MicroSD card module (with level shifter) OR directly connect microSD card (ESP32 is 3.3V logic)
3. microSD card (Formatted as FAT32)
4. Wires (for SPI connection)

**How to format as FAT32:**

1. [Install SD Card Formatter](https://www.sdcard.org/downloads/formatter)
2. Format the SD Card form windows hard-drive.
3. Select FAT32 as File System from the new pop up window and hit the Start button.

#### Hardware Setup

1. **VCC:** Connect to the ESP32's `VIN` (5V) pin.
2. **GND:** Connect to the ESP32's `GND`.
3. **CS:** - Connect to the ESP32's GPIO 5 (any GPIO)
4. **MOSI:** - Connect to the ESP32's GPIO 23
5. **MISO:** - Connect to the ESP32's GPIO 19
6. **SCK:** - Connect to the ESP32's GPIO 18

#### Controlling

```cpp
#include <SPI.h>
#include <SD.h>

#define CS_PIN 5  // Chip select pin for SD card

void setup() {
  Serial.begin(115200);
  if (!SD.begin(CS_PIN)) {
    Serial.println("Card Mount Failed");
    return;
  }

  // Check card type
  uint8_t cardType = SD.cardType();
  if (cardType == CARD_NONE) {
    Serial.println("No SD card attached");
    return;
  }

  Serial.println("SD Card initialized.");

  // Write data to file
  File file = SD.open("/log.txt", FILE_WRITE);
  if (file) {
    file.println("ESP32 writing to SD card!");
    file.close();
    Serial.println("Data written successfully.");
  } else {
    Serial.println("Failed to open file for writing");
  }

  // Read data from file
  file = SD.open("/log.txt");
  if (file) {
    Serial.println("Reading from file:");
    while (file.available()) {
      Serial.write(file.read());
    }
    file.close();
  } else {
    Serial.println("Failed to open file for reading");
  }
}

void loop() {
  // Nothing to do here
}
```

### Google Sheets

IFTTT stands for "If This Then That" — it's a free web-based service that helps different apps, devices, and services work together automatically.

It allow us to use multiple webservices with same protocol. From IoT perspective, IFTTT is like an Aplet which perform specific task like plugin.

There have two kind of services in IFTT

1. Trigger - request to access any services.
2. Action - perform the requested task.

**Trigger:**

- It allow to request from outside ofr

```
ESP32 → HTTP POST → IFTTT Webhook → Google Sheets
```

#### Steps

1. **Create an IFTTT Account**

- Go to [https://ifttt.com](https://ifttt.com)
- Sign Up

2. **Create a New Applet**

- Trigger ("If This"):
  - Visit https://ifttt.com/create
  - Click "+ This"
  - Search and select Webhooks
  - Choose "Receive a web request"
  - Event Name: log_event (you can choose any name)
- Action ("Then That"):
  - Click "+ That"
  - Search for Google Sheets
  - Choose "Add row to spreadsheet"
  - Connect your Google account
  - Set:
    - Spreadsheet name: ESP32_Log
    - Formatted row (leave default or customize):
    ```
    Value1, Value2, Value3, {{OccurredAt}}
    ```

3. **Get Your Webhook Key**

- Go to: https://ifttt.com/maker_webhooks
- Click Documentation (top right)
- Copy your Webhook URL:

```c
https://maker.ifttt.com/trigger/log_event/with/key/YOUR_IFTTT_KEY
```

#### Controlling

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

// Replace with your WiFi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// Replace with your IFTTT event name and key
const char* IFTTT_EVENT_NAME = "log_event";
const char* IFTTT_KEY = "YOUR_IFTTT_KEY";

// Helper to send data
void sendToIFTTT(String val1, String val2, String val3) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    String url = "https://maker.ifttt.com/trigger/" + String(IFTTT_EVENT_NAME) + "/with/key/" + String(IFTTT_KEY);
    String payload = "{\"value1\":\"" + val1 + "\",\"value2\":\"" + val2 + "\",\"value3\":\"" + val3 + "\"}";

    http.begin(url);
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST(payload);

    if (httpResponseCode > 0) {
      Serial.println("✅ Data sent to IFTTT!");
      Serial.println(http.getString());
    } else {
      Serial.print("❌ Error sending request. Code: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("🚫 WiFi not connected");
  }
}

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\n📶 WiFi connected");

  // Simulated sensor data
  String temp = "26.5";
  String humidity = "58";
  String device = "ESP32_Node_1";

  sendToIFTTT(device, temp, humidity);
}

void loop() {
  // Send every 60 seconds or on an event
}
```

### Firebase

Firebase Realtime Database is a cloud-hosted NoSQL database. Data is stored as JSON and synchronized in real-time to all connected clients.

#### Steps

1. **Create a Firebase Project**

- Go to https://console.firebase.google.com/
- Click "Add project"
- Follow the setup wizard (no need to enable Google Analytics)

2. **Enable Realtime Database**

- In Firebase Console, go to Build > Realtime Database
- Click “Create Database”
- Select your location
- Choose Start in test mode (you can secure it later)
- Test Rule (for testing only):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

3. **Get Database URL and API Key**

- Visit `Project Settings > Services` Account and Download Private Key.
- Visit `Project Settiong > Database Secrets` and extract private key.
- Database URL → Found in Realtime Database tab, looks like:

```
https://your-project-id-default-rtdb.firebaseio.com/
```

- Web API Key:
  - Go to Project Settings > General
  - Scroll to “Your apps”
  - Copy the Web API Key

#### Controlling

Install **Firebase ESP32 Client**

```cpp
#include <WiFi.h>
#include <Firebase_ESP_Client.h>

// Provide the token generation process info.
#include <addons/TokenHelper.h>

// Your Wi-Fi credentials
#define WIFI_SSID "YourWiFiSSID"
#define WIFI_PASSWORD "YourWiFiPassword"

// Firebase project credentials
#define API_KEY "YOUR_FIREBASE_WEB_API_KEY"
#define DATABASE_URL "https://your-project-id.firebaseio.com/"

// Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");

  // Configure Firebase
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  // Anonymous sign in
  auth.user.email = "";
  auth.user.password = "";

  // Assign the callback function for token generation
  config.token_status_callback = tokenStatusCallback;

  // Initialize Firebase
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  // Log data to Firebase
  logData();
}

void loop() {
  // You can call logData() periodically here if needed
}

void logData() {
  float temp = 26.7;
  float humidity = 55.4;

  // Create a unique path based on time or device
  String path = "/ESP32_Logs";

  Serial.println("Sending data to Firebase...");

  // Upload temperature
  if (Firebase.RTDB.setFloat(&fbdo, path + "/temperature", temp)) {
    Serial.println("Temperature uploaded: " + String(temp));
  } else {
    Serial.println("Error: " + fbdo.errorReason());
  }

  // Upload humidity
  if (Firebase.RTDB.setFloat(&fbdo, path + "/humidity", humidity)) {
    Serial.println("Humidity uploaded: " + String(humidity));
  } else {
    Serial.println("Error: " + fbdo.errorReason());
  }
}
```

## Device to Device Communication

### ESP-NOW

ESP-NOW is a fast, connectionless, peer-to-peer communication protocol developed by Espressif. It allows multiple ESP devices to communicate directly using Wi-Fi radio, without needing a router or internet.

Think of it like Bluetooth or LoRa but built into ESP32’s Wi-Fi hardware. With this protocol short packet transmission has been performed without wifi connection, radio communication has been established between devices. Each packat can transfer maximum 250 byte data.

#### Features

- **Protocol type**: Proprietary protocol by Espressif
- **Network type**: Peer-to-peer (like a mesh or star topology)
- **Wi-Fi needed?**: ❌ No internet or router required
- **Range**: Same as Wi-Fi (typically 50-100 meters line-of-sight)
- **Speed**: Fast (low-latency, ~2ms)
- **Power efficient**: Yes
- **Data encryption**: Supported using LTK (Long Term Key)
- **Data size**: Max 250 bytes per message
- **Max peers**: ESP32: up to 20 peers (unencrypted), 10 (encrypted)

#### How ESP-NOW Works

- ESP devices use their Wi-Fi hardware to send/receive messages in a connectionless way.
- Each device has a MAC address (unique hardware ID).
- To send data, you must register the peer’s MAC address.
- The sender sends a packet directly to the receiver (like a walkie-talkie).

#### Controlling

**Receiver Code:**

```cpp
#include <esp_now.h>
#include <WiFi.h>

// Callback function to handle received data
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  Serial.print("📩 Data received: ");
  Serial.println((char *)incomingData);
}

void setup() {
  Serial.begin(115200);

  // Set device as Wi-Fi Station
  WiFi.mode(WIFI_STA);
  Serial.println("📡 Receiver Started");

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("❌ Error initializing ESP-NOW");
    return;
  }

  // Register receive callback
  esp_now_register_recv_cb(OnDataRecv);
}

void loop() {
  // Nothing needed here — waits for messages
}
```

**Sender Code:**

```cpp
#include <esp_now.h>
#include <WiFi.h>

// Replace with receiver's MAC address
uint8_t receiverMac[] = {0x24, 0x6F, 0x28, 0xAA, 0xBB, 0xCC};  // Change to actual MAC

void setup() {
  Serial.begin(115200);

  // Set device as Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("❌ Error initializing ESP-NOW");
    return;
  }

  // Register peer (receiver)
  esp_now_peer_info_t peerInfo = {};
  memcpy(peerInfo.peer_addr, receiverMac, 6);
  peerInfo.channel = 0;
  peerInfo.encrypt = false;

  if (esp_now_add_peer(&peerInfo) != ESP_OK) {
    Serial.println("❌ Failed to add peer");
    return;
  }

  Serial.println("🚀 Sending...");

  // Send a test message
  const char* message = "Hello from ESP32 Sender!";
  esp_err_t result = esp_now_send(receiverMac, (uint8_t *)message, strlen(message) + 1);

  if (result == ESP_OK) {
    Serial.println("✅ Sent successfully");
  } else {
    Serial.println("❌ Send failed");
  }
}

void loop() {
  // Send again every 5 seconds
  delay(5000);
  const char* message = "Another message!";
  esp_now_send(receiverMac, (uint8_t *)message, strlen(message) + 1);
}
```

#### How to get MAC Address

```cpp
void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  Serial.print("MAC Address: ");
  Serial.println(WiFi.macAddress());
}

void loop() {}
```

### ESP-MESH

ESP-MESH (or Wi-Fi Mesh Networking) is a networking protocol that allows multiple ESP32 nodes to connect and communicate without a traditional Wi-Fi router, using a self-forming and self-healing mesh network.

Think of it as a decentralized Wi-Fi network, where each node can:

- Communicate with others
- Act as both client and relay
- Forward messages to a root node (like a gateway or server)

`ESP-MESH` protocol doesn't allow to connect all the node with central connection. Only a single node can be connected with wifi, other nodes connected with each other and exchange data. If any node has been compromised, other nodes will re-connect with each other. With this way huge distance can be covered to estabilish communication.

#### Features

- **Self-forming**: Nodes automatically discover and connect to the mesh
- **Self-healing**: If a node goes offline, others re-route around it
- **Tree topology**: One root node, others form branches/leaves
- **Long range**: Data can hop through multiple devices (extends network reach)
- **Internet support**: Root node can connect to Wi-Fi/internet and relay data
- **Supported by ESP32**: Yes (fully supported by Espressif’s SDK)
- **Max nodes**: Up to 1000 nodes per network (in practice, fewer is more stable)

#### How it works

```
   [Internet]
       |
   [Root Node - ESP32]
      /      \
 [Node A]   [Node B]
             |
          [Node C]
```

- Only the root node connects to the internet.
- Other nodes relay data between one another and to the root.
- Messages are routed automatically by the mesh protocol.

#### Controlling

Because ESP-MESH is built into the ESP-IDF, this is the best approach for full mesh capability. Below is an overview using ESP-IDF.

If you want Arduino-only versions, alternatives like painlessMesh (Arduino library) are easier to use.

Install `painlessMesh`:

- Download the `AsyncTCP` library from `https://github.com/me-no-dev/AsyncTCP`.
- Select `Sketch > Include Library > Add .Zip` and include the library.

**1️Common Code for All Devices (auto forms mesh)**

```cpp
#include <painlessMesh.h>

#define   MESH_PREFIX     "myMeshNetwork"
#define   MESH_PASSWORD   "meshpassword"
#define   MESH_PORT       5555

Scheduler userScheduler;
painlessMesh mesh;

void receivedCallback(uint32_t from, String &msg) {
  Serial.printf("📩 Received from %u msg: %s\n", from, msg.c_str());
}

void setup() {
  Serial.begin(115200);

  mesh.setDebugMsgTypes(ERROR | STARTUP | CONNECTION); // Debug

  mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
  mesh.onReceive(&receivedCallback);
}

void loop() {
  mesh.update();
}
```

**Sending a Message (in loop or on condition)**

```cpp
void loop() {
  mesh.update();

  static unsigned long lastSend = 0;
  if (millis() - lastSend > 5000) {
    lastSend = millis();
    String msg = "Hello from node!";
    mesh.sendBroadcast(msg);
    Serial.println("📤 Sent broadcast: " + msg);
  }
}
```

- Mesh network will be execute at port `MESH_PORT`.
- scheduler is used to perform a define task within a fixed time.

## Multitasking

Unlike traditional Arduino boards, the ESP32 has two cores and an RTOS (Real-Time Operating System) built-in — specifically FreeRTOS.

This means:

- It can run multiple tasks (threads) in parallel
- Tasks are managed by the FreeRTOS scheduler
- You can define priorities, delays, and core affinity (run on core 0 or 1)

### Cores

- **Core 0** Typically handles WiFi, BT
- **Core 1** Usually for user sketch code

Task is defined by either `xTaskCreatePinnedToCore()` or `xTaskCreatePinnedToCore()`.

### Controlling

```cpp
#define LED1 2      // Built-in LED (GPIO 2)
#define LED2 4      // External LED on GPIO 4

// Task 1 - Blink LED1 every 1s
void TaskBlink1(void *parameter) {
  while (true) {
    digitalWrite(LED1, !digitalRead(LED1));
    Serial.println("💡 LED1 toggled (Task 1)");
    vTaskDelay(1000 / portTICK_PERIOD_MS); // Delay 1s
  }
}

// Task 2 - Blink LED2 every 300ms
void TaskBlink2(void *parameter) {
  while (true) {
    digitalWrite(LED2, !digitalRead(LED2));
    Serial.println("✨ LED2 toggled (Task 2)");
    vTaskDelay(300 / portTICK_PERIOD_MS); // Delay 300ms
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);

  // Create Task 1 on Core 0
  xTaskCreatePinnedToCore(
    TaskBlink1,      // Function
    "BlinkTask1",    // Name
    1000,            // Stack size
    NULL,            // Parameter
    1,               // Priority
    NULL,            // Task handle
    0);              // Core 0

  // Create Task 2 on Core 1
  xTaskCreatePinnedToCore(
    TaskBlink2,
    "BlinkTask2",
    1000,
    NULL,
    1,
    NULL,
    1); // Core 1
}

void loop() {
  // Empty. Tasks are running independently!
}
```

# Arduino Uno

consists of microcontroller-based development boards that can read inputs (such as sensors, switches, or buttons) and control outputs (like LEDs, motors, or displays).

- Arduino requires 5V and 500mA.
- ESP32 have to be compromised when voltage is more than 3.3V, but Arduino can handle upto 0V-5V.
- Arduino have linear voltage mapping means when voltage change 0.1V, data also change at 0.1. But ESP32 can't make differences between 0.0 and 0.1 neither between 3.2 and 3.3

## Components

1. **Power Supply:**

   - Power can be supplied with USB port, which also be used to send code.
   - Arduino have a DC power supply port.
   - Arduino can be powered up with pin like VIN(positive) and GND(negative).

2. **Pins:**

   - Arduino have 14 Digital(input/output) pins and 6 Analog pins.
   - Analog pin can be use for both analog and digital input, but can't be use for analog output.
   - Pin with (~) sign is used for analog output.

3. **LED:**

   Arduino have 4 LED.

   - Power LED:
     - In a corner of the board, there have a green led which lights up when arduino have enough power.
   - Test LED:
     - A yellow color LED appear just below the pin number 13
     - It activated when pin number 13 is HIGH
   - TX/RX LED:
     - Arduino communicate(send-recieve) with other devices with serial communication.
     - After receieving data RX LED powered up.
     - After sending data TX LED powered up.
     - Pin number 0 and 1 used to communicate with other device, but when communicating with other device with this pin, you can't do multiple task with it.

4. **Reset Button:**

   - It restart the programs execution.

5. **Memory:**

   - Arduino have 32Kb flush memory and 2Kb RAM.
   - When power is off, RAM clear it's space.
   - Arduino have 1Kb EEPPROM to store data permanantly.

6. **Fuse:**

   - Arduino can't handle more than 500mA that's why arduino have 500mA fuse.

7. **Voltage Regulator:**

   - Arduino can't handle more than 5V.
   - Arduino may accept upto 20V which is reduced at 5V.
   - Arduino have 2 voltage regulator one reduce the voltage at 5V(beside the dc power supply) and another reduce at 3.3V

8. **Crystal:**

   - Arduino have a crystal of 16Mhz.
   - It produce clock signal.
   - Microcontroller can't perform their action without clock signal.

9. **Microcontroller:**

   Arduino have 2 micro controller.

   - Atmega328p:

     - It is the main micro controler.
     - It is called DIP(dual inline packagin) due to organized pin in 2 row.
     - It perform code uploading, decision making, input/output device controlling.

   - ATMEGA16U2:
     - It placed just behind the USB port.
     - Arduino transfer data with serial communication.
     - But code transform from computer via USB(universal serial bus).
     - This micro controller convert the code into serial communication.

## Pins

| **Pin Type**                                      | **Description**                                 |
| ------------------------------------------------- | ----------------------------------------------- |
| **Digital (0-13)**                                | Used for input/output, PWM (3, 5, 6, 9, 10, 11) |
| **Analog (A0-A5)**                                | Reads analog voltage (0-1023 range)             |
| **Power (5V, 3.3V, GND)**                         | Provides power to external components           |
| **PWM (~)**                                       | Simulates analog output using digital pulses    |
| **I2C (A4 - SDA, A5 - SCL)**                      | Communicates with sensors/displays              |
| **SPI (10 - SS, 11 - MOSI, 12 - MISO, 13 - SCK)** | Used for fast communication with modules        |

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

## Circuit

Circuit is a path between power source and electric devices. Positive side have more power than negative side.

## Breadboard

Power line have a two line, positive one with red color and negative one with black color. This are vertically shorted, all the point produces same voltage that one pin supplied.

Other rows with sign a, b, c, d, e are horizontally sorted.

Divider have no pin. Don't place any device on the divider.

## LED

A Light Emitting Diode (LED) is a semiconductor device that emits light when an electric current passes through it. It is a unidirectional component, meaning it allows current to flow in one direction (from the anode to the cathode).

- diod set the path(positive-long to negative-short) of electricity.
- positive portion accept more voltage than negative portion.
- the voltage difference should be 5V.
- It can activate with 50mA but board produce 500mA, that's why **register** must be use with it.

### Controlling

- `digitalWrite()` is used to control the led with digtal output.
- `analogWrite()` is used to control the led with analog output(0-255).

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

A buzzer is a simple electro-mechanical component used to produce sound. Buzzers can be either active or passive:

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

- **IR Proximity Sensor**: Used for detecting nearby objects. Emits IR light and detects the reflected light.
- **IR Receiver Module (e.g., TSOP1738)**: Decodes IR signals from a remote control.
- **IR Transmitter and Receiver Pair**: Used in line-following robots or simple communication.

**Passive IR Sensor:**

- Only decode IR signal from objects, can't emit IR signal.

**Active IR Sensor:**

- Transmeter emit IR signal.
- Receiever detect IR signal which build with photo diod/photo transister.
- Transmeter only produce IR signal, but reciever recieves ir, uv, mw signal as well which is filtered at end.

### Applications

#### Object Detection

- Emit IR signal.
- Some signal absorb by the object, some are reflected.
- Reflected signal recieve by reciver and object detected.

#### Black-White

- White color don't absorb any light.
- Black color absorb all light.

### Structure

An IR proximity sensor typically has 3 pins:

- **VCC**: Power supply (3.3V or 5V).
- **GND**: Ground.
- **OUT**: Output pin (digital HIGH/LOW signal).

### Hardware Setup

- Connect VCC to the ESP32's 3.3V (or 5V if supported by the sensor).
- Connect GND to the ESP32's GND.
- Connect the OUT pin to a GPIO pin (e.g., GPIO23).

- accept digital value as HIGH/LOW.
- accept analog value from 0 to 1023, lower value indicate white color, higher one indicate black.

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

- Analog resolution of Arduino is 10 bit which produce data between 0-1023 range.
- Analog resolution of ESP32 is 12 bit which produce data between 0-4095 range.

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

- `map(var, a, b, c, d)` - convert the value of var from a-b range to c-d range

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

## PIR Motion Sensor

A PIR (Passive Infrared) motion sensor is an electronic device that detects movement by sensing infrared (IR) radiation emitted by objects in its field of view.

### How it work

1. **Infrared Detection:** All objects emit infrared radiation. Humans and animals, being warm-blooded, emit more infrared energy than non-living objects.

2. **Pyroelectric Sensor:** The PIR sensor contains a pyroelectric sensor, which detects changes in infrared radiation.

3. **Fresnel Lens:** The sensor is covered by a Fresnel lens that helps focus infrared signals onto the pyroelectric sensor.

4. **Dual Sensing Elements:** Most PIR sensors have two sensing elements. When a moving object crosses both elements, the sensor detects a change and triggers an output signal.

5. **Signal Processing:** The PIR sensor processes the signal and sends a HIGH signal to the microcontroller or circuit to indicate motion detection.

### Structure

A PIR sensor typically has three pins:

1. **VCC:** Power supply (usually 5V or 3.3V).
2. **GND:** Ground connection.
3. **OUT:** Digital output signal (HIGH when motion is detected, LOW when no motion is detected).

### Hardware Setup

1. **VCC:** Connect to the ESP32's `VIN` (5V) pin.
2. **GND:** Connect to the ESP32's `GND`.
3. **OUT:** Connect to an ESP32 GPIO pin (e.g., GPIO15).

### Adjustable Components

Most PIR sensors come with two potentiometers:

- **Sensitivity Adjustment:** Adjusts the detection range.
- **Time Delay Adjustment:** Controls how long the output signal remains HIGH after motion is detected.

### Controlling

```cpp
#define PIR_PIN 15

void setup() {
  pinMode(PIR_PIN, INPUT);
  Serial.begin(115200);
}

void loop() {
  int motion = digitalRead(PIR_PIN);

  if(motion == HIGH) {
    Serial.println("Motion Detected!");
  }
}
```

## LCD Display

An LCD (Liquid Crystal Display) is an electronic display module used to display text, numbers, and custom characters.

There is a changes among crystal in the presence of light. There hava a backlight in the back of the display. When electriciy supplies in the liquid, the portion supplies electricity dark up and we can display character.

One of the most commonly used LCD modules is the 16x2 LCD, which:

- Has 16 columns and 2 rows for text, in toal 32 character can be displayed.
- Uses the Hitachi HD44780 controller.
- Can operate in 4-bit or 8-bit mode.
- Requires an I2C module to reduce the number of GPIO connections.

### Types of LCD Displays

1. **Parallel LCD (16x2, 20x4, etc.):** Requires 6+ GPIO pins (RS, EN, D4-D7, etc.).
2. **I2C LCD (16x2, 20x4, etc.):** Uses only 2 pins (SDA & SCL), making it ideal for ESP32.

### Structure

A 16x2 LCD has 16 pins:

| Pin   | Name  | Description                                            |
| ----- | ----- | ------------------------------------------------------ |
| 1     | VSS   | Ground                                                 |
| 2     | VCC   | Power Supply (5V)                                      |
| 3     | V0    | Contrast Adjust (via potentiometer)                    |
| 4     | RS    | Register Select (Command/Data)                         |
| 5     | RW    | Read/Write (Usually GND for write-only)                |
| 6     | EN    | Enable (Triggers LCD to read data)                     |
| 7-10  | D0-D3 | Data Lines (Used in 8-bit mode, ignored in 4-bit mode) |
| 11-14 | D4-D7 | Data Lines (Used in 4-bit or 8-bit mode)               |
| 15    | LED+  | Backlight Power (5V)                                   |
| 16    | LED-  | Backlight Ground (GND)                                 |

- RS is used to send command to display. We can send command when the value is LOW. We can send data when the value is HIGH.
- Send command means something like which row should i select to show data.
- RW should be HIGH to read data. To show data value should be LOW.
- EN should be HIGH to show data.
- D4-D7 is enough to show data.

### Hardware Setup

We use the 4-bit mode (fewer GPIOs needed) to interface the LCD with ESP32.

| LCD Pin | ESP32 Pin                                                         |
| ------- | ----------------------------------------------------------------- |
| VSS     | GND                                                               |
| VCC     | 5V                                                                |
| V0      | Middle pin of a 10KΩ potentiometer (other two pins to 5V and GND) |
| RS      | GPIO 4                                                            |
| RW      | GND                                                               |
| EN      | GPIO 5                                                            |
| D4      | GPIO 18                                                           |
| D5      | GPIO 19                                                           |
| D6      | GPIO 21                                                           |
| D7      | GPIO 22                                                           |
| LED+    | 5V                                                                |
| LED-    | GND                                                               |

**Note:** The RW pin is grounded because we only need to write to the LCD.

### Controlling

**Install the LiquidCrystal library**

```cpp
#include <LiquidCrystal.h>

#define RS 4
#define EN 5
#define D4 18
#define D5 19
#define D6 21
#define D7 22

LiquidCrystal lcd(RS, EN, D4, D5, D6, D7);

void setup() {
  lcd.begin(16, 2);
  lcd.setCursor(0, 0);
  lcd.print("Hello, ESP32!");

  lcd.setCursor(0, 1);
  lcd.print("Parallel LCD");
}

void loop() {
  int motion = digitalRead(PIR_PIN);

  lcd.clear();
  lcd.setCursor(0, 0);
  if(motion == HIGH) {
    lcd.print("Motion Detected");
  }else{
    lcd.print("No Motion Found")
  }
}
```

- `lcd.setCursor(0,0);` → Moves cursor to row 0, column 0.

## I2C LCD Display

An I2C LCD is a character LCD that uses the I2C (Inter-Integrated Circuit) communication protocol instead of parallel communication. This significantly reduces the number of GPIO pins required to interface the LCD with microcontrollers like the ESP32.

When two device communicate between each other, there have some protocol. Every device have different protocol as it build by different company. Serial Communication uses UART(Universal Asynchronous Receiver Transmitter) protocol. It can do both recieve and send data but the data baud rate of both devices must be same. Sometime serial monitor show some gibric value, why? Because there have differnces between baud rate set by program and baud rate set in monitor. We only show proper value, when both are same.

The benefit of I2C protocol is we can connect multiple i2c device with only two pin called SDA, SCL. To make all the i2c device, each one of them have an address. We access the device through that address.

But if everyone communicate with each other, then it will be mess. That's why i2c have master who make other device his slave and decide which slave should communicate to which other slave. Each slave have8bit address, one use to determine weather it is use for recieve or send. SDA(Serial Data) pin is used to exchange data. SCL(Serial Clock) is used to send clock signal. Slave can't activated without clock which doesn't allow data communication.

If there have a i2c communication between arduino and any other device, arduino act as master and that device act as slave.

### Structure

I2C LCDs have a small PCF8574 I2C adapter soldered on the back. This adapter allows the LCD to communicate using the I2C bus, reducing the number of required GPIOs.

1. **VCC:** Power supply (usually 5V or 3.3V).
2. **GND:** Ground connection.
3. **SDA:** Data Line.
4. **SCL:** Clock Line.

### Hardware Setup

1. **VCC:** Connect to the ESP32's `VIN` (5V) pin.
2. **GND:** Connect to the ESP32's `GND`.
3. **SDA:** Connect to ESP32 GPIO 21
4. **SCL:** Connect to ESP32 GPIO 22

During circuit setup short two pin with female to female jumper of the LED of i2c adapter.

### Extract I2C Device Address

```cpp

```

### Controlling

**Install the LiquidCrystal library**

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

#define I2C_ADDR 0x27
#define LCD_COLUMNS 16
#define LCD_ROWS 2

LiquidCrystal_I2C lcd(I2C_ADDR, LCD_COLUMNS, LCD_ROWS);

void setup() {
  lcd.init();
  lcd.backlight();

  lcd.setCursor(0, 0);
  lcd.print("Hello, ESP32!");

  lcd.setCursor(0, 1);
  lcd.print("I2C LCD Display");
}

void loop() {

}

```

- `lcd.init();` → Initializes the LCD.
- `lcd.backlight();` → Turns on the LCD backlight.

## Seven Segment Display

A Seven Segment Display (SSD) is an electronic display device used to display numerical data. It consists of seven LED segments (a–g) and an optional dot segment (dp), arranged in the shape of the number "8." By selectively turning on or off these segments, we can display numbers and some letters.

### Types

Types of Seven Segment Displays

- **Common Anode (CA)** – All anode pins are connected together and need LOW (0V) to turn ON segments.
- **Common Cathode (CC)** – All cathode pins are connected together and need HIGH (3.3V/5V) to turn ON segments.

### Structure

A single-digit 7-segment display typically has 10 pins:

- 7 segment control pins: `a, b, c, d, e, f, g`
- 1 dot control pin: `dp` (decimal point)
- 2 common pins: `COM` (common anode or common cathode)

### Hardware Setup

- **a:** Connect to ESP32 GPIO 18
- **b:** Connect to ESP32 GPIO 5
- **c:** Connect to ESP32 GPIO 4
- **d:** Connect to ESP32 GPIO 2
- **e:** Connect to ESP32 GPIO 15
- **f:** Connect to ESP32 GPIO 19
- **g:** Connect to ESP32 GPIO 21
- **dp:** Not Used
- **COM:** Connect to the ESP32's `GND`.

If display is common cathode, then connect both common to GND, if its common annode, then connect it with 5V.

If display is common cathode, then a-g pin should be supplies 5V. If display is common annode then a-g pin should be connect with GND

NOTE: Since each segment is an LED, resistors (220Ω - 1KΩ) should be used in series with each segment to limit the current.

### Controlling

```cpp
const int a = 18;
const int b = 5;
const int c = 4;
const int d = 2;
const int e = 15;
const int f = 19;
const int g = 21;

// Array to hold segment values for numbers 0-9
const int numbers[10][7] = {
  {1, 1, 1, 1, 1, 1, 0}, // 0
  {0, 1, 1, 0, 0, 0, 0}, // 1
  {1, 1, 0, 1, 1, 0, 1}, // 2
  {1, 1, 1, 1, 0, 0, 1}, // 3
  {0, 1, 1, 0, 0, 1, 1}, // 4
  {1, 0, 1, 1, 0, 1, 1}, // 5
  {1, 0, 1, 1, 1, 1, 1}, // 6
  {1, 1, 1, 0, 0, 0, 0}, // 7
  {1, 1, 1, 1, 1, 1, 1}, // 8
  {1, 1, 1, 1, 0, 1, 1}  // 9
};

const int segmentPins[7] = {a, b, c, d, e, f, g};

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(segmentPins[i], OUTPUT);
  }
}

void displayNumber(int num) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(segmentPins[i], numbers[num][i]);
  }
}

void loop() {
  for (int num = 0; num < 10; num++) {
    displayNumber(num);
    delay(1000);
  }
}
```

## DHT11 Humidity and Temperature Sensor

The DHT11 is a low-cost digital humidity and temperature sensor used in weather monitoring. It provides temperature (°C) and humidity (%) readings using a single data pin.

**DHT11 Features**

- **Temperature Range:** 0°C to 50°C (±2°C accuracy)
- **Humidity Range:** 20% to 90% (±5% accuracy)
- **Operating Voltage:** 3.3V - 5V
- **Output Signal:** Digital (Single-wire communication)
- **Sampling Rate:** 1Hz (one reading per second)

**DHT11 vs. DHT22**

| Feature             | DHT11    | DHT22 (AM2302) |
| ------------------- | -------- | -------------- |
| Temperature Range   | 0 - 50°C | -40 to 80°C    |
| Humidity Range      | 20 - 90% | 0 - 100%       |
| Accuracy (Temp)     | ±2°C     | ±0.5°C         |
| Accuracy (Humidity) | ±5%      | ±2%            |
| Price               | Cheaper  | More Expensive |

### Structure

1. **VCC:** Power Supply.
2. **GND:** Ground Connection.
3. **DATA:** Digital Output.
4. **NC:** Not Connected.

### Hardware Setup

1. **VCC:** Connect to the ESP32's `VIN` (5V) pin.
2. **GND:** Connect to the ESP32's `GND`.
3. **DATA:** Connect to an ESP32 GPIO pin (e.g., GPIO4).
4. **NC:** Not Connected

**Note:** A 10KΩ pull-up resistor is recommended between VCC and DATA for stable readings.

### Controlling

**Install the DHT sensor library (by Adafruit)**

```cpp
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println("°C");

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println("%");

  delay(2000);
}
```

## LDR sensor

An LDR (Light Dependent Resistor) sensor, also known as a photoresistor, is a light-sensitive device that changes its resistance based on the amount of light falling on it. The resistance of an LDR decreases when the light intensity increases and increases when the light intensity decreases.

### How it work

- When light intensity increases, LDR resistance decreases, and the voltage at the analog pin increases.
- When light intensity decreases, LDR resistance increases, and the voltage at the analog pin decreases.
- Light is nothing but photon particle.
- When this particle jumps on the LDR, there have a collision between the particle and register.
- This collision reduces resistance, and decreases electricity.
- Less light result low collision, higher ressistance, lower electricity.

### Structure

LDR sensor alone cannot generate a voltage signal, it is usually used in a voltage divider circuit with a fixed resistor.

Create a voltage divider using an LDR and a fixed resistor (typically 10kΩ). The voltage at the junction of the LDR and the resistor is read by an analog pin of the ESP32.

### Hardware Setup

1. **VCC:** Connect to the ESP32's `VIN` (5V) pin.
2. **GND:** Connect to the ESP32's `GND`.
3. **OUTPUT:** Connect to an ESP32 GPIO pin (e.g., GPI34) + One end of `10kΩ` resistor.

### Controlling

```cpp
#define LDR_PIN 34

void setup() {
    Serial.begin(115200);
}

void loop() {
    int ldrValue = analogRead(LDR_PIN);
    Serial.print("LDR Value: ");
    Serial.println(ldrValue);

    delay(500);
}
```

**Interpreting the LDR Readings**

- High Value (~4095 on ESP32 ADC 12-bit resolution) → Bright light.
- Low Value (~0-1000) → Low light or darkness.

## Soil Moisture

A soil moisture sensor measures the water content in the soil to determine if a plant needs watering.

### Types

There are two main types of soil moisture sensors:

1. **Resistive Soil Moisture Sensor (Analog)**

- Uses two metal probes to measure electrical resistance in the soil.
- More moisture → Less resistance → Higher analog value.
- Dry soil → More resistance → Lower analog value.
- Issue: Metal probes corrode over time.

2. **Capacitive Soil Moisture Sensor (Recommended)**

- Measures capacitance rather than resistance, providing more stable and accurate readings.
- Does not corrode, making it more durable for long-term use

### Structure

- **VCC**: Connects to the power supply (3.3V or 5V).
- **GND**: Connects to the ground.
- **A0(Analog Output):** Reads soil moisture.

### Hardware Setup

- **VCC:** Connect to the ESP32's `VIN` (5V) pin.
- **GND:** Connect to the ESP32's `GND`.
- **A0:** Connect to ESP32 GPIO 34

### Controlling

```cpp
#define SOIL_MOISTURE_PIN 34

void setup() {
    Serial.begin(115200);
}

void loop() {
    int moistureValue = analogRead(SOIL_MOISTURE_PIN);
    Serial.print("Soil Moisture Value: ");
    Serial.println(moistureValue);

    delay(1000);
}
```

### Interpreting the Readings

| Moisture Level | Analog Value (0-4095) | Soil Condition    |
| -------------- | --------------------- | ----------------- |
| **Dry**        | 0 - 1500              | Needs watering 🌵 |
| **Moist**      | 1500 - 2500           | Good condition 🌿 |
| **Wet**        | 2500 - 4095           | Too much water 🚰 |

**Tip:** Place the sensor vertically in the soil for better readings.

## MQ-5 Gas Sensor

The MQ-5 is a gas sensor that detects LPG (Liquefied Petroleum Gas), natural gas, and town gas.

- Detects LPG, methane (CH₄), and natural gas.
- Provides both analog and digital outputs.
- Heating time: 20 seconds for stable readings.

**How it work:**

The MQ-5 sensor contains a metal-oxide (SnO₂) sensing layer that reacts with gases in the air. When a target gas is present, the sensor's resistance changes, altering its output voltage.

- More gas → Lower resistance → Higher output voltage.
- Less gas → Higher resistance → Lower output voltage.

### Structure

- **VCC**: Connects to the power supply (3.3V or 5V).
- **GND**: Connects to the ground.
- **A0(Analog Output):** Reads gas concentration.
- **D0(Digital Output):** Detects gas level(HIGH/LOW).

Note: The analog pin (A0) provides a variable reading based on gas concentration, while the digital pin (D0) gives a HIGH or LOW signal when the gas exceeds a threshold.

### Hardware Setup

- **VCC:** Connect to the ESP32's `VIN` (5V) pin.
- **GND:** Connect to the ESP32's `GND`.
- **A0:** Connect to ESP32 GPIO 34
- **D0:** Connect to ESP32 GPIO 26

### Controlling

```cpp
#define MQ5_PIN 34

void setup() {
    Serial.begin(115200);
}

void loop() {
    int gasValue = analogRead(MQ5_PIN);
    Serial.print("Gas Sensor Value: ");
    Serial.println(gasValue);

    delay(1000);
}
```

## BMP180 Sensor

The BMP180 is a digital barometric pressure sensor that can measure atmospheric pressure and temperature.

### Characterstics

- Measures pressure (300 hPa to 1100 hPa) with high accuracy.
- Measures temperature (0°C to 65°C).
- Uses I2C or SPI communication.
- Low power consumption (3.3V or 5V compatible).

### Structure

- **VCC**: Connects to the power supply (3.3V or 5V).
- **GND**: Connects to the ground.
- **SDA:**
- **SCL:**

### Harware Setup

To connect the BMP180 to the ESP32, we will use the I2C communication protocol.

- **VCC:** Connect to the ESP32's `VIN` (5V) pin.
- **GND:** Connect to the ESP32's `GND`.
- **SDA:** Connect to ESP32 GPIO 21
- **SCL:** Connect to ESP32 GPIO 22

### Controlling

Install the **Adafruit BMP085** library (BMP180 is an improved version of BMP085).

```cpp
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BMP085.h>

Adafruit_BMP085 bmp;

void setup() {
    Serial.begin(115200);

    if (!bmp.begin()) {
        Serial.println("Could not find BMP180 sensor. Check connections!");
        while (1);
    }
    Serial.println("BMP180 sensor initialized successfully.");
}

void loop() {
    float temperature = bmp.readTemperature();

    int32_t pressure = bmp.readPressure();

    float altitude = bmp.readAltitude(101325);

    Serial.print("Temperature: ");
    Serial.print(temperature);
    Serial.println(" °C");

    Serial.print("Pressure: ");
    Serial.print(pressure);
    Serial.println(" Pa");

    Serial.print("Altitude: ");
    Serial.print(altitude);
    Serial.println(" meters");

    Serial.println("----------------------");

    delay(2000);
}
```

## DC Motor

A DC motor (Direct Current motor) is an electromechanical device that converts electrical energy into mechanical energy using direct current. It operates on the principle of electromagnetic induction, where a current-carrying conductor placed in a magnetic field experiences a force, causing rotation.

**Components**

- Permanent Magnet(fixed).
- Electro Magnet(surrounded by magnet).

**How works:**

- Electricity supplies in the Electro Magnet and create a magnetic field
- Magnetic field attracts toward Permanent magnet and make a rotation
- Higher rate of electricity make strong attraction which create high rotation.

### Note

- Never supply power from arduino/esp32 to dc motor, you may sacrifice the board
- Motor driver must be used with arduino/esp32 to control motor.

## Motor Driver

A motor driver is an electronic circuit that allows a microcontroller (like the ESP32) to control high-power motors. Since microcontrollers operate at low voltage (3.3V or 5V) and provide limited current, they cannot directly power motors, which often require higher voltage and current. A motor driver acts as an interface between the microcontroller and the motors, allowing safe and efficient operation.

Motor shields usually include:

- **H-bridge** circuits for controlling motor direction
- **PWM** (Pulse Width Modulation) control for speed regulation

`L298N Motor Driver` is a dual chanel H-bridge(1) mootor driver which can control 2 dc motor

### Components

- Heat sink above L298N chip.
- Power Supply(`VS` and `GND`).
- `+5V` is used to supply power from motor driver.
- `5V Jumper`:
  - It make 7805 chip active.
  - It produce 5V from scrue terminal.
  - Remove it if the power supply is above 12V.

**Never supply power to `+5V` and `VS` at a time.**

### Structurue

- **IN1, IN2** - Control Rotation Direction of Motor A
- **IN3, IN4** - Control Rotation Direction of Motor B
- **EN_A** - PWM speed control for Motor A
- **EN_B** - PWM speed control for Motor B

Making `EN_A`, `EN_B` low will pause the motor.

| IN1  | IN2  | Rotation |
| ---- | ---- | -------- |
| LOW  | LOW  | OFF      |
| HIGH | LOW  | FORWARD  |
| LOW  | HIGH | BACKWARD |
| HIGH | HIGH | OFF      |

To control the speed:

- sacrifice 5V jumper.
- connect `EN_A`, `EN_B` with PWM pin.

### Hardware Setup

- **IN1** - GPIO 18
- **IN2** - GPIO 19
- **IN3** - GPIO 21
- **IN4** - GPIO 22
- **EN_A** - GPIO 5 (PWM)
- **EN_B** - GPIO 23 (PWM)
- **GND** - GND

### Controlling

Why input pins are declared as output inside setup function. Because this are output for arduino. This are input pin for motor driver.

```cpp
#define IN1 18
#define IN2 19
#define IN3 21
#define IN4 22
#define EN_A 5
#define EN_B 23

void setup() {
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    pinMode(IN3, OUTPUT);
    pinMode(IN4, OUTPUT);
    pinMode(EN_A, OUTPUT);
    pinMode(EN_B, OUTPUT);

    // TURN OFF MOTORS - INITIAL STATE
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
}

void loop() {
  directionControl();
  delay(1000);
  speedControl();
  delay();
}

// CONTROL SPINNING DIRECTION OF MOTOR
void directionControl(){
  // set motors to maximum speed
  // for PWM maximum possible values are 0 to 255
  analogWrite(EN_A, 255)
  analogWrite(EN_B, 255)

  // turn on motor A & B
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);

  delay(2000);

  // change motor direction
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);

  // turn off motor
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);

}

// control speed to lowest to highest
void speedControl(){
  // ...
}
```

## Motor Shield

The Adafruit Motor Shield V1 is an expansion board designed to control DC motors and stepper motors with an Arduino. It is based on the L293D motor driver IC, which allows it to control up to 4 DC motors or 2 stepper motors while also providing speed and direction control.

### Characterstics

- Controls up to 4 DC motors or 2 stepper motors.
- Can run 2 servo motors using dedicated servo headers.
- Uses the L293D H-Bridge(2) driver chips for controlling motors.
- Each L293D motor driver can supply 600mA per motor with 1.2A peak current and controll 2 dc motor and a stepper motor.
- Has thermal shutdown and internal diodes for motor protection.
- Powered from external power source (up to 25V) or from Arduino’s Vin.

### Structurue

- **DC Motor:** Connect two wires to M1, M2, M3, or M4 terminals.
- **Stepper Motor:** Connect four wires to M1 & M2 or M3 & M4.
- **Servo Motor:** Plug into the servo headers.
- **Power Supply:** Connect with +M and GND.
- **Reset Button:** Reset Arduino/ESP32.

**Note:** Relase the jumper from PWR pin before supplying power from external source. Enough power turn on the green LED on the shield.

### Power Supply

Power can be supply in two way:

1. **Together:**

   - Jumper must not compromise.
   - Power supplies from arduino and LED will blink.
   - If motor requires more than 12V, NEVER do it, you may compromise the board and sheild both.

2. **Separatly:**
   - Eject the jumper first.
   - Supply power with +M and GND to Sheild.
   - Supply power with USB or external source to Board.

`NEVER supply power in both arduino and motor sheild`

### Hardware Setup

**Arduino:** - Don't need to configure it, just place the board on the arduino.

**ESP32:** - Adafruit Motor Sheild is compatible with Arduino-based boards. - ESP32 does not natively support this library because it uses a different architecture.

**Pin Mapping Between ESP32 and L293D (Motor Shield)**

| Motor Shield Pin | Function            | ESP32 Pin |
| ---------------- | ------------------- | --------- |
| **Motor A**      |                     |           |
| M1 (A-IN1)       | Direction 1         | GPIO 18   |
| M2 (A-IN2)       | Direction 2         | GPIO 19   |
| PWM (A-EN)       | Speed Control (PWM) | GPIO 5    |
| **Motor B**      |                     |           |
| M3 (B-IN1)       | Direction 1         | GPIO 21   |
| M4 (B-IN2)       | Direction 2         | GPIO 22   |
| PWM (B-EN)       | Speed Control (PWM) | GPIO 23   |

### Controlling

Install **Adafruit** Library.

**DC Motor:**

```cpp
#include <AFMotor.h>  // Include Adafruit Motor Shield library

AF_DCMotor motor(1);  // Create motor object for M1
// AF_DCMotor motor(2);  // Create motor object for M2
// AF_DCMotor motor(3);  // Create motor object for M3
// AF_DCMotor motor(4);  // Create motor object for M4

void setup() {
  Serial.begin(9600);
  motor.setSpeed(150);  // Set speed (0-255)
}

void loop() {
  Serial.println("Moving Forward");
  motor.run(FORWARD);
  delay(2000);

  Serial.println("Moving Backward");
  motor.run(BACKWARD);
  delay(2000);

  Serial.println("Stopping");
  motor.run(RELEASE);
  delay(2000);
}
```

**Stepper Motor:**

```cpp
#include <AFMotor.h>

AF_Stepper motor(200, 1);  // 200 steps per revolution, connected to M1 & M2

void setup() {
  Serial.begin(9600);
  motor.setSpeed(10);  // Set speed in RPM
}

void loop() {
  Serial.println("Moving forward 100 steps");
  motor.step(100, FORWARD, SINGLE);
  delay(1000);

  Serial.println("Moving backward 100 steps");
  motor.step(100, BACKWARD, SINGLE);
  delay(1000);
}
```

**Servo Motor:**

```cpp
#include <Servo.h>

Servo myServo;  // Create servo object

void setup() {
  myServo.attach(10);  // Attach to pin 10
}

void loop() {
  myServo.write(0);   // Move to 0 degrees
  delay(1000);

  myServo.write(90);  // Move to 90 degrees
  delay(1000);

  myServo.write(180); // Move to 180 degrees
  delay(1000);
}
```

## HC-05 Bluetooth

The HC-05 Bluetooth module is a commonly used wireless communication module that allows devices to communicate over Bluetooth serial communication (UART - Universal Asynchronous Receiver-Transmitter).

- Build serial communication with arduino.
- Arduino and ESP32 bot uses `RX` and `TX` for transfer and recieve data.

While uploading code to the board, keep `RX` and `TX` free from any connection. Code comes from computer with serial communication and reciever channel busy to recieve the code. After uploading the code keep it alive again.

### Characterstics

- Supports Bluetooth 2.0 with SPP (Serial Port Protocol).
- Can operate in Master or Slave mode.
- Operates on 3.3V logic levels but can tolerate 5V on VCC.
- Communicates via UART (TX/RX pins) at default 9600 baud rate.
- Has an AT command mode to configure settings like device name, password, role (Master/Slave), etc.
- Works at a range of 10 meters (approx.) and at a speed of 1Mbps.
- In data mode baud rate is 9600 and in command mode baud rate is 38400.
- If it require password use 1234 or 0000
- Bluetooth module receieve command as `ASCII character`.

### Structure

It have 6 pin and 2 LED.

- **VCC:** Power supply (3.6V - 6V)
- **GND:** Ground
- **TXD:** Transmit Data (connects to RX of ESP32)
- **RXD:** Receive Data (connects to TX of ESP32 via voltage divider if needed)
- **EN (Enable):** Enables module when HIGH
- **State:** Indicates connection status
- **LED:**
  - Lights up in every 2 seconds - Command Mode.
  - Keep lighting - Waiting to connect with data mode.
  - Lighting up after few seconds - Data Mode.
- **Key/Mode:** Used for entering AT command mode
  - Bluetooth can work in 2 mode - data & command.
  - In data mode, we send command/data from mobile.
  - In command mode, we send command/data from serial mointor.
  - HIGH mode indicates command mode, LOWER mode indicates data mode.

### Hardware Setup

- **VCC:** 3.3V
- **GND:** GND
- **TXD:** RX (GPIO16)
- **RXD:** TX (GPIO17) (Use voltage divider if needed)
- **EN:** 3.3V (Optional)
- **Key:** Not needed unless using AT mode

**Important:** HC-05 operates at 3.3V logic level, but it tolerates 5V on VCC. However, the RX pin on HC-05 expects 3.3V, so use a voltage divider (1kΩ & 2kΩ) to step down the ESP32 TX signal.

### Controlling

**Arduino Code:**

```cpp
#define RXD2 16  // ESP32 UART2 RX
#define TXD2 17  // ESP32 UART2 TX

void setup() {
  Serial.begin(115200);             // USB serial for debug
  Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2); // UART2 to HC-05

  pinMode(2, OUTPUT);               // Built-in LED or relay
  Serial.println("📡 Waiting for Bluetooth data (via HC-05)...");
}

void loop() {
  if (Serial2.available()) {
    String command = Serial2.readStringUntil('\n');
    command.trim();

    Serial.print("📥 Received via HC-05: ");
    Serial.println(command);

    if (command == "ON") {
      digitalWrite(2, HIGH);
      Serial2.println("✅ LED ON");
    } else if (command == "OFF") {
      digitalWrite(2, LOW);
      Serial2.println("✅ LED OFF");
    } else {
      Serial2.println("❓ Unknown Command");
    }
  }
}
```

**Mobile App:**

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.bluetoothapp">

    <!-- Permissions for Bluetooth -->
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

    <application
        android:allowBackup="true"
        android:theme="@style/Theme.BluetoothApp">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="20dp">

    <Button
        android:id="@+id/btnConnect"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Connect to HC-05" />

    <EditText
        android:id="@+id/editMessage"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter message" />

    <Button
        android:id="@+id/btnSend"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Send" />

    <TextView
        android:id="@+id/textReceived"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Received: "
        android:textSize="18sp"
        android:padding="10dp"/>
</LinearLayout>
```

```java
package com.example.bluetoothapp;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothSocket;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Set;
import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    private BluetoothAdapter bluetoothAdapter;
    private BluetoothSocket bluetoothSocket;
    private OutputStream outputStream;
    private InputStream inputStream;
    private BluetoothDevice hc05Device;

    private Button btnConnect, btnSend;
    private EditText editMessage;
    private TextView textReceived;

    private final String HC05_ADDRESS = "98:D3:61:F5:76:8B";  // Replace with your HC-05 MAC address
    private final UUID HC05_UUID = UUID.fromString("00001101-0000-1000-8000-00805F9B34FB");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnConnect = findViewById(R.id.btnConnect);
        btnSend = findViewById(R.id.btnSend);
        editMessage = findViewById(R.id.editMessage);
        textReceived = findViewById(R.id.textReceived);

        bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();

        btnConnect.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                connectToHC05();
            }
        });

        btnSend.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendMessage();
            }
        });

    }

    private void connectToHC05() {
        if (bluetoothAdapter == null) {
            Toast.makeText(this, "Bluetooth not supported", Toast.LENGTH_SHORT).show();
            return;
        }

        if (!bluetoothAdapter.isEnabled()) {
            Toast.makeText(this, "Enable Bluetooth first", Toast.LENGTH_SHORT).show();
            return;
        }

        // Find HC-05 in paired devices
        Set<BluetoothDevice> pairedDevices = bluetoothAdapter.getBondedDevices();
        for (BluetoothDevice device : pairedDevices) {
            if (device.getName().equals("HC-05") || device.getAddress().equals(HC05_ADDRESS)) {
                hc05Device = device;
                break;
            }
        }

        if (hc05Device == null) {
            Toast.makeText(this, "HC-05 not found!", Toast.LENGTH_SHORT).show();
            return;
        }

        try {
            bluetoothSocket = hc05Device.createRfcommSocketToServiceRecord(HC05_UUID);
            bluetoothSocket.connect();
            outputStream = bluetoothSocket.getOutputStream();
            inputStream = bluetoothSocket.getInputStream();

            Toast.makeText(this, "Connected to HC-05", Toast.LENGTH_SHORT).show();

            // Start a thread to listen for incoming data
            new Thread(new Runnable() {
                @Override
                public void run() {
                    receiveData();
                }
            }).start();

        } catch (IOException e) {
            Toast.makeText(this, "Connection Failed", Toast.LENGTH_SHORT).show();
        }
    }

    private void sendMessage() {
        if (bluetoothSocket == null || !bluetoothSocket.isConnected()) {
            Toast.makeText(this, "Not connected to HC-05", Toast.LENGTH_SHORT).show();
            return;
        }

        String message = editMessage.getText().toString();
        if (!message.isEmpty()) {
            try {
                outputStream.write(message.getBytes());
                Toast.makeText(this, "Message Sent", Toast.LENGTH_SHORT).show();
            } catch (IOException e) {
                Toast.makeText(this, "Failed to send", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void receiveData() {
        byte[] buffer = new byte[1024];
        int bytes;
        while (true) {
            try {
                bytes = inputStream.read(buffer);
                final String receivedMessage = new String(buffer, 0, bytes);

                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        textReceived.setText("Received: " + receivedMessage);
                    }
                });

            } catch (IOException e) {
                break;
            }
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        try {
            if (bluetoothSocket != null) {
                bluetoothSocket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## Relay Module

A relay module is an electronic switching device that uses an electromagnet to mechanically switch electrical circuits. It allows low-power devices (like microcontrollers) to control high-voltage appliances such as lights, fans, and motors.

**Types of Relay Modules**

- Single-channel relay module (controls one device)
- Two-channel relay module (controls two devices)
- Four-channel relay module (controls four devices)
- Eight-channel relay module (controls eight devices)

### Working principle

A relay consists of:

1. **Electromagnet (Coil)** – When voltage is applied to the coil, it creates a magnetic field.
2. **Common (COM) Terminal** – The moving contact that switches between Normally Open (NO) and Normally Closed (NC) terminals.
3. **Normally Open (NO) Terminal** – A terminal that remains disconnected from COM when the relay is off.
4. **Normally Closed (NC) Terminal** – A terminal that is connected to COM when the relay is off.
5. **Switching Mechanism** – When the coil is energized, the COM contact moves from NC to NO.

### Components

1. **Electromagnetic Relay** – The main switching component.
2. **Optocoupler (Isolation Circuit)** – Provides electrical isolation between the control circuit and the relay.
3. **Transistor** – Acts as a switch to activate the relay coil.
4. **Flyback Diode** – Protects against voltage spikes generated when the relay is turned off.
5. **Resistors & Capacitors** – Used for proper circuit operation.
6. **LED Indicators** – Shows relay status (ON/OFF).
7. **Screw Terminals** – Used to connect external devices like AC loads.
8. **Input Pins (VCC, GND, IN)** – To interface with microcontrollers like Arduino or ESP32.

### Structure

- **VCC:** - Power Supply.
- **GND:** - Ground.
- **IN:** - Control Signal.

### Hardware Setup

- **VCC:** - Connect with 5V power supply.
- **GND:** - Connect with GND.
- **IN:** - Connect to an ESP32 GPIO pin (e.g., GPIO23).

**AC Load Connection**

- **COM (Common)** – Connected to one terminal of the AC load.
- **NO (Normally Open)** – Connected to the AC power supply.
- **NC (Normally Closed)** – Usually not used unless needed for normally ON circuits.

### Controlling

```cpp
int relayPin = 7;  // Define relay pin

void setup() {
    pinMode(relayPin, OUTPUT);  // Set relay pin as an output
}

void loop() {
    digitalWrite(relayPin, HIGH);  // Turn ON the relay (AC device ON)
    delay(5000);  // Keep it ON for 5 seconds

    digitalWrite(relayPin, LOW);   // Turn OFF the relay (AC device OFF)
    delay(5000);  // Keep it OFF for 5 seconds
}
```

## OLED Display

OLED stands for Organic Light Emitting Diode. Unlike traditional LCDs that need a backlight, each pixel in an OLED emits its own light. This gives:

- High contrast and sharpness
- Wide viewing angles
- Low power consumption (especially when displaying mostly black)

### Characterstics

- **Self-Emissive:** Each pixel emits its own light (no backlight needed).
- **High Contrast Ratio:** Perfect blacks and vivid colors due to pixel-level lighting.
- **Wide Viewing Angle:** Colors and brightness are consistent from all angles.
- **Fast Response Time:** Excellent for fast-moving visuals (e.g., gaming, videos).
- **Thin and Flexible:** Can be made on plastic substrates → foldable or curved screens.
- **Low Power Consumption (in dark mode):** Only lit pixels consume power.
- **High Brightness and Color Saturation:** Rich and vibrant display output.

### Structure

### Hardware Setup

- **VCC:** Connect to the ESP32's `VIN` (5V) pin.
- **GND:** Connect to the ESP32's `GND`.
- **SDA:** Connect to Arduino A4
- **SCL:** Connect to Arduino A5

### Controlling

Install:

- Adafruit SSD1306 (for controlling the OLED)
- Adafruit GFX (for drawing graphics/text)

```cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1  // Reset pin (not used with I2C)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  Serial.begin(115200);

  // Initialize display
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {  // 0x3C is the I2C address
    Serial.println(F("SSD1306 allocation failed"));
    while (true);
  }

  display.clearDisplay();

  // Display static text
  display.setTextSize(1);              // Text size
  display.setTextColor(SSD1306_WHITE); // Text color
  display.setCursor(0, 0);             // Start at top-left
  display.println("Hello from ESP32!");
  display.display();                   // Push to display
}

void loop() {
  // Nothing needed in loop for this example
}
```

## GSM Module

A GSM module (like SIM800L, SIM900A) allows microcontrollers (like ESP32 or Arduino) to connect to cellular networks and perform functions such as:

- Sending/receiving SMS
- Making/receiving calls
- Accessing mobile internet (GPRS/EDGE)

### Characterstics

- **Communication:** Via AT commands using UART (Serial)
- **Network:** Uses GSM cellular network (2G/3G/4G depending on the module)
- **SIM Support:** Requires a SIM card to function (like a phone)
- **Power Hungry:** Needs regulated power supply (usually 12V or 5V 2A)
- **Real-time Messaging:** Can send/receive SMS instantly
- **Remote Operation:** Works anywhere with GSM signal coverage

### Structure

### Hardware Setup

- **VCC:** Connect to the ESP32's `VIN` (5V) pin.
- **GND:** Connect to the ESP32's `GND`.
- **TX:** Connect to ESP32 GPIO 16
- **RX:** Connect to ESP32 GPIO 17

### Controlling

```cpp
#include <HardwareSerial.h>

HardwareSerial gsmSerial(2); // Use UART2 on ESP32

void setup() {
  Serial.begin(115200);              // Debug via USB
  gsmSerial.begin(9600, SERIAL_8N1, 16, 17); // RX, TX

  Serial.println("Initializing GSM...");

  delay(1000);
  sendSMS("+1234567890", "Hello from ESP32 + SIM800L!");
}

void loop() {
  // Nothing here
}

void sendSMS(String number, String text) {
  gsmSerial.println("AT");             // Check module
  delay(1000);

  gsmSerial.println("AT+CMGF=1");      // Set text mode
  delay(1000);

  gsmSerial.print("AT+CMGS=\"");
  gsmSerial.print(number);
  gsmSerial.println("\"");
  delay(1000);

  gsmSerial.print(text);               // SMS body
  gsmSerial.write(26);                 // CTRL+Z to send
  delay(5000);                         // Wait for confirmation
}
```

### Common AT Commands

- `AT` - Test communication (should respond with OK)
- `AT+CSQ` - Signal quality
- `AT+CCID` - Get SIM card ID
- `AT+CREG?` - Check network registration
- `AT+CMGF=1` - Set SMS text mode
- `AT+CMGS="number"` - Send SMS
- `AT+CMGR=index` - Read received SMS
