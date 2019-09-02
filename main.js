const form = document.querySelector('form');
const grade1 = document.getElementById('grade1');
const grade2 = document.getElementById('grade2');
const grade3 = document.getElementById('grade3');
const grade4 = document.getElementById('grade4');
const grade5 = document.getElementById('grade5');
const utme = document.getElementById('utme');
const putme = document.getElementById('putme');

const jambAgg = (jambScore) => {
	return jambScore/8;
}

const waecAgg = (...grades) => {
	return grades.reduce((accumulator, grade) => {
		if (grade === 'A1') return accumulator + 4;
		else if (grade === 'B2') return accumulator + 3.6;
		else if (grade === 'B3') return accumulator + 3.2;
		else if (grade === 'C4') return accumulator + 2.8;
		else if (grade === 'C5') return accumulator + 2.4;
		else if (grade === 'C6') return accumulator + 2;
	}, 0)
}


form.addEventListener('submit', e => {
	console.log(jambAgg(utme.value), Number(putme.value), waecAgg(grade1.value, grade2.value, grade3.value, grade4.value, grade5.value ) )
	e.preventDefault();
	const agg = jambAgg(utme.value) + Number(putme.value) + waecAgg(grade1.value, grade2.value, grade3.value, grade4.value, grade5.value );
	alert('Your aggregate is :' + agg);
})
