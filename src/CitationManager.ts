import { Citation } from "./Citation";

export class CitationManager {
	public refList = [] as Citation[];
	constructor(refList: Citation[] | void) {
		this.refList = refList || [];
	}
	// Searches for existing citations (based on class), and attempts to replace them from list of citations"
	public augmentCitations(): void {
		const refIDList = this.refList.map((c) => c.refID);
		const inactiveCites = document.querySelectorAll(".inline-cite:not(.activated)");
		Array.from(inactiveCites).forEach((citeElem) => {
			const rawRef = citeElem.innerHTML;
			const refID = rawRef.replace(/[\[\]]/g, "");
			const refIndex = refIDList.indexOf(refID);
			if (refIndex !== -1) {
				const cite = this.refList[refIndex];
				citeElem.innerHTML = `
					<span hidden class="rawRef">${rawRef}</span>
					<sup onclick="this.nextSibling.nextElementSibling.classList.toggle('inline-cite-popup-show'); setTimeout(() => {this.nextSibling.nextElementSibling.classList.remove('inline-cite-popup-show')}, 20000)">[ref]</sup>
					<div class="inline-cite-popup">
						${cite.genInlineCite()}
					</div>
				`;
			}
		});
	}
}