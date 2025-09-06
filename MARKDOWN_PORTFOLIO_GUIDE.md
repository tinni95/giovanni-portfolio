# Portfolio Markdown Content Guide

This guide explains how to add dynamic markdown content to your portfolio projects using separate markdown files with server-side processing.

## Overview

The portfolio system now supports rich markdown content for project details stored in separate files and processed at build time. This allows you to create detailed, formatted project descriptions with headings, lists, code blocks, and more, while keeping your portfolio data clean and organized. The markdown content is processed server-side during the build process for optimal performance.

## How to Add Markdown Content

### 1. Create a Markdown File

Create a new markdown file in the `public/content/projects/` directory:

```bash
# Example: public/content/projects/my-project.md
```

### 2. Write Your Content

Add your project description in markdown format:

```markdown
# My Project Title

A brief description of your project.

## Project Overview

Detailed description of what the project is about.

## Key Features

- **Feature 1**: Description
- **Feature 2**: Description
- **Feature 3**: Description

## Technologies Used

- **Frontend**: React, Next.js
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

## My Role

As the developer, I was responsible for:

- **Architecture**: System design and planning
- **Development**: Full-stack implementation
- **Testing**: Quality assurance and bug fixes

## Results

- 50% improvement in performance
- 1000+ active users
- Featured in tech publications
```

### 3. Update Portfolio Data

In your portfolio data file (`data/portfolio.js`), reference the markdown file:

```javascript
{
  id: 1,
  title: "Your Project Title",
  // ... other existing fields

  // Reference the markdown file
  markdownFile: "content/projects/my-project.md",

  // Add project details for sidebar
  projectDetails: {
    name: "Your Project Name",
    author: "Your Name",
    date: "January 2024",
    tags: "React, Node.js, Full Stack",
    services: ["Frontend Development", "Backend Development", "UI/UX Design"]
  }
}
```

## File Structure

Your project should have the following structure:

```
public/
  content/
    projects/
      saas-website-design.md
      cozy-desk.md
      astarte.md
      bbnb.md
      tendit.md
      your-project.md
lib/
  markdown.js          # Server-side markdown processing utility
data/
  portfolio.js         # Portfolio data with markdown file references
```

## How It Works

1. **Build Time Processing**: Markdown files are read and processed during the Next.js build process
2. **Server-Side Rendering**: Content is included in the portfolio data at build time
3. **Client-Side Rendering**: React components receive pre-processed markdown content
4. **Performance**: No client-side file fetching, faster page loads

## Markdown Features Supported

The system supports standard markdown with the following features:

- **Headings**: `# H1`, `## H2`, `### H3`
- **Bold text**: `**bold**`
- **Lists**: `- item` or `* item`
- **Code**: `` `inline code` ``
- **Blockquotes**: `> quote`

### 3. Styling

The markdown content is automatically styled to match your portfolio theme:

- Headings use your existing CSS classes
- Lists are styled with checkmark icons
- Code blocks have syntax highlighting
- Blockquotes have special styling

### 4. Project Details Sidebar

The `projectDetails` object populates the sidebar with:

- **Name**: Project name (falls back to title)
- **Author**: Your name (defaults to "Giovanni D'Amico")
- **Date**: Project completion date
- **Tags**: Comma-separated tags
- **Services**: Array of services provided (displayed as checkmarked list)

## Examples

Check the existing markdown files in `public/content/projects/` for examples:

- `saas-website-design.md` - SAAS Website Design
- `cozy-desk.md` - Cozy Desk
- `astarte.md` - Astarte
- `bbnb.md` - BBNB
- `tendit.md` - Tendit

And their corresponding portfolio data in `data/portfolio.js`:

- `portfolioItems[0]` - SAAS Website Design
- `portfolioItems2[0]` - Cozy Desk
- `portfolioItems2[1]` - Astarte
- `portfolioItems2[2]` - BBNB
- `portfolioItems2[3]` - Tendit

## Tips

1. **Keep it concise**: While markdown supports long content, keep project descriptions focused and scannable
2. **Use headings**: Structure your content with clear headings for better readability
3. **Highlight key points**: Use bold text and lists to emphasize important information
4. **Include metrics**: Add specific numbers and results to make your achievements more compelling
5. **Be consistent**: Use similar structure across all your project descriptions

## Customization

To modify the styling, edit the CSS in `app/globals.css` under the "Markdown Content Styling" section.

To change the markdown components, modify the `components` prop in the `ReactMarkdown` component in `components/projects/ProjectDetails.jsx`.
