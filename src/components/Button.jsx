import React from 'react'

const Button = React.memo(({handleClick, name}) => {
    //<button onClick={handleClick}>{name}</button>
    console.log(`${name} rendered`);
    return (
        <>
            <button onClick={handleClick} type="button" className="m-10 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                {name}
            </button>
        </>
    );
});

export default Button;