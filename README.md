# incite.js
Simple javascript lib for reference management and inline citation into HTML webpages.

![Inline Citation Demo](https://github.com/jpoles1/incite.js/raw/master/incite.gif)

## Getting Started

All you need to do is:
1) Import the library
2) Create a reference list
3) Add your inline citations
4) Style as you please

<hr>

1) Import the library:

```
import { CitationManager } from "./incite.js/src/CitationManager";
import { Citation } from "./incite.js/src/Citation";
```

2) Create Reference List:

```
refMan = new CitationManager([
	new Citation("Spencer & Butler 2010", {
		name: "Spencer, C., & Butler, J. (2010). Survival after cardiac arrest and severe lactic acidosis (pH 6.61) due to haemorrhage. Emergency Medicine Journal, 27(10), 800-801.",
		url: "https://emj.bmj.com/content/27/10/800.long",
	}),
	new Citation("Stolmeijer 2018", {
		name: "Stolmeijer, R., Bouma, H. R., Zijlstra, J. G., Drost-de Klerck, A. M., Ter Maaten, J. C., & Ligtenberg, J. J. M. (2018). A systematic review of the effects of hyperoxia in acutely ill patients: should we aim for less?. BioMed research international, 2018.",
		url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5977014/",
	}),
	new Citation("Wrenn 1990", {
		name: "Wrenn, K. (1990). The delta (Δ) gap: An approach to mixed acid-base disorders. Annals of emergency medicine, 19(11), 1310-1313.",
		url: "https://www.sciencedirect.com/science/article/pii/S0196064405822929",
	}),
]);
#This function searches for .incite and modifies the DOM to include the citations
refMan.augmentCitations();

```

3) Add your inline citations

```
<div>
		Lorem ipsum dolor sit amet <div class="incite">[Wrenn 1990]</div>, consectetur adipiscing elit. 
		Etiam viverra ipsum ut mi facilisis vehicula vitae et ligula.<div class="incite">[Hamm 2015|Narins 1980]</div> 
		Nullam sagittis, velit congue posuere tincidunt, arcu tortor rutrum dolor, ut vulputate tortor risus id purus. 
<div>
```
<i>Note: separate multiple citations with the "|" character.</i>

4) You can start off by modifying the following styles to fit your UI:

```
.incite {
	position: relative;
	display: inline;
}
.incite-popup {
	background-color: #555; 
	border-radius: 3px;
	min-width: 180px; 
	max-width: 240px;
	max-height: 180px; 
	font-size: 50%; 
	position: absolute; 
	bottom:	20px; 
	left: -240px; 
	padding: 8px;
	box-shadow: #222 3px 3px 3px;
}
.incite-popup:not(.incite-popup-show) {
	display: none;
}
.incite a{
	color: white;
	text-decoration: none;
	transition: 600ms;
}
.incite a:hover{
	/*color: #e7ea78;*/
	color: #f6aeae;
	text-decoration: underline;
}
```