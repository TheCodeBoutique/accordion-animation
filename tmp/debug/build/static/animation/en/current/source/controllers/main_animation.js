// ==========================================================================
// Project:   Animation.mainAnimation
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Animation */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Animation.mainAnimation = SC.ArrayController.create({
	
	topSelection: false,
	middleSelection: false,
	bottomSelection: false,
	
	flashSelection:false,
	
	labelChange:'Click Me'
	
  // TODO: Add your own code here.

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('animation');