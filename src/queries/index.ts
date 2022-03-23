import { getList } from 'apis'
import { useQuery } from 'react-query'
import { List } from 'types'

export const useList = () => {
  return useQuery<List[], Error>('list', getList)
}