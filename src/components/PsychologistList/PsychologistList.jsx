import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";

export default function PsychologistList({ psychologists }) {
  console.log(psychologists);
  return (
    <ul>
      {psychologists.map((psychologist, ind) => (
        <li key={ind}>
          <PsychologistCard psychologist={psychologist} />
        </li>
      ))}
    </ul>
  );
}
