var pma_theme_image;AJAX.registerOnload("server_plugins.js",function(){$("#pluginsTabs").tabs({cookie:{name:"pma_serverStatusTabs",expires:1},show:function(b,c){$("#topmenu").menuResizer("resize");$(c.panel).closest(".ui-tabs").find("> div").not(c.panel).css("display","none");$(c.panel).css("display","block")}});var a=$("#plugins_plugins table:has(tbody tr + tr)");a.tablesorter({sortList:[[0,0]],widgets:["zebra"]});a.find("thead th").append('<img class="sortableIcon" src="'+pma_theme_image+'cleardot.gif" alt="">')});