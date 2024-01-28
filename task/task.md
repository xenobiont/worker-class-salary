# Task

Implement class Worker, that will take the following arguments upon creation: name, surname, rate (salary per month).

create a couple of workers

Example:

```js
const johnDoe = new Worker('John', 'Doe', 10);
console.log(johnDoe.name); // John
console.log(johnDoe.surname); // Doe
console.log(johnDoe.rate); // 10
```

## fullName

Implement fullName getter, that will return the full name of worker

```js
console.log(johnDoe.fullName); // John Doe
```

## Working days

Implement `work` method, that will take a number or days, and 2 optional arguments: `year` and `month` (by default current month and year should be used).

Number of days should be stored in daysWorkedMap collection.

```js
johnDoe.work(12, 2022, 12); // adds 12 days for December 2022
johnDoe.work(7, 2022, 12); // adds 7 more days
johnDoe.work(15); // adds 15 days for current month (January 2023)
```

Implement `getWorkingDays` method with optional `year` and `month` arguments (by default current month and year should be used) that will return working days count for this worker for the specified month.

```js
johnDoe.getWorkingDays(2022, 12); // 19
johnDoe.getWorkingDays(2023, 0); // 15
```

## Salary

Add static method `getMonthWorkingDaysCount` with optional `year` and `month` arguments (by default current month and year should be used) that will return the number of working days in the specified month (i.e. all days except Sundays and Mondays). If the month is still not over (i.e. we do the calculation for the current month) if should return only the actual working days that have already passed.

```js
Worker.getMonthWorkingDaysCount(2022, 11); // 22
```

Implemenent `getSalary` method with optional `year` and `month` arguments (by default current month and year should be used) that will return the salary of the worker for the specified month.

Salary should be calculated, taking into account the number of days that worker actually worked this month and total number of working days

## Overtimes

`work` method should throw an Error ith a message 'Overtimes are not allowed' if the number of working days per month goes over the limit (number of working days in this month);
