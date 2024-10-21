function ageCalculater(month, year) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; 
  const currentDay = currentDate.getDate();

  const monthsMap = {
    'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
    'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
  };
  const birthMonth = monthsMap[month];
  let age = currentYear - year;
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < 1)) {
    age--; 
  }

  return age;
}

export { ageCalculater };
