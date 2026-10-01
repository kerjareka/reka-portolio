# Reka Rius — Developer Portfolio

A responsive developer portfolio inspired by the approved visual mockup. It uses plain HTML, CSS, and JavaScript, so it can be hosted on **GitHub Pages**.

## Important: GitHub Pages vs Laravel

GitHub Pages only serves static files. It does **not** run PHP/Laravel or host a MariaDB database. This portfolio is the static GitHub Pages edition. If you need Laravel features (login, admin dashboard, database-backed projects or contact submissions), deploy the Laravel app to a PHP host and use MariaDB there.

## Before publishing: personalize these details

Open `index.html` and check:
- Email: `reka.rius@gmail.com`
- GitHub: `https://github.com/kerjareka`
- LinkedIn: replace `https://www.linkedin.com/` with your actual profile URL.
- Project links: replace the sample GitHub links with each project's actual repository/demo URL.
- Project descriptions and dates: confirm that every detail is accurate for your experience.

The workspace/project illustrations are built with CSS, so no external image assets are required.

## Preview locally

1. Extract the ZIP.
2. Open `index.html` in a browser.

For a local development server, if Python is installed, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

### Option A — create a repository named `reka-portfolio`

1. Sign in to GitHub.
2. Create a **public** repository named `reka-portfolio`.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's root (not inside another nested folder).
4. Open the repository's **Settings**.
5. Select **Pages** in the sidebar.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose branch `main` and folder `/(root)`, then click **Save**.
8. Wait for the deployment to finish. The public URL will be:

   `https://YOUR-GITHUB-USERNAME.github.io/reka-portfolio/`

   Replace `YOUR-GITHUB-USERNAME` with your exact GitHub username.

### Option B — use the root GitHub Pages URL

If you want the URL `https://YOUR-GITHUB-USERNAME.github.io/`, create a repository named exactly `YOUR-GITHUB-USERNAME.github.io`, then upload the same four files to its root and enable Pages as above.

## Updating your portfolio

1. Edit `index.html` for content and links, or `style.css` for design changes.
2. Commit and push/upload the changes to the repository's `main` branch.
3. GitHub Pages will rebuild the site automatically.

## Checklist before sharing with recruiters

- [ ] Replace the LinkedIn placeholder with your real profile.
- [ ] Verify the email address is correct and professional.
- [ ] Add direct links to each real project repository and live demo.
- [ ] Check the website on mobile and desktop.
- [ ] Check that every claim, date, and project description is accurate.
- [ ] Add a custom domain in GitHub Pages settings if you own one (optional).

## Files

- `index.html` — portfolio content and sections
- `style.css` — responsive design and theme styles
- `script.js` — mobile navigation, theme toggle, active navigation and footer year
