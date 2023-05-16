import { Box, Image, Link } from "@chakra-ui/react"
import logo from '../../assets/logo.svg'
import person from '../../assets/person.svg'
import shopping_cart from '../../assets/shopping_cart.svg'

const NavbarShop = () => {

    return (
        <Box
            w='100%'
            h='5rem'
            backgroundColor='black'
            display='flex'
            justifyContent='space-between'
        >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
            >    
                <Image src={logo} w='15rem' h='15rem' />
            </Box>

            <Box
                display='flex'
                alignItems='center'
                color='white'
                gap='1rem'
                mr="2rem"
            >
                <Link
                    href="/basket_shop"
                >
                    <Image src={shopping_cart} w='3rem' h='3rem'/>
                </Link>
                <Link
                    href="/profile"
                >
                    <Image src={person} w='3rem' h='3rem'/>
                </Link>
            </Box>

        </Box>
    )

}

export default NavbarShop