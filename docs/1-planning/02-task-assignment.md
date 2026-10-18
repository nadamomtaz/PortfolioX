# Task Assignment & Roles: PortfolioX

> All team members are Front-End track students in DEPI. The roles below reflect each member's **main focus** based on her extra skills. Everyone contributes to the frontend, and members help each other whenever needed.

## 1. Team Overview

| Member | Position |
|---|---|
| ندى ممتاز محمد | Team Leader |
| خلود احمد عبد الحميد عزاله | Team Member |
| ميادة محمود عبد العزيز | Team Member |
| نور سالم محمد سالم | Team Member |

## 2. Roles & Main Focus

| Member | Main Focus | Main Responsibilities |
|---|---|---|
| ندى ممتاز محمد | Team Leader, Frontend + AI | Project planning, task tracking, GitHub repository management, React multi-step form, LinkedIn-style editor, authentication screens, prompt engineering |
| خلود احمد عبد الحميد عزاله | Frontend + AI | AI chatbot panel, live portfolio preview, React Router navigation, AI features (project descriptions, About Me suggestions) |
| ميادة محمود عبد العزيز | Frontend + Backend | Backend API, GitHub and Google authentication, GitHub data fetching, database, AI request handling |
| نور سالم محمد سالم | Frontend + UI/UX | User personas, wireframes, mockups, design system, accessibility, design handoff to developers |

## 3. Shared Responsibilities
- All members: write documentation for their own part.
- All members: review each other's pull requests.
- Testing: each member tests her own part, then the whole team runs final testing together.
- Final presentation, user manual, and infographic: prepared by the whole team.

## 4. Team Collaboration
- Each member owns a main focus, but this is a team effort: if a member is blocked or behind on a task, another member takes over or helps.
- When a member finishes early, she helps teammates with their tasks, especially the backend, which is the largest dependency for the frontend.
- Blockers are reported in the team chat or the weekly meeting as soon as they appear, so tasks can be reassigned early.

## 5. Feature Ownership

The website has two parts: (A) the portfolio builder (3-panel layout) and (B) the GitHub profile improver.

| Feature | Frontend | Backend / AI | Design |
|---|---|---|---|
| Authentication (GitHub / Google) | ندى | ميادة | نور |
| Multi-step form | ندى | ميادة (saving data) | نور |
| AI chatbot panel (left) | خلود | ميادة (AI requests) + ندى (prompts) | نور |
| Live portfolio preview (middle) | خلود | - | نور |
| LinkedIn-style editor (right) | ندى | ميادة (saving / editing data) | نور |
| GitHub profile improver | خلود + ندى | ميادة (analyzing repos) | نور |
| LinkedIn data import (PDF / pasted text) | ندى | ميادة | نور |

## 6. Task Breakdown

### ندى ممتاز محمد (Team Leader, Frontend + AI)
- [ ] Create and manage the GitHub repository, branches, and project board
- [ ] Track tasks and follow up on deadlines for all documents
- [ ] Set up the React project structure and shared components
- [ ] Build the React multi-step form (using hooks)
- [ ] Build the LinkedIn-style editor panel (experience, education, skills)
- [ ] Build the sign-in screens (GitHub / Google) and connect them to the backend
- [ ] Write and test the prompts for project descriptions and About Me
- [ ] Build the LinkedIn import screen (PDF / pasted text)

### خلود احمد عبد الحميد عزاله (Frontend + AI)
- [ ] Build the AI chatbot panel (upload GitHub/LinkedIn, clarifying questions, e.g. about unclear repos)
- [ ] Build the live portfolio preview with the portfolio templates
- [ ] Set up React Router and the navigation between pages
- [ ] Integrate the AI features: project descriptions and About Me suggestions
- [ ] Build the GitHub profile improver page (submit link, show suggestions, per-repo README questions)

### ميادة محمود عبد العزيز (Frontend + Backend)
- [ ] Set up the backend project and the database
- [ ] Implement GitHub and Google authentication
- [ ] Fetch public GitHub data (profile, repositories); read-only, never edit the user's GitHub
- [ ] API endpoints to save and load portfolio data
- [ ] Endpoint to handle AI requests
- [ ] Endpoint to analyze a GitHub profile for the improver tool
- [ ] Endpoint to process LinkedIn data (PDF / pasted text)
- [ ] Write API documentation for the frontend team

### نور سالم محمد سالم (Frontend + UI/UX)
- [ ] Create user personas and user flows
- [ ] Design wireframes for the 3-panel builder and the GitHub improver
- [ ] Design high-fidelity mockups
- [ ] Define the design system (colors, typography, spacing, components)
- [ ] Write UI/UX guidelines including accessibility
- [ ] Hand off designs to developers and review the implemented UI
- [ ] Build UI components in React as part of the frontend work

## 7. Dependencies Between Members

| Who needs | From | For |
|---|---|---|
| ندى, خلود | نور | Wireframes and design system before building screens |
| ندى, خلود | ميادة | API endpoints and auth before connecting real data (until then, use mock data) |
| ميادة | ندى | Prompts and data format expected by the AI features |
| خلود | ندى | Shared components and project structure |
| Everyone | ندى | Task tracking and deadlines |

To avoid waiting: the frontend starts with mock data, and the backend agrees early on the data format (JSON structure) with the frontend.

## 8. Communication & Workflow
- Weekly team meeting (day and time to be agreed).
- Tasks tracked using GitHub Issues or a shared board (to be decided).
- Every feature is built on its own branch and merged through a pull request reviewed by at least one other member.
- Daily or regular updates in the team chat; blockers are reported immediately.

## 9. Final Deliverables (Whole Team)
- Final testing of the full application
- Final presentation
- User manual
- Infographic
