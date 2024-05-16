import { Alert } from "react-native";

export const loginQuery = async ({email, password}) => {

    try {
        const response = await fetch('http://10.0.2.2:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key':'e16d5b497563265f80ce3e6f0a2bcf6bfe0230795a05240249409f8d5cc90fce0718abc31e047b558c23845129fd186a736c9aa8a73cb987290839b4aa38e765'
        },
        body: JSON.stringify({email, password}),
    })
        
    const data = await response.json();
    return data;
    } catch(error) {
        console.log(error);
       throw new Error(error);
    }

    }
