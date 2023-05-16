import { Box, Card, Divider, Grid, Heading, Input, CardBody, Image, Text, Button} from "@chakra-ui/react"
import Navbar from "../components/shared/NavbarShop"
import photo from '../assets/aventuriers-du-rail-europe-15-ans 1.png'
import { getUser, logout, updateUser} from "../CRUD/user"
import { useEffect, useState } from "react"
import { IProfile } from "../utils/types"
import editImg from '../assets/edit.svg'
import validate from '../assets/done.svg'
import logoutImg from '../assets/logout.svg'
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    const navigate = useNavigate();


    const [profile, setProfile] = useState<IProfile>();
    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState(profile?.firstName);
    const [lastName, setLastName] = useState(profile?.lastName);
    const [email, setEmail] = useState(profile?.email);
    const [address, setAddress] = useState(profile?.address);
    const [phone, setPhone] = useState(profile?.phone);


    const getProfileAsync = async () => {
        setProfile(await getUser());
    };

    const logoutAndRedirect = async () => {
        logout();
        navigate('/login');
    };

    const toggleUpdateUser = (firstName: string, lastName: string, email: string, address: string, phone: string) => {
        updateUser(firstName!, lastName!, email!, address!, phone!);
        setEdit(!edit)
    }
  
    useEffect(() => {
      getProfileAsync();
    }, []);

    const pseudo = profile?.firstName[0]! + profile?.lastName[0]!


    return (
        <Box
            w='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Navbar/>

            <Box
                mt='5rem'
                h='100%'
                w="50rem"
                display='flex'
                flexDirection='column'
            >

                <Grid
                    templateColumns="repeat(2, 1fr)"
                    h='100%'
                >
                    <Box
                        w="20rem"
                    >
                        <Box
                            borderRadius='50%'
                            w='9rem'
                            h='9rem'
                            fontSize='5rem'
                            color='yellow'
                            background='black'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            {pseudo ? pseudo : ""}
                        </Box>
                        <Button
                            w='3rem'
                            h='3rem'
                            mt='1rem'
                            backgroundColor='yellow'
                            borderRadius='30px'
                            alignSelf='center'
                            justifySelf='center'
                            onClick={() => setEdit(!edit)}
                        >
                            <Image src={editImg} w='3rem' h='3rem' />
                        </Button>

                        {
                            edit && (
                                <Button
                                    w='3rem'
                                    h='3rem'
                                    mt='1rem'
                                    ml="1rem"
                                    backgroundColor='green'
                                    borderRadius='30px'
                                    alignSelf='center'
                                    justifySelf='center'
                                    onClick={() => 
                                        toggleUpdateUser(firstName!, lastName!, email!, address!, phone!)
                                    }
                                >
                                    <Image src={validate} w='3rem' h='3rem' />
                                </Button>
                            )
                        }
                        <Button
                            w='3rem'
                            h='3rem'
                            mt='1rem'
                            ml="1rem"
                            backgroundColor='pink'
                            borderRadius='30px'
                            alignSelf='center'
                            justifySelf='center'
                            onClick={() => logoutAndRedirect()}
                        >
                            <Image src={logoutImg} w='3rem' h='3rem' />
                        </Button>
                    </Box>


                    <Box
                        h='100%'
                        display='flex'
                        flexDirection='column'
                    >
                        <Input 
                            defaultValue={profile?.firstName}
                            background='white'
                            mb='2rem'
                            disabled={!edit}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Input 
                            defaultValue={profile?.lastName}
                            background='white'
                            mb='2rem'
                            disabled={!edit}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Input 
                            defaultValue={profile?.email}
                            background='white'
                            mb='2rem'
                            disabled={!edit}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input 
                            placeholder="Votre adresse"
                            defaultValue={profile?.address ? profile?.address : ""}
                            background='white'
                            mb='2rem'
                            disabled={!edit}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Input 
                            placeholder="Votre numéro de téléphone"
                            defaultValue={profile?.phone ? profile?.phone : ""} 
                            background='white'
                            mb='2rem'
                            disabled={!edit}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Box>

                </Grid>
                
                <Divider orientation="horizontal" borderColor='black' borderBottomWidth='4px' />
                <Heading size='md' mt="1rem" > Historique des commandes</Heading>

                <Box>

                    <Card
                        minW='xs'
                        mt="1rem"
                        mb="1rem"
                        background={'#F7F6FF'}
                        borderColor={'black'}
                    >
                        <CardBody
                            display='flex'
                            justifyContent='flex-start'
                            alignItems='center'
                        >
                        <Image
                            w='6rem'
                            h='6rem'
                            src={photo}
                        />
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            // textStyle=''
                            gap='0.5rem'
                            ml='1rem'
                        >
                            <Text as='b'>Les aventuriers du rail</Text>
                            <Text as='b'>Le : 16/05/2023</Text>
                            <Text as='b'>Prix : 35.5€</Text>
                        </Box>
                        </CardBody>
                    </Card>
                    <Card
                        minW='xs'
                        mt="1rem"
                        mb="1rem"
                        background={'#F7F6FF'}
                        borderColor={'black'}
                    >
                        <CardBody
                            display='flex'
                            justifyContent='flex-start'
                            alignItems='center'
                        >
                        <Image
                            w='6rem'
                            h='6rem'
                            src={photo}
                        />
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            gap='0.5rem'
                            ml='1rem'
                        >
                            <Text as='b'>Les aventuriers du rail</Text>
                            <Text as='b'>Le : 16/05/2023</Text>
                            <Text as='b'>Prix : 35.5€</Text>
                        </Box>
                        </CardBody>
                    </Card>
                    <Card
                        minW='xs'
                        mt="1rem"
                        mb="1rem"
                        background={'#F7F6FF'}
                        borderColor={'black'}
                    >
                        <CardBody
                            display='flex'
                            justifyContent='flex-start'
                            alignItems='center'
                        >
                        <Image
                            w='6rem'
                            h='6rem'
                            src={photo}
                        />
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            gap='0.5rem'
                            ml='1rem'
                        >
                            <Text as='b'>Les aventuriers du rail</Text>
                            <Text as='b'>Le : 16/05/2023</Text>
                            <Text as='b'>Prix : 35.5€</Text>
                        </Box>
                        </CardBody>
                    </Card>
                    <Card
                        minW='xs'
                        mt="1rem"
                        mb="1rem"
                        background={'#F7F6FF'}
                        borderColor={'black'}
                    >
                        <CardBody
                            display='flex'
                            justifyContent='flex-start'
                            alignItems='center'
                        >
                        <Image
                            w='6rem'
                            h='6rem'
                            src={photo}
                        />
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            gap='0.5rem'
                            ml='1rem'
                        >
                            <Text as='b'>Les aventuriers du rail</Text>
                            <Text as='b'>Le : 16/05/2023</Text>
                            <Text as='b'>Prix : 35.5€</Text>
                        </Box>
                        </CardBody>
                    </Card>
                </Box>
            </Box>


        </Box>
    )
}