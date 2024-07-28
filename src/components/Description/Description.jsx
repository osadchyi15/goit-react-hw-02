import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css.description}>
      <h2 className={css.title}>Sip Happens Café</h2>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
