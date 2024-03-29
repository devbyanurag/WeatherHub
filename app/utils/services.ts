export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };

    const formattedTime = date.toLocaleTimeString([], options);

    return `${formattedTime}`
}

export function formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short', 
        day: 'numeric',
    };

    const formattedDate = date.toLocaleDateString([], options);

    return `${formattedDate}`;
}

export function formatWeekDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', 
    };

    const formattedDate = date.toLocaleDateString([], options);

    return `${formattedDate}`;
}

export const kelvinToCelsius = (kelvin: number): string => {
    const value = kelvin - 273.15
    return `${value.toFixed(1)} °C`;
};

export const kelvinToFahrenheit = (kelvin: number): string => {
    const value = (kelvin * 9) / 5 - 459.67;
    return `${value.toFixed(1)} °F`;
};


export function formatVisiblity(val: number): string {
    const km= val/1000
    return `${km.toFixed(2)} km`
}
