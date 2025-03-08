const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/pt_BR/champion.json';
async function fetchChampion() {
    try {
        const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new error(`Erro ${response.status}`);
            }
            const champions = await response.json();

            const championList = Object.values(champions.data);
            const ul = document.querySelector('#listaCampeoes');
    
            championList.forEach((champion) => {
                const li = document.createElement('li');
                    li.style.display = "flex";
                    li.style.alignItems = "center";
                    const img = document.createElement('img');
                    img.src = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.id}.png`;
                    img.alt = champion.name;
                    img.width = 50;
                    img.style.marginRight = "10px";
                        const span = document.createElement('span');
                        span.textContent = champion.name;
                            li.appendChild(img);
                            li.appendChild(span);
                            ul.appendChild(li);
            });
    } catch (error) {
        console.error('Erro ao buscar campeões: ', error);
    }
}

fetchChampion();