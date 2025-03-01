# Comprehensive Cline Project Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Development Environment Setup](#development-environment-setup)
3. [Cline Memory Bank Configuration](#cline-memory-bank-configuration)
4. [Project Structure and Organization](#project-structure-and-organization)
5. [Tech Stack Overview](#tech-stack-overview)
6. [Development Workflow](#development-workflow)
7. [Database Management with Supabase](#database-management-with-supabase)
8. [Styling with Tailwind CSS](#styling-with-tailwind-css)
9. [Deployment with Vercel](#deployment-with-vercel)
10. [Git and GitHub Best Practices](#git-and-github-best-practices)
11. [Environment Variables and Security](#environment-variables-and-security)
12. [Troubleshooting and Getting Help](#troubleshooting-and-getting-help)
13. [Resources and Learning Materials](#resources-and-learning-materials)

## Introduction

This guide serves as a comprehensive template for developing and shipping applications using the Cline AI-powered development environment in VS Code, along with the recommended tech stack. By following this guide, you'll be able to:

- Set up an optimal development environment
- Configure Cline as your AI development co-pilot
- Structure your project for maintainability and scalability
- Develop features efficiently with Next.js, Tailwind, and Supabase
- Deploy your application to production with Vercel
- Maintain best practices for version control with Git and GitHub

The stack recommended in this guide is specifically chosen for:

- Production-readiness from day one
- Seamless integration between all components
- Generous free tiers for development and small-scale production
- Optimization for AI-first development workflows

## Development Environment Setup

### Essential Tools Installation

1. **VS Code**
   - Download and install from [code.visualstudio.com](https://code.visualstudio.com/)
   - Recommended extensions:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense
     - GitHub Copilot (optional but complementary to Cline)

2. **Node.js and npm**
   - Install the latest LTS version from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

3. **Git**
   - Install from [git-scm.com](https://git-scm.com/)
   - Configure your identity:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

4. **Cline Extension for VS Code**
   - Install the Cline extension from the VS Code marketplace
   - Authenticate and set up your account as prompted

5. **GitHub Account**
   - Create or log in to your GitHub account
   - Set up SSH keys for secure authentication (recommended)

### Creating a New Project Repository

1. Create a new repository on GitHub
   - Choose a descriptive name
   - Initialize with a README.md
   - Add a .gitignore file for Node.js

2. Clone the repository locally:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

## Cline Memory Bank Configuration

The Memory Bank is Cline's way of understanding your project context, enabling it to provide more relevant and accurate assistance.

### Setting Up the Memory Bank

1. Create a `cline_docs` folder in your project root:
   ```bash
   mkdir cline_docs
   ```

2. Create a `projectBrief.md` file in the `cline_docs` folder:
   ```bash
   touch cline_docs/projectBrief.md
   ```

3. Add your project brief to the file (template below)

4. Create a `.clinerules` file in your project root:
   ```bash
   touch .clinerules
   ```

5. Add the tech stack and project structure rules (template below)

6. Initialize the memory bank by telling Cline:
   ```
   initialize memory bank
   ```

### Project Brief Template

```markdown
# Project Brief

## Overview
Building a [type of application] that will [main purpose].

## Core Features
- Feature 1
- Feature 2
- Feature 3

## Target Users
[Describe who will use your application]

## Technical Preferences (optional)
- Any specific technologies you want to use
- Any specific requirements or constraints
```

### .clinerules Template

```markdown
# Project Configuration

## Tech Stack
- Next.js 14+ with App Router
- Tailwind CSS for styling
- Supabase for backend
- Vercel for deployment
- GitHub for version control

## Project Structure
/src
  /app         # Next.js App Router pages
  /components  # React components
  /lib         # Utility functions
  /types       # TypeScript types
/supabase
  /migrations  # SQL migration files
  /seed        # Seed data files
/public        # Static assets

## Database Migrations
SQL files in /supabase/migrations should:
- Use sequential numbering: 001, 002, etc.
- Include descriptive names
- Be reviewed by Cline before execution

Example: 001_create_users_table.sql

## Development Workflow
- Cline helps write and review code changes
- Vercel automatically deploys from main branch
- Database migrations reviewed by Cline before execution

## Security
DO NOT read or modify:
- .env files
- **/config/secrets.*
- Any file containing API keys or credentials
```

## Project Structure and Organization

### Scaffold Your Project with Cline

After setting up the Memory Bank, ask Cline to scaffold your project:

```
Please scaffold a new Next.js project with Tailwind CSS and Supabase integration based on my project brief.
```

### Recommended Project Structure

```
your-project/
├── .git/
├── .github/
│   └── workflows/                # CI/CD workflows
├── cline_docs/                   # Cline Memory Bank
│   └── projectBrief.md
├── node_modules/
├── public/                       # Static assets
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   ├── (auth)/               # Auth-related pages
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── dashboard/            # Dashboard pages
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # React components
│   │   ├── ui/                   # UI components
│   │   ├── forms/                # Form components
│   │   └── layouts/              # Layout components
│   ├── lib/                      # Utility functions
│   │   ├── supabase/             # Supabase client
│   │   ├── utils/                # Helper functions
│   │   └── constants/            # Constants
│   └── types/                    # TypeScript types
├── supabase/
│   ├── migrations/               # Database migrations
│   └── seed/                     # Seed data
├── .clinerules                   # Cline rules
├── .env.local                    # Local environment variables
├── .env.example                  # Example environment variables
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Project dependencies
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.js            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## Tech Stack Overview

### Next.js

Next.js is a React framework that enables server-side rendering, static site generation, and API routes.

Key features you'll use:
- **App Router**: The new routing system with nested layouts
- **Server Components**: React components that render on the server
- **API Routes**: Serverless functions for backend logic
- **Image Optimization**: Automatic image optimization
- **Font Optimization**: Automatic font optimization

### Tailwind CSS

Tailwind is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.

Key advantages:
- No need to write custom CSS
- Consistent design system
- Responsive designs with minimal effort
- Dark mode support out of the box

### Supabase

Supabase is an open-source Firebase alternative providing database, authentication, storage, and realtime subscriptions.

Key features you'll use:
- **PostgreSQL Database**: Powerful, open-source SQL database
- **Authentication**: Email/password, social, and passwordless auth
- **Storage**: File storage with security rules
- **Edge Functions**: Serverless functions for backend logic
- **Realtime**: Subscribe to database changes

### Vercel

Vercel is a deployment platform optimized for Next.js applications.

Key features:
- One-click deployments
- Preview deployments for pull requests
- Custom domains and SSL
- Edge functions for global performance
- Analytics and monitoring

## Development Workflow

### Setting Up a New Project

1. **Initialize project with Next.js:**
   ```bash
   npx create-next-app@latest my-app --typescript --tailwind --eslint
   cd my-app
   ```

2. **Set up Supabase client:**
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Create Supabase client helper in `src/lib/supabase/client.ts`:**
   ```typescript
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

   export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   ```

### Daily Development Process

1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Create or checkout a feature branch:**
   ```bash
   git checkout -b feature/new-feature
   ```

3. **Ask Cline to help implement a feature:**
   ```
   Help me implement a user authentication system using Supabase and Next.js App Router.
   ```

4. **Test your implementation:**
   ```bash
   npm run dev
   ```

5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add user authentication system"
   ```

6. **Push your changes:**
   ```bash
   git push origin feature/new-feature
   ```

7. **Create a pull request on GitHub**

8. **After approval, merge to main:**
   ```bash
   git checkout main
   git pull origin main
   git merge feature/new-feature
   git push origin main
   ```

### Leveraging Cline Effectively

- **Be specific in your requests:** "Help me create a responsive navigation bar with mobile menu" is better than "Help me with the navbar"
- **Share context:** "This will be used in our e-commerce app for product categories"
- **Ask for explanations:** "Can you explain how this authentication flow works?"
- **Request reviews:** "Can you review this code and suggest improvements?"
- **Get unstuck:** "I'm getting this error: [error message]. How can I fix it?"

## Database Management with Supabase

### Setting Up Supabase

1. Create a new project on [supabase.com](https://supabase.com/)
2. Note your project URL and anon key
3. Add them to your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### Database Migrations

Store your migrations in the `/supabase/migrations` folder:

```sql
-- /supabase/migrations/001_create_users_table.sql
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  username TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Define RLS policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles
  FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);
```

### Applying Migrations

Use the Supabase CLI to apply migrations:

1. Install the CLI:
   ```bash
   npm install -g supabase
   ```

2. Link to your project:
   ```bash
   supabase link --project-ref your-project-id
   ```

3. Apply migrations:
   ```bash
   supabase db push
   ```

### Using Supabase in Next.js

Example of fetching data:

```typescript
// src/app/profiles/page.tsx
import { supabase } from '@/lib/supabase/client';

export default async function ProfilesPage() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return <div>Error loading profiles</div>;
  }

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {data.map((profile) => (
          <li key={profile.id}>{profile.username}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Styling with Tailwind CSS

### Key Tailwind Concepts

1. **Utility Classes**: Use classes like `flex`, `p-4`, `text-lg` directly in HTML
2. **Responsive Design**: Use prefixes like `sm:`, `md:`, `lg:` for responsive layouts
3. **Component Extraction**: Use Tailwind with React components for reusability

### Common Tailwind Patterns

**Responsive Grid:**
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {items.map(item => (
    <div key={item.id} className="bg-white rounded-lg shadow p-4">
      {/* Item content */}
    </div>
  ))}
</div>
```

**Card Component:**
```jsx
// src/components/ui/Card.tsx
export function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}
```

**Custom Theme:**

Extend Tailwind's default theme in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... other shades
          600: '#0284c7',
          700: '#0369a1',
        },
        // Add more custom colors
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Deployment with Vercel

### Setting Up Vercel

1. Create an account on [vercel.com](https://vercel.com/)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```

### Deploying Your Application

**Option 1: GitHub Integration (Recommended)**
1. Connect your GitHub account to Vercel
2. Import your repository
3. Configure project settings:
   - Framework preset: Next.js
   - Build command: `next build`
   - Output directory: `.next`
   - Environment variables: Add all from `.env.local`
4. Deploy

**Option 2: CLI Deployment**
```bash
vercel
```

### Custom Domains

1. Go to your project dashboard on Vercel
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

### Environment Variables

1. Go to your project dashboard on Vercel
2. Navigate to Settings > Environment Variables
3. Add all environment variables from your `.env.local` file
4. Redeploy your application

## Git and GitHub Best Practices

### Daily Git Workflow

```bash
# Start of day: Get latest changes
git pull origin main

# Create a feature branch
git checkout -b feature/new-feature

# Make changes...

# Stage changes
git add .

# Commit changes
git commit -m "Descriptive message about changes"

# Push to GitHub
git push origin feature/new-feature

# Create a pull request on GitHub

# After approval, merge to main
git checkout main
git pull origin main
git merge feature/new-feature
git push origin main
```

### Commit Message Guidelines

Follow the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

Examples:
```
feat(auth): add login and registration forms

fix(navbar): resolve mobile menu display issue

docs: update README with setup instructions
```

### GitHub Pull Request Process

1. Create a feature branch
2. Make changes and commit
3. Push to GitHub
4. Create a pull request
5. Add a description of changes
6. Request reviews
7. Address feedback
8. Merge when approved

## Environment Variables and Security

### Local Environment Setup

1. Create a `.env.local` file in your project root (not committed to Git):
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   
   # Add other environment variables here
   ```

2. Create a `.env.example` file with the same structure but no values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   
   # Add other environment variables here
   ```

### Security Best Practices

1. Never commit `.env.local` or any file containing secrets
2. Add `.env.local` to your `.gitignore`
3. Use environment variables for all secrets
4. Prefix client-side variables with `NEXT_PUBLIC_`
5. Server-side variables (not prefixed with `NEXT_PUBLIC_`) are only accessible in:
   - Server Components
   - API Routes
   - `getServerSideProps`
   - Edge functions

### Secret Management

1. Store secrets in `.env.local` for development
2. Add them to Vercel project settings for production
3. Rotate secrets regularly
4. Use the least privileged access possible

## Troubleshooting and Getting Help

### Common Issues and Solutions

**Next.js Build Errors**
- Check for TypeScript errors
- Verify all imports are correct
- Ensure all required environment variables are set

**Supabase Connection Issues**
- Verify your Supabase URL and key
- Check if the table exists and has the correct schema
- Verify RLS policies allow the operation

**Deployment Problems**
- Check build logs on Vercel
- Verify all environment variables are set in Vercel
- Check for differences between local and production environments

### Getting Help from Cline

- Use `/help` in Cline chat for immediate assistance
- Be specific about the error or issue you're facing
- Share any error messages or logs
- Explain what you've already tried

### Additional Resources

- Check [Cline Documentation](https://docs.cline.bot/)
- Join the [Cline Discord Community](https://discord.gg/cline)
- Search GitHub issues for common problems
- Post questions on Stack Overflow with relevant tags

## Resources and Learning Materials

### Next.js and React

- [Official Learn Next.js Course](https://nextjs.org/learn) - Interactive tutorial
- [NextJS App Router: Modern Web Dev in 1 Hour](https://www.youtube.com/nextjs-modern) - Quick overview
- [Building Real-World Apps with Next.js](https://www.youtube.com/nextjs-real-world) - Practical examples

### Supabase

- [Supabase From Scratch](https://www.udemy.com/supabase-scratch) - Comprehensive course
- [Official Quickstart Guides](https://supabase.com/docs/guides/getting-started)
- [Real-Time Apps with Next.js and Supabase](https://www.newline.co/courses/supabase-nextjs)

### Tailwind CSS

- [Tailwind CSS Tutorial for Beginners](https://www.youtube.com/tailwind-2025)
- [Official Tailwind Documentation](https://tailwindcss.com/docs)
- Interactive course at [Scrimba Tailwind CSS Course](https://scrimba.com/learn/tailwind)

### AI-Assisted Development

- [Cline Documentation](https://docs.cline.bot/)
- [Prompt Engineering Best Practices](https://docs.cline.bot/improving-your-prompting-skills)
- [Memory Bank Setup Guide](https://docs.cline.bot/improving-your-prompting-skills/custom-instructions-library/cline-memory-bank)

---

## Quick Start Checklist

- [ ] Install VS Code and Cline
- [ ] Set up Node.js, npm, and Git
- [ ] Create GitHub repository
- [ ] Clone repository locally
- [ ] Set up Cline Memory Bank with project brief and rules
- [ ] Initialize Next.js project with Tailwind
- [ ] Set up Supabase project and client
- [ ] Create initial database schema
- [ ] Implement core features with Cline's assistance
- [ ] Deploy to Vercel
- [ ] Set up custom domain (optional)

Remember to commit your changes frequently and leverage Cline as your AI co-pilot throughout the development process. Happy coding!
