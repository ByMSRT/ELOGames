import { useCookies } from "react-cookie";
import {
    Box,
    Button,
    Grid,
    Input,
    InputGroup,
    InputRightElement,
    Select,
} from "@chakra-ui/react";
import NavbarShop from "../components/shared/NavbarShop";
import CardGame from "../components/pages/CardGame";
import { MaterialSymbol } from "react-material-symbols";
import { sendCookie } from "../CRUD/user";

const Shop = () => {
    const [cookies, setCookie] = useCookies(["cart"]);

    const tab = [
        {
            id: 1,
            name: "Game 1",
        },
    ];

    const handleClick = () => {
        setCookie("cart", tab, { path: "/" });
        console.log(cookies);
        sendCookie();
    };
    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <NavbarShop />
            <Button onClick={handleClick}>Set cookies</Button>
            <Box mt="1rem" w="40rem">
                {/* <Input placeholder='Rechercher...' /> */}
                <InputGroup size="md">
                    <Input placeholder="Rechercher..." />
                    <InputRightElement width="4.5rem">
                        <Button background="white" h="1.75rem" size="sm">
                            <MaterialSymbol icon="search"></MaterialSymbol>
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Grid templateColumns="repeat(3, 1fr)" gap={5} mt="1rem">
                    <Select placeholder="Catégories">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <Select placeholder="Nb joueurs">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <Select placeholder="Age">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Grid>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                mt="10"
            >
                <Grid templateColumns="repeat(3, 1fr)" gap={20}>
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                    <CardGame />
                </Grid>
            </Box>
        </Box>
    );
};

export default Shop;
