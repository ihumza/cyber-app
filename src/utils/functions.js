import countries from '@/utils/countries.json';
export const getFormattedDateTime = (datetime) => {
  const date = new Date(datetime);
  if (!isNaN(date.getTime())) {
    // Check if date is valid
    return `${date.toDateString()} ${date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Ensure 12-hour format with AM/PM
    })}`;
  } else {
    return 'Invalid Date';
  }
};

export const getCountryName = (code) => {
  if (code) {
    return countries.find((country) => country.value == code).label;
  } else {
    return 'N/A';
  }
};
