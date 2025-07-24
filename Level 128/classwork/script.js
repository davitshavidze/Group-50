
function getEmojiApi(){
  return new Promise(function(resolve, reject){
    resolve('⛅');
  })
}

function getEmoji(data){
  if(data == '❄️'){
    console.log("Its Snowy!")
  } else if (data == '☀️'){
    console.log("Its Sunny!")
  } else if (data == '⛅'){
    console.log("Its Cloudy!")
  }
}

function error(data){
  console.log(`rejected data => ${data}`)
}

getEmojiApi().then(getEmoji, error)

