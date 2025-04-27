# Contents

- [Basic Constructive Cost Model](#basic-constructive-cost-model)
- [COCOMO II](#cocomo-ii)
- [Halstead Software Metrics](#halstead-software-metrics)
- [Function Point](#function-point)
- [Software Reliability](#software-reliability)
  - [Mean Time to Failure](#mean-time-to-failure)
  - [Mean Time to Repair](#mean-time-to-repair)
  - [Mean Time Between Failures](#mean-time-between-failures)
- [External Product Attribute](#external-product-attribute)
  - [Defect Removal Effectiveness](#defect-removal-effectiveness)
- [Measure Internal Product Attribute](#measure-internal-product-attribute)
  - [Information Flow Metrics](#information-flow-metrics)

# Basic Constructive Cost Model

Basic COCOMO model estimates:

- Effort (in person-months)
- Development time (in months)
- Staffing (persons needed)

It does so based on the size of the software in KLOC (Kilo Lines of Code = 1000 lines of code).

## 1. Identify the Project Type

COCOMO classifies projects into 3 categories:

| Project Type  | Description                                                 | Example                                |
| ------------- | ----------------------------------------------------------- | -------------------------------------- |
| Organic       | Small, simple projects with small teams and good experience | Inventory system                       |
| Semi-Detached | Intermediate complexity with mixed experience teams         | Payroll systems                        |
| Embedded      | Complex projects with tight constraints                     | Operating systems, Air Traffic Control |

## 2. Use the Basic COCOMO Formulas

Each project type has different effort and time constants:

| Project Type  | Effort Equation (PM)   | Time Equation (TDEV)   |
| ------------- | ---------------------- | ---------------------- |
| Organic       | PM = 2.4 × (KLOC)^1.05 | TDEV = 2.5 × (PM)^0.38 |
| Semi-Detached | PM = 3.0 × (KLOC)^1.12 | TDEV = 2.5 × (PM)^0.35 |
| Embedded      | PM = 3.6 × (KLOC)^1.20 | TDEV = 2.5 × (PM)^0.32 |

Where:

- PM = Person-Months (effort)
- TDEV = Time in months (development time)

## 3. Estimate Average Staffing

$$
\text{Average Staffing} = \frac{\text{Effort (PM)}}{\text{Development Time (TDEV)}}
$$

# COCOMO II

COCOMO II (Constructive Cost Model II)—a more advanced and realistic version of the original COCOMO. It handles modern software development better, including reuse, rapid development, and agile practices.

COCOMO II is a software cost estimation model that calculates:

- Effort (person-months)
- Schedule (months)
- Based on size, project complexity, and other modern factors.

It is more accurate than Basic COCOMO and supports:

- Reuse
- Incremental development
- Object-oriented programming
- Agile/Iterative development

## 1. Determine Size of the Project (in KSLOC)

- KSLOC = Kilo Source Lines of Code (1000s of lines).
- Alternatively, you can estimate using function points, which are later converted to KSLOC.

## 2. Determine the Scale Drivers (5 Factors)

These are factors that influence productivity:

| Scale Factor | Meaning                                       |
| ------------ | --------------------------------------------- |
| PREC         | Have you done this kind of project before?    |
| FLEX         | How flexible are the constraints?             |
| RESL         | How well are risks and architecture resolved? |
| TEAM         | How well does the team work together?         |
| PMAT         | How mature is the software process?           |

Each is rated from Very Low (1.24) to Extra High (0.84).

Then, calculate Exponent E:

$$
E = B + 0.01 \times \sum \text{(Scale Driver Factor)}
$$

(Default B = 0.91 in early design model)

## 3. Determine Cost Drivers (17 Effort Multipliers)

In COCOMO II, the 17 Cost Drivers (also called Effort Multipliers - EMs) are grouped into 4 main categories:

### 1. Product Factors

These describe product characteristics that affect effort.

| No. | Cost Driver | Description                                              |
| --- | ----------- | -------------------------------------------------------- |
| 1   | RELY        | How critical is the reliability of the system?           |
| 2   | DATA        | Size of the database relative to code size               |
| 3   | CPLX        | Algorithmic complexity, control structures, etc.         |
| 4   | RUSE        | Extent of code reuse and generalization needed           |
| 5   | DOCU        | Level of documentation required to match lifecycle needs |

### 2. Platform Factors

These describe the software and hardware environmet.

| No. | Cost Driver | Description                                    |
| --- | ----------- | ---------------------------------------------- |
| 6   | TIME        | Execution speed constraints                    |
| 7   | STOR        | Memory limitations                             |
| 8   | PVOL        | Frequency of platform changes (hardware or OS) |

### 3. Personnel Factors

These relate to skills and capabilities of the team.

| No. | Cost Driver | Description                                    |
| --- | ----------- | ---------------------------------------------- |
| 9   | ACAP        | Skill of system analysts                       |
| 10  | PCAP        | Skill of software developers                   |
| 11  | PCON        | Staff turnover rate                            |
| 12  | APEX        | Experience with this type of application       |
| 13  | PLEX        | Experience with tools, OS, hardware            |
| 14  | LTEX        | Experience with programming language and tools |

### 4. Project Factors

These refer to tools, methods, and project setup.

| No. | Cost Driver | Description                                     |
| --- | ----------- | ----------------------------------------------- |
| 15  | TOOL        | Degree of automation (CASE tools, IDEs)         |
| 16  | SITE        | Development team distribution and communication |
| 17  | SCED        | Required development schedule                   |

Each is rated (Very Low to Extra High), and has an associated multiplier value.

Multiply all the 17 EMs to get the Effort Adjustment Factor (EAF).

## 4. Effort Estimation

$$
\text{Effort (PM)} = A \times \text{EAF} \times (\text{KSLOC})^E
$$

Where:

- A = 2.94 (in Post-Architecture Model)
- E = Exponent from Step 2
- KSLOC = Estimated size
- EAF = Effort Adjustment Factor from Step 3

$$
SE = 0.28 + 0.2 \times (\text{Sum of the 5 Scale Drivers})
$$

$$
\text{Duration (TDEV)} = 1.67 \times (\text{Effort})^{SE}
$$

$$
\text{Team Size} = \frac{\text{Effort (PM)}}{\text{Schedule (TDEV)}}
$$

- EAF Is the Effort Adjustment Factor derived from the Cost Drivers.
- E Is an exponent derived from the five Scale Drivers.
- SE Is the schedule equation exponent derived from the five Scale Drivers

# Halstead Software Metrics

It is based on the idea that software complexity can be measured quantitatively by looking at the operators and operands in a program.

It treats a program like a collection of tokens (symbols), such as keywords, variables, constants, etc.

## Steps

### 1. Count the Basic Program Elements

| Symbol | Meaning                                                  |
| ------ | -------------------------------------------------------- |
| n1     | Number of distinct operators (e.g., `+`, `=`, `if`)      |
| n2     | Number of distinct operands (e.g., variables, constants) |
| N1     | Total number of operator occurrences                     |
| N2     | Total number of operand occurrences                      |

#### Counting Rules

- **Ignore comments and function declarations.**

- **Global variables used in different modules** → counted multiple times.

- **All variables and constants** → counted as operands.

- **Function calls** → counted as operators.

- **Local variables with the same name in different functions** → counted as unique operands.

- **Control statements (if, else, for, while, do-while, etc.)** → counted as operators.

- **In switch-case**, both **switch** and each **case** → counted as operators.

- **Brackets, commas, and terminators (;)** → counted as operators.

- **Reserved words (return, break, continue, sizeof, etc.)** → counted as operators.

- **GOTO** → counted as an operator; the **label** → counted as an operand.

- **Unary and binary uses of +, -, and \*** → counted separately.

- **In arrays (array[index])**:

  - **array** and **index** → operands,
  - **[]** → operator.

- **In structures (struct.member, struct->member)**:

  - **struct** and **member** → operands,
  - **.** and **->** → operators.

- **Same member names in different structs** → counted uniquely.

- **Hash directives (like #include)** → ignored.

### 2. Compute Program Vocabulary and Length

**Vocabulary (n):**

$$
n = n_1 + n_2
$$

**Program Length (N):**

$$
N = N_1 + N_2
$$

## 3. Compute Volume

$$
V = N \times \log_2(n)
$$

- Volume represents the size of implementation.
- Unit: bits (information content)

### 4. Compute Difficulty

$$
D = \frac{n_1}{2} \times \frac{N_2}{n_2}
$$

Difficulty shows how hard it is to understand or maintain the code.

### 5. Compute Effort

$$
E = D \times V
$$

- Effort represents the mental activity required to develop or understand the software.
- Unit: elementary mental discriminations (or effort units)

### 6. Compute Time

$$
T = \frac{E}{18}
\quad \text{(in seconds)}
$$

18 is a Halstead constant representing the number of mental operations per second.

### 7. Compute Estimated Bugs

$$
B = \frac{E^{\frac{2}{3}}}{3000}
$$

B gives an estimate of the number of bugs in the code.

## Example

```cpp
#include <stdio.h>

int main() {
    int a = 5, b = 10, sum;
    sum = a + b;
    printf("%d", sum);
    return 0;
}
```

### Term and Count

| Term                                | Count                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------- |
| **Distinct Operators** (n₁)         | 7 (=, +, ,, ;, (), printf, return)                                                  |
| **Distinct Operands** (n₂)          | 6 (a, b, sum, 5, 10, 0)                                                             |
| **Total Operator Occurrences** (N₁) | 10 (one =, one ,, one =, one +, one ;, one printf, one (, one ), one return, one ;) |
| **Total Operand Occurrences** (N₂)  |                                                                                     |

# Function Point

Function Points are a way to measure the size and functionality of software based on what it does, not how it’s coded.

It measures software from the user’s perspective: inputs, outputs, files, etc.

- It is useful because:
- It can be used before coding starts.
- It helps estimate effort, cost, and time.
- It is language-independent (works for Java, Python, etc.)

FPA measures software size in terms of function points — a unit representing the software's functional requirements as seen from the user’s perspective. It doesn’t consider technical details but focuses on what the software does

## Steps

### 1. Identify and Classify the System Components

There are 5 types of components:

| Component                      | Meaning                                                | Example                           |
| ------------------------------ | ------------------------------------------------------ | --------------------------------- |
| External Inputs (EI)           | Data coming into the system                            | Login form, Order form            |
| External Outputs (EO)          | Data going out from the system                         | Invoice print, Report generation  |
| External Inquiries (EQ)        | User queries that retrieve data                        | Search function                   |
| Internal Logical Files (ILF)   | Logical groups of internal data                        | Customer Database                 |
| External Interface Files (EIF) | Files managed by other systems but used by your system | Supplier Info from another system |

### External Input vs Internal Logical File

| Feature             | External Input (EI)                                                | Internal Logical File (ILF)                                             |
| ------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Definition          | Data entering into the system from outside (like forms, inputs)    | Logical data storage managed inside the system (like databases, tables) |
| User Interaction    | User or external system provides input                             | System stores and manages this data internally                          |
| Main Purpose        | Modify internal data (create, update) or trigger processes         | Hold information for the system's internal use                          |
| Example             | - Add new book<br>- Update user information<br>- Submit login form | - Books database<br>- Members database<br>- Issued books record         |
| Data Movement       | Data comes from outside → into system                              | Data is inside system → managed internally                              |
| Function Point Role | Counted when new data enters the system                            | Counted based on internal data structure                                |

### 2. Assign a Weight to Each Component

Each component is assigned a complexity level (Simple, Average, Complex) and given a weight.
| Component | Simple | Average | Complex |
|-----------|--------|---------|---------|
| EI | 3 | 4 | 6 |
| EO | 4 | 5 | 7 |
| EQ | 3 | 4 | 6 |
| ILF | 7 | 10 | 15 |
| EIF | 5 | 7 | 10 |

### 3. Calculate the Unadjusted Function Points

$$ \text{UFP} = \sum (\text{Number of components} \times \text{Weight}) $$
Simple addition of all the weighted components.

### 4. Calculate the Value Adjustment Factor

There are 14 general system characteristics (GSCs)

| GSC                         | Meaning                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Data Communications         | How much the system relies on communication with other systems? (e.g., online data transfer)                    |
| Distributed Data Processing | Does the system use multiple computers or locations for processing?                                             |
| Performance                 | Are there special speed or response time requirements? (e.g., fast search)                                      |
| Heavily Used Configuration  | Is the system expected to run on high-traffic, highly used environments (like limited hardware)?                |
| Transaction Rate            | Will the system handle a high number of transactions per unit time? (e.g., lots of library book issues per day) |
| Online Data Entry           | Does the system allow entering data directly in real-time? (vs. batch input)                                    |
| End-User Efficiency         | Is the system designed for easy and fast use by non-technical users? (good UI/UX)                               |
| Online Update               | Can the system update master files instantly through online entries?                                            |
| Complex Processing          | Are there complex calculations, business rules, or algorithms involved?                                         |
| Reusability                 | Will parts of the system be reused for future applications or modules?                                          |
| Installation Ease           | How easy is it to install and set up the system on different machines?                                          |
| Operational Ease            | How easy is it to operate, monitor, backup, and recover the system?                                             |
| Multiple Sites              | Will the system be deployed and used at different physical locations?                                           |
| Facilitate Change           | How easily can the system be changed later (modifications, enhancements)?                                       |

Each factor is rated from 0 (Not Important) to 5 (Essential).

Sum of all GSC scores = Total Degree of Influence (TDI) = $ \sum (f_i) $

$$ \text{VAF} = (\text{TDI} \times 0.01) + 0.65 $$

TDI ranges from 0-70 which follows VAF ranges from 0.65-1.35.

Scale varies from 0 to 5 according to character of Complexity Adjustment Factor (CAF). Below table shows scale:

- 0 - No Influence
- 1 - Incidental
- 2 - Moderate
- 3 - Average
- 4 - Significant
- 5 - Essential

### 5. 5: Calculate the Final Function Points

$$ \text{Final FP}= \text{UFP} \times \text{VAF} $$
This gives the true function points that can be used for effort and cost estimation.

## Limitations

- **Subjectivity:** Different people may assess complexity differently, making results inconsistent.
- **Double Counting:** Risk of counting the same functionality more than once.
- **Accuracy Problems:** Function points give only rough estimates, not precise measurements.
- **Learning Difficulty:** It’s hard to learn and apply correctly without proper training.

- **Time-Consuming:** The analysis process takes a lot of time, especially for large systems.

# Software Reliability

- Failure is when software does the wrong thing.
- Fault (bug) is what causes a failure.
- Error is the mistake you see when something goes wrong.
- Reliability means how likely the software works without breaking.
- Failure Rate is how often it fails.
- Availability is how often it’s ready to use.
- MTBF is the average time between failures.
- Fault Tolerance means the system keeps working even if something goes wrong.
- Testing finds mistakes, and fault injection tests how strong the system is.
- Maintenance fixes problems and keeps the software reliable.
- Metrics help measure and track reliability.

## Mean Time to Failure

MTTF measures the average time a system or component works properly before it fails for the first time. It is mainly used for hardware components or non-repairable systems. It is a reliability metric — it helps us predict how reliable a product is over time.

- On average, how long will this system work before it fails?
- Used for things you can't fix — like a light bulb
  - If 1,000 light bulbs burn out after 1,200 hours on average, the MTTF is 1,200 hours.

### Calculate

- Collect Failure Data
- Record start time when the system begins working
- Record failure time when it stops working
- Sum up the all times to failure(failure time-start time)
- Divide by the number of observations

## Mean Time to Repair

MTTR measures the average time it takes to repair a system or component after a failure. It reflects how quickly a system can be fixed and restored after something goes wrong. MTTR is a key maintenance and support metric.

- On average, how much time is needed to fix a system when it fails?

**Example: Server in a data center**

- If a server crashes and it takes **3 hours to identify the issue**, replace a faulty component, and reboot the system, the repair time is 3 hours.
- If the server fails **5 times in a month**, and the total repair time adds up to 15 hours, the MTTR would be:

$$ \text{MTTR} = \frac{15 \text{ hours}}{5 \text{ failures}} = 3 \text{ hours} $$

## Mean Time Between Failures

MTBF measures the average time between two consecutive failures of a repairable system or component.

It combines:

- Operating time (system running fine)
- Repairing time (fixing after a failure)

- MTBF helps estimate system reliability and how often failures occur.
- How much time, on average, passes before the system fails again?

$$ MTBF = MTTF + MTTR $$
$$ 𝑀𝑇𝐵𝐹 = \frac{Total Operational Time}{Number of Failures} $$
$$ \text{Availability} = \frac{\text{MTTF}}{\text{MTTF} + \text{MTTR}} $$

**Example:**

- The app runs for 500 hours before crashing.
- After a fix, it runs for 700 hours.
  -Then it crashes again after 600 hours.
- You can calculate MTBF like this: 500+700+600/3 = 600 hours

# External Product Attribute

## Defect Removal Effectiveness

Defect Removal Effectiveness (DRE) is a software quality metric that measures how effectively defects (bugs) are detected and removed during the development process before release. It tells us how good your testing and review process is.

$$ \text{DRE} = \frac{\text{Defects removed during a development phase} \times 100\%}{\text{Defects latent in the product at that phase}} $$

or

$$ \text{DRE} = \frac{\text{Defects found before release} \times 100\%}{\text{Defects found before release} + \text{Defects found after release}} $$

- **High DRE** means the team catches most defects before release.
- **Low DRE** indicates that many defects slip through to production

### Example

<img src="./../images/software-metrics/dre_example.png" >

# Measure Internal Product Attribute

## Information Flow Metrics

Information Flow Metrics are a set of software engineering measurements that analyze how information moves between modules or components in a system.
They measure the complexity of a program based on the amount of information coming into and going out of a module.

Instead of just looking at lines of code or cyclomatic complexity, information flow metrics focus on communication and dependencies between parts of the program.

### Concepts

1. **Fan-in (FI):**

   - The number of modules that pass information into a given module.
   - More fan-in → The module is used a lot (important or heavily depended upon).

2. **Fan-out (FO):**

   - The number of modules to which a given module sends information.
   - More fan-out → The module depends on many others (potentially fragile or complex).

3. Information Flow Complexity (IFC) (also called Information Flow Metric):

   - A way to measure the complexity using fan-in and fan-out.
   - The formula is:

$$ \text{Complexity} = ( \text{Fan-in} \times \text{Fan-out} )^2 $$

### Example

```
   [A] Main Controller
    | \
    |  \
    v   v
 [B]   [C]
User   Order
Service Service
    |
    v
  [D]
Payment
Service
```

| Module | Fan-In (FI)        | Fan-Out (FO) |
| ------ | ------------------ | ------------ |
| A      | 0 (no one calls A) | 2 (B and C)  |
| B      | 1 (called by A)    | 1 (D)        |
| C      | 1 (called by A)    | 0            |
| D      | 1 (called by B)    | 0            |

**Compute Information Flow Complexity:**

For A:
$$ \text{(FI} \times \text{FO)}^2 = (0 \times 2)^2 = 0 $$

For B:
$$ \text{(FI} \times \text{FO)}^2 = (1 \times 1)^2 = 1 $$

For C:
$$ \text{(FI} \times \text{FO)}^2 = (1 \times 1)^2 = 1 $$

For D:
$$ \text{(FI} \times \text{FO)}^2 = (1 \times 1)^2 = 1 $$

**Interpretation**

- B is a small, but somewhat important module (low complexity but some dependency).
- A is a controller with outgoing calls but not called by others (hence complexity is 0).
- C and D are simple modules — no fan-out.

## Control Flow Metrics

Control Flow describes the order in which individual instructions, statements, or function calls are executed or evaluated in a program.

When you write code, it’s not just one straight line — there are conditions, loops, decisions, and branches.
Control Flow Structures define how the execution path moves.

### Types of Control Flow Structures

| Type                     | Description                                | Example                                        |
| ------------------------ | ------------------------------------------ | ---------------------------------------------- |
| **Sequential**           | One statement after another.               | `a = b + c; printf("%d", a);`                  |
| **Decision/Branching**   | Execution splits based on a condition.     | `if (x > 0) { y = 1; } else { y = -1; }`       |
| **Looping**              | Repeating a set of statements.             | `for (i = 0; i < 5; i++) { printf("%d", i); }` |
| **Case/Switch**          | Choosing one branch from multiple options. | `switch (n) { case 1: ... case 2: ... }`       |
| **Jump/Branch Transfer** | Jumping to another point in code.          | `goto label;`                                  |

### Example

```cpp
#include <stdio.h>

int main() {
    int a = 10, b = 5;
    if (a > b) {
        printf("a is greater\n");
    } else {
        printf("b is greater\n");
    }
    printf("Done\n");
    return 0;
}
```

#### Control Flow Breakdown:

1. **Start program**

2. **Assign a and b**

3. **Decision**: `if (a > b)`

   - **If true**: print `"a is greater"`
   - **Else**: print `"b is greater"`

4. **Continue**: print `"Done"`

5. **End program**

#### Control Flow Graph

```
(Start) → [Assign a, b] → (Decision: a > b?)
              ↙               ↘
 [Print a greater]    [Print b greater]
              ↘               ↙
             [Print Done]
                 ↓
               (End)
```
