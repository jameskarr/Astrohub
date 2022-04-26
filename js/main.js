// The user will enter a date. Use that date to get the NASA picture of the day from that date!
// https://api.nasa.gov/

document.querySelector('button').addEventListener('click', goFetch)

function goFetch() {
    const userInput = document.querySelector('input').value
    //to add multiple parameters to url, use & between parameters
    const url = `https://api.nasa.gov/planetary/apod?api_key=mfwsXK54fgcnaTvb5YjZOzEYaXq0fNeh9bgxa0ZZ&date=${userInput}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('p').innerText = data.explanation
            if(data.media_type === 'image') {
                document.querySelector('img').src = data.hdurl
              } else if(data.media_type === 'video') {
                document.querySelector('iframe').src = data.url
              }
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}