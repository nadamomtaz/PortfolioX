# Risk Assessment & Mitigation Plan: PortfolioX

## Risk Rating
- Probability: Low / Medium / High
- Impact: Low / Medium / High

## Risks

| # | Risk | Probability | Impact | Mitigation Plan |
|---|---|---|---|---|
| 1 | GitHub API rate limits are reached | High | Medium | Cache fetched data in the backend, use authenticated requests, and fetch only the needed fields |
| 2 | AI API is slow, unavailable, or its free quota ends | Medium | High | Choose one provider early, limit request size, show loading and error states, and keep a fallback message |
| 3 | AI generates inaccurate or irrelevant content | Medium | Medium | Refine prompts, give the AI only real GitHub data, and let the user edit all generated text |
| 4 | LinkedIn data cannot be accessed automatically | High | Medium | Accept PDF upload or pasted text only, and state this clearly in the scope |
| 5 | Design is delayed and blocks frontend work | Medium | High | UI/UX designer delivers wireframes first, frontend starts with reusable components in the meantime |
| 6 | Frontend and backend integration problems | Medium | High | Agree on API endpoints early, document them, and integrate in small steps |
| 7 | Team members have different skill levels or limited time | Medium | Medium | Pair members on tasks, hold weekly meetings, and review each other's work |
| 8 | Merge conflicts and code overwrites | Medium | Medium | Use feature branches and pull requests, and never push directly to main |
| 9 | Security issues (exposed API keys or tokens) | Medium | High | Keep secrets in environment variables on the backend, never commit them to GitHub |
| 10 | Project scope grows beyond the available time | High | High | Treat the Portfolio Builder as must-have, and move extra GitHub Improver features to future work if time is short |
