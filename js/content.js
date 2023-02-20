setTimeout(() => {  
	let yt = `<iframe src="https://www.youtube.com/embed/vnM6WJrWdkk?autoplay=1&showinfo=0&controls=1&autohide=1&mute=1" title="Subway Surfers Full Gameplay Full HD - 11 Hours 47 Minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%;height: 100%;"></iframe>`;
	let dv = document.createElement("div");
	dv.innerHTML = yt;
	
	let streamContainer = document.getElementsByClassName("appshare-stream-wrap")
	if(streamContainer.length === 0) {
		// Early out if no stream container
		console.warn("No stream. Early out")
		return;
	}

	let stream = streamContainer[0].children[0]
	if(!stream) {
		// Early out if no stream
		console.warn("No stream. Early out")
		return;
	}
	
	stream.style.width = "50%";
	stream.style.margin = 0;
	stream.style.display = "inline-block";
	
	dv.style.width = "50%";
	dv.style.height = "100%";
	dv.style.margin = 0;
	dv.style.display = "inline-block";
	dv.id = "gameplay"

	if(document.getElementById("gameplay")) {
		// Gameplay already added
		console.warn("Gameplay already added. Early out")
		return;
	}
	
	document.getElementsByClassName("appshare-stream-wrap")[0].children[0].after(dv)
}, 10000 /* delay for 10 secs so we know that the user would have connected */);
