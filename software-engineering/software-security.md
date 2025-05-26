# Contents

- [Introduction](#introduction)
  - [Key Concepts](#key-concepts)
  - [Common Security Vulnerabilities](#common-security-vulnerabilities)
  - [Threats](#threats)
  - [Attacks](#attacks)
  - [Assets](#assets)
  - [Vulnerabilities](#vulnerabilities)
  - [Control (Countermeasure)](#control-countermeasure)
  - [Risk](#risk)
  - [Security Functional Requirements](#security-functional-requirements)
  - [Attack Surface](#attack-surface)
  - [Attack Tree](#attack-tree)
  - [Computer Security Strategy](#computer-security-strategy)
  - [Implementation](#implementation)
- [Malicious Software](#malicious-software)
  - [Virus](#virus)
  - [Worm](#worm)
  - [Trojan Horse (Trojan)](#trojan-horse-trojan)
  - [Ransomware](#ransomware)
  - [Spyware](#spyware)
  - [Adware](#adware)
  - [Rootkit](#rootkit)
  - [Keylogger](#keylogger)
  - [Botnet](#botnet)
  - [Summary](#summary)
  - [Advanced Persistent Threat]()
    - [Characteristics](#characteristics)
    - [Defending Against APTs](#defending-against-apts)
  - [Propagation](#propagation)
    - [Techniques](#techniques)
  - [Payload](#payload-malicious-action)
    - [Payload Types](#payload-types)
  - [Countermeasures](#countermeasures)
    - [Preventive Countermeasures](#preventive-countermeasures)
    - [Detective Countermeasures](#detective-countermeasures)
    - [Corrective Countermeasures](#corrective-countermeasures)
    - [Deterrent Countermeasures](#deterrent-countermeasures)
  - [Denial-of-Service](#denial-of-service)
    - [Objectives of DoS Attacks](#objectives-of-dos-attacks)
    - [Types of DoS Attack](#types-of-dos-attack)
    - [How DoS Attack Works](#how-dos-attack-works)
    - [Defense Strategies Against DoS Attacks](#defense-strategies-against-dos-attacks)
      - [Prevention (Before the Attack)](#prevention-before-the-attack)
      - [Detection (During the Attack)](#detection-during-the-attack)
      - [Mitigation (Active Response)](#mitigation-active-response)
      - [Recovery (After the Attack)](#recovery-after-the-attack)
  - [Flooding Attack](#flooding-attack)
    - [Types of Flooding Attacks](#types-of-flooding-attacks)
    - [How Flooding Attacks Work](#how-flooding-attacks-work)
  - [Application-Based Bandwidth Attacks](#application-based-bandwidth-attacks)
    - [How it works](#how-it-works)
- [Electronic User Authentication](#electronic-user-authentication)
  - [Types of Authentication Factors](#types-of-authentication-factors)
  - [Key Principles of Electronic User Authentication](#key-principles-of-electronic-user-authentication)
  - [Password-Based Authentication](#password-based-authentication)
    - [Workflow](#workflow-of-password-based-authentication)
    - [Password Storage Techniques](#password-storage-techniques)
    - [Security Concerns](#security-concerns)
    - [Best Practices](#best-practices-for-password)
  - [Token-Based Authentication](#token-based-authentication)
    - [Workflow](#workflow-of-token-based-authentication)
    - [Features](#features-of-token-based-authentication)
    - [Security Concerns](#security-concerns-1)
  - [Biometric Authentication](#biometric-authentication)
    - [Types](#types-of-biometric-authentication)
    - [Workflow](#workflow-of-biometric-authentication)
    - [Benifits](#benefits-of-biometric-authentication)
    - [Limitations](#limitations-of-biometric-authentication)
  - [Security Issues in User Authentication](#security-issues-in-user-authentication)
- [Access Control](#access-control)
  - [Access Control Principles](#access-control-principles)
  - [UNIX File Access Control](#unix-file-access-control)
    - [Components](#components-of-access-control-in-unix)
    - [File Types](#permission-types)
  - [Role-Based Access Control](#role-based-access-control)
    - [Components](#components-of-rabc)
    - [Workflow](#workflow-of-rbac)
    - [Benifits](#benefits-of-rbac)
    - [RBAC vs Other Models](#rbac-vs-other-models)
  - [Attribute-Based Access Control](#attribute-based-access-control)
    - [Components](#components-of-abac)
    - [Workflow](#abac-workflow)
    - [Benifits](#benifits-of-abac)
    - [ABAC vs RBAC](#abac-vs-rbac)
- [Database Security](#database-security)
  - [Database Architecture](#database-architecture)
  - [RDBMS](#rdbms)
  - [SQL Injection](#sql-injection)
    - [Types](#types-of-sqli)
    - [Example](#example)
    - [Countermeasures](#countermeasures-preventing-sql-injection)
  - [Database Access Control](#database-access-control)
    - [Types](#types-of-database-access-control)
    - [Countermeasures](#countermeasures-for-secure-access-control)
  - [Inference Attack](#inference-attack)
  - [Database Encryption](#database-encryption)
  - [Cross-Site Scripting (XSS)](#cross-site-scripting-xss)
    - [Types](#types-of-xss)
    - [Countermeasures](#countermeasures-against-xss)
  - [Cross-Site Request Forgery (CSRF)](#cross-site-request-forgery-csrf)
    - [Workflow](#workflow-of-csrf)
    - [Countermeasures](#countermeasures-against-csrf)
  - [Integrity](#integrity)
  - [Reliability](#reliability)
- [Blockchain in Data Security](#blockchain-in-data-security)
  - [Decentralization](#1-decentralization)
  - [Immutability](#2-immutability)
  - [Cryptographic Security](#3-cryptographic-security)
  - [Transparency and Auditability](#4-transparency-and-auditability)
  - [How Blockchain Enhances Security](#how-blockchain-enhances-security)
- [Firewall](#firewall)
  - [Characeterstics](#characeterstics)
  - [Access Policy in Firewalls](#access-policy-in-firewalls)
  - [Types of Firewalls](#types-of-firewalls)
  - [Firewall Basing](#firewall-basing)
- [Intruders](#intruders)
  - [Types of Intruders](#types-of-intruders)
  - [Intruder Techniques](#intruder-techniques)
  - [Intrusion Detection](#intrusion-detection)
    - [Types](#types-of-intrusion-detection-systems-ids)
  - [Intrusion Prevention Systems(IPS)](#intrusion-prevention-systemsips)
    - [Features](#key-features)
    - [IPS vs IDS](#ips-vs-ids)
    - [How IPS Works in Software Security](#how-ips-works-in-software-security)
  - [Host-Based Intrusion Detection System](#host-based-intrusion-detection-system)
    - [What HIDS Monitors](#what-hids-monitors)
    - [How HIDS Works](#how-hids-works)
  - [Network-Based Intrusion Detection System (NIDS)](#network-based-intrusion-detection-system-nids)
    - [Features](#features-of-nids)
- [Software Security Lifecycle](#software-security-lifecycle)
  - [Software Development Lifecycle](#software-development-lifecycle)
  - [SSDLC Phases](#ssdlc-phases)
  - [Security Requirements](#security-requirements)
  - [Security Training](#security-training)
  - [Security Metrics](#security-metrics)
  - [Compliance Reporting](#compliance-reporting)
  - [Risk-Based Security Testing](#risk-based-security-testing)
  - [Safe Code Touchpoints](#safe-code-touchpoints)
- [Buffer Overflow](#buffer-overflow)
  - [Causes](#causes-of-buffer-overflow)
  - [Consequences](#consequences)
  - [Example](#example-2)
  - [Defend](#defend-buffer-overflow)
    - [Safe Example](#safe-example)
  - [Stack Overflow](#stack-overflow)
  - [Heap Overflow](#heap-overflow)
  - [Integer Overflow](#integer-overflow)
  - [Concurrency](#concurrency)
    - [Race Condition](#race-condition)
      - [Example](#example-3)
      - [Prevent](#prevent-race-conditions)
  - [Blocking Time](#blocking-time)
    - [Types](#types-of-blocking)
  - [Priority Inversion](#priority-inversion)
  - [Deadlock](#deadlock)
    - [Security Concern](#security-concern)
    - [Conditions for Deadlock](#conditions-for-deadlock)
- [Distributed System Security]()
  - [Cryptographic Algorithm]()
    - [Types of Cryptographic](#types-of-cryptographic-algorithm)
  - [Access Control](#access-control-1)
  - [Attacks](#attacks-1)
  - [Risk Analysis](#risk-analysis)
    - [Goals](#goals-of-risk-analysis)
    - [Components](#components-of-risk-analysis)
    - [Process](#risk-assessment-process)

# Introduction

Software Security is the practice of designing, developing, and testing software in a way that protects it against security threats such as unauthorized access, data breaches, malware, and other malicious attacks. It is a subset of cybersecurity focused specifically on the security of software systems.

## Key Concepts

1. **Confidentiality:**
   - Ensures that sensitive information is only accessible to authorized users.
   - Example: Encrypting user passwords in a database.
2. **Integrity:**
   - Guarantees that data is not altered or tampered with by unauthorized entities.
   - Example: Using cryptographic hash functions to detect unauthorized changes.
3. **Availability:**
   - Ensures that systems and data are available when needed.
   - Example: Protecting against Denial of Service (DoS) attacks that could shut down access.
4. **Authentication:**
   - Verifies the identity of a user or system.
   - Example: Username and password login system or biometric authentication.
5. **Authorization:**
   - Determines what actions a user or system can perform after being authenticated.
   - Example: A regular user can read data, but only an admin can edit or delete it.
6. **Non-repudiation:**
   - Ensures that someone cannot deny the validity of their actions.
   - Example: Digital signatures in email communication.

## Common Security Vulnerabilities

| Vulnerability                  | Description                                                             | Example                                               |
| ------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------- |
| **SQL Injection**              | Malicious SQL queries are injected into input fields                    | `SELECT * FROM users WHERE username = 'admin' --'`    |
| **Cross-Site Scripting (XSS)** | Injects malicious scripts into trusted websites                         | `<script>alert('Hacked')</script>`                    |
| **Buffer Overflow**            | Overwrites memory by inputting more data than a buffer can handle       | Attacker sends more data than expected to a function  |
| **Broken Authentication**      | Poor session management allows unauthorized access                      | Insecure storage of session tokens                    |
| **Insecure Deserialization**   | Allows attackers to execute arbitrary code by modifying serialized data | Passing tampered objects to deserialization functions |

## Threats

A threat is a potential cause of an unwanted incident, which may result in harm to a system or organization.

**Example:**

A hacker who wants to steal user data from an online banking system is a threat.

**Types:**

- Natural: Earthquakes, floods
- Human: Hackers, insiders
- Environmental: Power failures

## Attacks

An attack is an actual attempt to exploit a vulnerability to cause harm or unauthorized behavior.

**Example:**

Using SQL Injection to steal data from a user database is an attack.

**Types:**

- Passive Attack: Eavesdropping, wiretapping
- Active Attack: Modification of data, DoS attacks

## Assets

Assets are components of the system that have value and must be protected.

**Example:**

- User credentials
- Source code
- Financial data
- Encryption keys

## Vulnerabilities

A vulnerability is a weakness in the system that can be exploited by a threat.

**Example:**

Allowing user input directly into SQL queries without validation is a vulnerability (leads to SQL Injection).

## Control (Countermeasure)

A control is a safeguard or countermeasure put in place to reduce risk by eliminating or minimizing vulnerabilities.

**Example:**

- Using input validation to prevent SQL Injection
- Using firewalls to block unauthorized access
- Applying encryption to secure data

## Risk

Risk is the potential loss or damage when a threat exploits a vulnerability. It is typically calculated as:

```
Risk = Threat × Vulnerability × Impact
```

**Example:**

If user credentials can be stolen through SQL injection (vulnerability), and hackers are actively scanning for it (threat), the risk is high, especially if data includes financial records (impact).

## Security Functional Requirements

These define the security behavior of the software, such as what it should do to protect against threats.

**Common Requirements:**

- Authentication (Who are you?)
- Authorization (What can you do?)
- Confidentiality (Prevent data disclosure)
- Integrity (Prevent data modification)
- Accountability (Logging and tracking)

**Example:**

“The system shall require multifactor authentication before granting access to admin functions.”

## Attack Surface

The attack surface is the total sum of the system's points where an unauthorized user can try to enter or extract data.

**Components:**

- APIs
- Login forms
- Network ports
- Open services

**Example:**
If a web application exposes 5 APIs, 2 login pages, and a file upload interface, all of these are part of the attack surface.

Minimizing the attack surface reduces the number of potential entry points for attackers.

## Attack Tree

An attack tree is a diagram showing how an asset might be attacked. The root is the goal (e.g., "Steal user data"), and branches show methods to achieve that goal.

**Example:**

```
Goal: Steal user data
├── Exploit SQL Injection
│   ├── Find vulnerable input field
│   └── Inject malicious SQL
├── Bypass authentication
│   ├── Brute-force credentials
│   └── Exploit session management
└── Exploit XSS
    ├── Inject script in comments
    └── Steal session cookie
```

Attack trees help analyze how complex or simple an attack is and prioritize defenses.

## Computer Security Strategy

A computer security strategy is a plan to protect digital assets and ensure software systems operate securely. It includes:

1. **Prevention:** Stop attacks from happening
   - Firewalls, input validation, access controls
2. **Detection:** Discover attacks in progress
   - Intrusion detection systems (IDS), logs, alerts
3. **Response:** React to security breaches
   - Incident response plans, forensic analysis
4. **Recovery:** Restore systems to normal
   - Backups, system reimaging

## Implementation

| Concept              | Description     | Example                                                    |
| -------------------- | --------------- | ---------------------------------------------------------- |
| Asset                | Valuable data   | Customer bank account details                              |
| Threat               | Malicious actor | Hacker targeting financial info                            |
| Vulnerability        | Weakness        | Outdated password storage (e.g., plain text)               |
| Attack               | Exploitation    | Hacker steals passwords from a data breach                 |
| Risk                 | Consequence     | Loss of user trust, legal penalties                        |
| Control              | Mitigation      | Use bcrypt to hash passwords, enforce MFA                  |
| Attack Surface       | Entry points    | Login page, REST APIs                                      |
| Attack Tree          | Planning tool   | Shows possible attack paths                                |
| Security Requirement | Design rule     | "Passwords must be stored using strong hashing algorithms" |
| Security Strategy    | Plan            | Regular pen-testing, backups, incident response plan       |

# Malicious Software

Malicious software, commonly known as malware, refers to any software intentionally designed to cause damage to a computer system, steal sensitive information, or disrupt operations.

## Types

### Virus

- **Definition:** A virus is a type of malware that attaches itself to a legitimate program or file and spreads when the infected program is executed.
- **How it works:** It needs user action to run and replicate. Once activated, it can corrupt, delete files, or slow down the system.
- **Example: ILOVEYOU Virus (2000)**
  - Spread through an email with the subject "ILOVEYOU" and an attachment. Once opened, it overwrote system files and spread by emailing itself to the victim’s contacts.

### Worm

- **Definition:** A worm is a standalone malware that replicates itself to spread to other computers, often without any user interaction.
- **How it works:** Exploits vulnerabilities in network services to propagate.
- **Example: SQL Slammer (2003)**
  - Exploited a vulnerability in Microsoft SQL Server, causing denial of service on some internet hosts and crashing banks and airline systems within minutes.

### Trojan Horse (Trojan)

- **Definition:** A Trojan is malware disguised as a legitimate program to trick users into executing it.
- **How it works:** Unlike viruses or worms, Trojans do not self-replicate. They create a backdoor for remote access or data theft.
- **Example: Zeus Trojan**
  - Targeted Windows systems to steal banking information by logging keystrokes and form data.

### Ransomware

- **Definition:** Ransomware encrypts the victim’s data and demands payment (usually in cryptocurrency) to restore access.
- **How it works:** Often spread through phishing emails or exploiting vulnerabilities. It locks the user out of their system or files.
- **Example: WannaCry (2017)**
  - Used a Windows exploit to infect thousands of computers worldwide, demanding Bitcoin payments to unlock files.

### Spyware

- **Definition:** Spyware is designed to secretly monitor and collect user information without their knowledge.
- **How it works:** Can log keystrokes, capture screenshots, track browser history, and send data to third parties.
- **Example: CoolWebSearch**
  - Redirected search results, monitored user behavior, and altered web browser settings.

### Adware

- **Definition:** Adware automatically delivers or displays advertisements. While not always malicious, some adware tracks user behavior and can be intrusive.
- **How it works:** Often bundled with free software and can lead to spyware infections.
- **Example: Fireball**
  - Took over browsers, tracked web activity, and had the ability to run arbitrary code.

### Rootkit

- **Definition:** A rootkit is a collection of tools that enables unauthorized access and hides its presence or the presence of other malware.
- **How it works:** It operates at the root or administrative level and is difficult to detect.
- **Example: Sony BMG Rootkit (2005)**
  - Installed with certain music CDs to prevent copying but also created vulnerabilities and hid files from users.

### Keylogger

- **Definition:** A keylogger records keystrokes to capture sensitive data like usernames, passwords, and credit card numbers.
- **How it works:** Can be hardware- or software-based and often runs in the background silently.
- **Example: Ardamax Keylogger**
  - Captures typed data and sends logs to attackers without user awareness.

### Botnet

- **Definition:** A botnet is a network of infected devices (bots) controlled by a central attacker (botmaster).
- **How it works:** Bots perform tasks like spamming, DDoS attacks, or spreading more malware.
- **Example: Mirai Botnet (2016)**
  - Infected IoT devices and launched massive DDoS attacks, including one that brought down DNS provider Dyn.

### Summary

| **Malware Type** | **Self-Replicating** | **Requires User Action** | **Typical Damage**                |
| ---------------- | -------------------- | ------------------------ | --------------------------------- |
| Virus            | Yes                  | Yes                      | File corruption, slow performance |
| Worm             | Yes                  | No                       | Network congestion, system crash  |
| Trojan           | No                   | Yes                      | Data theft, remote access         |
| Ransomware       | No                   | Often                    | Data encryption, financial loss   |
| Spyware          | No                   | Sometimes                | Surveillance, privacy invasion    |
| Adware           | No                   | Sometimes                | Annoying ads, tracking            |
| Rootkit          | No                   | No                       | Hidden access, persistence        |
| Keylogger        | No                   | Sometimes                | Credential theft                  |
| Botnet           | Yes (via controller) | No                       | Large-scale attacks, spamming     |

## Advanced Persistent Threat

An Advanced Persistent Threat (APT) is a highly sophisticated and targeted cyber attack in which an intruder gains unauthorized access to a system or network and remains undetected for an extended period of time.

### Characteristics

- **Advanced:** Uses sophisticated techniques (e.g., zero-day exploits, spear-phishing, malware).
- **Persistent:** Maintains long-term access, often by using stealthy methods like rootkits or backdoors.
- **Threat:** Represents an active human attacker with clear objectives, not just random malware.
- **Targeted:** Focused on specific organizations, industries, or even individuals.
- **Stealthy:** Operates covertly to avoid detection and prolong access.

#### Defending Against APTs

- **Network Segmentation:** Isolating systems to limit attacker movement within the network.
- **Intrusion Detection/Prevention Systems (IDS/IPS):** Detecting suspicious behavior early.
- **Endpoint Detection and Response (EDR):** Monitoring devices for signs of compromise.
- **Regular Patch Management:** Fixing vulnerabilities to prevent exploit attempts.
- **User Education:** Training employees to recognize phishing and social engineering.
- **Zero Trust Architecture:** Verifying every access request to prevent lateral movement.

## Propagation

Propagation refers to the method or mechanism by which malware spreads from one system to another. The goal is often to infect as many systems as possible or to reach a specific target.

### Techniques

| **Technique**          | **Description**                                                    | **Example**                         |
| ---------------------- | ------------------------------------------------------------------ | ----------------------------------- |
| **Email Attachments**  | Malware sent as attachments or links in phishing emails.           | ILOVEYOU virus                      |
| **Removable Media**    | Spread via USB drives or external hard drives.                     | Stuxnet                             |
| **Network Exploits**   | Uses vulnerabilities in network services to spread across systems. | SQL Slammer worm                    |
| **Drive-by Downloads** | Malware automatically downloaded from compromised websites.        | Blackhole Exploit Kit               |
| **Social Engineering** | Tricks users into executing malicious files.                       | Fake antivirus pop-ups              |
| **File Sharing (P2P)** | Malware embedded in shared files.                                  | Malware disguised as pirated movies |
| **Botnets**            | Commanded remotely to spread or install additional malware.        | Mirai botnet                        |

## Payload (Malicious Action)

The payload is the actual code or functionality the malware executes once it has successfully infected a system. It is the harmful part of malware designed to damage, steal, disrupt, or spy.

### Payload Types

| **Payload Type**          | **Effect on the System**                                          | **Example**            |
| ------------------------- | ----------------------------------------------------------------- | ---------------------- |
| **Data Destruction**      | Deletes or corrupts files.                                        | CIH (Chernobyl) virus  |
| **Ransomware**            | Encrypts files and demands payment.                               | WannaCry, CryptoLocker |
| **Data Theft**            | Steals sensitive information (credentials, financial data, etc.). | Zeus Trojan            |
| **Spying (Surveillance)** | Logs keystrokes, captures screenshots, monitors activity.         | FinFisher              |
| **Botnet Integration**    | Turns the system into a bot for distributed attacks.              | Mirai botnet           |
| **Denial of Service**     | Disrupts system or network functionality.                         | MyDoom worm            |
| **Privilege Escalation**  | Gains higher permissions to access secure parts of the system.    | Rootkits               |

## Countermeasures

### Preventive Countermeasures

These aim to stop attacks before they happen.

| **Technique**                      | **Description**                                                                | **Example**                             |
| ---------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------- |
| **Firewalls**                      | Monitor and control incoming/outgoing network traffic based on security rules. | Block access to malicious IP addresses. |
| **Antivirus Software**             | Detects and removes known malware.                                             | Norton, Kaspersky, Windows Defender.    |
| **Access Control**                 | Limits user permissions based on roles.                                        | Role-Based Access Control (RBAC).       |
| **Patch Management**               | Regularly updates software to fix known vulnerabilities.                       | Applying Microsoft security patches.    |
| **Code Reviews & Static Analysis** | Review source code for vulnerabilities before deployment.                      | Using tools like SonarQube, Coverity.   |

### Detective Countermeasures

These identify and report attacks or suspicious activities as they occur or after they’ve occurred.

| **Technique**                         | **Description**                                                 | **Example**             |
| ------------------------------------- | --------------------------------------------------------------- | ----------------------- |
| **Intrusion Detection Systems (IDS)** | Monitors network/system for malicious activity.                 | Snort, Suricata.        |
| **Log Monitoring**                    | Analyzing system logs for anomalies or unauthorized activities. | SIEM tools like Splunk. |
| **File Integrity Checking**           | Detects unauthorized changes to critical files.                 | Tripwire.               |
| **Audit Trails**                      | Record user/system activities for later analysis.               | Security event logs.    |

### Corrective Countermeasures

These help mitigate damage and restore systems after an attack.

| **Technique**               | **Description**                                              | **Example**                               |
| --------------------------- | ------------------------------------------------------------ | ----------------------------------------- |
| **Backups**                 | Restores data lost due to malware or system failure.         | Daily backups to cloud or external drive. |
| **Incident Response Plans** | Predefined steps to respond to security incidents.           | Shutting down infected servers.           |
| **System Reimaging**        | Wiping and reinstalling OS to remove malware.                | Reimaging infected laptops.               |
| **Patching Post-Breach**    | Applying patches to vulnerabilities exploited in the attack. | Emergency patching of zero-day flaws.     |

### Deterrent Countermeasures

These discourage attackers by increasing the difficulty or risk of being caught.

| **Technique**                         | **Description**                                                           | **Example**                    |
| ------------------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| **Legal Warning Banners**             | Warn users that activity is monitored and unauthorized access is a crime. | Login page warnings.           |
| **Security Awareness Training**       | Educating staff on phishing, secure practices.                            | Annual cybersecurity training. |
| **Multi-Factor Authentication (MFA)** | Adds an extra layer of security to login processes.                       | OTP, biometric authentication. |

## Denial-of-Service

A DoS attack disrupts the normal functionality of a system by exhausting its resources (CPU, memory, bandwidth, etc.) so that legitimate users can't access services.

### Objectives of DoS Attacks

- **Service Disruption** – Prevent access to websites, servers, or applications.
- **Reputation Damage** – Affect user trust and brand credibility.
- **Financial Loss** – Interrupt business operations, causing downtime and revenue loss.
- **Diversion** – Distract IT teams while other malicious activities are performed (e.g., data theft).

### Types of DoS Attack

| **Type**                                 | **Description**                                                                    | **Example**                           |
| ---------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------- |
| **Volume-Based Attacks**                 | Overload the bandwidth with massive traffic.                                       | UDP flood, ICMP flood (Ping of Death) |
| **Protocol Attacks**                     | Exploit weaknesses in protocols (TCP/IP, HTTP, etc.) to consume resources.         | SYN flood, Ping of Death              |
| **Application Layer Attacks**            | Target web servers or apps with seemingly valid requests to exhaust CPU or memory. | HTTP GET/POST flood, Slowloris        |
| **Distributed Denial-of-Service (DDoS)** | Multiple machines (botnet) used to launch a coordinated attack.                    | Mirai Botnet attack (2016)            |

### How DoS Attack Works

1. Attacker identifies a target (e.g., a web server).
2. Sends a large number of requests or malicious packets.
3. System resources are overwhelmed, causing:
   - Slow performance
   - Service downtime
   - Crash or reboot

### Defense Strategies Against DoS Attacks

#### Prevention (Before the Attack)

| **Method**                                    | **Description**                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| **Firewalls and Access Control Lists (ACLs)** | Block known malicious IPs or restrict unnecessary services.                     |
| **Rate Limiting**                             | Control the number of requests from a single IP or client.                      |
| **Web Application Firewalls (WAFs)**          | Filter HTTP traffic, block abusive request patterns.                            |
| **Load Balancers**                            | Distribute traffic across multiple servers to avoid overloading one.            |
| **Content Delivery Networks (CDNs)**          | Offload traffic and cache content closer to users, shielding the origin server. |
| **Service Redundancy**                        | Use failover systems or multi-region infrastructure for high availability.      |
| **Application Hardening**                     | Optimize code and system configuration to handle high traffic gracefully.       |

#### Detection (During the Attack)

| **Tool/Method**                       | **Purpose**                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------- |
| **Intrusion Detection Systems (IDS)** | Monitor network traffic for signs of DoS patterns.                              |
| **Traffic Anomaly Detection**         | Use baselines to detect spikes or irregular behavior.                           |
| **Logging and Monitoring**            | Real-time logs (e.g., from web servers, firewalls) help spot abnormal activity. |

#### Mitigation (Active Response)

| **Method**                        | **Action**                                                                    |
| --------------------------------- | ----------------------------------------------------------------------------- |
| **Blackholing / Sinkholing**      | Redirect malicious traffic to a "black hole" where it's dropped.              |
| **Traffic Filtering**             | Drop traffic from IPs with suspicious patterns or use geofencing.             |
| **Challenge-Response Techniques** | Use CAPTCHA or JavaScript checks to verify real users.                        |
| **Rate Throttling**               | Dynamically reduce connection/request limits when under attack.               |
| **Cloud-Based DDoS Protection**   | Use services like Cloudflare, AWS Shield, or Akamai to absorb attack traffic. |

#### Recovery (After the Attack)

| **Action**                          | **Purpose**                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| **Audit and Forensics**             | Analyze logs and behavior to understand attack vectors and source.           |
| **Patch Vulnerabilities**           | Fix weaknesses exploited during the attack (e.g., insecure endpoints).       |
| **Incident Reporting**              | Notify ISPs, CERT teams, or law enforcement if needed.                       |
| **Restore Services**                | Gradually restore full services after confirming stability and safety.       |
| **Communication with Stakeholders** | Update customers, partners, and internal teams on status and measures taken. |

## Flooding Attack

A flooding attack sends a high volume of fake or malicious data packets or requests to a system, with the intention of consuming its resources (like bandwidth, CPU, or memory) and crashing or slowing down the target.

A flooding attack is a type of Denial-of-Service (DoS) attack where the attacker attempts to overwhelm a target system, network, or application by sending a massive volume of traffic or requests, consuming system resources and making services unavailable to legitimate users.

### Types of Flooding Attacks

| **Type**                | **Description**                                                                         | **Protocol Targeted**   | **Example**         |
| ----------------------- | --------------------------------------------------------------------------------------- | ----------------------- | ------------------- |
| **ICMP Flood**          | Sends excessive ICMP Echo Requests (pings) to exhaust bandwidth and processing.         | ICMP (Ping)             | Ping Flood          |
| **UDP Flood**           | Sends many UDP packets to random ports; causes host to reply with unreachable messages. | UDP                     | UDP Flood           |
| **TCP SYN Flood**       | Sends many SYN requests and never completes the handshake, exhausting server resources. | TCP                     | SYN Flood           |
| **HTTP Flood**          | Sends many legitimate-looking HTTP GET/POST requests to exhaust web server resources.   | HTTP                    | HTTP GET/POST Flood |
| **DNS Flood**           | Sends numerous fake DNS requests to overwhelm the DNS server.                           | DNS                     | DNS Query Flood     |
| **ARP Flood**           | Sends a large number of ARP replies to overflow the ARP cache and disrupt the network.  | ARP                     | ARP Poisoning       |
| **Amplification Flood** | Uses small requests that trigger large responses to overwhelm the victim.               | Varies (DNS, NTP, etc.) | DNS Amplification   |

### How Flooding Attacks Work

1. Attacker identifies a target system or server.
2. Massively sends requests or packets to the target.
3. Target system uses up resources (bandwidth, memory, processing power).
4. System slows down, crashes, or becomes unavailable to legitimate users.

## Application-Based Bandwidth Attacks

An application-based bandwidth attack is a cyberattack where the attacker sends high volumes of requests at the application layer, such as HTTP, DNS, or SMTP, causing resource exhaustion and network congestion, which affects service availability.

Application-Based Bandwidth Attacks are a specific type of Denial-of-Service (DoS)/Distributed DoS (DDoS) attack where the application layer (Layer 7 of the OSI model) is targeted using seemingly legitimate requests to consume excessive bandwidth and server resources, ultimately denying access to legitimate users.

Unlike traditional network-based flooding attacks, these are harder to detect because the traffic often resembles normal user behavior.

### How it works

1. Attacker sends many legitimate-looking requests (e.g., HTTP GET/POST).
2. Each request triggers bandwidth-heavy responses (e.g., large files, media, database queries).
3. Server consumes both processing power and outgoing bandwidth.
4. Network bandwidth and server capacity are saturated, denying service to real users.

# Electronic User Authentication

Electronic User Authentication is the process of verifying the identity of a user or system trying to access a software application, service, or resource. It is a fundamental part of access control, ensuring that only legitimate users can gain access and perform authorized actions.

## Types of Authentication Factors

| Factor Type        | Description        | Example                         |
| ------------------ | ------------------ | ------------------------------- |
| Something you know | Knowledge-based    | Password, PIN                   |
| Something you have | Possession-based   | Smart card, OTP token           |
| Something you are  | Inherent/biometric | Fingerprint, facial recognition |
| Somewhere you are  | Location-based     | GPS, IP address                 |
| Something you do   | Behavior-based     | Typing rhythm, mouse movement   |

**Multi-Factor Authentication (MFA):** Combines two or more factors for stronger security.

## Key Principles of Electronic User Authentication

1. **Identification**
   - The process where a user asserts an identity (e.g., username or ID).
   - Example: Typing in "john_doe" on a login page.
2. **Authentication**
   - The verification of the identity claimed in the identification step.
   - Done by validating credentials such as passwords, tokens, biometrics.
   - Example: Entering a password that matches the one stored for "john_doe".
3. **Authorization**
   - Once authenticated, the system checks what resources the user is allowed to access.
   - Example: John is only allowed to view his own documents, not admin panels.
4. **Accountability**
   - Ensuring actions can be traced back to the authenticated user.
   - Requires logging, auditing, and unique user IDs.
   - Example: Keeping a log that shows "john_doe deleted file X at 10:42 AM".
5. **Non-repudiation**
   - The inability of a user to deny having performed an action.
   - Example: A digitally signed transaction proves John authorized a payment.

## Password-Based Authentication

Password-Based Authentication is the most common and traditional method of verifying a user’s identity. It involves the user providing a secret string (password) that only they should know, and the system verifies it against stored credentials.

It is part of the **“something you know”** authentication factor.

### Workflow of Password-Based Authentication

1. **User Registration**
   - The user creates a username and password.
   - The password is hashed and salted, then stored in a secure database.
2. **User Login**
   - The user provides the username and password.
   - The system hashes the input password and compares it to the stored hash.
   - If they match, the user is authenticated.

### Password Storage Techniques

- **Hashing:** Transforms the password into a fixed-length string. One-way, non-reversible.
- **Salting:** Adds a unique random value to each password before hashing to prevent dictionary attacks.
- **Key Stretching:** Uses algorithms like bcrypt, PBKDF2, or Argon2 to make hashing slower and more secure.

### Security Concerns

- **Brute-force attack:** Trying all possible password combinations.
- **Dictionary attack:** Using common passwords from a list.
- **Phishing:** Tricking users into revealing passwords.
- **Keylogging:** Capturing typed passwords with malware.
- **Credential stuffing:** Using leaked credentials from other sites.

### Best Practices for Password

1. **Enforce strong passwords:** Mix of uppercase, lowercase, digits, symbols
2. **Implement account lockout:** Temporarily disable login after several failed attempts
3. **Use salting and hashing:** Prevents password database theft from becoming catastrophic
4. **Support Multi-Factor Authentication (MFA):** Adds a second layer of security
5. **Password expiration policies:** Optional in modern security, but helpful in high-risk systems
6. Do not store plain text passwords

## Token-Based Authentication

Token-Based Authentication is a method where a user is authenticated once, and a token is issued to them. This token is used to access protected resources instead of sending the username and password repeatedly.

It belongs to the **“something you have”** authentication factor.

### Workflow of Token-Based Authentication

1. **Login:** User submits username and password.
2. **Token Generation:** If credentials are valid, the server generates a token (e.g., JWT - JSON Web Token).
3. **Token Storage:** The token is sent to the client. The client stores the token (e.g., in browser local storage or mobile memory).
4. **Subsequent Requests:** Client includes the token in the `Authorization` header: `Authorization: Bearer <token>`
5. **Token Validation:** Server verifies the token on every request without needing to query a session store.
6. **Access Granted:** If the token is valid and not expired, the request is processed.

### Features of Token Based Authentication

- **Stateless:** No need to store sessions on the server.
- **Scalable:** Perfect for distributed or microservice systems.
- **Tamper-Proof:** Tokens are signed (e.g., with HMAC SHA256).
- **Custom Claims:** Can include user info, roles, permissions.

### Security Concerns

| Threat         | Description                                | Mitigation                                     |
| -------------- | ------------------------------------------ | ---------------------------------------------- |
| Token theft    | If attacker steals token, they gain access | Use HTTPS; set short expiration; rotate tokens |
| Replay attacks | Reusing a valid token                      | Use nonce, IP binding, or refresh tokens       |
| Expired tokens | Tokens need to be refreshed periodically   | Use Refresh Tokens and access token rotation   |

## Biometric Authentication

Biometric Authentication is a method of verifying a user's identity using unique biological or behavioral characteristics. It belongs to the "something you are" factor of authentication.

These traits are inherent to the user, making biometric systems more resistant to theft or impersonation compared to passwords or tokens.

### Types of Biometric Authentication

| Type                    | Description                                            | Example                         |
| ----------------------- | ------------------------------------------------------ | ------------------------------- |
| Fingerprint Recognition | Analyzes the unique patterns of a person’s fingerprint | Phone unlock, secure apps       |
| Facial Recognition      | Maps and matches facial features                       | Face ID on iPhones              |
| Iris/Retina Scan        | Scans the eye's patterns                               | High-security facilities        |
| Voice Recognition       | Matches voice patterns                                 | Voice-enabled banking           |
| Hand Geometry           | Measures hand shape, finger length                     | Secure access control           |
| Behavioral Biometrics   | Analyzes typing speed, gait, or mouse use              | Fraud detection in banking apps |

### Workflow of Biometric Authentication

1. **Enrollment:**
   - The user provides a biometric sample (e.g., fingerprint).
   - System creates a template (a digital map, not the actual image).
   - Template is securely stored in a biometric database or device.
2. **Authentication:**
   - The user provides a new biometric sample.
   - The system extracts features from the sample.
   - It compares these with the stored template.
   - If similarity score exceeds the threshold → Access granted.

### Benefits of Biometric Authentication

- **High security:** Hard to steal or duplicate biometric data
- **Convenience No:** need to remember passwords
- **Non-transferable:** Biometrics are unique to each individual
- **Fast authentication:** Often faster than typing a password

### Limitations of Biometric Authentication

| Limitation                  | Description                                  | Mitigation                                            |
| --------------------------- | -------------------------------------------- | ----------------------------------------------------- |
| False Acceptance Rate (FAR) | Unauthorized user is accepted                | Use multi-modal biometrics or lower tolerance         |
| False Rejection Rate (FRR)  | Authorized user is denied                    | Improve sensor quality or re-enroll users             |
| Spoofing attacks            | Use of fake fingerprints or photos           | Use liveness detection (e.g., blink detection, pulse) |
| Data privacy                | Biometric data is sensitive and irreversible | Store templates securely, use on-device storage       |
| Hardware dependency         | Needs specific sensors                       | Limited to supported devices only                     |

## Security Issues in User Authentication

1. **Weak Passwords**

- **Issue:** Users often create simple, easy-to-guess passwords (e.g., 123456, password).
- **Attack:** Brute-force or dictionary attacks can easily break weak passwords.
- **Example:** A user uses abc123 as their password for a bank portal. An attacker can guess this from a list of common passwords and gain unauthorized access.

2. **Password Reuse Across Sites**
   - **Issue:** Users reuse the same password on multiple websites.
   - **Attack:** Credential stuffing – an attacker uses leaked credentials from one site to try logging into others.
   - **Example:** A password leaked from a social media breach is used to access a user’s email account.
3. **Phishing Attacks**

- **Issue:** Attackers trick users into giving up their credentials through fake emails or websites.
- **Example:** A user receives a fake email appearing to be from their bank asking them to log in via a fake login page.

4. **Brute-Force and Dictionary Attacks**
   - **Issue:** Automated tools try many combinations of usernames and passwords until they find a match.
   - **Example:** An attacker uses a bot to try thousands of common passwords against a login page.
5. **Token Theft**
   - **Issue:** In token-based systems (e.g., JWT, OAuth), if a token is stolen, it can be reused by the attacker.
   - **Example:** An attacker steals a session token from browser local storage via XSS (Cross-Site Scripting) and impersonates the user.

# Access Control

Access control is a fundamental concept in software security that ensures only authorized users can access specific resources or perform particular operations. It works alongside authentication to safeguard data and systems from unauthorized use or malicious access.

## Access Control Principles

1. **Least Privilege:** Users or systems should be granted the minimum level of access — or permissions — necessary to perform their tasks.
2. **Need to Know:** Access to sensitive information is granted only if the user needs that information to perform their job functions.
3. **Separation of Duties:** No single user should have full control over all aspects of a critical process. Duties are divided among different people to reduce fraud or error.
4. **Defense in Depth:** Use multiple layers of security controls to protect resources, so if one layer fails, others are still in place.
5. **Fail-Safe Defaults:** By default, access should be denied unless explicitly allowed.
6. **Accountability:** Systems must keep track of who accessed what and when. All actions should be logged and traceable.
7. **Role-Based Access Control:** Users are assigned to roles, and roles have permissions. Access is granted based on the role, not the individual user.
8. **Attribute-Based Access Control:** Access decisions are based on attributes (user, resource, environment, etc.)

## UNIX File Access Control

UNIX systems (including Linux and macOS) implement a simple but effective access control model for files and directories based on:

1. User Authentication (Who are you?)
2. Access Control (What are you allowed to do?)

### Components of Access Control in UNIX:

1. **User (Owner):** The creator or assigned owner of the file.
2. **Group:** A set of users who share permissions to a file.
3. **Others:** All other users on the system.

### Permission Types:

Each file or directory can have three types of permissions:

- r – read
- w – write
- x – execute

Each permission is applied separately for:

- Owner
- Group
- Others

## Role-Based Access Control

RBAcs designed to restrict system access based on the roles assigned to users. RBAC is used in everything from operating systems and databases to enterprise applications and cloud services.

### Components of RABC

1. **Users** – Human or system accounts that need access.
2. **Roles** – A named collection of permissions (e.g., "Admin", "Editor", "Viewer").
3. **Permissions** – Allowed operations (e.g., read file, edit record, delete user).
4. **Sessions** – A user’s active connection that inherits the role’s permissions.

### Workflow of RBAC

Instead of assigning permissions directly to users, you:

- Assign permissions to roles.
- Assign roles to users.

This indirect assignment makes access control easier to manage, especially in large systems.

### Benefits of RBAC

- **Simplicity:** Easy to manage access for large numbers of users
- **Scalability:** Add new users or roles without modifying individual permissions
- **Security:** Reduces chance of granting too many permissions
- **Compliance:** Aligns with regulatory standards like HIPAA, GDPR, etc

### RBAC vs Other Models

- **RBAC:** Access based on user roles
- **DAC (Discretionary Access Control):** Owner controls who has access to resources
- **MAC (Mandatory Access Control):** System-enforced access based on classification levels
- **ABAC (Attribute-Based Access Control):** Access based on attributes (e.g., time, location, user dept)

## Attribute-Based Access Control

Attribute-Based Access Control (ABAC) is a fine-grained access control model used in software security where access decisions are based on attributes of the user, resource, action, and environment.

### Components of ABAC

- **Subject Attributes:** Characteristics of the user (e.g., department, job title, security clearance).
- **Resource Attributes:** Characteristics of the object/data (e.g., sensitivity level, owner).
- **Action Attributes:** The operation being performed (e.g., read, write, delete).
- **Environment Attributes:** Contextual info (e.g., time of day, IP address, location).

### ABAC Workflow

Access is granted when a policy rule evaluates to TRUE using attribute values.

- A user requests to perform an action on a resource.
- The system collects all relevant attributes.
- The access control policy is evaluated.
- Access is granted or denied based on the result.

### Benifits of ABAC

- **Fine-grained control:** Supports complex access rules based on real-time context
- **Dynamic policies:** No need to create/update roles manually for every condition
- **Scalability:** Easily adapts to large, changing environments
- **Separation of policy and logic:** Policies can be changed without modifying application code

### ABAC vs RBAC

| Feature           | RBAC                        | ABAC                              |
| ----------------- | --------------------------- | --------------------------------- |
| Based On          | Roles                       | Attributes                        |
| Flexibility       | Moderate                    | High                              |
| Granularity       | Coarse-grained              | Fine-grained                      |
| Dynamic Decisions | No (static roles)           | Yes (evaluates in real-time)      |
| Scalability       | Challenging with many roles | Scales better with fewer policies |

# Database Security

## Database Architecture

<img src="./../images/software-security/database_architecture.png" />

## RDBMS

A relational database is a type of database that organizes data into tables (relations), where each table consists of rows and columns. The tables are related to each other through primary keys and foreign keys.

### Key Concepts

- **Tables:** Data is stored in structured tables.
- **Rows (Records):** Each row represents a unique record.
- **Columns (Fields):** Each column stores a specific type of data.
- **Primary Key:** A unique identifier for each record in a table.
- **Foreign Key:** A column that establishes a relationship between two tables

## SQL Injection

SQL Injection is a security vulnerability that allows attackers to manipulate SQL queries by injecting malicious input into a database query. This can lead to unauthorized access, data leakage, and even deletion of data.

### Types of SQLi

| Type                | Description                                      | Output Visibility | Example                             |
| ------------------- | ------------------------------------------------ | ----------------- | ----------------------------------- |
| In-band (Classic)   | Attack and result use same channel               | Yes               | `' OR 1=1 --`                       |
| Error-Based         | Uses DB error messages                           | Yes               | `' AND 1=CONVERT(int, 'a') --`      |
| Union-Based         | Uses UNION to extract data                       | Yes               | `' UNION SELECT username, pass --`  |
| Blind - Boolean     | Response changes on true/false                   | No                | `' AND 1=1 --` vs `' AND 1=2 --`    |
| Blind - Time-Based  | Uses delay functions to infer data               | No                | `' IF(1=1, SLEEP(5), 0) --`         |
| Out-of-Band (OOB)   | Uses DNS or HTTP for data exfiltration           | Maybe             | `'; EXEC xp_cmdshell('curl ...')--` |
| Second-Order        | Payload stored and executed later                | Maybe             | Stored in user profile              |
| Stored (Persistent) | Malicious input stored in DB for later execution | Yes/No            | Malicious comment                   |

### Example

Consider a login system where users enter their username and password. The system checks credentials with the following SQL query:

```sql
SELECT * FROM users WHERE username = 'user123' AND password = 'password123';
```

An attacker can input the following in the username field:

```sql
' OR '1' = '1
```

This modifies the query to:

```sql
SELECT * FROM users WHERE username = '' OR '1' = '1' AND password = 'password123';
```

Since `1 = 1` is always true, the attacker gains access without a valid password.

### Countermeasures: Preventing SQL Injection

1. **Parameterized Queries:**
   ```py
   cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
   ```
2. **Input Validation and Sanitization:** Validate input types, lengths, and formats.
3. **Error Handling:** Don’t expose database error messages to users.
4. **Least Privilege Principle:** The database account used by the application should have the least privileges necessary. Never use the root/admin user for app access.

## Database Access Control

Database Access Control is a security mechanism that determines who is allowed to access the database, and what actions they are allowed to perform. It ensures that unauthorized users cannot view, change, or delete sensitive data.

### Types of Database Access Control

| Model                                 | Description                                                      | Example                                              |
| ------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------- |
| Discretionary Access Control (DAC)    | Data owner decides who can access data                           | User A grants read access on a table to User B       |
| Mandatory Access Control (MAC)        | System enforces access policies based on classification          | Military systems with "Confidential", "Secret", etc. |
| Role-Based Access Control (RBAC)      | Access rights are assigned based on roles                        | "Manager" role can access salary data                |
| Attribute-Based Access Control (ABAC) | Access is based on attributes of user, resource, and environment | Access only if `user.dept = "HR"` AND `time < 5 PM`  |

### Countermeasures for Secure Access Control

1. **Implement Role-Based Access Control (RBAC):** Assign only necessary privileges per role
2. **Use Least Privilege Principle:** Users and apps should get minimum required permissions
3. **Regularly Audit User Privileges:** Periodically review and revoke unnecessary permissions
4. **Disable Default Accounts & Change Default Passwords:** Remove or secure installation-time users
5. **Enforce Strong Authentication:** Require strong passwords

## Inference Attack

An inference attack is a security threat where an attacker infers sensitive or restricted information by analyzing non-sensitive data that is available to them.

Instead of directly accessing confidential data, the attacker uses indirect clues, statistics, or patterns to deduce protected information.

### Types of Inference Attack

| Type               | Description                                                        | Example                                                                                |
| ------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Direct Inference   | Sensitive data is deduced from allowed queries or outputs.         | Getting salary of a specific employee by querying average salary of a small department |
| Indirect Inference | Combining multiple non-sensitive facts to deduce a sensitive fact. | Inferring health condition based on prescribed drugs or visit frequency                |

## Database Encryption

Database encryption is the process of converting sensitive data stored in a database into ciphertext using encryption algorithms, so that even if an unauthorized party accesses the database, the data remains unreadable without the decryption key.

It is a core data-at-rest protection technique, ensuring confidentiality even if attackers bypass other security layers.

### Types of Database Encryption

| Type                              | Description                                      | Use Case                                |
| --------------------------------- | ------------------------------------------------ | --------------------------------------- |
| Transparent Data Encryption (TDE) | Encrypts entire database files at storage level  | Protects against file-level attacks     |
| Column-Level Encryption           | Encrypts specific sensitive columns              | Useful for credit cards, SSNs, etc.     |
| Application-Level Encryption      | Data encrypted by the app before reaching the DB | Offers highest security, even from DBAs |
| Backup Encryption                 | Encrypts backups separately                      | Protects archives and offsite storage   |

## Cross-Site Scripting (XSS)

Cross-Site Scripting (XSS) is a client-side code injection attack where an attacker injects malicious scripts (usually JavaScript) into content that is served to users. These scripts then execute in the victim’s browser, potentially stealing sensitive data or taking control of user sessions.

### Types of XSS

| Type          | Description                                                            | Example                                     |
| ------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| Stored XSS    | Script is saved on the server (e.g., in DB), affecting multiple users. | Malicious comment on a blog post            |
| Reflected XSS | Script is part of the request and reflected in the response.           | Malicious link sent via email               |
| DOM-Based XSS | Script is executed through insecure JavaScript in the browser.         | JS reads `window.location` and injects HTML |

### Countermeasures Against XSS

1. **Input Validation and Sanitization:** Reject unexpected input (e.g., script tags, special characters).
2. Output Encoding
3. **HTTPOnly and Secure Cookies:** Prevents JavaScript from accessing session cookies.
4. **Avoid Inline JavaScript:** Move scripts to external files and avoid inline event handlers

## Cross-Site Request Forgery (CSRF)

Cross-Site Request Forgery (CSRF) is a web security vulnerability that tricks a logged-in user’s browser into sending an unauthorized request to a web application without the user’s consent.

- The attacker exploits the user’s active session with the trusted website.
- The victim unknowingly performs actions like changing passwords, transferring funds, or submitting forms.

### Workflow of CSRF

1. User logs into a trusted website (e.g., bank.com) and has an active session cookie.
2. User visits a malicious website controlled by the attacker.
3. The attacker’s site sends a forged request (e.g., form submission) to 4. bank.com using the user’s credentials automatically via the browser.
4. bank.com processes the request because the session cookie is sent automatically.
5. The attacker achieves unauthorized actions on behalf of the user.

### Countermeasures Against CSRF

1. **CSRF Tokens (Anti-CSRF Tokens):** Generate a unique, unpredictable token per user session.
2. **SameSite Cookies:** Set the SameSite attribute on cookies to Strict or Lax. Prevents browser from sending cookies on cross-site requests.
3. **Use HTTP Methods Appropriately:** Use POST for state-changing actions (not GET).
4. **Check Referer or Origin Header:** Reject requests from unknown origins.

## Integrity

Integrity refers to the accuracy, consistency, and trustworthiness of data stored in a database throughout its lifecycle. It ensures that the data is correct, not altered improperly, and follows business rules.

### Types of Integrity

1. **Entity Integrity**
   - Ensures that each row in a table is uniquely identified.
   - Example: Use of a primary key (e.g., CustomerID must not be NULL or duplicated).
2. **Referential Integrity**
   - Ensures relationships between tables remain consistent.
   - Example: A foreign key in the Orders table must match a primary key in the Customers table.
3. **Domain Integrity**
   - Ensures data values are within a valid range or type.
   - Example: Age must be an integer between 0 and 120.
4. **User-Defined Integrity**
   - Business rules specific to an application.
   - Example: A bank account balance should never go below zero.

### How works

- **Constraints:** Primary key, foreign key, CHECK, NOT NULL
- **Triggers:** Automated rules for specific events (e.g., update logs)
- **Stored Procedures:** Encapsulate and validate business logic
- **ACID Transactions:** Ensures consistency during concurrent operations

## Reliability

Reliability refers to the ability of the database system to perform its required functions under stated conditions for a specified period of time, without failure and with correct results.

It means users can trust the database to be up-to-date, available, and recoverable in case of issues.

**Example:**
An online retail store handles thousands of orders daily.

- During a peak sale, the database system experiences a sudden crash.
- Because of reliable backup systems and ACID compliance, all confirmed orders are preserved and recoverable.
- New orders are temporarily queued or redirected until the system is restored.

# Blockchain in Data Security

Blockchain is a distributed ledger technology that enhances data security by ensuring integrity, transparency, and immutability of records. Within the context of software security, blockchain is particularly valuable for applications that require tamper-proof data, secure transactions, and audit trails.

## Key Concepts

### 1. Decentralization

Instead of storing data in a single location (centralized database), blockchain stores data across a network of nodes. This removes the single point of failure and reduces the risk of data being compromised.

### 2. Immutability

Once data is recorded on a blockchain, it cannot be changed or deleted. This protects data integrity and helps detect unauthorized modifications.

### 3. Cryptographic Security

Blockchain uses hash functions, digital signatures, and encryption to secure data:

- Each block contains a hash of its contents and the hash of the previous block.
- Transactions are signed with private keys, ensuring authenticity and non-repudiation.

### 4. Transparency and Auditability

All transactions are visible to permitted users in a verifiable and time-stamped manner, making it easy to conduct audits.

## How Blockchain Enhances Security

- **Authentication:** Digital signatures verify identity without centralized authorities.
- **Data Integrity:** Cryptographic hashes prevent tampering with transaction data.
- **Audit Trails:** Immutable ledgers provide verifiable histories of actions.
- **Access Control:** Smart contracts can enforce fine-grained access rules.
- **Resilience:** Decentralization makes attacks like DDoS or data corruption harder

# Firewall

A firewall is a core component of software security that acts as a barrier between a trusted internal network and untrusted external networks (like the Internet). It monitors, filters, and controls incoming and outgoing network traffic based on predefined security rules, known as access policies.

## Characeterstics

- **Packet Filtering:** Examines network packets and filters them based on IP addresses, ports, and protocols.
- **Stateful Inspection:** Tracks the state of active connections and makes decisions based on the context of the traffic.
- **Proxy Services:** Acts as an intermediary between clients and servers, hiding internal IP addresses and providing an additional layer of inspection.
- **Application-layer Filtering:** Inspects traffic at the application layer (e.g., HTTP, FTP) to detect malicious activity.
- **Logging and Alerts:** Keeps logs of traffic and security events; can generate alerts for suspicious activity.
- **VPN Support:** Often supports secure tunneling protocols (e.g., IPsec) for remote access.

## Access Policy in Firewalls

An Access Policy defines which traffic is allowed or denied through the firewall. These are typically rule-based and follow the principle of least privilege — only allow what is explicitly permitted.

### Components of an Access Control Rule:

- Source IP address
- Destination IP address
- Protocol (e.g., TCP, UDP, ICMP)
- Port number (e.g., 80 for HTTP, 443 for HTTPS)
- Action (Allow / Deny)

### Example

| Rule # | Source IP | Destination IP | Protocol | Port      | Action |
| ------ | --------- | -------------- | -------- | --------- | ------ |
| 1      | Any       | 192.168.1.10   | TCP      | 22 (SSH)  | Allow  |
| 2      | Any       | 192.168.1.10   | TCP      | 80 (HTTP) | Allow  |
| 3      | Any       | 192.168.1.10   | TCP      | Any       | Deny   |

This policy:

- Allows SSH and HTTP to one internal server.
- Denies all other traffic, minimizing the attack surface.

## Types of Firewalls

| Type                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| **Packet-Filtering Firewall**       | Filters traffic based on IP/port/protocol. Fast but less intelligent.         |
| **Stateful Firewall**               | Tracks connections and context-aware. More secure than packet filtering.      |
| **Application-layer Firewall**      | Deep inspection of application data. Used in WAFs.                            |
| **Next-Generation Firewall (NGFW)** | Combines stateful inspection, IDS/IPS, and application awareness.             |
| **Software Firewall**               | Runs on a host system (e.g., Windows Firewall). Protects individual machines. |

## Firewall Basing

Firewall basing is about where and how a firewall is installed — either on a host, a network perimeter, or in distributed positions across a system.

Firewall basing affects:

- What traffic the firewall can see and control
- The level of security coverage
- System architecture and performance

Firewall basing refers to the location and architecture in which a firewall is deployed in a network. In the context of software security, it determines how and where the firewall is positioned to maximize protection, optimize performance, and enforce security policies effectively.

# Intruders

Intruders refer to unauthorized users or malicious entities that attempt to gain access to computer systems, networks, or applications with the intent of compromising confidentiality, integrity, or availability of data and services.

Intruders can exploit vulnerabilities in software or hardware to:

- Steal sensitive data
- Modify or delete information
- Disrupt services
- Install malicious software (malware)

## Types of Intruders

1. **Masqueraders**
   - **Definition:** External users who gain unauthorized access to a system by pretending to be a legitimate user.
   - **Example:** A hacker stealing a username and password to log in to a banking website.
2. **Misfeasors (Insider Threats)**
   - **Definition:** Legitimate users who misuse their access for malicious purposes.
   - **Example:** An employee leaking confidential company data to a competitor.
3. **Clandestine Users**
   - **Definition:** Users who gain supervisory or administrative control and use it to hide their actions and presence.
   - **Example:** An attacker who exploits an operating system vulnerability to become an administrator and disables logging.

## Intruder Techniques

Intruders use various techniques to penetrate systems:

- Password guessing or brute force attacks
- Phishing to trick users into revealing credentials
- Malware (viruses, trojans, spyware)
- SQL Injection to manipulate databases
- Zero-day exploits to take advantage of unknown vulnerabilities
- Backdoors to maintain unauthorized access

## Intrusion Detection

Intrusion Detection is the process of monitoring and analyzing computer systems and network traffic to detect signs of unauthorized access, misuse, or malicious activities. It is a key part of a comprehensive cybersecurity strategy.

### Types of Intrusion Detection Systems (IDS)

1. **Host-Based Intrusion Detection System (HIDS)**
   - Monitors activities on a specific computer or host.
   - Analyzes system logs, file integrity, user behavior, etc.
   - Example: OSSEC, Tripwire
2. **Network-Based Intrusion Detection System (NIDS)**
   - Monitors network traffic for suspicious activity.
   - Usually placed at strategic points (e.g., gateways, firewalls).
   - Example: Snort, Suricata

## Intrusion Prevention Systems(IPS)

An Intrusion Prevention System (IPS) is a critical network security technology designed to detect and prevent malicious activities or policy violations in real-time. Unlike an Intrusion Detection System (IDS) that only monitors and alerts, an IPS actively blocks or mitigates threats as they occur.

### Key Features

- **Real-time Traffic Analysis:** Continuously inspects incoming and outgoing network packets.
- **Automatic Threat Prevention:** Can block or quarantine harmful traffic immediately.
- **Signature-Based Detection:** Uses a database of known attack patterns (signatures) to identify threats.
- **Anomaly-Based Detection:** Detects unusual traffic behavior that deviates from normal patterns.
- **Protocol Analysis:** Understands network protocols to identify protocol-specific attacks.
- **Integration:** Often integrated with firewalls, SIEM systems, or endpoint security.
- **Logging and Alerting:** Keeps detailed logs and sends alerts for suspicious events.

### IPS vs IDS

| Aspect        | IDS                                                | IPS                                    |
| ------------- | -------------------------------------------------- | -------------------------------------- |
| **Function**  | Detects intrusions and alerts admins               | Detects and actively blocks intrusions |
| **Placement** | Typically out-of-band (monitors traffic passively) | Inline (directly in the traffic path)  |
| **Action**    | No direct action on traffic                        | Can drop, reset, or modify traffic     |

### How IPS Works in Software Security

1. **Traffic Inspection:** The IPS sits inline between the source and destination.
2. **Detection:** It inspects packets against signature databases and anomaly baselines.
3. **Decision:** If traffic matches a known attack or suspicious behavior, IPS acts.
4. **Prevention:** IPS blocks or drops the malicious traffic to prevent damage.
5. **Notification:** Generates alerts and logs the event for further analysis.

## Host-Based Intrusion Detection System

A Host-Based Intrusion Detection System (HIDS) is a security mechanism that monitors and analyzes activities on an individual host or computer to detect signs of unauthorized access, misuse, or malicious behavior.

### What HIDS Monitors

HIDS keeps track of various host-level elements, including:

- System files and configurations (e.g., file changes, permissions)
- Log files (e.g., login attempts, system events)
- Processes and applications (e.g., unexpected services running)
- Registry changes (on Windows systems)
- User activities (e.g., failed login attempts)
- Audit trails and kernel-level operations

### How HIDS Works

1. **Agent Installation:** A HIDS agent is installed on the target machine.
2. **Baseline Creation** The system captures a baseline of normal behavior and file integrity.
3. **Monitoring** It constantly monitors for deviations or anomalies from the baseline.
4. **Alerting** When suspicious activity is detected (e.g., modified system files, unauthorized access), it sends alerts to administrators.
5. **Logging** All detected events are logged for further analysis and auditing

## Network-Based Intrusion Detection System (NIDS)

A Network-Based Intrusion Detection System (NIDS) is a security tool designed to monitor and analyze network traffic for signs of malicious activity, unauthorized access, or policy violations. It works by inspecting packets moving across the network and comparing them against a database of known attack patterns or abnormal behaviors.

### Features of NIDS

- **Passive Monitoring:** Observes traffic without interfering with it
- **Real-time Analysis:** Detects threats as they occur
- **Protocol Analysis:** Inspects protocols like TCP, UDP, HTTP, FTP, DNS, etc.
- **Logging:** Maintains detailed logs for auditing and forensics
- **Network-Wide Coverage:** Provides visibility across multiple hosts and devices

# Software Security Lifecycle

The Software Security Lifecycle (SSL) is a systematic approach to integrating security into each phase of the Software Development Lifecycle (SDLC). This ensures that security is not an afterthought but is built into the software from inception to deployment and maintenance.

## Software Development Lifecycle

| Phase          | Security Action                      | Explanation                                                            |
| -------------- | ------------------------------------ | ---------------------------------------------------------------------- |
| Requirements   | Require HTTPS for all user activity  | Prevent data sniffing on login and payment                             |
| Design         | Use role-based access control (RBAC) | Ensure users only access data they are authorized for                  |
| Implementation | Sanitize input on search bar         | Prevent SQL injection and XSS                                          |
| Testing        | Conduct black-box pen test           | External tester finds a flaw in payment flow                           |
| Deployment     | Set Content Security Policy headers  | Prevents many types of client-side injection                           |
| Maintenance    | Monitor logs for anomalies           | Alerts if a user logs in from multiple IPs quickly (could be a hijack) |

## SSDLC Phases

1. **Identify:** Identify critical systems, analyze threats, ensure regularity compilance
2. **Protect:** Implement security controls to protect systems and unauthorized access.
3. **Detect:** Monitor network traffic for threats.
4. **Respond:** Define steps to handle security breaches.
5. **Recover:** Restore affected systems and improve security to prevent future incidents.

## Security Requirements

The five key security principles are:

1. **Confidentiality** – Protecting sensitive data from unauthorized access.
2. **Integrity** – Ensuring data is accurate and unaltered.
3. **Availability** – Ensuring systems are always accessible.
4. **Non-repudiation** – Preventing denial of actions performed.
5. **Authentication** – Verifying user identity.

| Category             | Description                                              | Example                                                 |
| -------------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| Authentication       | Ensure only authorized users can access the system       | Users must log in using username + password + 2FA       |
| Authorization        | Ensure users only access resources they are permitted to | Admins can edit user data; normal users cannot          |
| Data Protection      | Protect sensitive data at rest and in transit            | Encrypt all personal data using AES-256                 |
| Input Validation     | Prevent malicious input from users                       | Validate and sanitize all form inputs                   |
| Logging & Monitoring | Record activity for auditing and detection               | Log all failed login attempts and alert on 10+ failures |
| Error Handling       | Prevent leakage of internal system details               | Show generic error messages to users                    |
| Session Management   | Control how user sessions are created and terminated     | Expire sessions after 15 minutes of inactivity          |
| Compliance           | Meet regulatory standards (GDPR, HIPAA, etc.)            | Store data in a GDPR-compliant EU region only           |

## Security Training

| Role       | Training                                                                     | Why It's Important                                                  |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Developers | Secure coding bootcamp (focus: input validation, access control, encryption) | Avoid HIPAA violations by preventing injection, unauthorized access |
| Testers    | Training on how to write and run security test cases using OWASP ZAP         | Catch vulnerabilities before they go to production                  |
| Architects | Threat modeling workshop                                                     | Identify and mitigate attack vectors in early design                |
| DevOps     | Secure CI/CD training: secrets management, image scanning                    | Ensure infrastructure-as-code and builds are hardened               |

## Security Metrics

| Metric                        | Description                                                               | Example                             |
| ----------------------------- | ------------------------------------------------------------------------- | ----------------------------------- |
| Vulnerability Density         | Number of security vulnerabilities per 1,000 lines of code (KLOC)         | 0.5 vulnerabilities/KLOC            |
| Patch Time (MTTR)             | Average time to resolve a reported vulnerability (Mean Time To Remediate) | 3 days                              |
| Static Analysis Findings      | Number of issues found during static scans                                | 10 critical, 30 medium, 50 low      |
| Penetration Test Success Rate | Number of successful exploit attempts during pen test                     | 2 successful out of 50              |
| Security Test Coverage        | % of security test cases executed vs. planned                             | 90%                                 |
| Code Review Compliance        | % of code that underwent secure code review                               | 100% of backend code reviewed       |
| Incident Response Metrics     | Number of incidents reported, resolved, escalated                         | 5 reported, 4 resolved, 1 escalated |
| Training Completion           | % of developers trained in secure coding                                  | 95% completed OWASP Top 10 training |

## Compliance Reporting

Compliance reporting is the process of generating and sharing documentation and evidence that proves your software and development process complies with applicable standards.

| Standard          | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| **OWASP ASVS**    | Application Security Verification Standard                    |
| **GDPR**          | General Data Protection Regulation (EU data privacy)          |
| **HIPAA**         | Health data protection regulation (US)                        |
| **PCI DSS**       | Payment Card Industry Data Security Standard                  |
| **ISO/IEC 27001** | Information Security Management System standard               |
| **NIST 800-53**   | Security and privacy controls for federal information systems |

## Risk-Based Security Testing

Risk-Based Security Testing (RBST) is a strategic approach to security testing where testing priorities are aligned with the potential business impact and likelihood of security threats.

### Concepts

| Term           | Definition                                                              |
| -------------- | ----------------------------------------------------------------------- |
| **Risk**       | The potential for loss or damage when a threat exploits a vulnerability |
| **Likelihood** | Probability that a given threat will exploit a vulnerability            |
| **Impact**     | Severity of the consequences if a vulnerability is exploited            |
| **Risk Level** | A combination of **likelihood × impact**, used to prioritize            |

### Example

| Component         | Threat              | Likelihood | Impact | Risk Level   |
| ----------------- | ------------------- | ---------- | ------ | ------------ |
| Login System      | Credential stuffing | High       | High   | **Critical** |
| Admin Panel       | SQL injection       | Medium     | High   | High         |
| Static Pages      | XSS                 | Low        | Medium | Medium       |
| Newsletter Signup | CSRF                | Low        | Low    | Low          |

## Safe Code Touchpoints

| SSDLC Phase    | Safe Code Touchpoint                        | Description                                                                               |
| -------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Requirements   | **Security Requirements**                   | Define non-functional security requirements like encryption, access control, data privacy |
| Design         | **Architectural Risk Analysis**             | Identify high-level design flaws, threat modeling (e.g., STRIDE)                          |
| Implementation | **Secure Coding**                           | Use safe coding patterns, avoid risky APIs, follow language-specific best practices       |
| Testing        | **Security Testing**                        | Conduct static (SAST), dynamic (DAST), fuzzing, and manual testing of security controls   |
| Code Review    | **Code Review with Security Focus**         | Inspect code for common security mistakes and logic flaws                                 |
| Deployment     | **Security Configuration Management**       | Harden configurations, disable debug/logging modes, enforce secure deployment practices   |
| Maintenance    | **Penetration Testing & Risk-Based Audits** | Test applications in production or staging environments for new and existing risks        |

# Buffer Overflow

A Buffer Overflow is a common vulnerability in low-level programming languages like C and C++, where a program writes more data to a buffer (a contiguous block of memory) than it can hold. This extra data can overwrite adjacent memory, leading to unpredictable behavior, crashes, or even arbitrary code execution—which attackers can exploit.

## Causes of Buffer Overflow?

Buffer overflows occur due to:

- Lack of bounds checking when writing to memory.
- Use of unsafe functions like gets(), strcpy(), scanf() without size limits.
- Overconfidence in user input being within expected size.

## Consequences

1. Crash the program (denial of service)
2. Change program behavior (corrupt data/variables)
3. Execute arbitrary code (e.g., shellcode)
4. Gain unauthorized access (privilege escalation)

## Example

```cpp
void vulnerable_function() {
    char buffer[8];
    printf("Enter some text: ");
    gets(buffer);  // Dangerous: No bounds checking
    printf("You entered: %s\n", buffer);
}
```

- `gets(buffer)` doesn't check how many bytes you enter.
- If the user enters more than 8 bytes, it overwrites memory beyond `buffer`.

### How an Attacker Exploits

Suppose an attacker inputs:

```
AAAAAAAAAAAAAAAA
```

(16 bytes instead of 8)

- The first 8 bytes fill buffer.
- The next 8 overwrite the stack frame, including return address.
- By crafting a specific input, the attacker can redirect execution to malicious code.

### Exploitation

If an attacker knows the memory layout, they can:

- Input machine code (e.g., shellcode) into the buffer.
- Overwrite return address with the address of the shellcode.
- When the function returns, it jumps to the shellcode → attacker gains control.

## Defend Buffer Overflow

1. **Use Safe Functions:**
   - `fgets()` instead of `gets()`
   - `strncpy()` instead of `strcpy()`
2. **Bounds Checking:**
   - Always check size of inputs.
3. **Stack Canaries:**
   - Insert special values to detect overwrites before return.
4. **Address Space Layout Randomization (ASLR):**
   - Makes it hard to predict memory addresses.
5. **Data Execution Prevention (DEP):**
   - Marks memory regions as non-executable.
6. **Use Safe Languages:**
   - Java, Python, etc., automatically handle bounds checking.

### Safe Example

```cpp
void safe_function() {
    char buffer[8];
    printf("Enter some text: ");
    fgets(buffer, sizeof(buffer), stdin);  // Safe: Limits input
    printf("You entered: %s\n", buffer);
}
```

## Other form of Overflow Attack

### Stack Overflow

- Occurs when too much data is written to the call stack, particularly local variables.
- Can overwrite return addresses, function pointers, or stack canaries.

```cpp
void vulnerable() {
    char buffer[10];
    gets(buffer);  // Writing more than 10 bytes causes overflow
}
```

### Heap Overflow

- Heap is used for dynamic memory (malloc, calloc, new).
- Overflow occurs when a program writes beyond the bounds of a heap-allocated buffer.

```cpp
int main() {
    char *data = malloc(10);
    strcpy(data, "AAAAAAAAAAAA");  // Writing 12 bytes to 10-byte buffer
    printf("%s\n", data);
    free(data);
}
```

### Integer Overflow

Happens when arithmetic operations exceed the maximum (or minimum) value that can be stored in an integer type.

```cpp
int main() {
    unsigned int length = 0xFFFFFFFF;  // Very large
    char *buf = malloc(length + 1);    // Wraps around to 0
    if (buf == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }
    // buffer overflow here
    return 0;
}
```

## Concurrency

Concurrency is the ability of a system to perform multiple operations or tasks simultaneously. This is common in:

- Multi-threaded programs
- Multi-process systems
- Operating system kernels

Concurrency improves performance but introduces complexity in synchronization.

Concurrency vulnerabilities occur when multiple threads or processes access shared resources in a non-deterministic order, leading to unintended behavior. One of the most critical issues in this domain is the race condition.

### Race Condition

A Race Condition occurs when the correctness of a program depends on the timing or sequence of uncontrollable events (like thread scheduling). If two or more threads access shared data simultaneously and at least one modifies it, the result is unpredict.

**Consequences:**

- Data corruption
- Security breaches
- Unexpected behavior
- Privilege escalation

#### Example

```cpp
int balance = 1000;

void withdraw(int amount) {
    if (balance >= amount) {
        balance -= amount;
    }
}
```

Now, imagine two threads call withdraw(800) at the same time.

**Race Scenario:**

1. Thread A checks balance >= 800 (true)
2. Thread B checks balance >= 800 (also true)
3. Both subtract 800 → Final balance = -600 (Invalid!)

#### Prevent Race Conditions

| Mechanism                    | Description                    |
| ---------------------------- | ------------------------------ |
| Mutex                        | Locks critical sections        |
| Semaphore                    | Controls access to resources   |
| Atomic Operations            | Prevents intermediate states   |
| Monitors/Condition Variables | Wait/notify system for threads |

**Example:**

```cpp
#include <pthread.h>
#include <stdio.h>

int balance = 1000;
pthread_mutex_t lock;

void* withdraw(void* arg) {
    pthread_mutex_lock(&lock);
    if (balance >= 800) {
        balance -= 800;
    }
    pthread_mutex_unlock(&lock);
    return NULL;
}

int main() {
    pthread_t t1, t2;
    pthread_mutex_init(&lock, NULL);
    pthread_create(&t1, NULL, withdraw, NULL);
    pthread_create(&t2, NULL, withdraw, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    printf("Final balance: %d\n", balance);
    pthread_mutex_destroy(&lock);
    return 0;
}
```

## Blocking Time

Blocking time refers to the duration a thread or process waits to acquire a lock or access a shared resource that is currently held by another thread. During this time, the thread is inactive and cannot proceed with its task.

In secure and real-time systems, excessive blocking time can lead to:

- Denial of Service (DoS)
- Priority Inversion
- Deadlocks
- Performance degradation

### Types of Blocking

| Type of Blocking        | Description                          |
| ----------------------- | ------------------------------------ |
| **Lock-based Blocking** | Waiting for a mutex or semaphore     |
| **I/O Blocking**        | Waiting for input/output to complete |
| **Message Blocking**    | Waiting for a message or event       |
| **Resource Blocking**   | Waiting for memory, disk, or CPU     |

## Priority Inversion

Priority Inversion is a concurrency problem in multi-threaded systems where:

- A low-priority task holds a resource (e.g., lock).
- A high-priority task needs the same resource and gets blocked.
- Meanwhile, a medium-priority task preempts the low-priority task.

The result: The high-priority task is inverted and blocked by lower-priority work, potentially for a long time.

**Example:**

- A janitor (low priority) locks a door to clean.
- The CEO (high priority) needs to enter but waits.
- A manager (medium priority) keeps interrupting the janitor with questions.
- The CEO is blocked until the janitor finishes cleaning — but the janitor is constantly interrupted.

## Deadlock

A deadlock is a condition where two or more threads or processes are permanently blocked, each waiting for a resource held by the other.

- Each process holds a resource and waits for another.
- None can proceed — the system is stuck indefinitely.

### Security Concern

- Can lead to Denial of Service (DoS): the system becomes unresponsive.
- Attackers can intentionally trigger deadlocks to disable security-critical services.
- Complicates real-time system guarantees.
- Can corrupt data if the deadlock is not detected and managed.

### Conditions for Deadlock

Deadlock happens when all four Coffman conditions are true
| Condition | Description |
| -------------------- | ----------------------------------------------------------------------------------- |
| **Mutual Exclusion** | Only one process can use a resource at a time. |
| **Hold and Wait** | A process holds one resource and waits for another. |
| **No Preemption** | Resources cannot be forcibly taken away. |
| **Circular Wait** | A circular chain of processes exists, each waiting for a resource held by the next. |

# Distributed System Security

## Cryptographic Algorithm

A cryptographic algorithm is a mathematical function used for:

1. **Encryption:** Converting plaintext into ciphertext to prevent unauthorized access.
2. **Decryption:** Converting ciphertext back to readable plaintext.
3. **Hashing:** Creating a fixed-size digest from input data to verify data integrity.
4. **Digital Signatures:** Ensuring authenticity and integrity of data.
5. **Key Exchange:** Safely exchanging cryptographic keys over insecure channels.

### Types of Cryptographic Algorithm

1. **Symmetric Key Cryptography (Secret Key)**

   - Same key used for both encryption and decryption.
   - Fast and efficient, but key distribution is challenging in a distributed system.
   - Example Algorithms:
     - AES (Advanced Encryption Standard)
     - DES (Data Encryption Standard)
   - Use Case: Encrypting messages between two trusted servers.

2. **Asymmetric Key Cryptography (Public Key)**

   - Uses a pair of keys: public key for encryption and private key for decryption.
   - Solves the key distribution problem.
   - Example Algorithms:
     - RSA
     - ECC (Elliptic Curve Cryptography)
   - Use Case: Authenticating users in distributed applications like banking apps.

3. **Hashing Algorithms**

   - One-way function that produces a fixed-size hash.
   - Cannot be reversed.
   - Used for data integrity checks.
   - Example Algorithms:
     - SHA-256
     - MD5 (no longer recommended due to vulnerabilities)
   - Use Case: Verifying file integrity during distributed file transfers.

4. **Digital Signatures**
   - Combines hashing and asymmetric cryptography.
   - Ensures that the data is from a legitimate source and hasn’t been tampered with.
   - Use Case: Secure software updates in distributed applications.

## Access Control

| Model                                     | Description                                                                                     | Example                                                  |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **DAC** (Discretionary Access Control)    | Access is based on user identity and access rights granted by the owner.                        | File-sharing systems like Dropbox.                       |
| **MAC** (Mandatory Access Control)        | Access is enforced based on policies defined by the system (often used in military/government). | Classified information access (Top Secret, Secret, etc.) |
| **RBAC** (Role-Based Access Control)      | Access is based on roles assigned to users.                                                     | Admin, Editor, Viewer roles in enterprise systems.       |
| **ABAC** (Attribute-Based Access Control) | Access decisions based on attributes (user location, time, department, etc.)                    | Context-aware access in cloud platforms.                 |

## Attacks

| Attack Type                  | Description                                                               | Example                                                  |
| ---------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Eavesdropping**            | Attacker intercepts data packets in transit.                              | Sniffing login credentials over insecure Wi-Fi.          |
| **Man-in-the-Middle (MITM)** | Attacker secretly relays or alters the communication between two parties. | Intercepting messages in an online banking session.      |
| **Denial of Service (DoS)**  | Flooding the server with requests to crash it or make it unavailable.     | Overloading an e-commerce server during peak time.       |
| **Replay Attack**            | Reusing captured valid data to masquerade as a legitimate user.           | Replaying an old login request to bypass authentication. |
| **Spoofing**                 | Pretending to be another entity to gain access.                           | IP spoofing to access restricted services.               |

## Risk Analysis

Risk Analysis and Assessment is a process of identifying, evaluating, and prioritizing potential security threats to a distributed system. It helps organizations understand:

- What can go wrong
- How likely it is to happen
- What the impact would be
- How to mitigate it

This process ensures informed decision-making to allocate security resources efficiently and proactively reduce vulnerabilities in distributed computing environments (e.g., cloud, IoT, microservices).

### Goals of Risk Analysis

- **Identify Assets:** Know what data, systems, or processes are valuable
- **Identify Threats:** Determine what could exploit a vulnerability
- **Evaluate Risks:** Analyze the likelihood and impact of threats
- **Prioritize Mitigation:** Decide what to fix or monitor based on risk level
- **Ensure Compliance:** Meet security standards (e.g., GDPR, ISO 27001)

### Components of Risk Analysis

- **Assets** – Valuable components of the system (e.g., user data, servers).
- **Threats** – Potential sources of harm (e.g., hackers, insiders, malware).
- **Vulnerabilities** – Weaknesses that threats can exploit (e.g., unpatched software).
- **Risk** – The combination of likelihood and impact of a threat exploiting a vulnerability.
- **Controls/Mitigations** – Measures to reduce risk (e.g., firewalls, encryption).

### Risk Assessment Process

1. **Identify Assets:** List critical assets (data, services, infrastructure)
2. **Identify Threats & Vulnerabilities:** Use threat modeling to uncover attack paths
3. **Assess Risk (Qualitative/Quantitative):** Evaluate risk based on likelihood and impact
4. **Prioritize Risks:** Rank risks as high, medium, or low
5. **Implement Controls:** Apply countermeasures like encryption or access controls
6. **Monitor & Reassess:** Continuously review and update risk profile
