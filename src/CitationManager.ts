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
			const refList = rawRef.replace(/[\[\]]/g, "").split("|");
			const shortList: string[] = [];
			const citeNameList: string[] = [];
			refList.forEach((refID: string) => {
				const refIndex = refIDList.indexOf(refID);
				if (refIndex !== -1) {
					const cite = this.refList[refIndex];
					let short = `${refIndex + 1}`;
					let citeName = cite.name;
					if (cite.url) {
						citeName = `<a href="${cite.url}" target="_blank">${cite.name}</a>`;
						if (onHover) {
							short = `<a href="${cite.url}" target="_blank">${short}</a>`;
						}
					}
					shortList.push(short);
					citeNameList.push(`${refIndex + 1}) ${citeName}`);
				}
			});
			let eventHandler = `onclick="this.nextSibling.nextElementSibling.classList.toggle('inline-cite-popup-show')"`;
			if (onHover) {
				eventHandler = `onmouseover="this.nextSibling.nextElementSibling.classList.add('inline-cite-popup-show')"
				onmouseout="this.nextSibling.nextElementSibling.classList.remove('inline-cite-popup-show')"`;
			}
			citeElem.innerHTML = `
					<span hidden class="rawRef">${rawRef}</span>
					<sup ${eventHandler}>
						[${shortList.join(", ")}]
					</sup>
					<div class="inline-cite-popup">
						${citeNameList.join("<hr>")}
					</div>
				`;
		});
	}
}
