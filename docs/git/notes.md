# Version Control Introduction

## What is a Version Control System (VCS)?

A **Version Control System (VCS)** is a kind of database that lets you save a snapshot of a complete project at any point in time.

Every change made to the project files is tracked, including:

- Who made the change
- Why the change was made (references to problems fixed or features added)

Later, when it is required to look at an older snapshot/version, VCS shows how exactly it differed from the previous one.  
It helps teams manage and track changes in code over time.

---

## Why is a Version Control System Needed?

1. **Collaboration**  
   If developers work on the same project from different regions, collaboration is difficult without a VCS.

2. **Strong Versions**  
   Managing multiple versions of a project on your disk can be challenging because it requires storing and organizing a large amount of data.

3. **Restoring Previous Versions**  
   VCS allows rolling back to a previous version if needed. If a mistake or issue is introduced, developers can revert to a known working state.

4. **Backup**  
   In case of system or disk failure, all files can be lost. VCS provides a backup.

---

## Types of Version Control Systems

1. **Local Version Control System**  
   Example: `file_1.txt → file_2.txt → file_3.txt`

2. **Centralized Version Control System**

3. **Distributed Version Control System** (Latest)

---

## What is Git?

- Git is a **distributed VCS** widely used in software development.
- It allows multiple developers to work collaboratively on a project.
- It efficiently manages and tracks changes to source code.

---

## How Git Works

- Git stores its data as a series of snapshots of a miniature filesystem.
- Every time you commit changes or save your project state, Git takes a snapshot of all your files and stores a reference to that snapshot.

A Git project resides in three sections:

1. **Working Directory**  
   A single checkout of one version of the project.

2. **Staging Area**  
   An index that stores information about what the next commit will contain.

3. **Git Repository**  
   The place where Git stores the metadata and object database for a project.

---

# Initializing an Empty Repository

## Creating the `.git` Folder

- `git init` → Create/initialize a Git repository (a `.git` folder is created in the current path; files are initially untracked)
- `git status` → Displays the state of the working directory and staging area

---

# Basic Commands

## Creating a New Repository (Run in Order)

```bash
echo "write anything you want" >> file_name
git init
git add file_name
git commit -m "commit_message"
git branch -M branch_name
git remote add origin https://github.com/user_name/repository_name.git
git push -u origin branch_name
```

## Command Explanations

- **echo** → Create a new file and write something in it
- **git init** → Initialize an empty Git repository
- **git add** → Add the file to the staging area (starts tracking changes)
- **git commit** → Save changes with a message describing what you did
- **git branch** → Set or rename the branch (default: `master` in VS Code, `main` on GitHub)
- **git remote** → Connect local repository with a remote repository
- **git push** → Send changes to the remote repository

---

## Handling a Working Repository

```bash
git add file_name
git commit -m "commit_message"
git push
```

- Whenever changes are made in the local repository, it is recommended to push them to the remote repository.
- Steps:
  1. Add changes to the staging area
  2. Commit with a message
  3. Push to the remote repository

## Staging & Unstaging

### Staging

- `git add file_name` → Stage a specific file
- `git add -A` → Stage all changed files in the directory and subdirectories
- `git add .` → Stage all changed files in the current directory (not subdirectories)
- `git add *.extension` → Stage all changed files with a specific extension in the directory
- `git add **/*.extension` → Stage all changed files with a specific extension in all subdirectories

After staging, files are trackable.  
If changes are made again, they must be staged again.

- `git diff` → Show changes
- `git restore file_name` → Discard changes in a file

---

### Unstaging

- `git rm --cached file_name` → Remove a file from the staging area (without deleting it locally)

## Commit & Uncommit

### Commit

- `git commit -m "message here"` → Move changes from staging to the local repository  
  _(Message should be clear and understandable)_

- `git log` → Show commit history (you can commit multiple times)
- `git commit -am "message here"` → Stage and commit together

After committing, you are ready to push the local repository to the remote repository.
