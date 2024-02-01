import TransactionHistoryItem from './TransactionHistoryItem';
import './TransactionHistory.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <TransactionHistoryItem
          itemData={{
            type: 'Type',
            amount: 'Amount',
            currency: 'Currency',
          }}
          RowType="th"
        />
      </thead>
      <tbody>
        {items.map((el, idx) => (
          <TransactionHistoryItem
            key={el.id}
            itemData={el}
            RowType="td"
            orderNumber={idx}
          />
        ))}
      </tbody>
    </table>
  );
}
