export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((listItem) => (
          <tr key={listItem.id}>
            <td>{listItem.name}</td>
            <td>
              {users.find((user) => user.id === listItem.personId)?.name ||
                '未知'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
