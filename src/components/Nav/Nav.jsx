import profile from '../../assets/person.png'

const Nav = () => {
    return (
        <div>
            <div>
            <div className="flex justify-center items-center w-full p-5 bg-white">
            <div className="flex justify-center gap-10 items-center">
            <div className=" text-xl md:text-2xl xl:text-3xl font-semibold xl:font-bold uppercase text-[#66bcd9]">All User Informations</div>
            <div><img src={profile} alt=""  className='w-7 md:w-9 xl:w-14 ring-4 rounded-full ring-[#ADD8E6]'/></div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Nav;