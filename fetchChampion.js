const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/15.5.1/data/pt_BR/champion.json';

async function fetchChampion() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro ${response.status}`);
        }

        const champions = await response.json();
        const championList = Object.values(champions.data);
        const ul = document.querySelector('#listaCampeoes');

        championList.forEach((champion) => {
            const li = document.createElement('li');
            li.classList.add('flex', 'flex-col', 'items-center', 'p-4', 'w-32', 'h-56', 'border-2', 'rounded-lg', 'color-blue-5', 'shadow-lg', 'm-4');
            li.style.marginTop = "1rem";
            li.style.borderColor = 'var(--color-gold-5)';
            li.style.cursor = 'pointer';
            li.style.overflow = "hidden";
            const img = document.createElement('img');
            img.src = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.id}.png`;
            img.alt = champion.name;
            img.classList.add('w-20', 'h-20', 'object-cover');
            img.style.marginBootom = "2rem";

            const span = document.createElement('span');
            span.textContent = champion.name;
            span.classList.add('text-center', 'text-lg', 'font-semibold', 'text-white');


            li.appendChild(img);
            li.appendChild(span);
            ul.appendChild(li);
        });

    } catch (error) {
        console.error('Erro ao buscar campeões: ', error);
    }
}

fetchChampion();