import { roundIfNumber } from "@lib/utils";

type Props = {
  value: number | string | null
  label: string;
};

const MetricCard = (props: Props) => {
  const { value, label } = props;

  return (
    <div>
      <p>{label}</p>
      <p>{roundIfNumber(value)}</p>
    </div>
  );
};

export default MetricCard;
