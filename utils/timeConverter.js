export function convertMs(timeMs)
{
    if (timeMs < 60 * 1000)
    {
        const timeSec = Math.floor(timeMs / 1000);

        return `${timeSec} second${makePlural(timeSec)}`;
    }
    else if (timeMs < 60 * 60 * 1000)
    {
        const timeMin = Math.floor(timeMs / (1000 * 60));

        return `${timeMin} minute${makePlural(timeMin)}`;
    }
    else if (timeMs < 60 * 60 * 24 * 1000)
    {
        const timeHr = Math.floor(timeMs / (1000 * 60 * 60 ));

        return `${timeHr} hour${makePlural(timeHr)}`;
    }
    else if (timeMs < 60 * 60 * 24 * 30 * 1000)
    {
        const timeDay = Math.floor(timeMs / (1000 * 60 * 60 * 24 ));

        return `${timeDay} day${makePlural(timeDay)}`;
    }
    else if (timeMs < 60 * 60 * 24 * 30 * 12 * 1000)
    {
        const timeMon = Math.floor(timeMs / (1000 * 60 * 60 * 24 * 30 ));

        return `${timeMon} month${makePlural(timeMon)}`;
    }
    else
    {
        const timeYr = Math.floor(timeMs / (1000 * 60 * 60 * 24 * 30 ));

        return  `${timeYr} year${makePlural(timeYr)}`;
    }
}

function makePlural(quantity)
{
    return quantity > 1 ? "s" : "";
}