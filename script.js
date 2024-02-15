function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}


function loadJokes(category) {
    console.log('Loading jokes for category:', category);
    fetch('/jokes.json') 
        .then(response => response.json())
        .then(data => {
            console.log('Fetched JSON data:', data);
            const categoryJokes = data.filter(joke => joke.category === category);
            console.log('Filtered jokes for category:', categoryJokes);
            if (categoryJokes.length > 0) {
                const randomJoke = categoryJokes[Math.floor(Math.random() * categoryJokes.length)];
                console.log('Selected random joke:', randomJoke);
                console.log('Joke element:', document.getElementById('joke'));
                document.getElementById('joke').innerHTML = `
                    <p><strong>${randomJoke.setup}</strong></p>
                    <p>${randomJoke.punchline}</p>
                `;
            } else {
                console.log('No jokes found for category:', category);
                document.getElementById('joke').innerHTML = "No jokes found for this category.";
            }
        })
        .catch(error => {
            console.error('Error fetching jokes:', error);
        });
}




