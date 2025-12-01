```markdown
# Academic website — ready for SuviIlli.github.io

Deployment steps
1. Create a public repository on GitHub named exactly: SuviIlli.github.io
2. Locally, in the folder containing these files, run:
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/SuviIlli/SuviIlli.github.io.git
   git push -u origin main

3. Wait ~1 minute and visit: https://SuviIlli.github.io/

Where to put assets
- Profile photo: assets/img/profile.jpg
- CV PDF: assets/cv/SuviIlli_CV.pdf
- Posters PDFs: assets/posters/*.pdf
- Poster thumbnails: assets/img/posters/*.jpg (recommended compressed)
- Course materials: assets/teaching/*.pdf or .zip

Notes & tips
- Replace "Your Name" and all placeholder text with your actual name, bio, project descriptions, and links.
- Keep large files reasonable (< 10–20 MB) or host externally (Zenodo, institutional server) to avoid bloating git history.
- To make posters/courses data-driven, I can convert the pages to read a JSON/YAML file and generate the cards automatically.

If you'd like me to:
- Create a ZIP of the site for you to upload → tell me and I will prepare it.
- Push the files to GitHub directly → I can generate a PR only if you grant me repository access (or you can invite a bot). Otherwise I can give exact commands and a prepared zip.
- Populate the Research and Teaching pages with your real project/course entries → paste a list (titles, one-line descriptions, links, filenames) and I’ll populate the HTML for you.
```