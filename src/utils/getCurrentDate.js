export function getCurrentDate() {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    return currentDate;
}


