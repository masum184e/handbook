# Contents

- [Basics](#basics)
  - [Version Control](#version-control)
  - [Workflow](#workflow)
  - [Configuration](#configuration)
- [Fundamentals](#fundamentals)
  - [Initialization](#initialization)
  - [Staging](#staging)
  - [Commits](#commits)
  - [History](#history)
  - [Differences](#differences)
  - [Status](#status)
- [Branching](#branching)
  - [Branches](#branches)
  - [Switching Branches](#switching-branches)
  - [Merging Branches](#merging-branches)
- [Remote Repositories](#remote-repositories)
  - [Remote Name](#remote-name)
  - [Remote Commands](#remote-commands)
  - [`push` Commands](#push-commands)
  - [`fetch` Commands](#fetch-commands)
  - [`pull` Commands](#pull-commands)
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

## Configuration

`git config` is a command used to configure Git settings on your system.

### Types of Git Configurations

1. **System Level**

   - Applies to all users and repositories on the computer.
   - Stored in: `C:\Program Files\Git\etc\gitconfig` (Windows).

2. **Global-level**

   - Applies to all repositories for the current user.
   - Stored in: `~/.gitconfig` or `~/.config/git/config`.

3. **Local-level**

   - Specific to a single repository.
   - Stored in: `.git/config` inside the repository.

**📌 Note:**

- Local configurations override global configurations.
- Global configurations override system configurations.

### Commands

1. **Setup user information:**

   ```shell
   git config --global user.name "John Doe"
   git config --global user.email "john.doe@example.com"
   ```

   - `user.name`: Your name (appears in commit history).
   - `user.email`: Your email (used for commit identification).

2. **Check Configuration Settings**

   ```shell
   git config --list
   ```

   Displays user details, editor preferences, merge tools, etc.

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

```shell
. .. .git
```

Reinitializing won’t overwrite existing version history. If the repository is already initialized, it will simply reinitialize Git settings.

```shell
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

- `git add file_name` -> take the file into staging state(here files are trackable)
- `git add -A` -> stage all changed file in directory and subdirectories
- `git add .` -> stage all changed file in directory but not subdirectories
- `git add *.extension` -> stage all changed file in directory with specific extension
- `git add **/*.extension` -> stage all changed file in directory and subdirectories with specific extension
- `git restore --staged file_name` -> unstage file without losing your changes.

## Commits

A commit in Git is a snapshot of the current state of your project. The `git commit` command takes all staged changes (added using `git add`) and saves them permanently in the repository's history.

**Each commit has:**

- A unique commit ID (SHA-1 hash).
- A commit message describing the changes.
- A reference to the previous commit, forming a history.

### Why Are Commits Important?

- **Version Control** – You can track changes over time.
- **Revert to Previous States** – Restore any earlier version of your project.
- **Collaboration** – Helps teams understand what was changed and why.

### Commands

- `git commit -m 'message here'` -> moving staging to local repository(message should be clear and understandable).
- `git commit -am 'message here'` -> staging and commiting together.
- `git reset --soft HEAD~1` -> undo the last commit but keep changes in staging area.
- `git reset --mixed HEAD~1` -> undo the last commit but keep changes in working directory.
- `git reset --hard HEAD~1` -> permanently deletes the last commit and all changes.

## History

Git provides powerful tools to view the history of commits made to a repository. The most commonly used commands for this purpose are:

- `git log`: Shows the commit history.
- `git reflog`: Shows a reference log of changes to the branch's HEAD.

### `git log`

Git provides commands like `git log` to navigate through the commit history.

1. `git log` displays a list of commits in reverse chronogloical order(latest commit first)

It shows:

- **Commit hash** – A unique identifier (SHA-1 hash) for each commit.
- **Author** – The person who made the commit.
- **Date** – When the commit was created.
- **Commit message** – A short description of the commit.

**Example Output:**

```shell
commit d6f9b1a2b6c3e9d0d46f15e5b2af324e54b8d214 (HEAD -> main)
Author: John Doe <john@example.com>
Date:   Sat Feb 23 10:30:00 2025

    Updated README file

commit b1c3d9f3e6a2d8a7c9b3e8a2f9c1d6e7a8f5c3d2
Author: John Doe <john@example.com>
Date:   Fri Feb 22 14:20:15 2025

    Initial commit: Added README
```

2. `git log --online` -> return online-log

**Example Output:**

```shell
d6f9b1a Updated README file
b1c3d9f Initial commit: Added README
```

3. `git log -n` -> return latest n commit.
4. `git log --author="John Doe"` -> return commits by a specific user.
5. `git log --grep="bug fix"` -> search commit contain specific keyword.
6. `git log -p` -> shows changes(diff) introduced by each commit.

### `git reflog`

Unlike `git log`, which shows the commit history, `git reflog` tracks local reference changes, including:

- When a commit was made
- When branches were switched
- When commits were reset, rebased, or amended

1. `git reflog` shows:
   ```shell
   e3a1b5c (HEAD -> main) HEAD@{0}: commit: Updated index.html with a welcome message
   f3a29c1 HEAD@{1}: commit: Added index.html with a basic heading
   d7e4f12 HEAD@{2}: checkout: moving from feature-branch to main
   ```

- `HEAD@{0}`: Most recent reference update (latest commit).
- `HEAD@{1}`: Previous commit before the latest.
- `checkout: moving from feature-branch to main:` Shows that the branch was switched.

### Difference Between `git log` and `git reflog`

| Feature                           | `git log` | `git reflog` |
| --------------------------------- | --------- | ------------ |
| Shows commit history              | ✅        | ✅           |
| Shows branch movements (checkout) | ❌        | ✅           |
| Shows reset/rebase history        | ❌        | ✅           |
| Available only locally            | ❌        | ✅           |
| Shows remote commits              | ✅        | ❌           |

### Using `git log` and `git reflog` for Recovery

If you accidentally reset or delete a commit, you can recover.

1. View the reference log with `git reflog`. Suppose the lost commit hash was `e3a1b5c`.
2. Reset to the lost commit with `git reset --hard e3a1b5c`. This restores the repository to the state of that commit.

## Differences

The `git diff` command allows you to compare changes in your project.

It helps identify differences between:

- Working directory and staging area
- Staged changes and last commit
- Two commits
- Two branches

### Commands

- `git diff` - show differences before `git add .`
- `git diff --staged` - show differences after `git add .`
- `git diff HEAD` - show differences both before and after `git add .`
- `git diff <commit1> <commit2>` - Compare two specific commits
- `git diff -- file.txt` - Show changes for a specific file

## Status

The git status command is used to check the state of the working directory and staging area. It helps you understand which changes are tracked, untracked, or staged before committing them.

It provides information about:

- Untracked files (new files not yet added to Git)
- Modified files (changes not yet staged)
- Staged files (ready to be committed)
- Branch information (current branch, ahead/behind status)

### States

1. Before `git init`

   ```shell
   fatal: not a git repository (or any of the parent directories): .git
   ```

2. After `git init` with empty file

   ```shell
   On branch master

   No commits yet

   nothing to commit (create/copy files and use "git add" to track)
   ```

3. After `git init` with untracked file

   ```shell
   On branch master

   No commits yet

   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           index.html

   nothing added to commit but untracked files present (use "git add" to track)
   ```

4. After `git add .`

   ```shell
   On branch master

   No commits yet

   Changes to be committed:
     (use "git rm --cached <file>..." to unstage)
           new file:   index.html
   ```

5. After `git commit -m"commit message"`

   ```shell
   On branch master
   nothing to commit, working tree clean
   ```

6. After making another change after initialization

   ```shell
   On branch master
   Changes not staged for commit:
     (use "git add <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   index.html

   no changes added to commit (use "git add" and/or "git commit -a")
   ```

7. After tracked
   ```shell
   On branch master
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)
           modified:   index.html
   ```
8. Create and Leave an Untracked File
   ```shell
   On branch main
   Untracked files:
     (use "git add <file>..." to include in what will be committed)
   	newfile.txt
   ```
9. Removed a Tracked File
   ```shell
      On branch main
   Changes not staged for commit:
     (use "git add/rm <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes)
   	deleted:    hello.txt
   ```
   To stage the deletion run `git add hello.txt` or `git rm hello.txt`. Then check again:
   ```
      On branch main
   Changes to be committed:
   	deleted:    hello.txt
   ```
   Then commit the deletion

# Branching

Branching in Git allows developers to create separate lines of development, making it easier to work on new features, bug fixes, or experiments without affecting the main codebase.

## Branches

### Commands

1. `git branch` - show all local branches in the repository, current branch marked with and asterisk(`*`).
2. `git branch -a` - Lists both local and remote branches.
3. `git branch <branch-name>` - Creates a new branch but does not switch to it.
4. `git branch -m <new-name>` - rename current branch.
5. `git branch -m <old-name> <new-name>` - rename specific branch.
6. `git branch -d <branch-name>` - Deletes a local branch (only if it has been merged). If the branch contains unmerged changes, Git will prevent deletion.
7. `git branch -D <branch-name>` - Forcefully deletes a branch, even if it has unmerged changes.
8. `git branch -v` - Displays the latest commit message for each branch.
9. `git branch --merged` -
10. `` - Lists branches that have already been merged into the current branch.
11. `git branch --no-merged` - Lists branches that have not been merged yet.
12. `git branch -r` - Lists remote branches.
13. `git branch --show-current` - Check the current branch.

## Switching Branches

### Commands

1. `git checkout <branch-name>` - Moves to the specified branch. Updates the working directory to match the branch's latest commit.
2. `git checkout -b <new-branch>` - Creates a new branch and immediately switches to it.
3. `git checkout <commit-hash>` - Moves to a previous commit in "detached HEAD" mode. This means you are not on any branch, just viewing an old commit.
4. `git checkout <branch-name> -- <file-path>` - Restores a specific file from another branch without switching branches.
5. `git checkout -- <file-path>` - Resets a file to its last committed state.
6. `git checkout HEAD -- <file-path>` - Recovers a deleted file that was last committed.
7. `git checkout HEAD .` - Resets all files in the working directory to the last committed version.

## Merging Branches

It combines the commit history of two branches and creates a new merge commit.

### Commands

1. `git merge <branch-name>` - Merges `<branch-name>` into the current branch. Creates a new commit combining changes from both branches.
2. `git merge --ff <branch-name>` - If possible, Git moves the branch pointer forward without creating a merge commit(Fast-Forward Merge). Works only if there are no diverging commits.
3. `git merge --no-ff <branch-name>` - Forces Git to create a merge commit(No Fast-Forward) even if a fast-forward merge is possible. Preserves branch history.
4. `git merge --commit <branch-name>` - Merges the branch and immediately creates a merge commit. This is the default behavior.
5. `git merge --no-commit <branch-name>` - Merges changes but does not create a merge commit. Allows reviewing or modifying files before committing.

### Fast-Forward Merge

A Fast-Forward Merge happens when there is a linear commit history between branches. In this case, Git simply moves the branch pointer forward to the latest commit of the merged branch instead of creating a new merge commit.

#### When Fast-Forward Merge Happens

- The feature branch is ahead of the main branch.
- No new commits were made on the main branch after branching.

#### Example

1. Just commited in main branch.
2. Created new branch.
3. Make some changes in new branch.
4. Committed the changes.
5. Merge main and new branch.

Since `main` has not progressed after the branch was created, Git moves the `main` pointer to the latest commit of `new-branch`, effectively "fast-forwarding" it.

**Output:**

```shell
Updating f3a29c1..e3a1b5c
Fast-forward
 file.txt | 1 +
```

**Fast-Forward Merge Visualization**

```less
Before Merge:
main:    A --- B  (Feature Branch)
         |
         v
        A  (Main Branch)

After Merge:
main:    A --- B  (Both Branches Point Here)
```

Since no new commits were added to `main`, it simply moves forward.

### Recursive Merge

A Recursive Merge happens when both branches have diverged, meaning there are commits on both branches that are not shared.

#### When Recursive Merge Happens

- Both branches have new commits since they diverged.
- A new merge commit is created to combine the histories.

#### Example

1. Just commited in main branch.
2. Created new branch.
3. Make some changes in new branch.
4. Switch back to main branch and make some changes as well.

Now, both `main` and `new-branch` have unique commits.

Since both branches have diverged, Git performs a recursive merge and creates a new merge commit.

**Output:**

```shell
Merge made by the 'recursive' strategy.
```

**Recursive Merge Visualization**

```shell
Before Merge:
main:    A --- C   (Main Branch)
          \
           B --- D (Feature Branch)

After Merge:
main:    A --- C --- M  (Merge Commit)
          \       /
           B --- D  (Feature Branch)
```

The merge commit `M` combines the histories.

### Difference Between Fast-Forward and Recursive Merge

# Remote Repositories

## Remote Name

A remote name likde `origin` is an alias for a remote repository's URL.

Instead of typing the full remote URL every time, Git allows you to use a short name with easier reference.

**Without a Remote Name**

```shell
git push https://github.com/user/repo.git main
```

**With a Remote Name**

```shell
git push origin main
```

## Remote Commands

1. **List all remote repo of local repo:**

```shell
git remote -v
```

It return both fetch and push URLs.

- **Fetch URL:** Used for pulling (downloading) changes from the remote repository.
- **Push URL:** Used for pushing (uploading) changes to the remote repository.

By default, both are the same, but they can be different. For example, in some workflows:

- You might fetch from a read-only URL (like `git://` or SSH with limited access).
- You might push to a different URL (like HTTPS with authentication).

**Setting different URL:**

- `--push` flag is used to set a different push URL from the fetch URL

```shell
git remote set-url --push origin git@github.com:user/repo.git
```

- the default url is fetch url

```shell
git remote set-url origin https://github.com/user/repo.git
```

2. `git remote add <name> <url>` - Add a new remote repository
3. `git remote remove <name>` - Remove remote repository
4. `git remote rename <old-name> <new-name>` - Rename remote repository
5. `git remote show <name>` - Show information about remote repository
6. `git remote set-url <name> <new-url>` - Change remote URL
7. `git remote get-url <name>` - Verify the remote URL

## `push` Commands

It uploads your local commits to a remote repository. It syncs your local branch with a remote branch, allowing others to see and collaborate on your changes.

### What Happens Under the Hood?

When you push:

1. Git checks your local commits.
2. It sends the changes to the remote repository.
3. If successful, the remote branch updates to match your local branch.

If your remote branch has new commits, Git prevents you from pushing — you’ll need to pull and resolve conflicts first.

## `fetch` Commands

It downloads changes from the remote repository, but it doesn’t update your local working directory or current branch. It only updates your remote-tracking branches, allowing you to inspect the changes before integrating them.

It is used to retrieve the latest changes from a remote repository without merging them into your local repository. It allows you to update your local copy with new branches, tags, and commits available on the remote without modifying your working directory.

1. `git fetch` - fetch from default remote, download commit, branches, tags but does not merge them into current branch.
2. `git fetch <remote>` - fetch from specified remote.
3. `git fetch <remote> <branch>` - fetch from specified branch.
4. `git fetch -all` - update all configured remote when a repo has multiple remotes
5. `git fetch --dry-run` - Simulates fetching without actually downloading anything.
6. `git fetch origin <commit-hash>` - Fetches a specific commit from the remote.

## `pull` Commands

It is used to fetch and merge changes from a remote repository into the current branch. It is essentially a combination of `git fetch` (downloads changes) and `git merge` (applies them to your branch).

1. `git pull` - Fetches and merges changes from the default remote.
2. `git pull <remote>` - Fetches and merges changes from specified remote.
3. `git pull <remote> <branch>` - Pull form specified branch.
4. `git pull --rebase` - Instead of merging changes, this command applies changes on top of your current branch, keeping the history clean.
5. `git pull --no-commit` - Pulls changes but does not automatically create a merge commit.
6. `git pull --no-merge` - Fetches updates but does not merge them automatically.

## `clone` Commands

It create a copy of a remote repository on your local machine.

When you clone a repository, Git performs the following actions:

- Copies the entire repository (all branches, commits, history, etc.) from the remote server to your local machine.

- Sets up the remote connection (origin by default) so you can fetch, push, and pull changes.

1. `git clone <repository_url> <new_directory_name>` - Clone the repo into a specific directory.
2. `git clone --branch <branch_name> <repository_url>` - Clone a specific branch.
3. `git clone --depth 1 <repository_url>` - If you only need the latest version of the repository and not the full commit history.

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

Resolve the conflict, stage it and commit the merge.

Before merging, you can check for potential conflicts using `git diff --check` and after a conflict occurs, you can list conflicted files using `git status`. It will output:

```shell
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
Unmerged paths:
  (use "git add <file>..." to mark resolution)
	both modified:   file.txt
```

If you want to cancel the merge and return to the pre-merge state use `git merge --abort`.
