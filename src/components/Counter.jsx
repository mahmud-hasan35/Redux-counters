

export default function Counter({value,onIncrement, onDecrement}) {



  return (
    <div className="mt-5 mx-w-[400] border mx-auto text-center p-6">
        <h2 className="text-3xl mb-5 font-bold">Count: {value}</h2>
        <div className="flex justify-center mb-8">
            <button onClick={()=> onDecrement()} className="bg-blue-900 text-white py-2 px-4">Decrement</button>
            <button onClick={() => onIncrement()} className="bg-yellow-300 py-2 px-4">Increment</button>
        </div>
        
    </div>
  )
}
