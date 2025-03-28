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
  - [`clone` Commands](#clone-commands)
- [Flags](#flags)
  - [`-u`](#-u)
  - [`-message`](#-message)
  - [`-move`](#--move)
- [Collaboration](#collaboration)
  - [Forking](#forking)
  - [Pull Request](#pull-request)
  - [Review PR](#review-pr)
  - [Squashing commits](#squashing-commits)
- [`git` folder](#git-folder)
- [Merge Conflict](#merge-conflict)
- [Stashing](#stashing)
- [Cleaning](#cleaning)
- [Rebase](#rebase)
- [Reset](#reset)
- [Revert](#revert)

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

1. `git push` - Pushes the changes from the current branch to its corresponding upstream branch.
2. `git push <remote> <branch>` - pushes the specified branch to the remote.
3. `git push -u <remote> <branch>` - Pushes the branch and sets it as the upstream branch for future `git push` and `git pull` commands.
4. `git push --force` - Forces Git to push changes, even if it overwrites changes on the remote repository.
5. `git push --force-with-lease` - Similar to `--force`, but only forces the push if no one else has updated the remote branch since your last fetch. This prevents accidental overwriting of others' work.
6. `git push --dry-run` - Simulate Push Without Making Changes. Useful for verification before executing a real push.
7. `git push --delete <remote> <branch>` - Remove a remote branch

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

# Flags

| Symbol | Meaning                                                                      |
| ------ | ---------------------------------------------------------------------------- |
| A      | Added → The file is newly added and staged for commit.                       |
| M      | Modified → The file has been changed but not staged or committed.            |
| D      | Deleted → The file has been removed but the change is not yet committed.     |
| R      | Renamed → The file has been renamed.                                         |
| C      | Copied → The file has been copied from another file.                         |
| U      | Unmerged (Conflict) → The file has merge conflicts that need to be resolved. |
| ??     | Untracked → The file is new and not tracked by Git.                          |

## `-u`

The `-u` flag (short for `--set-upstream`) is used with `git push` to set the upstream (tracking) branch for your local branch. This means that after using this flag once, you can simply run `git push` or `git pull` without specifying the remote and branch.

If we don't use `-u`, we need to specify the branch whenever we want to push.

## `-message`

The `-m` flag (short for `--message`) is used with `git commit` to provide a commit message directly in the command. This avoids opening the default text editor for writing a commit message.

**Multi-line commit message:**

```shell
git commit -m "Fixed the login issue" -m "Resolved bug where incorrect credentials were not handled properly."
```

If you run `git commit` without `-m`, Git will open your default text edittor to enter detailed commit message. `git commit <message>` will occur error.

## `--move`

- Renames a branch only if the new branch name does not already exist.
- If the target branch name exists, the command fails with an error message.

**`--move --force`**

It's short form is `-M`

- Renames a branch even if the new branch name already exists.
- Forces the renaming by overwriting the existing branch.

# Collaboration

## Forking

Forking a repository is creating a copy of another user's repository in your GitHub account. This is useful when you want to contribute to a project but don't have direct access to push changes.

### Why Use Forking?

- You can freely experiment with changes without affecting the original repository.
- It allows contributors to work on a project without needing permission.
- You can send pull requests to the original repository when your changes are ready.

## Pull Request

A Pull Request (PR) is a way to propose changes to a repository. It allows developers to collaborate, review, and discuss code changes before merging them into the main project.

### Steps

1. Fork the Repository.
2. Clone the Forked Repository
3. Add the original repository as an upstream remote (to fetch updates from the original repo)
4. Create a New Branch
5. Make Changes & Commit
6. Push Changes to New Branch
7. Visit your Forked Repository
8. You'll see a message about your newly pushed branch. Click "Compare & pull request."
9. Select the base branch (usually main or develop) and your feature branch.
10. Provide a title and description of the changes.
11. Click "Create pull request."

## Review PR

1. Navigate to the repository, click on the Pull Requests tab and select the PR you want to review.
2. Read the title and description, under stand the purpose.
3. Click on the File changed tab and examine the modifications.
4. Approve or Request Changes
   - If the code is good, click "Approve" and submit the review.
   - If the code needs fixes, click "Request changes" and explain what should be improved.
   - If unsure, click "Comment" to start a discussion.
5. Merge the PR
   1. Click "Merge pull request".
   2. Choose between:
      - Merge commit (keeps all commits).
      - Squash and merge (combines commits into one).
      - Rebase and merge (applies commits individually).

## Squashing commits

Squashing commits means combining multiple commits into a single commit before merging a pull request (PR). This helps keep the commit history clean, making it easier to track changes and understand the project's development.

### Why Squash Commits?

1. **Clean Git History** – A single commit per PR keeps the history simple and easier to read.
2. **Removes Unnecessary Commits** – Intermediate commits like "fixed typo" or "debugging" are removed.
3. **Easier Reverts** – If something goes wrong, reverting a single commit is simpler than dealing with multiple commits.
4. **Better Collaboration** – Other developers can easily review a single meaningful commit rather than a list of small commits.

### How to work

1. Explore the commit with `git log --oneline`
   ```ts
   abc1234 Fixed typo
   def5678 Updated feature file
   ghi9012 Initial commit for new feature
   ```
2. Squash Commits Using Interactive Rebase

   Before merging the PR, squash commits using interactive rebase

   ```ts
   git rebase -i HEAD~3
   ```

   This opens an interactive editor with something like:

   ```ts
   pick ghi9012 Initial commit for new feature
   pick def5678 Updated feature file
   pick abc1234 Fixed typo
   ```

   Change `pick` to `squash (s)` for the second and third commits:

   ```ts
   pick ghi9012 Initial commit for new feature
   squash def5678 Updated feature file
   squash abc1234 Fixed typo
   ```

   Save and close the editor. Git will prompt you to edit the commit message. You can keep only the essential part, like:

   ```ts
   Added new feature with updates and typo fixes
   ```

3. Push the Squashed Commit

   After squashing, force-push the changes:

   ```ts
   git push origin feature-branch --force
   ```

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

# Stashing

When working on a Git repository, sometimes you might need to switch branches or pull updates, but you have uncommitted changes that you don’t want to commit yet. Instead of committing incomplete work, you can temporarily "stash" your changes using `git stash`.

**Why Use git stash?**

- You need to switch branches but don’t want to commit unfinished work.
- You want to pull the latest changes without committing temporary edits.
- You want to keep your working directory clean for testing or debugging.

## Commands

1. `git stash` - Stashing Your Changes with

   Git temporarily saves (stashes) tracked changes and resets your working directory to match the last commit.

   The file is not lost; it is stored in a `stash stack`.

2. `git stash list` - Viewing Stashed Changes

   - `stash@{0}`: The most recent stash.
   - `WIP on main`: Stashed from the `main` branch.

3. `git stash show -p stash@{0}` - see what changes were stashed.
4. `git stash apply` - This reapplies the most recent stash but keeps the stash in the list.
5. `git stash apply stash@{0}` - apply specific stash.
6. `git stash pop` - remove the most recent stash.
7. `git stash drop stash@{0}` - remove a specific stash.
8. `git stash clear` - clear all stashed.

# Cleaning

When working in a Git repository, you may end up with untracked files (files that are not yet staged or committed). These can clutter your working directory, especially after switching branches or running builds that generate temporary files. Git provides the `git clean` command to remove untracked files and directories safely.

**The `git clean` command is used to delete:**

- Untracked files (files that are not staged or committed).
- Untracked directories (if explicitly specified).
- Ignored files (if explicitly specified).

**⚠️ Warning:** git clean is irreversible. Once deleted, the files cannot be recovered unless backed up.

## Commands

1. `git clean -n` → Preview what will be deleted.
2. `git clean -f` → Remove untracked files.
3. `git clean -fd` → Remove untracked files and directories.
4. `git clean -fX` → Remove only ignored files.
5. `git clean -fx` → Remove everything untracked (including ignored files).

# Rebase

Git rebase is a powerful command that allows you to integrate changes from one branch into another by moving or rewriting commit history. It is an alternative to `git merge`, but instead of creating a merge commit, it rewrites the commit history to keep it linear.

## Why Use Git Rebase?

- **Keeps commit history clean and linear:** Instead of multiple merge commits, rebase makes it appear as if all work happened sequentially.

- **Avoids unnecessary merge commits:** It moves your feature branch commits on top of the latest commit from the main branch.

- **Useful for integrating changes from remote branches:** Before pushing changes, rebasing ensures your branch is up-to-date.

## Example

Let's say you are working on a feature branch (`feature-branch`), and the `main` branch has received updates. Instead of merging, you decide to use rebase.

```
main:
A --- B --- C    (main)

feature-branch:
       \
        D --- E  (feature-branch)
```

- `A → B → C` are the commits in the `main` branch.
- `D → E` are commits in the `feature-branch`, which was created from B.

Now, suppose `main` has received new commits (`C`), and you want to update your `feature-branch` with these latest changes.

1. Switch to `feature-branch`.
2. Rebase your branch onto `main`: `git rebase main`
   **What happens now:**

- Git moves commits `D` and `E` aside.
- It updates `feature-branch` with the latest changes from `main` (i.e., commits `C`).
- Then, it reapplies `D` and `E` on top of `C`.

3. **Handling Conflicts:**
   If there are conflicts, Git will pause the rebase and show a message:
   To resolve, manually fix the conflict in the affected files, use `git add` to stage teh resolved files. Continue the rebase:

```
git rebase --continue
```

4. Successfully Rebased History

```
main:
A --- B --- C   (main)
            \
             D' --- E'  (feature-branch)
```

Now, `D` and `E` have been reapplied as `D'` and `E'` on top of `C`, keeping history linear.

## Differences: Rebase vs Merge

| Feature            | Merge                      | Rebase                                              |
| ------------------ | -------------------------- | --------------------------------------------------- |
| **Commit History** | Creates a merge commit     | Keeps history linear                                |
| **Commit Order**   | Branches remain separate   | Commits appear as if they were created sequentially |
| **Use Case**       | Preserves original history | Makes history cleaner                               |

## Commands

- `git rebase <branch>` – Rebase your current branch onto another branch.
- `git rebase --interactive <commit> (-i)` – Start an interactive rebase for modifying commits.
- `git rebase --continue` – Continue rebase after resolving conflicts.
- `git rebase --abort` – Abort rebase and return to the original branch state.
- `git rebase --skip` – Skip the current conflicting commit and continue rebase.
- `git rebase --onto <new-base> <old-base> <branch>` – Rebase a branch onto a different base.
- `git pull --rebase` – Fetch changes and rebase instead of merging.

# Reset

It is used to undo changes by moving the HEAD (current branch pointer) to a different commit. It allows you to remove commits, unstage changes, or discard modifications in the working directory.

## Types

| Reset Mode | Description                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| `--soft`   | Moves the branch pointer to a previous commit but keeps changes staged.                                     |
| `--mixed`  | Moves the branch pointer to a previous commit and unstages changes but keeps them in the working directory. |
| `--hard`   | Moves the branch pointer to a previous commit and discards all changes.                                     |

## Commands

- `git reset <commit>` – Moves the branch to a specific commit (default: mixed reset).
- `git reset --soft <commit>` – Moves the branch to a commit, keeping changes staged.
- `git reset --mixed <commit>` – Moves the branch to a commit, unstaging changes (default behavior).
- `git reset --hard <commit>` – Moves the branch to a commit and deletes all changes.
- `git reset HEAD <file>` – Unstages a file without changing its content.
- `git reset --hard HEAD` – Discards all uncommitted changes.
- `git reset --keep <commit>` – Like --hard but preserves uncommitted changes that do not conflict.
- `git reset --merge` – Aborts a failed merge, similar to `git merge --abort`.

## Comparison

| Feature      | `git reset`                   | `git revert`                         |
| ------------ | ----------------------------- | ------------------------------------ |
| **History**  | Removes commits               | Creates a new commit to undo changes |
| **Safety**   | Can be destructive (`--hard`) | Safe for shared branches             |
| **Use Case** | Undo commits locally          | Undo commits in a public branch      |

# Revert

It is used to undo the changes introduced by a specific commit by creating a new commit that reverses those changes. Unlike `git reset`, which can alter commit history, `git revert` is safe for public repositories and works by adding a new commit that undoes the effect of an earlier commit, leaving the history intact.

## Why Use git revert?

- **Preserve history:** It doesn’t rewrite history, unlike git reset. Instead, it creates a new commit that effectively undoes previous changes.

- **Safe for shared branches:** Since it doesn’t alter the commit history, it is useful when working on shared branches with others.

- **Granular undoing:** You can undo specific commits in a branch without affecting others.

## Example

Let’s assume you have the following commit history in your `main` branch:

```
A --- B --- C --- D  (main)
```

Where:

- `A → B → C → D` are commits in the history.
- Commit `D` has a bug that you need to undo.

Now, instead of resetting to `C` and rewriting history, you can revert commit `D` to create a new commit that undoes the changes in `D`.

### Steps

#### 1. Revert a Single Commit

Suppose the commit hash of `D` is `abcd1234`. To revert the changes in commit `D`, you run:

```bash
git revert abcd1234
```

What happens now:

- Git creates a new commit (`E`) that undoes the changes introduced by `D`.
- Your new commit history will look like this:

```
A --- B --- C --- D --- E  (main)
```

Where:

- `E` is the new commit that undoes the changes made in `D`.

#### 2. Revert with Conflict Resolution

Sometimes, reverting a commit can cause conflicts (e.g., if the changes in `D` conflict with the code in later commits). Git will prompt you to resolve the conflicts manually:

1. Resolve the conflicts in the conflicted files.

2. Stage the resolved files:

```bash
git add <file1> <file2>
```

3. Complete the revert process:

```bash
git add <file1> <file2>
```

#### 3. Revert Multiple Commits

To revert multiple commits, you can use a range of commits. For example, if you want to revert commits `C` and `D`:

```bash
git revert C^..D
```

This will revert all changes from commit `C` through `D` inclusively.

#### Revert and Skip Commit (if needed)

If you don't want to revert a specific commit in the middle of a series of commits, you can use the `--skip` option:

```bash
git revert --skip
```

This will skip over a problematic commit during the revert process, leaving it unchanged.

## Commands

- `git revert <commit>` – Creates a new commit that undoes the changes from the specified commit.
- `git revert HEAD` – Reverts the latest commit.
- `git revert HEAD~n` – Reverts the commit that is n commits before the latest commit.
- `git revert --no-commit <commit> (-n)` – Applies changes from the commit but does not create a new commit.
- `git revert --no-edit <commit>` – Reverts a commit without opening the commit message editor.
- `git revert --continue` – Continues the revert process after resolving conflicts.
- `git revert --abort` – Aborts the revert operation if conflicts arise.
- `git revert -m <parent-number> <merge-commit>` – Reverts a merge commit by specifying which parent to keep.

## `git revert` VS `git reset`

| Feature            | `git revert`                              | `git reset`                              |
| ------------------ | ----------------------------------------- | ---------------------------------------- |
| **History**        | Adds a new commit that undoes changes     | Removes commits or changes the history   |
| **Commit History** | Leaves commit history unchanged           | Rewrites history (may require `--force`) |
| **Use Case**       | Undo a commit safely (on public branches) | Undo recent commits locally              |
