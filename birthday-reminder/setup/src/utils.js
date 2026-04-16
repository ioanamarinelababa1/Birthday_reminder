// src/utils.js

export const calculateDaysUntil = (date) => {
  const today = new Date();
  const birthday = new Date(date);
  
  // Setăm orele la 0 pentru un calcul precis al zilelor
  today.setHours(0, 0, 0, 0);
  birthday.setFullYear(today.getFullYear());
  birthday.setHours(0, 0, 0, 0);

  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const diff = birthday - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};