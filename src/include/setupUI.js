WMEAC.initUI = function ()
{
		var addon = WMEAC.createElement({type: 'section', id: 'wmeac-addon'});
		
		var divpbi = WMEAC.createElement({type: 'div', id: 'wmeac-progressBarInfo', className: 'wmeac-progressBarInfo'});
		
		var elt = WMEAC.createElement({type: 'div', id: 'wmeac-progressBar'});
		elt.style.width="100%";
		elt.style.display="none";
		elt.innerHTML='<div class="wmeac-progressBarBG"></div><span class="wmeac-progressBarFG">100%</span>';
		divpbi.appendChild(elt);
		
		
		elt = WMEAC.createElement({type: 'div', id: 'wmeac-info'});
		//elt.innerHTML="&nbsp;";
		divpbi.appendChild(elt);
		
		addon.appendChild(divpbi);
		
		
		var section = WMEAC.createElement({type: 'p', id: 'wmeac-main-title'});
		section.style.paddingTop = "0px";
		section.style.marginTop = "-15px";
		section.style.textIndent = "8px";
		
		var title='<b><a target="_blank" href="https://greasyfork.org/fr/scripts/"><u>Advanced Closures</u></a> <a target="_blank" href="https://www.waze.com/forum/viewtopic.php?f=68&t=91786">Fr</a> <a target="_blank" href="https://www.waze.com/forum/viewtopic.php?f=819&t=125216">En</a> </b> v' + WMEAC.ac_version;
		section.innerHTML  = title;
		addon.appendChild(section);
		
		var userTabs = WMEAC.getId('user-tabs');
		var userInfo = WMEAC.getId('user-info');
		var sidePanelPrefs = WMEAC.getId('sidepanel-prefs');
		var navTabs = WMEAC.getElementsByClassName('nav-tabs', userTabs)[0];
		var tabContent = sidePanelPrefs.parentNode;
		
		newtab = WMEAC.createElement({type: 'li'});
		newtab.innerHTML = '<a title="Advanced closures" href="#sidepanel-wmeac" data-toggle="tab"><span class="fa fa-clock-o"></span></a>';
		navTabs.appendChild(newtab);

		
		addon.id = "sidepanel-wmeac";
		addon.className = "tab-pane";
		addon.style.marginLeft = "-10px";
		tabContent.appendChild(addon);

		Waze.selectionManager.events.register("selectionchanged", null, WMEAC.selectionChanged);
};

WMEAC.selectionChanged = function (e)
{
	if (WMEAC.closureTabTimeout!=null)
	{
		// unset the timeout
		window.clearTimeout(WMEAC.closureTabTimeout);
		WMEAC.closureTabTimeout=null;
	}

	var roadClosuresLayer = Waze.map.getLayersByName("Road Closures");
	WMEAC.log("rcl;", roadClosuresLayer);
	if (roadClosuresLayer.length==1)
		roadClosuresLayer=roadClosuresLayer[0];
	else
		return;
	WMEAC.log("sel;", e);
	if (e.selected.length!=0 && e.selected[0].model.type=="segment")
	{
		// now setup timeout to wait for active closures tab
		var tmp = function tmpFunc() {
			var tabEditClosures = WMEAC.getId('segment-edit-closures');
			//WMEAC.log("tabEditClosures:", tabEditClosures);
			//if (tabEditClosures) WMEAC.log("classname", tabEditClosures.className);
			if (tabEditClosures!=null && tabEditClosures.className.indexOf('active')!=-1 && roadClosuresLayer.visibility==true)
			{
				//WMEAC.log("Here we go in closure tab!", tabEditClosures);
				WMEAC.initInClosureTab({divTab: tabEditClosures});
				return;
			}
			else
			{
				WMEAC.closureTabTimeout=window.setTimeout(tmpFunc, 100);
				//WMEAC.log("waiting for closure tab...");
			}
		};
		WMEAC.closureTabTimeout=window.setTimeout(tmp);
	}
};


WMEAC.initInClosureTab = function (data)
{
	var addACBtn = WMEAC.getId('wmeac-add-advanced-closure-button');
	if (addACBtn!=null && WMEAC.isDescendant(data.divTab, addACBtn))
		return; // our button is already there
	if (addACBtn!=null)
	{
		// oops, our button exists but in the wrong place? Delete it
		addACBtn.parentNode.removeChild(addACBtn);
	}
	
	var addBtn = WMEAC.getElementsByClassName('add-closure-button', data.divTab);
	if (addBtn.length!=1)
		return;
	addBtn = addBtn[0];
	
	var btnsContainer = addBtn.parentNode;
	addACBtn = WMEAC.createElement({type: 'div',
																	id: 'wmeac-add-advanced-closure-button',
																	className: 'btn btn-primary'});
	addACBtn.style.width='100%';
	addACBtn.style.marginBottom= '10px';
	addACBtn.innerHTML='<i class="fa fa-clock-o"> Add advanced closure</i>';
	
	addACBtn.addEventListener('click', WMEAC.showAddAdvancedClosure);
	
	if (addBtn.nextSibling) {
		btnsContainer.insertBefore(addACBtn, addBtn.nextSibling);
	}
	else {
		btnsContainer.appendChild(addACBtn);
	}
};

WMEAC.showAddAdvancedClosure = function()
{
	// init if needed and show modal dialog
	var ACDiv = WMEAC.getId('wmeac-add-advanced-closure-dialog');
	if (ACDiv==null)
	{
		ACDiv = WMEAC.createElement({type: 'div',
																 id: 'wmeac-add-advanced-closure-dialog',
																 className: 'wmeac-closuredialog'});
		ACDiv.innerHTML=WMEAC.HTMLTemplates.advancedClosureDialog;
		Waze.map.div.appendChild(ACDiv);
		window.setTimeout(WMEAC.connectAdvancedClosureDialogHandlers);
	}
	ACDiv.style.display="block";
};

WMEAC.HTMLTemplates={};
WMEAC.HTMLTemplates.advancedClosureDialog='\
<h1>Advanced closures</h1>\
<div class="content">\
</div>\
<div class="footer">\
	<button style="float: right;" id="wmeac-advanced-closure-dialog-close-button">Close</button>\
</div>\
';

WMEAC.connectAdvancedClosureDialogHandlers = function ()
{
	var e = null;
	e=WMEAC.getId('wmeac-advanced-closure-dialog-close-button');
	if (e)
	{
		e.addEventListener('click', function() {
			var d = WMEAC.getId('wmeac-add-advanced-closure-dialog');
			if (d) d.style.display='none';
		});
	}
};