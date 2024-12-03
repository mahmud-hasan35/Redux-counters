/* eslint-disable no-undef */
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import TotalCount from "./components/TotalCount";
import { decrement, increment } from "./features/counters/CounterSlice";

export default function App() {


  // const [counters,setCounters] = useState(initialCounters)



  


  const counters = useSelector((store) => store.counter);
  const dispatch = useDispatch()

  const totalCounterValue = counters.reduce((sum, item) => {
    return sum + item.value;
  }, 0 );

  const handleIncrement = (id) => {
    dispatch(increment(id))
  }
  const handleDecrement = (id) => {
    dispatch(decrement(id))
  }
  return (
    <div>
      {
        counters.map((count) => <Counter key={count.id}
        value={count.value}
        onIncrement={() => handleIncrement(count.id)}
        onDecrement={() => handleDecrement(count.id)}
        />
      )
      }

      
      <TotalCount value={totalCounterValue}/>
    </div>
  )
}
