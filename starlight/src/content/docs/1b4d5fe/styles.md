---
title: Styles
---

This version applies the following styling to the sidebar items:

```css {5}
sl-sidebar-state-persist ul.top-level > li:not(:has(details)) {
	margin-top: 0rem !important;
}
sl-sidebar-state-persist ul.top-level > li:has(details) {
	margin-block: 0rem !important;
}
sl-sidebar-state-persist ul.top-level > li > a {
	font-size: var(--sl-text-md) !important;
}
sl-sidebar-state-persist ul.top-level > li > a[aria-current='page'] {
	font-weight: 600 !important;
}
sl-sidebar-state-persist ul.top-level > li > a[aria-current='false'] {
	font-weight: 400 !important;
	color: var(--sl-color-gray-2) !important;
}
```

## Summary

- same size for folders and top-level items
- **NO** whitespace between items (single top-level items and groups)
