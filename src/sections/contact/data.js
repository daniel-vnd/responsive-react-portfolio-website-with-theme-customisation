import {HiOutlineMail} from "react-icons/hi"
import {RiMessengerLine} from "react-icons/ri"
import {FaWhatsapp} from "react-icons/fa"

const data = [
    {
        id: 1, 
        icon: <HiOutlineMail />, 
        link: 'mailto:dummygator@gmail.com'
    },
    {
        id: 2, 
        icon: <RiMessengerLine />, 
        link: 'http://www.messenger.com/1/10008721788007'
    },
    {
        id: 3, 
        icon: <FaWhatsapp />, 
        link: 'https://api.whatsapp.com/send?phone=%2B233557097546'
    }
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546


export default data;
