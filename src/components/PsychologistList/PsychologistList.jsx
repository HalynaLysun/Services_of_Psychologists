import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";

export default function PsychologistList({ psychologists }) {
  return (
    <ul>
      {psychologists.map((psychologist, ind) => (
        <li key={ind}>
          <PsychologistCard psychologists={psychologists} />
        </li>
      ))}
    </ul>
  );
}
