# Content
    - [Merge Conflict](#merge-conflict)

# Merge Conflict
A merge conflict occurs in version control systems like Git when two or more branches have made **changes to the same part of a file**, and Git cannot automatically determine which changes to keep. Since Git relies on context to merge changes, conflicting edits in overlapping regions or different actions on the same file (e.g., one branch deletes it while another modifies it) require manual resolution.

## Why Do Merge Conflicts Happen?
1. **Concurrent Changes:** Two developers (or branches) modify the same line in a file, creating ambiguity about which version is correct.
2. **Overlapping Changes:** Edits in the same section of a file, even if on different lines, can confuse Git's merging algorithm.
3. **File Deletion vs. Modification:** One branch deletes a file while another modifies it, resulting in a conflict.
4. **Renaming Conflicts:** A file is renamed differently in two branches, and Git cannot reconcile the changes automatically.
## Example of a Merge Conflict

**Scenario:**

Two developers, Alice and Bob, are working on the same project. The file `example.txt` initially contains:
```text
Welcome to the project!
This is the main content.
```

**Steps Leading to Conflict:**

1. Alice creates a new branch (`feature-a`) and modifies the file:
    ```text
    Welcome to the project!
    This is the main content.
    Feature A: New functionality added.
    ```
2. Bob creates another branch (`feature-b`) and modifies the same file differently:
    ```
    Welcome to the project!
    This is the main content.
    Feature B: Updated for performance.
    ```
3. Both Alice and Bob commit their changes to their respective branches.
4. When Bob tries to merge feature-a into feature-b, Git detects a merge conflict because both branches modified the same section.

## What Happens During the Merge?
Git will produce a conflict marker in the file, showing both changes:
```text
Welcome to the project!
This is the main content.
<<<<<<< HEAD
Feature B: Updated for performance.
=======
Feature A: New functionality added.
>>>>>>> feature-a
```

Here:

- The HEAD section contains the changes in the current branch (`feature-b`).
- The section after `=======` contains the incoming changes from the branch being merged (`feature-a`).