
const searchInput = document.querySelector('.searchInput'),
inputBox = document.querySelector('.inputBox'),
suggestionBox = document.querySelector('.autocomBox');

const button = document.querySelector('.button');
let linkTag = document.querySelector('a');

inputBox.onkeyup = (e) =>{
    let userinput = e.target.value;
    let emptyArray = [];

    if(userinput){
        button.onclick = () =>{
            webLink = `https://www.google.com/search?q=${inputBox.value}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
            console.log("Search btn work");
        }
        emptyArray = suggestion.filter((data) => {
            return data.toLocaleLowerCase().includes(userinput.toLocaleLowerCase());
        })

        emptyArray = emptyArray.map((data) => {
            return data =`<li>${data}</li>`;
        })

        searchInput.classList.add('active');
        showSuggestions(emptyArray);

        suggestionBox.addEventListener('click', (e)=>{
            if(e.target.tagName === 'LI'){
                select(e.target)
            }
        })
    }else{
        searchInput.classList.remove('active');
    }

    function select(element) {
       let someValue = element.textContent
       console.log("Selected Value =>", someValue)
       inputBox.value = someValue;
    }

    console.warn("Suggestion", emptyArray)
    console.log("User Input Value",userinput);

}

let showSuggestions = (list) =>{
    let listData;
    if(!list.length){
        let userData = inputBox.value;
        listData = `<li>${userData}</li>`;
        // console.log("List data =>", list.length);
    }else{
        listData = list.join('');
    }
    suggestionBox.innerHTML = listData;
}