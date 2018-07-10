function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length>0) {
    return katzDeliLine.shift()
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length>0) {
    var lineList = "The line is currently:"
    while(katzDeliLine.length>0) {
      lineList += ` ${count++}. ${katzDeliLine.shift()},`
    }
  }
  else {
    return "The line is currently empty."
  }
}