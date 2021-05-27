// async function getGames() {
// 	try {
// 		const response = await fetch('https://api.pokemontcg.io/v2/cards/');
// 		const jsonResults = await response.json();
// 		const pokeArray = jsonResults.data;
// 		console.log(pokeArray);

// 		pokeArray.forEach(function (value) {
// 			document.querySelector('main').innerHTML += `
//             <div class="card">
//                 <img src="${value.images.small}" />
//                 <div class="card__body">
//                     <h1>${value.name}</h1>
//                     <a href="details.html?id=${value.id}">Read More</a>
//                 </div>
//             </div>
//         `;
// 		});
// 	} catch (error) {
// 		document.querySelector('.alert') += showAlertTouser(error, 'danger');
// 	} finally {
//     document.querySelector('.loading').classList.add('hide');
// 	}
// }