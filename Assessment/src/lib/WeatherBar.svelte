<script>
export async function load({ fetch }) {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-45.8742&longitude=170.5036&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=Pacific%2FAuckland&forecast_days=1`);
  const report = await res.json();
  const code = report.daily.weather_code;
  WeatherCodeDecipher(code);
  return {report};
}
export let report;
function WeatherCodeDecipher(WeatherCode)
{
    let ActualCode;
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
    return { ActualCode };
}
export let ActualCode;
</script>

<div class="container">
    <p>Current Temperature {report.current.temperature_2m}</p>
    <p>Max UV {report.daily.uv_index_max}</p>
    <p>Max Temp of the day {report.daily.temperature_2m_max}</p>
    <p>Min Temp of the day {report.daily.temperature_2m_min}</p>
    <p>Current Weather Type {ActualCode}</p>
</div>