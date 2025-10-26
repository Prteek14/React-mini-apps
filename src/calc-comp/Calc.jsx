import { useState } from 'react';
import css from './Calc.module.css';
import Calcform from './Calcform';
import Calcoutput from './Calcoutput';

function Calc() {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalMonths: 0,
    totalDays: 0,
    totalWeeks: 0,
    totalHours: 0,
    nextBirthday: null,
    daysLeft: 0
  });

  const userdate = (selectedDate) => {
    const dob = new Date(selectedDate);
    const cur = new Date();

    const result = find_items(cur, dob);
    const next = getNextBirthday(dob, cur);

    setAge({ ...result, ...next });
  };

  // ✅ accurate calculation
  const find_items = (cur, dob) => {
    let years = cur.getFullYear() - dob.getFullYear();
    let months = cur.getMonth() - dob.getMonth();
    let days = cur.getDate() - dob.getDate();

    // Adjust days and months correctly
    if (days < 0) {
      months--;
      const prevMonthDays = new Date(cur.getFullYear(), cur.getMonth(), 0).getDate();
      days += prevMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Total values
    const diffMs = cur - dob;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    const totalMonths = years * 12 + months;

    return {
      years,
      months,
      days,
      totalMonths,
      totalDays,
      totalWeeks,
      totalHours
    };
  };

  const getNextBirthday = (dob, cur) => {
    let nextBirthday = new Date(cur.getFullYear(), dob.getMonth(), dob.getDate());

    // If birthday already passed this year → next year
    if (cur > nextBirthday) {
      nextBirthday = new Date(cur.getFullYear() + 1, dob.getMonth(), dob.getDate());
    }

    // Calculate days left
    const diffMs = nextBirthday - cur;
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    return { nextBirthday, daysLeft };
  };

  return (
    <div className={css.clacpage}>
      <h1 className={`${css.appname} fw-bold`}>AGE CALCULATOR</h1>
      <div className={`${css.userform} rounded`}>
        <Calcform userdate={userdate} />
        <Calcoutput age={age} />
      </div>
    </div>
  );
}

export default Calc;
