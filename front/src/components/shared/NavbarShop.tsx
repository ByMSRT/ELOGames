import { Box, Image, Link } from "@chakra-ui/react"
import logo from '../../assets/logo.svg'
import person from '../../assets/person.svg'
import shopping_cart from '../../assets/shopping_cart.svg'
import adminIcon from '../../assets/admin_panel_settings.svg'
import { useState, useEffect } from "react"
import { getUser } from "../../CRUD/user"
import { IProfile } from "../../utils/types"


const NavbarShop = () => {

    const [profile, setProfile] = useState<IProfile>();

    const getProfileAsync = async () => {
        const profile = await getUser();
        setProfile(profile);
    }

    useEffect(() => {
        getProfileAsync();
    }, []);

    const isAdmin = profile?.isAdmin

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
                <Link
                    href="/shop"
                >
                    <Image src={logo} w='15rem' h='15rem' />
                </Link>
            </Box>

            <Box
                display='flex'
                alignItems='center'
                color='white'
                gap='1rem'
                mr="2rem"
            >
                {
                    isAdmin && (
                        <Link
                            href="/admin"
                        >
                            <Image src={adminIcon} w='3rem' h='3rem'/>
                        </Link>
                    )
                }
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