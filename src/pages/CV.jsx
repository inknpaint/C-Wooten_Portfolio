import React from 'react';

export default function CV() {
  return (
    <section className="section">
      <h1>Curriculum Vitae</h1>
      <p>
        Download a copy here:{" "}
        <a href="/CV_Wooten.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          CV_Wooten.pdf
        </a>
      </p>
      <hr />
      <h2>Education</h2>
      <p><strong>Ph.D. in Media Studies</strong><br />University Name, Year</p>

      <h2>Experience</h2>
      <p><strong>Assistant Professor of Film</strong><br />University of Somewhere, 2020–Present</p>

      <h2>Publications</h2>
      <ul>
        <li>“Title of Essay,” *Journal Name*, 2023</li>
        <li>“Another Essay,” *Conference Proceedings*, 2022</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>Film Editing: Premiere Pro, DaVinci Resolve</li>
        <li>Teaching: Curriculum design, student mentorship</li>
      </ul>
    </section>
  );
}
