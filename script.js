function rpsGame(yourchoice)
{
   var humanchoice , botchoice;
   humanchoice = yourchoice.id;
   botchoice = randomChoice(randomNumber());
   var result = decideWinner(humanchoice, botchoice);
   var message = finalMessage(result);
   rpsFrontEnd(humanchoice,botchoice,message);
}
function randomNumber()
{
    return Math.floor(Math.random()*3);
}
function randomChoice(number)
{
    return ['rock','paper','scissor'][number];
}
function decideWinner(yourchoice, botchoice)
{
    var rpsDatabase = {
        'rock':{'scissor':1, 'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1, 'scissor':0.5, 'rock':0},
    };
    var yourscore = rpsDatabase[yourchoice][botchoice];

    return yourscore;
}
function finalMessage(yourscore)
{
    if(yourscore===0)
    return {'message':'You Lost','color':'red'};
    else if(yourscore===0.5)
    return {'message':'You tied','color':'yellow'};
    else
    return {'message':'You Won!','color':'green'};
}
function rpsFrontEnd(humanChoice, botChoice, Message)
{
    var imageDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    };

    //lets remove all the images
    document.getElementById('choose').remove();
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    humanDiv.setAttribute('id','human');
    var botDiv = document.createElement('div');
    botDiv.setAttribute('id','computer');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imageDatabase[humanChoice]+"' style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML = "<h1 style='color:"+Message['color']+"; font-size:60px;'>"+Message['message']+"</h1>";
    botDiv.innerHTML = "<img src='"+imageDatabase[botChoice]+"' style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
   
    document.getElementById('answer').appendChild(humanDiv);
    document.getElementById('answer').appendChild(messageDiv);
    document.getElementById('answer').appendChild(botDiv);

    let text1=document.createTextNode("Your's choice");
    humanDiv.appendChild(text1);
    let text2=document.createTextNode("Computer's choice");
    botDiv.appendChild(text2);

    var button = document.createElement('a');
    button.setAttribute('id','btn');
    button.href="http://127.0.0.1:5501/index.html";
    button.innerText="Play Again"
    document.getElementById('reset').appendChild(button);
}
