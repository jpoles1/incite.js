"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Citation = /** @class */ (function () {
    function Citation(refID, init) {
        this.refID = "";
        this.name = "";
        this.url = undefined;
        this.notes = undefined;
        Object.assign(this, init);
        this.refID = refID;
    }
    Citation.prototype.genInlineCite = function () {
        var linkText = this.name;
        if (this.url !== undefined) {
            linkText = "<a target=\"_blank\" href=\"" + this.url + "\">" + linkText + "</a>";
        }
        var notes = "";
        if (this.notes !== undefined) {
            notes = "\n\t\t\t\t<br>\n\t\t\t\t<sub><i>" + this.notes + "</i></sup>\n\t\t\t";
        }
        return linkText + notes;
    };
    return Citation;
}());
exports.Citation = Citation;
//# sourceMappingURL=Citation.js.map