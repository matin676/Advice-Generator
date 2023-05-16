async function getAdviceById(adviceId){
    try{
        const response = await fetch(`https://api.adviceslip.com/advice/${adviceId}`);
        const data = await response.json();

        if(data.slip){
            const advice = data.slip.advice;
            document.getElementById('adviceId').textContent = adviceId;
            document.getElementById('adviceText').textContent = `"${advice}"`;
        }else{
            console.log('Advice not found');
        }
    }catch(error){
        console.log('An error occured', error);
    }
}

const randomAdviceId = Math.floor(Math.random() * 200) + 1;
getAdviceById(randomAdviceId);

const dice = document.querySelector('.dice');
dice.addEventListener('click', () => {
    const randomAdviceId = Math.floor(Math.random() * 200) + 1;
    getAdviceById(randomAdviceId);
});