## Class Test 01

### Question 01: Hidden Markov Model

To solve these questions, we assume an initial uniform distribution for the weather on Day 1 ($P(S_1) = P(R_1) = P(C_1) = 1/3$) since no starting probabilities were provided in the prompt.

<details>
<summary>(a) Determine the most likely sequence of weather states corresponding to the observed activities.</summary>

To find the most likely sequence for the observations **Jogging ($O_1$), Shopping ($O_2$), Stays Indoors ($O_3$)**, we use the **Viterbi Algorithm**.

**Day 1: Observation = Jogging**

We calculate $v_1(k) = P(O_1|k) \cdot P(k)$:

- **Sunny:** $0.7 \times 0.333 = 0.2331$
- **Rainy:** $0.1 \times 0.333 = 0.0333$
- **Cloudy:** $0.2 \times 0.333 = 0.0666$

**Day 2: Observation = Shopping**

We calculate $v_2(k) = P(O_2|k) \cdot \max_{j}(v_1(j) \cdot P(k|j))$:

- **Sunny:** $0.2 \times \max(0.2331 \cdot 0.6, 0.0333 \cdot 0.2, 0.0666 \cdot 0.3) = 0.2 \times 0.13986 = \mathbf{0.02797}$ (from Sunny)
- **Rainy:** $0.4 \times \max(0.2331 \cdot 0.1, 0.0333 \cdot 0.7, 0.0666 \cdot 0.3) = 0.4 \times 0.02331 = \mathbf{0.00932}$ (from Sunny or Rainy)
- **Cloudy:** $0.3 \times \max(0.2331 \cdot 0.3, 0.0333 \cdot 0.1, 0.0666 \cdot 0.4) = 0.3 \times 0.06993 = \mathbf{0.02098}$ (from Sunny)

### **Day 3: Observation = Stays Indoors**

We calculate $v_3(k) = P(O_3|k) \cdot \max_{j}(v_2(j) \cdot P(k|j))$:

- **Sunny:** $0.1 \times \max(0.02797 \cdot 0.6, 0.00932 \cdot 0.2, 0.02098 \cdot 0.3) = 0.1 \times 0.01678 = 0.001678$
- **Rainy:** $0.5 \times \max(0.02797 \cdot 0.1, 0.00932 \cdot 0.7, 0.02098 \cdot 0.3) = 0.5 \times 0.00652 = 0.00326$
- **Cloudy:** $0.5 \times \max(0.02797 \cdot 0.3, 0.00932 \cdot 0.1, 0.02098 \cdot 0.4) = 0.5 \times 0.00839 = \mathbf{0.004195}$

**Conclusion:** The path ending in Cloudy has the highest probability. Backtracking through the maximums, the most likely sequence is: **Sunny $\rightarrow$ Sunny $\rightarrow$ Cloudy**.

</details>

<details>
<summary>(b) Compute the probability of observing the sequence Jogging, Shopping, Stays Indoors.</summary>
We use the **Forward Algorithm** to find the total probability of this observation sequence by summing the probabilities of all possible paths.

Using the values from the step-by-step calculations (Forward probabilities $\alpha_t$):

1. **Sum of Day 1 probabilities ($\alpha_1$):** $0.2331 + 0.0333 + 0.0666 = 0.333$
2. **Sum of Day 2 probabilities ($\alpha_2$):**

- $\alpha_2(S) = 0.2 \times (0.2331 \cdot 0.6 + 0.0333 \cdot 0.2 + 0.0666 \cdot 0.3) = 0.0333$
- $\alpha_2(R) = 0.4 \times (0.2331 \cdot 0.1 + 0.0333 \cdot 0.7 + 0.0666 \cdot 0.3) = 0.0266$
- $\alpha_2(C) = 0.3 \times (0.2331 \cdot 0.3 + 0.0333 \cdot 0.1 + 0.0666 \cdot 0.4) = 0.0299$

3. **Sum of Day 3 probabilities ($\alpha_3$):**

- $\alpha_3(S) = 0.1 \times (0.0333 \cdot 0.6 + 0.0266 \cdot 0.2 + 0.0299 \cdot 0.3) = 0.00342$
- $\alpha_3(R) = 0.5 \times (0.0333 \cdot 0.1 + 0.0266 \cdot 0.7 + 0.0299 \cdot 0.3) = 0.01546$
- $\alpha_3(C) = 0.5 \times (0.0333 \cdot 0.3 + 0.0266 \cdot 0.1 + 0.0299 \cdot 0.4) = 0.0123$

**Total Probability:** $0.00342 + 0.01546 + 0.0123 = \mathbf{0.03118}$ (or approx **3.12%**).

</details>

<details>
<summary>(c) After the observation sequence, what is the posterior probability of the weather on the third day being Cloudy?</summary>

The posterior probability for a state on a specific day is the forward probability for that state divided by the total probability of the sequence.

$$P(S_3 = \text{Cloudy} | O_{1:3}) = \frac{\alpha_3(\text{Cloudy})}{P(O_{1:3})}$$

- $\alpha_3(\text{Cloudy}) = 0.0123$
- $P(O_{1:3}) = 0.03118$

**Posterior Probability:** $\frac{0.0123}{0.03118} \approx \mathbf{0.3945}$ (or **39.45%**).

</details>

### Question 02: Entropy

<details>
<summary>(a) Calculate the entropy of the entire dataset.</summary>

Entropy measures the "impurity" or randomness in the target variable (**Buy**).
The formula for Entropy is:

$$E(S) = \sum_{i=1}^{c} -p_i \log_2(p_i)$$

In our dataset of 6 samples:

- **Total Samples ($n$):** 6
- **Buy = Yes:** 3 (IDs 2, 3, 4)
- **Buy = No:** 3 (IDs 1, 5, 6)

Since the split is exactly $50/50$, the entropy will be 1:

$$E(S) = -\left(\frac{3}{6}\right) \log_2 \left(\frac{3}{6}\right) - \left(\frac{3}{6}\right) \log_2 \left(\frac{3}{6}\right)$$

$$E(S) = -0.5(-1) - 0.5(-1) = \mathbf{1.0}$$

</details>

<details>
<summary>(b) Build a decision tree (manually) using the feature with the highest information gain at the root.</summary>
To find the root, we calculate the Information Gain (IG) for **Age**, **Income**, and **Previous Purchases**.

$$\text{Gain}(S, A) = E(S) - \sum_{v \in Values(A)} \frac{|S_v|}{|S|} E(S_v)$$

**1. Calculate Gain for Age**

- **Young (3 samples):** Buy (No, Yes, Yes) $\rightarrow$ $E(\text{Young}) = -\frac{2}{3}\log_2\frac{2}{3} - \frac{1}{3}\log_2\frac{1}{3} \approx 0.918$
- **Old (3 samples):** Buy (Yes, No, No) $\rightarrow$ $E(\text{Old}) = -\frac{1}{3}\log_2\frac{1}{3} - \frac{2}{3}\log_2\frac{2}{3} \approx 0.918$
- **Average Entropy:** $\frac{3}{6}(0.918) + \frac{3}{6}(0.918) = 0.918$
- **Gain(Age):** $1.0 - 0.918 = \mathbf{0.082}$

**2. Calculate Gain for Income**

- **High (3 samples):** Buy (No, Yes, Yes) $\rightarrow$ $E(\text{High}) = 0.918$
- **Medium (1 sample):** Buy (Yes) $\rightarrow$ $E(\text{Medium}) = 0$
- **Low (2 samples):** Buy (No, No) $\rightarrow$ $E(\text{Low}) = 0$
- **Average Entropy:** $\frac{3}{6}(0.918) + \frac{1}{6}(0) + \frac{2}{6}(0) = 0.459$
- **Gain(Income):** $1.0 - 0.459 = \mathbf{0.541}$

**3. Calculate Gain for Previous Purchases**

- **No (4 samples):** Buy (No, Yes, Yes, No) $\rightarrow$ $E(\text{No}) = 1.0$ ($50/50$ split)
- **Yes (2 samples):** Buy (Yes, No) $\rightarrow$ $E(\text{Yes}) = 1.0$ ($50/50$ split)
- **Average Entropy:** $\frac{4}{6}(1.0) + \frac{2}{6}(1.0) = 1.0$
- **Gain(Prev):** $1.0 - 1.0 = \mathbf{0}$

> **Root Node:** **Income** has the highest Information Gain ($0.541$).

**The Decision Tree Structure**

1. **Income = Medium:** Always **Yes** (Node is pure).
2. **Income = Low:** Always **No** (Node is pure).
3. **Income = High:** This node contains IDs 1, 2, and 3. We must split again.

- **IDs at node:** 1 (No), 2 (Yes), 3 (No). _(Wait, looking at data: ID 1: Young/High/No=No, ID 2: Young/High/Yes=Yes, ID 3: Young/High/No=Yes)._
- In the **Income=High** branch, if we split by **Previous Purchases**:
- Prev = Yes: ID 2 $\rightarrow$ **Buy: Yes**
- Prev = No: ID 1 and 3 $\rightarrow$ **Buy: No, Yes** (Mixed results).

- Since no further splits can perfectly separate ID 1 and 3 (they have identical features but different outcomes), we stop here and take the majority class for the mixed leaf.
</details>

<details>
<summary>(c) Calculate the accuracy of the decision tree by comparing its predictions against the ground truth for all six samples.</summary>
Let's test our tree against the original table:

| ID  | Features    | Actual | Prediction               | Correct? |
| --- | ----------- | ------ | ------------------------ | -------- |
| 1   | High / No   | No     | No (Majority of IDs 1&3) | Yes      |
| 2   | High / Yes  | Yes    | Yes                      | Yes      |
| 3   | High / No   | Yes    | No (Majority of IDs 1&3) | **No**   |
| 4   | Medium / No | Yes    | Yes                      | Yes      |
| 5   | Low / No    | No     | No                       | Yes      |
| 6   | Low / Yes   | No     | No                       | Yes      |

- **Correct Predictions:** 5
- **Total Samples:** 6
- **Accuracy:** $\frac{5}{6} \approx \mathbf{83.3\%}$

> **Note:** ID 1 and ID 3 create a "noise" conflict where identical inputs lead to different outputs. No simple decision tree can achieve $100\%$ accuracy on this specific dataset.

Would you like me to show you how the Gini Impurity calculation would differ from this Entropy approach?

</details>

## Semester Final

### Question 01: Decision Tree Calculations

<details>
<summary>(a) Calculate the information gain (IG) of the split made at the root node.</summary>
Information Gain is calculated as: $IG = Entropy(\text{Parent}) - [Weighted\ Average\ Entropy(\text{Children})]$.

1. **Root Entropy:** $-(16/32)\log_2(16/32) - (16/32)\log_2(16/32) = \mathbf{1.0}$
2. **Left Child Entropy (12, 4):** $-(12/16)\log_2(12/16) - (4/16)\log_2(4/16) \approx \mathbf{0.811}$
3. **Right Child Entropy (4, 12):** $-(4/16)\log_2(4/16) - (12/16)\log_2(12/16) \approx \mathbf{0.811}$
4. **Weighted Child Entropy:** $(16/32 \times 0.811) + (16/32 \times 0.811) = 0.811$
5. **IG:** $1.0 - 0.811 = \mathbf{0.189}$
</details>

<details>
<summary>(b) Determine the values of $a$ and $b$ for smallest IG, and $x$ and $y$ for largest IG.</summary>

- **Smallest IG (at the split from (12,4)):** This happens when the child nodes are as "impure" (messy) as the parent. If **$a=9, b=3$**, the ratio remains $3:1$, meaning the entropy hasn't improved. The resulting **IG would be 0**.

- **Largest IG (at the split from (4,12)):** This happens when the children are perfectly pure. If **$x=4, y=0$** (and the other node is $0, 12$), the entropy of the children becomes $0$. This maximizes Information Gain.
</details>

<details>
<summary>(c) Discuss three potential ways for reducing overfitting in a decision tree.</summary>

1. **Pruning:** Removing branches that provide little power to classify instances to reduce complexity.
2. **Setting a Minimum Samples per Leaf:** Requiring a minimum number of data points to exist in a node before allowing a split.
3. **Maximum Depth:** Limiting how deep the tree can grow to prevent it from memorizing specific data points.
</details>

## Question 3: Naïve Bayes Classification

The table provides 6 samples. Let's tally them:

- **Class $K=1$:** 3 samples — $(1,0,1), (0,1,1), (0,1,1)$
- **Class $K=0$:** 3 samples — $(1,0,0), (0,0,1), (1,0,0)$
- **Total ($N$):** 6

<details>
<summary>(a) Apply the Naïve Bayes Classifier to identify the label of a sample where $X=0, Y=0, Z=1$.</summary>

To classify, we calculate the posterior probability for each class $K$ and pick the maximum.

**1. Prior Probabilities:**

- $P(K=1) = 3/6 = 0.5$
- $P(K=0) = 3/6 = 0.5$

**2. Conditional Probabilities (Likelihoods):**
For $K=1$:

- $P(X=0|K=1) = 2/3$
- $P(Y=0|K=1) = 1/3$
- $P(Z=1|K=1) = 3/3 = 1$

For $K=0$:

- $P(X=0|K=0) = 1/3$
- $P(Y=0|K=0) = 3/3 = 1$
- $P(Z=1|K=0) = 1/3$

**3. Calculating Class Scores:**

- **Score ($K=1$):** $0.5 \times (2/3) \times (1/3) \times 1 = 2/18 \approx \mathbf{0.111}$
- **Score ($K=0$):** $0.5 \times (1/3) \times 1 \times (1/3) = 1/18 \approx \mathbf{0.055}$

**Conclusion:** Since $0.111 > 0.055$, the sample is classified as **$K=1$**.

</details>

<details>
<summary>(b) Construct a test sample for which Naïve Bayes Classifier fails to classify without Laplacian Smoothing. Explain how Laplacian Smoothing assists.</summary>

**Test Sample:** $X=1, Y=1, Z=0$.

**The Problem:**
Looking at the data for $K=1$, there are **zero** instances where $Y=1$ AND $K=1$ simultaneously (Wait, looking closely at the table: row 2 and 4 show $Y=1$ when $K=1$).
Let's look for a true zero: In the data, for $K=1$, $Z$ is always $1$. Therefore, **$P(Z=0|K=1) = 0$**.

If we test a sample where $Z=0$, the entire product for $K=1$ becomes zero, regardless of how strong the other evidence is. This "zero-frequency" problem makes the model ignore other features.

**How Laplacian Smoothing assists:**
It adds a small smoothing parameter (usually $\alpha = 1$) to the numerator and adjusts the denominator by the number of possible values for that feature.

$$P(x_i|K) = \frac{count(x_i, K) + 1}{count(K) + \text{number of possible values of } x_i}$$

This ensures no probability is ever exactly zero, allowing the classifier to still weigh the evidence from $X$ and $Y$.

</details>

## Question 4: $k$-Nearest Neighbors ($k$-NN)

- **Class A:** $A_1(1,1), A_2(2,1), A_3(2.5,2), A_4(1.5,4)$
- **Class B:** $B_1(2,2.5), B_2(3,3), B_3(0,0), B_4(1,3.5)$

<details>
<summary>(a) Apply 3-NN (Euclidean distance) to identify the label of test point $(2, 2)$ before and after inserting training point $(2.5, 2.5)$ as Class B.</summary>

**Step 1: Before insertion (Test point $T = (2,2)$)**
We calculate Euclidean distance: $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$

| Point        | Distance to $(2,2)$       | Class |
| ------------ | ------------------------- | ----- |
| $A_1(1,1)$   | $\sqrt{1^2+1^2} = 1.41$   | A     |
| $A_2(2,1)$   | $\sqrt{0^2+1^2} = 1.00$   | A     |
| $A_3(2.5,2)$ | $\sqrt{0.5^2+0^2} = 0.50$ | A     |
| $B_1(2,2.5)$ | $\sqrt{0^2+0.5^2} = 0.50$ | B     |
| $B_4(1,3.5)$ | $\sqrt{1^2+1.5^2} = 1.80$ | B     |

**Top 3 neighbors:** $A_3 (0.5), B_1 (0.5), A_2 (1.0)$.
**Result:** 2 from Class A, 1 from Class B. Label = **Class A**.

**Step 2: After inserting $B_{new}(2.5, 2.5)$**

- Distance from $(2,2)$ to $(2.5, 2.5)$ = $\sqrt{0.5^2 + 0.5^2} = 0.707$.

**New Top 3 neighbors:** $A_3 (0.5), B_1 (0.5), B_{new} (0.707)$.
**Result:** 1 from Class A, 2 from Class B. Label = **Class B**.

</details>

<details>
<summary>(b) For a binary classification task, what will be the training error for a 1-Nearest Neighbor? Briefly explain.</summary>
The training error for 1-NN is typically **0% (or zero)**.
**Explanation:** When you test the model using a point that is already in the training set, its nearest neighbor is itself (distance = 0). Since it is its own neighbor, it will always be assigned its own true label, resulting in perfect accuracy on the training data.
</details>

<details>
<summary>(c) Discuss why $k$-Nearest Neighbors is called a "lazy learner.</summary>
$k$-NN is a **lazy learner** because it does not perform any "learning" or generalize a model during the training phase.

1. **No Training Phase:** It simply stores the training data in memory.
2. **Computation at Test Time:** All the heavy lifting (calculating distances and searching for neighbors) happens only when a prediction is requested for a new test point.
3. **Contrast:** This is the opposite of "eager learners" (like Neural Networks or Decision Trees) which build a model first and then use that model to make rapid predictions.
</details>
