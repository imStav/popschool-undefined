async function getAllStudents() {
    try {
      const all = await fetch(
        `https://pachyderme.net/students.json`
      );
  
      const response = await all.json();

      // Generates a div and inserts firstname, lastname and gender, for each student
      const students = Array.from(response.students).forEach(student => {
        let div = document.createElement("div")
        div.text = `${student.firstname} ${student.lastname} ${student.sex}`
        document.body.appendChild(div).innerHTML = div.text
      });

      return students;
    } catch (e) {
      console.log(e);
    }
}

getAllStudents()
