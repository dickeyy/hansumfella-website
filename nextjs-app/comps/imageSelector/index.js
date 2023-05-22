import { HStack, Image } from "@chakra-ui/react";

export default function ImageSelector(props) {
    console.log(props.images)
    return (

        <HStack
            spacing={2}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            w={'100%'}
        >
            {props.images.map((image, index) => {
                return (
                    <Image
                        key={index}
                        src={image.node.originalSrc}
                        alt={props.alt}
                        w={['20%', '20%', '15%', '10%']}
                        borderRadius={'8px'}
                        objectFit={'cover'}
                        onClick={() => {
                            props.onImageSelected(image)
                        }}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                )
            }
            )}
        </HStack>

    )

}