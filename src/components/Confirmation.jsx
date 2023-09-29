export const Confirmation = ({ name, age, bloodType, allergies }) => {
  return (
    <div className="confirmation">
      <h2>{name}, It is time to blast Off to Mars! </h2>
      <p>
        You are the intrepid explorer who is secured a golden ticket to the Red
        Planet in the agespan of {age}! With {bloodType} coursing through your
        veins. Just watch out for those sneaky space allergens – {allergies}{" "}
        will be a problem up there!
      </p>
    </div>
  );
};
