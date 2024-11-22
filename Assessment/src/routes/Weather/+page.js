export async function load({ fetch }) {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=-45.8742&longitude=170.5036&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=Pacific%2FAuckland&forecast_days=1`);
    const report = await res.json();
    return {report};
  }
