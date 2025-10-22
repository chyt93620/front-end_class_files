const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

fetch(url)
  .then((resp) => {
    return resp.json();
  })

  .then((stations) => {
    const s1 = stations
      .filter((station) => {
        return station.ar.includes("民權西路");
      })

      .filter((station) => {
        return station.available_rent_bikes >= 10;
      })

      .forEach((station) => {
        const address = station.ar;
        const bikes = station.available_rent_bikes;
        console.log(`(${bikes}) ${address}`);
      });
  });
