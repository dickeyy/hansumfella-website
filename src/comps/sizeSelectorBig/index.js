import { Box, Button, HStack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

export default function SizeSelectorBig(props) {

    const [selectedSize, setSelectedSize] = React.useState(null);
    const [sizeable, setSizeable] = React.useState(false);
    const [sizes, setSizes] = React.useState([])
    console.log(props.variants)
    React.useEffect(() => {
        if (props.variants.length > 1) {
            setSizeable(true);

            let tempArray = []

            props.variants.forEach(variant => {
                tempArray.push(variant.node.title)
            });

            setSizes(tempArray)

            // set the default size to the first variant
            setSelectedSize(props.variants[0].node.title)
        }
    }, []);

    // we need to pass the selected size back to the parent component
    // so that we can update the selected variant
    React.useEffect(() => {
        props.onSizeSelected(selectedSize)
    }, [selectedSize]);

    return (
        <Wrap
            justifyContent={['center', 'center', 'left']}
            alignItems={['center', 'center', 'left']}
            textAlign={['center', 'center', 'left']}
            w={'100%'}
            wrap={'wrap'}
            gap={2}
        >
            
            {sizeable ? (
                sizes.map((size, index) => {
                    return (
                        <WrapItem>
                            <Button
                                key={index}
                                onClick={() => {
                                    setSelectedSize(size);
                                }}
                                isDisabled={props.variants[index].node.availableForSale === false}
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
                    textAlign={'center'}
                >
                    One Size
                </Text>
            )}


        </Wrap>
    )

}