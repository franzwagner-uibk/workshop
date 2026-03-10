# How to Build a Website

Beginner-friendly workshop handbook website for a session about building a personal website with HTML, CSS, JavaScript, VS Code, and GitHub Pages.

## Recommended workshop flow

1. Create a tiny first version of the site.
2. Publish it early to GitHub Pages.
3. Use local preview in VS Code while editing.
4. Push updates to GitHub at a few checkpoints.

## Local preview

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

If you use a VS Code extension with a `Go Live` button, that is a good option for the workshop.

## Files

- `index.html` contains the workshop handbook content.
- `styles.css` contains the visual design and responsive layout.
- `script.js` contains the step progress tracker and copy buttons.

## GitHub Pages

Publish the repository, then enable GitHub Pages in:

`Settings -> Pages -> Deploy from a branch -> main -> / (root)`
