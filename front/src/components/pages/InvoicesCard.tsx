import { Box, Card, Divider,  Heading,  CardBody, Image as ImageComp, Text, Button, Highlight} from "@chakra-ui/react"
import { useState } from "react"
import { IInvoice } from "../../utils/types"
import defaultImg from "../../assets/default.jpg" 

interface InvoiceCardProps {
    invoice : IInvoice,
    index : number
}

export const InvoiceCard = ({invoice , index} : InvoiceCardProps ) => {

    const [showInvoices, setShowInvoices] = useState(false)

    const checkImage = (url: string) => {
        const newImage = new Image();
        newImage.src = url;
        newImage.onload = () => {
            return true
        };
        newImage.onerror = () => {
            return false
        };
        return false
      };

    return (
        <Card
            key={index}
            minW='xs'
            mt="1rem"
            mb="1rem"
            background={'#F7F6FF'}
            borderColor={'black'}
        >
            <CardBody
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                
                <Box
                    display='flex'
                    flexDirection='column'
                    gap='0.5rem'
                    ml='1rem'
                >
                    <Heading
                        size='lg'
                    >
                        Facture n° {index + 1}
                    </Heading>
                        <Text 
                            as='b'
                        >
                            {invoice.isPaid ? 
                            `Payé le :  ${new Date(invoice.paidAt).toLocaleDateString('fr')}` : 
                            `Crée le : ${new Date(invoice.createdAt).toLocaleDateString('fr')} (Non payé)`}
                        </Text>
                        <Text as='b'>Prix Total : {invoice.finalPrice} €</Text>
                </Box>
                <Box
                    display='flex'
                >
                    <Button
                        mt='1rem'
                        ml="1rem"
                        backgroundColor={showInvoices ? 'pink' : 'green'}
                        borderRadius='30px'
                        alignSelf='center'
                        justifySelf='center'
                        onClick={() => setShowInvoices(!showInvoices)}
                    >
                        {showInvoices ? 'Masquer' : 'Détail'}
                    </Button>
                </Box>
            </CardBody>
            <Divider />
            {
                showInvoices && (
                    invoice.invoicesGames.map((invoiceGame, index) => {
                        return (
                            <Box
                                key={index}
                            >
                                <CardBody>
                                    <Box
                                        display='flex'
                                        justifyContent='flex-start'
                                        alignItems='center'
                                    >
                                        <ImageComp
                                            w='6rem'
                                            h='6rem'
                                            src={checkImage(invoiceGame.game.img) ? invoiceGame.game.img : defaultImg} />
                                        <Box
                                            display='flex'
                                            flexDirection='column'
                                            justifyContent='center'
                                            gap='0.5rem'
                                            ml='1rem'
                                        >
                                            <Text as='b'>Nom : {invoiceGame.game.name}</Text>
                                            <Text as='b'>Prix : {invoiceGame.game.price}€ × {invoiceGame.game.quantity}</Text>
                                        </Box>
                                    </Box>
                                </CardBody>
                                <Divider height={"0.1rem"} background={'grey'} />
                            </Box>
                        )
                    }
                )
            )}
        </Card>
)}