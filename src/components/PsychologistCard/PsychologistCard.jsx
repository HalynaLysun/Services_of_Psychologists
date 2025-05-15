export default function PsychologistCard({
  psychologist: {
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
      <img src={avatar_url} alt="" />
      <h1>Name: {name}</h1>
    </>
  );
}
