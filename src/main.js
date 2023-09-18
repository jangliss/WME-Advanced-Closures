// ==UserScript==
// @name        WME Advanced Closures
// @version     <WMEACVERSION>
// @description Recurrent and imported closures in the Waze Map Editor
// @namespace   WMEAC
// @include     https://www.waze.com/editor*
// @include     https://www.waze.com/*/editor*
// @include     https://beta.waze.com/editor*
// @include     https://beta.waze.com/*/editor*
// @exclude     https://www.waze.com/user/*
// @exclude     https://www.waze.com/*/user/*
// @icon data:image/png;base64,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
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @grant       GM_addElement
// @connect     holidayapi.com
// @copyright   2018, dummyd2, seb-d59, WazeDev
// @author      dummyd2, seb-d59, WazeDev
// ==/UserScript==


/*******
 * 
 *  You are free to:
 *   Share, copy, and redistribute the script in any medium or format
 *   under the following terms:
 *   Attribution - You must give appropriate credit. You may do so in any
 *     reasonable manner, but not in any way that suggests the licensor
 *     endorses you or your use.
 * 
 *   NonCommercial - You may not use the script for commercial purposes.
 *
 *   NoModifications - You may NOT MODIFY the script.
 * 
 *  You are invited to contact authors on waze forum for more details.
 * 
********/

/* global $ */
/* global W */
/* global OpenLayers */
/* global require */
/* global _ */
/* global I18n */
/*jshint multistr: true */


// SKIP_FILE('include/downloadHelper.js');

(function()
{
    // WMEAC object and members:
    INCLUDE_FILE('include/globalDeclarations.js');

    // WMEAC usefull function member
    INCLUDE_FILE('include/util.js');

    INCLUDE_FILE('include/css.js');

    // boostrap and init (wait for waze UI and objects)
    INCLUDE_FILE('include/init.js');

    // function to setup the UI dom
    INCLUDE_FILE('include/setupUI.js');

    INCLUDE_FILE('include/class.progressBar.js');

    INCLUDE_FILE('include/class.closure.js');
    
    INCLUDE_FILE('include/recurringClosures.js');
    
    INCLUDE_FILE('include/actionClosures.js');
    
    // functions to load and save settings
    INCLUDE_FILE('include/saveLoad.js');

    INCLUDE_FILE('include/csv.js');
    
    INCLUDE_FILE('include/highlight.js');
    
    //2023-08-20 remove obsolete require patch

    WMEAC.WMEAPI={require: window.require};
    // start normally
    WMEAC.log("starting");
    WMEAC.bootstrapAC();

})();
