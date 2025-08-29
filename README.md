
# 🚀 Rocket-UI

[![GitHub Repo](https://img.shields.io/badge/GitHub-Rocket--UI-blue?logo=github)](https://github.com/Anmol-rocket/Rocket-UI)

A next-generation, modular CSS framework for building modern, responsive, and accessible web interfaces. Rocket-UI provides a comprehensive set of components, utilities, and theming options to accelerate your development workflow.

---

## 🚀 CDN Usage (jsDelivr)

You can use Rocket-UI directly from the jsDelivr CDN for fast, reliable delivery and automatic caching:

### Import via CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Anmol-rocket/Rocket-UI@main/src/_base.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Anmol-rocket/Rocket-UI@main/src/index.css">
```

### Enable Offline Caching
To cache Rocket-UI CSS files for offline use, add the provided Service Worker:

1. Add this file to your project (or use via CDN):
```html
<script src="https://cdn.jsdelivr.net/gh/Anmol-rocket/Rocket-UI@main/src/rocket-ui-sw.js"></script>
```
2. Register the Service Worker in your main JS file:
```javascript
if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('rocket-ui-sw.js');
}
```

The Service Worker will cache the CSS files and serve them when offline.

---

## Table of Contents


## Folder Structure
```
library/
├── docs/
│   └── index.html         # Documentation site with live demos
├── src/
│   ├── _tokens.css        # Design tokens (colors, spacing, typography)
│   ├── _base.css          # CSS resets and base styles
│   ├── index.css          # Main entry point (imports all CSS)
│   ├── components/
│   │   └── *.css          # Individual component styles
│   └── utilities/
│       └── *.css          # Utility class styles
└── README.md              # Project documentation
```


## Usage

### Include Rocket-UI in your project
```html
<link rel="stylesheet" href="src/index.css">
```

### Use Components
```html
<button class="btn btn-primary">Primary</button>
<div class="alert alert-success">Success!</div>
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Body</div>
</div>
```

### Use Utilities
```html
<div class="m-4 p-2 text-center bg-primary">Utility Example</div>
```




## Credits


## CDN Usage

You can use Rocket-UI directly from the jsDelivr CDN for fast, reliable delivery and automatic caching:

### Import via CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Anmol-rocket/Rocket-UI@main/src/_base.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Anmol-rocket/Rocket-UI@main/src/index.css">
```

### Enable Offline Caching
To cache Rocket-UI CSS files for offline use, add the provided Service Worker:

1. Add this file to your project (or use via CDN):
```html
<script src="https://cdn.jsdelivr.net/gh/Anmol-rocket/Rocket-UI@main/src/rocket-ui-sw.js"></script>
```
2. Register the Service Worker in your main JS file:
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('rocket-ui-sw.js');
}
```

The Service Worker will cache the CSS files and serve them when offline.

>>>>>>> beee00b (commit)

