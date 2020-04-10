export class Citation {
	public refID = "";
	public name = "";
	public url = undefined as string | undefined;
	public notes = undefined as string | undefined;
	constructor(refID: string, init?: Partial<Citation>) {
		Object.assign(this, init);
		this.refID = refID;
	}
	public genInlineCite(): string {
		let linkText = this.name;
		if (this.url !== undefined) {
			linkText = `<a target="_blank" href="${this.url}">${linkText}</a>`;
		}
		let notes = "";
		if (this.notes !== undefined) {
			notes = `
				<br>
				<sub><i>${this.notes}</i></sup>
			`;
		}
		return linkText + notes;
	}
}
