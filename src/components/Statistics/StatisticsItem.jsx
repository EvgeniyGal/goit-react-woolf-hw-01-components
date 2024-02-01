import css from './Statistics.module.css';

export default function StatisticsItem({ itemData: { label, percentage } }) {
  return (
    <li style={{ backgroundColor: calcRandomColor() }} className={css['item']}>
      <span className={css['label']}>{label}</span>
      <span className={css['percentage']}>{percentage}%</span>
    </li>
  );
}

function calcRandomColor() {
  const calcSingleColor = () => Math.floor(Math.random() * 220);
  return `rgb(${calcSingleColor()}, ${calcSingleColor()}, ${calcSingleColor()})`;
}
