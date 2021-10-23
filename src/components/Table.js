function Table({ dataNames, prices, onRowClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>имя тикера</th>
          <th>last</th>
          <th>highestBid</th>
          <th>percentChange</th>
        </tr>
      </thead>
      <tbody>
        {dataNames.map((name) => (
          <tr onClick={onRowClick(name)}>
            <td>{name}</td>
            <td>{prices[name].last}</td>
            <td>{prices[name].highestBid}</td>
            <td>{prices[name].percentChange}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;