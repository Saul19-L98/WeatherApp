'use strict'

const key = '90113132f6c3e5365a76cdb8f8ddb03e';

export const url = `https://api.openweathermap.org/data/2.5/weather?lat={coord_x}&lon={coord_y}&appid=${key}`;
export const urlcity = `https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=${key}`;