import { SearchPanel } from './search-panel'
import { List } from './list'
import qs from 'qs'
import { useState, useEffect } from 'react'
import { cleanObject, useMount } from 'utils'
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  }) //选中用户
  const [users, setUsers] = useState([]) //用户
  const [list, setList] = useState([]) //列表
  const debouncedParam = useDebounce(param, 2000)
  // 用户输入改变param时候获取列表
  useEffect(() => {
    // 把param中的空值去掉
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        res.ok && setList(await res.json())
      }
    )
  }, [debouncedParam])
  // 初始化
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      res.ok && setUsers(await res.json())
    })
  })
  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
