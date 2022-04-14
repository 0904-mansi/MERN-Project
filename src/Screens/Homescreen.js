import React from 'react'
import Pizza from '../Components/pizza'
import pizzas from '../Components/pizzadata'

export default function Homescreen() {
    return (
        <div>
            <div className="row">
                {pizzas.map(pizza => {
                    return <div className='col-md-4 '>
                        <div>
                            <Pizza pizza = {pizza}/>
                        </div>

                    </div>

                })}
            </div>
        </div>
    )
}
