import {useCallback} from 'react'
import { Toast } from 'react-bootstrap';


export const useMessage = () => {
  const notify = () => toast("Wow so easy!");
  return useCallback(text => {
  }, [])
}
