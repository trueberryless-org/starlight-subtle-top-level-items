export const sidebarStylesPerTopic: Record<string, string> = {
  "56d1ace": `
		sl-sidebar-state-persist ul.top-level > li:not(:has(details)) {
			margin-top: 0rem !important;
		}
		sl-sidebar-state-persist ul.top-level > li:has(details) {
			margin-block: 0.5rem !important;
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
	`,
  "1b4d5fe": `
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
	`,
  fd53616: `
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
	`,
};
