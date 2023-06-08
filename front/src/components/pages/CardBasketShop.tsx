import { Box, Card, CardBody, Image, Text} from "@chakra-ui/react"
import defaultImg from "../../assets/default.jpg" 

const CardBasketShop = () => {

    return (
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
                        justifyContent='flex-start'
                        alignItems='center'
                    >
                        <Image
                            w='6rem'
                            h='6rem'
                            src={defaultImg} />
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            gap='0.5rem'
                            ml='1rem'
                        >
                            <Text as='b'>Les aventuriers du rail </Text>
                            <Text as='b'>35.5€ </Text>
                        </Box>
                    </Box>
            </CardBody>
        </Card>
    )
}

export default CardBasketShop