---
title: Styles
---

This version applies the following styling to the sidebar items:

```css
sl-sidebar-state-persist ul.top-level > li:not(:has(details)) {
	margin-top: 0rem !important;
}
sl-sidebar-state-persist ul.top-level > li:has(details) {
	margin-block: 0.5rem !important;
}
sl-sidebar-state-persist ul.top-level > li > a {
	font-size: var(--sl-text-sm) !important;
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

- **different sizes** between folders and top-level items
- whitespace between all items (single top-level items and groups)
