import { Box, Button, HStack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

export default function SizeSelectorSmall(props) {

    const [selectedSize, setSelectedSize] = React.useState(null);
    const [sizeable, setSizeable] = React.useState(false);
    const [sizes, setSizes] = React.useState([])

    React.useEffect(() => {
        if (props.variants.length > 1) {
            setSizeable(true);

            let tempArray = []

            props.variants.forEach(variant => {
                tempArray.push(variant.title)
            });

            setSizes(tempArray)

            // set the default size to the first variant
            setSelectedSize(props.variants[0].option1)
        }
    }, []);

    // we need to pass the selected size back to the parent component
    // so that we can update the selected variant
    React.useEffect(() => {
        props.onSizeSelected(selectedSize)
    }, [selectedSize]);

    return (
        <Wrap flexWrap={"wrap"} gap={2}>
            
            {sizeable ? (
                sizes.map((size, index) => {
                    return (
                        <WrapItem>
                            <Button
                                key={index}
                                onClick={() => {
                                    setSelectedSize(size);
                                }}
                                disabled={props.variants[index].inventory_quantity > 0 ? false : true}
                                variant={selectedSize === size ? "solid" : "outline"}
                                size="md"
                            >
                                {size}
                            </Button>
                        </WrapItem>
                    );
                }
                )
            ) : (
                <Text
                    color={'brand.gray.100'}
                    fontSize={'md'}
                    fontWeight={'medium'}
                >
                    One Size
                </Text>
            )}


        </Wrap>
    )

}