import axios from "axios";

async function createCart(): Promise<string | null> {
    try {
        const req = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/create`);
        if (req.status === 200) {
            return req.data.cartId;
        }
    } catch (error) {
        console.error(error);
        return null;
    }

    return null;
}

async function addToCart(lines: any[], cartId: string): Promise<Boolean> {
    try {
        const req = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`, {
            cartId,
            lines
        });
        if (req.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }

    return false;
}

async function loadCart(cartId: string): Promise<any> {
    try {
        const req = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/load`, {
            cartId
        });
        if (req.status === 200) {
            console.log(req.data);
            return req.data;
        }
    } catch (error) {
        console.error(error);
        return null;
    }

    return null;
}

async function removeFromCart(cartId: string, lineId: string): Promise<Boolean> {
    try {
        const req = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove`, {
            cartId,
            lineIds: [lineId]
        });
        if (req.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }

    return false;
}

async function getCheckoutURL(cartId: string): Promise<string | null> {
    try {
        const req = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/checkout`, {
            cartId
        });
        if (req.status === 200) {
            return req.data.data.data.cart.checkoutUrl;
        }
    } catch (error) {
        console.error(error);
        return null;
    }

    return null;
}

export { createCart, addToCart, loadCart, removeFromCart, getCheckoutURL };
