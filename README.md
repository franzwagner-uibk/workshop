# How to Build a Website

Beginner-friendly workshop handbook website for a session about planning and
building a static personal website with paper sketches, `plan.md`, OpenCode,
VS Code, and GitHub Pages.

Students do not need to install anything in advance. Setup can happen during
the workshop.

## Recommended workshop flow

1. Sketch the site together on paper as the first workshop step.
2. Write `plan.md` in the project folder.
3. Start OpenCode in the VS Code terminal and refine the plan in Plan mode.
4. Build the approved plan as plain HTML, CSS, and JavaScript.
5. Publish a first version early to GitHub Pages.
6. Preview locally in VS Code while iterating.
7. Push updates to GitHub at a few checkpoints.

## OpenCode workflow

- Open your site folder in VS Code.
- If OpenCode or VS Code is not installed yet, set it up during the workshop.
- Use the integrated terminal to run `opencode`.
- Keep file editing, local preview, and Git commits inside VS Code.
- Copy `AGENTS.template.md` into a student project and rename it to `AGENTS.md`.

## Local preview

Use the Live Server extension in VS Code if available, or run a simple local
server:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Files

- `index.html` contains the workshop handbook content.
- `styles.css` contains the visual design and responsive layout.
- `script.js` contains the step progress tracker and copy buttons.
- `AGENTS.template.md` contains the reusable OpenCode instructions students can
  copy into their own projects.

## GitHub Pages

Publish the repository, then enable GitHub Pages in:

`Settings -> Pages -> Deploy from a branch -> main -> / (root)`
