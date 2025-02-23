# Contents

- [Basics](#basics)
  - [Version Control](#version-control)
  - [Workflow](#workflow)
- [Fundamentals](#fundamentals)
  - [Initialization](#initialization)
  - [Staging](#staging)
  - [Commits](#commits)
  - [History](#history)
  - [Differences](#differences)
  - [Status](#status)
- [`git` folder](#git-folder)
- [Merge Conflict](#merge-conflict)

# Basics

## Version Control

Version Control is a system that records changes to a file or set of files over time, allowing multiple people to collaborate, track changes, and revert to previous versions when necessary. It is particularly useful in software development to manage code efficiently.

There are two main types of Version Control Systems (VCS):

1. **Centralized Version Control System (CVCS)** – A single central repository is used, and all users access this repository (e.g., SVN).
2. **Distributed Version Control System (DVCS)** – Each user has a complete copy of the repository, allowing work offline and better collaboration (e.g., Git, Mercurial).

Git is a Distributed Version Control System (DVCS) that enables developers to track code changes, collaborate, and revert to previous versions if needed.

### How Version Control Works in Git?

1. **Repository (Repo):** A directory containing files and a hidden `.git` folder that tracks changes.
2. **Commit:** A snapshot of changes, allowing you to revert or check previous versions.
3. **Branching:** Creating a separate version of the code to work on new features without affecting the main project.
4. **Merging:** Integrating changes from different branches.
5. **Remote Repositories:** A shared version of the project stored on services like GitHub or GitLab.

## Workflow

```
Working Directory => Staging Areay => Local Repository => Remote Repository
```

1. **Working Directory**
   - where actual files and code exist on local system.
   - when you create/modify files, they remain untracked until you explicityly add them to git
2. **Staging Area**
   - pre-commit area, allowing you to review changes before commit
   - it make ready files to make commit
3. **Local Repository**
   - when you commit, the changes are stored in local repository
   - local repository keeps track of all commits, branches
4. **Remote Repository**
   - share changes with other.

```
      [Working Directory]  --->  [Staging Area]  --->  [Local Repository]  --->  [Remote Repository]
             │                       │                        │                        │
          Untracked        Prepared for Commit            Committed                    |
             │                       │                        │                        │
        Modify File           git add file            git commit -m         git push origin main
```

# Fundamentals

## Initialization

`git init` is the command used to create a new Git repository in a directory. It initializes Git tracking for the project, allowing you to version control files, track changes, and collaborate with others.

Once you run `git init`, Git creates a hidden `.git` folder in the project directory, which stores all version control data such as commits, branches, and configurations.

**Verify Initiaization**

To check if the repository was initialized successfully:

```shell
ls -a
```

Output:

```
. .. .git
```

Reinitializing won’t overwrite existing version history. If the repository is already initialized, it will simply reinitialize Git settings.

```
Reinitialized existing Git repository in /path/to/project/.git/
```

## Staging
`git add` is a command in Git that moves changes from the working directory to the staging area (also known as the index). The staging area is an intermediate space where Git collects changes before committing them to the repository.

This allows you to control which changes are included in the next commit, giving you flexibility in tracking modifications.

### Why is Staging Important?
- **Selective Commit** – You can stage specific files while leaving others uncommitted.
- **Organized Workflow** – Allows reviewing changes before committing.
- **Avoids Mistakes** – Prevents accidental commits of unfinished changes.

### Commands
- `git add file_name`      -> take the file into staging state(here files are trackable)
- `git add -A`             -> stage all changed file in directory and subdirectories
- `git add .`              -> stage all changed file in directory but not subdirectories
- `git add *.extension`    -> stage all changed file in directory with specific extension
- `git add **/*.extension` -> stage all changed file in directory and subdirectories with specific extension

## Commits
A commit in Git is a snapshot of the current state of your project. The `git commit` command takes all staged changes (added using `git add`) and saves them permanently in the repository's history.

Each commit has:
✅ A unique commit ID (SHA-1 hash).
✅ A commit message describing the changes.
✅ A reference to the previous commit, forming a history.

### Why Are Commits Important?
- **Version Control** – You can track changes over time.
- **Revert to Previous States** – Restore any earlier version of your project.
- **Collaboration** – Helps teams understand what was changed and why.

### Commands
- `git commit -m 'message here'`  -> moving staging to local repository(message should be clear and understandable)
- `git commit -am 'message here'` -> staging and commiting together

## History

## Differences

## Status

# `.git` Folder

## Structure

```
.git/                  # Main directory storing all Git-related data
│── HEAD               # Points to the current branch (e.g., ref: refs/heads/main)
│── config             # Stores repository-specific configuration settings
│── description        # Used by GitWeb to describe the repository (not used in local Git)
│── index              # Stores the staging area (information about tracked files)
│── packed-refs        # Stores packed branch and tag references (for performance optimization)
│
├── hooks/             # Contains scripts to automate actions before or after Git events
│   ├── pre-commit     # Runs before a commit is created (e.g., for code linting)
│   ├── post-commit    # Runs after a commit is created (e.g., for notifications)
│   ├── pre-push       # Runs before pushing to a remote repository
│   ├── update         # Runs when updating references on the remote repository
│   ├── ...            # Other sample hook scripts (can be customized)
│
├── info/              # Repository metadata and exclusion rules
│   ├── exclude        # Local repository-specific .gitignore-like file
│
├── objects/           # Stores all Git objects (blobs, trees, commits, tags)
│   ├── info/          # Contains performance-related metadata
│   ├── pack/          # Stores compressed objects for performance
│   ├── xx/            # SHA-1 named directories storing actual Git objects
│
├── refs/              # Stores references to commits (branches, tags, remotes)
│   ├── heads/         # Stores branch references (e.g., main, feature-branch)
│   │   ├── main       # Reference file for the 'main' branch (contains the latest commit hash)
│   │   ├── feature-branch  # Reference for a feature branch
│   ├── tags/          # Stores tag references (lightweight and annotated tags)
│   ├── remotes/       # Stores remote branch references
│       ├── origin/    # Remote repository tracking branch
│           ├── main   # Latest known commit on the remote 'main' branch
│
├── logs/              # Stores history of reference changes (branch checkouts, commits)
│   ├── HEAD           # Keeps track of branch switching and commits
│   ├── refs/          # Logs for specific branches
│   │   ├── heads/     # Local branch history
│   │   ├── remotes/   # Remote branch history
│
```

## Contents

### HEAD

- **Purpose:** Points to the currently checked-out branch.
- **Location:** `.git/HEAD`
- **Contents:** Typically contains a reference like `ref: refs/heads/main`, which tells Git which branch is currently active.

### config

- **Purpose:** Stores repository-specific configuration settings.
- **Location:** **.git/config**
- **Contents:** Includes settings like remote repositories, user information, and merge behavior.

### description

- **Purpose:** Used by GitWeb (a web interface for Git) to describe the repository.
- **Location:** .git/description
- **Contents:** A simple text description. Has no effect on repository behavior.

### hooks

- **Purpose:** Contains scripts for automating actions before or after certain Git events (e.g., commits, pushes, or merges).
- **Location:** `.git/hooks/`
- **Example Hooks:**
  - `pre-commit` – Runs before a commit is created.
  - `post-commit` – Runs after a commit is made.
  - `pre-push` – Runs before a push operation.

### info

- **Purpose:** Contains metadata about the repository, including ignored files.
- **Location:** `.git/info/`
- **Contents:**
  - `exclude` – A local `.gitignore` file that applies only to this repository.

### objects

- **Purpose:** Stores all the data (blobs, trees, commits, and tags) in a compressed format.
- **Location:** `.git/objects/`
- **Structure:**
  - `objects/`
    - `info/` – Optional, used for performance optimization.
    - `pack/` – Stores packed objects for efficiency.
    - SHA1-named directories (e.g., e9/) – Each file inside is a Git object.

### refs

- **Purpose:** Stores references to commits, such as branches and tags.
- **Location:** `.git/refs/`
- **Contents:**
  - `heads/` – Contains branch references (e.g., `.git/refs/heads/main`).
  - `tags/` – Stores tag references.
  - `remotes/` – Contains remote-tracking branches.

### logs

- **Purpose:** Keeps a history of reference changes (like branch checkouts).
- **Location:** `.git/logs/`
- **Contents:**
  - `HEAD` – Tracks changes to the `HEAD` reference.
  - `refs/heads/` – Logs branch updates.
  - `refs/remotes/` – Logs remote-tracking branch changes.

### index

- **Purpose:** A staging area (cache) for changes before committing.
- **Location:** `.git/index`
- **Contents:** A binary file containing information about the working tree.

### packed-refs

- **Purpose:** Optimizes repository performance by storing references in a single file instead of multiple files.
- **Location:** `.git/packed-refs`
- **Contents:** Contains packed branch and tag references.

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
