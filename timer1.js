const args = process.argv.slice(2);
const beeper = function(args) {

  for (const item of args) {
    let delayInSeconds = parseInt(item) * 1000
    if (delayInSeconds <= 0 || isNaN(delayInSeconds)) {
      continue
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (delayInSeconds));
  }
}
beeper(args);