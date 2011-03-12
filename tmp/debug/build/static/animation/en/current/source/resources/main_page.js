// ==========================================================================
// Project:   Animation - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Animation */

// This page describes the main user interface for your application.  
Animation.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'mainFrame title'.w(),
    

		title:SC.LabelView.design({
					    layout: { left:40, height: 24, top: 7, width: 300 },
					    controlSize: SC.LARGE_CONTROL_SIZE,
					    fontWeight: SC.BOLD_WEIGHT,
					    value:"Here's to the crazy one's...."
					  	}),
    mainFrame:SC.View.design({
				layout:{top:40,left:40,width:300,height:300},
				childViews:'topFrame middleFrame bottomBar bottomContent'.w(),
				
				topFrame: SC.View.design({
					childViews:'topBar topContent'.w(),
					mouseEntered: function(evt) {
		        Animation.mainPage.mainPane.mainFrame.topFrame.topContent.animate('opacity',1,{duration:.5,timing:'ease-in-out'});
			        Animation.mainPage.mainPane.mainFrame.middleFrame.middleBar.animate('top',145,{duration:.3,timing:'ease-in-out'});
			        Animation.mainPage.mainPane.mainFrame.bottomBar.animate('top',190,{duration:.3,timing:'ease-in-out'});
			        return YES
			    },
					mouseExited: function() {
		        Animation.mainPage.mainPane.mainFrame.topFrame.topContent.animate('opacity',0,{duration:.1,timing:'ease-in-out'});
		        		Animation.mainPage.mainPane.mainFrame.middleFrame.middleBar.animate('top',45,{duration:.3,timing:'ease-in-out'});
		        		Animation.mainPage.mainPane.mainFrame.bottomBar.animate('top',90,{duration:.3,timing:'ease-in-out'});
		        		return YES
						},
				topBar:SC.ToolbarView.design({
				  layout: { top: 0, left: 0, right: 0, height: 45 }, 
				 	childViews:'title'.w(),
					title: SC.LabelView.design({
								    layout: { centerY: 0, height: 24, centerX: 0, width: 200 },
								    fontWeight: SC.BOLD_WEIGHT,
								    value:'Developers'
								  	}),
				}),
				topContent:SC.SourceListView.design({
					classNames:['content-list'],
					layout:{top:40,left:0,width:330,height:0},
				  content: ["Charles Jolley", "Geoffrey Donaldson", "Peter Wagenet"]
				}),
			}),
			middleFrame: SC.View.design({
				childViews:'middleBar middleContent'.w(),
				mouseEntered: function(evt) {
				        Animation.mainPage.mainPane.mainFrame.middleFrame.middleContent.animate('opacity',1,{duration:.5,timing:'ease-in-out'});
				        Animation.mainPage.mainPane.mainFrame.bottomBar.animate('top',190,{duration:.3,timing:'ease-in-out'});
					        return YES
					    },
				mouseExited: function() {
					      Animation.mainPage.mainPane.mainFrame.middleFrame.middleContent.animate('opacity',0,{duration:.1,timing:'ease-in-out'});
					      Animation.mainPage.mainPane.mainFrame.bottomBar.animate('top',90,{duration:.3,timing:'ease-in-out'});
				        return YES
								},
				middleBar:SC.ToolbarView.design({
				  layout: { top: 45, left: 0, right: 0, height: 45 },  
					childViews:'title'.w(),
					title: SC.LabelView.design({
								    layout: { centerY: 0, height: 24, centerX: 0, width: 200 },
								    fontWeight: SC.BOLD_WEIGHT,
								    value:'Developers'
								  	}),
				}),
				middleContent:SC.SourceListView.design({
					classNames:['content-list'],
					layout:{top:90,left:0,width:330,height:0},
				  content: ["Tom Dale", "Yehuda Katz", "Alex Iskander"]
				}),
			}),
				bottomBar:SC.ToolbarView.design({
				  layout: { top: 90, left: 0, right: 0, height: 45 },
					childViews:'title'.w(),
					title: SC.LabelView.design({
								    layout: { centerY: 0, height: 24, centerX: 0, width: 200 },
								    fontWeight: SC.BOLD_WEIGHT,
								    value:'Developers'
								  	}), 
				 
					mouseEntered: function(evt) {
		        			Animation.mainPage.mainPane.mainFrame.bottomContent.animate('opacity',1,{duration:.5,timing:'ease-in-out'});
					        //this.animate('top',190,{duration:.3,timing:'ease-in-out'});
					        return YES
						    },
					mouseExited: function() {
						      Animation.mainPage.mainPane.mainFrame.bottomContent.animate('opacity',0,{duration:.1,timing:'ease-in-out'});
					        //this.animate('top',90,{duration:.3,timing:'ease-in-out'});
					        return YES
									},
				}),
				bottomContent:SC.SourceListView.design({
					classNames:['content-list'],
					layout:{top:136,left:0,width:330,height:0},
				  content: ["Evin Grano", "Jason Gignac", "Erich Ocean"]
				}),
		})
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('animation');