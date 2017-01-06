// HOW TO USE: Copy contents of this file to Script editor, save, and use the ACRONYM() formula, e.g. "=ACRONYM(B2)"
// https://github.com/yesokay/gsheets-acronym/

function ACRONYM(phrase) {
  
  var words = phrase.split(' ');
  var acronym = ""
  
  for (var i = 0; i < words.length; i++) {
    acronym = acronym + words[i].charAt(0);
  }

  return acronym;
}
