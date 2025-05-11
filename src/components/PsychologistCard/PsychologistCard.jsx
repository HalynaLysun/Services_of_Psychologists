export default function PsychologistCard({
  psychologists: {
    name,
    avatar_url,
    experience,
    reviews,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  },
}) {
  console.log(name);
  return (
    <>
      <p>Hello</p>
      {/* <img src={psychologists.avatar_url} alt="" /> */}
      {/* <h1>Name: {psychologists.name}</h1> */}
    </>
  );
}
