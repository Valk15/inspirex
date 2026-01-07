# Instructions to Push Code to GitHub

## Prerequisites
1. Install Git from https://git-scm.com/download/win
2. After installation, restart your terminal/PowerShell

## Steps to Push Code

Once Git is installed, run these commands in PowerShell from your project directory:

```powershell
# Initialize git repository (if not already initialized)
git init

# Add the remote repository
git remote add origin https://github.com/Valk15/inspirex.git

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: InspireX 2026 Landing Page"

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

## If the repository already has content

If the remote repository already has commits, you may need to pull first:

```powershell
git pull origin main --allow-unrelated-histories
```

Then push:

```powershell
git push -u origin main
```

## Authentication

You may be prompted for credentials. Use one of these methods:
- **Personal Access Token**: Create one at https://github.com/settings/tokens
- **GitHub CLI**: Install and authenticate with `gh auth login`
- **SSH Key**: Set up SSH keys for passwordless authentication
