class Weather { 
  constructor(city){ 
    this.apiKey = 'c5c71ea6199d3a2f0f4c74006182fffe'; 
    this.city = city; 
  }
  // Fetch weather from API 

  async getWeather(){ 
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`)

    const responseData = await response.json(); 

    return responseData
  }

  //Change weather location 
  changeLocation(city) { 
    this.city = city; 
  }
}
