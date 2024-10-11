# Contributing to [Project Name]

Thank you for your interest in contributing to our project! This document provides guidelines and steps for contributing.

## Table of Contents
- [Getting Started](#getting-started)
    - [Finding an Issue](#finding-an-issue)
    - [Creating an Issue](#creating-an-issue)
- [Development Setup](#development-setup)
    - [Prerequisites](#prerequisites)
    - [Fork and Clone](#fork-and-clone)
    - [Environment Setup](#environment-setup)
    - [GitHub OAuth App Setup](#github-oauth-app-setup)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Community Guidelines](#community-guidelines)

## Getting Started

### Finding an Issue
1. Check our [issues page](https://github.com/org-name/project-name/issues) for existing issues
2. Issues labeled `good first issue` are perfect for newcomers
3. Comment on the issue you'd like to work on and ask to be assigned

### Creating an Issue
If you've found a bug or have a feature suggestion:
1. Check if a similar issue already exists
2. If not, create a new issue using the appropriate template
3. Provide a clear title and detailed description
4. Wait for maintainer feedback before starting work
5. For feature requests, discuss with maintainers first

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Fork and Clone
1. Click the "Fork" button at the top right of the repository page
2. Clone your forked repository
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```
3. Add the original repository as upstream
```bash
git remote add upstream https://github.com/clubgamma/club-gamma-frontend.git
```

### Environment Setup

1. Install dependencies
```bash
npm install
```

2. Copy the `.env.example` file to `.env`
```bash
cp .env.example .env
```

3. Set up your environment variables in the `.env` file:
```
VITE_API_URL=http://localhost:3000
VITE_GITHUB_CLIENT_ID=your_github_client_id
```

### GitHub OAuth App Setup

To get your GitHub Client ID:

1. Go to your GitHub Settings
2. Navigate to "Developer settings" > "OAuth Apps" > "New OAuth App"
3. Fill in the application details:
    - Application name: [Your App Name]
    - Homepage URL: http://localhost:5173
    - Authorization callback URL: http://localhost:5173/redirect
4. Click "Register application"
5. Copy the generated Client ID and paste it in your `.env` file

## Development Workflow

1. Ensure your fork is up-to-date
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

2. Create a new branch for your feature/fix
```bash
git checkout -b feature/your-feature-name
```

3. Start the development server
```bash
npm run dev
```

4. Make your changes and test thoroughly

5. Commit your changes using conventional commits
```bash
git commit -m "feat: add new feature"
```

## Pull Request Process

1. Before creating a PR:
    - Update documentation if needed
    - Ensure your branch is up-to-date with main

2. Push your changes
```bash
git push origin feature/your-feature-name
```

3. Create a Pull Request
    - Go to your fork on GitHub
    - Click "Pull Request"
    - Select your branch and fill in the PR template
    - Link the related issue using "Closes #123" in the description
    - Add screenshots if UI changes are involved
    - Request review from maintainers

4. PR Best Practices
    - Keep PRs small and focused
    - Write clear commit messages
    - Be responsive to feedback and make requested changes
    - Update your branch if needed:
      ```bash
      git fetch upstream
      git rebase upstream/main
      git push origin feature/your-feature-name -f
      ```

## Code Style

- We use ESLint for code formatting
- Use JavaScript for all files
- Follow the existing code style

### Component Guidelines
- Use shadcn/ui components when possible
- Follow atomic design principles
- Write unit tests for components using Vitest

## Issue and Pull Request Labels

- `bug`: Something isn't working
- `feature`: New feature request
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `documentation`: Improvements or additions to documentation

## Community Guidelines

- Be respectful and inclusive
- Provide constructive feedback
- Help others who are contributing
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## Need Help?

- Feel free to ask questions in the issue comments
- Join our [Discord] for real-time discussions

## License

By contributing, you agree that your contributions will be licensed under the project's license.
