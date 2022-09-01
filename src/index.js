'use strict'

import { url,urlcity } from "./setting";

//Memory
let citiesArr = [];
let citiesErrors = [];

//Your location button view
const intructionsButton = document.querySelector('#intructions-button');
const singleCard = document.querySelector('#single_card');

//Cards section.
const cardsGrid = document.querySelector('#cards');

//Search Bar
const searchBar = document.querySelector('#city__input');
const searchSubmit = document.querySelector('#search__submit');

//Errors
const errorLabel = document.querySelector('#error_label');

//Classes for search bar
const errorClass = 'w-3/4 ring-red-500 ring-2 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent';
const noErrorClass = 'w-3/4 ring-blue-500 ring-2 rounded-lg border-transparent appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent';

//Modal elements.
////////////////////////////////////////////////////////////////////////////////////////////
const modalCompenetContainer = document.querySelector('#modal-compenet-container');
const modalFlexContainer = document.querySelector('.modal-flex-container');
const modalBgContainer = document.querySelector('.modal-bg-container');
const modalContainer = document.querySelector('.modal-container');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalWrapperFlex = document.querySelector('.modal-wrapper-flex')
const modalIcon = document.querySelector('.modal-icon');
const modalContent = document.querySelector('.modal-content');
const modalContentMaxTemp = document.querySelector('.modal-content-title');
const modalText = document.querySelector('.modal-text');
const modalTextContentDtitle = document.querySelector('.modal-text-content-des-title');
const modalTextContentMinTemp = document.querySelector('.modal-text-content-description');
const modalTextContentPressure = document.querySelector('.modal-text-content-hardiness');
const modalTextContentHumidity = document.querySelector('.modal-text-content-taste');
const modalActions = document.querySelector('.modal-actions');
const modalSpaceContainer = document.querySelector('.modal-space-container');
const modalIconImage = document.querySelector('#model-icon-image');
//Botton
const modalActionBotton = document.querySelector('.modal-action-botton');

modalCompenetContainer.className = 'hidden fixed inset-0';
modalFlexContainer.className = 'flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0';
modalBgContainer.className = 'fixed inset-0 bg-gray-700 bg-opacity-75';
modalContainer.className = 'inline-block align-bottom bg-blue-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full';
modalWrapper.className = 'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4';
modalWrapperFlex.className = 'sm:flex sm:items-start';
modalIcon.className = 'mx-auto flex shrink-0 items-center justify-center h-2/4 w-1/4 object-contain rounded-full bg-red-100 sm:mx-0 h-10 w-10';
modalContent.className = 'text-center mt-3 sm:ml-0 sm:ml-4 sm:text-left';
modalText.className = 'flex flex-col gap-2 justify-center content-around';
modalTextContentDtitle.className = 'text-lg font-medium text-gray-900';
modalContentMaxTemp.className = 'pb-2 text-lg font-medium text-gray-900';
modalTextContentMinTemp.className = 'pb-2 text-lg font-medium text-gray-900';
modalTextContentPressure.className = 'pb-2 text-lg font-medium text-gray-900';
modalTextContentHumidity.className = 'pb-2 text-lg font-medium text-gray-900';
modalActions.className = 'px-4 py-3 sm:px-6 sm:flex justify-center';
modalActionBotton.className = 'w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-200 hover:bg-white focus:outline-none ring-2 ring-offset-2 ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm';
modalSpaceContainer.className = 'hidden sm:inline-block align-middle h-screen';
modalIconImage.className = 'h-full w-full'
////////////////////////////////////////////////////////////////////////////////////////////


//Open or close modal
const toggleModel = (node) => {
    node.classList.toggle('hidden');
}

//Creating a card.
const createCard = (node,weatherData,mainData,cityName) => {

    const card = document.createElement('div');
    card.className = 'cursor-pointer p-5 w-auto bg-blue-200 bg-blue-100 rounded-lg text-left overflow-hidden shadow-xl shadow-blue-800 transform transition-all hover:bg-blue-500';
    
    const cardFlex = document.createElement('div');
    cardFlex.className = 'flex gap-2 flex-col content-center';
    
    const cardImageCont = document.createElement('div');
    cardImageCont.className = 'w-auto mx-auto';
    
    //|==> Titile
    const cardTitleContainer = document.createElement('div');
    cardTitleContainer.className = 'w-320 flex gap-2 flex-col content-center';

    const cardTitle = document.createElement('h1');
    cardTitle.className = 'text-center text-4xl';
    cardTitle.innerText = `${cityName}`;

    //|==> Image
    const cardImage = document.createElement('img');
    cardImage.src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

    const cardInformation = document.createElement('div');
    
    const cardInformationFlex = document.createElement('div');
    cardInformationFlex.className = 'w-320 flex gap-2 flex-col content-center';
    
    //|==> Contnet text
    const cardInformationTitle =  document.createElement('h1');
    cardInformationTitle.className = 'text-center';
    cardInformationTitle.innerText = `${weatherData.description.toUpperCase()}`;
    
    const cardInformationtTemperature = document.createElement('p');
    cardInformationtTemperature.className = 'text-center text-4xl';
    cardInformationtTemperature.innerText = `${Math.floor(mainData.temp - 273.15)}`;

    const cardInformationTemperatureSpan = document.createElement('span');
    cardInformationTemperatureSpan.innerText = '°C';

    //Append to the dom.
    const containersFlex = [cardTitleContainer,cardImageCont,cardInformation];
    const contentSecondContainer = [cardInformationTitle,cardInformationtTemperature];

    node.appendChild(card);
    card.appendChild(cardFlex);
    cardFlex.append(...containersFlex);
    cardTitleContainer.appendChild(cardTitle);
    cardImageCont.appendChild(cardImage);
    cardInformation.appendChild(cardInformationFlex);
    cardInformationFlex.append(...contentSecondContainer);
    cardInformationtTemperature.appendChild(cardInformationTemperatureSpan);

    card.addEventListener('click', () => {
        toggleModel(modalCompenetContainer);
        modalContentMaxTemp.textContent = `Maximum temperature: ${Math.floor(mainData.temp_max - 273.15)} °C`;
        modalTextContentMinTemp.textContent = `Minimum temperature: ${Math.floor(mainData.temp_min - 273.15)} °C`;
        modalTextContentPressure.textContent = `Pressure (on the sea level): ${mainData.pressure} hPa`;
        modalTextContentHumidity.textContent = `Humidity ${mainData.humidity}%`;
        modalIconImage.src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
    });
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

const countryNameMatch = (str) => {
    if(str.match("^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$",'gi')){
        return true;
    }else{
        false;
    };
};

const cityNameNumber = (str) => {
    let bool = false;
    str.split('').forEach(element => {
        let num = parseInt(element);
        if(Number.isInteger(num)){
            return bool = true;
        }
    });
    return bool;
};

const cityIsOnMemory = (str) => {
    return citiesArr.includes(str) ? true : false;
};

const cityIsOnErrors = (str) => {
    return citiesErrors.includes(str) ? true : false;
} 

const fetchData = async (baseUrl,node,cityName) => {
    try{
        const dataFromApi = await fetch(baseUrl).then((response) => {
            if(!response.ok){
                throw new Error("Data can not be requested 😔");
            }
            return response.json();
        }),
        weatherData = dataFromApi.weather[0],
        mainData = dataFromApi.main,
        cityName = dataFromApi.name;
        createCard(node, weatherData,mainData,cityName);
    }catch (e){
        errorLabel.innerText = 'City name does not exist or is misspelled 👀';
        searchBar.className = errorClass;
        citiesErrors.push(cityName);
        console.error(`${e.message}`);
    }
}

intructionsButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(singleCard.firstChild.nodeName === '#text'){
        if(navigator.geolocation){
            removeAllChildNodes(singleCard);
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude
                const strLat = lat.toString();
                const strLong = long.toString();
                const newUrl = url.replace('{coord_x}',strLat).replace('{coord_y}',strLong);
                fetchData(newUrl,singleCard);
            });
        }else{
            console.error('Your browser does not support geolocation API ☠');
        }
    }
});

searchSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let errorMessages = [];
    const cityName = searchBar.value;
    if(cityName === '' || cityName === null){
        errorMessages.push('City name is required 👀');
    }

    if(cityNameNumber(cityName)){
        errorMessages.push('Numbers are not allowed 👀');
    }

    if(cityIsOnErrors(cityName)){
        errorMessages.push('This city not exist 🤔');
    }else if(cityIsOnMemory(cityName)){
        errorMessages.push('City is already displayed 👀');
    }
    
    if(errorMessages.length === 0 && countryNameMatch(cityName) ){
        try{
            errorLabel.innerText = '';
            searchBar.className = noErrorClass;
            citiesArr.push(cityName);
            const cityWeatherUrl = urlcity.replace('{city_name}',cityName).replace(' ','%20');
            fetchData(cityWeatherUrl,cardsGrid,cityName);
            searchBar.value = '';
        }catch(e){
            console.error(e.message);
        }
    }else{
        e.preventDefault();
        searchBar.className = errorClass;
        errorLabel.innerText = errorMessages.join(', ');
    }
});

modalActionBotton.addEventListener('click',() => {toggleModel(modalCompenetContainer)});

modalBgContainer.addEventListener('click',() => {toggleModel(modalCompenetContainer)});