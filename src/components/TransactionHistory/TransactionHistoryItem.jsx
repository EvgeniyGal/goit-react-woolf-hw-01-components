export default function TransactionHistoryItem({
  itemData: { type, amount, currency },
  RowType,
  orderNumber,
}) {
  const evenRow =
    Number.isInteger(orderNumber) && orderNumber % 2 !== 0 ? 'even' : undefined;

  return (
    <tr>
      <RowType className={evenRow}>{type}</RowType>
      <RowType className={evenRow}>{amount}</RowType>
      <RowType className={evenRow}>{currency}</RowType>
    </tr>
  );
}
