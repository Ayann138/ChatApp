import React from 'react';
import img1 from '../../public/1.jpeg'
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
        {
            name: 'Irtaza Abbas',
            status: 'Always Avaialble',
            img: '1.jpeg'
        },
    ]
    return (
        <div className="w-screen flex">
            <div className='w-[25%] bg-secondary'>
                <div className='flex items-center my-8 mx-14'>
                    <div className='border border-primary p-[2px] rounded-full'>
                        <img src='1.jpeg' width={40} height={40} className="rounded-full" />

                    </div>
                    <div className='ml-4'>
                        <h3 className='text-xl'>Ayan Shahid </h3>
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
                                    <div className='flex items-center py-4 border-b border-b-gray-100'>
                                        <div className='cursor-pointer flex items-center'>
                                            <div >
                                                <img src={img} width={25} height={25} className="rounded-full" />
                                            </div>
                                            <div className='ml-4'>
                                                <h3 className='text-lg'>{name} </h3>
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
            <div className='w-[50%]  h-screen'></div>
            <div className='w-[25%]  h-screen'></div>

        </div>
    );
}

export default ChatPage;
