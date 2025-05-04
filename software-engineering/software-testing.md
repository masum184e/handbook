# Contents

- [Introduction](#introduction)
  - [Importance](#importance-of-software-testing)
  - [Objectives](#objectives)
  - [Software Development Lifecycle](#software-development-lifecycle)
  - [Role of Testing in SDLC](#role-of-testing-in-sdlc)
  - [ISTQB Certification](#istqb-certification)
    - [Structure](#structure)
    - [Benefits](#benefits)
  - [Quality assurance and testing](#differences-between-quality-assurance-and-testing)
- [Terminology](#terminology)
  - [Bug Life Cycle](#bug-life-cycle)
  - [States of Bug](#states-of-bug)
  - [Classification of Bugs](#classification-of-bugs)
  - [Bug Report Best Practices](#bug-reporting-best-practice)
  - [Software Testing Life Cycle](#software-testing-life-cycle)
  - [Testing Methodology](#testing-methodology)
  - [Testing Life Cycle Model](#testing-life-cycle-model)
    - [V Testing](#v-testing)
    - [Validation Activities](#validation-activitieslevel-of-testing)
  - [Software Testing Principle](#software-testing-principle)
- [Verification and Validation](#verification-and-validation)
  - [SDLC Phases](#sdlc-phases)
  - [Verification](#verification)
  - [Validation](#validation)
- [Black Box Testing](#black-box-testing)
  - [Boundary Value Analysis](#boundary-value-analysis)
  - [Equivalence Class Testing](#equivalence-class-testing)
  - [State Table Based Testing](#state-table-based-testing)
  - [Decision Table Based Testing](#decision-table-based-testing)
  - [Cause Effect Testing](#cause-effect-testing)
- [White Box Testing](#white-box-testing)
  - [Basis Path Testing](#basis-path-testing)
    - [Control Flow Graph](#control-flow-graph)
    - [Cyclomatic Complexity](#cyclomatic-complexity)
  - [Graph Matrix](#graph-matrix)
  - [Loop Testing](#loop-testing)
  - [Data Flow Testing](#data-flow-testing)
  - [Mutation Testing](#mutation-testing)
- [Static Testing](#static-testing)
  - [Technical Reviews](#technical-reviews)
  - [Inspection](#inspection)
  - [Walkthrough](#walkthrough)
  - [Static vs Dynamic](#static-testing-vs-dynamic-testing)
- [Risk Based Testing](#risk-based-testing)
- [Regression Testing](#regression-testing)
- [Smoke Testing](#smoke-testing)
- [Sanitiy Testing](#sanitiy-testing)

# Introduction

Software testing is the process of evaluating a software application or system to identify any defects or bugs and ensure that the software meets the specified requirements and expectations. It involves executing the software components to validate that the product is functioning correctly, efficiently, and securely.

## Importance of Software Testing

1. **Ensures Software Quality:** Testing helps maintain high quality by identifying defects early in the development cycle. This leads to a more reliable and robust product.

2. **Detects and Fixes Bugs Early:** Early detection of bugs saves time and cost. Bugs found after deployment are more expensive to fix.

3. **Validates Functional and Non-Functional Requirements:** Testing ensures that the software performs its intended functions (functional) and meets user experience, performance, and security standards (non-functional).

4. **Improves User Satisfaction:** A bug-free and smooth-performing application increases user confidence and satisfaction.

5. **Reduces Maintenance Costs:** Well-tested software is easier and cheaper to maintain over time due to fewer errors and system crashes.

## Objectives

1. **Detect Defects:** Software is rarely written perfectly in the first attempt. Testing helps uncover defects in the code, design, or logic.

2. **Verify Functionality:** Functional testing checks if the system behaves correctly for various input combinations.

3. **Validate Software Requirements:** Confirm that the developed software matches the user requirements and expectations.

4. **Improve Software Quality:** Testing uncovers usability issues, performance bottlenecks, and security holes.

5. **Prevent Future Defects:** Identify potential problem areas and fix them to prevent defects in future releases.

## Software Development Lifecycle

1. **Requirement Analysis:** Understand what the software should do (functional and non-functional requirements).
2. **Design:** Plan testing strategies for components, integrations, and user workflows.
3. **Implementation:** Developers build the software based on design specifications.
4. **Testing:** Verify and validate the software to detect defects.
5. **Deployment:** Move the software to the live production environment.
6. **Maintenance:** Monitor and update software to fix bugs or add new features.

## Role of Testing in SDLC

1. **Requirement Analysis:** Involve testers early to understand what needs to be tested.
2. **Design:** Review design documents to ensure the system architecture supports testability.
3. **Implementation:** Unit testing is done by developers to test individual components.
4. **Testing:** Perform different levels of testing (functional, integration, system, regression).
5. **Deployment:** Conduct User Acceptance Testing (UAT) to confirm the system is ready for live use.
6. **Maintenance:** Conduct regression testing when updates or patches are made.

## ISTQB Certification

### Structure

1. **Foundation Level (CTFL)**
   - Entry-level certification
   - Suitable for beginners or those with basic knowledge of software testing
   - Covers core testing concepts, test design techniques, and test management basics
2. **Advanced Level (CTAL)**

- For professionals with experience in testing
- Includes modules like:
  - Test Analyst
  - Technical Test Analyst
  - Test Manager

3. **Expert Level**
   - Focuses on strategic leadership and advanced testing skills
   - Suitable for those in senior roles, e.g., managing test teams or setting organizational policies

### Benefits

1. **International Recognition**
   - ISTQB is accepted in over 130 countries.
   - It adds credibility and professional recognition to your profile.
2. **Improved Testing Skills**
   - It helps testers learn structured, industry-standard practices.
   - Strengthens concepts like boundary value analysis, equivalence partitioning, and risk-based testing.
3. **Career Advancement**
   - Certification can lead to promotions, new job opportunities, or a shift into test management or specialized roles
4. **Common Language and Framework**
   - ISTQB teaches terminology (e.g., defect, test case, regression) that standardizes communication across teams and projects.
5. **Higher Salary Potential**
   - Many organizations offer better compensation packages for certified testers.
   - Certification proves commitment to the profession and expertise.

## Differences between quality assurance and testing

| **Factor**         | **Quality Assurance (QA)**               | **Software Testing**                   |
| ------------------ | ---------------------------------------- | -------------------------------------- |
| **Objective**      | Prevent defects                          | Detect defects                         |
| **Orientation**    | Process-oriented                         | Product-oriented                       |
| **Activities**     | Process audits, quality reviews          | Test case design, test execution       |
| **Timeline**       | Begins early (even before coding)        | Begins after code is ready for testing |
| **Responsibility** | QA team, Project Managers, Devs, Testers | Testers or QA Engineers                |
| **Example Output** | Process documents, compliance reports    | Test reports, defect logs              |

# Terminology

**Failure:** Occurs when a system or component does not perform a required function as specified. It is observed when actual behavior differs from expected behavior.

**Fault/Defect/Bug:** A condition in the system that causes a failure. Bugs exist in the software and may or may not lead to failures, depending on whether they are executed.

**Error:** A mistake made by a developer during any phase of the software development lifecycle (SDLC), which leads to bugs and subsequently failures.

**Test Case:** A documented procedure designed to verify a feature’s functionality. It includes:

- **Test Case ID:** A unique identifier.
- **Purpose:** The objective of the test.
- **Preconditions:** Any necessary conditions before execution.
- **Inputs:** Specific test data.
- **Expected Outputs:** The anticipated results if the system works correctly.

**Testware:** Documents created during testing, including test plans, test specifications, test case designs, and test reports. These should be maintained like software products.

**Incident:** The symptom(s) of a failure that notify the user of an issue.

**Test Oracle:** A mechanism to determine test success or failure, often by comparing actual and expected results. Automated oracles reduce manual effort.

## Bug Life Cycle

Errors can be introduced at any phase of the Software Development Life Cycle (SDLC) by any member of the development team. If an error is not detected in the same phase, it turns into a bug in the next phase. This bug then propagates through various stages, making it harder to detect and fix later.

The bug life cycle is divided into two main phases:

1. Bugs-In Phase
2. Bugs-Out Phase

**Bugs-In Phase:** It refers to the introduction of errors and bugs into the software. If an error is not detected and corrected early, it becomes a bug in the next phase. Each phase may contain its own errors as well as bugs carried over from previous phases.

**Bugs-Out Phase:** It focuses on detecting, classifying, isolating, and resolving bugs that are found during testing.

1. **Bug Classification:** Bug is classified based on severity. It helps to priotize high-impact bugs.
   - Critical: Causes system crashes or major failures.
   - Major: Affects functionality but does not crash the system.
   - Minor: Has little or no impact on the system’s output.
2. **Bug Isolation:** The goal is to identify the exact module in which the bug occurs. By examining failure symptoms and tracing the software design, testers locate the specific code or condition causing the bug.
3. **Bug Resolution:** The developer fixes the issue, and the tester retests to verify that the bug is resolved. Once confirmed, the bug is marked as closed.

## States of Bug

<img src="./../images/software-testing/state_of_bug.png" >

1. **New:** The bug is reported first time by a tester.
2. **Open:** Tester review the reported bug to check if it is genuine or not. If the bug is valid, it's state change from new to open, otherwise it may be rejected.
3. **Assign:** An open bug is forwared to the development team, who will fix the bug and it's state change to assign.
4. **Deferred:** If the dev finds that:

   - Bug does not have high priority.
   - Not enough time to fix before the release.

   Then bug is postponed for future release and it's status changed to deferred

5. **Rejected:** If the dev determines

   - Bug is invalid.
   - Duplicate of existing bug.

   Then it's status changed to rejected

6. **Test:** After fixing the bug by developer, it is sent back to the testing team for verification and state changes to Test indicating bug has been fixed but not yet verified.
7. **Verified:** Tester verifys the bug, if the fix is successful, state updated to verified
8. **Reopened:** Testing team find that the bug is still exist, state changes to reopen and the bug goes through the cycle again until it completely resolved.
9. **Closed:** Bug is completely fixed and verified and testing team confirm that it no longher exist, the bug is marked as closed.

## Why do Bugs Occur?

- Developers make mistakes due to distractions, stress, or misinterpretation of requirements.
- Incorrect or incomplete requirements gathering leads to incorrect implementation.
- Frequent modifications create confusion and introduce unintended defects.
- Removing or modifying parts of code without proper cleanup can cause residual bugs.

## Economic Impact

- Detecting bugs before coding is 50% effective, while testing after coding is 80% effective.
- The cost of fixing a bug increases exponentially as it progresses through SDLC:
  - Early-stage detection (requirement phase): Near zero cost.
  - After coding and testing: 10 times more expensive.
  - After product release: 100 times more costly.

## Classification of Bugs

### Classification Based on Criticality

1. **Critical Bugs** – Cause system crashes, hangs, or complete failure.  
   _Example: A sorting program that freezes after input._

2. **Major Bugs** – Do not stop the software but lead to functional failure.  
   _Example: Incorrect sorting output._

3. **Medium Bugs** – Cause minor deviations from expected standards, such as redundant or truncated output.

4. **Minor Bugs** – Do not affect functionality but cause small issues like typographical errors or misaligned prints.

### Classification Based on SDLC Phases

1. **Requirements & Specification Bugs**

   - Most of the bugs appear here.
   - if bugs go undetected here, they propagate into subsequent phases.

2. **Design Bugs**

   - **Control Flow Bugs** – Missing paths, unreachable paths, etc.
   - **Data Flow Bugs** – Issues like uninitialized or improperly formatted data.
   - **Logic Bugs** – Incorrect case handling, Boolean evaluation errors.
   - **Processing Bugs** – Arithmetic mistakes, overflow errors.
   - **Error Handling Bugs** – Lack of exception handling, misleading error messages.
   - **Race Condition Bugs** – Bugs caused by timing issues.
   - **Boundary-Related Bugs** – Failures at min/max input limits.
   - **User Interface Bugs** – Confusing UI, missing or incorrect feedback.

3. **Coding Bugs**

   - Errors such as undeclared variables, dangling code, incorrect documentation.

4. **Interface & Integration Bugs**

   - Issues in module compatibility, data sharing, incorrect function calls.

5. **System Bugs**

   - Failures in performance, stress testing, compatibility, or usability under extreme conditions.

6. **Testing Bugs**
   - Mistakes made by testers, such as missing issues, ineffective test cases, or failure to verify fixes.

## Bug Reporting Best Practice

1. **Provide a Clear and Descriptive Title**

   - The title should be concise but informative. It should summarize the issue without ambiguity.
   - Bad Example: App crashes
   - Good Example: Application crashes when selecting "Save As" after entering invalid filename

2. **Include a Unique Bug ID**

   - Every bug should have a unique identifier for tracking. Bug tracking tools (JIRA, Bugzilla, etc.) assign unique IDs automatically.

3. **Specify the Environment Details**
   - Mention the operating system, device, browser/version, software version, and any relevant dependencies.
   ```
   OS: Windows 10 Pro 64-bit
   Application Version: 2.1.5
   Browser: Chrome 115.0.5790.170
   ```
4. **Steps to Reproduce**
   - Clearly outline step-by-step instructions to recreate the bug.
   ```
   1. Open the application.
   2. Navigate to the "File" menu.
   3. Click on "Save As."
   4. Enter an invalid filename (e.g., "/invalid?name").
   5. Click "Save."
   ```
5. Expected vs. Actual Behavior

- **Expected Behavior:** What should happen when performing the steps.
- **Actual Behavior:** What happens instead.
  ```
  Expected: The application should show an error message like "Invalid filename."
  Actual: The application crashes with an unhandled exception.
  ```

6. **Attach Screenshots, Videos, or Logs**

- Screenshots or recordings provide visual proof and help developers understand the issue.
- Log files or stack traces from the console or error logs give insights into the root cause.

7. **Severity and Priority**

- **Severity:** How serious the issue is (Critical, High, Medium, Low).
- **Priority:** How soon it should be fixed (Urgent, High, Medium, Low).

8. Check for Duplicates
   Before reporting, check if the bug already exists in the system to avoid redundancy.

9. **Provide Additional Notes (if needed)**

- Include details like:
  - Whether the bug is intermittent or always occurs.
  - Possible workarounds.

## Software Testing Life Cycle

Software Testing Life Cycle (STLC) is a systematic process of testing a software application to ensure it meets the specified requirements.

Here, we will discuss the six key phases of STLC:

1. Planning
2. Design
3. Execution
4. Reporting & Fixing
5. Regression Testing
6. Test Closure

**Planning:**

- define test stategy and objective.
- estimate number of test case and their duration & cost.
- identify area of risk.

**Design:**

- tester create detailed test cases covering different scenarios.

**Execution:**

- tester execute the test cases and compare actual results with expected results.
- if bug found, it is logged in a bug tracking tool.

**Reporting & Fixing:**

- all test failures are reported to developers with details.
- developers analyze and fix the defects.

**Regression Testing:**

- once fixed, test cases are re-executed to verify the fix.

**Test Closure:**

- a summary is created with total test cases executed, number of defects found & fixed, number of remaining risk.

### Quick Recap

| **STLC Phase**         | **Key Activities**                 | **Deliverables**                   |
| ---------------------- | ---------------------------------- | ---------------------------------- |
| **Planning**           | Define scope, create a test plan   | Test Plan Document                 |
| **Design**             | Create test cases & test data      | Test Cases, Test Scripts           |
| **Execution**          | Run test cases & log defects       | Test Execution Report, Defect Logs |
| **Reporting & Fixing** | Report bugs & verify fixes         | Bug Report, Fix Confirmation       |
| **Regression Testing** | Re-run tests after fixes           | Regression Test Report             |
| **Test Closure**       | Summarize results, lessons learned | Test Summary Report                |

## Testing Methodology

<img src="./../images/software-testing/testing_methodology.png" />

### Testing Strategy

A software testing strategy is a structured plan that outlines the testing process in a series of well-defined steps to achieve specific goals. The primary goal is to reduce risks associated with software development.

#### Components of a Testing Strategy:

1. **Test Factors:** Risk-related aspects of the system that need to be prioritized and mitigated.
2. **Test Phases:** Stages of the Software Development Life Cycle (SDLC) where testing is performed, varying by development model (e.g., waterfall, spiral).

#### Test Strategy Matrix:

A test strategy matrix is a structured tool that helps in test planning by mapping test factors to test phases. The key steps in creating this matrix include:

- Selecting and ranking test factors based on system requirements.
- Identifying test phases in the SDLC.
- Identifying and assessing risks associated with each test factor.
- Planning mitigation strategies for identified risks.

#### Development of Test Strategy:

- Testing should start from the smallest unit (component level) and progress toward full system integration.
- The strategy must account for constraints like cost, schedule, and resource availability.
- A combination of Verification and Validation ensures software correctness:

## Testing Life Cycle Model

<img src="https://images.javatpoint.com/tutorial/software-engineering/images/software-engineering-v-model.png" />

### V-Testing

The V-Testing model is a software development and testing approach where development and testing occur concurrently.

### Validation Activities/Level of Testing

1. **Unit Testing**
   - Performed on the smallest module of the system.
   - Identifies bugs early before they become latent.
   - Ensures a single module functions as per specifications.
2. **Integration Testing**

   - Combines unit-tested modules and tests their interaction.
   - Ensures modules communicate correctly through interfaces.
   - Checks data structures, message formats, and interdependencies.

3. **System Testing**
   - Tests the entire integrated system.
   - Validates functionality for different users and environments.
   - Confirms that the system meets requirement specifications.

## Software Testing Principle

1. **Effective Testing over Exhaustive Testing** – Testing all possible cases is impractical; instead, focus on testing strategies that effectively cover program logic and conditions.

2. **Testing is Continuous in SDLC** – It is not limited to post-coding; it begins with requirement specifications and continues through product release.

3. **Destructive Approach for Constructive Results** – Testers must assume bugs exist and actively seek them out, leading to more effective testing.

4. **Early Testing is Cost-Effective** – Detecting bugs early reduces costs, as fixing them later becomes more difficult and expensive.

5. **Error Clustering** – Bugs tend to be concentrated in certain modules, so focus testing efforts on historically error-prone areas.

6. **Incremental Testing** – Start testing at the smallest module level and progressively expand towards the entire system.

7. **Independent Testing Teams** – Developers are not the best testers for their own code due to bias; an independent testing team is more effective.

8. **Comprehensive Documentation** – Every test case, input, output, and bug must be recorded for future reference and learning.

9. **Testing with Invalid Inputs** – Test with unexpected inputs and behaviors, as they often reveal hidden errors.

10. **Testers in Design Reviews** – Testers should be involved in specification and design discussions to ensure all specified behaviors are tested and no unnecessary test cases are created.

### Application

1. **Effective Testing Over Exhaustive Testing:** In banking applications, testing every possible transaction scenario is impossible. Instead, risk-based testing is used, focusing on high-priority cases like large transactions, security authentication, and account transfers.

2. **Testing Throughout the SDLC:** In agile development, testing starts early with unit tests and continues through integration and system testing. Continuous testing in CI/CD pipelines ensures early bug detection before deployment.

3. **Destructive Approach for Constructive Results:** Security testing for an e-commerce website involves ethical hacking to uncover vulnerabilities like SQL injection or cross-site scripting. Testers actively assume weaknesses exist and try to exploit them.

4. **Early Testing to Reduce Costs:** In embedded software for automotive systems, requirements are tested using simulations before hardware development. Identifying issues at this stage prevents costly recalls after production.

5. **Error Clustering (Defect Concentration) Principle:** In mobile applications, crash analytics tools (e.g., Firebase, BugSnag) help identify modules with frequent failures, allowing testers to focus efforts on those areas first.

6. **Incremental Testing Approach:** In enterprise software, testing starts with individual microservices before moving to API integration tests, system testing, and full-scale user acceptance testing (UAT).

7. **Independent Testing Teams:** A social media platform's development team creates features, but an independent quality assurance (QA) team conducts usability, performance, and security testing to avoid developer bias.

8. **Comprehensive Documentation:** In healthcare applications, detailed test reports are maintained for regulatory compliance (e.g., FDA approval for medical software), ensuring transparency and traceability.

9. **Testing with Invalid Inputs:** ATM software is tested with incorrect PIN entries, expired cards, and invalid withdrawal amounts to check how the system handles errors gracefully.

10. **Testers in Specification & Design Reviews:** In ERP software development, testers review requirement documents to ensure test cases align with business rules, avoiding gaps between expected and actual implementation.

# Verification and Validation

<img src="./../images/software-testing/v_diagram.png" />

**V-diagram provides the following insights:**

- Testing can be implemented in the same flow as for the SDLC.
- V-diagram supports the concept of early testing.
- V-diagram supports parallelism in the activities of developers and testers.
- Testing must be performed at every step of
  SDLC.
- Testers should be involved in the development process.

<img src="./../images/software-testing/v_and_v_diagram.png" />

## SDLC Phases

1. **Requirements Gathering** – Collecting user needs and documenting them in a non-technical format.

2. **Requirement Specification** – Translating user needs into developer terminology in a Software Requirement Specification (SRS) document.

3. **High-Level Design (HLD)** – Creating a functional design that defines external interfaces and system architecture, breaking the system into modules.

4. **Low-Level Design (LLD)** – Providing detailed internal module design so programmers can directly implement the code.

5. **Coding** – Writing and implementing code based on the LLD.

## Verification

Verification is the process of checking whether the software is being developed correctly according to the specified requirements and design.

**Verification: Are we building(`in-process`) the product right?**

Verification is simply known as Static Testing.

- Done by developer
- Static Testing
  - Inspections
  - Reviews
  - Walkthroughs
  - Desk-checking

### Pros and Cons of Verification

| **Pros**                                                             | **Cons**                                                     |
| -------------------------------------------------------------------- | ------------------------------------------------------------ |
| Detects issues early, reducing cost and effort                       | Cannot catch runtime or functional defects                   |
| Ensures that requirements and design are correctly followed          | Time-consuming, especially for large projects                |
| Helps in maintaining coding standards and best practices             | Requires experienced reviewers for effective verification    |
| Improves collaboration between developers, testers, and stakeholders | May not always reflect real-world user interactions          |
| Prevents major defects before actual implementation                  | Some issues may still go undetected until validation/testing |

## Validation

Validation is the process of evaluating the final software product to check whether it meets the customer’s expectations and performs the intended function. It ensures the software behaves correctly.

**Validation: Have you build(`final`) the right product?**

Validation is simply known as Dynamic Testing.

- Done by tester
- Dynamic Testing
  - Black Box Testing
  - White Box Testing
  - Unit Testing
  - Integration Testing

### Pros and Cons of Validation

| **Pros**                                                     | **Cons**                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------- |
| Ensures the final product meets user expectations            | Bugs found in this phase can be costly to fix                       |
| Identifies real-world performance and functional issues      | Requires a fully developed or partially functional system           |
| Helps in detecting UI/UX flaws and usability issues          | Testing can be time-consuming for complex applications              |
| Involves actual execution, ensuring proper software behavior | May not catch all logical or conceptual flaws from the early stages |
| Provides confidence in software reliability and correctness  | Requires extensive test planning, environment setup, and resources  |

### Validation Test Plan

- **Acceptance test plan:** prepared in the requirement phase according to the acceptance criteria of user feedback.
- **System test plan:** prepared to verify the objectives specified in the SRS.
- **Function test plan:** prepared in HLD phase to test all interfaces and functionalities.
- **Integration test plan:** prepared to validate the integration of all the modules.
- **Unit test plan:** prepared in LLD phase to test individual modules.

### Validation Test Execution

- **Acceptance testing:** compare the final system with teh acceptance criteria.
- **System Testing:** test the entire system.
- **Function Testing:** tests all specified function and their external interfaces.
- **Integration Testing:** tested the combined modules.
- **Unit validation testing:** focuses on testing individual components.
- **Installation testing:** tests the installation process.

# Black Box Testing

It focuses on functional requirements **without considering the internal structure** or logic of the software. Test cases are designed based on functional specifications, where input data is provided, and output results are checked against expected outcomes.

## Boundary Value Analysis

BVA is used to identify defects at the boundaries of input domains rather than within the range of values. The idea behind BVA is that errors are more likely to occur at the extreme edges of input values rather than in the middle.

### Concepts

1. **Boundaries are Critical:** Defects often occur at the boundary rather than inside the range.
2. **Minimum and Maximum Values:** Test cases are designed based on the minimum and maximum values of an input range.
3. **Typical Boundary Values:**
   - Lower boundary: Minimum - 1, Minimum, Minimum + 1
   - Upper boundary: Maximum - 1, Maximum, Maximum + 1

### Methods

- **Boundary Value Checking:** - 4n + 1 test cases for n variables(4=min, min+, max, max- | 1=nominal)
- **Robustness Testing:** - 6n + 1 test cases for n variables(6=min, min-, min+, max, max-, max+, || 1=nominal)
- **Worst-Case Testing:** - 5<sup>n test cases for n variables(5=min, min+, max, max-, nominal)

### Example

**Scenario: User Age Validation**

Consider a system that accepts user age as an input, with a valid range of 18 to 60 years.

**Boundary Values and Test Cases**

| Test Case                 | Input Value  | Expected Output |
| ------------------------- | ------------ | --------------- |
| Below Lower Boundary      | 17 (Min - 1) | Invalid         |
| Lower Boundary            | 18 (Min)     | Valid           |
| Just Above Lower Boundary | 19 (Min + 1) | Valid           |
| Just Below Upper Boundary | 59 (Max - 1) | Valid           |
| Upper Boundary            | 60 (Max)     | Valid           |
| Above Upper Boundary      | 61 (Max + 1) | Invalid         |

**Explanation**
17 is outside the valid range, so the system should reject it.
18 and 19 are within the valid range, so the system should accept them.
59 and 60 are also valid.
61 is outside the valid range, so the system should reject it.

## Equivalence Class Testing

It is a black-box testing technique used to reduce the number of test cases while ensuring effective coverage. The approach divides input data into different classes, where each class is expected to behave similarly. Instead of testing every possible input, a single representative value from each class is tested.

### Concpets

1. **Divide Inputs into Equivalence Classes:** Inputs are divided into groups where all values in a group should behave similarly.
2. **Valid and Invalid Classes:**
   - Valid Equivalence Class: Represents inputs that should be accepted by the system.
   - Invalid Equivalence Class: Represents inputs that should be rejected by the system.
3. **One Value Per Class:** Instead of testing every value in a class, selecting just one representative value is enough.

### Goals

- **Completeness:** Without executing all the test cases, we strive to touch the completeness of testing domain.
- **Non-redundancy:** When the test cases are executed having inputs from the same class, then there is redundancy in executing the test cases.

### Guidelines for Identifying Equivalence Classes

- If the program treats each valid input differently, define one valid class per valid input.
- For limited numerical inputs, create valid and invalid classes (e.g., a system allowing 1–4 purchase orders would have valid: 1–4, invalid: <1, >4).
- If an input can belong to multiple categories (e.g., a character input may be a letter, number, or special character), define classes accordingly.
- If an input condition requires specific values (e.g., discount codes P, R, N), create a class for each valid value and one invalid class.

### Example

**Scenario: User Age Validation**

A system accepts age input in the range of 18 to 60 (inclusive). Any input outside this range is invalid.

**Step 1: Identify Equivalence Classes**

| Class Type | Equivalence Class                 | Example Test Values | Expected Output |
| ---------- | --------------------------------- | ------------------- | --------------- |
| Invalid    | Less than 18 (age < 18)           | 10, 15, 17          | Invalid         |
| Valid      | Between 18 and 60 (18 ≤ age ≤ 60) | 25, 30, 45          | Valid           |
| Invalid    | Greater than 60 (age > 60)        | 65, 70, 80          | Invalid         |

**Step 2: Select Test Cases from Each Class**

| Test Case | Input Age                        | Expected Output |
| --------- | -------------------------------- | --------------- |
| TC1       | 17 (Invalid Class - Below Range) | Invalid         |
| TC2       | 25 (Valid Class)                 | Valid           |
| TC3       | 65 (Invalid Class - Above Range) | Invalid         |

**Explanation**

- Instead of testing all values (e.g., 10, 11, 12, …, 60, 61, 62…), only a few representative values (one from each class) are selected.
- This reduces the total number of test cases while still covering all possible behaviors.
- If one value in a class behaves correctly, others in the same class are assumed to behave the same.

## State Table-Based Testing

It examines the system’s behavior when transitioning between different states. This technique is useful for applications where the output depends on past and current inputs (i.e., state-dependent systems).

It is particularly beneficial in:

- Embedded systems
- Workflow-based applications
- Real-time systems
- Menu-driven software

### Finite State Machine

FSM is a mathematical model that describe a system with a finite states and transition between them and whose outcomes depend upon both previous and current inputs.

### State Table

A state table is a tabular representation of an FSM that shows how a system transitions between states based on inputs. It typically includes:

- Each row of the table corresponds to a state.
- Each column corresponds to an input condition.
- The box at the intersection of a row and a column specifi es the next
  state (transition) and the output, if any.

### Example

Consider a simple ATM machine where the user inserts a card and enters a PIN.

#### Step 1: Define States and Events

- **States:**

  - Idle (ATM is waiting for input)
  - Card Inserted (User inserts a card)
  - PIN Entered (User enters a PIN)
  - Authenticated (Correct PIN entered)
  - Locked (Incorrect PIN entered 3 times)

- **Events (Inputs):**

  - Insert card
  - Enter PIN
  - Enter incorrect PIN
  - Remove card

#### Step 2: Create State Transition Table

| Current State | Event (Input)                  | Next State    | Output          |
| ------------- | ------------------------------ | ------------- | --------------- |
| Idle          | Insert card                    | Card Inserted | Request PIN     |
| Card Inserted | Enter correct PIN              | Authenticated | Access granted  |
| Card Inserted | Enter incorrect PIN            | PIN Entered   | Request retry   |
| PIN Entered   | Enter correct PIN              | Authenticated | Access granted  |
| PIN Entered   | Enter incorrect PIN (3rd time) | Locked        | Card blocked    |
| Authenticated | Remove card                    | Idle          | Return to start |
| Locked        | -                              | Locked        | Card retained   |

#### Step 3: Design Test Cases

Based on the state transitions, we can create test cases:

| Test Case | Initial State | Input                         | Expected State | Expected Output |
| --------- | ------------- | ----------------------------- | -------------- | --------------- |
| 1         | Idle          | Insert card                   | Card Inserted  | Request PIN     |
| 2         | Card Inserted | Enter correct PIN             | Authenticated  | Access granted  |
| 3         | Card Inserted | Enter incorrect PIN           | PIN Entered    | Request retry   |
| 4         | PIN Entered   | Enter correct PIN             | Authenticated  | Access granted  |
| 5         | PIN Entered   | Enter incorrect PIN (3 times) | Locked         | Card blocked    |
| 6         | Authenticated | Remove card                   | Idle           | Return to start |

## Decision Table-Based Testing

It is used to test systems with multiple conditions, where different combinations of inputs lead to different outcomes. It helps ensure all possible combinations of inputs are tested systematically.

This method is particularly useful for:

- Business rules validation
- Policy-based applications
- Complex decision-making systems
- Systems with multiple conditions and combinations of inputs

### Example

**Online Shopping Discount System**

A shopping website provides discounts based on the following conditions:

- Condition 1: Customer is a registered member.
- Condition 2: Purchase amount is above $100.
- Condition 3: Coupon is applied.

The system applies discounts based on these conditions:

- 10% discount if the customer is a member.
- 5% discount if the purchase amount is above $100.
- 20% discount if a coupon is applied.
- No discount if none of the conditions are met.

#### Step 1: Create a Decision Table

| Condition | C1: Member? | C2: Amount > $100? | C3: Coupon Applied? | Discount Applied |
| --------- | ----------- | ------------------ | ------------------- | ---------------- |
| Rule 1    | No          | No                 | No                  | No Discount      |
| Rule 2    | No          | No                 | Yes                 | 20% Discount     |
| Rule 3    | No          | Yes                | No                  | 5% Discount      |
| Rule 4    | No          | Yes                | Yes                 | 20% Discount     |
| Rule 5    | Yes         | No                 | No                  | 10% Discount     |
| Rule 6    | Yes         | No                 | Yes                 | 20% Discount     |
| Rule 7    | Yes         | Yes                | No                  | 15% Discount     |
| Rule 8    | Yes         | Yes                | Yes                 | 20% Discount     |

#### Step 2: Design Test Cases

Based on the decision table, we generate test cases:

| Test Case | Member? | Amount > $100? | Coupon Applied? | Expected Discount |
| --------- | ------- | -------------- | --------------- | ----------------- |
| TC1       | No      | No             | No              | No Discount       |
| TC2       | No      | No             | Yes             | 20% Discount      |
| TC3       | No      | Yes            | No              | 5% Discount       |
| TC4       | No      | Yes            | Yes             | 20% Discount      |
| TC5       | Yes     | No             | No              | 10% Discount      |
| TC6       | Yes     | No             | Yes             | 20% Discount      |
| TC7       | Yes     | Yes            | No              | 15% Discount      |
| TC8       | Yes     | Yes            | Yes             | 20% Discount      |

## Cause Effect Testing

It helps in designing test cases by identifying the relationships between causes (inputs) and effects (outputs) of a system. It is particularly useful for complex systems where various inputs interact in non-trivial ways to produce outputs.

### Steps

1. **Identify Causes and Effects**

   - **Causes:** These are the inputs, conditions, or events that influence system behavior.
   - **Effects:** These are the outcomes or outputs resulting from causes.

2. **Establish Cause-Effect Relationships**

   A cause-effect graph is drawn where:

   - Causes are represented as input nodes.
   - Effects are represented as output nodes.
   - Logical conditions (AND, OR, NOT) are used to define dependencies.

3. **Convert Graph into Decision Table**

   - The cause-effect graph is converted into a decision table, which maps various combinations of inputs to expected outputs.

4. **Design Test Cases**

   - Test cases are derived based on valid input combinations from the decision table.

### Basic Notations

<img src="./images/cause_effect_1.png" />
<img src="./images/cause_effect_2.png" />
<img src="./images/cause_effect_3.png" />
<img src="./images/cause_effect_4.png" />
<img src="./images/cause_effect_5.png" />
<img src="./images/cause_effect_6.png" />
<img src="./images/cause_effect_7.png" />
<img src="./images/cause_effect_8.png" />
<img src="./images/cause_effect_9.png" />

### Example

Consider a simple login system with:

**Two causes (inputs):**

1. `C1`: Correct username entered
2. `C2`: Correct password entered

**One effect (output):**

1. `E1`: Successful login

#### Cause-Effect Graph Representation

We define the logical relationship:

- The system allows login only if both C1 (correct username) AND C2 (correct password) are true.

```
C1 (Correct Username) ───┐
                         ├── AND ───► E1 (Login Success)
C2 (Correct Password) ───┘
```

#### Convert to Decision Table

| Test Case | C1 (Correct Username) | C2 (Correct Password) | E1 (Login Success) |
| --------- | --------------------- | --------------------- | ------------------ |
| 1         | 0                     | 0                     | 0                  |
| 2         | 0                     | 1                     | 0                  |
| 3         | 1                     | 0                     | 0                  |
| 4         | 1                     | 1                     | 1                  |

#### Derive Test Cases

Based on the decision table, we create the following test cases:

- **Test Case 1:** Incorrect username & incorrect password → Expect Login Failure.
- **Test Case 2:** Incorrect username & correct password → Expect Login Failure.
- **Test Case 3:** Correct username & incorrect password → Expect Login Failure.
- **Test Case 4:** Correct username & correct password → Expect Login Success.

# White Box Testing

White box testing, also known as clear box testing, glass box testing, or structural testing, is a software testing technique where the internal structure, design, and implementation of the software are tested. The tester has full visibility of the code, algorithms, and logic of the program. Often, developers use white-box testing techniques to test their own design and code.

**Types of White Box Testing**

**Unit Testing:** Testing individual components or modules of the software.

- **Integration Testing:** Verifying how different components interact.
- **Mutation Testing:** Modifying certain parts of the code to check if the test cases can detect the change.
- **Loop Testing:** Testing different types of loops in the program (simple, nested, or conditional loops).
- **Path Testing:** Ensuring that every possible execution path is tested.

**Why White-Box Testing is Essential?**

- **Initial Stage Testing:**

  - White-box testing is used before black-box testing to verify code correctness.
  - Black-box test cases cannot be executed until the code passes white-box testing.

- **Detects Bugs Missed by Black-Box Testing:** Some code segments are not covered by functional tests but are tested through white-box techniques.

- **Helps Verify Code from the Design Phase:** Design flaws reflected in the code can be caught through unit verification.

- **Explores Unexpected Logical Paths:** Even rarely executed paths can have errors, and white-box testing ensures they are tested.

- **Identifies Typographical Errors:** Some syntax or logical mistakes are not detected by black-box testing but can be caught with white-box techniques.

## Basis Path Testing

Basis Path Testing is a white-box testing technique used to derive a logical complexity measure of a program and then design test cases based on the control flow. This method ensures that every independent path in the program is executed at least once.

It is based on Cyclomatic Complexity, which helps determine the minimum number of test cases required to cover all possible execution paths in the program.

**The guidelines for effectiveness of path testing are discussed below:**

1. Path testing is based on control structure of the program for which flow
   graph is prepared.
2. Path testing requires complete knowledge of the program’s structure.
3. Path testing is closer to the developer and used by him to test his
   module.
4. The effectiveness of path testing gets reduced with the increase in size
   of software under test.
5. Choose enough paths in a program such that maximum logic coverage
   is achieved.

### Terminology

- **Path:** A sequence of instructions in a program that begins at an entry, junction, or decision and ends at a junction, decision, or exit. A path may traverse multiple junctions, decisions, or processes, potentially multiple times.

- **Segment:** Paths are composed of segments, with the smallest segment being a link (a single process between two nodes, such as junction-process-junction or decision-process-decision). Even an unconditional GOTO is considered a process.

- **Path Segment:** A series of consecutive links forming part of a larger path.

- **Path Length:** Measured by the number of links rather than the number of statements executed. Another method is counting nodes traversed, which provides analytical benefits. If a program has defined entry and exit nodes, the number of links is always one less than the number of nodes.

- **Independent Path:** A path that introduces at least one new processing statement or condition. It must include at least one edge not previously traversed to ensure new execution coverage.

### Control Flow Graph

The control flow graph is a graphical representation of control structure of a program. Flow graphs can be prepared as a directed graph. A directed graph (V, E) consists of a set of vertices V and a set of edges E that are ordered pairs of elements of V. Based on the concepts of directed graph, following notations are used for a flow graph:

It is also knows as _decision-to-decision_ or \*DD\* graph.

- **Node:** It represents one or more procedural statements. The nodes are
  denoted by a circle. These are numbered or labeled.
- **Edges or links:** They represent the flow of control in a program. This is denoted by an arrow on the edge. An edge must terminate at a node.
- **Decision node:** A node with more than one arrow leaving it is called a decision node.
- **Junction node:** A node with more than one arrow entering it is called a junction.
- **Regions:** Areas bounded by edges and nodes are called regions. When counting the regions, the area outside the graph is also considered a region.

<img src="./images/cfg.png">

- **break:** Look end of loop.
- **Loop:**
  - where it goes when condition is true.
  - where it goes when condition if false.
  - where it goes ehen loop ends
- **if:**
  - where it goes when condition is true.
  - where it goes when condition if false.

### Cyclomatic Complexity

It measure the complexity by considering the number of paths in the control flow graph of the program. But even for simple programs, if they contain at least one cycle, the number of
paths is infi nite. Therefore, consider `only independent` paths.

### Steps

1. Draw the Control Flow Graph (CFG): Convert the code into a graph where:

   - Nodes represent program statements.
   - Edges represent the flow of execution.

2. Calculate the Cyclomatic Complexity (V(G)):

   - V(G)=E−N+2P
     - E = Number of edges in the graph
     - N = Number of nodes in the graph
     - P = Number of connected components (typically 1 for a single program)

3. Determine Independent Paths:

   - Identify paths that introduce new logic not covered by previous paths.

4. Design Test Cases:
   - Each independent path must be tested at least once.

### Example

**Sample Code:**

```cpp
#include <stdio.h>

void checkEvenOdd(int num) {
    if (num % 2 == 0) { // 2
        printf("Even\n"); // 3
    } else {
        printf("Odd\n"); // 4
    }
    printf("Done\n"); // 5
}

int main() {
    checkEvenOdd(4); // 1
    return 0;
}
```

1. Draw Control Flow Graph

- **Nodes (N):** Represent program statements.
- **Edges (E):** Represent execution flow.

```
   1 → 2 → 3 → 5
        ↘ 4 ↗
```

2. Compute Cyclomatic Complexity:

- E=6 (number of edges)
- N=5 (number of nodes)
- P=1 (single connected graph)

V(G) = 6 - 5 + 2 = 3

Thus, 3 test cases are needed.

3. Identify Independent Paths

- Path 1: Start → 2 → 3 → 5 → End (Even number case)
- Path 2: Start → 2 → 4 → 5 → End (Odd number case)
- Path 3: (Implicit) Covering both cases with different numbers

4. Create Test Cases

| Test Case | Input (num) | Expected Output |
| --------- | ----------- | --------------- |
| 1         | 4           | Even, Done      |
| 2         | 5           | Odd, Done       |

These two test cases ensure all paths are covered.

## Graph Matrix

A Graph Matrix is a structured representation of a graph used in software testing, particularly for test case design based on control flow, data flow, and dependency relationships. It helps in analyzing the logical flow of a program by representing paths, nodes, and relationships using a matrix format.

### Example

```
1. Start
2. Input X
3. If X > 10
4.   Print "High"
5. Else
6.   Print "Low"
7. End
```

**Graph Representation:**

If there is a direct connection between nodes, it is marked as `1` otherwise, `0`.

```
    (1) Start
       ↓
    (2) Input X
       ↓
    (3) Decision (X > 10?)
     ↙     ↘
   (4)     (6)
  "High"  "Low"
     ↘     ↙
      (7) End
```

**Adjacency Matrix Representation**

|     | 1   | 2   | 3   | 4   | 5   | 6   |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | 1   | 0   | 0   | 0   | 0   |
| 2   | 0   | 0   | 1   | 0   | 0   | 0   |
| 3   | 0   | 0   | 0   | 1   | 1   | 0   |
| 4   | 0   | 0   | 0   | 0   | 0   | 1   |
| 5   | 0   | 0   | 0   | 0   | 0   | 1   |
| 6   | 0   | 0   | 0   | 0   | 0   | 0   |

**Calculate Cyclomatic Complexity:**

|     | 1   | 2   | 3   | 4   | 5   | 6   |        |
| --- | --- | --- | --- | --- | --- | --- | ------ |
| 1   | 0   | 1   | 0   | 0   | 0   | 0   | 1-1=0  |
| 2   | 0   | 0   | 1   | 0   | 0   | 0   | 1-1=0  |
| 3   | 0   | 0   | 0   | 1   | 1   | 0   | 2-1=1  |
| 4   | 0   | 0   | 0   | 0   | 0   | 1   | 1-1=0  |
| 5   | 0   | 0   | 0   | 0   | 0   | 1   | 1-1=0  |
| 6   | 0   | 0   | 0   | 0   | 0   | 0   | 0-1=-1 |

---

Cyclomatic Complexity = 1+1 = 2

1. For each row, count the number of 1s and write it in front of that
   row.
2. Subtract 1 from that count. Ignore the blank rows, if any.
3. Add the fi nal count of each row.
4. Add 1 to the sum calculated in Step 3.
5. The fi nal sum in Step 4 is the cyclomatic number of the grap

### Find set of all paths

- To find n-link paths, extract matrix<sup>n</sup>
- It can be generalized that for n number of nodes, we can get the set of all paths of (n − 1) links length with the use of matrix operations.

## Loop Testing

Loop testing is a white-box testing technique that focuses on validating the loops in a program. Since loops are prone to errors such as infinite iterations, boundary issues, and incorrect termination conditions, loop testing ensures they function correctly under different conditions.

**Types of Loops in Software**

- **Simple Loops** – A single loop that runs a fixed or variable number of times.
- **Nested Loops** – Loops inside another loop.
- **Concatenated (Sequential) Loops** – Multiple loops that run one after another.
- **Unstructured Loops** – Loops with irregular control flow (e.g., improper exits or jumps).

### Loop Testing Strategies

1. **Simple Loop Testing**

   - Skip the loop (Zero iterations).
   - One iteration (Minimum loop execution).
   - Two iterations (Basic verification).
   - Typical number of iterations (Average case testing).
   - Maximum iterations (Upper bound).
   - Exceeding maximum iterations (Stress testing).

2. **Nested Loop Testing**

   - Start with inner loops first and test them in isolation.
   - Test for minimum, maximum, and abnormal conditions for each loop.
   - Check if loop control variables are correctly maintained.

3. **Concatenated Loop Testing**

   - Treat them as independent loops if they do not share variables.
   - If they share variables, test the interaction between loops.

4. **Unstructured Loop Testing**
   - Identify and restructure the loops if they contain irregular jumps (e.g., goto statements).
   - Convert them into structured loops if possible.

### Example

<img src="./images/loop_testing_1.png" />
<img src="./images/loop_testing_2.png" />
**Simple Loop:**

```cpp
int sum_natural_numbers(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```

| Test Case         | Input (n) | Expected Output | Explanation                                         |
| ----------------- | --------- | --------------- | --------------------------------------------------- |
| Zero Iteration    | 0         | 0               | The loop should not execute.                        |
| One Iteration     | 1         | 1               | The loop should run once and return 1.              |
| Two Iterations    | 2         | 3               | Sum = 1+2 = 3.                                      |
| Typical Case      | 5         | 15              | Sum = 1+2+3+4+5 = 15.                               |
| Maximum Case      | 100       | 5050            | Verifies the upper limit.                           |
| Exceeding Maximum | -1        | Error/0         | Edge case, should handle negative input gracefully. |

**Nested Loop:**

```cpp
void multiplication_table(int n) {
    for (int i = 1; i <= n; i++) {   // Outer Loop
        for (int j = 1; j <= 10; j++) {  // Inner Loop
            printf("%d x %d = %d\n", i, j, i * j);
        }
    }
}
```

| Test Case      | Input (n) | Expected Output    | Explanation                                  |
| -------------- | --------- | ------------------ | -------------------------------------------- |
| Zero Iteration | 0         | No output          | The outer loop should not execute.           |
| One Iteration  | 1         | 1×1 to 1×10        | The inner loop runs fully for i=1.           |
| Two Iterations | 2         | Two sets of tables | The inner loop runs twice (for i=1 and i=2). |
| Large Input    | 100       | 100 tables         | Stress testing the performance.              |

## Data Flow Testing

Data Flow Testing (DFT) is a white-box testing technique that focuses on variables and their usage throughout the program. It ensures that variables are properly defined, used, and killed (deallocated) without leading to anomalies like:

- Uninitialized variables (used before assignment)
- Unused variables (declared but never used)
- Variables that are redefined before use (overwritten without being used)

Extract data flow diagram for all the variable.

**Static Data Flow:** the source code is analysed without executing it.

### Dynamic Data Flow

1. **All-du Paths (ADUP):**

   - Tests every definition-to-use (du) path for every variable.
   - Most comprehensive but requires the most test cases.

2. **All-Uses (AU):**

   - Ensures that for every use of a variable, there is a test path from its closest definition.

3. **All-Predicate-Uses/Some-Computational-Uses (APU + C):**

   - Covers all definition-to-predicate use (p-use) paths.
   - If a variable has no p-use, computational use (c-use) paths are added.

4. **All-Computational-Uses/Some-Predicate-Uses (ACU + P):**

   - Covers all definition-to-computation use (c-use) paths.
   - If a variable has no c-use, predicate use (p-use) paths are added.

5. **All-Predicate-Uses (APU):**

   - Covers definition-to-predicate use (p-use) paths.
   - Ignores definitions without a p-use.

6. **All-Computational-Uses (ACU):**

   - Covers definition-to-computation use (c-use) paths.
   - Ignores definitions without a c-use.

7. **All-Definitions (AD):**

   - Ensures every variable definition is tested at least once through either a p-use or c-use.

### Components

- **Definition (def)** – When a variable is assigned a value.
- **Use (use)** – When a variable's value is utilized in computation or condition checking.
- **Kill (or deallocation)** – When a variable is no longer accessible or its memory is freed.

### Types

- Computational Use (C-use) – The variable is used in an arithmetic or logical operation.
  - Example: `y = x + 5;` (here, `x` is a C-use)
- Predicate Use (P-use) – The variable is used in a decision-making condition.
  - Example: `if (x > 10) {...}` (here, `x` is a P-use)

### Anomalies

| Code | Meaning          | Effect of Anomaly                                                                                                         |
| ---- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| du   | Define-use       | Allowed. Normal case.                                                                                                     |
| dk   | Define-kill      | Potential bug. Data is killed without use after definition.                                                               |
| ud   | Use-define       | Allowed. Normal situation.                                                                                                |
| uk   | Use-kill         | Data is used and then redefined. Allowed. Usually not a bug because the language permits reassignment at almost any time. |
| ku   | Kill-use         | Serious bug because the data is used after being killed.                                                                  |
| kd   | Kill-define      | Data is killed and then redefined. Allowed.                                                                               |
| dd   | Define-define    | Redefining a variable without using it. Harmless bug, but not allowed.                                                    |
| uu   | Use-use          | Allowed. Normal case.                                                                                                     |
| kk   | Kill-kill        | Harmless bug, but not allowed.                                                                                            |
| ~d   | First definition | Normal situation. Allowed.                                                                                                |
| ~u   | First use        | Data is used without defining it. Potential bug.                                                                          |
| ~k   | First kill       | Data is killed before defining it. Potential bug.                                                                         |
| D~   | Define last      | Potential bug.                                                                                                            |
| U~   | Use last         | Normal case. Allowed.                                                                                                     |
| K~   | Kill last        | Normal case. Allowed.                                                                                                     |

### Terminology

- **Definition Node:** A point where a variable is assigned a value for the first time (e.g., input statements, assignment statements, loops).

- **Usage Node:** A point where a variable’s value is used, which can be:

  - **Predicate Usage Node (p-usage):** Used in a decision-making statement (e.g., conditions, loops).
  - **Computation Usage Node (c-usage):** Used in computation statements (excluding predicates).

- **Loop-Free Path Segment:** A path where no node is visited more than once.
- **Simple Path Segment:** A path where at most one node is revisited.
- **Definition-Use Path (du-path):** A path connecting a variable’s definition to its usage.
- **Definition-Clear Path (dc-path):** A du-path where no intermediate node redefines the variable.

### Example

```cpp
int square(int x) {
    int result;   // Variable 'result' is declared but not initialized (undef)
    result = x * x;  // 'result' is defined (def)
    return result;  // 'result' is used (C-use)
}
```

| **Variable** | **State Transition** | **Issue?**                                                      |
| ------------ | -------------------- | --------------------------------------------------------------- |
| `result`     | `undef → use`        | ❌ Used before initialization (should initialize `result` to 0) |
| `x`          | `def → C-use`        | ✅ No issue                                                     |

## Mutation Testing

Mutation testing is a type of software testing that involves modifying a program’s source code in small ways (introducing artificial faults) to check if the existing test cases can detect these changes. The goal is to evaluate the effectiveness of test cases in identifying errors in the software.

Faulty programs are called mutants of the original program and a mutant is said to be killed when a test case causes it to fail.

Signle modification call primary mutants, multiple modification called secondary modifications.

### How works

1. **Generate Mutants:** The original program is modified by making small changes (mutations) to create mutant versions.
2. **Run Test Cases:** The existing test cases are executed against both the original program and the mutant programs.
3. **Evaluate Results:**
   - If the test cases fail when run on a mutant, the mutant is "killed" (detected).
   - If the test cases pass despite the mutation, the mutant "survives," indicating a weakness in the test cases.
4. **Improve Test Cases:** If many mutants survive, it suggests that the test suite needs improvement.

### Types

1. Arithmetic Operator Mutation – Changing arithmetic operators (e.g., `+` to `-`).
2. Relational Operator Mutation – Modifying relational operators (e.g., `>` to `>=`).
3. Logical Operator Mutation – Changing logical operators (e.g., `&&` to `||`).
4. Constant Value Mutation – Altering constant values (e.g., `10` to `20`).
5. Statement Removal Mutation – Removing statements from the code.

### Example

**Original Code:**

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;  // Original statement
    }
}
```

**Mutated Code:**

```java
public class Calculator {
    public int add(int a, int b) {
        return a - b;  // Mutated statement (changed `+` to `-`)
    }
}
```

# Static Testing

Static Testing is a type of software testing where the code, documentation, and other project artifacts are examined without executing the code.

It's aimed at early detection of defects, improving quality, and reducing later-stage costs.

## Technical Reviews

A review is a systematic examination of a document, code, or project artifact to find mistakes and improve the product.

It involves human participation (developers, testers, analysts, stakeholders) without executing any program.

### Types

1. **Informal Review**

   - Simple peer review without structured process.
   - Example: A developer casually checking another's code.

2. **Walkthrough**
   - The author leads members through the document/code and explains it.
   - Participants ask questions and suggest improvements.
3. **Technical Review**

   - A team of technically skilled peers examines the product to ensure technical correctness.

4. **Inspection**
   - A very formal process following specific entry/exit criteria.
   - Defects are logged systematically.

## Inspection

Inspection is the most formal and structured type of review in static testing. It involves a systematic examination of documents (like requirements, designs, code, test plans) to detect defects early. It follows a well-defined process with roles, checklists, entry/exit criteria, and formal recording of defects.

In an inspection, participants prepare individually before the meeting, and the session is led by a trained moderator, not the author.

### Characterstics

| Feature     | Description                                           |
| ----------- | ----------------------------------------------------- |
| Led by      | Moderator (not the author)                            |
| Goal        | Detect defects systematically                         |
| Formality   | Highly formal                                         |
| Preparation | Mandatory, participants review beforehand             |
| Output      | List of logged defects, with severity, assigned fixes |

### Team

- **Author/Owner/Producer:** The individual who created the program or document; responsible for correcting defects found.
- **Inspector:** A peer not directly involved with the product; identifies errors, omissions, and inconsistencies.
- **Moderator:** Manages and leads the inspection process, including planning and conducting the session.
- **Recorder:** Documents all outcomes and findings from the inspection meeting.

### Process

<img src="./images/software-testing/inspection_process.png" />

1. **Planning:**

   - Identify the product to be inspected.
   - Assign a moderator and define the inspection objective (e.g., to detect specific types of defects).
   - The moderator ensures the product is ready, selects the team, assigns roles, schedules the meeting, and distributes materials.

2. **Overview:**

   - The author provides background, purpose, and context of the product.
   - An initial meeting may be held to align team understanding.

3. **Individual Preparation:**

- Reviewers individually examine the product using checklists and standards.
- They log defects and time spent, submitting logs to the moderator.
- The moderator checks team readiness and compiles all logs into a defect list.

4. **Inspection Meeting:**

- The author addresses logged issues, and the team discusses and confirms whether issues are valid defects.
- New defects may be discovered during discussion.
- The meeting is not for fixing bugs, only identifying them.
- The moderator ensures a constructive and respectful environment and summarizes the findings.

5. **Rework:**

   - The author fixes the identified defects and reports back to the moderator.

6. **Follow-up:**
   - The moderator verifies that all issues are resolved and prepares a final report.
   - If defects remain unresolved, another inspection is scheduled.

### Benefits

1. **Bug Reduction:** Inspections significantly reduce the number of bugs. At IBM, bug rates per thousand lines of code were cut by two-thirds.
2. **Bug Prevention:** Past inspection data helps prevent future bugs by identifying root causes and sharing insights with the QA team.
3. **Increased Productivity:** Early bug detection reduces the need for extensive dynamic testing, improving coding efficiency and reducing timelines.
4. **Real-Time Feedback:** Developers receive timely insights into their mistakes, helping them improve their skills and reduce error density early.
5. **Resource Efficiency:** Finding and fixing bugs early lowers rework and dynamic testing effort, leading to reduced resource usage.
6. **Quality Improvement:** Inspections enhance software quality by ensuring adherence to standards, clarity, modularity, and simplicity.
7. **Project Monitoring:** Inspections offer an additional method to monitor project progress and health beyond team-reported data.
8. **Coupling & Cohesion Checks:** Static analysis via inspection more easily evaluates module coupling and cohesion than dynamic testing.
9. **Team Learning:** Discussions during inspections help team members, especially new ones, learn about defects and project nuances.

## Walkthrough

A Walkthrough is a peer group review where the author of a work product (document, code, design, etc.) leads team members through it to gather feedback and find issues. It is a semi-formal review, less formal than an inspection but more structured than an informal review.

The goal is to present and explain the content so that participants can ask questions, spot defects, and offer suggestions.

### Characterstics

| Feature       | Description                                           |
| ------------- | ----------------------------------------------------- |
| Who leads it? | The author of the work product                        |
| Is it formal? | Semi-formal (less strict than inspections)            |
| Purpose       | Find defects, gather feedback, educate team           |
| Preparation   | Light (participants may or may not review beforehand) |
| Focus         | Understandability, logic, completeness                |
| Documentation | Defects and suggestions may be logged                 |

### Team

1. **Coordinator** – Organizes, moderates, and follows up the walkthrough.
2. **Presenter/Developer** – Introduces the item (optional role).
3. **Scribe/Recorder** – Notes defects and suggestions.
4. **Reviewer/Tester** – Identifies defects in the item.
5. **Maintenance Oracle** – Focuses on future maintainability of the product.
6. **Standards Bearer** – Ensures compliance with standards.
7. **User Representative** – Represents the user’s needs and concerns.

### Process

<img src="./images/software-testing/walkthrough_process.png" />

### Key Differences from Inspection

| Aspect                 | Inspection                        | Walkthrough                       |
| ---------------------- | --------------------------------- | --------------------------------- |
| Formality              | Highly formal, structured process | Informal, flexible process        |
| Checklist Usage        | Yes                               | No                                |
| Report Generation      | Written reports                   | Usually no formal reports         |
| Error Detection Method | Checklist-based reading           | Mental execution using test cases |
| Meeting Approach       | Structured, step-wise             | Interactive and exploratory       |

## Static Testing vs Dynamic Testing

| Aspect               | Static Testing                                                                                    | Dynamic Testing                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Definition           | Testing without executing the program.                                                            | Testing by executing the program or code.                                                                  |
| Purpose              | To find defects early in documents, designs, and code without running it.                         | To validate behavior, functionality, and performance of the running software.                              |
| When It Happens      | Early in the development life cycle (before implementation or execution).                         | After code is developed and compiled (during or after implementation).                                     |
| How It's Done        | Through reviews, walkthroughs, inspections, and static analysis tools.                            | Through running test cases on the actual software (e.g., system testing, integration testing).             |
| Examples             | - Requirement reviews<br>- Design walkthroughs<br>- Code inspections<br>- Static code analysis    | - Unit testing<br>- Functional testing<br>- System testing<br>- User acceptance testing (UAT)              |
| Who Performs It      | Developers, testers, analysts, stakeholders.                                                      | Testers (QA), developers (unit testing), users (acceptance testing).                                       |
| Tools Used           | - Document review templates<br>- Static code analyzers (e.g., SonarQube, Checkstyle)<br>- Linters | - Testing frameworks (e.g., Selenium, JUnit, Postman, Cypress)<br>- Test management tools (e.g., TestRail) |
| Focus Area           | Structure, syntax, completeness, standards compliance.                                            | Correctness, input/output behavior, functional and non-functional requirements.                            |
| Type of Errors Found | - Syntax errors<br>- Logical errors in requirements<br>- Design flaws<br>- Standard violations    | - Runtime errors<br>- Memory leaks<br>- Incorrect functionality<br>- Performance issues                    |
| Cost Impact          | Cheaper to fix issues early.                                                                      | Costlier if issues are found late (after deployment).                                                      |

# Risk Based Testing

Risk-Based Testing (RBT) is a software testing strategy that prioritizes the testing of features and functionalities based on the risk of failure and the impact of that failure. Instead of treating all parts of an application equally, it focuses more on areas that are more likely to fail and would have greater consequences if they do.

Risk in software testing is defined as the possibility of a problem occurring in the software that can cause loss, damage, or negative impact to the user or the business. Risk is usually assessed as:

$$ \text{Risk} = \text{Probability of failure} \times \text{Impact of failure} $$

## Components

1. **Risk Identification:** Identify potential risks in the software (e.g., security flaws, data loss, crash under load, etc.)
2. **Risk Assessment:** Assess each risk in terms of likelihood (probability) and impact (severity).
3. **Risk Prioritization:** Rank the features or components based on the risk score (high, medium, low).
4. **Test Planning Based on Risk:** Allocate more test resources to high-risk areas (more test cases, deeper testing) and fewer to low-risk areas.
5. **Continuous Risk Review:** Update risk assessments as the system evolves (e.g., after bug fixes or feature changes)

## Example

Project: Online Banking Application

**Features:**

- Login
- Fund Transfer
- Balance Inquiry
- Profile Update

**Risk Assessment Table:**
| Feature | Probability of Failure | Impact of Failure | Risk Level |
|----------------|------------------------|-------------------|--------------|
| Login | Medium | High | High |
| Fund Transfer | High | Very High | Very High |
| Balance Inquiry| Low | Medium | Medium |
| Profile Update | Low | Low | Low |

### Test Focus Based on Risk:

- **Fund Transfer (Very High Risk):**
  - Perform intensive functional testing, boundary testing, negative testing, security testing, and load testing.
  - Test edge cases like transferring max limit, invalid accounts, and system failures during transactions.
- **Login (High Risk):**
  - Test for authentication security, session management, brute-force protection, and valid/invalid credentials.
- **Balance Inquiry (Medium Risk):**
  - Basic functional testing and check data accuracy under different account states.
- **Profile Update (Low Risk):**
  - Light functional testing since the risk is minimal.

# Regression Testing

Regression testing is a type of software testing that ensures that new code changes have not adversely affected the existing functionality of the application.

## Importance

- Software is updated frequently (new features, bug fixes, patches).
- Each change may introduce bugs in areas that were previously working.
- Regression testing ensures that the software remains stable after updates.

## When do

- After bug fixes
- After enhancements or new features
- During regular maintenance
- Before a major release

## Methods

1. **Retest All:** Run all existing test cases. Reliable but time-consuming.
2. **Regression Test Selection:** Select only relevant test cases related to the code changes.
3. **Test Case Prioritization:** Run high-priority test cases first (e.g., those covering critical features).
4. **Automated Regression Testing:** Use tools like Selenium, JUnit, Cypress to run regression tests automatically.

## Example

Project: Web-based e-commerce application

### Step 1: Initial Functionality

Users can:

- Add items to cart
- Checkout
- Pay using credit card
  You have test cases verifying all these features.

### Step 2: New Feature Added

Your development team adds a new feature: "Apply Discount Coupon" during checkout.

### Step 3: Run Regression Tests

You now perform regression testing to ensure:

- Adding to cart still works
- Checkout process is not broken
- Credit card payment works as expected
- UI elements haven't shifted or broken
- New "Apply Coupon" feature doesn’t affect total price calculation unexpectedly

### Step 4: Detect and Fix Issues

Suppose during regression testing, you find that applying a coupon breaks the cart total. This is a regression bug. You fix it and rerun tests.

# Smoke Testing

Smoke Testing is a preliminary level of testing to check whether the most crucial functionalities of a software build are working correctly.

Think of it as a "build verification test."

If the smoke test fails, the build is considered unstable and is rejected for further testing.

## Features

- **Scope:** Shallow and wide
- **Purpose:** To verify if major features work after a new build
- **Performed By:** Developers or testers
- **Automation:** Often automated
- **Frequency:** After each build
- **Duration:** Quick (minutes to an hour)

## Example

You're testing a banking app. A new build is deployed.

Smoke Test Checklist:

- App launches successfully
- User can log in
- Dashboard loads
- Transfer funds button appears

If one of these critical flows fails (e.g., login doesn’t work), testers reject the build and report it.

# Sanitiy Testing

Sanity Testing is a narrow and deep form of testing focused on a specific module or functionality after minor changes or bug fixes.

Think of it as a "rationality check."

It verifies that a particular feature behaves as expected, and no related functionality is broken.

## Features

- **Scope:** Deep and narrow
- **Purpose:** To check correctness of a particular fix or feature
- **Performed By:** QA testers
- **Automation:** Usually manual
- **Frequency:** After bug fixes or minor updates
- **Duration:** Short, but more focused than smoke

## Example

In a shopping cart system, a bug was reported:
"Coupon codes were not applying discounts."

After the fix:

Sanity Test Checklist:

- Apply valid coupon → discount appears
- Apply expired coupon → error shown
- Price calculation updates correctly

If all passes, it’s “sane” to proceed to full regression testing.

## Differences between Smoke Testing and Sanity Testing

| Feature          | Smoke Testing                    | Sanity Testing                           |
| ---------------- | -------------------------------- | ---------------------------------------- |
| Purpose          | Verify build stability           | Verify specific fix or update            |
| Scope            | Broad, shallow                   | Narrow, deep                             |
| Conducted After  | New build                        | Minor change or bug fix                  |
| Automation       | Often automated                  | Often manual                             |
| Build Acceptance | Yes                              | No (it's a checkpoint before regression) |
| Example          | Can user log in? Load dashboard? | Does coupon apply discount correctly?    |
