const DATA_URL='https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(DATA_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};
const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src= await getCats();
};

loadImg();

const btn = this.document.getElementById('change-cat');
btn.addEventListener('click', loadImg());

