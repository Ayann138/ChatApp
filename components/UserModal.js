import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Divider } from '@mui/material';
//import { buttonFilledStyle, dangerBtn } from '../MaterialsOverrides';

const selectBoxStyle = 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6B7280] focus:ring-2 focus:ring-inset focus:ring-[#2c9496] text-xs sm:leading-6 inter font-normal'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export default function AttachUsers() {
    const [caption, setCaption] = useState('')
    const [captionValid, setCaptionValid] = useState(true)
    console.log("In User Modal")

    const SaveImage = () => {
        console.log("Saved")
    };
    const handleClose = () =>
    {

    }
    console.log("the Image file")
    return (
        <Modal
          //  open={open}
           // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: 'auto' }}
        >
            <Box sx={style}>
                <h6 className='inter text-xl font-semibold'>Add Image</h6>
                <div className="w-full mt-2">
                    <label className="block text-[10px] leading-6 text-[#1C221A] inter font-normal">Image</label>
                    <div className="mt-2">
                        <img src=" " alt='.' className='max-h-[55dvh] mx-auto' />
                    </div>
                </div>
                <div className="w-full mt-2 mb-2.5">
                    <label className="block text-[10px] leading-6 text-[#1C221A] inter font-normal">Caption</label>
                    <div className="mt-2">
                        <input  value={caption} onChange={(e) => setCaption(e.target.value)} type="text" className={selectBoxStyle}
                        />
                        <div className=' text-xs m-1 text-red-500 '>
                            {!captionValid ? "Please Enter The Caption" : ''}
                        </div>
                    </div>
                </div>
                <Divider />

                <div className="flex items-center gap-x-2 justify-end mt-2.5">
                    <Button onClick={handleClose}  >Discard</Button>
                    <Button onClick={() => { SaveImage() }} >Save</Button>
                </div>
            </Box>
        </Modal>
    );
}
