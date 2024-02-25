import React from 'react';
import img1 from '../../public/1.jpeg'
import Input from '../../components/Input'
function ChatPage() {
    const contacts = [
        {
            name: 'Maaz',
            status: 'GerayBazz',
            img: '2.jpeg'
        },
        {
            name: 'Ahmad Hasan',
            status: 'Available',
            img: '3.jpeg'
        },
        {
            name: 'Ali Hamza',
            status: 'GerayBazz',
            img: '2.jpeg'
        },
        {
            name: 'Umar Rathore',
            status: 'Introvert',
            img: '1.jpeg'
        },
        {
            name: 'Arhum Sharif',
            status: 'Team Lead',
            img: '2.jpeg'
        },
        {
            name: 'Zaim Rana',
            status: 'Avaialble',
            img: '3.jpeg'
        },
    ]
    return (
        <div className="w-screen flex">
            <div className='w-[25%] bg-secondary ' >
                <div className='flex items-center my-8 mx-14'>
                    <div className='border border-primary p-[2px] rounded-full'>
                        <img src='1.jpeg' width={40} height={40} className="rounded-full" />

                    </div>
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold'>Ayan Shahid </h3>
                        <p className='text-md font-light'>My Account</p>
                    </div>
                </div>
                <hr />
                <div className='mx-14 mt-2'>

                    <div className='text-primary text-lg'> Messages</div>
                    <div>
                        {
                            contacts.map(({ name, status, img }) => {
                                return (
                                    <div className='flex items-center py-4 border-b border-b-gray-100 '>
                                        <div className='cursor-pointer flex items-center'>
                                            <div >
                                                <img src={img} width={25} height={25} className="rounded-full" />
                                            </div>
                                            <div className='ml-4'>
                                                <h3 className='text-lg font-semibold'>{name} </h3>
                                                <p className='text-sm font-light'>{status}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
            {/* This div is handling the chat of the user */}

            <div className='w-[50%] h-screen bg-[#ffffff] flex flex-col items-center'>
                <div className='w-full bg-secondary h-[50px] my-4 rounded-full flex items-center px-14'>
                    <div>
                        <img src="2.jpeg" width={30} height={28} className="rounded-full" />
                    </div>
                    <div className='ml-6 mr-auto'>

                        <h3 className='text-xl '>Ahmad Hasan</h3>
                        <p className='text-md font-light'>Online</p>
                    </div>
                    {/* */}
                    {/* This div is handling the video call and phone call icon */}
                    <div className='cursor-pointer flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 9l5 -5" />
                            <path d="M16 4l4 0l0 4" />
                        </svg>
                        <div className='ml-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-video" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/*Chatting of two users*/}
                <div className='h-[75%] w-full overflow-scroll'>
                    <div className=' px-7 py-7' >
                        <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                            Lorem ipsum dolor sit amet,.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-2 mb-4 text-[#ffff]'>
                            Duis aute irure dolor inoident
                        </div>
                        <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                            Lorem ipsum dolor sit amet,ation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-2 mb-4 text-[#ffff]'>
                            Duis aute irure dolor inoident
                        </div>
                        <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                            Lorem ipsum dolor sit amet,ation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-2 mb-4 text-[#ffff]'>
                            Duis aute irure dolor inoident
                        </div>
                        <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-2 mb-4'>
                            Lorem ipsum dolor sit amet,ation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-2 mb-4 text-[#ffff]'>
                            Duis aute irure dolor inoident
                        </div>

                    </div>
                </div>
                <div className='p-7 w-full flex items-center'>
                    <Input placeholder='type a message' className='w-full' inputClassName='p-2 border-0 shadow-lg rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
                    <div className='ml-4 cursor-pointer bg-light rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>
                    </div>
                    <div className='ml-4 cursor-pointer bg-light rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M9 12h6" />
                            <path d="M12 9v6" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='w-[25%]  h-screen'></div>

        </div>
    );
}

export default ChatPage;
