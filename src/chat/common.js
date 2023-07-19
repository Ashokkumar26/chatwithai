import DefaultText from "./defaultText";
import React, {useEffect, useState} from 'react';

export const useManageChat = () => {
    const [ chatList, setChatList ] = useState([])
    const [ userText, setUserText ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [ showDefault, setShowDefault ] = useState(true);
    const [ animation, setAnimation ] = useState(false);
    useEffect(() => {
         loadDataFromLocalstorage();
    }, []);
     const loadDataFromLocalstorage = () => {
        const chatContainer = document.querySelector(".chat-container");
        const themeButton = document.querySelector("#theme-btn");
        const themeColor = localStorage.getItem("themeColor");
        document.body.classList.toggle("light-mode", themeColor === "light_mode");
        themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
        chatList.length && setShowDefault(true);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
    }
    const copyResponse = (copyBtn) => {
        const reponseTextElement = copyBtn.parentElement.querySelector("p");
        navigator.clipboard.writeText(reponseTextElement.textContent);
        copyBtn.textContent = "done";
        setTimeout(() => copyBtn.textContent = "content_copy", 1000);
    }
     const handleOutgoingChat = async () => {
        const chatContainer = document.querySelector(".chat-container");
        if(!userText){
            return;
        }
        setChatList([...chatList, { user: userText }])
        setShowDefault(false);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        setTimeout(showTypingAnimation, 500);
    }
    
    const getChatResponse = async () => {
        const chatContainer = document.querySelector(".chat-container");
        const API_URL = "https://api.openai.com/v1/completions";
        const API_KEY = "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";
        setIsLoading(true);
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: userText,
                max_tokens: 2048,
                temperature: 0.2,
                n: 1,
                stop: null
            })
        }
        try {
            const response = await (await fetch(API_URL, requestOptions)).json();
            let ai = response.choices[0].text.trim()
            setChatList([...chatList, { user: userText, ai }])
        } catch (error) {
            let ai = "Oops! Something went wrong while retrieving the response. Please try again."
            setChatList([...chatList, { user: userText, ai }])
        }
        setIsLoading(false);
        setUserText('')
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
    }
    const showTypingAnimation = () => {
        const chatContainer = document.querySelector(".chat-container");
        setAnimation(true);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        getChatResponse();
    }
    const deleteHandler = () => {
        setChatList([]);
        setShowDefault(true);
        loadDataFromLocalstorage();
}
const themeChangeHandler = () => {
const themeButton = document.querySelector("#theme-btn");
document.body.classList.toggle("light-mode");
localStorage.setItem("themeColor", themeButton.innerText);
themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
}
const chatInputHandler = (e) => {
    setUserText(e.target.value);
}
const inputKeyChangeHandler = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleOutgoingChat();
    }
}
    return { isLoading, userText, animation, chatList, showDefault, copyResponse, loadDataFromLocalstorage, handleOutgoingChat, inputKeyChangeHandler, chatInputHandler, themeChangeHandler, deleteHandler }
}
