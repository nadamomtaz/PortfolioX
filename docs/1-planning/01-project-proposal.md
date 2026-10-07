# Project Proposal: PortfolioX

## 1. Overview
PortfolioX is a web platform that helps junior developers present
themselves professionally. It has two main features:

1. Portfolio Builder: the user uploads their GitHub profile (and
   optionally LinkedIn data) to an AI chatbot, which asks clarifying
   questions and generates a portfolio shown in a live preview. Users
   can also add experience, education, and skills manually.
2. GitHub Profile Improver: the user submits a GitHub link, the tool
   analyzes it, suggests improvements, and helps write a clear README
   for each repository.
## 2. Problem Statement
Junior developers often struggle to present their work professionally.
Their GitHub profiles are usually incomplete: many repositories have
no README or unclear descriptions, so recruiters cannot understand what
was built or learned. At the same time, building a portfolio website
from scratch takes time and design skills that beginners may not have yet.
As a result, talented junior developers fail to stand out when applying
for jobs or freelance work.

### Main Problems
- Repositories without clear README files or descriptions.
- Difficulty writing a strong "About Me" and project descriptions.
- No time or design experience to build a portfolio website.
- Information is scattered between GitHub and LinkedIn.
## 3. Objectives

### Main Objective
Help junior developers build a professional portfolio and improve
their GitHub presence quickly, using AI-guided assistance.

### Specific Objectives
- Build a Portfolio Builder with an AI chatbot, a live preview, and a
  manual editor for experience, education, and skills.
- Build a GitHub Profile Improver that analyzes a profile and helps
  write clear README files for repositories.
- Design a clean, accessible, and responsive user interface based on
  the design thinking process (personas and wireframes).
- Use React Hooks and React Router to create a smooth multi-step
  experience.
- Write clean, maintainable code that follows industry best practices.
## 4. Scope

### In Scope
- Portfolio Builder page with three panels: AI chatbot, live
  portfolio preview, and a manual editor (experience, education, skills).
- Reading public data from a GitHub profile link and its repositories.
- Importing LinkedIn data through an uploaded PDF or pasted text.
- AI-generated project descriptions and "About Me" suggestions.
- GitHub Profile Improver: analyzes a public profile and gives the
  user recommendations on what to change, including a suggested README
  for each repository that the user can copy.
- Multi-step form built with React Hooks and navigation with React Router.
- Responsive and accessible UI.

### Out of Scope
- Direct integration with the LinkedIn API or scraping LinkedIn profiles.
- Automatically editing or publishing anything on the user's GitHub
  (the tool only suggests, the user applies changes manually).
- User accounts, passwords, or login to the user's GitHub.
- Hosting or publishing the generated portfolio as a live website.
- Mobile applications.
- Support for private GitHub repositories.
