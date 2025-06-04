export const getCoordinates = async (address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
            return null;
        }

        const { lat, lon } = data[0];
        return {
            latitude: parseFloat(lat),
            longitude: parseFloat(lon),
        };
    } catch (error) {
        console.error("Geocoding error:", error);
        return null;
    }
};

export const getNowDateTimeLocal = () => {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);
}
