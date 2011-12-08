/*
 * JQuery Form Builder - Multi Line Text plugin.
 * 
 * Revision: @REVISION
 * Version: @VERSION
 * Copyright 2011 Millisami (millisami@gmail.com)
 *
 * Licensed under Apache v2.0 http://www.apache.org/licenses/LICENSE-2.0.html
 *
 * Date: 01-Nov-2011
 */

var FbMultiLineText = $.extend({}, $.fb.fbWidget.prototype, {
	options: { // default options. values are stored in widget's prototype
		name: 'Multi Line Text',
		belongsTo: $.fb.formbuilder.prototype.options._standardFieldsPanel,
		_type: 'MultiLineText',
		_html: '<div><label><em></em><span></span></label> \
		      <textarea class="textArea"></textarea> \
	        <p class="formHint"></p></div>',
		_counterField: 'label',
		_languages: ['en'],
		settings: {
			en: {
				label: 'Value',
				value: '',
				description: '',
				classes: [],
				styles: {
					fontFamily: 'default', // form builder default
					fontSize: 'default',
					fontStyles: [0, 0, 0] // bold, italic, underline					
				}				
			},
			required: true,
			styles : {
				label: {
				  color : 'default',
				  backgroundColor : 'default'
				},
			    value: {
				  color : 'default',
				  backgroundColor : 'default'
				},
				description: {
					color : '777777',
					backgroundColor : 'default'
			    }				
			}
		}
	},
	_init : function() {
		// calling base plugin init
		$.fb.fbWidget.prototype._init.call(this);
		// merge base plugin's options
		this.options = $.extend({}, $.fb.fbWidget.prototype.options, this.options);
	},
	_getWidget : function(event, fb) {
		var $jqueryObject = $(fb.target.options._html);
		fb.target._log('fbMultiLineText._getWidget executing...');
		
		
		
		$('label span', $jqueryObject).text(fb.settings.label);
		if (fb._settings.required) {
			$('label em', $jqueryObject).text('*');	
		}
		$('textarea', $jqueryObject).val(fb.settings.value);
		$('.formHint', $jqueryObject).text(fb.settings.description);
		
		
		
		// write your code here
		fb.target._log('fbMultiLineText._getWidget executed.');
		return $jqueryObject;
	},
	_getFieldSettingsLanguageSection : function(event, fb) {
		fb.target._log('fbMultiLineText._getFieldSettingsLanguageSection executing...');
		var $label = fb.target._label({ label: 'Label', name: 'field.label' }).append('<input type="text" id="field.label" />');
        
        
        
        $('input', $label).val(fb.settings.label)
        .keyup(function(event) {
 	      var value = $(this).val();
	      fb.item.find('label span').text(value);
	      fb.settings.label = value;
	      fb.target._updateSettings(fb.item);
	      fb.target._updateName(fb.item, value);
         });
         
         
         
	     var $value = fb.target._label({ label: 'Value', name: 'field.value' }).append('<input type="text" id="field.value" />');
	     
	    fb.target._log("FB SETTINGS 0");
	     
         $('input', $value).val(fb.settings.value)
                 .keyup(function(event) {
                     var value = $(this).val();
                     fb.item.find('.textArea').val(value);
                     fb.settings.value = value;
                     fb.target._updateSettings(fb.item);
                });
		fb.target._log("FB SETTINGS 1");
		var $description = fb.target._label({ label: 'Description', name: 'field.description' }).append('<textarea id="field.description" rows="2"></textarea>');
		
		 fb.target._log("FB SETTINGS 2");
		 
		console.log("Desc: " + fb.settings.description);
		
		$('textarea', $description).val(fb.settings.description)
			.keyup(function(event) {
			  var value = $(this).val();
			  fb.item.find('.formHint').text(value);
			  fb.settings.description = value;
			  fb.target._updateSettings(fb.item);
		});
		
		fb.target._log("FB SETTINGS 3");
		
		
    fb.target._log('fbSingleLineText._getFieldSettingsLanguageSection executed.');
    return [fb.target._twoColumns($label, $value), fb.target._oneColumn($description)];
	},
	_getFieldSettingsGeneralSection : function(event, fb) {
		var $jqueryObjects = [];
		fb.target._log('fbMultiLineText._getFieldSettingsGeneralSection executing...');
		// write your code here
		fb.target._log('fbMultiLineText._getFieldSettingsGeneralSection executed.');
		return $jqueryObjects;
	}
});

$.widget('fb.fbMultiLineText', FbMultiLineText);
