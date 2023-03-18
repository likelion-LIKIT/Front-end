export function MarkDownParser(contents) {
  const boldPattern = /\*\*(.*?)\*\*/g; /* eslint-disable-line */
  const italicPattern = /\_(.*?)\_/g; /* eslint-disable-line */

  contents = contents.replace(/[\#]{4}\s(.+)/g,"<h4>$1</h4>"); /* eslint-disable-line */
  contents = contents.replace(/[\#]{3}\s(.+)/g,"<h3>$1</h3>"); /* eslint-disable-line */
  contents = contents.replace(/[\#]{2}\s(.+)/g,"<h2>$1</h2>"); /* eslint-disable-line */
  contents = contents.replace(/[\#]{1}\s(.+)/g,"<h1>$1</h1>"); /* eslint-disable-line */

  contents = contents.replace(boldPattern, "<strong>$1</strong>");
  contents = contents.replace(italicPattern, "<i>$1</i>");

  contents = contents.replace(/\n/g, "<br/>");

  // p tag
  // contents = contents.replace(/^\s*(\n)?(.+)/gm, function(m){
  //     return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>'; /* eslint-disable-line */
  //   });

  return contents;
}
