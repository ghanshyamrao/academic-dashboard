import React from 'react'
import { Fragment } from 'react'

const CardComponent = ({ data, label, className }) => {
    return (
        <Fragment>
            <div className={`${className} shadow text-center align-middle xl:justify-between xl:flex-row flex flex-col  gap-2 items-center  w-full p-4 bg-amber-500 rounded-2xl text-white`}>
                <div className="text-xl">
                    {label}
                </div>
                <div className="text-2xl w-full xl:w-fit text-black bg-white p-2 rounded-2xl">
                    {data}
                </div>
            </div>
        </Fragment>
    )
}

export default CardComponent