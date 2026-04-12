<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the portfolio site. `posthog-js` was initialized in `src/main.tsx` using environment variables for the project token and host. Event tracking was added to four components covering all meaningful user interactions: social profile clicks (with platform breakdown), resume and CV downloads, project card expansions, project external link clicks, and navigation between the three pages (Place, Photos, Art) on both desktop and mobile.

| Event | Description | File |
|---|---|---|
| `social link clicked` | User clicks a social icon (LinkedIn, GitHub, Devpost, YouTube, X, Instagram); `platform` property set | `src/components/homeSections/Header.tsx` |
| `resume downloaded` | User clicks the Resume PDF link | `src/components/homeSections/Header.tsx` |
| `cv downloaded` | User clicks the CV PDF link | `src/components/homeSections/Header.tsx` |
| `work card opened` | User expands a project card; `project` property set to project title | `src/components/homeSections/WorkCard.tsx` |
| `project link clicked` | User clicks "View Project" inside an open card; `project` and `url` properties set | `src/components/homeSections/WorkCard.tsx` |
| `nav page clicked` | User navigates to a page via desktop links or mobile dropdown; `page` and `path` properties set | `src/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/275329/dashboard/1457113
- **Social link clicks by platform:** https://us.posthog.com/project/275329/insights/SQqw7e4e
- **Resume & CV downloads over time:** https://us.posthog.com/project/275329/insights/wOujb3xB
- **Project card opens by project:** https://us.posthog.com/project/275329/insights/BnPDtmAN
- **Project exploration funnel** (card open → View Project click): https://us.posthog.com/project/275329/insights/gu6KBwxv
- **Page navigations by page:** https://us.posthog.com/project/275329/insights/PdF6SgRu

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-javascript_node/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
