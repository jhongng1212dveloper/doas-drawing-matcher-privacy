/* DOAS Drawing Matcher (bookmark version) v1.01 | 2026-10-18 */
(()=>{
if(location.origin!=='https://pixel-doas-system.web.app'){alert('Open DOAS and its Create RFQ dialog, then click this bookmark.');return;}
const host=window;
if(host.__doasBookmarkWindow&&!host.__doasBookmarkWindow.closed){host.__doasBookmarkWindow.focus();return;}
const ui=host.__doasBookmarkPendingWindow&&!host.__doasBookmarkPendingWindow.closed?host.__doasBookmarkPendingWindow:window.open('about:blank','DOAS_Drawing_Matcher_Bookmark','width=540,height=900,resizable=yes,scrollbars=yes');
if(!ui){alert('Allow pop-ups for DOAS, then click the bookmark again.');return;}
host.__doasBookmarkWindow=ui;
ui.document.open();ui.document.write("<!doctype html>\n<!-- DOAS Drawing Matcher | v1.01 | 2026-10-18 | Codex\nPurpose: Local drawing review workspace. Change log: v1.01 - Initial release;\nv1.01 - Add explicit line-difference decision panel;\nv1.02 - Auto-start and confirm only when a project or line number differs;\nv1.03 - Remove the pasted folder path; choosing a folder or files is the supported route;\nv1.04 - Narrow two-column workspace that fits a quarter of a 1920px screen; visible error\nstate; the two BOM buttons are retry-only;\nv1.05 - Reading screenshots runs the same chain as reading a folder, so the extracted list is\nused directly; \"Rebuild matching report\" is renamed \"Build matching report\";\nv1.07 - Add the screenshot findings block: lines that look like drawing numbers but could not be\nread are listed separately from harmless page text, and must be corrected or excluded before\nthe list can be selected;\nv1.08 - The second findings button now says \"I have checked the flagged lines\", because that is the\nconfirmation being asked for; confirming re-runs the match;\nv1.09 - The prefix now reaches the screenshot line detector, so a bare four-digit line is reported\nas a lost drawing number instead of page text; and the findings are cleared only after a fresh\nextraction succeeds, so a failed read cannot leave an incomplete list selectable;\nv2.00 - Project/line group approval replaces the per-drawing Confirm / Skip panel: the reference list\nis grouped by source project/line with its drawing count, and each group is approved, excluded or\nundone once. The permitted DOAS target is taken from the page, verified against the BOM rows.\nv2.01 - The permitted DOAS target is trusted only when it comes from a labelled project field or from\nunanimous BOM rows: a project number found loose in the dialog is no longer evidence, and a label\ncarrying two different values blocks as ambiguous instead of taking the first. Interface unchanged.\nv2.02 - The workspace is decluttered. The group panel is reduced to a heading, a one-line count, one\nrow per group (title, state, actions, a \"View drawings\" disclosure) and a single closing note, instead\nof repeating the same explanation three times. The stat row, the DOAS read line, the issue list and the\nselection log move into a \"Details\" disclosure, and \"How the BOM is read\" nests inside it. The two\nretry buttons become one Refresh button. The approval checkbox and the Select button appear only when\nmanual review is actually required.\nv2.03 - The reason a run cannot select is now shown in the pane, not only inside Details. A new\n\"Selection blocked\" block sits under the status line and names each blocker in one short line, for\nexample \"1 drawing missing — 2312_B\", so the missing drawing can be looked up in DOAS without opening\nanything. The issue list stays in Details as the full technical record. The status line points at the\nblock instead of at a list the user could not see. The reference list now holds identifiers only —\nthe description is never compared (superseded in v3.00: it is now retained and compared) — and the\ndescription and original filename are shown under\n\"View drawings\" and in the report's path column instead.\nv2.04 - The count row comes back, and it is now the first check. Reference / PDF matches / BOM matches /\nSelected / Issues sit in the pane again, outside Details, with one line beneath them that compares the\nquantities and says whether they agree. \"Selected\" is the count DOAS itself confirmed — never the number\nthat merely matched — so it stays \"—\" until the bridge has verified the live table, and the row is\nre-rendered from that verified figure. Choosing a folder now reports how many files it holds and how\nmany of them are PDFs, because other file types are not counted and must not disappear silently.\nDuplicate PDFs, PDFs that are not drawing numbers and unrecognized filenames are named rather than\ndropped.\nv2.05 - The two counts the user was counting by eye are now printed where the list is. The folder\npicker shows the PDF count in parentheses beside the browser's own file count — \"33 files (17 .pdf)\" —\nso the number that matters is on the label, not one line down. The Reference list heading carries the\nnumber of items in the box — \"Reference list (17)\" — and follows every change to the list, whether it\ncame from a folder, a screenshot or typing. Because the folder label now states the PDF count, the line\nunder it no longer repeats it: it reports only the files that were left out and starts the run.\nv3.00 - The whole filename is validated before it is shortened, and the description is compared\n(PROJECT_REQUIREMENTS R3.1, R3.2, R4.1-R4.7, R5.1). A filename that carries two drawing identifiers, or\na second shortened value, is refused and blocks instead of being shortened to the first drawing. The\ndescription after the identifier is kept, compared with the description read from the verified DOAS\ndescription column, and recorded; a different, missing or unreadable description blocks and both texts\nare shown. Ten quantities are tallied in the pane under the count row and in the audit, with invalid and\nduplicate PDFs kept inside \"PDFs found\".\nv3.01 - The confirmed live DOAS selector is exactly one same-row `td.col-description`. Header and\nnumeric-position discovery are removed. Zero or multiple cells are unreadable; blank or em-dash text\nis missing. Both conditions block before any checkbox click.\nv1.01 - Show the verified compatible browser, Microsoft Edge, directly above the workspace title. -->\n<html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>DOAS Drawing Matcher v1.01</title><style>/* DOAS Drawing Matcher | v3.02 | 2026-10-18 | Codex\nPurpose: Compact two-column workspace sized for a quarter of a 1920px screen.\nChange log: v1.01 - Initial release;\nv1.04 - Narrow single-pane layout, capped at 480px and shrinkable below it.\n       Wide grab-friendly scrollbars: --scroll is the bar thickness in px.\nv1.07 - Style the screenshot findings block: the lines that could not be read are shown as a\n       warning, the harmless ignored lines stay inside a collapsed details element.\nv2.00 - Style the project/line group panel: the largest group carries a teal accent so the likely\n       main group is easy to spot, without implying it has been accepted.\nv2.02 - Restyle the panel for the declutter: tighter group rows with a collapsed drawing list, and a\n       Details disclosure holding the stat row, the DOAS read line, the issues and the selection log.\n       The now-unused .choiceRow, .choiceState and .choiceNote rules are removed.\nv2.03 - Style the \"Selection blocked\" block, which is deliberately NOT inside Details: the reason a run\n       cannot select has to be visible, because a block the user cannot see is indistinguishable from\n       nothing happening. The blocked identifiers are monospaced so they can be read off and typed\n       into DOAS.\nv2.04 - The count row is back in the pane, with the quantity line beneath it: green when the quantities\n       agree (and, once verified, when DOAS confirms the same number), red when they differ. It is a\n       five-card row, so the auto-fit grid is allowed to fall to two rows on a narrow screen instead of\n       squeezing the labels.\nv2.05 - The two counts read off the screen: the PDF count sits in parentheses beside the browser's own\n       file label, so the folder input is allowed its natural width instead of filling the box and\n       pushing the count onto its own line. Both counts are monospaced-free but weighted, so they read\n       as numbers rather than as part of the sentence.\nv3.00 - Style the ten-quantity tally under the count row: small and quiet, because it is the tally behind\n       the check rather than the check itself, and it has to stay readable while wrapping to several\n       lines in a 205px pane.\nv3.02 - Add a clear Microsoft Edge compatibility label above the title. */\n:root{font-family:Segoe UI,Arial,sans-serif;color:#1b2f3f;background:#eef3f6;font-size:12px;--scroll:24px}\n*{box-sizing:border-box}\n[hidden]{display:none!important}\nbody{margin:0 auto;max-width:480px;background:#eef3f6;min-height:100vh}\nheader{padding:10px 12px;background:#142f42;color:#fff;display:flex;justify-content:space-between;gap:8px;align-items:flex-start}\n.browser-name{display:block;color:#fff;font-size:10px;font-weight:700;margin-bottom:3px}\n.eyebrow{font-size:9px;letter-spacing:1.4px;color:#95c9d6;display:block}\nh1{font-size:17px;letter-spacing:-.3px;margin:2px 0 3px;line-height:1.15}\nh1 small{font-size:10px;color:#a7c6d6;margin-left:5px;letter-spacing:0}\nheader p{color:#c5d9e2;margin:0;font-size:10px;line-height:1.35}\n.pills{display:flex;flex-direction:column;gap:4px;align-items:flex-end;flex:none}\n.pill,.local{font-size:9px;border:1px solid #496474;border-radius:20px;padding:3px 8px;white-space:nowrap}\n.pill{color:#a7c6d6}\n.local{color:#a4e1cf}\nmain{padding:10px}\n.columns{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:start}\nsection.pane{background:#fff;border:1px solid #d7e1e7;border-radius:8px;padding:10px;min-width:0}\nh2{font-size:12px;margin:0 0 7px}\nh2.next{margin-top:12px}\np{font-size:11px;color:#607482;line-height:1.45;margin:5px 0}\n.tiny{font-size:10px;color:#7b8f9c}\nlabel{display:block;font-weight:600;font-size:11px;margin:8px 0 4px}\ninput:not([type=checkbox]),textarea{width:100%;padding:6px 7px;border:1px solid #bdcbd4;border-radius:5px;font:inherit;color:#183444;font-size:11px}\ntextarea{font-family:Consolas,monospace;font-size:10px;resize:vertical}\nbutton{font:600 11px Segoe UI,sans-serif;border:1px solid #afc1cc;border-radius:5px;background:#fff;color:#24485b;padding:7px 9px;cursor:pointer;max-width:100%}\nbutton.wide{width:100%;display:block;margin-bottom:4px}\nbutton:hover:not(:disabled){background:#e6f1f4}\nbutton.primary{background:#137c85;color:#fff;border-color:#137c85}\nbutton.primary:hover:not(:disabled){background:#0e6870}\nbutton:disabled{opacity:.45;cursor:not-allowed}\n.drop{padding:6px 8px;border:1px dashed #a7becb;border-radius:6px;background:#f7fafc;margin:0 0 6px;font-weight:600}\n.drop input{border:0;margin-top:4px;padding:0;font-size:10px;width:100%;min-width:0}\n/* v2.05: the folder picker keeps its natural width so the PDF count can sit beside the browser's own\n   \"33 files\" label. A full-width input would push the count onto a line of its own, which is the one\n   place the number must not be. */\n#folder{width:auto;max-width:calc(100% - 58px)}\n.pdf-count{margin-left:4px;font-size:10px;font-weight:700;color:#142f42;white-space:nowrap}\n.ref-count{color:#137c85;font-weight:700}\n.check{font-size:10px;line-height:1.4;font-weight:400;display:flex;gap:6px;align-items:flex-start;margin:8px 0 0}\n.check input{margin-top:2px;flex:none}\n.note{background:#f2f6f9;border-left:3px solid #789aa9;padding:7px 8px;margin:7px 0;border-radius:0 5px 5px 0}\n.note h3{font-size:11px;margin:0 0 4px}\n.findings{background:#fdf3f1;border:1px solid #e9b3ae;border-radius:6px;padding:7px 8px;margin:7px 0}\n.findings h3{font-size:11px;margin:0 0 4px;color:#96372f}\n.findings .warn{color:#96372f;font-weight:600;margin:0 0 4px}\n.findings pre{max-height:120px;overflow:auto;margin:0 0 4px}\n/* The visible reason a run cannot select. Deliberately in the pane rather than inside Details: a\n   block the user cannot see is indistinguishable from nothing happening at all. */\n.blocked{border:1px solid #e2b6b0;border-left:3px solid #96372f;background:#fdf1ef;border-radius:6px;padding:7px 8px;margin:8px 0 0}\n.blocked strong{display:block;font-size:11px;color:#96372f;margin-bottom:3px}\n.blocked #blockedList{font-size:10px;color:#5c3a35;line-height:1.45}\n.blocked #blockedList span{display:block}\n.blocked #blockedList span+span{margin-top:2px}\n.blocked em{font-family:Consolas,monospace;font-style:normal;font-weight:700;color:#96372f;word-break:break-all}\n.choiceTitle{font-family:Consolas,monospace;font-weight:700;color:#1b3b4d;margin:0 0 3px}\n/* The largest source group that still needs a decision, shown first. Highlighted for scanning only —\n   it carries no approval and is never accepted on the user's behalf, and v2.02 dropped the sentence\n   that used to say so: the marker and the ordering carry it without repeating the panel's own text. */\n.note.majority{border-left-color:#137c85;background:#eaf4f5}\n.note.majority .choiceTitle{color:#0f5f66}\n/* The group panel is meant to be read at a glance: a heading, one count line, and per group a title,\n   a state line, the actions and a collapsed drawing list. */\n#groupChoices h3{font-size:11px;margin:10px 0 2px;color:#1b3b4d}\n#groupChoices>p.tiny{margin:0 0 6px}\n.note details{margin-top:6px}\n.note details summary{font-size:10px;color:#3f6274;cursor:pointer}\n.note details pre{max-height:150px;overflow:auto;margin:4px 0 0}\n#details{margin-top:10px}\n#details>summary{font-weight:700;color:#3f6274;cursor:pointer}\n#details #issues{margin:6px 0}\n#details pre{max-height:140px;overflow:auto}\n.actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}\n.actions button{flex:1 1 auto;font-size:10px;padding:6px 5px}\n.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(52px,1fr));gap:5px;margin:8px 0}\n.stat{padding:6px 5px;background:#eef5f6;border-radius:5px;text-align:center}\n.stat strong{display:block;font-size:15px;line-height:1.1}\n.stat span{font-size:9px;color:#536e7c;line-height:1.2;display:block}\n/* The count row is the first check, so it sits in the pane directly under the status line: five cards\n   that must all agree on one number. \"Selected\" is the figure DOAS confirmed, so it reads \"—\" until the\n   bridge has verified the live table. */\n#summary.stats{grid-template-columns:repeat(5,minmax(0,1fr));margin:8px 0 3px}\n#summary .stat{padding:5px 2px}\n#summary .stat strong{font-size:14px}\n#summary .stat span{font-size:8px;letter-spacing:-.1px}\n#quantity{margin:0 0 2px;font-weight:600}\n#quantity.good{color:#19765e}\n#quantity.warn{color:#96372f}\n/* v3.00: the ten-quantity tally. A tally, not a check: it sits under the count row so what was counted\n   can be added up against the folder, including the files that could not be used. */\n#tally{margin:0 0 6px;font-size:9px;line-height:1.55;color:#5b7180}\n#status{font-weight:600;color:#264b60;font-size:10px;margin:6px 0}\n#error{background:#fdeceb;border:1px solid #e9b3ae;color:#96372f;font-size:10px;font-weight:600;padding:6px 8px;border-radius:5px;margin:6px 0}\n#issues{color:#96441d;font-size:10px;line-height:1.45;max-height:150px;overflow:auto}\npre{white-space:pre-wrap;overflow-wrap:anywhere;font-size:10px;line-height:1.45;margin:5px 0}\n#selectionLog{max-height:140px;overflow:auto}\n.results{margin-top:10px;background:#fff;border:1px solid #d7e1e7;border-radius:8px;padding:10px}\n.resultHead{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}\n.resultHead h2{margin:0}\n.resultHead input{max-width:150px}\n.tableScroll{max-height:360px;overflow:auto;border:1px solid #e2eaf0;border-radius:5px}\ntable{border-collapse:collapse;width:100%;font-size:10px}\nth{position:sticky;top:0;background:#eef4f7;text-align:left;padding:6px 5px;color:#4d6878;font-size:10px}\ntd{padding:6px 5px;border-bottom:1px solid #e2eaf0;vertical-align:top}\ntd:first-child{font-family:Consolas,monospace;white-space:nowrap}\n.good{color:#19765e}\n.bad{color:#a24424}\ndetails{margin-top:8px;font-size:10px}\nsummary{cursor:pointer;color:#4d6878}\nfooter{padding:8px 12px 14px;text-align:center;font-size:9px;color:#6d818c}\n#previews{display:flex;gap:5px;overflow:auto}\n#previews img{max-width:100%;height:60px;object-fit:contain;border:1px solid #d3dfe5}\na{color:#137c85}\na:focus,button:focus,input:focus,textarea:focus{outline:2px solid #56a9c4;outline-offset:1px}\n::-webkit-scrollbar{width:var(--scroll);height:var(--scroll)}\n::-webkit-scrollbar-track{background:#e4ebef}\n::-webkit-scrollbar-thumb{background:#7d99a9;border:3px solid #e4ebef;border-radius:8px}\n::-webkit-scrollbar-thumb:hover{background:#5f8093}\n::-webkit-scrollbar-thumb:active{background:#4a6b7d}\n::-webkit-scrollbar-corner{background:#e4ebef}\n@media(max-width:380px){.columns{grid-template-columns:1fr}}\n</style></head>\n<body><header><div><span class=\"browser-name\">Bookmark version · PDF filenames</span><span class=\"eyebrow\">ENGINEERING / PROCUREMENT</span><h1>Select items for RFQ <small>v1.01</small></h1><p>DOAS Drawing Matcher (bookmark version) · v1.01</p></div><div class=\"pills\"><span class=\"pill\">v1.01</span><span class=\"local\">● Local processing</span></div></header>\n<main><div class=\"columns\">\n<section class=\"pane\"><h2>Choose folder / files</h2>\n<label class=\"drop\">Choose PDF folder <input id=\"folder\" type=\"file\" webkitdirectory multiple> <span id=\"folderPdfs\" class=\"pdf-count\"></span></label>\n<label class=\"drop\">Choose PDF files <input id=\"pdfFiles\" type=\"file\" accept=\"application/pdf,.pdf\" multiple></label>\n<p id=\"folderInfo\" class=\"tiny\">No folder selected. Subfolders are included. Reading the list starts the run.</p>\n<div hidden><h2 class=\"next\">Use screenshots</h2>\n<label class=\"drop\">Choose screenshot(s) <input id=\"images\" type=\"file\" accept=\"image/png,image/jpeg,image/webp\" multiple></label>\n<p class=\"tiny\">Or paste an image anywhere on this page using Ctrl+V. Reading them runs the rest by itself.</p><div id=\"previews\"></div><button id=\"ocr\" disabled>Read screenshots locally</button><p id=\"ocrStatus\" class=\"tiny\" role=\"status\"></p>\n<div id=\"ocrFindings\" class=\"findings\" hidden><h3>Lines the screenshot reader could not use</h3>\n<div id=\"ocrDiscardWrap\" hidden><p id=\"ocrDiscardNote\" class=\"warn\"></p><pre id=\"ocrDiscardList\"></pre><div class=\"actions\"><button id=\"ocrNotDrawings\">These are not drawing numbers</button><button id=\"ocrAdded\">I have checked the flagged lines</button></div></div>\n<details id=\"ocrIgnoredWrap\" hidden><summary>Other ignored lines</summary><pre id=\"ocrIgnored\"></pre></details></div>\n</div><label for=\"scope\">Prefix for shortened numbers only</label><input id=\"scope\" placeholder=\"T-001707-01-6201\" autocomplete=\"off\"><p class=\"tiny\">Required for entries such as 2003_B. Never infer it from the open BOM.</p>\n<label for=\"reference\">Reference list <span id=\"refCount\" class=\"ref-count\"></span></label><textarea id=\"reference\" rows=\"10\" spellcheck=\"false\" placeholder=\"T-001707-02-6201-2003_B&#10;T-001707-02-6201-2004_A\"></textarea><p class=\"tiny\">One identifier per line. A full filename is accepted too — the description after the identifier is kept and compared with the DOAS row. A line carrying a second drawing value is refused rather than shortened. Numbers and revisions are never guessed or corrected. Entries are grouped by their source project / line, and each group is approved once. The description and the original filename are kept under \"View drawings\", in the mismatch details and in the audit.</p>\n<label class=\"check\"><input id=\"reviewed\" type=\"checkbox\"> I have checked the identifiers, revisions and count against the source.</label></section>\n<section class=\"pane\"><button id=\"refresh\" class=\"primary wide\">Refresh</button><p class=\"tiny\">Choosing PDFs starts matching automatically. Refresh re-reads the linked DOAS tab.</p>\n<p id=\"error\" class=\"error\" role=\"alert\" hidden></p><p id=\"status\" role=\"status\">Start by choosing a PDF folder or PDF files.</p>\n<div id=\"blocked\" class=\"blocked\" role=\"alert\" hidden><strong id=\"blockedHead\">Selection blocked</strong><div id=\"blockedList\"></div></div>\n<div id=\"summary\" class=\"stats\" aria-label=\"Run counts\"></div>\n<p id=\"quantity\" class=\"tiny\" role=\"status\"></p>\n<p id=\"tally\" class=\"tally\" aria-label=\"What was counted\"></p>\n<div id=\"groupChoices\"></div>\n<div id=\"manual\" hidden><label class=\"check\"><input id=\"approved\" type=\"checkbox\" disabled> I approve the matched rows in this report for selection.</label><div class=\"actions\"><button id=\"select\" class=\"primary\" disabled>Select exact matches in DOAS</button></div><p class=\"tiny\">Selection does not submit an RFQ. Complete suppliers and quantities in DOAS after verification.</p></div>\n<details id=\"details\" class=\"tiny\"><summary>Details</summary>\n<p id=\"bomInfo\" class=\"tiny\">No BOM read yet.</p><p id=\"groupInfo\" class=\"tiny\"></p><div id=\"issues\"></div>\n<details class=\"tiny\"><summary>How the BOM is read</summary><p>The DOAS page must show the <b>Create RFQ &amp; Send Emails</b> button. The bookmark reads that dialog's table and never presses the button. Rows below the visible area are included if already loaded. Unrelated or hidden selections must be cleared in DOAS first.</p></details>\n<p class=\"tiny\">Undo mapping changes the mapping decision only; it does not untick rows already selected in DOAS.</p><pre id=\"selectionLog\"></pre></details>\n<div class=\"actions\"><button id=\"export\" disabled>Export audit</button></div></section></div>\n<section class=\"results\"><div class=\"resultHead\"><h2>Matching report</h2><input id=\"filter\" placeholder=\"Filter report…\" aria-label=\"Filter report\"></div><div class=\"tableScroll\"><table><thead><tr><th>Full identifier + revision</th><th>PDF files</th><th>DOAS BOM</th><th>Details / relative path</th></tr></thead><tbody id=\"results\"><tr><td colspan=\"4\">Your audited results will appear here.</td></tr></tbody></table></div><details><summary>Files not used and unrecognized filenames</summary><pre id=\"otherFiles\">No folder scanned.</pre></details></section></main><footer>DOAS Drawing Matcher · v1.01 · PDF filename matching runs on this device.</footer>\n</body></html>\n");ui.document.close();
const bridgeState={};
(function(globalThis,document,location){
// DOAS Drawing Matcher | v3.01 | 2026-10-18 | Codex
// Purpose: Strict identifier parsing, project/line grouping, target verification and deterministic
//          matching, shared by the UI and the DOAS bridge.
// Change log: v1.01 - Initial release; optional 6000 segment comparison rule.
// v1.01 - Offer same-project line differences for explicit approval; preserve source identifiers.
// v1.02 - Permit explicit project and/or line mapping; module, part and revision stay exact.
// v1.07 - Add looksLikeIdentifier: distinguish a drawing number that was lost (garbled by OCR)
//         from ordinary page text, so an incomplete extracted list can be detected and blocked.
// v2.00 - Project/line GROUP mapping replaces per-drawing approval. Adds projectLine, retarget,
//         groupEntries and parseProjectLineValue, plus rowProjectLines and verifyTarget, which
//         implement the evidence ladder that decides whether the DOAS project/line may be trusted
//         at all. resolveGroups permits ONLY the verified target project/line and reports every
//         other project/line present in the BOM as forbidden. lineOnly, lineCandidates and
//         resolveLines are removed: they were the per-drawing model this revision replaces.
// v2.01 - Two target-verification defects found by an independent review, both in how the EVIDENCE
//         was produced rather than in how it was judged. verifyTarget was well covered but was only
//         ever handed hand-made evidence, so the producer went untested. (1) An unlabelled note such
//         as "Previous project: 001707-01" was accepted as the current project. The bridge no longer
//         reads any project token that is not tied to a label, and reports a distinct reason when a
//         labelled value is not a single well-formed project. (2) Two conflicting values beside one
//         label were resolved by document order. projectLineTokens is exposed so the bridge can
//         require exactly one distinct value and block on a conflict.
// v2.03 - Add shortKey, the compact part-number + revision form (T-001670-04-6300-2312_B -> 2312_B).
//         A blocker line has to name the drawing a person can look up in DOAS, and the project and
//         module are already stated by the line itself, so only the last two fields are shown.
// v3.00 - The whole filename is validated BEFORE it is shortened, and the description is extracted and
//         compared (PROJECT_REQUIREMENTS R2.3, R3.1, R3.2, R4.1-R4.4). describe() is the new single
//         entry point: it accepts a filename only when it holds EXACTLY ONE drawing identifier at the
//         start and nothing after it that looks like a second drawing. A second complete identifier, or
//         a shortened value such as 2202_A, is reported with a reason instead of being read as a
//         description - that defect let "T-...-2003_B T-...-2004_A.pdf" shorten to 2003_B and reach a
//         selection request. parse() is now a thin wrapper over describe(), so every call site -
//         filenames, DOAS row titles, audit keys - inherits the stricter rule. The text after the
//         identifier becomes the structured description (the ".pdf" extension removed, spaces
//         collapsed), and normalizeDescription/compareDescription define the only differences that may
//         be ignored: case, leading/trailing spaces and repeated spaces. Words, numbers, punctuation
//         and version text are never removed.
// v3.01 - Treat a blank value or the DOAS empty-value marker `—` as a missing description. The bridge
//         separately reports zero or multiple same-row description cells as unreadable.
(function(root) {
  // The identifier at the very start of the text. Anchored, so a drawing number buried in a
  // description is never mistaken for the drawing.
  const FULL_AT_START=/^T-(\d{6})-(\d{2})-(6\d{3})-(?:6000-)?(\d{4})_([A-Z][A-Z0-9]*)/;
  // A second complete identifier anywhere in the remainder.
  const TWO_IDENTIFIERS=/T-\d{6}-\d{2}-6\d{3}-(?:6000-)?\d{4}_[A-Z][A-Z0-9]*/i;
  // A shortened drawing value in the remainder (2202_A). The lookbehind class also catches it when it
  // is glued to the first identifier with an underscore, which a \b would not.
  const SECOND_SHORT=/(?:^|[^A-Za-z0-9])\d{4}_[A-Z][A-Z0-9]*/i;
  const SHORT_ONLY=/^(\d{4})_([A-Z][A-Z0-9]*)$/;
  const SCOPE=/^T-\d{6}-\d{2}-6\d{3}$/;
  // Everything after the identifier is the description. Only the file extension is removed, because it
  // is not part of the drawing; nothing else is stripped, so version text and punctuation survive.
  function describe(value, scope='') {
    const original=String(value??'').trim();
    const text=original.replace(/\.pdf$/i,'').trim();
    if(!text) return {ok:false,reason:'empty'};
    const m=FULL_AT_START.exec(text);
    if(m){
      const rest=text.slice(m[0].length);
      // The identifier must be followed by nothing, or by a description that cannot be another drawing.
      if(TWO_IDENTIFIERS.test(rest)) return {ok:false,reason:'two-identifiers',detail:rest.trim()};
      if(SECOND_SHORT.test(rest)) return {ok:false,reason:'second-short-value',detail:rest.trim()};
      // A description has to be separated from the identifier by a space. Punctuation glued to the
      // revision ("..._B!") is not a description, it is a damaged name, so it is refused.
      if(rest&&!/^\s/.test(rest)) return {ok:false,reason:'unparseable'};
      return {
        ok:true,
        key:`T-${m[1]}-${m[2]}-${m[3]}-${m[4]}_${m[5]}`,
        base:`T-${m[1]}-${m[2]}-${m[3]}-${m[4]}`,
        revision:m[5],
        description:rest.replace(/\s+/g,' ').trim(),
        source:original
      };
    }
    // A shortened number is accepted only when it is the WHOLE text and a prefix is supplied. It has no
    // description of its own, so nothing is invented for it.
    const short=SHORT_ONLY.exec(text.toUpperCase());
    if(short && SCOPE.test(String(scope).trim().toUpperCase())){
      const expanded=describe(`${String(scope).trim().toUpperCase()}-${short[1]}_${short[2]}`,'');
      if(expanded.ok) return {...expanded,description:'',source:original};
    }
    return {ok:false,reason:'unparseable'};
  }
  function parse(value, scope='') {
    const d=describe(value,scope);
    return d.ok?{key:d.key,base:d.base,revision:d.revision}:null;
  }
  // The only differences a description comparison may ignore (PROJECT_REQUIREMENTS R4.4). Words,
  // numbers, punctuation and version text are part of the description and are never removed.
  function normalizeDescription(text){
    return String(text??'').replace(/\s+/g,' ').trim().toLowerCase();
  }
  // Compare the description taken from the source (a filename, or a typed line) with the one read from
  // the DOAS row. `unreadable` is passed by the bridge when it could not establish a description cell at
  // all, which is different from a cell that is simply empty: one is a page we cannot read, the other is
  // a row that carries no description.
  function compareDescription(sourceText, doasText, options={}) {
    const source=normalizeDescription(sourceText), doas=normalizeDescription(doasText);
    if(options.unreadable) return {state:'unreadable-doas',source,doas};
    const sourceMissing=!source||source==='—',doasMissing=!doas||doas==='—';
    if(sourceMissing&&doasMissing) return {state:'not-compared',source,doas};
    if(sourceMissing) return {state:'missing-source',source,doas};
    if(doasMissing) return {state:'missing-doas',source,doas};
    return {state:source===doas?'matched':'differs',source,doas};
  }
  // True when a line still looks like a drawing number even though it did not parse. OCR damage
  // (a letter O for a zero, a missing or misread revision, a dropped underscore) leaves a line that
  // is clearly an identifier attempt, whereas headings, column labels and page numbers are not.
  // The split matters: a discarded identifier means the extracted list is incomplete and must not be
  // selected automatically, while discarded page furniture is harmless.
  function looksLikeIdentifier(line,scope='') {
    const s=String(line??'').trim();
    if(!s) return false;
    if(/T-[A-Z0-9]/i.test(s)) return true;                  // a full identifier attempt, however garbled
    if(/\b\d{4}[_\-\s]?[A-Z]\b/.test(s)) return true;       // a shortened number with a revision letter
    // With a scope prefix the drawing numbers are shortened, so a bare four-digit line is a shortened
    // number whose revision was lost, not a page number or a quantity.
    if(/^T-\d{6}-\d{2}-6\d{3}$/.test(String(scope).trim().toUpperCase()) && /^\d{4}$/.test(s)) return true;
    return false;
  }
  function reference(text,scope) {
    const entries=[],invalid=[],duplicates=[],seen=new Set();
    text.split(/\r?\n/).forEach((line,i)=>{
      if(!line.trim()) return;
      // The WHOLE line is validated before anything is shortened. A line carrying a second drawing
      // value is reported with its reason instead of being read as a description (R3.1, R3.2).
      const d=describe(line,scope);
      if(!d.ok){invalid.push({line:i+1,text:line,reason:d.reason});return;}
      if(seen.has(d.key)) duplicates.push(d.key);
      else {seen.add(d.key);entries.push({key:d.key,base:d.base,revision:d.revision,description:d.description,source:line});}
    });
    return {entries,invalid,duplicates};
  }
  function compare(entries, rows) {
    return entries.map(item=>{
      const exact=rows.filter(r=>parse(r.title)?.key===item.key);
      const alternatives=rows.filter(r=>parse(r.title)?.base===item.base && parse(r.title)?.key!==item.key);
      return {...item,count:exact.length,status:exact.length>1?'Duplicate':exact.length===1?'Matched':alternatives.length?'Revision differs':'Missing',alternatives:alternatives.map(r=>r.title)};
    });
  }

  // ---------------------------------------------------------------- project / line helpers
  // An identifier is T-PPPPPP-PP-MMMM-NNNN_R. The "source group" is the project and line together,
  // because that is the unit the user approves once for every drawing that shares it.
  const PL=/^\d{6}-\d{2}$/;
  function pieces(key){const p=parse(key);return p?p.key.split('-'):null;}
  function projectLine(key){const s=pieces(key);return s?`${s[1]}-${s[2]}`:null;}
  // The compact form a person can look up in DOAS: part number and revision only (2312_B). The
  // project and module are already stated by the line the short key appears on.
  function shortKey(key){const s=pieces(key);return s?s[4]:String(key??'');}
  // Swap ONLY the project and line, keeping module, part number and revision byte-identical.
  function retarget(key,targetProjectLine){
    const s=pieces(key);
    if(!s||!PL.test(String(targetProjectLine??'')))return null;
    return `T-${targetProjectLine}-${s[3]}-${s[4]}`;
  }
  // DOAS shows the project in several shapes. Accept exactly these three and normalise to PPPPPP-PP;
  // anything else is malformed and must block rather than be guessed. Tokens are split on separators
  // first so that a full identifier (T-001707-01-6201-2003_B) can never be mistaken for a project.
  // The text must carry exactly ONE distinct project/line: two of them mean the container mixes
  // values, which is malformed, not a licence to take the first. That is what keeps a first-element
  // or first-row guess from ever reaching the target.
  // The distinct tokens are exposed separately so a caller can require unanimity across a container
  // and report WHICH values conflicted, instead of silently taking whichever came first.
  function projectLineTokens(text){
    const found=new Set();
    for(const raw of String(text??'').split(/[^A-Za-z0-9_-]+/)){
      const token=raw.replace(/^(?:PX|T)-/i,'');
      if(PL.test(token))found.add(token);
    }
    return [...found].sort();
  }
  function parseProjectLineValue(text){
    const found=projectLineTokens(text);
    return found.length===1?found[0]:null;
  }
  function rowProjectLines(rows){
    const out=new Set();
    for(const row of rows||[]){const pl=projectLine(row?.title);if(pl)out.add(pl);}
    return [...out].sort();
  }
  // The evidence ladder. The target project/line may only be used when the page itself proves it:
  // a labelled value that agrees with the rows, or — when there is no label at all — a single
  // unanimous value across every valid row. A malformed label, a label that disagrees with the rows,
  // or several row projects with no label all block. The first element, the first row and the
  // majority are never used as evidence.
  function verifyTarget(evidence={}){
    const rows=Array.isArray(evidence.rowProjectLines)?[...new Set(evidence.rowProjectLines.filter(Boolean))].sort():[];
    const base={targetProjectLine:null,targetVerified:false,targetSource:'none',rowProjectLines:rows};
    if(evidence.headerPresent){
      const parsed=parseProjectLineValue(evidence.headerValue);
      if(!parsed){
        const tokens=projectLineTokens(evidence.headerValue);
        // Several distinct values beside one label is an AMBIGUITY, not a malformed string, and the
        // remedy differs: the page has to be disambiguated rather than retyped. Name the values.
        const reason=tokens.length>1
          ? `The labelled DOAS project shows several values (${tokens.join(', ')}), so the target is ambiguous and cannot be established.`
          : 'The labelled DOAS project could not be read. It must look like 001707-01, T-001707-01 or PX-001707-01.';
        return {...base,targetSource:'malformed-header',reason};
      }
      if(rows.includes(parsed))return {targetProjectLine:parsed,targetVerified:true,targetSource:'labelled-dialog-header',rowProjectLines:rows};
      return {...base,targetSource:rows.length?'header-row-conflict':'header-unconfirmed',reason:`The labelled DOAS project is ${parsed}, but no BOM row carries it, so the target cannot be confirmed.`};
    }
    if(rows.length===1)return {targetProjectLine:rows[0],targetVerified:true,targetSource:'row-consensus',rowProjectLines:rows};
    if(rows.length>1)return {...base,targetSource:'ambiguous-rows',reason:`No labelled DOAS project was found and the BOM rows span several projects (${rows.join(', ')}), so the target cannot be established.`};
    return {...base,targetSource:'no-evidence',reason:'No labelled DOAS project and no usable BOM rows, so the target cannot be established.'};
  }
  // Group the reference list by source project/line. Largest group first so the likely main group is
  // easy to spot, but the order is presentation only — nothing is ever accepted automatically.
  function groupEntries(entries){
    const map=new Map();
    for(const entry of entries||[]){
      const sourceGroup=projectLine(entry.key);
      if(!sourceGroup)continue;
      if(!map.has(sourceGroup))map.set(sourceGroup,{sourceGroup,files:[]});
      map.get(sourceGroup).files.push(entry);
    }
    return [...map.values()].sort((a,b)=>b.files.length-a.files.length||(a.sourceGroup<b.sourceGroup?-1:1));
  }
  // Resolve every reference entry against the BOM, permitting ONLY the verified target project/line.
  // A group equal to the target needs no mapping. Any other group needs an approval that is still
  // valid for the current BOM fingerprint and the current target; without it the drawing is
  // unresolved and blocks. A row at any other project/line is a forbidden target and is never used,
  // though merely being present does not block on its own.
  function resolveGroups(entries,rows,groupDecisions={},targetProjectLine='',fingerprint=''){
    const errors=[],forbidden=new Set();
    const rowKeys=(rows||[]).map(r=>parse(r.title)?.key).filter(Boolean);
    for(const k of rowKeys){const pl=projectLine(k);if(targetProjectLine&&pl!==targetProjectLine)forbidden.add(pl);}
    const sameCore=(a,b)=>{const x=pieces(a),y=pieces(b);return !!(x&&y&&x[3]===y[3]&&x[4]===y[4]);};
    const resolved=(entries||[]).map(entry=>{
      const sourceGroup=projectLine(entry.key);
      const decision=groupDecisions[sourceGroup];
      if(decision?.decision==='excluded')
        return {...entry,sourceKey:entry.key,group:sourceGroup,targetKey:entry.key,state:'excluded',forbiddenAlternatives:[]};
      const exactGroup=sourceGroup===targetProjectLine;
      let approved=false;
      if(!exactGroup){
        approved=decision?.decision==='approved';
        if(approved&&decision.fingerprint!==fingerprint){errors.push(`The mapping approval for ${sourceGroup} is out of date. Approve the mapping again.`);approved=false;}
        else if(approved&&decision.targetProjectLine!==targetProjectLine){errors.push(`The mapping approval for ${sourceGroup} was given for a different DOAS project. Approve the mapping again.`);approved=false;}
      }
      // A row at another project/line with the same module, part and revision is a forbidden target.
      const elsewhere=rowKeys.filter(k=>sameCore(k,entry.key)&&projectLine(k)!==targetProjectLine);
      if(!exactGroup&&!approved)
        return {...entry,sourceKey:entry.key,group:sourceGroup,targetKey:entry.key,state:'unresolved',forbiddenAlternatives:elsewhere};
      const targetKey=exactGroup?entry.key:retarget(entry.key,targetProjectLine);
      const exact=rowKeys.filter(k=>k===targetKey);
      const state=exact.length>1?'duplicate':exact.length===1?'matched':elsewhere.length?'forbidden-only':'missing';
      return {...entry,sourceKey:entry.key,group:sourceGroup,targetKey,state,forbiddenAlternatives:elsewhere};
    });
    const matched=resolved.filter(r=>r.state==='matched');
    if(new Set(matched.map(r=>r.targetKey)).size!==matched.length)errors.push('Multiple reference items resolve to the same BOM row.');
    return {entries:resolved,errors,forbiddenTargets:[...forbidden].sort()};
  }

  root.DrawingMatcher={describe,parse,reference,compare,looksLikeIdentifier,normalizeDescription,compareDescription,projectLine,retarget,shortKey,parseProjectLineValue,projectLineTokens,rowProjectLines,verifyTarget,groupEntries,resolveGroups};
  if(typeof module!=='undefined') module.exports=root.DrawingMatcher;
})(globalThis);

// DOAS Drawing Matcher | v3.01 | 2026-10-18 | Codex
// Purpose: Inspect the Create RFQ dialog, establish the DOAS project/line from page evidence, and
//          apply only an audited exact selection.
// Change log: v1.01 - Initial release; stale-audit, duplicate and hidden-selection checks.
// v1.01 - Independently validate explicit source-to-target line approvals and log both keys.
// v1.02 - Require the visible Create RFQ & Send Emails button as a page marker; never click it.
// v2.00 - Establish the target project/line from page evidence instead of the first <strong>, which
//         was too fragile and never proved the value described the current project. A labelled
//         project element is located by its own text, every label must agree, and a value is only
//         accepted outside the BOM rows. The scan reports targetProjectLine, targetVerified,
//         targetSource and rowProjectLines. Selection now re-validates the group mapping: it blocks
//         when the target cannot be verified, when the target changed, and when an approved group no
//         longer maps onto exactly one row at the verified target.
// v2.01 - Two defects in how the evidence was PRODUCED, found by an independent review. (1) The
//         unlabelled fallback accepted any single project token found outside the BOM rows, so a
//         note such as "Previous project: 001707-01" was reported as a labelled header and could
//         authorise a target even when the rows spanned several projects. That fallback is removed:
//         with no label there is no header, so the target can only come from unanimous BOM rows and
//         mixed rows block. (2) A label with two values beside it was resolved by document order,
//         because the first sibling that parsed won. All values beside the label are now collected
//         and exactly one distinct value is required; a conflict blocks. Labels inside BOM rows are
//         now excluded on this branch too, not only on the removed fallback.
// v3.00 - The description is read from a verified cell in the same row and rechecked before clicks.
// v3.01 - The live DOAS markup confirms the semantic selector `td.col-description`. Read exactly one
//         such cell from the same row as the checkbox and supplier title. Zero or multiple cells make
//         the description unreadable and block; blank or em-dash text is a readable but missing value.
//         Header discovery and numeric column offsets are removed.
(() => {
  if(globalThis.doasDrawingBridge) return;
  globalThis.doasDrawingBridge=true;
  let busy=false;
  const pause=ms=>new Promise(r=>setTimeout(r,ms));
  const M=()=>globalThis.DrawingMatcher;
  // A label whose entire text is just a project label. Anchoring on the label's own text is what
  // makes the value trustworthy: a bare pattern match anywhere in the dialog would happily pick up a
  // supplier note or a row value.
  const PROJECT_LABEL=/^project(\s*(no\.?|number|#|id))?\s*:?\s*$/i;
  // Locate the project/line the page itself displays. Never the first element, never the first row,
  // never a majority. A value is trusted only when it is tied to a label, so a supplier note, a
  // heading or a row title can never supply the target; and when a label carries several distinct
  // values the evidence is ambiguous and blocks rather than being resolved by document order.
  function readProjectEvidence(dialog) {
    const all=[...dialog.querySelectorAll('*')];
    const rowNodes=[...dialog.querySelectorAll('tr')];
    const leaf=el=>!el.children||el.children.length===0;
    const inRow=el=>rowNodes.some(r=>r.contains(el));
    // A label is only a label OUTSIDE the BOM rows: a cell inside a row is a row value, not the
    // dialog's project field.
    const labelEls=all.filter(el=>leaf(el)&&!inRow(el)&&PROJECT_LABEL.test(el.textContent.trim()));
    if(!labelEls.length) {
      // No labelled project field at all. A project token elsewhere in the dialog is NOT evidence
      // about the current project: "Previous project: 001707-01" is a true number with the wrong
      // meaning. Report no header, so the target can only come from unanimous BOM rows and mixed
      // rows block. Reading a bare token here is what let an unrelated note authorise a target.
      return {headerPresent:false,headerValue:'',headerAnchor:'none'};
    }
    const values=new Set();
    for(const el of labelEls) {
      const parent=el.parentElement;
      if(!parent) return {headerPresent:true,headerValue:'',headerAnchor:'label-unreadable'};
      const children=[...(parent.children||[])];
      // Collect EVERY candidate value beside the label. Taking the first one that parses would make
      // the target depend on document order, which is the first-come-first-served rule this
      // verification exists to avoid.
      const found=new Set();
      for(const c of children) {
        if(c===el||!leaf(c)) continue;
        for(const v of M().projectLineTokens(c.textContent)) found.add(v);
      }
      // The value may also be the parent's own text rather than a sibling element. That is only safe
      // to read when nothing nested is in the way, because the parent text then concatenates leaves.
      if(!found.size&&children.every(c=>leaf(c))) {
        for(const v of M().projectLineTokens(parent.textContent)) found.add(v);
      }
      // Exactly one value beside the label is the only unambiguous case. None means the label is
      // unreadable; several means the page itself disagrees, so the target cannot be established.
      if(found.size!==1) return {headerPresent:true,headerValue:[...found].sort().join(' '),headerAnchor:found.size?'label-conflict':'label-unreadable'};
      values.add([...found][0]);
    }
    if(values.size===1) return {headerPresent:true,headerValue:[...values][0],headerAnchor:'label'};
    // Several labels that disagree are a conflict too, not a licence to pick one of them.
    return {headerPresent:true,headerValue:[...values].sort().join(' '),headerAnchor:'label-conflict'};
  }
  // The live page exposes a semantic description class. Exactly one cell in the SAME row is required;
  // no header, numeric position, decoy cell or whole-row text may supply the value.
  function descriptionFromRow(row) {
    const cells=[...row.querySelectorAll('td.col-description')];
    const cell=cells.length===1?cells[0]:null;
    const description=cell?cell.textContent.replace(/\s+/g,' ').trim():'';
    return {
      description,
      descriptionUnreadable:cells.length!==1,
      descriptionMissing:cells.length===1&&(!description||description==='—')
    };
  }
  // The description the audit approved must still be the description on the page (R4.7). A row whose
  // description is unreadable or different is never clicked, and neither is a row whose description the
  // audit did not carry: the request has to say what it expects, not hope for the best.
  function descriptionProblem(key,expected,row) {
    if(expected===undefined||expected==='') return null;   // no source description: nothing to compare
    const c=M().compareDescription(expected,row?.description,{unreadable:!!row?.descriptionUnreadable});
    if(c.state==='matched') return null;
    // The texts are quoted as they appear, not as they compare, so the difference can be read off.
    const shown=v=>v?`"${v}"`:'(none)';
    if(c.state==='unreadable-doas') return `The DOAS description for ${key} cannot be read from the table, so it cannot be compared.`;
    if(c.state==='missing-doas') return `The DOAS row for ${key} has no description; the audit expected ${shown(expected)}.`;
    return `The DOAS description for ${key} is ${shown(row?.description)} but the audit expected ${shown(expected)}.`;
  }
  function inspect() {
    if(location.origin!=='https://pixel-doas-system.web.app') throw Error('Wrong website.');
    const dialogs=[...document.querySelectorAll('[role="dialog"][aria-label="Create RFQ"]')].filter(d=>d.getClientRects().length);
    if(dialogs.length!==1) throw Error('Open exactly one Create RFQ dialog, then read the BOM again.');
    const dialog=dialogs[0];
    const markers=[...dialog.querySelectorAll('button.primary')].filter(b=>b.textContent.replace(/\s+/g,' ').trim()==='Create RFQ & Send Emails'&&b.getClientRects().length);
    if(markers.length!==1)throw Error('Open the RFQ dialog containing Create RFQ & Send Emails, then use Read & match again. No rows were selected.');
    const nodes=[...dialog.querySelectorAll('tr')].filter(r=>r.querySelector('input[type="checkbox"]'));
    const rows=nodes.map((r,i)=>{
      const boxes=r.querySelectorAll('input[type="checkbox"]'),titles=r.querySelectorAll('.supplierPartFull[title]');
      const box=boxes[0];
      const desc=descriptionFromRow(r);
      return {index:i,title:titles.length===1?titles[0].getAttribute('title'):'',checked:box.checked,disabled:box.disabled,ambiguous:boxes.length!==1||titles.length!==1,description:desc.description,descriptionUnreadable:desc.descriptionUnreadable,descriptionMissing:desc.descriptionMissing,text:r.textContent};
    });
    const tally=dialog.textContent.match(/(\d+)\s+of\s+(\d+)\s+items/);
    const selected=dialog.textContent.match(/Select BOM items\s*(\d+)\s+selected/);
    const evidence=readProjectEvidence(dialog);
    const rowProjectLines=M().rowProjectLines(rows);
    const target=M().verifyTarget({headerPresent:evidence.headerPresent,headerValue:evidence.headerValue,rowProjectLines});
    const summary={
      url:location.href,
      project:target.targetProjectLine||'unverified',
      targetProjectLine:target.targetProjectLine,
      targetVerified:target.targetVerified,
      targetSource:target.targetSource,
      targetReason:target.reason||'',
      headerPresent:evidence.headerPresent,
      headerAnchor:evidence.headerAnchor,
      // What the description comparison is anchored on, so the audit says how every cell was found.
      descriptionAnchor:'td.col-description',
      descriptionReadable:rows.length>0&&rows.every(r=>!r.descriptionUnreadable),
      rowProjectLines,
      shown:tally?Number(tally[1]):null,
      total:tally?Number(tally[2]):null,
      selected:selected?Number(selected[1]):null,
      rows
    };
    summary.fingerprint=JSON.stringify(summary);
    return {summary,nodes};
  }
  async function handle(message) {
    if(busy) throw Error('A selection is already in progress.');
    if(message.action==='scan') {
      const a=inspect().summary;await pause(350);const b=inspect().summary;
      if(a.fingerprint!==b.fingerprint) throw Error('The table is changing. Wait for loading to finish, then read again.');
      return b;
    }
    if(message.action!=='select') throw Error('Unknown action.');
    busy=true;const log=[];
    try {
      const before=inspect().summary;
      if(before.fingerprint!==message.fingerprint) throw Error('DOAS changed after the audit. Read BOM and audit again.');
      // The page has to prove its own project/line before anything is clicked, and it has to be the
      // same target the audit was approved against.
      if(!before.targetVerified) throw Error(before.targetReason||'The DOAS project/line cannot be verified. Selection is blocked.');
      if(before.targetProjectLine!==message.targetProjectLine) throw Error(`The DOAS project is now ${before.targetProjectLine}, not ${message.targetProjectLine||'(none)'}. Read BOM and audit again.`);
      if(!before.rows.length || before.shown!==before.rows.length || before.selected===null) throw Error('Cannot verify all displayed rows and selection count. Selection blocked.');
      const sources=message.sourceKeys||message.keys;
      if(!Array.isArray(sources)||sources.some(k=>M().parse(k)?.key!==k))throw Error('Invalid source identifiers.');
      const resolution=M().resolveGroups(sources.map(k=>M().parse(k)),before.rows,message.groupDecisions||{},before.targetProjectLine,before.fingerprint);
      if(resolution.errors.length)throw Error(resolution.errors.join(' '));
      // The resolution carries both keys: `key` is the reference identifier and `targetKey` is the row
      // it was approved to. The request is about the rows, so it is the target keys that must match.
      if(JSON.stringify(resolution.entries.map(r=>r.targetKey))!==JSON.stringify(message.keys))throw Error('Requested BOM identifiers do not match the approved project/line mappings.');
      if(resolution.entries.some(r=>r.state!=='matched'))throw Error('Every requested drawing must resolve to exactly one row at the verified DOAS project/line.');
      const keys=new Set(message.keys);
      if(!keys.size || keys.size!==message.keys.length || [...keys].some(k=>M().parse(k)?.key!==k)) throw Error('Invalid or duplicate requested identifiers.');
      if(before.selected!==before.rows.filter(r=>r.checked).length) throw Error('There are selected rows outside the loaded table. Clear them in DOAS first.');
      if(before.rows.some(r=>r.checked&&!keys.has(M().parse(r.title)?.key))) throw Error('Unrelated rows are selected. Clear those in DOAS before continuing.');
      for(const key of keys) {
        const matches=before.rows.filter(r=>M().parse(r.title)?.key===key);
        if(matches.length!==1 || matches[0].disabled || matches[0].ambiguous) throw Error(`Not one unambiguous enabled row: ${key}`);
      }
      // Nothing is clicked until every requested description has been re-read from the live row and
      // compared with the description the audit approved.
      const descriptions=message.descriptions||{};
      for(const key of keys) {
        const problem=descriptionProblem(key,descriptions[key],before.rows.find(r=>M().parse(r.title)?.key===key));
        if(problem) throw Error(`${problem} Read BOM and audit again. Nothing was clicked.`);
      }
      const shape=s=>JSON.stringify({url:s.url,project:s.project,shown:s.shown,total:s.total,rows:s.rows.map(({checked,...r})=>r)});
      const baseline=shape(before);
      for(const key of keys) {
        const now=inspect();
        if(shape(now.summary)!==baseline) throw Error('BOM content changed during selection. Stopped; review the partial-selection log.');
        const row=now.summary.rows.find(r=>M().parse(r.title)?.key===key);
        // Re-read immediately before this click: the table could have changed between rows.
        const problem=descriptionProblem(key,descriptions[key],row);
        if(problem) throw Error(`${problem} Stopped before clicking that row.`);
        if(!row.checked) {now.nodes[row.index].querySelector('input[type="checkbox"]').click();await pause(90);}
        const after=inspect().summary;
        if(!after.rows.find(r=>M().parse(r.title)?.key===key)?.checked) throw Error(`DOAS did not retain the checkbox: ${key}`);
        log.push({sourceKey:resolution.entries.find(r=>r.targetKey===key).sourceKey,key,result:row.checked?'Already selected':'Selected',time:new Date().toISOString()});
      }
      await pause(500);
      const final=inspect().summary;
      const checked=final.rows.filter(r=>r.checked).map(r=>M().parse(r.title)?.key);
      if(shape(final)!==baseline || checked.length!==keys.size || final.selected!==keys.size || checked.some(k=>!keys.has(k))) throw Error('Final selection does not equal the requested set. Review DOAS before continuing.');
      return {verified:true,selected:checked.length,log,targetProjectLine:final.targetProjectLine,snapshot:final};
    } catch(e) {return {verified:false,error:e.message,log};} finally {busy=false;}
  }
  globalThis.handle=handle;
})();
})(bridgeState,host.document,host.location);
(function(window,document,location,globalThis,DrawingMatcher,bridgeState,host){
// DOAS Drawing Matcher | v3.02 | 2026-10-18 | Codex
// Purpose: Folder search, offline OCR, audit review, and verified selection workflow.
// Change log: v1.01 - Initial release.
// v1.01 - Require Accept/Reject for line differences; bind decisions to current inputs and BOM.
// v1.02 - Auto-start from a chosen folder or chosen files. Ask only when a project or line number
//         differs, and continue automatically once the user confirms.
// v1.03 - Drop the pasted folder path and the native helper.
// v1.04 - Narrow two-column workspace. Reading the list runs the BOM read and the report by
//         itself, so the two buttons only retry. A failed BOM read is shown as an error.
// v1.05 - Reading screenshots now runs the same chain as reading a folder. The extracted text
//         becomes the reference list, and the BOM read, the report and the selection follow by
//         themselves. An unreadable screenshot or a failed BOM read is shown as an error.
//         Screenshots and a PDF folder are alternative sources, so supplying one clears the other.
// v1.07 - Three fixes. (1) A screenshot line that still looks like a drawing number but did not
//         parse is a lost identifier, so the extracted list is incomplete: it is listed in a
//         findings block and blocks selection, not just automatic selection, until the user
//         corrects the list or confirms those lines are not drawing numbers. Headings, column
//         labels and page numbers stay harmless and are only reported. (2) A project / line
//         decision is now stored per source identifier and target, so confirming a target resolves
//         that source and supersedes its other candidates instead of a later Skip overwriting the
//         acceptance; Undo clears the choice and restores every candidate. (3) Choosing PDFs now
//         clears the screenshot source, so a later OCR read cannot replace the filename list.
// v1.08 - Confirm the v1.07 rules and add the one action they imply. An item whose candidates are all
//         skipped still blocks the whole selection, so the reference list and the selected BOM rows
//         keep covering the same set; leaving that item out on purpose now needs a separate,
//         explicit Exclude action, which drops it from the selection set and records it in the
//         audit. Undo brings it back. The screenshot findings keep their explicit confirmation:
//         editing the reference list does not clear the block, and confirming the flagged lines
//         against the screenshot re-runs the match.
// v1.09 - Two OCR gaps reported against v1.08. (1) The detector call in the screenshot reader did not
//         pass the prefix, so the prefix-aware rule never fired: with a prefix filled in, a bare
//         four-digit line such as 2004 was treated as page text and an incomplete list could still be
//         selected automatically. The call now passes the prefix, and the helper is tested through
//         the call site rather than only directly. (2) The findings were cleared at the start of the
//         screenshot read, so a read that failed wiped the record of an incomplete list while that
//         list stayed in the reference box, leaving it selectable without the confirmation. The
//         findings are now cleared only once a fresh extraction has succeeded, and loading different
//         screenshots no longer clears them either, because the list they describe is still on screen.
// v2.00 - Project/line GROUP approval replaces per-drawing approval. The reference list is grouped by
//         the source project/line read from each filename, each group shows its drawing count, and the
//         mapping is approved once per group: "Approve 001707-02 -> 001707-01 for 8 drawings?". The
//         per-drawing Confirm / Skip panel is gone; the drawings stay visible under their group for
//         checking and inherit the group decision. The permitted target comes from the DOAS page,
//         established by evidence rather than assumption: a labelled project element that agrees with
//         the BOM rows, or, with no label at all, a single unanimous project across every valid row.
//         A malformed label, a label that disagrees with the rows, or several row projects with no
//         label all block. Every other project/line present in the BOM is reported as forbidden and
//         can never be selected. Excluding a whole group is the explicit way to leave it out, and
//         Undo mapping returns it to unresolved. Undo changes the mapping decision only: it does not
//         untick rows already selected in DOAS, and the panel says so.
// v2.01 - Target-verification corrections from an independent review; the group panel is unchanged.
//         The permitted target must come from a LABELLED project field or from unanimous BOM rows.
//         A project token found loose in the dialog (for example a note reading "Previous project:
//         001707-01") is no longer accepted as evidence, so an unlabelled page with mixed rows now
//         blocks instead of picking the number out of the note; and a label carrying two different
//         values blocks as ambiguous instead of taking whichever came first. The audit reports the
//         reason, naming the conflicting values when there are several.
// v2.02 - Declutter, at the user's request. The group panel said the same thing three times, so it is
//         now a heading ("DOAS project: <target>"), one count line ("<n> drawings · <m> approvals
//         needed"), one row per group (title, count with its state, the actions, and a "View drawings"
//         disclosure) and a single closing note. The stat row, the DOAS read line, the issue list, the
//         selection log and "How the BOM is read" move into a Details disclosure. The two retry
//         buttons become one Refresh button. The approval checkbox and the Select button are shown
//         only when manual review is required, i.e. when the run will not select by itself. The
//         status line no longer repeats the count and the instruction, because the panel states both
//         once: it reports the outcome ("Report ready. Selection waits on the mapping decision
//         below.") instead of a third copy of the same sentence.
// v2.03 - Two fixes reported from a real run. (1) A blocked selection gave no visible reason. The
//         refusal was correct - one drawing had no row at the verified DOAS project, so nothing was
//         clicked - but the reason lived only in the issue list inside the collapsed Details
//         disclosure, which made a correct refusal look exactly like nothing happening. A new
//         "Selection blocked" block sits in the pane, under the status line and outside Details, and
//         names each blocker in one short line using the part number and revision the user can look
//         up ("1 drawing missing at 001670-04 — 2312_B"). Unresolved project / line groups are
//         deliberately NOT repeated there, because the group panel already shows them with their own
//         actions. The short lines are also recorded in the audit as `blockers`, and the status line
//         reports the outcome ("Report ready. Nothing was selected.") rather than pointing at a list
//         the user cannot see. (2) The reference list held whole filenames, so a folder of drawings
//         produced a list twice as long as it needed to be. Matching never compares the description,
//         so the list now holds the identifier only - for the folder route and the screenshot route
//         alike. A filename that does NOT parse is still written in full rather than dropped, so a
//         malformed drawing number keeps showing up as an unrecognized reference line and keeps
//         blocking. The description and the original filename move to "View drawings", where each
//         drawing is listed as "<identifier> — <original filename>", and the report's path column is
//         unchanged. Also fixed while in this area: the unrecognized-reference-line message printed
//         the LINE NUMBERS instead of the offending lines, because reference() reports each invalid
//         entry as {line, text} and the message read `.line`. It now names the lines themselves.
// v2.04 - The count row is back in the pane, and it is the first check. Reference / PDF matches / BOM
//         matches / Selected / Issues are visible again, outside Details, with one line beneath them
//         that compares the quantities and says whether they agree. "Selected" is the count DOAS
//         itself confirmed - never the number that merely matched - so it reads "—" until the bridge
//         has verified the live table, and the row is re-rendered from that verified figure. Choosing a
//         folder now reports how many files it holds and how many of them are PDFs, because the other
//         file types are not counted and must not vanish silently. Duplicate PDFs, PDFs whose name is
//         not a drawing number, and unrecognized filenames are all named instead of dropped.
// v2.05 - Two counts are printed where the user was counting by eye. (1) The folder picker shows the
//         PDF count in parentheses beside the browser's own file count - "33 files (17 .pdf)" - so the
//         number the run actually uses sits on the label instead of one line below it. Only the .pdf
//         files are counted, and a folder with none says "(0 .pdf)" rather than nothing. Because the
//         label now carries that number, the line underneath no longer repeats it: it reports only
//         what was left out ("16 other files not counted from /drawings") and starts the run, so the
//         same count is never stated twice within two lines. (2) The Reference list heading carries
//         the number of items in the box - "Reference list (17)" - and is refreshed from the list
//         itself after every change, whether it came from a folder, a screenshot or typing, so it
//         cannot drift from what is on screen. An empty list reads "(0)".
// v3.00 - The whole filename is validated before it is shortened, and descriptions are compared
//         (PROJECT_REQUIREMENTS R3.1, R3.2, R4.1-R4.7, R5.1, R5.2). Every PDF is described once, through
//         M.describe(), so a filename carrying two drawing identifiers or a second shortened value is
//         reported and blocks instead of being shortened to the first one. The description that follows
//         the identifier is kept on the row, compared with the description read from the verified DOAS
//         description cell, and recorded in the audit; a difference, a missing description or an
//         unreadable description blocks and shows both texts. Ten quantities are now tallied in the pane
//         and in the audit: total files, PDFs found, valid PDFs, unique identifiers, invalid or ambiguous
//         PDFs, duplicate identifiers, exclusions, expected DOAS selections, identifier-and-description
//         matches and actual DOAS selections. Invalid and duplicate PDFs stay inside "PDFs found", so the
//         total can be checked against the folder. The request carries the approved description for every
//         row, so the bridge can re-read and re-compare it before it clicks anything.
// v3.01 - Read the confirmed same-row `td.col-description` selector directly. Zero or multiple cells
//         are unreadable; a blank or em dash is missing. Update the blocker wording to name this rule.
// v3.02 - Display Microsoft Edge as the verified compatible browser above the workspace title.
const VERSION='bookmark v1.01';
const $=id=>document.getElementById(id), M=DrawingMatcher;
const setText=(id,text)=>{const el=$(id);if(el)el.textContent=text;};
const setHidden=(id,on)=>{const el=$(id);if(el)el.hidden=on;};
const tabId=Number(new URLSearchParams(location.search).get('tab'));
let files=[],pictures=[],snapshot=null,report=null,selection=null,working=false,urls=[],groupDecisions={},autoSelection=false,sourceFolder='',fileRoute=false;
// What the folder picker actually returned. Only the .pdf files are used, but the totals are kept so the
// pane can say how many files were there and how many were counted: a file that is not a PDF must be
// visibly not counted, never silently dropped.
let folderTotal=0,folderOthers=[];
// Screenshot findings. ocrIgnored holds harmless page text. ocrDiscarded holds lines that still look
// like drawing numbers but could not be read, which makes the extracted list incomplete. ocrResolved
// stays null until the user either excludes those lines or confirms the missing numbers were added.
let ocrIgnored=[],ocrDiscarded=[],ocrResolved=null;
// Source project/line groups the user has decided on, keyed by the source group (for example
// "001707-02") and declared with the other run state above. A group is approved once for every
// drawing that shares it, or excluded as a whole. Approval is deliberately separate from skipping:
// nothing is ever approved automatically, not even the largest group, and any group left unresolved
// blocks the whole selection.
const status=text=>{setText('status',text);};
const showError=text=>{const el=$('error');if(el){el.textContent=text||'';el.hidden=!text;}};
function renderOcrFindings(){
  const host=$('ocrFindings');if(!host)return;
  setHidden('ocrFindings',!(ocrDiscarded.length||ocrIgnored.length));
  setHidden('ocrDiscardWrap',!ocrDiscarded.length);
  setText('ocrDiscardList',ocrDiscarded.join('\n'));
  setText('ocrDiscardNote',!ocrDiscarded.length?'':ocrResolved==='excluded'?'Excluded: you confirmed these lines are not drawing numbers. Matching ran again on the current list.':ocrResolved==='corrected'?'Confirmed: you checked the flagged lines against the screenshot. Matching ran again on the corrected list.':'These lines look like drawing numbers but could not be read, so the extracted list may be incomplete. Add the missing drawing numbers to the reference list, then confirm below that you checked the flagged lines against the screenshot. Editing the list on its own does not clear this block.');
  for(const id of ['ocrNotDrawings','ocrAdded']){const el=$(id);if(el)el.disabled=!!ocrResolved;}
  setHidden('ocrIgnoredWrap',!ocrIgnored.length);
  setText('ocrIgnored',ocrIgnored.join('\n'));
}
function clearOcrFindings(){ocrIgnored=[];ocrDiscarded=[];ocrResolved=null;renderOcrFindings();}
function invalidate(){groupDecisions={};$('groupChoices').replaceChildren();setHidden('manual',true);renderBlockers([]);report=null;selection=null;$('approved').checked=false;$('approved').disabled=true;$('select').disabled=true;$('export').disabled=true;$('summary').replaceChildren();setText('quantity','');$('quantity').className='tiny';setText('tally','');setText('groupInfo','');$('results').innerHTML='<tr><td colspan="4">Inputs changed. Build a new report.</td></tr>';$('issues').replaceChildren();$('selectionLog').textContent='';status('Build a new report to review the current inputs.');}
function lock(on){working=on;for(const id of ['folder','pdfFiles','images','scope','reference','reviewed','refresh','ocr']) $(id).disabled=on; if(!on)$('ocr').disabled=!pictures.length; $('select').disabled=on||!report?.canSelect||(!autoSelection&&!$('approved').checked);}
async function run(fn){if(working)return;showError('');lock(true);try{await fn();}catch(e){showError(e.message);status(e.message);}finally{lock(false);}}
async function bridge(action,extra={}) {
 if(host.closed)throw Error('The linked DOAS tab was closed. Reopen the bookmark from DOAS.');
 return await bridgeState.handle({action,...extra});
}
for(const id of ['scope','reference']) $(id).addEventListener('input',()=>{autoSelection=false;$('reviewed').checked=false;invalidate();if(id==='reference')renderRefCount();});
$('reviewed').addEventListener('change',invalidate);
// The folder label now carries the number the run actually uses - how many of the chosen files are
// PDFs - in parentheses beside the browser's own file count, so it is read at the picker instead of
// one line below it. Because the label states it, the line underneath deliberately does NOT repeat
// it: it reports only what the label cannot say, the files that were left out, so the same two
// numbers are never printed twice within two lines.
function folderSummary(folder=''){
  if(!folderTotal)return 'No files were chosen';
  const others=folderOthers.length;
  if(others)return `${others} other file${others===1?'':'s'} not counted${folder?' from '+folder:''}`;
  return `Every file${folder?' in '+folder:''} is a PDF`;
}
// The Reference list heading counts the items in the box, so the list never has to be counted by eye.
// The number is read from the textarea itself rather than from the last audit, which means it cannot
// drift from what is on screen: it is refreshed after every write to the box (a folder, a screenshot)
// as well as on every keystroke. Blank lines are not items, so they are not counted.
function renderRefCount(){
  const el=$('reference');if(!el)return;
  const count=el.value.split('\n').filter(line=>line.trim()).length;
  setText('refCount',`(${count})`);
}
function useFiles(list,folder=''){
  invalidate();
  // A PDF folder and screenshots are alternative sources, so choosing files clears the screenshot
  // side completely. Without this, a later "Read screenshots locally" click would replace the new
  // filename list with the previous, now stale, OCR text.
  urls.forEach(URL.revokeObjectURL);urls=[];pictures=[];$('previews').replaceChildren();
  $('images').value='';$('ocr').disabled=true;$('ocrStatus').textContent='';
  clearOcrFindings();
  // Only the .pdf files are used. The totals are kept as well, because a folder normally holds more
  // than drawings and a count that silently ignores the rest cannot be checked against the folder
  // itself: "33 files in the folder · 30 PDFs · 3 other files not counted" is verifiable, "30 PDF files
  // read" is not.
  const all=[...list];
  files=all.filter(f=>/\.pdf$/i.test(f.name));
  folderTotal=all.length;
  folderOthers=all.filter(f=>!/\.pdf$/i.test(f.name));
  // The picker's own label says "33 files". The number the run actually uses is the PDF count, so it
  // is printed in parentheses beside that label - "33 files (17 .pdf)" - and only when the files came
  // from a folder. A plain file choice has no folder behind it, and its own label already names them.
  setText('folderPdfs',all.some(f=>f.webkitRelativePath)?`(${files.length} .pdf)`:'');
  sourceFolder=folder;snapshot=null;autoSelection=true;fileRoute=true;
  // The reference list holds the identifier only. Matching never compares the description, and a list
  // of full filenames was long enough to read twice. A filename that does NOT parse is written in
  // full instead of being dropped: it then shows up as an unrecognized reference line and blocks, so
  // a malformed drawing number can never disappear silently. The description and the original
  // filename are kept for recognition under "View drawings" and in the report's path column.
  const scope=$('scope').value;
  $('reference').value=files.map(f=>M.parse(f.name,scope)?.key||f.name).join('\n');$('reviewed').checked=true;
  renderRefCount();
  $('folderInfo').textContent=`${folderSummary(folder)}. Matching starts automatically.`;
}
async function readAndMatch(){
  invalidate();snapshot=null;
  if(fileRoute&&!files.length)throw Error('No PDFs found. Choose a PDF folder or choose PDF files.');
  snapshot=await bridge('scan');
  $('bomInfo').textContent=`${snapshot.project} · ${snapshot.rows.length} loaded rows · displayed ${snapshot.shown ?? '?'} of ${snapshot.total ?? '?'} · ${snapshot.selected ?? '?'} selected`;
  audit();await selectIfReady();
}
async function selectIfReady(){if(autoSelection&&report?.canSelect)await selectReport();}
for(const id of ['folder','pdfFiles']) $(id).addEventListener('change',()=>run(async()=>{useFiles([...$(id).files]);await readAndMatch();}));
function setPictures(list){
  // Screenshots replace a PDF folder as the source, so the file side is cleared to avoid a stale mix.
  autoSelection=false;fileRoute=false;sourceFolder='';files=[];folderTotal=0;folderOthers=[];
  $('folder').value='';$('pdfFiles').value='';setText('folderPdfs','');
  $('folderInfo').textContent='Screenshots are the source for this run. Choose a PDF folder or PDF files to switch back.';
  urls.forEach(URL.revokeObjectURL);urls=[];pictures=list;$('previews').replaceChildren();
  for(const file of pictures){const img=document.createElement('img');img.src=URL.createObjectURL(file);urls.push(img.src);img.alt=file.name||'Pasted screenshot';$('previews').append(img);}
  // Loading different screenshots does NOT clear the findings. They describe the reference list that
  // is still in the box, and that list is only replaced once a fresh read has succeeded, so clearing
  // them here would drop the block while the incomplete list stayed selectable.
  $('ocr').disabled=!pictures.length;$('ocrStatus').textContent=`${pictures.length} screenshot(s) ready. Reading them builds the reference list and runs the rest by itself.`;
  $('reviewed').checked=false;invalidate();
}
$('images').addEventListener('change',()=>setPictures([...$('images').files]));
// Screenshot paste is unavailable in the PDF-only bookmark release.
$('ocr').addEventListener('click',()=>run(async()=>{
  // The findings are deliberately NOT cleared here. They describe the reference list currently on
  // screen, and that list is only replaced once a fresh extraction has succeeded. Clearing them up
  // front meant a read that failed wiped the record of an incomplete list while the list itself
  // stayed in the reference box, which left it selectable without the required confirmation.
  invalidate();let worker;
  try {
    const local=p=>new URL('vendor/'+p,location.href).href;
    worker=await Tesseract.createWorker('eng',1,{workerPath:local('worker.min.js'),corePath:local(''),langPath:local('').replace(/\/$/,''),workerBlobURL:false,logger:m=>{$('ocrStatus').textContent=`${m.status} ${Math.round((m.progress||0)*100)}%`;}});
    const texts=[];
    for(let i=0;i<pictures.length;i++){const result=await worker.recognize(pictures[i]);texts.push(result.data.text);}
    // The extraction succeeded, so the list is about to be replaced and the previous findings no
    // longer describe it.
    clearOcrFindings();
    // A screenshot carries headings, column labels and page numbers, but it also carries the drawing
    // numbers themselves. Sort every non-empty line into three buckets: kept, noise, and lost
    // identifiers. A line that still looks like a drawing number but did not parse means OCR damaged
    // it, so the list would be silently incomplete. Noise on its own is harmless.
    const kept=[],noise=[],lost=[];
    for(const line of texts.join('\n').split(/\r?\n/)){
      const text=line.trim();
      if(!text)continue;
      const scope=$('scope').value;
      const one=M.reference(text,scope);
      // Keep the identifier only: a screenshot line often carries a description after the drawing
      // number, and matching never compares it. The raw line is still what the findings above judge,
      // so a damaged number is classified exactly as before.
      if(one.entries.length===1&&!one.invalid.length){kept.push(one.entries[0].key);continue;}
      // The prefix has to reach the detector as well: with a prefix the screenshot's numbers are the
      // shortened form, so a bare four-digit line is a shortened number whose revision was lost.
      // Omitting it here meant such a line was written off as page text and the incomplete list could
      // still be selected automatically.
      if(M.looksLikeIdentifier(text,scope))lost.push(text);else noise.push(text);
    }
    ocrIgnored=noise;ocrDiscarded=lost;
    if(!kept.length){
      $('reference').value='';
      renderRefCount();
      $('ocrStatus').textContent=lost.length?`No usable identifier could be read, and ${lost.length} drawing-like line(s) were damaged: ${lost.slice(0,3).join(' | ')}${lost.length>3?' …':''}. Check the screenshot quality and the prefix field, or type the reference list by hand.`:'No usable identifiers were found in the extracted text. Check the screenshot quality and the prefix field, or type the reference list by hand.';
      renderOcrFindings();
      return;
    }
    $('reference').value=kept.join('\n');
    renderRefCount();
    if(lost.length){
      // A drawing number was discarded, so the extracted list is incomplete and must never be
      // selected by itself. The findings block carries the two ways to clear the block.
      autoSelection=false;$('reviewed').checked=false;
      $('ocrStatus').textContent=`Text extracted: ${kept.length} identifier(s) kept, but ${lost.length} drawing-like line(s) could not be read. The list may be incomplete, so it will not be selected until you resolve it below.`;
    }else{
      // The screenshot is the source, so the list counts as built and the chain runs without a click.
      autoSelection=true;$('reviewed').checked=true;
      const note=noise.length?` ${noise.length} other line(s) ignored: ${noise.slice(0,2).join(' | ')}${noise.length>2?' …':''}.`:'';
      $('ocrStatus').textContent=`Text extracted: ${kept.length} identifier(s) kept.${note} Reading the DOAS BOM and building the report now.`;
    }
    renderOcrFindings();
    await readAndMatch();
  } finally {if(worker)await worker.terminate();}
}));
// Resolving the findings is an explicit act, and it re-runs the match so the corrected list is what
// gets reported. Editing the reference list on its own never clears the block.
const resolveOcr=mode=>run(async()=>{
  ocrResolved=mode;renderOcrFindings();
  setText('ocrStatus',mode==='excluded'?'Findings excluded. Matching again on the current list.':'Findings confirmed against the screenshot. Matching again on the corrected list.');
  await readAndMatch();
});
$('ocrNotDrawings').addEventListener('click',()=>resolveOcr('excluded'));
$('ocrAdded').addEventListener('click',()=>resolveOcr('corrected'));
$('refresh').addEventListener('click',()=>run(readAndMatch));
// One approval covers a whole source project/line group, so the decision is keyed by the group. The
// fingerprint is the BOM snapshot the approval was given against: re-reading DOAS, or reading a
// different project, makes every approval stale and they have to be given again.
function approveGroup(sourceGroup,targetProjectLine){
  groupDecisions[sourceGroup]={decision:'approved',targetProjectLine,fingerprint:snapshot?.fingerprint||'',approvedAt:new Date().toISOString(),decidedAt:new Date().toISOString()};
}
// Excluding a group is the explicit way to leave it out of the selection without approving a mapping.
function excludeGroup(sourceGroup){groupDecisions[sourceGroup]={decision:'excluded',targetProjectLine:'',fingerprint:'',excludedAt:new Date().toISOString(),decidedAt:new Date().toISOString()};}
// Undo changes the mapping decision only. It never unticks rows already selected in DOAS.
function undoGroup(sourceGroup){delete groupDecisions[sourceGroup];}
function groupDecisionState(sourceGroup,targetProjectLine){
  const d=groupDecisions[sourceGroup];
  if(d?.decision==='excluded')return 'excluded';
  if(targetProjectLine&&sourceGroup===targetProjectLine)return 'exact';
  if(d?.decision==='approved'&&d.targetProjectLine===targetProjectLine&&d.fingerprint===(snapshot?.fingerprint||''))return 'approved';
  return 'unresolved';
}
function audit(){
  selection=null;$('selectionLog').textContent='';$('approved').checked=false;
  // The heading counts what is actually in the box, so it is refreshed here as well: this is the one
  // place that reads the list for a run, and it keeps the number true for any write that did not come
  // through the input handler.
  renderRefCount();
  const ref=M.reference($('reference').value,$('scope').value);
  // Every filename is described ONCE, and only an accepted description may be shortened. `detail` keeps
  // the reason a name was refused, so a blocker can say which second drawing value was found instead of
  // only that the name was unreadable (PROJECT_REQUIREMENTS R3.1, R3.2).
  const pdfRows=files.map(f=>{
    const detail=M.describe(f.name,$('scope').value);
    return {title:f.name,path:f.webkitRelativePath||f.name,file:f,detail,parsed:detail.ok?{key:detail.key,base:detail.base,revision:detail.revision}:null,description:detail.ok?detail.description:''};
  });
  const normalizedPdfs=pdfRows.map(p=>({...p,title:p.parsed?.key||p.title}));
  // Two files with the same drawing number are not interchangeable: the extension cannot know which
  // one is the drawing, so neither is used and BOTH are named. Silently taking the first file found is
  // how a wrong revision gets selected, so a duplicate is flagged here and blocks.
  const pdfKeyList=pdfRows.filter(p=>p.parsed).map(p=>p.parsed.key);
  const duplicatePdfs=[...new Set(pdfKeyList)].filter(k=>pdfKeyList.filter(x=>x===k).length>1).sort();
  // A filename that carries a second drawing value is not merely unreadable: it names two drawings, and
  // shortening it to the first one is exactly how a wrong row could be selected. These are counted as
  // invalid PDFs as well, because they cannot be used as they stand (R3.1, R3.2).
  const ambiguousPdfs=pdfRows.filter(p=>!p.detail.ok&&(p.detail.reason==='two-identifiers'||p.detail.reason==='second-short-value'));
  const invalidPdfs=pdfRows.filter(p=>!p.detail.ok);
  // A filename that names two drawings is also an invalid reference line, because the folder route
  // writes the refused name into the list. That is one cause, not two: the file is reported once, under
  // the wording that says what to do about it (rename the file).
  const ambiguousNames=new Set(ambiguousPdfs.map(p=>p.title.trim()));
  const otherInvalid=ref.invalid.filter(i=>!ambiguousNames.has(String(i.text).trim()));
  // On the folder route the reference list is generated FROM the filenames, so two files with the same
  // drawing number also produce a duplicated reference line. That is one cause, not two, and the PDF
  // wording is the actionable one: a key already named as a duplicate PDF is not reported again as a
  // duplicated reference line.
  const duplicateRefs=ref.duplicates.filter(k=>!duplicatePdfs.includes(k));
  // The target project/line is whatever the DOAS page proved. When it could not be verified there is
  // no target at all, so nothing can be mapped and selection stays blocked.
  const target={projectLine:snapshot?.targetProjectLine||'',verified:!!snapshot?.targetVerified,source:snapshot?.targetSource||'none',reason:snapshot?.targetReason||'',rowProjectLines:snapshot?.rowProjectLines||[]};
  const effectiveTarget=target.verified?target.projectLine:'';
  const resolution=M.resolveGroups(ref.entries,snapshot?.rows||[],groupDecisions,effectiveTarget,snapshot?.fingerprint||'');
  const pdfMatches=M.compare(ref.entries,normalizedPdfs);
  const groups=M.groupEntries(ref.entries);
  const rows=resolution.entries.map((r,i)=>{
    const bom=!snapshot?'Not read':r.state==='excluded'?'Excluded by you':r.state==='matched'&&r.targetKey!==r.key?'Approved project / line change':r.state==='matched'?'Matched':r.state==='forbidden-only'?'Only under a forbidden project / line':r.state==='unresolved'?'Awaiting the group mapping':r.state==='duplicate'?'Duplicate':'Missing';
    // The description comparison (PROJECT_REQUIREMENTS R4.1-R4.5). The source side is the PDF filename
    // when a folder supplied one, otherwise the description typed beside the identifier. The DOAS side is
    // the exact same-row `td.col-description` cell read by the bridge.
    const pdfRow=pdfRows.find(p=>p.parsed?.key===r.key);
    const bomRow=(snapshot?.rows||[]).find(x=>M.parse(x.title)?.key===r.targetKey);
    const pdfDescription=pdfRow?pdfRow.description:(r.description||'');
    const bomDescription=bomRow?.description||'';
    let descriptionState;
    if(r.state!=='matched')descriptionState='not-compared';
    // A typed or screenshot list has no filename to take a description from, so there is nothing to
    // compare and the manual review tick is the acknowledgement. With a folder, a filename without a
    // description is a missing description and blocks.
    else if(!pdfDescription)descriptionState=files.length?'missing-source':'not-compared';
    else descriptionState=M.compareDescription(pdfDescription,bomDescription,{unreadable:!!bomRow?.descriptionUnreadable}).state;
    return {...r,excluded:r.state==='excluded',pdf:files.length?pdfMatches[i].status:'Not loaded',bom,pdfPaths:pdfRows.filter(p=>p.parsed?.key===r.key).map(p=>p.path),pdfAlternatives:pdfMatches[i].alternatives,bomAlternatives:r.forbiddenAlternatives||[],pdfDescription,bomDescription,descriptionState};
  });
  // The reference list and the selected BOM rows must cover the same set, so an excluded group is
  // outside the requested set entirely: not required to match and never sent to DOAS.
  const requested=rows.filter(r=>!r.excluded);
  // The BOM identifiers the request is actually about. Shared by the issue list and the visible
  // blocker block below, so both agree on what was asked for.
  const wanted=new Set(requested.map(r=>r.targetKey));
  const unresolvedGroups=groups.filter(g=>groupDecisionState(g.sourceGroup,effectiveTarget)==='unresolved');
  const excludedGroups=groups.filter(g=>groupDecisionState(g.sourceGroup,effectiveTarget)==='excluded');
  const issues=[...resolution.errors];
  if(!ref.entries.length)issues.push('No valid reference identifiers.');
  if(otherInvalid.length)issues.push(`Unrecognized reference lines: ${otherInvalid.map(i=>i.text).join(', ')}. Correct or remove them.`);
  if(duplicateRefs.length)issues.push(`Duplicate reference identifiers: ${duplicateRefs.join(', ')}. Remove duplicates before selecting.`);
  // The permitted target has to come from the page. Without it nothing can be mapped, so the whole
  // run stays blocked rather than falling back to a guess.
  if(snapshot&&!target.verified)issues.push(`The DOAS project / line could not be verified, so no mapping can be approved. ${target.reason||''} Selection is blocked.`);
  if(!snapshot)issues.push('Read the DOAS BOM to enable selection.');
  // Every group must be approved, excluded, or removed from the reference list. Nothing is ever
  // accepted automatically, not even the largest group.
  for(const g of unresolvedGroups)issues.push(`Project / line group ${g.sourceGroup} (${noun(g.files.length)}) has no approved mapping${target.verified?` to ${target.projectLine}`:''}. Approve the mapping, exclude the group, or remove its files from the reference list.`);
  const forbiddenOnly=rows.filter(r=>r.state==='forbidden-only');
  if(forbiddenOnly.length)issues.push(`${forbiddenOnly.length} drawing(s) exist only under a forbidden DOAS project / line and cannot be selected: ${forbiddenOnly.slice(0,5).map(r=>`${r.key} (${[...new Set(r.bomAlternatives.map(k=>M.projectLine(k)))].join(', ')})`).join(' | ')}${forbiddenOnly.length>5?' …':''}. Approve a different target or remove them from the list.`);
  const missingRows=rows.filter(r=>r.state==='missing');
  // The filter hint is the one thing a person can act on when a row is missing: the extension only
  // ever sees the rows DOAS has loaded and displayed, so a filtered or virtualised table looks the
  // same as a row that does not exist. It belongs in the technical record, not on the short blocker
  // line, which has to stay readable at a glance.
  if(missingRows.length)issues.push(`${missingRows.length} reference item(s) have no row at the verified DOAS project / line${target.projectLine?` ${target.projectLine}`:''}: ${missingRows.slice(0,5).map(r=>r.key).join(', ')}${missingRows.length>5?' …':''}. Check whether DOAS has that part number and revision at all, or whether the current filter or an unloaded part of the table hides it. Revision differences and duplicates are never substituted.`);
  const duplicateRows=rows.filter(r=>r.state==='duplicate');
  if(duplicateRows.length)issues.push(`Duplicate DOAS rows for: ${duplicateRows.map(r=>r.targetKey).join(', ')}. Resolve them in DOAS, then read the BOM again.`);
  // An incomplete screenshot list is never selectable until the user resolves it. Setting
  // autoSelection to false is not enough on its own: the report must refuse to select as well.
  if(ocrDiscarded.length&&!ocrResolved)issues.push(`${ocrDiscarded.length} line(s) in the screenshot look like drawing numbers but could not be read, so the reference list may be incomplete: ${ocrDiscarded.slice(0,5).join(' | ')}${ocrDiscarded.length>5?' …':''}. Add the missing drawing numbers to the list, or confirm those lines are not drawing numbers.`);
  if(rows.length&&!requested.length)issues.push('Every project / line group is excluded, so there is nothing left to select. Undo a group first.');
  if(!autoSelection&&!$('reviewed').checked)issues.push('Review the manually entered reference list and tick the source-check box.');
  if(snapshot){
    if(snapshot.shown!==snapshot.rows.length || snapshot.selected===null)issues.push('Displayed row coverage or selected count cannot be verified. Selection is blocked.');
    if(snapshot.selected!==snapshot.rows.filter(r=>r.checked).length)issues.push('DOAS has selections outside the loaded rows. Clear those in DOAS and read again.');
    const extras=snapshot.rows.filter(r=>r.checked&&!wanted.has(M.parse(r.title)?.key));
    if(extras.length)issues.push(`Unrelated selected rows: ${extras.map(r=>r.title||'(unknown identifier)').join(', ')}. Clear these in DOAS and read again.`);
    if(snapshot.rows.some(r=>wanted.has(M.parse(r.title)?.key)&&(r.disabled||r.ambiguous)))issues.push('A requested BOM row is disabled or has ambiguous controls.');
  }
  // Name the PDFs that are not exactly one file, instead of saying only that something is wrong: an
  // unmatched or duplicated drawing is the one thing the user has to go and fix in the folder.
  const pdfProblems=requested.filter(r=>r.pdf!=='Matched');
  if(files.length&&pdfProblems.length)issues.push(`Every reference must have exactly one matching PDF when a folder is supplied. ${pdfProblems.length} do not: ${pdfProblems.slice(0,5).map(r=>`${M.shortKey(r.key)} (${r.pdf})`).join(', ')}${pdfProblems.length>5?' …':''}. Resolve missing files, revisions and duplicates.`);
  if(duplicatePdfs.length)issues.push(`${duplicatePdfs.length} drawing number(s) have more than one PDF in the folder: ${duplicatePdfs.join(', ')}. Keep exactly one file per drawing number; the extension will not choose between them.`);
  // A filename with two drawing values is refused whole, and the reason names the second value, so the
  // file can be renamed rather than guessed at.
  if(ambiguousPdfs.length)issues.push(`${ambiguousPdfs.length} PDF filename(s) carry more than one drawing value and cannot be used: ${ambiguousPdfs.slice(0,5).map(p=>`${p.title} (${p.detail.reason==='two-identifiers'?'second identifier':'second drawing value'}: ${p.detail.detail||'?'})`).join(' | ')}${ambiguousPdfs.length>5?' …':''}. Rename the file so it holds exactly one drawing identifier followed by its description, then read the folder again.`);
  // ---------------------------------------------------------------- descriptions (R4.1-R4.5)
  // The description is compared, so a difference is a blocking fact rather than a note. Both texts are
  // named: the user has to be able to see which side is wrong without opening the file or DOAS.
  const descDiffers=requested.filter(r=>r.descriptionState==='differs');
  const descMissingSource=requested.filter(r=>r.descriptionState==='missing-source');
  const descMissingDoas=requested.filter(r=>r.descriptionState==='missing-doas');
  const descUnreadable=requested.filter(r=>r.descriptionState==='unreadable-doas');
  const describeRow=r=>`${M.shortKey(r.key)} — PDF "${r.pdfDescription||'(none)'}" vs DOAS "${r.bomDescription||'(none)'}"`;
  if(descDiffers.length)issues.push(`${descDiffers.length} description(s) differ between the PDF filename and the DOAS row: ${descDiffers.slice(0,5).map(describeRow).join(' | ')}${descDiffers.length>5?' …':''}. Correct the filename or the DOAS row; a description is never ignored or guessed.`);
  if(descMissingSource.length)issues.push(`${descMissingSource.length} PDF filename(s) carry no description: ${descMissingSource.slice(0,5).map(r=>M.shortKey(r.key)).join(', ')}${descMissingSource.length>5?' …':''}. A filename must read "<identifier> <description>.pdf", because the description is part of what is checked.`);
  if(descMissingDoas.length)issues.push(`${descMissingDoas.length} DOAS row(s) carry no description: ${descMissingDoas.slice(0,5).map(r=>M.shortKey(r.targetKey)).join(', ')}${descMissingDoas.length>5?' …':''}. The DOAS description cell is empty, so the description cannot be checked.`);
  if(descUnreadable.length)issues.push(`Exactly one same-row td.col-description could not be read for ${descUnreadable.length} drawing(s), so their descriptions cannot be compared. Decoy cells and whole-row text are ignored. Selection is blocked.`);
  // ---------------------------------------------------------------- why the run cannot select
  // A block the user cannot see is indistinguishable from nothing happening, so every reason is also
  // stated in one short line and rendered in the pane rather than only inside Details. Each line names
  // the drawing by its part number and revision (2312_B) — that is what can be looked up in DOAS, and
  // the project and module are already stated by the line itself.
  //
  // An unresolved project / line group is deliberately NOT listed here: the group panel above already
  // shows it, with its own actions. Repeating it in the block would be the duplication v2.02 removed.
  const list=(items,max=4)=>{const shown=items.slice(0,max).join(', ');return items.length>max?`${shown} and ${items.length-max} more`:shown;};
  const plural=(n,one,many=`${one}s`)=>`${n} ${n===1?one:many}`;
  const blockers=[];
  if(!snapshot)blockers.push('the DOAS BOM has not been read');
  if(snapshot&&!target.verified)blockers.push(`the DOAS project could not be verified — ${target.reason||'no labelled project field and no single row project'}`);
  if(missingRows.length)blockers.push(`${plural(missingRows.length,'drawing')} missing at ${target.projectLine||'the verified project'} — ${list(missingRows.map(r=>M.shortKey(r.targetKey||r.key)))}`);
  if(forbiddenOnly.length)blockers.push(`${plural(forbiddenOnly.length,'drawing')} exist${forbiddenOnly.length===1?'s':''} only under another project / line — ${list(forbiddenOnly.map(r=>M.shortKey(r.key)))}`);
  if(duplicateRows.length)blockers.push(`${plural(duplicateRows.length,'duplicate DOAS row')} — ${list(duplicateRows.map(r=>M.shortKey(r.targetKey)))}`);
  if(duplicateRefs.length)blockers.push(`${plural(duplicateRefs.length,'duplicated reference line')} — ${list(duplicateRefs.map(k=>M.shortKey(k)))}`);
  // Descriptions (R4.5): the block names the drawing, and both texts are in the issue list and in the
  // report's Details column, so the short line stays readable and the evidence is still on screen.
  if(descDiffers.length)blockers.push(`${plural(descDiffers.length,'description')} differ${descDiffers.length===1?'s':''} from DOAS — ${list(descDiffers.map(r=>M.shortKey(r.key)))}`);
  if(descMissingSource.length)blockers.push(`${plural(descMissingSource.length,'filename')} without a description — ${list(descMissingSource.map(r=>M.shortKey(r.key)))}`);
  if(descMissingDoas.length)blockers.push(`${plural(descMissingDoas.length,'DOAS row')} without a description — ${list(descMissingDoas.map(r=>M.shortKey(r.targetKey)))}`);
  if(descUnreadable.length)blockers.push('exactly one same-row td.col-description could not be read, so descriptions cannot be compared');
  if(otherInvalid.length)blockers.push(`${plural(otherInvalid.length,'reference line')} not recognised as a drawing number — ${list(otherInvalid.map(i=>i.text))}`);
  // A file naming two drawings is listed by its own name, because that is what has to be renamed.
  if(ambiguousPdfs.length)blockers.push(`${plural(ambiguousPdfs.length,'PDF filename')} with more than one drawing value — ${list(ambiguousPdfs.map(p=>p.title))}`);
  if(!ref.entries.length&&!ref.invalid.length)blockers.push('the reference list is empty');
  if(ocrDiscarded.length&&!ocrResolved)blockers.push(`${plural(ocrDiscarded.length,'screenshot line')} look like drawing numbers but could not be read — ${list(ocrDiscarded)}`);
  if(rows.length&&!requested.length)blockers.push('every project / line group is excluded, so there is nothing left to select');
  if(!autoSelection&&!$('reviewed').checked)blockers.push('the reference list is not confirmed — tick the source-check box beside it');
  for(const e of resolution.errors)blockers.push(e.replace(/\.$/,''));
  if(snapshot){
    if(snapshot.shown!==snapshot.rows.length||snapshot.selected===null)blockers.push('the loaded DOAS rows do not cover the whole table, so the selection cannot be verified');
    if(snapshot.selected!==snapshot.rows.filter(r=>r.checked).length)blockers.push('DOAS has selections outside the loaded rows');
    const extras=snapshot.rows.filter(r=>r.checked&&!wanted.has(M.parse(r.title)?.key));
    if(extras.length)blockers.push(`${plural(extras.length,'unrelated selected row')} in DOAS — ${list(extras.map(r=>M.shortKey(M.parse(r.title)?.key||r.title)))}`);
    if(snapshot.rows.some(r=>wanted.has(M.parse(r.title)?.key)&&(r.disabled||r.ambiguous)))blockers.push('a requested BOM row is disabled or has ambiguous controls');
  }
  if(files.length&&pdfProblems.length){
    const pdfMissing=pdfProblems.filter(r=>r.pdf!=='Duplicate');
    if(pdfMissing.length)blockers.push(`${plural(pdfMissing.length,'drawing')} without exactly one PDF — ${list(pdfMissing.map(r=>M.shortKey(r.key)))}`);
    if(duplicatePdfs.length)blockers.push(`${plural(duplicatePdfs.length,'drawing number')} with more than one PDF — ${list(duplicatePdfs.map(M.shortKey))}`);
  }
  const unused=pdfRows.filter(p=>!ref.entries.some(r=>r.key===p.parsed?.key));
  // Every file that is not used is listed, including the ones that are not PDFs at all. "Not used" and
  // "not there" are different states, and a file that vanishes without a line cannot be checked.
  const notUsed=[...unused.map(p=>({path:p.path,label:p.parsed?'Not requested':(p.detail.reason==='two-identifiers'||p.detail.reason==='second-short-value'?'More than one drawing value':'Unrecognized filename'),recognized:!!p.parsed})),
    ...folderOthers.map(f=>({path:f.webkitRelativePath||f.name,label:'Not a PDF, not counted',recognized:false}))];
  $('otherFiles').textContent=notUsed.length?notUsed.map(x=>`${x.label}: ${x.path}`).join('\n')
    :files.length?'All PDFs are represented in the reference list.':'No PDF folder supplied.';
  report={
    version:VERSION,time:new Date().toISOString(),sourceFolder,automatic:autoSelection,scope:$('scope').value,sourceText:$('reference').value,
    reference:ref,rows,issues,
    // The short, visible form of the same reasons: one line per blocker, shown in the pane. Recorded
    // in the audit as well, so an exported report says plainly why nothing was selected.
    blockers,requested:requested.map(r=>r.key),
    // The reference set (requested) and the identifiers that will actually be clicked in DOAS
    // (selected) are both recorded, so the audit shows the mapping that was applied.
    selected:requested.map(r=>r.targetKey),
    target:{projectLine:target.projectLine,verified:target.verified,source:target.source,reason:target.reason,rowProjectLines:target.rowProjectLines},
    forbiddenTargets:resolution.forbiddenTargets,
    // The audit records the source group, the approved target, the files it covers and its exclusions.
    groups:groups.map(g=>({
      sourceGroup:g.sourceGroup,
      count:g.files.length,
      files:g.files.map(f=>f.key),
      state:groupDecisionState(g.sourceGroup,effectiveTarget),
      approvedTarget:groupDecisions[g.sourceGroup]?.decision==='approved'?groupDecisions[g.sourceGroup].targetProjectLine:null,
      approvedAt:groupDecisions[g.sourceGroup]?.approvedAt||null,
      excludedAt:groupDecisions[g.sourceGroup]?.excludedAt||null
    })),
    excludedGroups:excludedGroups.map(g=>g.sourceGroup),
    groupDecisions:JSON.parse(JSON.stringify(groupDecisions)),
    ocrIgnored:[...ocrIgnored],ocrDiscarded:[...ocrDiscarded],ocrResolved,
    canSelect:issues.length===0&&unresolvedGroups.length===0&&requested.length>0,
    // The quantity check. `counts` is what the pane renders and the numbers that have to agree;
    // `folder` records what the picker actually returned, so an exported audit shows what was counted
    // and what was left out for being another file type. `pdfs` is null when no folder was supplied:
    // PDF matching does not apply to a typed list, and a zero there would read as a failed match.
    // `pendingMapping` is how many groups have not been decided yet: while one is outstanding the BOM
    // count is not knowable, so the row shows "—" instead of a zero that reads as a failure.
    counts:{
      // The ten quantities of PROJECT_REQUIREMENTS R5.1. Invalid and duplicate PDFs stay INSIDE
      // `pdfsFound`, so the total can be tallied against the folder itself rather than against a
      // filtered view of it (R5.2). `actualSelections` is filled in once DOAS has answered.
      totalFiles:folderTotal,
      pdfsFound:files.length,
      validPdfs:pdfRows.filter(p=>p.parsed).length,
      uniqueIdentifiers:new Set(pdfKeyList).size,
      invalidPdfs:invalidPdfs.length,
      duplicateIdentifiers:duplicatePdfs.length,
      exclusions:rows.filter(r=>r.excluded).length,
      expectedSelections:requested.length,
      descriptionMatches:requested.filter(r=>r.descriptionState==='matched').length,
      actualSelections:null,
      // The four figures the count row compares.
      reference:requested.length,pdfs:files.length?requested.filter(r=>r.pdf==='Matched').length:null,bom:requested.filter(r=>r.state==='matched').length,pendingMapping:unresolvedGroups.length},
    folder:{total:folderTotal,pdfs:files.length,others:folderOthers.map(f=>f.webkitRelativePath||f.name)},
    duplicatePdfs,
    bom:snapshot,otherFiles:notUsed
  };
  // The count row is the first check: the numbers that have to agree, visible in the pane. The counts
  // that are not part of that check stay in the technical record instead of filling the row.
  renderCounts();renderQuantity();renderTally();
  setText('groupInfo',groups.length?`Groups: ${groups.length} · awaiting a mapping: ${unresolvedGroups.length} · excluded: ${excludedGroups.length}`:'');
  $('issues').replaceChildren();issues.forEach(t=>{const p=document.createElement('div');p.textContent='• '+t;$('issues').append(p);});
  // The original filename and description of each requested drawing, so a group can list its drawings
  // recognisably even though the reference list carries identifiers only (R4.6: the description stays
  // under View drawings even when the compact display drops it).
  const pdfInfo=new Map(pdfRows.filter(p=>p.parsed).map(p=>[p.parsed.key,{title:p.title,description:p.description}]));
  renderGroups(groups,target,pdfInfo);
  // The visible reason a run cannot select. Rendered here, in the pane, and never inside Details: a
  // block the user cannot see is indistinguishable from nothing happening at all.
  renderBlockers(blockers);
  // The approval checkbox and the Select button appear only when a manual decision is actually
  // required. On the folder and screenshot routes the run selects by itself once every group is
  // settled, so showing them there was noise.
  setHidden('manual',!( !autoSelection&&report.canSelect ));
  $('approved').disabled=!report.canSelect;$('select').disabled=true;$('export').disabled=false;
  // The panel below already carries the count, the per-group state and the note that the run
  // continues once a mapping is approved, so the status line reports the outcome only. When the run is
  // blocked, the reason is in the block directly below this line and is not restated here.
  const headline=unresolvedGroups.length?'Report ready. Selection waits on the mapping decision below.'
    :report.canSelect?(autoSelection?'All requested items match. Selecting the BOM rows…':'All requested items match. Approve the manual reference to select.')
    :blockers.length?'Report ready. Nothing was selected.'
    :'Report ready. Resolve the listed issues before selecting in DOAS.';
  status(headline+(excludedGroups.length?` ${excludedGroups.length} group(s) excluded by you and not selected.`:''));
  render();
}
// The project/line group panel. One decision per source group covers every drawing that shares it,
// which is why the per-drawing Confirm / Skip buttons are gone: the drawings stay listed for checking
// and inherit whatever the group decides. Deliberately terse — a heading, one count line, one row per
// group and a single closing note. Everything technical (the stat row, the DOAS read line, the issue
// list and the selection log) lives in the Details disclosure rather than being repeated here.
const noun=n=>`${n} ${n===1?'drawing':'drawings'}`;
// The visible block. Deliberately outside the Details disclosure: the reason a run cannot select is
// the single most important thing on the page when it happens, and hiding it is what made a correct
// refusal look like nothing happening at all.
function renderBlockers(blockers){
  const list=$('blockedList');list.replaceChildren();
  setHidden('blocked',!blockers.length);
  if(!blockers.length)return;
  $('blockedHead').textContent=blockers.length===1?'Selection blocked':`Selection blocked — ${blockers.length} reasons`;
  for(const b of blockers){const span=document.createElement('span');span.textContent=b+'.';list.append(span);}
}
// The count row: the first check, and the numbers that have to agree. "Selected" is the figure DOAS
// itself confirmed, so it reads "—" until the bridge has verified the live table. A matched count is not
// a selection, and showing one as the other would overstate what actually happened in DOAS.
function renderCounts(){
  const host=$('summary');if(!host)return;
  host.replaceChildren();
  const c=report?.counts;if(!c)return;
  const selected=selection?.verified?selection.selected:null;
  // A mapping that has not been decided leaves no target to look the drawings up at, so the BOM count
  // is not knowable yet. "—" says that; a 0 would read as "nothing matched".
  const bomPending=c.pendingMapping>0&&!selection?.verified;
  const stats=[['Reference',c.reference],['PDF matches',c.pdfs===null?'—':c.pdfs],['BOM matches',bomPending?'—':c.bom],['Selected',selected===null?'—':selected],['Issues',report.issues.length]];
  for(const [label,count] of stats){
    const box=document.createElement('div');box.className='stat';
    const n=document.createElement('strong'),l=document.createElement('span');
    n.textContent=count;l.textContent=label;box.append(n,l);host.append(box);
  }
}
// The quantity check. The counts above have to agree before the drawing numbers are worth reading, so
// this line states them together and says whether they do. Once the selection has run it compares the
// number DOAS confirmed against the number requested, which is the only count that proves the run.
function renderQuantity(){
  const el=$('quantity');if(!el)return;
  const c=report?.counts;
  if(!c){el.textContent='';el.className='tiny';return;}
  if(selection?.verified){
    const ok=selection.selected===c.reference;
    // The description is part of the check now, so the verified line says so when every one of them
    // matched (R4.1). It is not claimed when the comparison did not apply.
    const everything=c.descriptionMatches===c.reference&&c.reference>0;
    el.textContent=ok
      ? `Quantity verified: ${c.reference} requested = ${selection.selected} selected in DOAS. ${everything?'Every drawing number, revision and description matched.':'Every drawing number and revision matched.'}`
      : `Quantity differs: ${c.reference} requested but ${selection.selected} selected in DOAS. Review the selection log.`;
    el.className='tiny '+(ok?'good':'warn');return;
  }
  if(selection&&!selection.verified){
    el.textContent=`Quantity: selection stopped after ${selection.log.length} of ${c.reference}. Review DOAS before continuing.`;
    el.className='tiny warn';return;
  }
  // While a mapping is still a question, the BOM count cannot be checked yet, so the line says what is
  // known instead of calling the run a mismatch for a decision the user has not been asked about.
  if(c.pendingMapping>0&&!selection){
    el.textContent=`Quantity: ${c.reference} requested${c.pdfs===null?'':` = ${c.pdfs} PDF${c.pdfs===1?'':'s'}`}. The BOM count waits on the mapping decision below.`;
    el.className='tiny';return;
  }
  const agree=c.pdfs===null?c.bom===c.reference:c.pdfs===c.reference&&c.bom===c.reference;
  const pdfPart=c.pdfs===null?'':`${c.pdfs} PDF${c.pdfs===1?'':'s'} = `;
  el.textContent=agree
    ? `Quantity: ${c.reference} requested = ${pdfPart}${c.bom} BOM row${c.bom===1?'':'s'}. Not selected yet.`
    : `Quantity differs: ${c.reference} requested, ${c.pdfs===null?'':`${c.pdfs} PDF${c.pdfs===1?'':'s'}, `}${c.bom} BOM row${c.bom===1?'':'s'}. Selection stays blocked.`;
  el.className='tiny'+(agree?'':' warn');
}
// The ten quantities of PROJECT_REQUIREMENTS R5.1, in one line under the count row. They are a tally,
// not a check: the cards above say whether the run may select, this says what was counted on the way
// there, including the files that could not be used. Invalid and duplicate PDFs are inside "PDFs found"
// on purpose, so the total can be added up against the folder itself (R5.2).
function renderTally(){
  const el=$('tally');if(!el)return;
  const c=report?.counts;
  if(!c){el.textContent='';return;}
  const actual=selection?.verified?selection.selected:null;
  el.textContent=[
    `Total files ${c.totalFiles}`,
    `PDFs found ${c.pdfsFound}`,
    `Valid PDFs ${c.validPdfs}`,
    `Unique identifiers ${c.uniqueIdentifiers}`,
    `Invalid PDFs ${c.invalidPdfs}`,
    `Duplicate identifiers ${c.duplicateIdentifiers}`,
    `Exclusions ${c.exclusions}`,
    `Expected selections ${c.expectedSelections}`,
    `Description matches ${c.descriptionMatches}`,
    `Selected in DOAS ${actual===null?'—':actual}`
  ].join(' · ');
}
function renderGroups(groups,target,pdfInfo=new Map()){
  const host=$('groupChoices');host.replaceChildren();
  if(!groups.length)return;
  const effectiveTarget=target.verified?target.projectLine:'';
  const stateOf=g=>groupDecisionState(g.sourceGroup,effectiveTarget);
  const total=groups.reduce((n,g)=>n+g.files.length,0);
  const pending=groups.filter(g=>stateOf(g)==='unresolved');
  const heading=document.createElement('h3');
  heading.textContent=target.verified?`DOAS project: ${target.projectLine}`:'DOAS project: not verified';
  host.append(heading);
  const lead=document.createElement('p');lead.className='tiny';
  lead.textContent=target.verified
    ? `${noun(total)} · ${pending.length?`${pending.length} approval${pending.length===1?'':'s'} needed`:'no approvals needed'}`
    : `Nothing can be mapped until the DOAS project is verified. ${target.reason||''}`.trim();
  host.append(lead);
  // The largest group that still needs a decision is marked, as the earlier requirement allowed, but
  // without the explanatory sentence: the ordering already puts it first and the marker says the rest.
  const marked=pending.length>1?pending[0].sourceGroup:null;
  for(const g of groups){
    const state=stateOf(g);
    const decision=groupDecisions[g.sourceGroup];
    const box=document.createElement('div');box.className='note'+(g.sourceGroup===marked?' majority':'');
    const title=document.createElement('p');title.className='choiceTitle';
    title.textContent=state==='exact'?`${g.sourceGroup} — Exact match ✓`
      :state==='approved'?`${g.sourceGroup} → ${decision.targetProjectLine}`
      :state==='excluded'?`${g.sourceGroup} → ${effectiveTarget||'—'}`
      :target.verified?`${g.sourceGroup} → ${target.projectLine}`
      :`${g.sourceGroup}`;
    box.append(title);
    // The state rides on the title for an exact match, so the subtitle then carries only the count.
    const sub=document.createElement('p');sub.className='tiny';
    const stateText=state==='unresolved'?'Project/line differs':state==='approved'?'Approved ✓':state==='excluded'?'Excluded':'';
    sub.textContent=stateText?`${noun(g.files.length)} · ${stateText}`:noun(g.files.length);
    box.append(sub);
    const actions=document.createElement('div');actions.className='actions';
    if(state==='unresolved'&&target.verified){
      const approve=document.createElement('button');approve.className='primary';approve.textContent='Approve mapping';
      approve.addEventListener('click',()=>run(async()=>{approveGroup(g.sourceGroup,target.projectLine);audit();await selectIfReady();}));
      actions.append(approve);
    }
    if(state==='unresolved'||state==='exact'){
      const exclude=document.createElement('button');exclude.textContent='Exclude group';
      exclude.addEventListener('click',()=>run(async()=>{excludeGroup(g.sourceGroup);audit();await selectIfReady();}));
      actions.append(exclude);
    }
    if(state==='approved'||state==='excluded'){
      const undo=document.createElement('button');undo.textContent='Undo mapping';
      // The caveat is a tooltip here and one line in Details, rather than a paragraph per group.
      undo.title='Changes the mapping decision only. It does not untick rows already selected in DOAS.';
      undo.addEventListener('click',()=>run(async()=>{undoGroup(g.sourceGroup);audit();}));
      actions.append(undo);
    }
    box.append(actions);
    // The drawings of the group are listed for checking, each with its description and its original
    // filename so the part can be recognised and its PDF opened. The reference list itself carries the
    // identifier only; the description lives here, in the mismatch details and in the audit (R4.6).
    const details=document.createElement('details'),summary=document.createElement('summary'),list=document.createElement('pre');
    summary.textContent='View drawings';
    list.textContent=g.files.map(f=>{
      const info=pdfInfo.get(f.key);
      const description=(info?info.description:f.description)||'(no description)';
      return info?`${f.key}  —  ${description}  —  ${info.title}`:`${f.key}  —  ${description}`;
    }).join('\n');
    details.append(summary,list);box.append(details);
    host.append(box);
  }
  if(pending.length&&target.verified){const note=document.createElement('p');note.className='tiny';note.textContent='Matching and selection continue after approval.';host.append(note);}
}
function render(){
  if(!report)return;$('results').replaceChildren();
  const query=$('filter').value.toUpperCase();
  for(const row of report.rows.filter(r=>JSON.stringify(r).toUpperCase().includes(query))){
    const tr=document.createElement('tr');
    for(const value of [row.key,row.pdf,row.bom]){const td=document.createElement('td');td.textContent=value;if(value==='Matched')td.className='good';else if(['Missing','Duplicate','Revision differs','Only under a forbidden project / line','Awaiting the group mapping'].includes(value))td.className='bad';tr.append(td);}
    const detail=document.createElement('td');
    if(row.targetKey!==row.key){const p=document.createElement('div');p.textContent='Approved DOAS target: '+row.targetKey;detail.append(p);}
    if(row.group){const p=document.createElement('div');p.textContent='Source project / line group: '+row.group;detail.append(p);}
    // The description is part of the check, so the row states which description was compared and, when
    // it did not match, both texts (R4.5, R4.6).
    if(row.descriptionState&&row.descriptionState!=='not-compared'){
      const p=document.createElement('div');
      p.textContent=row.descriptionState==='matched'
        ?`Description: ${row.bomDescription}`
        :`PDF description: ${row.pdfDescription||'(none)'} · DOAS description: ${row.bomDescription||'(none)'}`;
      detail.append(p);
    }
    row.pdfPaths.forEach(path=>{const f=files.find(f=>(f.webkitRelativePath||f.name)===path);if(!f)return;const a=document.createElement('a');a.textContent=path;a.href='#';a.addEventListener('click',e=>{e.preventDefault();const u=URL.createObjectURL(f);window.open(u,'_blank','noopener');setTimeout(()=>URL.revokeObjectURL(u),60000);});detail.append(a,document.createElement('br'));});
    if(row.bomAlternatives.length){const p=document.createElement('div');p.textContent='Other BOM revisions: '+row.bomAlternatives.join(', ');detail.append(p);}
    if(row.pdfAlternatives.length){const p=document.createElement('div');p.textContent='Other PDF revisions: '+row.pdfAlternatives.join(', ');detail.append(p);}
    tr.append(detail);$('results').append(tr);
  }
}
$('filter').addEventListener('input',render);
$('approved').addEventListener('change',()=>{$('select').disabled=working||!report?.canSelect||!$('approved').checked;});
async function selectReport(){
  if(!report?.canSelect||(!autoSelection&&!$('approved').checked))throw Error('Resolve matching issues first.');
  const current=report;current.canSelect=false;$('approved').disabled=true;setHidden('manual',true);
  // Excluded groups are outside the requested set, so they are never sent for selection.
  const chosen=current.rows.filter(r=>!r.excluded);
  if(!chosen.length)throw Error('Every project / line group is excluded, so there is nothing to select.');
  status('Selecting and checking each exact match. Keep the DOAS table unchanged.');
  // The verified target, the group approvals AND the approved description of every row travel with the
  // request, so the bridge can re-read and re-compare the description on the live page before it clicks
  // anything (R4.7).
  selection=await bridge('select',{fingerprint:current.bom.fingerprint,targetProjectLine:current.target.projectLine,sourceKeys:chosen.map(r=>r.key),keys:chosen.map(r=>r.targetKey),descriptions:Object.fromEntries(chosen.map(r=>[r.targetKey,r.pdfDescription||''])),groupDecisions:current.groupDecisions});
  $('selectionLog').textContent=selection.log.map(r=>`${r.time}  ${r.result}: ${r.sourceKey} → ${r.key}`).join('\n');
  // The count row is re-rendered from the VERIFIED figure, so "Selected" is what DOAS confirmed rather
  // than the number that merely matched. On a partial failure it stays "—" and the line says how far
  // the run got, because a half-finished selection is not a quantity.
  if(report?.counts)report.counts.actualSelections=selection?.verified?selection.selected:null;
  renderCounts();renderQuantity();renderTally();
  if(!selection.verified)throw Error(`${selection.error} ${selection.log.length} rows were verified before stopping. Export the audit and review DOAS.`);
  status(`Verified: exactly ${selection.selected} requested BOM rows selected. Review quantities and suppliers in DOAS before creating the RFQ.`);
}
$('select').addEventListener('click',()=>run(selectReport));
$('export').addEventListener('click',()=>{
  if(!report)return;const blob=new Blob([JSON.stringify({...report,selection},null,2)],{type:'application/json'}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='DOAS_Drawing_Audit_'+new Date().toISOString().replace(/[:.]/g,'-')+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);
});
if(!tabId){$('bomInfo').textContent='Folder search and OCR are available. For DOAS selection, open DOAS and click the extension toolbar button.';}
// The list is empty on load, and the heading says so rather than showing nothing.
renderRefCount();

})(ui,ui.document,host.location,ui,bridgeState.DrawingMatcher,bridgeState,host);
host.__doasBookmarkRelease='v1.01';
})();