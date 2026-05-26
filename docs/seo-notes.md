# SEO notes

Methods applied to `index.html`, drawn from established on-page/technical SEO
practice and information-retrieval literature (e.g. arXiv:1407.1133 on SEO data
mining; arXiv:1511.05802 on what elements search result pages surface — both
point to rich, well-structured, keyword-relevant pages winning placement).

## Applied in this site

- **Descriptive, unique `<title>` + `<meta name="description">`** — the two
  fields most often shown in search results.
- **`<link rel="canonical">`** — declares the preferred URL, avoids duplicate
  content dilution.
- **`<meta name="robots" content="index, follow, max-image-preview:large">`** —
  explicit crawl/index directives and large image previews.
- **Structured data (JSON-LD `Person` schema)** — helps search engines build a
  rich entity/knowledge-panel understanding of who Mario is. This is the highest
  leverage modern addition.
- **Open Graph + Twitter Card tags** — controls how links render when shared on
  social platforms (title, description, large image).
- **Absolute `og:image` / `twitter:image` URLs** — relative paths break on some
  scrapers; absolute URLs are required.
- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<article>`, one `<h1>`
  then ordered `<h2>`/`<h3>` — gives crawlers a clear document outline.
- **`sitemap.xml` + `robots.txt`** (added earlier) — discovery + crawl guidance.
- **Image `alt` text and explicit `width`/`height`** — accessibility plus
  layout stability (good Core Web Vitals signal).

## Worth doing next

- Add a real Open Graph share image (1200×630) instead of the square portrait.
- Submit the site + sitemap in Google Search Console once live.
- Keep page text keyword-relevant and genuinely descriptive (the synonym/keyword
  relevance point from the IR papers) — avoid keyword stuffing, which is
  penalized.
- Fast load + mobile-friendly layout are ranking factors; this site is already
  static, responsive, and dependency-light.
