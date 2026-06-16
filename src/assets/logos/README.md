# Company logos

Each company's logo lives in its own folder here, named with the short **key**
below. The file named after the folder (e.g. `samsung/samsung.svg`) is used;
alternates like `samsung_black.png` are kept for reference but ignored.
When several formats exist, the order of preference is
`svg` → `png` → `webp` → `jpeg` → `jpg`. Companies without a folder show a
monogram fallback.

Accepted extensions: `.svg`, `.png`, `.jpg`, `.jpeg`, `.webp`
(SVG or a square-ish PNG with a transparent/white background looks best.)

Folder key → company (mapping lives in `src/data/resume.ts`):

| Folder key | Company                          | Primary file        |
| ---------- | -------------------------------- | ------------------- |
| `jejakin`  | PT. Jejak Enviro Teknologi       | `jejakin/jejakin.*` |
| `temas`    | PT. TEMAS Tbk                    | `temas/temas.*`     |
| `datis`    | PT. Data Integrasi Semesta       | `datis/datis.*`     |
| `airpaz`   | Airpaz.com                       | `airpaz/airpaz.*`   |
| `samsung`  | Samsung R&D Institute Indonesia  | `samsung/samsung.*` |
| `binus`    | BINUS University                 | `binus/binus.*`     |

To add a new company logo: create a folder with a new key, drop the image in as
`<key>.<ext>`, and add a `<key>: companySlug('<Company Name>')` entry to
`logoFolderToSlug` in `src/data/resume.ts`.
