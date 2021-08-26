---
theme: ./themes/rikkei
colorSchema: dark
highlighter: prism
aspectRatio: '16/9'
canvasWidth: 980
monaco: dev
lineNumbers: true
download: false
titleTemplate: '%s - Rikkei Corp'
layout: intro
logoHeader: /logo.png
website: https://rikkeisoft.com
handle: hnq90
introImage: >-
  https://uilogos.co/img/logomark/earth.png
info: |
  ## Rikkei - Slidev template
  Template for Rikkei's presentations
title: Presentation Title
---

# Title of Presentation

Small description for presentation here

<!--
Write notes here
-->

---
logoHeader: /logo.png
website: https://rikkeisoft.com
handle: hnq90
layout: table-contents
gradientColors: ['#b70000', '#dc2626']
---

# TOC

Description

- 📝 **Section 1** - something 1
- 🎨 **Section 2** - something 2
- 🧑‍💻 **Section 3** - something 3
- 🤹 **Section 4** - something 4
- 🎥 **Section 5** - something 5

---
logoHeader: /logo.png
website: https://rikkeisoft.com
handle: hnq90
layout: new-section
sectionImage: https://uilogos.co/img/logomark/muszica.png
---

# This is a new section

Some content to explain

---
logoHeader: /logo.png
website: https://rikkeisoft.com
handle: hnq90
---

# H1

Content

### H3

|     |     |
| --- | --- |
| ABC | DEF |
| ABC | DEF |
| ABC | DEF |
| ABC | DEF |

---
logoHeader: /logo.png
website: https://rikkeisoft.com
handle: hnq90
layout: cover
---

# Code

Use code snippets and get the highlighting directly![^1]

```ts {all|2|1-6|9|all}
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// These interfaces can be composed in responses which have
// both consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;
```

---
logoHeader: /logo.png
website: https://rikkeisoft.com
handle: hnq90
---

# Monaco Editor

Use code snippets and get the highlighting directly![^1]

```ts {monaco}
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// These interfaces can be composed in responses which have
// both consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;
```

---
logoHeader: /logo.png
website: https://rikkeisoft.com
handle: hnq90
layout: center
---

# Q&A

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
