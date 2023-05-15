import { Box, Image } from "@chakra-ui/react"
import logo from '../../assets/logo.svg'

const Navbar = () => {

    return (
        <Box
            w='100%'
            h='5rem'
            backgroundColor='black'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Image src={logo} w='15rem' h='15rem' />
        </Box>
    )

}

export default Navbar