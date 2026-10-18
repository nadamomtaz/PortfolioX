# Requirements: PortfolioX

## 1. Stakeholder Analysis

| Stakeholder | Role | Needs |
|---|---|---|
| Junior developers and fresh graduates | Primary users | A professional portfolio quickly, clear project descriptions, help writing "About Me" |
| Students and bootcamp learners (DEPI trainees) | Primary users | Improve GitHub profile and READMEs, present projects clearly |
| Beginner freelancers | Primary users | Showcase work to clients with minimal design effort |
| Recruiters and hiring managers | Secondary users | Fast, clear, readable portfolios |
| Mentors and instructors | Secondary users | Easy review of a student's GitHub profile |
| Project team (4 members) | Builders | Clear scope, defined roles, achievable timeline |
| DEPI supervisor / lecturer | Evaluator | Complete documentation, working system, clean code |

## 2. User Stories

### Authentication
- As a user, I want to sign in with GitHub or Google so that I do not need to create a new password.
- As a user, I want my session to stay active so that I do not lose my work.

### Portfolio Builder
- As a user, I want to connect my GitHub profile so that the system can read my public repositories.
- As a user, I want to upload my LinkedIn PDF or paste its text so that my experience is included.
- As a user, I want an AI chatbot to ask me about unclear projects so that descriptions are accurate.
- As a user, I want to see a live preview of my portfolio so that I can check how it looks while I edit.
- As a user, I want to add experience, education, and skills manually so that I can complete my profile.
- As a user, I want to edit or reject any AI-generated text so that I stay in control.
- As a user, I want AI suggestions for my "About Me" section so that I do not face a blank page.

### GitHub Profile Improver
- As a user, I want to submit my GitHub profile link so that the system analyzes it.
- As a user, I want a list of improvement suggestions so that I know what to fix.
- As a user, I want to pick a repository and answer a few questions so that the system writes a suggested README.
- As a user, I want to copy the suggested README so that I can apply it myself on GitHub.

### Other
- As a user, I want to switch between light and dark themes so that the site is comfortable to read.
- As a user with accessibility needs, I want to use the site with keyboard and screen reader.

## 3. Use Cases

### UC-1: Sign in
- **Actor:** User
- **Main flow:** User clicks Sign up or Log in, chooses GitHub or Google, authorizes access, and is redirected to the builder.
- **Alternative flow:** Authorization is denied, and the system shows a message and returns to the sign-in page.

### UC-2: Build a portfolio
- **Actor:** User
- **Precondition:** User is signed in.
- **Main flow:** User connects GitHub, optionally adds LinkedIn data, chats with the AI to clarify projects, adds extra details in the editor, and reviews the live preview.
- **Alternative flow:** The AI service is unavailable, and the system shows an error and allows manual editing.

### UC-3: Improve a GitHub profile
- **Actor:** User
- **Main flow:** User submits a GitHub link, the system analyzes the public profile, shows suggestions, and the user selects a repository to get a suggested README.
- **Alternative flow:** The profile is not found or rate limits are reached, and the system shows a clear message.

## 4. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-1 | The system shall allow sign in with GitHub or Google (OAuth) without requesting access to private repositories | Must |
| FR-2 | The system shall read public profile and repository data from GitHub | Must |
| FR-3 | The system shall accept LinkedIn data as an uploaded PDF or pasted text | Must |
| FR-4 | The system shall provide an AI chatbot that asks clarifying questions about projects | Must |
| FR-5 | The system shall generate project descriptions and an "About Me" suggestion using AI | Must |
| FR-6 | The system shall display a live portfolio preview that updates as the user edits | Must |
| FR-7 | The system shall provide a manual editor for experience, education, and skills | Must |
| FR-8 | The system shall allow the user to edit or reject any AI-generated text | Must |
| FR-9 | The system shall use a multi-step form with navigation between the builder and the preview | Must |
| FR-10 | The system shall analyze a public GitHub profile and list improvement suggestions | Should |
| FR-11 | The system shall generate a suggested README for a selected repository after asking questions | Should |
| FR-12 | The system shall never edit or publish anything on the user's GitHub account | Must |
| FR-13 | The system shall support light and dark themes | Could |
| FR-14 | The system shall provide a backend API for authentication, GitHub data, and AI requests | Must |

## 5. Non-functional Requirements

### Performance
- NFR-1: Pages shall load in under 2.5 seconds on a normal connection.
- NFR-2: The live preview shall update in under 300 ms after an edit.

### Security
- NFR-3: API keys and OAuth secrets shall be stored only on the backend in environment variables.
- NFR-4: The system shall read public data only and never request private repository access.
- NFR-5: User input shall be validated and sanitized before use.

### Usability
- NFR-6: A new user shall be able to generate a first portfolio in under 10 minutes.
- NFR-7: The interface shall be responsive on mobile, tablet, and desktop.

### Accessibility
- NFR-8: The interface shall follow WCAG 2.1 AA guidelines, including text contrast of at least 4.5:1.
- NFR-9: All interactive elements shall be usable with the keyboard and have visible focus.
- NFR-10: The system shall respect the reduced motion setting.

### Reliability
- NFR-11: The system shall show a clear message when GitHub or the AI service fails.
- NFR-12: Fetched GitHub data shall be cached to reduce rate-limit problems.

### Maintainability
- NFR-13: Code shall follow consistent naming conventions and be organized into reusable components.
- NFR-14: All changes shall go through feature branches and pull requests.
