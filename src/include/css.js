var cssElt = WMEAC.createElement({type: "style"});
cssElt.type = "text/css";
var css="";
css += ".slashed:after { content: ''; position: relative; width: 140%; height: 1px; display: block; background: red; transform: rotate(-30deg); margin-top: -50%; margin-left: -20%; }";
css += ".wmeac-sidepanel button { border: none; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: #F1DDDB }";

css += "#wmeac-progressBarInfo { display: none; width: 90%; float: left; position: absolute; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; margin-bottom: -100%; background-color: #c9e1e9; z-index: 999; margin: 5px; margin-right: 20px; }";
css += ".wmeac-progressBarBG { margin-top: 2px; margin-bottom: 2px; margin-left: 2px; margin-right: 2px; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; padding-right: 0px; width: 33%; background-color: #93c4d3; border: 3px rgb(147, 196, 211); border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; height: 22px;}";
css += ".wmeac-progressBarFG { float: left; position: relative; bottom: 22px; height: 0px; text-align: center; width: 100% }";
css += ".wmeac-button { border: none; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: #F1DDDB; display: inline-block; padding: 6px 12px; cursor: pointer; text-align: center; font-weight: bold; }";
css += ".wmeac-closuredialog { border: 2px solid #F1DDDB; width: 100%; float: left; display: none; position: absolute; padding: 0 0px;  border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; background-color: #FDEDEB; width: 500px; z-index: 9999; left: 80px; top: 10px;}";
css += ".wmeac-closuredialog button { border: none; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; background-color: #F1DDDB; margin: 3px; }";
css += ".wmeac-closuredialog h1 { background-color: #F1DDDB; text-align: center; font-size: medium; margin-top: 0px; padding: 10px;}";
css += ".wmeac-closuredialog .content { padding: 10px;}";
css += ".wmeac-closuredialog .content table { witdh: 100%; border: none; font-size: 10px; text-transform: uppercase;}";
css += ".wmeac-closuredialog .content table tbody tr { vertical-align: top;}";
css += ".wmeac-closuredialog .content table tbody tr td { padding-right: 2px; padding-left: 2px;}";
css += ".wmeac-closuredialog-fromgroup { display: inline-block; }";
css += ".wmeac-nav-tabs>ul { border-bottom: 1px solid #F6C3BE }";
css += ".wmeac-nav-tabs>li { float: left; margin-bottom: -1px; }";
css += ".wmeac-nav-tabs>li>a { border: 1px solid #F6C3BE; border-top-left-radius: 5px; border-top-right-radius: 5px; margin-right: 2px;}";
css += ".wmeac-nav-tabs>li.active>a { background-color: rgba(0, 0, 0, 0); border-bottom: 1px solid #FDEDEB}";
css += ".wmeac-nav-tabs>li:not(.active)>a { background-color: #DADBDC}";
//css += ".wmeac-nav-tabs>li:not(.active)>a:hover { background-color: #DADBDC}";
css += ".wmeac-tab-pane {border: 1px solid #F6C3BE; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 0px; border-top-right-radius: 0px; padding: 5px;}";
css += ".wmeac-closuredialog .footer { height: 40px; padding: 0 10px;}";
css += "#wmeac-csv-closures-list ul { list-style-type: none; padding: 0px;}";
css += "#wmeac-csv-closures-list ul li { width: 100%; height: 42px; border-radius: 4px; margin-top: 1px; }";
css += "#wmeac-csv-closures-list ul li > * { display: table-cell; vertical-align: middle;}";
css += ".wmeac-csv-closures-list-add { background-color: #C6DFFF; }";
css += ".wmeac-csv-closures-list-remove { background-color: #FFC65F; }";
css += ".wmeac-csv-closures-list-failed { background-color: #FF8585; }";
css += ".wmeac-csv-closures-list-done { background-color: #B9FAB1; }";
css += ".wmeac-csv-closures-list-col-action { width: 14px; min-width: 14px; }";
css += ".wmeac-csv-closures-list-col-lr { font-size: xx-small; width: 100%; }";
css += ".wmeac-csv-closures-list-col-lr > * { height: 14px; overflow-y: hidden; vertical-align: middle; }";
css += ".wmeac-csv-closures-list-col-dates { width: 75px; min-width: 75px; font-size: xx-small; text-align: center; }";
css += ".wmeac-csv-closures-list-col-dates > * { height: 14px; overflow-y: hidden; vertical-align: center; }";
css += ".wmeac-csv-closures-list-col-dir { width: 35px; min-width: 35px; text-align: center; }";
css += ".wmeac-csv-closures-list-col-it { width: 15px; min-width: 15px; }";
css += ".wmeac-csv-closures-list-col-target { width: 15px; min-width: 15px; }";
css += ".wmeac-csv-closures-list-col-apply { width: 15px; min-width: 15px; }";
css += ".wmeac-csv-closures-minilog { font-size: xx-small; font-family: monospace; border: 2px solid #F6C3BE; border-top: none; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; background-color: #FFFFFF; }";
css += "#wmeac-csv-closures-log { font-size: xx-small; font-family: monospace; border: 2px solid #F6C3BE; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; padding-top: 8px; position: relative;  margin-top: 10px; }";
css += "#wmeac-csv-closures-log:before { content: \"Logs\"; position: absolute; top: -8px; left: 5px; float: left; background: #F6C3BE; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; padding: 2px; }";
css += "#wmeac-csv-closures-preview { font-size: small; white-space: nowrap; font-family: monospace; border: 2px solid #F6C3BE; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; padding-top: 8px; position: relative; min-height: 20px; }";
css += "#wmeac-csv-closures-preview:before { content: \"Preview\"; position: absolute; top: -8px; left: 5px; float: left; background: #F6C3BE; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; padding: 2px; }";
css += ".wmeac-hl:after { content: \"\\f018\"; position: relative; display: block; margin-top: -100%; margin-left: 50%; font-family: FontAwesome; }";
cssElt.innerHTML = css;
document.body.appendChild(cssElt);
