"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CitationManager = /** @class */ (function () {
    function CitationManager(refList) {
        this.refList = [];
        this.refList = refList || [];
    }
    // Searches for existing citations (based on class), and attempts to replace them from list of citations"
    CitationManager.prototype.augmentCitations = function (onHover) {
        var _this = this;
        if (onHover === void 0) { onHover = true; }
        var refIDList = this.refList.map(function (c) { return c.refID; });
        var inactiveCites = document.querySelectorAll(".inline-cite:not(.activated)");
        Array.from(inactiveCites).forEach(function (citeElem) {
            var rawRef = citeElem.innerHTML;
            var refID = rawRef.replace(/[\[\]]/g, "");
            var refIndex = refIDList.indexOf(refID);
            if (refIndex !== -1) {
                var cite = _this.refList[refIndex];
                var eventHandler = "onclick=\"this.nextSibling.nextElementSibling.classList.toggle('inline-cite-popup-show')\"";
                if (onHover) {
                    eventHandler = "onmouseover=\"this.nextSibling.nextElementSibling.classList.add('inline-cite-popup-show')\"\n\t\t\t\t\tonmouseout=\"this.nextSibling.nextElementSibling.classList.remove('inline-cite-popup-show')\"";
                }
                citeElem.innerHTML = "\n\t\t\t\t\t<span hidden class=\"rawRef\">" + rawRef + "</span>\n\t\t\t\t\t<sup " + eventHandler + ">\n\t\t\t\t\t\t[ref]\n\t\t\t\t\t</sup>\n\t\t\t\t\t<div class=\"inline-cite-popup\">\n\t\t\t\t\t\t" + cite.genInlineCite() + "\n\t\t\t\t\t</div>\n\t\t\t\t";
            }
        });
    };
    return CitationManager;
}());
exports.CitationManager = CitationManager;
//# sourceMappingURL=CitationManager.js.map