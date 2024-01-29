
import Image from 'next/image';
import Button from './Button';
import React from 'react'


const Card = ({movie}) => {

    const { image, title, released } = movie;

    return (
        <>
            <figure className='portada'>
                <Image src={image} alt={title} width={350} height={490} style={{objectFit: 'cover'}}/>
                <h3 className='title'>{title}</h3>
                <div className='btnPosition'>
                    <p className='released'>Año: {released}</p>
                    <Button />
                </div>
            </figure>
        </>
    )
}

export default Card