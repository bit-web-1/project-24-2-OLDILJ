<script >
    export let data;
    import Head from "$lib/Header.svelte";
    import Bar from "$lib/NavBar.svelte";
    import "$lib/TextStyling.css";
    import "./Style.css";
    let ActualCode = "Mystery Weather";
    WeatherCodeDecipher(data.report.daily.weather_code);
    function WeatherCodeDecipher(WeatherCode)
  {
      switch(WeatherCode)
      {
          case 0:
                ActualCode = "Clear Sky";
                break;
          case 1:
                ActualCode = "Mainly Clear";
                break;
          case 2:
              ActualCode = "Partly Cloudy";
              break;
          case 3:
              ActualCode = "Overcast";
              break;
          case 45:
              ActualCode = "Fog";
              break;
          case 48:
              ActualCode = "Rime Fog";
              break;
          case 51:
              ActualCode = "Light Drizzle";
              break;
          case 53:
              ActualCode = "Moderate Drizzle";
              break;
          case 55:
              ActualCode = "Dense Drizzle";
              break;
          case 56:
              ActualCode = "Light Freezing Drizzle";
              break;
          case 57:
              ActualCode = "Dense Freezing Drizzle";
              break;
          case 61:
              ActualCode = "Slight Rain";
              break;
          case 63:
              ActualCode = "Moderate Rain";
              break;
          case 65:
              ActualCode = "Heavy Rain";
              break;
          case 66:
              ActualCode = "Light Freezing Rain";
              break;
          case 67:
              ActualCode = "Heavy Freezing Rain";
              break;
          case 71:
              ActualCode = "Slight Snowfall";
              break;
          case 73:
              ActualCode = "Moderate Snowfall";
              break;
          case 75:
              ActualCode = "Heavy Snowfall";
              break;
          case 77:
              ActualCode = "Snow Grains";
              break;
          case 80:
              ActualCode = "Slight Rain Showers";
              break;
          case 81:
              ActualCode = "Moderate Rain Showers";
              break;
          case 82:
              ActualCode = "Violent Rain Showers";
              break;
          case 85:
              ActualCode = "Slight Snow Showers";
              break;
          case 86:
              ActualCode = "Heavy Snow Showers";
              break;
          case 95:
              ActualCode = "Thunder Storm";
              break;
          default:
              ActualCode = "Mystery Weather";
              break;
          }
          return {ActualCode}
  }
  
</script>
<Head/>
<Bar/>
<h1>Today's Weather</h1>
<div class="container">
    <p>Current Temperature:&nbsp;<span> {data.report.current.temperature_2m} C</span></p>
    <p>Max UV:&nbsp;  <span> {data.report.daily.uv_index_max} </span></p>
    <p>Max Temp of the day:&nbsp;  <span> {data.report.daily.temperature_2m_max} C</span></p>
    <p>Min Temp of the day:&nbsp; <span> {data.report.daily.temperature_2m_min} C</span></p>
    <p>Current Weather Type:&nbsp;  <span> {ActualCode} </span></p>
</div>