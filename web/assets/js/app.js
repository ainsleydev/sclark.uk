/**
 * site.ts
 *
 * @author Ainsley Clark
 * @author URL:   https://ainsley.dev
 * @author Email: hello@ainsley.dev
 */

import { Collapse } from "../../views/components/collapse";

console.clear();

new Collapse({
	collapse: true,
	container: ".collapse",
	item: ".collapse-item",
	inner: ".collapse-content",
	activeClass: "collapse-item-active",
});
