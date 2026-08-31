const knowledgeBase = {
    greetings: {
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'how are you', 'fera', 'Uzet', 'ongiini'],
        response: "Hello! My name is **BOT ZARE.** \nWelcome to Eraz Intech. I'm here to help answer your questions about our services. How can I assist you today?"
    },
    
    services: {
        keywords: ['services', 'what do you offer', 'what do you do', 'offerings'],
        response: "We offer three main services:\n\n1. **Architectural Design** - Professional design for residential and commercial buildings\n2. **Graphic Design** - Creative branding, logos, and marketing materials\n3. **Drawing Drafting** - Precise drawings and construction documents\n\nWhich service would you like to know more about?"
    },
    
    architectural: {
        keywords: ['architectural', 'architecture', 'building design', 'house design', 'building', 'plan', 'building plans'],
        response: "Our architectural design services include:\n\n• Residential design (homes, apartments)\n• Commercial buildings\n• Interior space planning\n• 3D visualizations\n\nWe work closely with clients to create functional and beautiful spaces. Would you like to discuss a specific project?"
    },
    
    graphic: {
        keywords: ['graphic', 'logo', 'branding', 'marketing', 'design materials', 'Poster', 'mockup'],
        response: "Our graphic design services include:\n\n• Logo design and brand identity\n• Marketing materials (brochures, flyers)\n• Digital graphics for social media\n• Presentation materials\n• Signage design\n• Poster design\n• Logo design\n• E.T.C \n\n\nWe create designs that effectively communicate your brand message. What type of graphic design do you need?"
    },
    
    drafting: {
        keywords: ['drafting', 'cad', 'technical drawing', 'blueprint', 'construction drawing'],
        response: "Our technical drafting services include:\n\n• Construction documents\n• As-built drawings\n• Structural drawings\n• Electrical Layouts\n\nWe provide accurate and detailed technical drawings for construction. Do you have a specific drafting need?"
    },
    
    pricing: {
        keywords: ['price', 'cost', 'how much', 'pricing', 'rates', 'quote', 'estimate'],
        response: "Our pricing varies depending on the scope and complexity of each project. We offer competitive rates and can provide a customized quote based on your specific needs.\n\nFor a detailed estimate, please contact us at:\n📧 Email: erazintech@gmail.com\n📞 Phone: +264 81 825 6896\n\nWe'd be happy to discuss your project and provide a free consultation!"
    },
    
    contact: {
        keywords: ['contact', 'reach', 'call', 'email', 'phone', 'location', 'address'],
        response: "You can reach us through:\n\n📧 **Email:** erazintech@gmail.com\n📞 **Phone:** +264 81 825 6896\n📍 **Office Hours:** Monday - Friday, 7AM - 7PM\n\nWe typically respond within 24 hours. Feel free to send us a message about your project!"
    },
    
    portfolio: {
        keywords: ['portfolio', 'previous work', 'examples', 'projects', 'past projects', 'samples'],
        response: "We have completed numerous projects across residential, commercial, and graphic design sectors. Our portfolio includes modern homes, office buildings, retail spaces, and comprehensive brand identities.\n\nTo view our complete portfolio, please visit our website under Latest projects section."
    },
    
    timeline: {
        keywords: ['how long', 'timeline', 'duration', 'time frame', 'when', 'delivery'],
        response: "Project timelines vary based on complexity:\n\n• **Simple projects:** 1-2 weeks\n• **Medium projects:** 3-6 weeks\n• **Large projects:** 2-3 months\n\nWe'll provide a detailed timeline after understanding your specific requirements. Rush services are available for urgent projects."
    },
    
    process: {
        keywords: ['process', 'how does it work', 'steps', 'procedure', 'workflow'],
        response: "Our design process typically follows these steps:\n\n1. **Initial Consultation** - Discuss your vision and requirements\n2. **Concept Development** - Create initial design concepts\n3. **Review & Refinement** - Gather your feedback and refine\n4. **Final Design** - Deliver polished final products\n5. **Support** - Ongoing support for implementation\n\nWe keep you involved throughout the entire process!"
    },

    1: {
        keywords: ["email", "mail", "write to"],
        response: "You can email us at erazintech@gmail.com We typically respond within 24 hours."
    },

    2: {
    keywords: ["phone", "call", "contact number", "telephone"],
    response: "You can reach us by phone at +264 81 825 6896. Our phone lines are open during business hours."
  },

  3: {
    keywords: ["cancel", "cancellation", "cancel order"],
    response: "To cancel an order, please contact us as soon as possible. Orders can only be cancelled before they ship. Once shipped, you'll need to initiate a return instead."
  },

  4: {
    keywords: ["help", "support", "assistance", "need help"],
    response: "I'm here to help! Please tell me what you need assistance with, and I'll guide you through it."
  },

  5: {
    keywords: ["feedback", "review", "suggestion", "opinion"],
    response: "We love hearing from our customers! You can leave a review on our page."
  },

  6:  {
    keywords: ["social media", "facebook", "instagram", "twitter", "follow"],
    response: "Follow us on social media! Find us Eraz intech on Facebook and Instagram for the latest news and exclusive content."
  },
    
    
    thanks: {
        keywords: ['thank', 'thanks', 'appreciate', 'thank you', 'danki', 'tangi'],
        response: "You're very welcome! I'm happy to help. If you have any other questions about our architectural design, graphic design, or drawing drafting services, feel free to ask!"
    }
};

const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChat = document.getElementById('close-chat');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

chatbotIcon.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
    chatbotIcon.classList.add('hidden');
    userInput.focus();
});

closeChat.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
    chatbotIcon.classList.remove('hidden');
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addMessage(message, 'user');
    userInput.value = '';
    
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    messageContent.innerHTML = formatMessage(text);
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatMessage(text) {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    text = text.replace(/\n/g, '<br>');
    
    return text;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    
    const typingContent = document.createElement('div');
    typingContent.className = 'typing-indicator';
    typingContent.innerHTML = '<span></span><span></span><span></span>';
    
    typingDiv.appendChild(typingContent);
    chatMessages.appendChild(typingDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [category, data] of Object.entries(knowledgeBase)) {
        for (const keyword of data.keywords) {
            if (lowerMessage.includes(keyword.toLowerCase())) {
                return data.response;
            }
        }
    }
    
    return "I appreciate your question! However, I'm specifically designed to answer questions about our architectural design, graphic design, and drafting services.\n\nYou can ask me about:\n• Our services and offerings\n• Pricing and quotes\n• Project timelines\n• Our design process\n• Contact information\n\nFor other inquiries, please contact us directly at **erazintech@gmail.com** or call **+264 81 825 6896.**";
}
