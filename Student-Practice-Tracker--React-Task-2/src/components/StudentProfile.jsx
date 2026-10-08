import { useEffect } from "react";

function StudentProfile({
  name,
  department,
  year,
  practiceCount,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <section className="profile">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p>
        <strong>Practice Sessions Completed:</strong>{" "}
        {practiceCount}
      </p>
    </section>
  );
}

export default StudentProfile;