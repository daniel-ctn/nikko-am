import { instance } from 'config/axios'

export const getList = async () => {
  const res = await instance.get('/list')

  return res.data
}