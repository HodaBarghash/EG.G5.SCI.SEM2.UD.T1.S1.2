function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GMIZDx7YzH":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxqt-R4K-r5u9oNPPG9WQZeIo6qRwofOXM_y0YAGKruyUoQbwvtGOaSmcHle9hof1O_/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

