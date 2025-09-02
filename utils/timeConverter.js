export function convertMs(timeMs)
{
    if (timeMs < 60 * 1000)
    {
        return `${Math.floor(timeMs / 1000)} seconds`;
    }
    else if (timeMs < 60 * 60 * 1000)
    {
        return `${Math.floor(timeMs / (1000 * 60))} minutes`;
    }
    else if (timeMs < 60 * 60 * 24 * 1000)
    {
        return `${Math.floor(timeMs / (1000 * 60 * 60 ))} hours`;
    }
    else if (timeMs < 60 * 60 * 24 * 30 * 1000)
    {
        return `${Math.floor(timeMs / (1000 * 60 * 60 * 24 ))} days`
    }
    else if (timeMs < 60 * 60 * 24 * 30 * 12 * 1000)
    {
        return `${Math.floor(timeMs / (1000 * 60 * 60 * 24 * 30 ))} months`
    }
    else
    {
        return  `${Math.floor(timeMs / (1000 * 60 * 60 * 24 * 30 ))} years`;
    }
}