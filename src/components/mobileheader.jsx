import React from "react";

const mobileheader = () => {
        const[l,setL]=React.useState(false);
    return (
        <div className="lg:hidden absolute z-10 flex justify-between p-10">
            <img
                loading="lazy"
                src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%207H3.83L9.42%201.41L8%200L0%208L8%2016L9.41%2014.59L3.83%209H16V7Z'%20fill='white'/%3e%3c/svg%3e"
            />
            <div className="text-white border-white text-center border-2 rounded-lg p-2 w-[125px] hover:border-none absolute left-[65vw]">
                {l ? "Join Group" : "Leave Group"}
            </div>
        </div>
    );
};

export default mobileheader;
