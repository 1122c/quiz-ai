type Props = {
  scorePercentage: number;
  score: number;
  totalQuestions: number;
};

const QuizSubmission = (props: Props) => {
  const { scorePercentage, score, totalQuestions } = props;
  return (
    <div className="flex flex-col flex-1">
      <main>
        <h2>Quiz is complete!</h2>
        <p>You scored: {scorePercentage}%</p>
      </main>
    </div>
  );
};

export default QuizSubmission;