const Options = ({ updateFeedback, resetState, totalFeedback }) => {
  return (
    <>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback != 0 && (
        <button type="button" onClick={resetState}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
