function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  console.log(`story ${name} story`)
  return "Welcome, " +name+ ". You are number " +katzDeliLine.length+ " in line."
}
