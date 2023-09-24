const loadPhone = async (searchText, isShowAll) =>{
    const res = await fetch( `https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones); 
    displayPhone(phones, isShowAll);
}

const displayPhone = (phones, isShowAll) =>{
    // console.log(phones);
    // STEP:1 
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';

    // display show all button if there are more that 5 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 5 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden') ;
    }

    // display only first 5 phones if not show all
    if(!isShowAll){
        phones = phones.slice(0,5);
    }

    phones.forEach(phone =>{
        // console.log(phone);
        //step:2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card  bg-gray-100 shadow-xl p-4`

        // step:3 set innerHTML
        phoneCard.innerHTML = `
        <figure><img src="${phone.image} " /></figure>
                    <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // step:4 append child
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner
    toggleLoadSpinner(false);

    }
    
    // handle search button
    const handleSearch = (isShowAll) =>{
        toggleLoadSpinner(true);
        const searchField = document.getElementById('search-field') ;
        const searchText = searchField.value;
        console.log(searchText);
        loadPhone(searchText, isShowAll);
}


const toggleLoadSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden');
    }

    
}

// handle show all
const handleShowAll = () =>{
    handleSearch(true);
} 
// loadPhone();