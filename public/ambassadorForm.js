let studentRecords = [];

document.getElementById('formData').addEventListener('submit', function (e) {
  e.preventDefault();

  const studentNumber = document.getElementById('studentNumber').value;
  const nameSurname = document.getElementById('nameSurname').value;
  const faculty = document.getElementById('faculty').value;
  const ethnicity = document.getElementById('ethnicity').value;
  const age = document.getElementById('age').value;
  const res = document.getElementById('res').value;
  const commStud = document.getElementById('commStud').value;
  const eventName = document.getElementById('eventName').value;
  const rating = document.getElementById('rating').value; // New rating field

  let existingStudent = studentRecords.find((student) => student.studentNumber === studentNumber);

  if (existingStudent) {
    existingStudent.events.push({ eventName, rating });
    alert(`Event and rating added to existing Ambassador with Student Number: ${studentNumber}`);
  } else {
    const student = {
      studentNumber,
      nameSurname,
      faculty,
      ethnicity,
      age,
      res,
      commStud,
      events: [{ eventName, rating }]
    };

    studentRecords.push(student);
    alert('Ambassador data saved successfully!');
  }

  document.getElementById('formData').reset();

  const formData = {
    studentNumber,
    nameSurname,
    faculty,
    ethnicity,
    age,
    res,
    commStud,
    eventName,
    rating, // Include rating in submission
  };

  fetch('https://formspree.io/f/mwpejyeo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert('Data submitted successfully!');
      } else {
        alert('Failed to submit data.');
      }
    })
    .catch((error) => {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting the data.');
    });
});
