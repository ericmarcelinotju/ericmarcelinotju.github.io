# Project screenshots

Each project detail page (`/project/<slug>`) shows a carousel of screenshots,
or placeholder slides until you add some.

To add screenshots, create a **folder named after the project's slug** (the
lowercased, dash-separated project name) and drop any number of images inside.
The carousel picks them up automatically — no code change needed.

```
src/assets/projects/
  cinema-ticketing/
    1.png
    2.png
    3.png
  cafe-point-of-sales/
    1.png
    2.png
```

- **Order** is by filename, naturally sorted (`2.png` before `10.png`). Name
  files `1`, `2`, `3`, … to control the sequence.
- **Formats:** `.png`, `.jpg`, `.jpeg`, `.webp`. If the same image exists in
  several formats, preference is `png` → `webp` → `jpeg` → `jpg`.
- **Aspect ratio:** the frame is 16:9 and the whole image is shown inside it
  (`object-fit: contain`, no cropping). Any image works — including **portrait
  / mobile** screenshots: the empty space is filled with a blurred copy of the
  image so it looks intentional. Landscape (~16:9) shots fill the frame edge to
  edge; portrait shots sit centered with the blurred backdrop around them.
- A folder with a **single** image just shows one slide (no arrows/dots).

| Project                          | Folder                               |
| -------------------------------- | ------------------------------------ |
| Cinema Ticketing                 | `cinema-ticketing/`                  |
| Gold Store POS                   | `gold-store-pos/`                    |
| Customer Relationship Management | `customer-relationship-management/`  |
| Website CMS                      | `website-cms/`                       |
| Cafe Point of Sales              | `cafe-point-of-sales/`               |

The slug is derived by `projectSlug()` in `src/data/resume.ts`; adding a new
project to the `projects` array automatically gives it a detail page and a
screenshot folder slot.
