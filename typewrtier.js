const sentence = "hello there from lighthouse labs!";


for (const i in sentence) {
  
  setTimeout(() => {
  process.stdout.write(sentence[i]);
  }, i*100)
};