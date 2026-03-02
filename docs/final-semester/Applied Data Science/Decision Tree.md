Perform a **complete root selection step-by-step** using a small **Weather–Wind dataset with numeric attributes**, and calculate everything clearly.

We’ll use **Entropy & Information Gain (ID3 style)**.

## Dataset

| No | Outlook  | Temperature | Humidity | WindSpeed | Play |
| -- | -------- | ----------- | -------- | --------- | ---- |
| 1  | Sunny    | 85          | 85       | 10        | No   |
| 2  | Sunny    | 80          | 90       | 20        | No   |
| 3  | Overcast | 83          | 78       | 15        | Yes  |
| 4  | Rain     | 70          | 96       | 25        | Yes  |
| 5  | Rain     | 68          | 80       | 30        | Yes  |
| 6  | Rain     | 65          | 70       | 35        | No   |
| 7  | Overcast | 72          | 95       | 12        | Yes  |
| 8  | Sunny    | 69          | 70       | 18        | Yes  |

Total = 8
Yes = 5
No = 3

## STEP 1️⃣ Calculate Parent Entropy

$$
Entropy(S) = -p(Yes)\log_2 p(Yes) - p(No)\log_2 p(No)
$$

$$
p(Yes)=5/8=0.625
$$

$$
p(No)=3/8=0.375
$$

$$
Entropy(S) = -(0.625\log_2 0.625 + 0.375\log_2 0.375)
$$

$$
Entropy(S) = -(0.625(-0.678) + 0.375(-1.415))
$$

$$
Entropy(S) = 0.954
$$

## STEP 2️⃣ Evaluate Each Attribute

We calculate **Information Gain** for:

* Outlook (categorical)
* Temperature (numeric)
* Humidity (numeric)
* WindSpeed (numeric)

## 🔵 1. OUTLOOK (Categorical)

### Split:

#### Sunny (3)

No, No, Yes  
Yes=1, No=2

$$
Entropy = -(1/3\log_2(1/3) + 2/3\log_2(2/3))
$$
$$
= 0.918
$$

#### Overcast (2)

Yes, Yes

$$
Entropy = 0
$$

#### Rain (3)

Yes, Yes, No

$$
Entropy = 0.918
$$

### Weighted Entropy

$$
= (3/8)(0.918) + (2/8)(0) + (3/8)(0.918)
$$

$$
= 0.344 + 0 + 0.344
$$

$$
= 0.688
$$

### Information Gain

$$
Gain = 0.954 - 0.688
$$

$$
Gain = 0.266
$$

## 🔵 2. TEMPERATURE (Numeric)

### Step A: Sort Values

65(N), 68(Y), 69(Y), 70(Y), 72(Y), 80(N), 83(Y), 85(N)

### Step B: Candidate Thresholds

Midpoints:

66.5, 68.5, 69.5, 71, 76, 81.5, 84

#### Check Best Important Split

<span className="danger"> Why threshold = 76? Why not anything else. </span>

:::danger
##### Try threshold = 76

Left (≤76):  
65N, 68Y, 69Y, 70Y, 72Y  
Yes=4, No=1

$$
Entropy = -(4/5\log_2(4/5) + 1/5\log_2(1/5))
$$
$$
= 0.722
$$

Right (>76):  
80N, 83Y, 85N  
Yes=1, No=2

$$
Entropy = 0.918
$$

:::
### Weighted Entropy

$$
= (5/8)(0.722) + (3/8)(0.918)
$$

$$
= 0.451 + 0.344
$$

[
= 0.795
]

### Gain

$$
Gain = 0.954 - 0.795
$$

$$
= 0.159
$$

(Other thresholds give smaller gain — so best for Temperature = 0.159)

## 🔵 3. HUMIDITY (Numeric)

### Sort Values

70(Y), 70(N), 78(Y), 80(Y), 85(N), 90(N), 95(Y), 96(Y)

### Candidate Thresholds

70, 74, 79, 82.5, 87.5, 92.5, 95.5

### Try threshold = 82.5

Left (≤82.5):  
70Y, 70N, 78Y, 80Y  
Yes=3, No=1

$$
Entropy = 0.811
$$

Right (>82.5):  
85N, 90N, 95Y, 96Y  
Yes=2, No=2

$$
Entropy = 1
$$

### Weighted Entropy

$$
= (4/8)(0.811) + (4/8)(1)
$$

$$
= 0.406 + 0.5
$$

$$
= 0.906
$$

### Gain

$$
= 0.954 - 0.906
$$

$$
= 0.048
$$

Very low gain.

## 🔵 4. WIND SPEED (Numeric)

Sorted:

10N, 12Y, 15Y, 18Y, 20N, 25Y, 30Y, 35N

### Try threshold = 17

Left (≤17):  
10N, 12Y, 15Y  
Yes=2, No=1

Entropy = 0.918

Right (>17):  
18Y, 20N, 25Y, 30Y, 35N  
Yes=3, No=2

Entropy = 0.971

### Weighted Entropy

$$
= (3/8)(0.918) + (5/8)(0.971)
$$

$$
= 0.344 + 0.607
$$

$$
= 0.951
$$

### Gain

$$
= 0.954 - 0.951
$$

$$
= 0.003
$$

Almost zero.

## 🏆 FINAL COMPARISON

| Attribute   | Best Gain |
| ----------- | --------- |
| Outlook     | **0.266** |
| Temperature | 0.159     |
| Humidity    | 0.048     |
| WindSpeed   | 0.003     |

## 🎯 ROOT NODE = OUTLOOK

Because it has the **highest Information Gain (0.266)**.

## ✅ Final Answer (Exam Format)

1. Compute parent entropy = 0.954
2. Compute entropy after splitting each attribute
3. Calculate Information Gain
4. Compare all gains
5. Attribute with highest gain becomes root
6. Therefore → **Outlook is selected as root node**