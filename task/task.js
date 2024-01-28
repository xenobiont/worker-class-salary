class Worker {
	constructor(name, surname, rate) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;

		this.daysWorkedMap = new Map();
	}

	getFullName() {
		return this.name + this.surname;
	}

	getKey(year, month) {
		return `${year}-${month}`;
	}

	getSalary(year = new Date().getFullYear(), month = new Date().getMonth()) {
		const daysTotal = Worker.getMonthWorkingDaysCount(year, month);

		const key = this.getKey(year, month);
		const daysWorked = this.daysWorkedMap.get(key) || 0;
		// console.log('days Total', daysTotal);
		// console.log('total', salaryTotal);
		// console.log('days worked', daysWorked);
		const salaryActual = (daysWorked / daysTotal) * this.rate;

		return salaryActual;
	}

	work(days, year = new Date().getFullYear(), month = new Date().getMonth()) {
		const key = this.getKey(year, month);

		let newDaysTotal;

		if (this.daysWorkedMap.has(key)) {
			const oldTotal = this.daysWorkedMap.get(key);
			newDaysTotal = days + oldTotal;
		} else {
			newDaysTotal = days;
		}

		// check for overtimes
		const maxDays = Worker.getMonthWorkingDaysCount(year, month);

		if (newDaysTotal > maxDays) {
			throw new Error('Overtimes are not allowed');
		}

		this.daysWorkedMap.set(key, newDaysTotal);
		console.log(this.daysWorkedMap);
	}

	getWorkingDays(
		year = new Date().getFullYear(),
		month = new Date().getMonth(),
	) {
		const key = this.getKey(year, month);
		return this.daysWorkedMap.get(key) || 0;
	}

	static getMonthWorkingDaysCount(
		year = new Date().getFullYear(),
		month = new Date().getMonth(),
	) {
		const periodStart = new Date(year, month);
		let periodEnd;

		if (!year && !month) {
			periodEnd = new Date();
		} else {
			periodEnd = new Date(year, month + 1);
		}

		const DAYS = 1000 * 60 * 60 * 24;

		const daysInPeriod = (periodEnd - periodStart) / DAYS;

		console.log('DAYS', daysInPeriod);

		const date = new Date(periodStart.getTime());

		let workingDaysCount = 0;

		for (let i = 1; i <= daysInPeriod; i++) {
			date.setDate(i);
			const weekDay = date.getDay();
			if (weekDay !== 0 && weekDay !== 6) workingDaysCount++;
		}
		return workingDaysCount;
	}
}

const Pete = new Worker('Pete', 'Sullivan', 2000);

Pete.work(12, 2022, 11);
Pete.work(7, 2022, 11);

console.log('salary', Pete.getSalary(2022, 11));
