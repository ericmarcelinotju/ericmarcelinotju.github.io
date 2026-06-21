# Project screenshots

Each project detail page (`/project/<slug>`) shows a screenshot here, or a
"Screenshot coming soon" placeholder until one is added.

To add a screenshot, drop an image in this folder named after the project's
**slug** (the lowercased, dash-separated project name). The page swaps the
placeholder for your image automatically — no code change needed.

When several formats exist for the same slug, the order of preference is
`png` → `webp` → `jpeg` → `jpg`. A wide (16:9-ish) image looks best.

Accepted extensions: `.png`, `.jpg`, `.jpeg`, `.webp`

| Project                  | Drop file as                        |
| ------------------------ | ----------------------------------- |
| Dakota Cinema Ticketing  | `dakota-cinema-ticketing.png`       |
| Paint Store CRM          | `paint-store-crm.png`               |
| Website CMS              | `website-cms.png`                   |
| Cafe Point of Sales      | `cafe-point-of-sales.png`           |

The slug is derived by `projectSlug()` in `src/data/resume.ts`; adding a new
project to the `projects` array automatically gives it a detail page and a
screenshot slot.
