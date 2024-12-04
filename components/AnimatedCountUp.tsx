"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCountUp = ({ amount }: { amount: number }) => {
     return (
          <div>
               <CountUp
                    start={0}
                    duration={2}
                    decimal='.'
                    prefix='$'
                    decimals={2}
                    end={amount} />
          </div>
     )
}

export default AnimatedCountUp
