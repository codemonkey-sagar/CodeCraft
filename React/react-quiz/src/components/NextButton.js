export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "nextQuestion",
          })
        }
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "finished",
          })
        }
      >
        Finish
      </button>
    );
  }
}
