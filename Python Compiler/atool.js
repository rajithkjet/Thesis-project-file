
var caretPositionAmp;

jQuery.fn.extend({
	getSelection: function() {  // function for getting selection, and position of the selected text
		var input = this.jquery ? this[0] : this;
		var start;
		var end;
		var part;
		var number = 0;
        input.onmousedown = function() { // for IE because it loses caret position when focus changed
            if (document.selection && typeof(input.selectionStart) != "number") {
                document.selection.empty();
			} else {
                window.getSelection().removeAllRanges();
            }
		}
		if (document.selection) {
			// part for IE and Opera
			var s = document.selection.createRange();
			var minus = 0;
			var position = 0;
			var minusEnd = 0;
			var re;
			var rc;
			if (input.value.match(/\n/g) != null) {
					number = input.value.match(/\n/g).length;// number of EOL simbols
			}
			if (s.text) {
                part = s.text;
				// OPERA support
				if (typeof(input.selectionStart) == "number") {
					start = input.selectionStart;
					end = input.selectionEnd;
					// return null if the selected text not from the needed area
					if (start == end) {
                        return { start: start, end: end, text: s.text, length: end - start };
					}
				} else {
					// IE support
					var firstRe;
					var secondRe;
					re = input.createTextRange();
					rc = re.duplicate();
					firstRe = re.text;
					re.moveToBookmark(s.getBookmark());
					secondRe = re.text;
					rc.setEndPoint("EndToStart", re);
                    // return null if the selectyed text not from the needed area
					if (firstRe == secondRe && firstRe != s.text) {
						return this;
					}
                    start = rc.text.length; 
                    end = rc.text.length + s.text.length;
                }
				// remove all EOL to have the same start and end positons as in MOZILLA
				if (number > 0) {
					for (var i = 0; i <= number; i++) {
						var w = input.value.indexOf("\n", position);
						if (w != -1 && w < start) {
							position = w + 1;
							minus++;
							minusEnd = minus;
						} else if (w != -1 && w >= start && w <= end) {
							if (w == start + 1) {
								minus--;
								minusEnd--;
								position = w + 1;
								continue;
							}
							position = w + 1;
							minusEnd++;
						} else {
							i = number;
						}
					}
				}
				if (s.text.indexOf("\n", 0) == 1) {
					minusEnd = minusEnd + 2;
				}
                start = start - minus;
				end = end - minusEnd;
				
                return { start: start, end: end, text: s.text, length: end - start };
			}
			input.focus ();
			if (typeof(input.selectionStart) == "number") {
				start = input.selectionStart;
			} else {
				s = document.selection.createRange();
				re = input.createTextRange();
				rc = re.duplicate();
				re.moveToBookmark(s.getBookmark());
				rc.setEndPoint("EndToStart", re);
				start = rc.text.length;
			}
			if (number > 0) {
				for (var i = 0; i <= number; i++) {
					var w = input.value.indexOf("\n", position);
					if (w != -1 && w < start) {
						position = w + 1;
						minus++;
					} else {
						i = number;
					}
				}
			}
            start = start - minus;
			return { start: start, end: start, text: s.text, length: 0 };
		} else if (typeof(input.selectionStart) == "number" ) {
            start = input.selectionStart;
			end = input.selectionEnd;
			part = input.value.substring(input.selectionStart, input.selectionEnd);
			return { start: start, end: end, text: part, length: end - start };
		} else { return { start: undefined, end: undefined, text: undefined, length: undefined }; }
	},

	// function for the replacement of the selected text
	replaceSelection: function(inputStr) {
		var input = this.jquery ? this[0] : this; 
		//part for IE and Opera
		var start;
		var end;
		var position = 0;
		var rc;
		var re;
		var number = 0;
		var minus = 0;
		var mozScrollFix = ( input.scrollTop == undefined ) ? 0 : input.scrollTop; 
		if (document.selection && typeof(input.selectionStart) != "number") {
			var s = document.selection.createRange();
			
			// IE support
			if (typeof(input.selectionStart) != "number") { // return null if the selected text not from the needed area
				var firstRe;
				var secondRe;
				re = input.createTextRange();
				rc = re.duplicate();
				firstRe = re.text;
				re.moveToBookmark(s.getBookmark());
				secondRe = re.text;
				rc.setEndPoint("EndToStart", re);
				if (firstRe == secondRe && firstRe != s.text) {
					return this;
				}
			}
			if (s.text) {
				part = s.text;
				if (input.value.match(/\n/g) != null) {
					number = input.value.match(/\n/g).length;// number of EOL simbols
				}
				// IE support
				start = rc.text.length; 
				// remove all EOL to have the same start and end positons as in MOZILLA
				if (number > 0) {
					for (var i = 0; i <= number; i++) {
						var w = input.value.indexOf("\n", position);
						if (w != -1 && w < start) {
							position = w + 1;
							minus++;
							
						} else {
							i = number;
						}
					}
				}
				s.text = inputStr;
				caretPositionAmp = rc.text.length + inputStr.length;
				re.move("character", caretPositionAmp);
				document.selection.empty();
				input.blur();
			}
			return this;
		} else if (typeof(input.selectionStart) == "number" && // MOZILLA support
				input.selectionStart != input.selectionEnd) {
			
			start = input.selectionStart;
			end = input.selectionEnd;
			input.value = input.value.substr(0, start) + inputStr + input.value.substr(end);
			position = start + inputStr.length;
			input.setSelectionRange(position, position); 
			input.scrollTop = mozScrollFix;
			return this;
		}
		return this;
	},
	
    //Set Selection in text
	setSelection: function(startPosition, endPosition) {
        startPosition = parseInt(startPosition);
        endPosition = parseInt(endPosition);
        
        var input = this.jquery ? this[0] : this; 
        input.focus ();
		if (typeof(input.selectionStart) != "number") {
            re = input.createTextRange();
            if (re.text.length < endPosition) {
                endPosition = re.text.length+1;
            }
        }
        if (endPosition < startPosition) {
            return this;
        }
        if (document.selection) { 
            var number = 0;
            var plus = 0;
			var position = 0;
			var plusEnd = 0;
            if (typeof(input.selectionStart) != "number") { // IE
                re.collapse(true); 
                re.moveEnd('character', endPosition); 
                re.moveStart('character', startPosition); 
                re.select(); 
                return this;
            } else if (typeof(input.selectionStart) == "number") {      // Opera
                if (input.value.match(/\n/g) != null) {
					number = input.value.match(/\n/g).length;// number of EOL simbols
                }
                if (number > 0) {
                    for (var i = 0; i <= number; i++) {
						var w = input.value.indexOf("\n", position);
						if (w != -1 && w < startPosition) {
                            position = w + 1;
							plus++;
							plusEnd = plus;
                        } else if (w != -1 && w >= startPosition && w <= endPosition) {
							if (w == startPosition + 1) {
								plus--;
								plusEnd--;
								position = w + 1;
                                continue;
							}
							position = w + 1;
							plusEnd++;
						} else {
							i = number;
						}
					}
				}
                startPosition = startPosition +plus;
                endPosition = endPosition + plusEnd;
                input.selectionStart = startPosition; 
                input.selectionEnd = endPosition;
                return this;
            } else {
                return this;
            }
        }
        else if (input.selectionStart) {   // MOZILLA support
            input.focus ();
            input.selectionStart = startPosition; 
            input.selectionEnd = endPosition; 
            return this;
        } 
    },
	
	// insert text at current caret position
	insertAtCaretPos: function(inputStr) {
		var input = this.jquery ? this[0] : this; 
		var start;
		var end;
		var position;
		var s;
		var re;
		var rc;
		var point;
		var minus = 0;
		var number = 0;
		var mozScrollFix = ( input.scrollTop == undefined ) ? 0 : input.scrollTop; 
		input.focus();
		if (document.selection && typeof(input.selectionStart) != "number") {
			if (input.value.match(/\n/g) != null) {
				number = input.value.match(/\n/g).length;// number of EOL simbols
			}
			point = parseInt(caretPositionAmp);
			if (number > 0) {
				for (var i = 0; i <= number; i++) {
					var w = input.value.indexOf("\n", position);
					if (w != -1 && w <= point) {
						position = w + 1;
						point = point - 1;
						minus++;
					} 
				}
			}
		}
		caretPositionAmp = parseInt(caretPositionAmp);
		// IE
		input.onmouseup = function() { // for IE because it loses caret position when focus changed
			if (document.selection && typeof(input.selectionStart) != "number") {
                input.focus();
                s = document.selection.createRange();
                re = input.createTextRange();
				rc = re.duplicate();
                re.moveToBookmark(s.getBookmark());
                rc.setEndPoint("EndToStart", re);
                caretPositionAmp = rc.text.length;
            }
		}

		if (document.selection && typeof(input.selectionStart) != "number") {
			s = document.selection.createRange();
			if (s.text.length != 0) {
				return this;
			}
			re = input.createTextRange();
			textLength = re.text.length;
			rc = re.duplicate();
			re.moveToBookmark(s.getBookmark());
			rc.setEndPoint("EndToStart", re);
			start = rc.text.length; 
            if (caretPositionAmp > 0 && start ==0) {
                minus = caretPositionAmp - minus;
				re.move("character", minus);
				re.select();
				s = document.selection.createRange();
				caretPositionAmp += inputStr.length;
			} else if (!(caretPositionAmp >= 0) && textLength ==0) {
                s = document.selection.createRange();
				caretPositionAmp = inputStr.length + textLength;
			} else if (!(caretPositionAmp >= 0) && start ==0) {
                re.move("character", textLength);
				re.select();
				s = document.selection.createRange();
				caretPositionAmp = inputStr.length + textLength;
			} else if (!(caretPositionAmp >= 0) && start > 0) { 
                re.move("character", 0);
                document.selection.empty();
                re.select();
                s = document.selection.createRange();
                caretPositionAmp = start + inputStr.length;
            } else if (caretPositionAmp >= 0 && caretPositionAmp == textLength) { 
                if (textLength != 0) {
                    re.move("character", textLength);
                    re.select();
                } else {
                    re.move("character", 0);
                }
				s = document.selection.createRange();
				caretPositionAmp = inputStr.length + textLength;
			} else if (caretPositionAmp >= 0 && start != 0 && caretPositionAmp >= start) { 
                minus = caretPositionAmp - start;
				re.move("character", minus);
				document.selection.empty();
				re.select();
				s = document.selection.createRange();
				caretPositionAmp = caretPositionAmp + inputStr.length; 
			} else if (caretPositionAmp >= 0 && start != 0 && caretPositionAmp < start) { 
                re.move("character", 0);
				document.selection.empty();
				re.select();
				s = document.selection.createRange();
				caretPositionAmp = caretPositionAmp + inputStr.length; 
			} else { 
                document.selection.empty();
				re.select();
				s = document.selection.createRange();
				caretPositionAmp = caretPositionAmp + inputStr.length; 
			} 
			s.text = inputStr; 
			input.focus();

			return this;
		} else if (typeof(input.selectionStart) == "number" && // MOZILLA support
				input.selectionStart == input.selectionEnd) {
			position = input.selectionStart + inputStr.length;
			start = input.selectionStart;
			end = input.selectionEnd;
			input.value = input.value.substr(0, start) + inputStr + input.value.substr(end);
			input.setSelectionRange(position, position); 
			input.scrollTop = mozScrollFix; 
			return this;
		}
		return this;
	},	

	
	// Set caret position
	setCaretPos: function(inputStr) {

		var input = this.jquery ? this[0] : this; 
		var s;
		var re;
		var position;
		var number = 0;
		var minus = 0;
		var w;
		input.focus();
		if (parseInt(inputStr) == 0) {
			return this;
		}
		//if (document.selection && typeof(input.selectionStart) == "number") {
		if (parseInt(inputStr) > 0) {
			inputStr = parseInt(inputStr) - 1;
			if (document.selection && typeof(input.selectionStart) == "number" && input.selectionStart == input.selectionEnd) {
				if (input.value.match(/\n/g) != null) {
					number = input.value.match(/\n/g).length;// number of EOL simbols
				}
				if (number > 0) {
					for (var i = 0; i <= number; i++) {
						w = input.value.indexOf("\n", position);
						if (w != -1 && w <= inputStr) {
							position = w + 1;
							inputStr = parseInt(inputStr) + 1;
						} 
					}
				}
			}
		} 
		else if (parseInt(inputStr) < 0) {
			inputStr = parseInt(inputStr) + 1;
			if (document.selection && typeof(input.selectionStart) != "number") {
				inputStr = input.value.length + parseInt(inputStr);
				if (input.value.match(/\n/g) != null) {
					number = input.value.match(/\n/g).length;// number of EOL simbols
				}
				if (number > 0) {
					for (var i = 0; i <= number; i++) {
						w = input.value.indexOf("\n", position);
						if (w != -1 && w <= inputStr) {
							position = w + 1;
							inputStr = parseInt(inputStr) - 1;
							minus += 1;
						} 
					}
					inputStr = inputStr + minus - number;
				}
			} else if (document.selection && typeof(input.selectionStart) == "number") {
				inputStr = input.value.length + parseInt(inputStr);
				if (input.value.match(/\n/g) != null) {
					number = input.value.match(/\n/g).length;// number of EOL simbols
				}
				if (number > 0) {
					inputStr = parseInt(inputStr) - number;
					for (var i = 0; i <= number; i++) {
						w = input.value.indexOf("\n", position);
						if (w != -1 && w <= (inputStr)) {
							position = w + 1;
							inputStr = parseInt(inputStr) + 1;
							minus += 1;
						} 
					}
				}
			} else { inputStr = input.value.length + parseInt(inputStr); }
		} else { return this; }
		// IE
		if (document.selection && typeof(input.selectionStart) != "number") {
			s = document.selection.createRange();
			if (s.text != 0) {
				return this;
			}
			re = input.createTextRange();
			re.collapse(true);
			re.moveEnd('character', inputStr);
			re.moveStart('character', inputStr);
			re.select();
			caretPositionAmp = inputStr;
			
			return this;
		} else	if (typeof(input.selectionStart) == "number" && // MOZILLA support
				input.selectionStart == input.selectionEnd) {
			input.setSelectionRange(inputStr, inputStr); 
			return this;
		}
		return this;
		
	},	

	countCharacters: function(str) {
		var input = this.jquery ? this[0] : this;
		if (input.value.match(/\r/g) != null) {
			return input.value.length - input.value.match(/\r/g).length;
		}
		return input.value.length;
	},

	setMaxLength: function(max, f) {
		this.each(function() {
			var input = this.jquery ? this[0] : this;
			var type = input.type;
			var isSelected;	
			var maxCharacters;
			// remove limit if input is a negative number
			if (parseInt(max) < 0) {
				max=100000000;
			}
			if (type == "text") {
				input.maxLength = max;
			}
			if (type == "textarea" || type == "text") {
				input.onkeypress = function(e) {
					var spacesR = input.value.match(/\r/g);
					maxCharacters = max;
					if (spacesR != null) {
						maxCharacters = parseInt(maxCharacters) + spacesR.length;
					}
					// get event
					var key = e || event;
					var keyCode = key.keyCode;
					// check if any part of text is selected
					if (document.selection) {
						isSelected = document.selection.createRange().text.length > 0;
					} else {
						isSelected = input.selectionStart != input.selectionEnd;
					}
					if (input.value.length >= maxCharacters && (keyCode > 47 || keyCode == 32 ||
							keyCode == 0 || keyCode == 13) && !key.ctrlKey && !key.altKey && !isSelected) {
						input.value = input.value.substring(0,maxCharacters);
						if (typeof(f) == "function") { f() } //callback function
						return false;
					}
				}
				input.onkeyup = function() { 
					var spacesR = input.value.match(/\r/g);
					var plus = 0;
					var position = 0;
					maxCharacters = max;
					if (spacesR != null) {
						for (var i = 0; i <= spacesR.length; i++) {
							if (input.value.indexOf("\n", position) <= parseInt(max)) {
								plus++;
								position = input.value.indexOf("\n", position) + 1;
							}
						}
						maxCharacters = parseInt(max) + plus;
					} 
					if (input.value.length > maxCharacters) {  
						input.value = input.value.substring(0, maxCharacters); 
						if (typeof(f) == "function") { f() }
						return this;
					}
				}
			} else { return this; }
		})
		return this;
	}
}); 
