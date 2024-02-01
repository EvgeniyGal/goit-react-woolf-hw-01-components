import StatisticsItem from './StatisticsItem';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css['statistics']}>
      {title && <h2 className={css['title']}>Upload stats</h2>}
      <ul className={css['start-list']}>
        {stats.map(data => (
          <StatisticsItem key={data.id} itemData={data} />
        ))}
      </ul>
    </section>
  );
}
