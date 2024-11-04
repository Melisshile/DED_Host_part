
let studentRecords = [];

// Handle Save button click
document.getElementById('formData').addEventListener('submit', function (e) {
  e.preventDefault();

  const studentNumber = document.getElementById('studentNumber').value;
  const nameSurname = document.getElementById('nameSurname').value;
  const faculty = document.getElementById('faculty').value;
  const ethnicity = document.getElementById('ethnicity').value;
  const age = document.getElementById('age').value;
  const commStud = document.getElementById('commStud').value;
  const eventName = document.getElementById('eventName').value;

  // Check if the student already exists in the records
  let existingStudent = studentRecords.find(
    (student) => student.studentNumber === studentNumber
  );

  if (existingStudent) {
    // If student exists, add the new event to their events list
    existingStudent.events.push(eventName);
    alert(`Event added to existing Ambassador with Student Number: ${studentNumber}`);
  } else {
    // If student does not exist, create a new student object and add it to the records
    const student = {
      studentNumber,
      nameSurname,
      faculty,
      ethnicity,
      age,
      commStud,
      events: [eventName], // Initialize with the first event
    };

    studentRecords.push(student);
    alert('Ambassador data saved successfully!');
  }

  // Clear the form inputs after saving
  document.getElementById('formData').reset();
});

// Handle Search button click
document.getElementById('search').addEventListener('submit', function (e) {
  e.preventDefault();

  const searchNumber = document.getElementById('searchStudentNumber').value;

  // Find the student with the matching student number
  const foundStudent = studentRecords.find(
    (student) => student.studentNumber === searchNumber
  );

  const searchResults = document.getElementById('searchResults');

  // Check if a student was found and display their information
  if (foundStudent) {
    searchResults.innerHTML = `
      <h2>Ambassador Information</h2>
      <p><strong>Student Number:</strong> ${foundStudent.studentNumber}</p>
      <p><strong>Name & Surname:</strong> ${foundStudent.nameSurname}</p>
      <p><strong>Faculty:</strong> ${foundStudent.faculty}</p>
      <p><strong>Ethnicity:</strong> ${foundStudent.ethnicity}</p>
      <p><strong>Age:</strong> ${foundStudent.age}</p>
      <p><strong>Commuting Student:</strong> ${foundStudent.commStud}</p>
      <p><strong>Events (${foundStudent.events.length}):</strong> ${foundStudent.events.join(', ')}</p>
    `;
  } else {
    searchResults.innerHTML = `<p style="color: red;">Ambassador not found. Please check the student number and try again.</p>`;
  }
});
