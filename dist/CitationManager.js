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
        var inactiveCites = document.querySelectorAll(".incite:not(.activated)");
        Array.from(inactiveCites).forEach(function (citeElem) {
            var rawRef = citeElem.innerHTML;
            var refList = rawRef.replace(/[\[\]]/g, "").split("|");
            var shortList = [];
            var citeNameList = [];
            refList.forEach(function (refID) {
                var refIndex = refIDList.indexOf(refID);
                if (refIndex !== -1) {
                    var cite = _this.refList[refIndex];
                    var short = "" + (refIndex + 1);
                    var citeName = cite.name;
                    if (cite.url) {
                        citeName = "<a href=\"" + cite.url + "\" target=\"_blank\">" + cite.name + "</a>";
                        if (onHover) {
                            short = "<a href=\"" + cite.url + "\" target=\"_blank\">" + short + "</a>";
                        }
                    }
                    shortList.push(short);
                    citeNameList.push(refIndex + 1 + ") " + citeName);
                }
            });
            var eventHandler = "onclick=\"this.nextSibling.nextElementSibling.classList.toggle('incite-popup-show')\"";
            if (onHover) {
                eventHandler = "onmouseover=\"this.nextSibling.nextElementSibling.classList.add('incite-popup-show')\"\n\t\t\t\tonmouseout=\"this.nextSibling.nextElementSibling.classList.remove('incite-popup-show')\"";
            }
            citeElem.innerHTML = "\n\t\t\t\t\t<span hidden class=\"rawRef\">" + rawRef + "</span>\n\t\t\t\t\t<sup " + eventHandler + ">\n\t\t\t\t\t\t[" + shortList.join(", ") + "]\n\t\t\t\t\t</sup>\n\t\t\t\t\t<div class=\"incite-popup\">\n\t\t\t\t\t\t" + citeNameList.join("<hr>") + "\n\t\t\t\t\t</div>\n\t\t\t\t";
        });
    };
    return CitationManager;
}());
exports.CitationManager = CitationManager;
//# sourceMappingURL=CitationManager.js.map