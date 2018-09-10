function takeANumber (currentLine, name) {
  currentLine. push(name);

  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing (currentLine) {
  if (currentLine.length === 0) {

    return "There is nobody waiting to be served!"
  }
  var firstName = currentLine.shift();

  return `Currently serving ${firstName}.`
}

function currentLine (line) {
  if (line.length === 0) {

    return "The line is currently empty.";
  }
  var str = "The line is currently: ";


  for (let i = 0; i < line.length; i++) {
    str = str + `${i + 1}. ${line[i]}, `;
  }
  str.substr(0,str.length-2)
  return str;
}
