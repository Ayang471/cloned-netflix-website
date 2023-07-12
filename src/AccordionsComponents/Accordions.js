import React from 'react'
import '../stylesheets/Accordions.css'
import { ListofQuestions } from './ListofQuestions'
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import SubscriptionForm from '../components/SubscriptionForm'



function Accordions() {
    return (
        <div className="questions">
            <h1 >Frequently Asked Questions</h1>
            {ListofQuestions.map((list, index) => (
                <Accordion allowToggle key={index} >
                    <AccordionItem >
                            <AccordionButton backgroundColor='#2D2D2D'>
                                <Box as="span" flex='1' textAlign='left' backgroundColor='#2D2D2D' color='white' padding={20}>
                                    <h2>{list.question}</h2>
                                </Box>
                                <AccordionIcon color='#fff' backgroundColor='#2D2D2D' width='70px' fontSize='30px' />
                            </AccordionButton>
                        <AccordionPanel pb={4} style={{ color: 'white', padding: '10px', textAlign: 'left', fontSize: '18px', backgroundColor: '#2d2d2d' }}>
                            <p> {list.answer1}</p>
                            <p> {list.answer2}</p>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            ))}
             <div className='subscriptionForm'>
                <SubscriptionForm />
            </div>
        </div>

    )
}

export default Accordions