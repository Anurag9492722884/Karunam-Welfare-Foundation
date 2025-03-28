import React from 'react';

const Tag = (props) => {
    return (
        <div className=' flex justify-center mx-auto'>
            <div className={`bg-[#135CAF] rounded-[43px] font-normal md:text-[40px] sm:text-[20px] text-[15px] p-4 px-8 font-default text-white text-center tracking-normal`}>
                {props.text}
            </div>
        </div>
    );
}

export default Tag;