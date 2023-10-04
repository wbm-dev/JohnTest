function updateSentence() {
    const word1 = document.getElementById('word1').value;
    const word2 = document.getElementById('word2').value;
  
    document.getElementById('result-word1').innerText = word1 || '______';
  }
  
  function generateMessage() {
    const word1 = document.getElementById('word1').value;
    const word2 = document.getElementById('word2').value;
    const resultElement = document.getElementById('result');
  
    if (word1 === 'uncock' && word2 === 'your') {
      resultElement.innerText = 'You are John Martin';
    } else {
      resultElement.innerText = 'IMPOSTER NOT JOHN';
    }
  }
  