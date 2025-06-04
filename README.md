# Fleeting Notes

Random thoughts and observations that made sense to me at the time — no promises they'll age well.

A simple blog built with [Eleventy](https://www.11ty.dev/) (11ty)

### Running the Site

To build and serve the site locally:

```bash
npx @11ty/eleventy --serve
```

This will:

- Build the site to the `_site` directory
- Start a local development server (usually at `http://localhost:8080`)
- Watch for changes and automatically rebuild

To build the site without serving:

```bash
npx @11ty/eleventy
```

## Project Structure

```
├── src/
│   ├── _includes/           # Template layouts and partials
│   │   ├── base.njk        # Main HTML layout
│   │   ├── header.njk      # Site header
│   │   ├── footer.njk      # Site footer
│   │   └── post.njk        # Blog post layout
│   ├── posts/              # Blog posts (Markdown files)
│   └── index.md            # Homepage
├── style.css               # Custom styles
├── eleventy.config.js      # Eleventy configuration
└── package.json
```

