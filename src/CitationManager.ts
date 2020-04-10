import { Citation } from "./Citation";

export class CitationManager {
	public refList = [] as Citation[];
	constructor(refList: Citation[] | void) {
		this.refList = refList || [];
	}
	// Searches for existing citations (based on class), and attempts to replace them from list of citations"
	public augmentCitations(onHover = true): void {
		const refIDList = this.refList.map((c) => c.refID);
		const inactiveCites = document.querySelectorAll(".inline-cite:not(.activated)");
		Array.from(inactiveCites).forEach((citeElem) => {
			const rawRef = citeElem.innerHTML;
			const refID = rawRef.replace(/[\[\]]/g, "");
			const refIndex = refIDList.indexOf(refID);
			if (refIndex !== -1) {
				const cite = this.refList[refIndex];
				let short = `[ref]`;
				let eventHandler = `onclick="this.nextSibling.nextElementSibling.classList.toggle('inline-cite-popup-show')"`;
				if (onHover) {
					eventHandler = `onmouseover="this.nextSibling.nextElementSibling.classList.add('inline-cite-popup-show')"
					onmouseout="this.nextSibling.nextElementSibling.classList.remove('inline-cite-popup-show')"`;
					if (cite.url) {
						short = `<a href="${cite.url}" target="_blank">${short}</a>`;
					}
				}
				citeElem.innerHTML = `
					<span hidden class="rawRef">${rawRef}</span>
					<sup ${eventHandler}>
						${short}
					</sup>
					<div class="inline-cite-popup">
						${cite.genInlineCite()}
					</div>
				`;
			}
		});
	}
}
