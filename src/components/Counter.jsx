import React, { useCallback, useState } from 'react'
import Button from './Button'

const Counter = () => {
    console.log('counter rendered')
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
    const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])

    return (
        <>
            <div className='text-center mt-10 flex justify-center'>
                <p className='w-1/6'>{countOne}</p>
                <p className='w-1/6'>{countTwo}</p>
            </div>
            <div className='text-center'>
                <Button handleClick={memoizedSetCountOne} name="button1" />
                <Button handleClick={memoizedSetCountTwo} name="button2" />
            </div>
        </>
    )
}

export default Counter