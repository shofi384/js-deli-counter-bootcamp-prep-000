function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  console.log(`story ${name} story`)
  console.log('Welcome, ${name}.${name} You are number in line.')
  return "Welcome, " +name+ ". You are number " +katzDeliLine.length+ " in line."
}
