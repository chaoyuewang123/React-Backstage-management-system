import {useSelector,useDispatch} from "react-redux"
/* import store from "@/store" */
import numState from '@/store/NumberStatus'

/* type RootState = ReturnType<typeof store.getState >
 */
export default function Page1() {

const dispatch = useDispatch()

const {num} = useSelector((state:RootState)=>({
  num:state.NumStatereducer.num
}))
const changeNum = () =>{
  /* dispaych({type:"add1"}) */
  dispatch({type:"add3",val:200})
}

const changeNum2 = () =>{
  /* dispatch({type:"add1"}) */
/*   dispatch((dis:Function)=>{
    setTimeout(()=>{
      dis({type:"add1"})
    },1000)
  }) */

  dispatch(numState.asyncActions.asyncAdd1)
}
const {sarr} = useSelector((state:RootState)=>({
  sarr:state.ArrStatusreducer.sarr
}))

const changeArr = () =>{
  /* dispaych({type:"add1"}) */
  dispatch({type:"sarrpush",val:100})
}

  return (
    <div>Page1
    <p>{num}</p>
    <button onClick={changeNum}>add</button>
    <button onClick={changeNum2}>add</button>


    <p>{sarr}</p>
    <button onClick={changeArr}>changeArr</button>
    </div>
  )
}
