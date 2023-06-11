import { Box, Card, CardBody, Heading, Grid, Button, Link, Text, Divider, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Spinner, Image} from '@chakra-ui/react';
import NavbarShop from "../components/shared/NavbarShop"
import CardBasketShop from "../components/pages/CardBasketShop"
import { useState } from 'react';
import isDoneGif from '../assets/icon-done.gif'

const BasketShop = () => {

    const isAuthentified = sessionStorage.getItem('tokenSession')

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isShow, setIsShow] = useState(false)
    const [showImage, setShowImage] = useState(false)

    const [shippingAdress, setShippingAdress] = useState('')
    const [billingAdress, setBillingAdress] = useState('')

    const handleClick = () => {
        setIsShow(!isShow)
    }

    const timeOut = () => {
        setTimeout(() => {
            setShowImage(true)
        }, 5000);
    }

    const openModal = async  () => {
        onOpen()
        timeOut()
    }

    const closeModal = () => {
        onClose()
        setShowImage(false)
    }

    return (
        <Box
            w='100%'
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <NavbarShop/>
            <Box
                mt='5rem'
                h='100%'
                w="50rem"
                display='flex'
                flexDirection='column'
            >
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={50}
                >
                    <Box>
                        <Heading as={'u'} size={"lg"}>Votre panier</Heading>
                        <Heading 
                            size={"s"}
                            mt='1rem'
                        >
                            5 articles
                        </Heading>
                        <CardBasketShop/>
                        <CardBasketShop/>
                        <CardBasketShop/>
                        <CardBasketShop/>

                        
                    </Box>

                    <Box>
                    <Card
                            minW='xs'
                            mt="1rem"
                            mb="1rem"
                            background={'#F7F6FF'}
                            borderColor={'black'}
                        >
                            <CardBody>
                                    <Box
                                        display='flex'
                                        justifyContent='space-between'
                                        // h={'5rem'}
                                    >
                                        <Heading
                                            size='md'
                                            >
                                            TOTAL (5 articles)
                                        </Heading>
                                        <Heading
                                            size='md'
                                            ml='1rem'
                                            >
                                            170€
                                        </Heading>
                                    </Box>
                                    <Divider
                                        mb='1rem'
                                        mt={'1rem'}
                                    />
                                    {
                                        isAuthentified ? (
                                            <Button
                                                w='100%'
                                                background={'purple'}
                                                color={'white'}
                                                onClick={() => handleClick()}
                                                isDisabled={isShow}
                                            >
                                                PAYER
                                            </Button>
                                        ) : (
                                            <Text
                                                textAlign='center'
                                            >
                                                Pas de compte ?
                                                <Link
                                                    href='/register'
                                                    color={'purple'}
                                                >
                                                    {' '} Inscrivez-vous
                                                </Link>
                                            </Text>
                                        )
                                        
                                    }
                                    {
                                        isShow && (
                                            <Box
                                                mt='1rem'
                                                display='flex'
                                                flexDirection='column'
                                            >
                                                <Input 
                                                    placeholder='Votre addresse de livraison' 
                                                    background='white'
                                                    mb={'1rem'}
                                                    onChange={(e) => setShippingAdress(e.target.value)}
                                                    value={shippingAdress}
                                                />
                                                <Input 
                                                    placeholder='Votre addresse de facturation' 
                                                    background='white'
                                                    onChange={(e) => setBillingAdress(e.target.value)}
                                                    value={billingAdress}
                                                />
                                                <Button
                                                    mt='1rem'
                                                    background={'green'}
                                                    onClick={()=> openModal()}
                                                    isDisabled={shippingAdress === '' || billingAdress === ''}
                                                >
                                                    Valider
                                                </Button>
                                            </Box>
                                        )
                                    }
                                    
                                </CardBody>
                        </Card>
                    </Box>
                </Grid>
                    <Box>    
                        <Modal isOpen={isOpen} onClose={closeModal} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Validation du panier</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        alignItems='center'
                                        justifyContent={'center'}
                                        h={'10rem'}
                                    >
                                    {
                                        showImage ? (
                                            <>
                                                <Image
                                                    src={isDoneGif}
                                                    alt='gif done'
                                                    w='5rem'
                                                    h='5rem'
                                                >
                                                </Image>
                                                <Text
                                                    textAlign='center'
                                                >
                                                    Votre commande a bien été prise en compte ! <br/>
                                                    Vous ne recevrez pas de mail de confirmation. :)
                                                </Text>
                                            </>
                                            
                                        ) : (
                                            <Spinner
                                                thickness='10px'
                                                speed='1.5s'
                                                emptyColor='gray.200'
                                                color='green'
                                                size='xl'
                                                w={'5rem'}
                                                h={'5rem'}
                                            />
                                        )
                                    }
                                    </Box>

                                        {/* <Lorem count={2} /> */}
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Box>                    
            </Box>
        </Box>
    )
}

export default BasketShop