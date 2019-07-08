export function getStarships() {
    const endpoint =`https://swapi.co/api/starships/`
    return fetch(endpoint, {mode: 'cors'}).then(res => res.json())
}

export function getPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = Promise.all(promises);
    return pilotObjects;
}